/**
 * Medição de desempenho: tempo de quadro, CPU por etapa (física, mundo, render), GPU (quando o
 * navegador expõe EXT_disjoint_timer_query_webgl2), chamadas de desenho, triângulos e memória.
 *
 * Custo quase nulo: só lê performance.now() em poucos pontos por quadro. Os números são
 * acumulados e resumidos em janelas de 0,5 s (painel) ou durante um benchmark inteiro.
 */
const SECTIONS = ['physics', 'world', 'render'];
const QUERY_POOL = 6;

export class PerformanceMonitor {
  constructor(renderer) {
    this.renderer = renderer;
    this.gl = renderer.getContext();
    this.timerExt = this.gl.getExtension?.('EXT_disjoint_timer_query_webgl2') || null;
    this.queries = [];
    this.pendingQueries = [];
    this.activeQuery = null;
    this.sectionStart = Object.fromEntries(SECTIONS.map(s => [s, 0]));
    this.window = this.#emptyWindow();
    this.lastFrameAt = 0;
    this.frameStartAt = 0;
    this.stats = null;              // último resumo (lido pelo painel)
    this.onStats = null;            // (stats) => void, chamado a cada janela
    this.windowSeconds = 0.5;
    this.windowStart = performance.now();
    this.recording = null;          // benchmark: soma de todos os quadros
    const dbg = this.gl.getExtension?.('WEBGL_debug_renderer_info');
    this.gpuName = dbg ? this.gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : 'desconhecida';
  }

  #emptyWindow() {
    return { frames: 0, frameMs: 0, maxFrameMs: 0, cpuMs: 0, physics: 0, world: 0, render: 0, gpuMs: 0, gpuSamples: 0, calls: 0, triangles: 0 };
  }

  frameStart(now) {
    this.frameStartAt = performance.now();
    if (this.lastFrameAt) {
      const ms = now - this.lastFrameAt;
      this.window.frameMs += ms;
      if (ms > this.window.maxFrameMs) this.window.maxFrameMs = ms;
      if (this.recording) this.recording.frameTimes.push(ms);
    }
    this.lastFrameAt = now;
    this.#collectGpu();
  }

  begin(section) {
    this.sectionStart[section] = performance.now();
  }

  end(section) {
    const ms = performance.now() - this.sectionStart[section];
    this.window[section] += ms;
    if (this.recording) this.recording[section] += ms;
  }

  /** Envolve a chamada de render com a consulta de tempo de GPU. */
  beginGpu() {
    if (!this.timerExt) return;
    const q = this.queries.pop() || this.gl.createQuery();
    this.gl.beginQuery(this.timerExt.TIME_ELAPSED_EXT, q);
    this.activeQuery = q;
  }

  endGpu() {
    if (!this.activeQuery) return;
    this.gl.endQuery(this.timerExt.TIME_ELAPSED_EXT);
    if (this.pendingQueries.length < QUERY_POOL) this.pendingQueries.push(this.activeQuery);
    else this.gl.deleteQuery(this.activeQuery);
    this.activeQuery = null;
  }

  #collectGpu() {
    const gl = this.gl;
    if (!this.timerExt || !this.pendingQueries.length) return;
    const disjoint = gl.getParameter(this.timerExt.GPU_DISJOINT_EXT);
    while (this.pendingQueries.length) {
      const q = this.pendingQueries[0];
      if (!gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) break;
      this.pendingQueries.shift();
      if (!disjoint) {
        const ms = gl.getQueryParameter(q, gl.QUERY_RESULT) / 1e6;
        this.window.gpuMs += ms;
        this.window.gpuSamples++;
        if (this.recording) this.recording.gpuMs += ms, this.recording.gpuSamples++;
      }
      this.queries.push(q);
    }
  }

  frameEnd() {
    const w = this.window, info = this.renderer.info.render;
    const cpu = performance.now() - this.frameStartAt;
    w.cpuMs += cpu;
    w.calls += info.calls;
    w.triangles += info.triangles;
    w.frames++;
    if (this.recording) {
      const r = this.recording;
      r.frames++, r.cpuMs += cpu, r.calls += info.calls, r.triangles += info.triangles;
      r.cpuTimes.push(cpu);
    }
    const now = performance.now();
    if (now - this.windowStart >= this.windowSeconds * 1e3) {
      this.stats = this.#summarize(w, (now - this.windowStart) / 1e3);
      this.window = this.#emptyWindow();
      this.windowStart = now;
      this.onStats?.(this.stats);
    }
  }

  #summarize(w, seconds) {
    const n = Math.max(1, w.frames), mem = this.renderer.info.memory, heap = performance.memory;
    const s = {
      fps: w.frames / seconds,
      frameMs: w.frameMs / n,
      maxFrameMs: w.maxFrameMs,
      cpuMs: w.cpuMs / n,
      physicsMs: w.physics / n,
      worldMs: w.world / n,
      renderMs: w.render / n,
      gpuMs: w.gpuSamples ? w.gpuMs / w.gpuSamples : null,
      calls: Math.round(w.calls / n),
      triangles: Math.round(w.triangles / n),
      geometries: mem.geometries,
      textures: mem.textures,
      programs: this.renderer.info.programs?.length ?? 0,
      heapMB: heap ? heap.usedJSHeapSize / 1048576 : null,
    };
    s.bottleneck = bottleneck(s);
    return s;
  }

  // ------------------------------------------------------------------ benchmark
  startRecording() {
    this.recording = { frames: 0, cpuMs: 0, physics: 0, world: 0, render: 0, gpuMs: 0, gpuSamples: 0, calls: 0, triangles: 0, frameTimes: [], cpuTimes: [] };
  }

  stopRecording() {
    const r = this.recording;
    this.recording = null;
    if (!r) return null;
    const n = Math.max(1, r.frames), sorted = r.cpuTimes.slice().sort((a, b) => a - b), frames = r.frameTimes.slice().sort((a, b) => a - b);
    const pct = (arr, p) => arr.length ? arr[Math.min(arr.length - 1, Math.floor(arr.length * p))] : 0;
    const mem = this.renderer.info.memory, heap = performance.memory;
    return {
      frames: r.frames,
      cpuMs: r.cpuMs / n,
      cpuP95Ms: pct(sorted, 0.95),
      physicsMs: r.physics / n,
      worldMs: r.world / n,
      renderMs: r.render / n,
      gpuMs: r.gpuSamples ? r.gpuMs / r.gpuSamples : null,
      frameMs: frames.length ? frames.reduce((a, b) => a + b, 0) / frames.length : 0,
      frameP95Ms: pct(frames, 0.95),
      calls: Math.round(r.calls / n),
      triangles: Math.round(r.triangles / n),
      geometries: mem.geometries,
      textures: mem.textures,
      heapMB: heap ? heap.usedJSHeapSize / 1048576 : null,
      gpu: this.gpuName,
    };
  }
}

/** Indica o provável gargalo: a GPU quando ela leva mais que a CPU para concluir o quadro. */
function bottleneck(s) {
  const budget = 16.7;
  if (s.gpuMs != null && s.gpuMs > s.cpuMs && s.gpuMs > budget * 0.8) return 'GPU';
  if (s.cpuMs > budget * 0.8) return 'CPU';
  if (s.frameMs > budget * 1.2) return s.gpuMs == null ? 'GPU?' : 'sincronização';
  return 'ok';
}
