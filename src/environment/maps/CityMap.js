import { drawPlayers } from '../../ui/PlayerMarkers.js';
import {
  Group, Mesh, BufferGeometry, Float32BufferAttribute, BufferAttribute, MeshStandardMaterial, DoubleSide,
  BoxGeometry, ConeGeometry, CylinderGeometry, InstancedMesh, Matrix4, Quaternion, Vector3, Color,
} from 'three';
import { createCanvasTexture, noiseFill } from '../textures.js';
import { RoadNetwork } from './city/RoadNetwork.js';
import { GpsRoute } from './city/GpsRoute.js';
import { disposeObject3D, freezeStatic } from '../../utils/Helpers.js';
import { seededRandom } from '../../utils/MathUtils.js';
import { ChunkGrid } from './city/ChunkGrid.js';
import { ShadowCasters } from './city/ShadowCasters.js';

const WALLS = [
  ['#efe4cf', '#f3d9b8', '#e6ecef', '#f2e6a8', '#d9e8cf', '#f0d0c8', '#e2d4ef', '#fafafa'],   // casas
  ['#c9c2b6', '#d8b28a', '#b9c9d6', '#e8e0d0', '#a9b8a0', '#e0c090', '#d0a8a0', '#bfbfbf'],   // comércio
  ['#d8d8d4', '#c4ccd4', '#e6dccb', '#b8c0c8', '#d4c4b0', '#a8b4bc', '#e4e4e0', '#c8bca8'],   // prédios
];
const ROOF_TILES = ['#9c3d2b', '#a84a32', '#8a3426', '#7a4a3a', '#6b6b6b', '#9a5a3a', '#b05a3a', '#5e4a42'];
const CHUNK = 400;           // lado de cada região (m): culling por distância/frustum e LOD por região
const SHADOW_RADIUS = 100;   // m: cobre a área de sombra (±35 m) mais a sombra dos prédios mais altos
const OBSTACLE_CELL = 32;
const MINIMAP_SIZE = 2048;
const key = (i, j) => i * 100003 + j;

/**
 * Salto de Pirapora: ruas reais (OpenStreetMap) e construções/árvores geradas por tools/gerar_cidade.py.
 * Os dados (JSON) só são carregados quando o mapa é escolhido.
 */
export class CityMap {
  static async create(assets, config) {
    const data = await assets.loadJSON(config.data);
    return new CityMap(data, config);
  }

  constructor(D, config) {
    this.id = config.id;
    this.dataUrl = config.data;
    this.fogFar = 620;
    this.groundScale = 4.2;
    this.bodyClass = 'cidade';
    this.half = D.meia;
    this.names = D.nomes;
    this.start = D.inicio;
    this.group = new Group();
    this.rand = seededRandom(20240611);
    this.chunks = new ChunkGrid(CHUNK, this.group);

    const roads = D.ruas.map(r => ({ c: r[0], n: r[1], P: r.slice(2).map(v => v / 10) }));
    this.network = new RoadNetwork(roads, D.larguras);
    this.#buildRoads(roads, D);
    this.#buildBuildingsAndTrees(D);
    this.#buildMinimap(roads, D.larguras);
    this.gps = new GpsRoute(this.network, this.names, this.group);
    this.streetLabel = '';
    this.streetTimer = 0;
    freezeStatic(this.group);   // ruas, prédios e árvores não se movem (a rota e o marcador do GPS são atualizados à parte)
    this.gps.unfreeze();
  }

  // ------------------------------------------------------------------ ruas e calçadas
  #buildRoads(roads, D) {
    const asphalt = createCanvasTexture(256, 256, (g, w, h) => noiseFill(g, w, h, '#4a4c51', 7e3, 0.1));
    const dirt = createCanvasTexture(256, 256, (g, w, h) => noiseFill(g, w, h, '#8a6a45', 6e3, 0.12));
    const sidewalk = createCanvasTexture(256, 256, (g, w, h) => {
      noiseFill(g, w, h, '#b8b4ab', 4e3, 0.08);
      g.strokeStyle = 'rgba(0,0,0,.16)', g.lineWidth = 2;
      for (let k = 0; k <= 4; k++) g.beginPath(), g.moveTo(k * 64, 0), g.lineTo(k * 64, h), g.moveTo(0, k * 64), g.lineTo(w, k * 64), g.stroke();
    });
    const dashes = createCanvasTexture(8, 64, (g, w, h) => { g.clearRect(0, 0, w, h), g.fillStyle = '#f0c22e', g.fillRect(0, 0, w, h * 0.55); });

    const buffers = {};
    const buf = k => buffers[k] || (buffers[k] = { p: [], i: [] });
    const lines = { p: [], uv: [], i: [] };
    for (const r of roads) {
      const hw = D.larguras[r.c];
      if (r.c === 7) { ribbon(buf('dirt'), r.P, hw, 0.035); continue; }
      ribbon(buf('sidewalk'), r.P, hw + D.calcada, 0.018);
      ribbon(buf('asphalt'), r.P, hw, 0.04);
      if (r.c <= 2) centerLine(lines, r.P);
    }
    for (const t of D.pracas) {
      const B = buf('sidewalk'), q = B.p.length / 3;
      for (let k = 0; k < t.length; k += 2) B.p.push(t[k] / 10, 0.045, t[k + 1] / 10), B.i.push(q + k / 2);
    }
    const floorMaterial = (map, offset, extra) => new MeshStandardMaterial(Object.assign({
      map, roughness: 0.92, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: offset, polygonOffsetUnits: offset,
    }, extra || {}));
    if (buffers.sidewalk) this.#addFlatMeshes(buffers.sidewalk, floorMaterial(sidewalk, -1), 4);
    if (buffers.asphalt) this.#addFlatMeshes(buffers.asphalt, floorMaterial(asphalt, -2), 6);
    if (buffers.dirt) this.#addFlatMeshes(buffers.dirt, floorMaterial(dirt, -2), 6);
    if (lines.p.length) this.#addFlatMeshes(lines, floorMaterial(dashes, -3, { transparent: true, alphaTest: 0.5, roughness: 0.6 }), 1, true);
  }

  /**
   * Malhas planas (normais para cima, UV no espaço do mundo, sem emendas entre ruas), repartidas por
   * chunk: cada triângulo vai para a região do seu centro. Detalhes finos (faixas) somem no LOD distante.
   */
  #addFlatMeshes(B, material, uvScale, detail = false) {
    const P = B.p, I = B.i, n = P.length / 3;
    const byChunk = new Map();
    for (let t = 0; t < I.length; t += 3) {
      const a = I[t] * 3, b = I[t + 1] * 3, c = I[t + 2] * 3;
      const chunk = this.chunks.at((P[a] + P[b] + P[c]) / 3, (P[a + 2] + P[b + 2] + P[c + 2]) / 3);
      const list = byChunk.get(chunk);
      list ? list.push(I[t], I[t + 1], I[t + 2]) : byChunk.set(chunk, [I[t], I[t + 1], I[t + 2]]);
    }
    const remap = new Int32Array(n), stamp = new Int32Array(n).fill(-1);
    let pass = 0;
    for (const [chunk, tris] of byChunk) {
      pass++;
      const pos = [], uv = [], idx = new Uint32Array(tris.length);
      for (let t = 0; t < tris.length; t++) {
        const v = tris[t];
        if (stamp[v] !== pass) {
          stamp[v] = pass;
          remap[v] = pos.length / 3;
          pos.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]);
          if (B.uv) uv.push(B.uv[v * 2], B.uv[v * 2 + 1]);
          else uv.push(P[v * 3] / uvScale, P[v * 3 + 2] / uvScale);
        }
        idx[t] = remap[v];
      }
      const count = pos.length / 3, normals = new Float32Array(count * 3);
      for (let k = 0; k < count; k++) normals[k * 3 + 1] = 1;
      const g = new BufferGeometry();
      g.setAttribute('position', new Float32BufferAttribute(pos, 3));
      g.setAttribute('normal', new BufferAttribute(normals, 3));
      g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
      g.setIndex(new BufferAttribute(count > 65535 ? idx : Uint16Array.from(idx), 1));
      g.computeBoundingSphere();
      const mesh = new Mesh(g, material);
      mesh.receiveShadow = true;
      chunk.group.add(mesh);
      if (detail) chunk.detail.push(mesh);
    }
  }

  // ------------------------------------------------------------------ construções e árvores
  #buildBuildingsAndTrees(D) {
    const bodyGeo = new BoxGeometry(1, 1, 1); bodyGeo.translate(0, 0.5, 0);
    const roofGeo = new ConeGeometry(Math.SQRT1_2, 1, 4); roofGeo.rotateY(Math.PI / 4); roofGeo.translate(0, 0.5, 0);
    const slabGeo = new BoxGeometry(1, 1, 1); slabGeo.translate(0, 0.5, 0);
    // tronco sem tampas: o topo fica dentro da copa e a base no chão (as tampas nunca aparecem)
    const trunkGeo = new CylinderGeometry(0.25, 0.35, 3, 6, 1, true), crownGeo = new ConeGeometry(2.2, 7, 8);
    this.windowUniform = { value: 0 };
    const kinds = {
      body: [bodyGeo, createWindowMaterial(this.windowUniform)],
      roof: [roofGeo, new MeshStandardMaterial({ roughness: 0.8, flatShading: true })],
      slab: [slabGeo, new MeshStandardMaterial({ color: 0x8c8c88, roughness: 0.95 })],
      trunk: [trunkGeo, new MeshStandardMaterial({ color: 5913378, roughness: 1 })],
      crown: [crownGeo, new MeshStandardMaterial({ color: 16777215, roughness: 0.9 })],
    };

    const perChunk = new Map();     // chunk -> { tipo: [[matriz, cor], ...], trees: [[tronco, copa, cor], ...] }
    const listFor = (x, z) => {
      const chunk = this.chunks.at(x, z);
      if (!perChunk.has(chunk)) perChunk.set(chunk, { body: [], roof: [], slab: [], trunk: [], crown: [], trees: [] });
      return perChunk.get(chunk);
    };
    const m = new Matrix4(), q = new Quaternion(), up = new Vector3(0, 1, 0), pos = new Vector3(), scale = new Vector3(), color = new Color();
    const noRotation = new Quaternion();

    // construções: [x, z, ângulo*10 (graus), largura, profundidade, altura (dm), tipo, cor]
    this.buildingGrid = new Map();
    const B = D.construcoes;
    for (let k = 0; k < B.length; k += 8) {
      const x = B[k] / 10, z = B[k + 1] / 10, a = B[k + 2] / 10 * Math.PI / 180, w = B[k + 3] / 10, d = B[k + 4] / 10, h = B[k + 5] / 10, type = B[k + 6], c = B[k + 7];
      const bl = listFor(x, z);
      q.setFromAxisAngle(up, -a);
      bl.body.push([m.compose(pos.set(x, 0, z), q, scale.set(w, h, d)).clone(), WALLS[type][c]]);
      if (type === 0) bl.roof.push([m.compose(pos.set(x, h, z), q, scale.set(w * 1.1, 1.5 + this.rand() * 0.8, d * 1.1)).clone(), ROOF_TILES[c]]);
      else bl.slab.push([m.compose(pos.set(x, h, z), q, scale.set(w + 0.3, 0.35, d + 0.3)).clone(), null]);
      const obstacle = [x, z, Math.cos(a), Math.sin(a), w / 2, d / 2], r = Math.hypot(w, d) / 2 + 2;
      for (let i = Math.floor((x - r) / OBSTACLE_CELL); i <= Math.floor((x + r) / OBSTACLE_CELL); i++)
        for (let j = Math.floor((z - r) / OBSTACLE_CELL); j <= Math.floor((z + r) / OBSTACLE_CELL); j++) {
          const hk = key(i, j);
          this.buildingGrid.has(hk) ? this.buildingGrid.get(hk).push(obstacle) : this.buildingGrid.set(hk, [obstacle]);
        }
    }

    // árvores: [x, z, escala*100]
    this.treeGrid = new Map();
    const A = D.arvores;
    for (let k = 0; k < A.length; k += 3) {
      const x = A[k] / 10, z = A[k + 1] / 10, s = A[k + 2] / 100;
      scale.set(s, s, s);
      const trunk = m.compose(pos.set(x, 1.5 * s, z), noRotation, scale).clone();
      const crown = m.compose(pos.set(x, 5.5 * s, z), noRotation, scale).clone();
      listFor(x, z).trees.push([trunk, crown, color.setHSL(0.27 + this.rand() * 0.08, 0.45, 0.18 + this.rand() * 0.12).getHex()]);
      const hk = key(Math.floor(x / OBSTACLE_CELL), Math.floor(z / OBSTACLE_CELL)), t = [x, z, 0.4 * s];
      this.treeGrid.has(hk) ? this.treeGrid.get(hk).push(t) : this.treeGrid.set(hk, [t]);
    }

    // Uma malha instanciada por tipo e por chunk; geometrias e materiais são compartilhados.
    // Árvores em ordem embaralhada (fixa): "menos densidade" no LOD distante mostra um subconjunto espalhado.
    const shadowData = Object.fromEntries(Object.keys(kinds).map(n => [n, { matrices: [], x: [], z: [] }]));
    for (const [chunk, bl] of perChunk) {
      const trees = bl.trees;
      for (let i = trees.length - 1; i > 0; i--) { const j = Math.floor(this.rand() * (i + 1)); [trees[i], trees[j]] = [trees[j], trees[i]]; }
      for (const [trunk, crown, c] of trees) bl.trunk.push([trunk, null]), bl.crown.push([crown, c]);
      for (const [name, [geo, mat]] of Object.entries(kinds)) {
        const list = bl[name];
        if (!list.length) continue;
        const mesh = new InstancedMesh(geo, mat, list.length);
        const sd = shadowData[name];
        list.forEach(([mm, c], i) => {
          mesh.setMatrixAt(i, mm);
          if (c != null) mesh.setColorAt(i, color.set(c));
          for (let e = 0; e < 16; e++) sd.matrices.push(mm.elements[e]);
          sd.x.push(mm.elements[12]);
          sd.z.push(mm.elements[14]);
        });
        mesh.castShadow = false;                 // a sombra vem das ShadowCasters (só o que está perto)
        mesh.receiveShadow = name !== 'trunk';
        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
        mesh.computeBoundingSphere();
        chunk.group.add(mesh);
        if (name === 'trunk') chunk.detail.push(mesh);
        if (name === 'crown') chunk.thinned.push([mesh, list.length]);
      }
    }
    const casterKinds = {};
    for (const [name, [geometry, material]] of Object.entries(kinds)) {
      const sd = shadowData[name];
      casterKinds[name] = { geometry, material, matrices: new Float32Array(sd.matrices), x: new Float32Array(sd.x), z: new Float32Array(sd.z) };
    }
    this.shadowCasters = new ShadowCasters(casterKinds, this.group, SHADOW_RADIUS);
  }

  /**
   * Chamado a cada quadro: visibilidade/LOD das regiões (pela posição da câmera) e objetos que
   * projetam sombra (pela posição do jogador, que é o centro da área de sombra do sol).
   */
  updateView(camera, focus) {
    this.chunks.update(camera.position.x, camera.position.z);
    this.shadowCasters.update(focus.x, focus.z);
  }

  /** Distâncias de visão e de LOD, densidade distante e sombras (opções gráficas). */
  setDetail({ viewDistance, lodDistance, farDensity, shadows }) {
    this.chunks.configure({ viewDistance, lodDistance, farDensity });
    if (shadows !== undefined) this.shadowCasters.setEnabled(shadows);
  }

  // ------------------------------------------------------------------ minimapa (pré-desenhado uma vez)
  #buildMinimap(roads, halfWidths) {
    const M = this.half, MS = MINIMAP_SIZE;
    this.miniScale = MS / (2 * M + 200);
    const k = this.miniScale, X = v => (v + M + 100) * k;
    this.miniCanvas = document.createElement('canvas');
    this.miniCanvas.width = this.miniCanvas.height = MS;
    const g = this.miniCanvas.getContext('2d');
    g.fillStyle = 'rgba(20,32,20,.55)', g.fillRect(0, 0, MS, MS), g.lineCap = g.lineJoin = 'round';
    for (const r of roads.slice().sort((a, b) => b.c - a.c)) {
      g.strokeStyle = r.c === 7 ? 'rgba(190,150,100,.8)' : r.c <= 1 ? '#ffd84a' : r.c === 2 ? '#ffffff' : 'rgba(255,255,255,.75)';
      g.lineWidth = Math.max(1.2, halfWidths[r.c] * 2 * k * 1.6);
      g.beginPath();
      for (let i = 0; i < r.P.length; i += 2) i ? g.lineTo(X(r.P[i]), X(r.P[i + 1])) : g.moveTo(X(r.P[i]), X(r.P[i + 1]));
      g.stroke();
    }
  }

  // ------------------------------------------------------------------ consultas usadas pela física e pelo jogador
  isOnRoad(x, z) {
    return this.network.isOnRoad(x, z);
  }

  surfaceUnder(state, out) {
    out.distance = 0;
    out.onRoad = this.network.isOnRoad(state.x, state.z);
    return out;
  }

  /** Árvores nas 9 células em volta do ponto (sem criar arrays a cada chamada). */
  forEachObstacleNear(x, z, fn) {
    const i = Math.floor(x / OBSTACLE_CELL), j = Math.floor(z / OBSTACLE_CELL);
    for (let a = -1; a <= 1; a++)
      for (let b = -1; b <= 1; b++) {
        const list = this.treeGrid.get(key(i + a, j + b));
        if (list) for (const t of list) fn(t);
      }
  }

  /** Círculo (carro ou pessoa) contra as construções (retângulos girados). */
  collideBody(body) {
    const R = 1.05;
    const list = this.buildingGrid.get(key(Math.floor(body.x / OBSTACLE_CELL), Math.floor(body.z / OBSTACLE_CELL)));
    if (!list) return;
    for (const o of list) {
      const dx = body.x - o[0], dz = body.z - o[1], lx = dx * o[2] + dz * o[3], lz = -dx * o[3] + dz * o[2];
      if (Math.abs(lx) > o[4] + R || Math.abs(lz) > o[5] + R) continue;
      const cx = Math.max(-o[4], Math.min(o[4], lx)), cz = Math.max(-o[5], Math.min(o[5], lz));
      let ex = lx - cx, ez = lz - cz, pen;
      const dd = Math.hypot(ex, ez);
      if (dd > 1e-4) {
        if (dd >= R) continue;
        ex /= dd, ez /= dd, pen = R - dd;
      } else {
        const px = o[4] - Math.abs(lx), pz = o[5] - Math.abs(lz);
        if (px < pz) ex = Math.sign(lx) || 1, ez = 0, pen = px + R;
        else ex = 0, ez = Math.sign(lz) || 1, pen = pz + R;
      }
      const nx = ex * o[2] - ez * o[3], nz = ex * o[3] + ez * o[2];
      body.x += nx * pen;
      body.z += nz * pen;
      const vn = body.vx * nx + body.vz * nz;
      if (vn < 0) body.vx = (body.vx - 1.3 * vn * nx) * 0.8, body.vz = (body.vz - 1.3 * vn * nz) * 0.8, body.r *= 0.6;
    }
    this.limit(body);
  }

  collideVehicle(state) {
    this.collideBody(state);
  }

  limit(body) {
    const L = this.half - 8;
    if (Math.abs(body.x) > L) body.x = Math.sign(body.x) * L, body.vx *= -0.3;
    if (Math.abs(body.z) > L) body.z = Math.sign(body.z) * L, body.vz *= -0.3;
  }

  /** Largada no centro da cidade, ou rua mais próxima (tecla "voltar à rua"), no sentido em que o carro estava. */
  spawn(state, nearCurrent) {
    if (!nearCurrent) {
      state.x = this.start[0], state.z = this.start[1], state.h = this.start[2];
      return;
    }
    const p = this.network.nearestDrivable(state.x, state.z);
    state.x = p.x;
    state.z = p.z;
    state.h = Math.cos(p.heading - state.h) >= 0 ? p.heading : p.heading + Math.PI;
  }

  updateProgress() {}
  shiftTimers() {}
  resetLaps() {}

  /** Nome da rua mais próxima (recalculado a cada 15 quadros). */
  streetName(x, z) {
    if ((this.streetTimer -= 1) > 0) return this.streetLabel;
    this.streetTimer = 15;
    const p = this.network.nearest(x, z);
    this.streetLabel = (p && p[0] < p[2][4] + 12 && this.names[p[2][5]]) || 'Salto de Pirapora';
    return this.streetLabel;
  }

  timerText(_now, focus) {
    return this.streetName(focus.x, focus.z);
  }

  /** Minimapa circular girando com o jogador (~520 m de diâmetro), com rota e destino do GPS. */
  drawMinimap(g, canvas, focus, remote) {
    const W = canvas.width, k = this.miniScale, f = W / 520 / k, s = W / 520, M = this.half;
    g.clearRect(0, 0, W, W);
    g.save();
    g.beginPath(), g.arc(W / 2, W / 2, W / 2 - 2, 0, 7), g.clip();
    g.translate(W / 2, W / 2);
    g.rotate(-Math.PI / 2 - Math.atan2(Math.cos(focus.h), Math.sin(focus.h)));
    g.drawImage(this.miniCanvas, -(focus.x + M + 100) * k * f, -(focus.z + M + 100) * k * f, MINIMAP_SIZE * f, MINIMAP_SIZE * f);
    // projeção reaproveitada entre quadros (sem closure/array novos a cada desenho)
    const mp = this.miniProjector || (this.miniProjector = { out: [0, 0], x: 0, z: 0, s: 1, fn: null });
    mp.x = focus.x, mp.z = focus.z, mp.s = s;
    mp.fn ||= (x, z) => (mp.out[0] = (x - mp.x) * mp.s, mp.out[1] = (z - mp.z) * mp.s, mp.out);
    this.gps.drawOn(g, mp.fn, 4);
    const dest = this.gps.destination;
    if (dest) {     // destino preso na borda quando está longe
      let dx = (dest.x - focus.x) * s, dz = (dest.z - focus.z) * s;
      const l = Math.hypot(dx, dz), R = W / 2 - 9;
      if (l > R) dx *= R / l, dz *= R / l;
      g.fillStyle = '#b44dff', g.strokeStyle = '#fff', g.lineWidth = 2;
      g.beginPath(), g.arc(dx, dz, 6, 0, 7), g.fill(), g.stroke();
    }
    // outros jogadores (no mesmo referencial girado); os de longe ficam presos na borda
    drawPlayers(g, remote, mp.fn, { size: 7, radius: W / 2 - 8 });
    g.restore();
    g.fillStyle = '#ff4d3a';
    g.beginPath(), g.moveTo(W / 2, W / 2 - 8), g.lineTo(W / 2 + 5.5, W / 2 + 6), g.lineTo(W / 2 - 5.5, W / 2 + 6), g.closePath(), g.fill();
  }

  /** Mapa em tela cheia (vetorial), usado pelo GPS. */
  drawFullMap(g, project, scale, focus, remote) {
    const out = [0, 0], P = (x, z) => project(x, z, out);
    g.lineCap = g.lineJoin = 'round';
    for (const r of this.network.roads.slice().sort((a, b) => b.c - a.c)) {
      g.strokeStyle = r.c === 7 ? '#8a7458' : r.c <= 1 ? '#f2c94c' : r.c === 2 ? '#ffffff' : '#c9cdd2';
      g.lineWidth = Math.max(r.c <= 2 ? 2 : 1, this.network.halfWidths[r.c] * 2 * scale);
      g.beginPath();
      for (let k = 0; k < r.P.length; k += 2) {
        const [x, y] = P(r.P[k], r.P[k + 1]);
        k ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.stroke();
    }
    this.gps.drawOn(g, P, Math.max(4, 3 * scale));
    const dest = this.gps.destination;
    if (dest) {
      const [x, y] = P(dest.x, dest.z);
      g.fillStyle = '#b44dff', g.strokeStyle = '#fff', g.lineWidth = 2;
      g.beginPath(), g.arc(x, y - 16, 9, Math.PI * 0.85, Math.PI * 0.15), g.lineTo(x, y), g.closePath(), g.fill(), g.stroke();
      g.fillStyle = '#fff', g.beginPath(), g.arc(x, y - 16, 3.5, 0, 7), g.fill();
    }
    drawPlayers(g, remote, P, { size: 10, labels: true });
    const [cx, cy] = P(focus.x, focus.z), fx = Math.sin(focus.h), fz = Math.cos(focus.h);
    g.fillStyle = '#ff4d3a', g.strokeStyle = '#fff', g.lineWidth = 2;
    g.beginPath();
    g.moveTo(cx + fx * 11, cy + fz * 11), g.lineTo(cx - fx * 7 + fz * 7, cy - fz * 7 - fx * 7), g.lineTo(cx - fx * 3, cy - fz * 3), g.lineTo(cx - fx * 7 - fz * 7, cy - fz * 7 + fx * 7);
    g.closePath(), g.fill(), g.stroke();
  }

  setNight(night) {
    this.windowUniform.value = night ? 1 : 0;
  }

  dispose() {
    this.gps.dispose();
    disposeObject3D(this.group);
    this.miniCanvas.width = this.miniCanvas.height = 0;   // libera o bitmap do minimapa
    this.network = this.buildingGrid = this.treeGrid = this.miniCanvas = null;
  }
}

// ---------------------------------------------------------------------- geometria das vias
/** Faixa ao longo da polilinha, com junções em "miter" e discos nas pontas e curvas. */
function ribbon(B, P, hw, y) {
  const n = P.length / 2;
  let prev = -1;
  for (let k = 0; k < n; k++) {
    const x = P[k * 2], z = P[k * 2 + 1];
    const a = k > 0 ? k - 1 : 0, b = k < n - 1 ? k + 1 : n - 1;
    let d0x = x - P[a * 2], d0z = z - P[a * 2 + 1], d1x = P[b * 2] - x, d1z = P[b * 2 + 1] - z;
    const l0 = Math.hypot(d0x, d0z) || 1, l1 = Math.hypot(d1x, d1z) || 1;
    d0x /= l0, d0z /= l0, d1x /= l1, d1z /= l1;
    if (k === 0) d0x = d1x, d0z = d1z;
    if (k === n - 1) d1x = d0x, d1z = d0z;
    let tx = d0x + d1x, tz = d0z + d1z;
    const tl = Math.hypot(tx, tz);
    tl < 1e-6 ? (tx = d1x, tz = d1z) : (tx /= tl, tz /= tl);
    const miter = Math.min(2.5, 1 / Math.max(0.4, tx * d1x + tz * d1z));
    const cur = B.p.length / 3;
    B.p.push(x - tz * hw * miter, y, z + tx * hw * miter, x + tz * hw * miter, y, z - tx * hw * miter);
    if (prev >= 0) B.i.push(prev, prev + 1, cur, prev + 1, cur + 1, cur);
    prev = cur;
    const bend = k > 0 && k < n - 1 && d0x * d1x + d0z * d1z < 0.985;
    if (k === 0 || k === n - 1 || bend) {
      const c = B.p.length / 3, S = 12;
      B.p.push(x, y, z);
      for (let s = 0; s <= S; s++) { const t = s / S * Math.PI * 2; B.p.push(x + Math.cos(t) * hw, y, z + Math.sin(t) * hw); }
      for (let s = 0; s < S; s++) B.i.push(c, c + 1 + s, c + 2 + s);
    }
  }
}

/** Faixa amarela tracejada no eixo (UV ao longo da rua). */
function centerLine(B, P) {
  let dist = 0;
  for (let k = 0; k < P.length / 2 - 1; k++) {
    const x0 = P[k * 2], z0 = P[k * 2 + 1], x1 = P[k * 2 + 2], z1 = P[k * 2 + 3], L = Math.hypot(x1 - x0, z1 - z0);
    if (L < 0.01) continue;
    const nx = -(z1 - z0) / L * 0.07, nz = (x1 - x0) / L * 0.07, q = B.p.length / 3;
    B.p.push(x0 + nx, 0.052, z0 + nz, x0 - nx, 0.052, z0 - nz, x1 + nx, 0.052, z1 + nz, x1 - nx, 0.052, z1 - nz);
    B.uv.push(0, dist / 6, 1, dist / 6, 0, (dist + L) / 6, 1, (dist + L) / 6);
    B.i.push(q, q + 1, q + 2, q + 1, q + 3, q + 2);
    dist += L;
  }
}

/** Material das paredes com janelas procedurais (acendem à noite), calculadas no shader. */
function createWindowMaterial(nightUniform) {
  const mat = new MeshStandardMaterial({ roughness: 0.88 });
  mat.onBeforeCompile = sh => {
    sh.uniforms.uNoite = nightUniform;
    sh.vertexShader = 'varying vec3 vWP; varying vec3 vWN;\n' + sh.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
      vec4 wp4 = vec4(transformed, 1.0);
      mat3 nm3 = mat3(modelMatrix);
      #ifdef USE_INSTANCING
        wp4 = instanceMatrix * wp4; nm3 = nm3 * mat3(instanceMatrix);
      #endif
      vWP = (modelMatrix * wp4).xyz; vWN = normalize(nm3 * objectNormal);`);
    sh.fragmentShader = 'uniform float uNoite; varying vec3 vWP; varying vec3 vWN; float gJan = 0.0; float gLuz = 0.0;\n' + sh.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
      if (abs(vWN.y) < 0.5) {
        vec3 tg = normalize(cross(vec3(0.0, 1.0, 0.0), vWN));
        float hu = dot(vWP, tg) / 3.1, hv = (vWP.y - 0.15) / 3.0;
        float fu = fract(hu), fv = fract(hv);
        gJan = step(0.24, fu) * step(fu, 0.76) * step(0.34, fv) * step(fv, 0.8) * step(0.0, hv);
        float cel = fract(sin(dot(floor(vec2(hu, hv)) + floor(vWP.xz * 0.05), vec2(12.9898, 78.233))) * 43758.5453);
        gLuz = gJan * step(0.45, cel);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.09, 0.12), gJan * 0.92);
        diffuseColor.rgb *= 1.0 - 0.35 * (1.0 - smoothstep(0.0, 0.7, vWP.y));
      }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      totalEmissiveRadiance += gLuz * uNoite * vec3(1.0, 0.78, 0.45) * 1.6;`);
  };
  return mat;
}
