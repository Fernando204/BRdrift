import { $ } from '../utils/Helpers.js';

const fmt = (v, digits = 1) => (v == null ? '–' : v.toFixed(digits));
const thousands = v => (v >= 1e6 ? (v / 1e6).toFixed(2) + ' M' : v >= 1e3 ? (v / 1e3).toFixed(1) + ' k' : String(v));

/** Painel discreto de desempenho (F3 ou Menu → Opções). Atualiza o texto só 2× por segundo. */
export class DiagnosticsPanel {
  constructor(monitor) {
    this.monitor = monitor;
    this.el = $('diag');
    this.visible = false;
    monitor.onStats = stats => this.visible && this.#render(stats);
  }

  setVisible(visible) {
    this.visible = visible;
    this.el.hidden = !visible;
    if (visible && this.monitor.stats) this.#render(this.monitor.stats);
  }

  toggle() {
    this.setVisible(!this.visible);
    return this.visible;
  }

  /** Mostra o resultado do benchmark e mantém na tela. */
  showBenchmark(r) {
    this.monitor.onStats = null;
    this.setVisible(true);
    this.el.textContent = `BENCHMARK ${r.cenario} · ${r.frames} quadros\n` +
      `quadro ${fmt(r.frameMs, 2)} ms (p95 ${fmt(r.frameP95Ms, 1)}) · CPU ${fmt(r.cpuMs, 2)} ms (p95 ${fmt(r.cpuP95Ms, 2)})\n` +
      `física ${fmt(r.physicsMs, 3)} · mundo ${fmt(r.worldMs, 3)} · render ${fmt(r.renderMs, 3)} · GPU ${r.gpuMs == null ? 'n/d' : fmt(r.gpuMs, 2)}\n` +
      `${r.calls} draw calls · ${thousands(r.triangles)} triângulos · ${r.geometries} geometrias · ${r.textures} texturas`;
  }

  #render(s) {
    this.el.textContent =
      `${fmt(s.fps, 0)} FPS · ${fmt(s.frameMs)} ms (pior ${fmt(s.maxFrameMs, 0)})\n` +
      `CPU ${fmt(s.cpuMs, 2)} ms  física ${fmt(s.physicsMs, 2)} · mundo ${fmt(s.worldMs, 2)} · render ${fmt(s.renderMs, 2)}\n` +
      `GPU ${s.gpuMs == null ? 'n/d' : fmt(s.gpuMs, 2) + ' ms'} · gargalo: ${s.bottleneck}\n` +
      `${s.calls} draw calls · ${thousands(s.triangles)} triângulos\n` +
      `${s.geometries} geometrias · ${s.textures} texturas · ${s.programs} shaders` +
      (s.heapMB == null ? '' : ` · JS ${fmt(s.heapMB, 0)} MB`);
  }
}
