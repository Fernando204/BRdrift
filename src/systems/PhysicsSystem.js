import { clamp } from '../utils/MathUtils.js';
import { GRAVITY } from '../utils/Constants.js';
import { CollisionSystem } from './CollisionSystem.js';

/**
 * Dinâmica do carro: modelo de bicicleta com pneus (Magic Formula simplificada), transferência de carga,
 * círculo de atrito, motor/câmbio e, no modo normal, controle de tração (TC) e de estabilidade (ESC).
 *
 * Os números foram calibrados no jogo; mude com cuidado e teste nos dois modos.
 */
const tireDrift = (load, shape, slip) => -load * Math.sin(shape * Math.atan(11 * slip));
const surface = { onRoad: true, distance: 0, height: 0 };   // reaproveitado a cada passo (sem alocação)

export class PhysicsSystem {
  /**
   * Um passo de simulação.
   * @param ctrl   VehicleController
   * @param input  { accel, brake, handbrake, steer (-1..1) } já filtrado (sem motorista = tudo zerado)
   * @param map    mapa ativo (piso, obstáculos, limites)
   */
  static step(ctrl, input, map, dt) {
    const K = ctrl.state, P = ctrl.physics, drift = ctrl.driftMode;
    const mass = P.mass, wb = P.wheelbase, cgF = P.cgToFront, cgR = P.cgToRear, R = P.wheelRadius, ratios = P.gearRatios;
    const staticFront = mass * GRAVITY * cgR / wb, staticRear = mass * GRAVITY * cgF / wb;
    const rpmAt = (gear, v) => Math.abs(v) / R * Math.abs(ratios[gear + 1]) * 9.549;

    const accel = input.accel, brake = input.brake, handbrake = input.handbrake;
    ctrl.steerInput += (input.steer - ctrl.steerInput) * Math.min(1, dt * (input.steer ? 6 : 10));
    ctrl.shiftTimer = Math.max(0, ctrl.shiftTimer - dt);
    ctrl.autoShiftTimer = Math.max(0, ctrl.autoShiftTimer - dt);

    const sinH = Math.sin(K.h), cosH = Math.cos(K.h);
    let vLong = K.vx * sinH + K.vz * cosH, vLat = K.vx * cosH - K.vz * sinH, yaw = K.r;
    const speed = Math.hypot(vLong, vLat);
    surface.height = 0;
    map.surfaceUnder(K, surface);
    // altura do piso sob o carro (o asfalto é desenhado um pouco acima do chão): sem isso os pneus afundam
    K.groundY = K.groundY === undefined ? surface.height : K.groundY + (surface.height - K.groundY) * Math.min(1, dt * 15);
    const grip = surface.onRoad ? 1.15 : 0.7;
    const dir = vLong >= 0 ? 1 : -1, absLong = Math.abs(vLong);
    const latFade = Math.min(1, speed / 1.5), longFade = Math.min(1, absLong / 0.5);
    const hb = handbrake ? 1 : 0;

    // câmbio automático
    if (!ctrl.manual) {
      if (ctrl.gear < 1 && accel && vLong > -1.5) ctrl.setGear(1);
      else if (brake && !accel && vLong < 1.5 && ctrl.gear !== -1) ctrl.setGear(-1);
      if (ctrl.gear >= 1 && ctrl.autoShiftTimer <= 0) {
        const rpm = rpmAt(ctrl.gear, speed);
        if (ctrl.gear < 5 && rpm > 6300) ctrl.setGear(ctrl.gear + 1), ctrl.autoShiftTimer = 0.5;
        else if (ctrl.gear > 1 && (rpm < 2e3 || (accel && rpm < 3200 && rpmAt(ctrl.gear - 1, speed) < 6e3))) ctrl.setGear(ctrl.gear - 1), ctrl.autoShiftTimer = 0.5;
      }
    }
    let throttle = 0, braking = 0;
    if (ctrl.manual) throttle = accel ? 1 : 0, braking = brake ? 1 : 0;
    else if (ctrl.gear === -1) throttle = brake ? 1 : 0, braking = accel && vLong < -1 ? 1 : 0;
    else {
      throttle = accel ? 1 : 0, braking = brake ? 1 : 0;
      if (accel && vLong < -1) throttle = 0, braking = 1;
    }

    // esterço: limitado com a velocidade; contra-esterço automático (forte no drift, leve no normal)
    const slipDen = Math.max(absLong, 1.5);
    const bodySlip = clamp(Math.atan2(vLat, Math.max(absLong, 2)), -0.8, 0.8);
    let steerLimit = Math.min(0.6, 0.17 + 28 / (speed * speed + 30));
    // drift: com a traseira escorregando, o volante ganha curso proporcional à deriva (dá para
    // contra-esterçar de verdade ou fechar mais o drift) e o contra-esterço automático só age com o
    // volante solto, sumindo conforme o jogador esterça: quem manda nas rodas é o jogador
    const userSteer = Math.abs(ctrl.steerInput);
    if (drift && vLong > 3) steerLimit = Math.max(steerLimit, Math.min(0.55, Math.abs(bodySlip) * 1.1 + 0.12));
    let steer = -ctrl.steerInput * steerLimit * (handbrake ? 0.65 : 1);
    if (vLong > 3) steer += (drift ? 0.9 * (1 - userSteer) : 0.3) * bodySlip * Math.min(1, vLong / 8);
    steer = clamp(steer, -0.55, 0.55);
    K.steer = -steer;

    // cargas por eixo, motor e forças longitudinais
    const transfer = clamp(mass * K.ax * 0.35 / wb, -2e3, 2e3);
    const loadF = staticFront - transfer, loadR = staticRear + transfer;
    const ratio = ratios[ctrl.gear + 1];
    const wheelRpm = rpmAt(ctrl.gear, vLong);
    const engineRpm = ctrl.gear === 0 ? 900 + throttle * 6100 : Math.max(wheelRpm, 900 + throttle * 2600);
    const limiter = clamp((7200 - engineRpm) / 400, 0, 1);
    const torqueCurve = Math.max(0.25, 1 - ((engineRpm - 4800) / 4200) ** 2);
    let drive = ratio === 0 || ctrl.shiftTimer > 0 ? 0 : Math.sign(ratio) * P.maxTorque * torqueCurve * throttle * Math.abs(ratio) * 0.9 / R * limiter;
    if (ctrl.gear === -1) { drive *= 0.6; if (vLong < -12) drive = 0; }

    // controle de tração (modo normal): respeita o círculo de atrito traseiro e corta torque se a traseira escorrega
    K.tc = false;
    if (!drift && drive > 0 && !handbrake) {
      const limit = Math.sqrt(Math.max(0, (1.2 * grip * loadR) ** 2 - (K.fyRear || 0) ** 2));
      let cut = K.escCut || 1;
      const rearSlip = Math.abs(K.slipAngleRear || 0);
      if (rearSlip > 0.12) cut *= clamp(1 - (rearSlip - 0.12) / 0.1, 0.25, 1);
      const limited = Math.min(drive * cut, Math.max(limit, 350));
      if (limited < drive - 1) K.tc = true;
      drive = limited;
    }
    const engineBrake = ratio === 0 ? 0 : -dir * longFade * ((1 - throttle) * (150 + wheelRpm * 0.12) + Math.max(0, wheelRpm - 7200) * 1.5);
    ctrl.rpm += (engineRpm - ctrl.rpm) * Math.min(1, dt * 10);
    const resistance = -dir * longFade * (150 + 0.42 * vLong * vLong + (surface.onRoad ? 0 : 900));
    const brakeForce = -dir * longFade * braking * 11e3;
    const capF = 1.3 * grip * loadF, capR = 1.3 * grip * loadR;
    const longF = clamp(brakeForce * 0.6, -0.9 * capF, 0.9 * capF);
    const longR = clamp(drive + brakeForce * 0.4 - dir * longFade * hb * 1500, -0.9 * capR, 0.9 * capR);

    // forças laterais (círculo de atrito) e ângulos de deriva
    const slipLoss = 1 - 0.25 * clamp((Math.abs(bodySlip) - 0.1) / 0.4, 0, 1);
    const latCapF = Math.max(0.25 * grip * loadF, grip * loadF * Math.sqrt(Math.max(0, 1 - (longF / capF) ** 2))) * slipLoss;
    const latCapR = Math.max(0.2 * grip * loadR, grip * loadR * Math.sqrt(Math.max(0, 1 - (longR / capR) ** 2))) * (hb ? (drift ? 0.6 : 0.75) : 1) * slipLoss;
    const slipF = Math.atan((vLat + cgF * yaw) / slipDen) - dir * steer;
    const slipR = Math.atan((vLat - cgR * yaw) / slipDen);
    // comprimento de relaxação (~0,35 m): o pneu leva um instante para responder (modo normal)
    const relax = Math.min(1, speed * dt / 0.35 + 0.02);
    const aF = drift ? slipF : (K.slipAngleFront += (slipF - K.slipAngleFront) * relax);
    const aR = drift ? slipR : (K.slipAngleRear += (slipR - K.slipAngleRear) * relax);
    const latF = (drift ? tireDrift(latCapF, 1.4, aF) : -latCapF * Math.sin(1.3 * Math.atan(9.5 * aF))) * latFade;
    const latR = (drift ? tireDrift(latCapR, 1.45, aR) : -latCapR * 1.06 * Math.sin(1.22 * Math.atan(10 * aR))) * latFade;

    // integração no referencial do carro
    const cs = Math.cos(steer), sn = Math.sin(steer);
    const accLong = (longF * cs - latF * sn + longR + resistance + engineBrake) / mass;
    const accLat = (latF * cs + longF * sn + latR) / mass;
    const nl = vLong + accLong * dt, nt = vLat + accLat * dt, rc = Math.cos(yaw * dt), rs = Math.sin(yaw * dt);
    yaw += (cgF * (latF * cs + longF * sn) - cgR * latR) / P.yawInertia * dt;
    vLong = nl * rc + nt * rs;
    vLat = nt * rc - nl * rs;

    // controle de estabilidade (modo normal): compara a guinada com a do modelo de referência
    K.fyRear = latR;
    K.esc = false;
    K.escCut = 1;
    if (!drift && !hb && vLong > 3) {
      const limit = 1.2 * GRAVITY * grip / Math.max(vLong, 3);
      const ref = clamp(vLong * steer / (wb * (1 + vLong * vLong / 420)), -limit, limit);
      const excess = Math.abs(yaw) - Math.abs(ref) - 0.06;
      const opposite = Math.sign(yaw) !== Math.sign(ref) && Math.abs(yaw) > 0.08;
      if (excess > 0 || opposite) {
        const k = clamp((opposite ? Math.abs(yaw) : excess) / 0.15, 0, 1);
        yaw -= (yaw - ref) * Math.min(1, dt * 6) * k;
        vLong -= Math.min(Math.max(vLong, 0), 1.4 * k * dt);
        vLat *= Math.exp(-1.5 * k * dt);
        K.esc = true;
        K.escCut = clamp(1 - k * 0.6, 0.3, 1);
      }
    }

    // freio de mão em baixa velocidade e parada suave
    const handbrakeSlide = hb && speed < 14;
    if (handbrakeSlide) yaw -= ctrl.steerInput * (throttle ? 4 : 1.6) * (drift ? 1 : 0.5) * dt;
    yaw *= Math.exp(-(handbrakeSlide ? 1.2 : 0.3) * dt);
    const stop = hb && throttle ? 0 : Math.max(0, 1 - speed / 2.5);
    vLat *= Math.exp(-8 * stop * dt);
    yaw *= Math.exp(-6 * stop * dt);
    if (!throttle && !braking && speed < 0.3) vLong *= Math.exp(-4 * dt), vLat *= Math.exp(-4 * dt);
    yaw = clamp(yaw, -7, 7);
    K.r = yaw;
    K.h += yaw * dt;

    const s2 = Math.sin(K.h), c2 = Math.cos(K.h);
    K.vx = s2 * vLong + c2 * vLat;
    K.vz = c2 * vLong - s2 * vLat;
    K.x += K.vx * dt;
    K.z += K.vz * dt;

    CollisionSystem.vehicleVsObstacles(K, map);
    map.collideVehicle(K, surface);

    K.ax = accLong;
    K.ay = accLat;
    K.vf = vLong;
    K.pitch += (clamp(-accLong * 0.004, -0.05, 0.05) - K.pitch) * Math.min(1, dt * 6);
    K.roll += (clamp(accLat * 0.0025, -0.07, 0.07) - K.roll) * Math.min(1, dt * 6);
    ctrl.throttle = throttle;
    K.brake = !!brake;
    K.reverse = vLong < -0.5;

    // escorregamento de cada eixo (para marcas de pneu e fumaça)
    const slipAmount = a => clamp((Math.abs(a) - 0.13) / 0.14, 0, 1) * latFade;
    let front = slipAmount(slipF), rear = slipAmount(slipR);
    if (hb && speed > 2) rear = 1;
    if (throttle > 0 && Math.abs(drive) > 0.88 * capR && absLong < 14) rear = Math.max(rear, 0.6);
    if (braking && absLong > 18) front = Math.max(front, 0.35), rear = Math.max(rear, 0.5);
    K.slipFront = front;
    K.slipRear = rear;

    map.updateProgress(K);
    ctrl.engineSound = 0.25 + 0.75 * clamp(ctrl.rpm / 7e3, 0, 1.05);
  }
}
