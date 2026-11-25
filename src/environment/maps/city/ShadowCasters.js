import { InstancedMesh, DynamicDrawUsage } from 'three';
import { RENDER_LAYERS } from '../../../utils/Constants.js';

const CELL = 50;

/**
 * Sombras da cidade só com o que está perto do jogador.
 *
 * O mapa de sombra do sol cobre ±35 m em volta do jogador, mas cada malha instanciada da cidade
 * reúne centenas de instâncias; desenhá-las inteiras no mapa de sombra desperdiçava GPU.
 * Aqui, para cada tipo de objeto (paredes, telhados, lajes, troncos, copas) há uma InstancedMesh
 * "só de sombra" (camada SHADOW_ONLY: a câmera principal não a vê) com as instâncias num raio
 * que cobre tudo o que pode lançar sombra dentro dessa área. As malhas visíveis não projetam sombra.
 */
export class ShadowCasters {
  /**
   * @param kinds  { nome: { geometry, material, matrices: Float32Array (16 por instância), x: Float32Array, z: Float32Array } }
   * @param radius raio (m) a partir do jogador com as instâncias que projetam sombra
   */
  constructor(kinds, parent, radius) {
    this.radius = radius;
    this.lastX = Infinity;
    this.lastZ = Infinity;
    this.enabled = true;
    this.pools = [];
    for (const kind of Object.values(kinds)) {
      const n = kind.x.length;
      if (!n) continue;
      const cells = new Map();   // célula -> índices das instâncias
      for (let i = 0; i < n; i++) {
        const k = Math.floor(kind.x[i] / CELL) * 100003 + Math.floor(kind.z[i] / CELL);
        const list = cells.get(k);
        list ? list.push(i) : cells.set(k, [i]);
      }
      const capacity = Math.min(n, 2048);
      const mesh = new InstancedMesh(kind.geometry, kind.material, capacity);
      mesh.instanceMatrix.setUsage(DynamicDrawUsage);
      mesh.count = 0;
      mesh.castShadow = true;
      mesh.receiveShadow = false;
      mesh.frustumCulled = false;
      mesh.layers.set(RENDER_LAYERS.SHADOW_ONLY);
      parent.add(mesh);
      this.pools.push({ kind, cells, mesh, capacity });
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    for (const p of this.pools) p.mesh.visible = enabled;
    this.lastX = Infinity;
  }

  /** Reúne as instâncias próximas quando o jogador anda mais de 10 m. */
  update(x, z) {
    if (!this.enabled || (Math.abs(x - this.lastX) < 10 && Math.abs(z - this.lastZ) < 10)) return;
    this.lastX = x;
    this.lastZ = z;
    const R = this.radius, R2 = R * R;
    const i0 = Math.floor((x - R) / CELL), i1 = Math.floor((x + R) / CELL);
    const j0 = Math.floor((z - R) / CELL), j1 = Math.floor((z + R) / CELL);
    for (const p of this.pools) {
      const { kind, cells, mesh, capacity } = p, src = kind.matrices, dst = mesh.instanceMatrix.array;
      let count = 0;
      for (let i = i0; i <= i1 && count < capacity; i++) {
        for (let j = j0; j <= j1 && count < capacity; j++) {
          const list = cells.get(i * 100003 + j);
          if (!list) continue;
          for (const idx of list) {
            const dx = kind.x[idx] - x, dz = kind.z[idx] - z;
            if (dx * dx + dz * dz > R2) continue;
            dst.set(src.subarray(idx * 16, idx * 16 + 16), count * 16);
            if (++count === capacity) break;
          }
        }
      }
      mesh.count = count;
      mesh.instanceMatrix.clearUpdateRanges();
      mesh.instanceMatrix.addUpdateRange(0, count * 16);
      mesh.instanceMatrix.needsUpdate = true;
    }
  }
}
