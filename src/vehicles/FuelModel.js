import { PhysicsSystem } from '../systems/PhysicsSystem.js';
import { VehicleController } from './VehicleController.js';
import { GAME } from '../utils/Constants.js';

/**
 * Consumo de combustível de cada carro.
 *
 * Vazão (L/h) = a · giro/1000 + b · potência (kW na saída do motor), só com o motor ligado:
 *  - a: atrito e bombeamento (gasta mesmo parado, cresce com o giro; é o consumo em marcha lenta);
 *  - b: combustível por energia entregue (acelerar, subir de velocidade, vencer o ar e os pneus).
 * Sem acelerar, engrenado e rodando (freio-motor), a injeção corta o combustível: vazão zero.
 *
 * a e b são calibrados para cada carro simulando a própria física do jogo, dirigindo como o jogador
 * (acelerador no pé: liga/desliga), num ciclo urbano (para e anda a 40 e 60 km/h) e num rodoviário
 * (90 km/h). Assim os km/l no jogo ficam perto dos do carro real (config.fuel.cityKmL / highwayKmL),
 * com a marcha lenta perto da típica do motor (config.fuel.idleLph, ±40%).
 */
const FLAT = {
  surfaceUnder(_state, out) { out.onRoad = true; out.distance = 0; out.height = 0; return out; },
  forEachObstacleNear() {},
  collideVehicle() {},
  updateProgress() {},
};
// [velocidade alvo (km/h; 0 = freia e fica parado), segundos, medir?]
const CITY = [[0, 10], [60, 25], [0, 12], [40, 20], [0, 12], [60, 25], [0, 12], [40, 20], [0, 8]];
const HIGHWAY = [[90, 40, false], [90, 150]];
const cache = new Map();

/** Corte de combustível: sem acelerar, engrenado, rodando e acima da marcha lenta (o motor é girado pelas rodas). */
export const fuelCut = ctrl => ctrl.throttle === 0 && ctrl.gear !== 0 && ctrl.rpm > 1300 && Math.abs(ctrl.state.vf) > 2;

/**
 * Percurso simulado a partir do carro parado, como o jogador dirige (acelerador liga/desliga).
 * Devolve ∫giro (milhares de rpm × h), ∫potência (kWh) e a distância (km), só nas fases medidas.
 */
export function simulateDrive(config, phases) {
  const ctrl = new VehicleController(config), dt = GAME.physicsStep;
  ctrl.engineOn = true;
  const input = { accel: false, brake: false, handbrake: false, steer: 0 };
  let krpmH = 0, kWh = 0, meters = 0;
  for (const [target, seconds, measure = true] of phases) {
    for (let t = 0; t < seconds; t += dt) {
      const v = ctrl.state.vf * 3.6;
      input.accel = target > 0 && v < target;
      input.brake = target === 0 && v > 5;          // solta o freio no fim (senão o câmbio automático engata a ré)
      PhysicsSystem.step(ctrl, input, FLAT, dt);
      if (!measure) continue;
      if (!fuelCut(ctrl)) krpmH += Math.max(ctrl.rpm, config.physics.idleRpm) / 1000 * dt / 3600;
      kWh += (ctrl.enginePower || 0) / 1000 * dt / 3600;
      meters += Math.hypot(ctrl.state.vx, ctrl.state.vz) * dt;
    }
  }
  return { krpmH, kWh, km: meters / 1000 };
}

/** Coeficientes a (L/h por 1000 rpm) e b (L/kWh) do carro, calibrados uma vez por modelo. */
export function fuelModel(config) {
  if (cache.has(config)) return cache.get(config);
  const F = config.fuel, idle = config.physics.idleRpm / 1000;
  const c = simulateDrive(config, CITY), h = simulateDrive(config, HIGHWAY);
  const Fc = c.km / F.cityKmL, Fh = h.km / F.highwayKmL;   // litros que o carro real gastaria
  // erro relativo nos dois ciclos (mínimos quadrados), com a e b dentro de limites plausíveis
  const rows = [[c.krpmH / Fc, c.kWh / Fc], [h.krpmH / Fh, h.kWh / Fh]];
  const cost = (a, b) => rows.reduce((sum, [p, q]) => sum + (p * a + q * b - 1) ** 2, 0);
  const A = [0.6 * F.idleLph / idle, 1.4 * F.idleLph / idle], B = [0.1, 0.5];
  const clampTo = (v, [lo, hi]) => Math.min(hi, Math.max(lo, v));
  const bestB = a => clampTo(rows.reduce((n, [p, q]) => n + q * (1 - p * a), 0) / rows.reduce((n, [, q]) => n + q * q, 0), B);
  const bestA = b => clampTo(rows.reduce((n, [p, q]) => n + p * (1 - q * b), 0) / rows.reduce((n, [p]) => n + p * p, 0), A);
  const det = rows[0][0] * rows[1][1] - rows[0][1] * rows[1][0];
  const candidates = [[(rows[1][1] - rows[0][1]) / det, (rows[0][0] - rows[1][0]) / det]];   // solução exata
  for (const a of A) candidates.push([a, bestB(a)]);
  for (const b of B) candidates.push([bestA(b), b]);
  let [a, b] = [A[0], B[0]];
  for (const [ca, cb] of candidates) {
    if (ca >= A[0] - 1e-9 && ca <= A[1] + 1e-9 && cb >= B[0] - 1e-9 && cb <= B[1] + 1e-9 && cost(ca, cb) < cost(a, b)) a = ca, b = cb;
  }
  const model = { a, b, tank: F.tankLiters };
  cache.set(config, model);
  return model;
}

/** Litros por hora do motor ligado agora (giro, potência e corte em desaceleração). */
export const fuelFlowLph = (model, ctrl) =>
  fuelCut(ctrl) ? 0 : model.a * ctrl.rpm / 1000 + model.b * Math.max(0, ctrl.enginePower || 0) / 1000;
