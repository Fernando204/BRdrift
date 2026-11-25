/**
 * Benchmark reproduzível: percorre sempre o mesmo trajeto, a 15 m/s, com passo de tempo fixo
 * (1/60 s), câmera de perseguição e GPS ativo na cidade. Assim, duas versões do jogo renderizam
 * exatamente os mesmos quadros e os números podem ser comparados.
 *
 *   index.html?bench=salto            cidade, de dia
 *   index.html?bench=salto&noite=1    cidade, à noite (faróis ligados)
 *   index.html?bench=circuito         circuito
 *   &quadros=600                      quantidade de quadros medidos (padrão 600, mais 60 de aquecimento)
 *
 * O resultado aparece no console, em window.__benchResult e na tela.
 */
const SPEED = 15;
const WARMUP = 60;
const CITY_TARGET = [1400, 900];   // destino fixo do trajeto na cidade (m, a partir do centro)

export class Benchmark {
  static fromUrl() {
    const p = new URLSearchParams(location.search);
    const mapId = p.get('bench');
    if (!mapId) return null;
    return new Benchmark({ mapId, night: p.get('noite') === '1', frames: Math.max(60, +p.get('quadros') || 600) });
  }

  constructor({ mapId, night, frames }) {
    this.mapId = mapId;
    this.night = night;
    this.frames = frames;
    this.frame = 0;
    this.running = false;
    this.path = null;     // [x0, z0, x1, z1, ...]
    this.cumulative = null;
    this.fixedDt = 1 / 60;
  }

  async start(game) {
    await game.selectMap(this.mapId);
    game.setNight(this.night);
    game.start();
    game.enterVehicle();
    game.cameraController.mode = 0;            // perseguição
    const ctrl = game.controller;
    ctrl.engineOn = true;
    if (this.night) ctrl.lightsMode = 1;
    this.path = buildPath(game.world.map);
    if (game.world.map.gps) {
      const n = this.path.length;
      game.world.map.gps.setDestination(this.path[n - 2], this.path[n - 1]);
    }
    let length = 0;
    this.cumulative = [0];
    for (let i = 2; i < this.path.length; i += 2) {
      length += Math.hypot(this.path[i] - this.path[i - 2], this.path[i + 1] - this.path[i - 1]);
      this.cumulative.push(length);
    }
    this.length = length;
    this.game = game;
    this.running = true;
    this.frame = 0;
    this.#place();
  }

  /** Posiciona o carro no ponto do trajeto correspondente ao quadro atual. */
  #place() {
    const s = Math.min(this.length - 0.1, this.frame * this.fixedDt * SPEED);
    let i = 1;
    while (i < this.cumulative.length - 1 && this.cumulative[i] < s) i++;
    const P = this.path, t = (s - this.cumulative[i - 1]) / Math.max(1e-6, this.cumulative[i] - this.cumulative[i - 1]);
    const x0 = P[(i - 1) * 2], z0 = P[(i - 1) * 2 + 1], x1 = P[i * 2], z1 = P[i * 2 + 1];
    const st = this.game.controller.state, h = Math.atan2(x1 - x0, z1 - z0);
    st.x = x0 + (x1 - x0) * t;
    st.z = z0 + (z1 - z0) * t;
    st.h = h;
    st.vx = Math.sin(h) * SPEED;
    st.vz = Math.cos(h) * SPEED;
    st.r = st.ax = st.ay = st.pitch = st.roll = 0;
    st.vf = SPEED;
  }

  /** Chamado depois da física: mantém o trajeto determinístico. */
  afterPhysics() {
    this.#place();
  }

  /** Chamado ao fim de cada quadro. */
  endFrame() {
    if (!this.running) return;
    this.frame++;
    const monitor = this.game.monitor;
    if (this.frame === WARMUP) monitor.startRecording();
    if (this.frame === WARMUP + this.frames) {
      this.running = false;
      const result = { cenario: this.mapId + (this.night ? ' (noite)' : ''), ...monitor.stopRecording() };
      window.__benchResult = result;
      console.log('[benchmark]', JSON.stringify(result));
      console.table(result);
      this.game.diagnostics.showBenchmark(result);
    }
  }
}

/** Trajeto: na cidade, a rota do GPS entre o ponto de largada e um destino fixo; no circuito, uma volta. */
function buildPath(map) {
  if (map.network) {
    const net = map.network, o = net.project(map.start[0], map.start[1]), d = net.project(CITY_TARGET[0], CITY_TARGET[1]);
    const route = o && d && net.route(o, d);
    if (route && route.pts.length >= 4) return Array.from(route.pts);
  }
  const pts = [];
  for (const p of map.points) pts.push(p.x, p.z);
  pts.push(map.points[0].x, map.points[0].z);
  return pts;
}
