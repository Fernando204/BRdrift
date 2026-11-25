import { Vector3 } from 'three';
import { Vehicle } from '../vehicles/Vehicle.js';
import { VEHICLES } from '../vehicles/vehicles.config.js';
import { angleDiff } from '../utils/MathUtils.js';

const INTERP_DELAY = 120;      // ms: desenha os outros um pouco no passado para interpolar entre dois estados
const LABEL_RANGE = 160;       // m: nomes só aparecem perto
const CAR_RADIUS = 1.0;        // colisão simples: dois círculos por carro (frente e traseira)
const CAR_HALF = 1.05;
const _v = new Vector3();

/** Flags do estado enviadas pela rede (bits). */
export const STATE_FLAGS = { BRAKE: 1, REVERSE: 2, LIGHTS_SHIFT: 2, IND_L: 16, IND_R: 32, ENGINE: 64 };

/**
 * Carros dos outros jogadores da sala: carrega o modelo (compartilhado), aplica a aparência
 * comprada, interpola as posições recebidas e mostra o nome acima do carro.
 */
export class RemotePlayers {
  constructor(scene, vehicles, camera, labelLayer) {
    this.scene = scene;
    this.vehicles = vehicles;       // VehicleSystem (modelos com contagem de uso)
    this.camera = camera;
    this.labelLayer = labelLayer;
    this.players = new Map();       // id -> jogador remoto
  }

  get count() { return this.players.size; }

  async add({ id, name, look }) {
    if (this.players.has(id)) return;
    const p = {
      id, name, look, vehicle: null, carId: null, loading: null, snapshots: [],
      proxy: { state: { x: 0, z: 0, h: 0, vf: 0, steer: 0, pitch: 0, roll: 0, brake: false, reverse: false }, lightsMode: 0, indicatorLeftOn: false, indicatorRightOn: false },
      label: document.createElement('div'),
    };
    p.label.className = 'player-tag';
    p.label.textContent = name;
    this.labelLayer.appendChild(p.label);
    this.players.set(id, p);
    await this.#loadCar(p);
  }

  remove(id) {
    const p = this.players.get(id);
    if (!p) return;
    this.players.delete(id);
    p.label.remove();
    this.#unloadCar(p);
  }

  clear() {
    for (const id of [...this.players.keys()]) this.remove(id);
  }

  setLook(id, look) {
    const p = this.players.get(id);
    if (!p) return;
    p.look = look;
    if (look.carId !== p.carId) this.#loadCar(p);
    else p.vehicle?.applyLook(look);
  }

  pushState(id, values, flags) {
    const p = this.players.get(id);
    if (!p || values.length < 9) return;
    p.snapshots.push({ t: performance.now(), v: values, f: flags });
    if (p.snapshots.length > 20) p.snapshots.shift();
  }

  async #loadCar(p) {
    const carId = VEHICLES[p.look?.carId] ? p.look.carId : 'chevette';
    const token = (p.loading = {});
    const gltf = await this.vehicles.acquireModel(carId);
    if (p.loading !== token || !this.players.has(p.id)) {   // saiu ou trocou de carro enquanto carregava
      this.vehicles.releaseModel(carId);
      return;
    }
    this.#unloadCar(p);
    p.vehicle = new Vehicle(gltf, VEHICLES[carId], { remote: true });
    p.carId = carId;
    p.vehicle.applyLook(p.look);
    this.scene.add(p.vehicle.root);
  }

  #unloadCar(p) {
    if (!p.vehicle) return;
    p.vehicle.dispose();
    this.vehicles.releaseModel(p.carId);
    p.vehicle = null;
    p.carId = null;
  }

  /** Interpola cada carro entre os dois estados que cercam o instante (agora − 120 ms). */
  update(dt) {
    const renderTime = performance.now() - INTERP_DELAY;
    for (const p of this.players.values()) {
      const snaps = p.snapshots;
      if (!p.vehicle || !snaps.length) continue;
      while (snaps.length > 2 && snaps[1].t <= renderTime) snaps.shift();
      const a = snaps[0], b = snaps[1] || a;
      const span = b.t - a.t, k = span > 0 ? Math.min(1, Math.max(0, (renderTime - a.t) / span)) : 1;
      const s = p.proxy.state, A = a.v, B = b.v;
      s.x = A[0] + (B[0] - A[0]) * k;
      s.z = A[1] + (B[1] - A[1]) * k;
      s.h = A[2] + angleDiff(B[2], A[2]) * k;
      s.steer = A[5] + (B[5] - A[5]) * k;
      s.pitch = A[6] + (B[6] - A[6]) * k;
      s.roll = A[7] + (B[7] - A[7]) * k;
      s.vf = A[8] + (B[8] - A[8]) * k;
      const f = b.f;
      s.brake = !!(f & STATE_FLAGS.BRAKE);
      s.reverse = !!(f & STATE_FLAGS.REVERSE);
      p.proxy.lightsMode = (f >> STATE_FLAGS.LIGHTS_SHIFT) & 3;
      const blink = (performance.now() % 660) < 330;
      p.proxy.indicatorLeftOn = blink && !!(f & STATE_FLAGS.IND_L);
      p.proxy.indicatorRightOn = blink && !!(f & STATE_FLAGS.IND_R);
      p.vehicle.update(dt, p.proxy);
    }
  }

  /** Nomes acima dos carros (posição projetada na tela). */
  updateLabels(visible) {
    const cam = this.camera, w = innerWidth, h = innerHeight;
    for (const p of this.players.values()) {
      const s = p.proxy.state, el = p.label;
      _v.set(s.x, 2.0, s.z);
      const dist = _v.distanceTo(cam.position);
      _v.project(cam);
      const show = visible && p.vehicle && p.snapshots.length && _v.z < 1 && dist < LABEL_RANGE;
      if (!show) { if (el.style.display !== 'none') el.style.display = 'none'; continue; }
      el.style.display = '';
      el.style.transform = `translate(${((_v.x + 1) / 2 * w).toFixed(1)}px, ${((1 - _v.y) / 2 * h).toFixed(1)}px) translate(-50%, -100%)`;
      el.style.opacity = String(Math.max(0.35, 1 - dist / LABEL_RANGE));
    }
  }

  /**
   * Colisão simples entre o seu carro e os dos outros: cada carro vira dois círculos (frente e traseira).
   * Só o seu carro é empurrado (cada cliente cuida do próprio), perdendo velocidade na direção do impacto.
   */
  collideLocal(state) {
    for (const p of this.players.values()) {
      if (!p.vehicle || !p.snapshots.length) continue;
      const o = p.proxy.state;
      for (const sa of [-1, 1]) for (const sb of [-1, 1]) {
        const ax = state.x + Math.sin(state.h) * CAR_HALF * sa, az = state.z + Math.cos(state.h) * CAR_HALF * sa;
        const bx = o.x + Math.sin(o.h) * CAR_HALF * sb, bz = o.z + Math.cos(o.h) * CAR_HALF * sb;
        let dx = ax - bx, dz = az - bz;
        const d = Math.hypot(dx, dz), min = CAR_RADIUS * 2;
        if (d >= min || d < 1e-4) continue;
        dx /= d, dz /= d;
        state.x += dx * (min - d);
        state.z += dz * (min - d);
        const vn = state.vx * dx + state.vz * dz;
        if (vn < 0) state.vx -= 1.4 * vn * dx, state.vz -= 1.4 * vn * dz, state.vx *= 0.85, state.vz *= 0.85;
      }
    }
  }
}
