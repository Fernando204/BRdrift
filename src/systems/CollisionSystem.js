/**
 * Colisões simples e baratas: círculos (carro, pessoa, árvores) e retângulos girados (carroceria).
 * Construções da cidade são tratadas pelo próprio mapa (índice espacial em CityMap).
 */
const CAR_RADIUS = 1;

export class CollisionSystem {
  /** Carro contra árvores/postes próximos: empurra para fora e rebate a velocidade. */
  static vehicleVsObstacles(state, map) {
    map.forEachObstacleNear(state.x, state.z, o => {
      const dx = state.x - o[0], dz = state.z - o[1], d2 = dx * dx + dz * dz, R = o[2] + CAR_RADIUS;
      if (d2 >= R * R) return;
      const d = Math.sqrt(d2) || 0.01, nx = dx / d, nz = dz / d;
      state.x = o[0] + nx * R;
      state.z = o[1] + nz * R;
      const vn = state.vx * nx + state.vz * nz;
      if (vn < 0) {
        state.vx = (state.vx - 1.3 * vn * nx) * 0.8;
        state.vz = (state.vz - 1.3 * vn * nz) * 0.8;
        state.r *= 0.6;
      }
    });
  }

  /** Pessoa contra árvores: só empurra para fora. */
  static circleVsObstacles(body, radius, map) {
    map.forEachObstacleNear(body.x, body.z, o => {
      const dx = body.x - o[0], dz = body.z - o[1], R = o[2] + radius, d = Math.hypot(dx, dz);
      if (d < R && d > 1e-4) body.x = o[0] + dx / d * R, body.z = o[1] + dz / d * R;
    });
  }

  /**
   * Círculo contra o retângulo girado de um veículo parado/andando.
   * @param halfSize [meia largura, meio comprimento]
   */
  static circleVsVehicle(body, radius, vehicleState, halfSize) {
    const c = Math.cos(vehicleState.h), s = Math.sin(vehicleState.h);
    const dx = body.x - vehicleState.x, dz = body.z - vehicleState.z;
    const lx = dx * c - dz * s, lz = dx * s + dz * c, [hx, hz] = halfSize;
    if (Math.abs(lx) > hx + radius || Math.abs(lz) > hz + radius) return;
    const cx = Math.max(-hx, Math.min(hx, lx)), cz = Math.max(-hz, Math.min(hz, lz));
    let ex = lx - cx, ez = lz - cz, pen;
    const d = Math.hypot(ex, ez);
    if (d > 1e-4) {
      if (d >= radius) return;
      ex /= d, ez /= d, pen = radius - d;
    } else {
      const px = hx - Math.abs(lx), pz = hz - Math.abs(lz);
      if (px < pz) ex = Math.sign(lx) || 1, ez = 0, pen = px + radius;
      else ex = 0, ez = Math.sign(lz) || 1, pen = pz + radius;
    }
    body.x += (ex * c + ez * s) * pen;
    body.z += (-ex * s + ez * c) * pen;
  }
}
