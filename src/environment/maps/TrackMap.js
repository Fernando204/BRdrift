import {
  Group, Vector3, Color, Matrix4, Quaternion, Mesh, BufferGeometry, Float32BufferAttribute, MeshStandardMaterial,
  CylinderGeometry, ConeGeometry, BoxGeometry, InstancedMesh, CatmullRomCurve3,
} from 'three';
import { createCanvasTexture } from '../textures.js';
import { disposeObject3D, storage } from '../../utils/Helpers.js';
import { formatLapTime } from '../../utils/MathUtils.js';
import { STORAGE_KEYS } from '../../utils/Constants.js';

const CONTROL_POINTS = [
  [0, -170], [95, -175], [175, -115], [185, -25], [120, 35], [135, 115], [65, 180],
  [-45, 150], [-75, 80], [-155, 60], [-195, -30], [-135, -120], [-60, -105],
];
const SAMPLES = 700;          // pontos ao longo da pista
const ROAD_HALF_WIDTH = 8.2;  // até onde conta como asfalto (inclui a zebra)
const TREE_COUNT = 420;

/** Circuito fechado com zebras, pórtico de largada, árvores e contagem de voltas. */
export class TrackMap {
  static async create() {
    return new TrackMap();
  }

  constructor() {
    this.id = 'circuito';
    this.fogFar = 700;
    this.groundScale = 1;
    this.bodyClass = '';
    this.group = new Group();

    const curve = new CatmullRomCurve3(CONTROL_POINTS.map(p => new Vector3(p[0], 0, p[1])), true, 'centripetal');
    this.length = curve.getLength();
    this.points = curve.getSpacedPoints(SAMPLES).slice(0, SAMPLES);
    this.tangents = this.points.map((_, i) => curve.getTangentAt(i / SAMPLES));
    this.normals = this.tangents.map(t => new Vector3(t.z, 0, -t.x));
    this.index = 0;              // índice do ponto da pista mais próximo do carro

    this.#buildRoad();
    this.#buildGate();
    this.#buildTrees();
    this.#buildMinimapPath();

    this.best = +storage.get(STORAGE_KEYS.bestLap, 0) || 0;
    this.resetLaps();
    this.onLap = null;           // (mensagem, recorde?) => void
  }

  // ------------------------------------------------------------------ construção
  #ribbon(from, to, y, texture, offset) {
    const pos = [], uv = [], idx = [];
    for (let h = 0; h <= SAMPLES; h++) {
      const p = this.points[h % SAMPLES], n = this.normals[h % SAMPLES];
      pos.push(p.x + n.x * from, y, p.z + n.z * from, p.x + n.x * to, y, p.z + n.z * to);
      uv.push(0, h / SAMPLES, 1, h / SAMPLES);
      if (h < SAMPLES) { const d = h * 2; idx.push(d, d + 1, d + 2, d + 1, d + 3, d + 2); }
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    if (geo.attributes.normal.getY(0) < 0) { geo.setIndex(idx.reverse()); geo.computeVertexNormals(); }
    const mesh = new Mesh(geo, new MeshStandardMaterial({
      map: texture, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: offset, polygonOffsetUnits: offset,
    }));
    mesh.receiveShadow = true;
    this.group.add(mesh);
  }

  #buildRoad() {
    const asphalt = createCanvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#3b3e43', g.fillRect(0, 0, w, h);
      for (let n = 0; n < 5e3; n++) {
        const s = (Math.random() * 255) | 0;
        g.fillStyle = `rgba(${s},${s},${s},.12)`, g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
      }
      g.fillStyle = '#e8e8e8', g.fillRect(w * 0.035, 0, 7, h), g.fillRect(w * 0.965 - 7, 0, 7, h), g.fillRect(w / 2 - 3, 0, 6, h * 0.5);
    }, 1, this.length / 12);
    const curb = createCanvasTexture(64, 64, (g, w, h) => {
      g.fillStyle = '#dcdcdc', g.fillRect(0, 0, w, h), g.fillStyle = '#c8191f', g.fillRect(0, 0, w, h / 2);
    }, 1, this.length / 2.6);
    this.#ribbon(-7, 7, 0.02, asphalt, -2);
    this.#ribbon(7, 8.3, 0.03, curb, -3);
    this.#ribbon(-8.3, -7, 0.03, curb, -3);
  }

  #buildGate() {
    const gate = new Group();
    const metal = new MeshStandardMaterial({ color: 14540253, metalness: 0.6, roughness: 0.4 });
    const postGeo = new CylinderGeometry(0.25, 0.25, 7);
    for (const x of [-8.8, 8.8]) {
      const post = new Mesh(postGeo, metal);
      post.position.set(x, 3.5, 0);
      post.castShadow = true;
      gate.add(post);
    }
    const checker = createCanvasTexture(256, 32, (g) => {
      for (let a = 0; a < 32; a++) for (let c = 0; c < 4; c++) g.fillStyle = (a + c) % 2 ? '#fff' : '#111', g.fillRect(a * 8, c * 8, 8, 8);
    });
    const banner = new Mesh(new BoxGeometry(18, 1.4, 0.3), new MeshStandardMaterial({ map: checker }));
    banner.position.y = 6.6;
    banner.castShadow = true;
    gate.add(banner);
    gate.position.copy(this.points[0]);
    gate.rotation.y = Math.atan2(this.tangents[0].x, this.tangents[0].z);
    this.group.add(gate);
  }

  #buildTrees() {
    this.trees = [];   // [x, z, raio]
    const trunks = new InstancedMesh(new CylinderGeometry(0.25, 0.35, 3, 6, 1, true), new MeshStandardMaterial({ color: 5913378, roughness: 1 }), TREE_COUNT);
    const crowns = new InstancedMesh(new ConeGeometry(2.2, 7, 8), new MeshStandardMaterial({ color: 16777215, roughness: 0.9 }), TREE_COUNT);
    const m = new Matrix4(), q = new Quaternion(), pos = new Vector3(), scale = new Vector3(), color = new Color();
    for (let t = 0; t < TREE_COUNT;) {
      const x = (Math.random() - 0.5) * 840, z = (Math.random() - 0.5) * 840;
      this.index = 0;
      if (this.distanceToTrack(x, z) < 18) continue;
      const r = 0.8 + Math.random() * 0.8;
      scale.set(r, r, r);
      trunks.setMatrixAt(t, m.compose(pos.set(x, 1.5 * r, z), q, scale));
      crowns.setMatrixAt(t, m.compose(pos.set(x, 5.5 * r, z), q, scale));
      crowns.setColorAt(t, color.setHSL(0.27 + Math.random() * 0.08, 0.45, 0.18 + Math.random() * 0.12));
      this.trees.push([x, z, 0.4 * r]);
      t++;
    }
    this.index = 0;
    trunks.castShadow = crowns.castShadow = true;
    this.group.add(trunks, crowns);
  }

  #buildMinimapPath() {
    let minX = 1e9, minZ = 1e9, maxX = -1e9, maxZ = -1e9;
    for (const p of this.points) minX = Math.min(minX, p.x), maxX = Math.max(maxX, p.x), minZ = Math.min(minZ, p.z), maxZ = Math.max(maxZ, p.z);
    this.mini = { minX, minZ, scale: 0, path: null, size: 0 };
    this.miniBounds = { minX, minZ, maxX, maxZ };
  }

  // ------------------------------------------------------------------ consultas da pista
  /** Distância até a linha central; atualiza o índice do ponto mais próximo (busca local, depois global). */
  distanceToTrack(x, z) {
    let best = 1e9, bestIdx = this.index;
    const test = r => {
      const p = this.points[r], d = (p.x - x) ** 2 + (p.z - z) ** 2;
      if (d < best) best = d, bestIdx = r;
    };
    for (let r = -25; r <= 25; r++) test((this.index + r + SAMPLES) % SAMPLES);
    if (best > 900) for (let r = 0; r < SAMPLES; r++) test(r);
    this.index = bestIdx;
    return Math.sqrt(best);
  }

  /** Igual a distanceToTrack, mas sem mexer no índice (usado pelas marcas de pneu). */
  #localDistance(x, z) {
    let best = 1e9;
    for (let n = -25; n <= 25; n++) {
      const p = this.points[(this.index + n + SAMPLES) % SAMPLES], d = (p.x - x) ** 2 + (p.z - z) ** 2;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  }

  isOnRoad(x, z) {
    return this.#localDistance(x, z) < ROAD_HALF_WIDTH;
  }

  /** Antes do passo da física: em que tipo de piso o carro está. */
  surfaceUnder(state, out) {
    out.distance = this.distanceToTrack(state.x, state.z);
    out.onRoad = out.distance < ROAD_HALF_WIDTH;
    return out;
  }

  forEachObstacleNear(x, z, fn) {
    for (const t of this.trees) fn(t);
  }

  /** Depois do passo: se o carro foi longe demais (> 160 m), puxa de volta para perto da pista. */
  collideVehicle(state, surface) {
    if (surface.distance <= 160) return;
    const p = this.points[this.index], dx = p.x - state.x, dz = p.z - state.z, d = Math.hypot(dx, dz);
    state.x += dx / d * (surface.distance - 160);
    state.z += dz / d * (surface.distance - 160);
    state.vx *= 0.5;
    state.vz *= 0.5;
  }

  collideBody() { /* o circuito não tem construções */ }

  /** Posiciona o carro: na largada, ou no ponto da pista mais próximo (tecla "voltar à pista"). */
  spawn(state, nearCurrent) {
    const i = nearCurrent ? this.index : SAMPLES - 6;
    const p = this.points[i], t = this.tangents[i];
    state.x = p.x;
    state.z = p.z;
    state.h = Math.atan2(t.x, t.z);
    this.index = i;
  }

  // ------------------------------------------------------------------ voltas
  resetLaps() {
    this.sectors = 7;
    this.lapRunning = false;
    this.lapStart = 0;
    this.lapsDone = 0;
  }

  /** Compensa o tempo em que o jogo ficou pausado. */
  shiftTimers(ms) {
    if (this.lapRunning) this.lapStart += ms;
  }

  /** Chamado após cada passo da física: setores, volta completa e recorde. */
  updateProgress(state) {
    const prev = this.index, N = SAMPLES;
    this.distanceToTrack(state.x, state.z);
    const i = this.index;
    if (i > N * 0.25 && i < N * 0.5) this.sectors |= 1;
    if (i > N * 0.5 && i < N * 0.75) this.sectors |= 2;
    if (i > N * 0.75 && i < N * 0.95) this.sectors |= 4;
    if (!(prev > N * 0.9 && i < N * 0.1 && this.sectors === 7)) return;
    const now = performance.now();
    if (this.lapRunning) {
      const lapMs = now - this.lapStart;
      this.lapsDone++;
      let text = 'Volta ' + this.lapsDone + ': ' + formatLapTime(lapMs);
      const record = !this.best || lapMs < this.best;
      if (record) {
        this.best = lapMs;
        storage.set(STORAGE_KEYS.bestLap, lapMs);
        text += ' – novo recorde!';
      }
      this.onLap?.(text);
    }
    this.lapRunning = true;
    this.lapStart = now;
    this.sectors = 0;
  }

  get currentLap() {
    return this.lapsDone + 1;
  }

  timerText(now) {
    return this.lapRunning ? formatLapTime(now - this.lapStart) : '0:00.000';
  }

  // ------------------------------------------------------------------ minimapa
  drawMinimap(g, canvas, focus) {
    const W = canvas.width;
    if (this.mini.size !== W) {
      const b = this.miniBounds, scale = (W - 20) / Math.max(b.maxX - b.minX, b.maxZ - b.minZ);
      const path = new Path2D();
      this.points.forEach((p, i) => {
        const x = (p.x - b.minX) * scale + 10, y = (p.z - b.minZ) * scale + 10;
        i ? path.lineTo(x, y) : path.moveTo(x, y);
      });
      path.closePath();
      this.mini = { scale, path, size: W };
    }
    const b = this.miniBounds, s = this.mini.scale;
    g.clearRect(0, 0, W, canvas.height);
    g.lineWidth = 5;
    g.strokeStyle = 'rgba(255,255,255,.75)';
    g.stroke(this.mini.path);
    g.fillStyle = '#ff4d3a';
    g.beginPath();
    g.arc((focus.x - b.minX) * s + 10, (focus.z - b.minZ) * s + 10, 4.5, 0, 7);
    g.fill();
  }

  setNight() {}

  dispose() {
    disposeObject3D(this.group);
    this.trees = this.points = this.tangents = this.normals = null;
  }
}
