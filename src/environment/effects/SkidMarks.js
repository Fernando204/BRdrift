import { BufferGeometry, BufferAttribute, Mesh, MeshBasicMaterial, DoubleSide, DynamicDrawUsage } from 'three';

/**
 * Marcas de pneu: buffers circulares de tamanho fixo (sem alocar memória durante o jogo).
 * Uma trilha escura para o asfalto e outra marrom para a terra/grama.
 */
class MarkBuffer {
  constructor(scene, capacity, color) {
    this.capacity = capacity;
    this.color = color;
    this.next = 0;
    this.positions = new Float32Array(capacity * 12);
    this.colors = new Float32Array(capacity * 16);
    const index = [];
    for (let a = 0; a < capacity; a++) { const c = a * 4; index.push(c, c + 1, c + 2, c + 1, c + 3, c + 2); }
    this.geometry = new BufferGeometry();
    this.geometry.setAttribute('position', new BufferAttribute(this.positions, 3).setUsage(DynamicDrawUsage));
    this.geometry.setAttribute('color', new BufferAttribute(this.colors, 4).setUsage(DynamicDrawUsage));
    this.geometry.setIndex(index);
    this.mesh = new Mesh(this.geometry, new MeshBasicMaterial({
      vertexColors: true, transparent: true, depthWrite: false, side: DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    }));
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1;
    scene.add(this.mesh);
  }

  /** Quadrilátero entre a posição anterior (L0,R0) e a atual (L1,R1) das bordas do pneu. */
  addQuad(l0x, l0z, r0x, r0z, l1x, l1z, r1x, r1z, alpha0, alpha1) {
    const a = this.next++ % this.capacity, p = a * 12, c = a * 16, [r, g, b] = this.color;
    const P = this.positions, C = this.colors;
    P[p] = l0x, P[p + 1] = 0.04, P[p + 2] = l0z, P[p + 3] = r0x, P[p + 4] = 0.04, P[p + 5] = r0z;
    P[p + 6] = l1x, P[p + 7] = 0.04, P[p + 8] = l1z, P[p + 9] = r1x, P[p + 10] = 0.04, P[p + 11] = r1z;
    C[c] = r, C[c + 1] = g, C[c + 2] = b, C[c + 3] = alpha0, C[c + 4] = r, C[c + 5] = g, C[c + 6] = b, C[c + 7] = alpha0;
    C[c + 8] = r, C[c + 9] = g, C[c + 10] = b, C[c + 11] = alpha1, C[c + 12] = r, C[c + 13] = g, C[c + 14] = b, C[c + 15] = alpha1;
    this.geometry.attributes.position.needsUpdate = this.geometry.attributes.color.needsUpdate = true;
  }

  clear() {
    this.positions.fill(0);
    this.geometry.attributes.position.needsUpdate = true;
  }
}

export class SkidMarks {
  /**
   * @param wheelPoints [[x lateral, z longitudinal, 0 dianteira | 1 traseira], ...] no referencial do carro
   */
  constructor(scene, wheelPoints, smoke) {
    this.asphalt = new MarkBuffer(scene, 3e3, [0.02, 0.02, 0.025]);
    this.dirt = new MarkBuffer(scene, 2e3, [0.17, 0.115, 0.06]);
    this.wheelPoints = wheelPoints;
    this.smoke = smoke;
    this.trails = wheelPoints.map(() => ({ on: false, buffer: null, lx: 0, lz: 0, rx: 0, rz: 0, alpha: 0, x: 0, z: 0 }));
    this.intensity = 0;   // 0..6, usado pelo som de pneu cantando
  }

  /** Chamado a cada quadro com o estado do carro (slipFront/slipRear = quanto cada eixo está escorregando). */
  update(state, map) {
    const sinH = Math.sin(state.h), cosH = Math.cos(state.h), rx = cosH, rz = -sinH;
    let maxSlip = 0;
    for (let i = 0; i < this.wheelPoints.length; i++) {
      const wp = this.wheelPoints[i], trail = this.trails[i];
      const slip = wp[2] ? state.slipRear : state.slipFront;
      const x = state.x + sinH * wp[1] + rx * wp[0], z = state.z + cosH * wp[1] + rz * wp[0];
      const onRoad = map.isOnRoad(x, z);
      const buffer = onRoad ? this.asphalt : this.dirt;
      const half = onRoad ? 0.1 : 0.14, alpha = slip * (onRoad ? 0.85 : 0.6);
      maxSlip = Math.max(maxSlip, slip);
      const lx = x + rx * half, lz = z + rz * half, rX = x - rx * half, rZ = z - rz * half;
      if (slip > 0.05) {
        if (trail.on && trail.buffer === buffer) {
          if (Math.hypot(x - trail.x, z - trail.z) > 0.3) {
            buffer.addQuad(trail.lx, trail.lz, trail.rx, trail.rz, lx, lz, rX, rZ, trail.alpha, alpha);
            Object.assign(trail, { lx, lz, rx: rX, rz: rZ, alpha, x, z });
          }
        } else {
          Object.assign(trail, { on: true, buffer, lx, lz, rx: rX, rz: rZ, alpha: 0, x, z });
        }
      } else if (trail.on) {
        trail.buffer.addQuad(trail.lx, trail.lz, trail.rx, trail.rz, lx, lz, rX, rZ, trail.alpha, 0);
        trail.on = false;
      }
      if (slip > 0.2 && Math.random() < slip * 0.5) this.smoke.emit(x, z, onRoad, slip, state);
    }
    this.intensity = maxSlip * 6;
  }

  clear() {
    this.asphalt.clear();
    this.dirt.clear();
    for (const t of this.trails) t.on = false;
  }
}
