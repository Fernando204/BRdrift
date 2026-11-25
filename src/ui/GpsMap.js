import { $ } from '../utils/Helpers.js';
import { clamp } from '../utils/MathUtils.js';

/**
 * Mapa em tela cheia (tecla M): arrastar move, roda/pinça dá zoom, clique numa rua marca o destino,
 * botão direito limpa. Só existe em mapas com GPS (a cidade).
 */
export class GpsMap {
  constructor(game) {
    this.game = game;
    this.open = false;
    this.view = { x: 0, z: 0, s: 0.3 };
    this.pointers = new Map();
    this.dragged = false;
    this.canvas = $('gpscv');
    this.ctx = this.canvas.getContext('2d');
    this.#bind();
  }

  get gps() {
    return this.game.world.map?.gps;
  }

  show(focus) {
    if (!this.gps) {
      this.game.hud.message('O mapa com GPS est\xE1 dispon\xEDvel em Salto de Pirapora', 2.5);
      return;
    }
    this.open = true;
    this.game.input.releaseAll();
    Object.assign(this.view, { x: focus.x, z: focus.z, s: Math.min(innerWidth, innerHeight) / 1400 });
    $('gps').hidden = false;
    this.#resize();
  }

  hide() {
    this.open = false;
    $('gps').hidden = true;
    this.pointers.clear();
    this.game.loop.resetClock();
  }

  #resize() {
    const r = Math.min(devicePixelRatio, 2);
    this.canvas.width = innerWidth * r;
    this.canvas.height = innerHeight * r;
    this.draw();
  }

  draw() {
    if (!this.open) return;
    const g = this.ctx, r = this.canvas.width / innerWidth, W = innerWidth, H = innerHeight, v = this.view;
    g.setTransform(r, 0, 0, r, 0, 0);
    g.fillStyle = '#1d2a1f';
    g.fillRect(0, 0, W, H);
    this.game.world.map.drawFullMap(g, (x, z, out) => (out[0] = W / 2 + (x - v.x) * v.s, out[1] = H / 2 + (z - v.z) * v.s, out), v.s, this.game.focus, this.game.remote);
  }

  #zoom(f, mx, my) {
    const W = innerWidth, H = innerHeight, v = this.view;
    const wx = v.x + (mx - W / 2) / v.s, wz = v.z + (my - H / 2) / v.s;
    v.s = clamp(v.s * f, 0.06, 5);
    const L = this.game.world.map.half;
    v.x = clamp(wx - (mx - W / 2) / v.s, -L, L);
    v.z = clamp(wz - (my - H / 2) / v.s, -L, L);
    this.draw();
  }

  #bind() {
    const c = this.canvas;
    c.addEventListener('contextmenu', e => e.preventDefault());
    c.addEventListener('pointerdown', e => {
      c.setPointerCapture(e.pointerId);
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, button: e.button });
      this.dragged = this.pointers.size > 1;
    });
    c.addEventListener('pointermove', e => {
      const p = this.pointers.get(e.pointerId);
      if (!p) return;
      if (this.pointers.size === 2) {     // pinça
        const [a, b] = [...this.pointers.values()], d0 = Math.hypot(a.x - b.x, a.y - b.y);
        p.x = e.clientX, p.y = e.clientY;
        const d1 = Math.hypot(a.x - b.x, a.y - b.y);
        if (d0 > 0) this.#zoom(d1 / d0, (a.x + b.x) / 2, (a.y + b.y) / 2);
        this.dragged = true;
        return;
      }
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX, p.y = e.clientY;
      if (Math.hypot(e.clientX - p.x0, e.clientY - p.y0) > 5) this.dragged = true;
      if (this.dragged) this.view.x -= dx / this.view.s, this.view.z -= dy / this.view.s, this.draw();
    });
    const release = e => {
      const p = this.pointers.get(e.pointerId);
      if (!p) return;
      this.pointers.delete(e.pointerId);
      if (this.dragged || e.type === 'pointercancel') {
        if (!this.pointers.size) this.dragged = false;
        return;
      }
      if (p.button === 2) {
        this.gps.clear();
        this.draw();
        return;
      }
      const x = this.view.x + (e.clientX - innerWidth / 2) / this.view.s, z = this.view.z + (e.clientY - innerHeight / 2) / this.view.s;
      if (this.gps.setDestination(x, z)) this.gps.update(this.game.focus, 1), this.draw();
      else $('gpsinfo').textContent = 'Clique mais perto de uma rua para marcar o destino.';
    };
    c.addEventListener('pointerup', release);
    c.addEventListener('pointercancel', release);
    c.addEventListener('wheel', e => { e.preventDefault(); this.#zoom(Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY); }, { passive: false });
    $('gpsfecha').onclick = () => this.hide();
    $('gpslimpa').onclick = () => { this.gps.clear(); this.draw(); };
    $('gpsmais').onclick = () => this.#zoom(1.4, innerWidth / 2, innerHeight / 2);
    $('gpsmenos').onclick = () => this.#zoom(1 / 1.4, innerWidth / 2, innerHeight / 2);
    addEventListener('resize', () => this.open && this.#resize());
  }
}
