import { Group } from 'three';

/**
 * Divide o mapa em regiões quadradas (chunks). Cada chunk é um Group com as malhas daquela área:
 * - fora da distância de visão o Group inteiro fica invisível (o Three.js nem percorre os filhos);
 * - além da distância de LOD, os detalhes pequenos do chunk (troncos, faixas pintadas) somem
 *   e as árvores podem ser desenhadas com menos densidade.
 * As geometrias são criadas uma única vez; voltar a uma região não recria nada.
 */
export class ChunkGrid {
  constructor(size, parent) {
    this.size = size;
    this.parent = parent;
    this.chunks = new Map();
    this.list = [];
    this.lastX = Infinity;
    this.lastZ = Infinity;
    this.viewDistance = Infinity;
    this.lodDistance = Infinity;
    this.farDensity = 1;
    this.dirty = true;
  }

  keyOf(x, z) {
    return Math.floor(x / this.size) * 100003 + Math.floor(z / this.size);
  }

  /** Chunk que contém o ponto (criado na primeira vez). */
  at(x, z) {
    const k = this.keyOf(x, z);
    let c = this.chunks.get(k);
    if (!c) {
      const i = Math.floor(x / this.size), j = Math.floor(z / this.size);
      c = {
        group: new Group(),
        minX: i * this.size, minZ: j * this.size, maxX: (i + 1) * this.size, maxZ: (j + 1) * this.size,
        detail: [],        // malhas escondidas no LOD distante
        thinned: [],       // malhas instanciadas cuja densidade cai no LOD distante: [mesh, total]
        near: null,
      };
      this.chunks.set(k, c);
      this.list.push(c);
      this.parent.add(c.group);
    }
    return c;
  }

  /** Ajusta os limites (por exemplo, ao mudar as opções gráficas). */
  configure({ viewDistance, lodDistance, farDensity }) {
    if (viewDistance !== undefined) this.viewDistance = viewDistance;
    if (lodDistance !== undefined) this.lodDistance = lodDistance;
    if (farDensity !== undefined) this.farDensity = farDensity;
    this.dirty = true;
  }

  /** Reavalia visibilidade e LOD quando o observador anda mais de 20 m (ou algo mudou). */
  update(x, z) {
    if (!this.dirty && Math.abs(x - this.lastX) < 20 && Math.abs(z - this.lastZ) < 20) return;
    this.dirty = false;
    this.lastX = x;
    this.lastZ = z;
    for (const c of this.list) {
      const dx = Math.max(c.minX - x, 0, x - c.maxX), dz = Math.max(c.minZ - z, 0, z - c.maxZ);
      const d = Math.hypot(dx, dz);
      c.group.visible = d <= this.viewDistance;
      if (!c.group.visible) continue;
      const near = d <= this.lodDistance;
      if (near === c.near) continue;
      c.near = near;
      for (const m of c.detail) m.visible = near;
      for (const [m, total] of c.thinned) m.count = near ? total : Math.ceil(total * this.farDensity);
    }
  }
}
