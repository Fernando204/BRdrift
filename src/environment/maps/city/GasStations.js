import {
  Mesh, BoxGeometry, PlaneGeometry, CylinderGeometry, MeshStandardMaterial, Matrix4, Quaternion, Vector3, Euler,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { createCanvasTexture } from '../../textures.js';
import { POSTOS } from './postos.js';

/**
 * Postos de combustível de Salto de Pirapora (nos endereços reais; ver tools/gerar_postos.py).
 *
 * Cada posto ocupa um terreno junto à calçada, num referencial próprio: u ao longo da rua (-14..14 m)
 * e v para dentro do terreno (0..24 m). Nele ficam a cobertura, duas ilhas com duas bombas cada,
 * a loja de conveniência e o totem com o preço. As peças de todos os postos são juntadas numa malha
 * por material (poucas chamadas de desenho para a cidade inteira).
 */
export const LOT = { u0: -14, u1: 14, v0: 0, v1: 24 };
export const LOT_Y = 0.03;                     // piso do posto (acima da grama e da calçada)
export const ISLANDS = [6.5, 12.5];            // v do centro de cada ilha de bombas
const ISLAND_HALF = [3.2, 0.6];
const BAY_OFFSET = 1.75;                       // centro do carro abastecendo, a partir do centro da ilha
const SHOP = { u: 9.75, v: 19.75, w: 7.5, d: 7, h: 3.6 };
const TOTEM = { u: -12.2, v: 1.6 };
const BRAND = 0x127c6a;                        // verde-petróleo genérico (sem marca real)

export class GasStations {
  constructor(parent) {
    this.list = POSTOS.map(p => {
      const c = Math.cos(p.a), s = Math.sin(p.a);
      return { ...p, ux: c, uz: s, vx: -s, vz: c };
    });
    this.rects = [];        // obstáculos retangulares [x, z, cos, sin, meia largura (u), meia profundidade (v)]
    this.circles = [];      // obstáculos circulares [x, z, raio]
    this.materials = this.#materials();
    this.#build(parent);
  }

  // ------------------------------------------------------------------ referencial de cada posto
  toWorld(st, u, v, out = { x: 0, z: 0 }) {
    out.x = st.x + st.ux * u + st.vx * v;
    out.z = st.z + st.uz * u + st.vz * v;
    return out;
  }

  toLocal(st, x, z, out = { u: 0, v: 0 }) {
    const dx = x - st.x, dz = z - st.z;
    out.u = dx * st.ux + dz * st.uz;
    out.v = dx * st.vx + dz * st.vz;
    return out;
  }

  /** Rumo (como o do carro) de uma direção (du, dv) do posto. */
  heading(st, du, dv) {
    return Math.atan2(st.ux * du + st.vx * dv, st.uz * du + st.vz * dv);
  }

  /** Posto cujo terreno (com margem) contém o ponto. */
  lotAt(x, z, margin = 0) {
    const p = this.#local;
    for (const st of this.list) {
      if (Math.abs(x - st.x) > 40 || Math.abs(z - st.z) > 40) continue;
      this.toLocal(st, x, z, p);
      if (p.u > LOT.u0 - margin && p.u < LOT.u1 + margin && p.v > LOT.v0 - margin && p.v < LOT.v1 + margin) return st;
    }
    return null;
  }
  #local = { u: 0, v: 0 };

  /** Uma construção gerada (retângulo girado) encosta em algum terreno de posto? */
  overlapsLot(x, z, w, d, angle) {
    const r = Math.hypot(w, d) / 2;
    if (!this.list.some(st => Math.hypot(x - st.x, z - st.z) < 40 + r)) return false;
    const c = Math.cos(angle), s = Math.sin(angle);
    for (const [a, b] of [[0, 0], [-1, -1], [1, -1], [1, 1], [-1, 1], [0, -1], [0, 1], [-1, 0], [1, 0]]) {
      const px = x + c * a * w / 2 - s * b * d / 2, pz = z + s * a * w / 2 + c * b * d / 2;
      if (this.lotAt(px, pz, 1.5)) return true;
    }
    // terreno menor que a construção: confere os cantos do terreno dentro dela
    for (const st of this.list) {
      for (const [u, v] of [[LOT.u0, LOT.v0], [LOT.u1, LOT.v0], [LOT.u0, LOT.v1], [LOT.u1, LOT.v1]]) {
        const q = this.toWorld(st, u, v), dx = q.x - x, dz = q.z - z;
        if (Math.abs(dx * c + dz * s) < w / 2 && Math.abs(-dx * s + dz * c) < d / 2) return true;
      }
    }
    return false;
  }

  /** Posto mais perto de (x, z). */
  nearest(x, z) {
    let best = null, bd = Infinity;
    for (const st of this.list) {
      const d = Math.hypot(x - st.x, z - st.z);
      if (d < bd) bd = d, best = st;
    }
    return best;
  }

  /** Vagas de abastecimento (dos dois lados de cada ilha), em coordenadas do posto. */
  static bays() {
    return ISLANDS.flatMap((v, island) => [-1, 1].map(side => ({ island, side, u: 0, v: v + side * BAY_OFFSET })));
  }

  // ------------------------------------------------------------------ desenho no minimapa e no mapa do GPS
  drawIcons(g, project, size) {
    for (const st of this.list) {
      const c = this.toWorld(st, 0, 12), [x, y] = project(c.x, c.z);
      g.fillStyle = '#127c6a', g.strokeStyle = '#fff', g.lineWidth = Math.max(1.5, size * 0.18);
      g.beginPath(), g.roundRect(x - size / 2, y - size / 2, size, size, size * 0.25), g.fill(), g.stroke();
      // bomba estilizada
      g.fillStyle = '#fff';
      g.fillRect(x - size * 0.22, y - size * 0.28, size * 0.3, size * 0.56);
      g.fillStyle = '#127c6a', g.fillRect(x - size * 0.16, y - size * 0.2, size * 0.18, size * 0.14);
      g.strokeStyle = '#fff', g.lineWidth = Math.max(1, size * 0.08);
      g.beginPath(), g.moveTo(x + size * 0.08, y - size * 0.18), g.lineTo(x + size * 0.24, y - size * 0.06), g.lineTo(x + size * 0.24, y + size * 0.2), g.stroke();
    }
  }

  // ------------------------------------------------------------------ noite: luzes da cobertura e da loja
  setNight(night) {
    const m = this.materials;
    m.light.emissiveIntensity = night ? 1.8 : 0.25;
    m.glass.emissiveIntensity = night ? 0.9 : 0.05;
    m.totem.emissiveIntensity = m.fascia.emissiveIntensity = m.shopSign.emissiveIntensity = m.pumpFace.emissiveIntensity = night ? 0.65 : 0;
  }

  /** Preço do litro no totem (vem do servidor). */
  setPrice(price) {
    const tex = this.materials.totem.map;
    drawTotem(tex.image.getContext('2d'), tex.image.width, tex.image.height, price);
    tex.needsUpdate = true;
  }

  // ------------------------------------------------------------------ construção
  #materials() {
    const std = (color, extra) => new MeshStandardMaterial(Object.assign({ color, roughness: 0.8 }, extra || {}));
    const textured = (tex, extra) => new MeshStandardMaterial(Object.assign({ map: tex, roughness: 0.6, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0 }, extra || {}));
    const fasciaTex = createCanvasTexture(1024, 64, (g, w, h) => {
      g.fillStyle = '#127c6a', g.fillRect(0, 0, w, h);
      g.fillStyle = '#f5d020', g.fillRect(0, h - 8, w, 8);
      g.fillStyle = '#fff', g.font = 'bold 40px system-ui,sans-serif', g.textAlign = 'center', g.textBaseline = 'middle';
      g.fillText('POSTO  •  COMBUSTÍVEL  •  POSTO', w / 2, h / 2 - 3);
    });
    const pumpTex = createCanvasTexture(128, 256, (g, w, h) => {
      g.fillStyle = '#f2f2ee', g.fillRect(0, 0, w, h);
      g.fillStyle = '#127c6a', g.fillRect(0, 0, w, 46);
      g.fillStyle = '#fff', g.font = 'bold 22px system-ui,sans-serif', g.textAlign = 'center', g.textBaseline = 'middle';
      g.fillText('GASOLINA', w / 2, 24);
      g.fillStyle = '#1b2026', g.fillRect(14, 62, w - 28, 70);
      g.fillStyle = '#7dff9a', g.font = 'bold 26px monospace', g.fillText('00,00', w / 2, 86), g.font = 'bold 18px monospace', g.fillText('0,000 L', w / 2, 114);
      g.fillStyle = '#c9ccd0', g.fillRect(24, 150, w - 48, 22);
      g.fillStyle = '#2a2f36', g.fillRect(40, 190, w - 80, 50);
    });
    const glassTex = createCanvasTexture(256, 128, (g, w, h) => {
      g.fillStyle = '#2b3d4f', g.fillRect(0, 0, w, h);
      g.fillStyle = 'rgba(255,240,200,.55)';
      for (let i = 0; i < 4; i++) g.fillRect(12 + i * 60, 18, 48, 70);    // prateleiras iluminadas
      g.strokeStyle = '#8a9099', g.lineWidth = 6;
      for (let i = 0; i <= 4; i++) g.beginPath(), g.moveTo(i * w / 4, 0), g.lineTo(i * w / 4, h), g.stroke();
      g.strokeRect(0, 0, w, h);
    });
    const shopSignTex = createCanvasTexture(512, 64, (g, w, h) => {
      g.fillStyle = '#127c6a', g.fillRect(0, 0, w, h);
      g.fillStyle = '#fff', g.font = 'bold 38px system-ui,sans-serif', g.textAlign = 'center', g.textBaseline = 'middle';
      g.fillText('CONVENIÊNCIA', w / 2, h / 2 + 1);
    });
    const totemTex = createCanvasTexture(256, 320, (g, w, h) => drawTotem(g, w, h, 6));
    for (const t of [fasciaTex, pumpTex, glassTex, shopSignTex, totemTex]) t.repeat.set(1, 1);
    return {
      slab: std(0xa9aaa6, { roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }),
      white: std(0xf1f1ec, { roughness: 0.6 }),
      brand: std(BRAND, { roughness: 0.5 }),
      fascia: textured(fasciaTex),
      light: std(0xffffff, { emissive: 0xfff3d6, emissiveIntensity: 0.25, roughness: 0.4 }),
      metal: std(0xbfc3c7, { roughness: 0.4, metalness: 0.6 }),
      island: std(0xe0c341, { roughness: 0.85 }),
      pumpFace: textured(pumpTex),
      glass: textured(glassTex, { roughness: 0.2, metalness: 0.2 }),
      shopSign: textured(shopSignTex),
      roof: std(0x7e7e7a, { roughness: 0.9 }),
      totem: textured(totemTex),
    };
  }

  #build(parent) {
    const parts = Object.fromEntries(Object.keys(this.materials).map(k => [k, []]));
    const m = new Matrix4(), q = new Quaternion(), e = new Euler(), pos = new Vector3(), one = new Vector3(1, 1, 1);
    for (const st of this.list) {
      const world = new Matrix4().compose(new Vector3(st.x, 0, st.z), new Quaternion().setFromEuler(new Euler(0, -st.a, 0)), one);
      const add = (kind, geo, u, y, v, rx = 0, ry = 0) => {
        m.compose(pos.set(u, y, v), q.setFromEuler(e.set(rx, ry, 0)), one);
        parts[kind].push(geo.clone().applyMatrix4(m).applyMatrix4(world));
      };
      const box = (w, h, d) => new BoxGeometry(w, h, d), plane = (w, h) => new PlaneGeometry(w, h);
      // piso
      add('slab', plane(LOT.u1 - LOT.u0, LOT.v1 - LOT.v0), (LOT.u0 + LOT.u1) / 2, LOT_Y, (LOT.v0 + LOT.v1) / 2, -Math.PI / 2);
      // cobertura: corpo, faixa com o nome nos quatro lados e painel de luz embaixo
      add('white', box(16, 0.9, 12), 0, 5.25, 9.5);
      add('fascia', plane(16, 0.9), 0, 5.25, 3.49, 0, Math.PI);
      add('fascia', plane(16, 0.9), 0, 5.25, 15.51);
      add('fascia', plane(12, 0.9), 8.01, 5.25, 9.5, 0, Math.PI / 2);
      add('fascia', plane(12, 0.9), -8.01, 5.25, 9.5, 0, -Math.PI / 2);
      add('light', plane(14.5, 10.5), 0, 4.79, 9.5, Math.PI / 2);
      // ilhas: base amarela, colunas da cobertura e duas bombas
      for (const v of ISLANDS) {
        add('island', box(ISLAND_HALF[0] * 2, 0.2, ISLAND_HALF[1] * 2), 0, 0.1 + LOT_Y, v);
        for (const u of [-2.6, 2.6]) add('metal', new CylinderGeometry(0.16, 0.16, 4.6, 10), u, 2.5, v);
        for (const u of [-1.1, 1.1]) {
          add('white', box(0.8, 1.55, 0.44), u, 0.23 + 0.775, v);
          add('brand', box(0.84, 0.14, 0.48), u, 0.23 + 1.62, v);
          add('pumpFace', plane(0.76, 1.5), u, 0.23 + 0.77, v - 0.225, 0, Math.PI);
          add('pumpFace', plane(0.76, 1.5), u, 0.23 + 0.77, v + 0.225);
        }
        this.#rect(st, 0, v, ISLAND_HALF[0], ISLAND_HALF[1]);
      }
      // loja de conveniência (vitrine voltada para as bombas)
      add('white', box(SHOP.w, SHOP.h, SHOP.d), SHOP.u, SHOP.h / 2, SHOP.v);
      add('roof', box(SHOP.w + 0.4, 0.3, SHOP.d + 0.4), SHOP.u, SHOP.h + 0.15, SHOP.v);
      add('glass', plane(SHOP.w - 1, 2.3), SHOP.u, 1.35, SHOP.v - SHOP.d / 2 - 0.01, 0, Math.PI);
      add('shopSign', plane(SHOP.w - 1.2, 0.65), SHOP.u, 3.05, SHOP.v - SHOP.d / 2 - 0.02, 0, Math.PI);
      this.#rect(st, SHOP.u, SHOP.v, SHOP.w / 2, SHOP.d / 2);
      // totem junto à rua, de frente para quem chega pelos dois sentidos
      add('metal', box(0.3, 6.3, 0.3), TOTEM.u, 3.15, TOTEM.v);
      add('brand', box(0.3, 2.9, 2.1), TOTEM.u, 5.0, TOTEM.v);
      add('totem', plane(1.9, 2.6), TOTEM.u - 0.16, 5.0, TOTEM.v, 0, -Math.PI / 2);
      add('totem', plane(1.9, 2.6), TOTEM.u + 0.16, 5.0, TOTEM.v, 0, Math.PI / 2);
      const t = this.toWorld(st, TOTEM.u, TOTEM.v);
      this.circles.push([t.x, t.z, 0.3]);
    }
    this.meshes = [];
    for (const [kind, list] of Object.entries(parts)) {
      if (!list.length) continue;
      const geo = mergeGeometries(list, false);
      list.forEach(g => g.dispose());
      const mesh = new Mesh(geo, this.materials[kind]);
      mesh.castShadow = kind !== 'slab' && kind !== 'light';
      mesh.receiveShadow = true;
      parent.add(mesh);
      this.meshes.push(mesh);
    }
  }

  #rect(st, u, v, hu, hv) {
    const c = this.toWorld(st, u, v);
    this.rects.push([c.x, c.z, st.ux, st.uz, hu, hv]);
  }
}

/** Totem: nome genérico, combustível e preço do litro em moedas. */
function drawTotem(g, w, h, price) {
  g.fillStyle = '#127c6a', g.fillRect(0, 0, w, h);
  g.fillStyle = '#f5d020', g.fillRect(0, 92, w, 8);
  g.fillStyle = '#fff', g.font = 'bold 60px system-ui,sans-serif', g.textAlign = 'center', g.textBaseline = 'middle';
  g.fillText('POSTO', w / 2, 50);
  g.fillStyle = '#10151b', g.fillRect(16, 120, w - 32, h - 140);
  g.fillStyle = '#fff', g.font = 'bold 30px system-ui,sans-serif', g.fillText('GASOLINA', w / 2, 152);
  g.fillStyle = '#ffd84a', g.font = 'bold 64px monospace', g.fillText(Number(price).toFixed(2).replace('.', ','), w / 2, 220);
  g.fillStyle = '#c8d0d8', g.font = 'bold 24px system-ui,sans-serif', g.fillText('moedas / litro', w / 2, 272);
}
