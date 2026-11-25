import test from 'node:test';
import assert from 'node:assert/strict';
import { PhysicsSystem } from '../src/systems/PhysicsSystem.js';
import { VEHICLES } from '../src/vehicles/vehicles.config.js';

// Protegem a física calibrada no jogo (direção, drift e estabilidade). Se algum falhar depois de
// mexer em PhysicsSystem.js, a jogabilidade mudou: confira dirigindo antes de ajustar o teste.

const map = {
  surfaceUnder(_state, result) { result.onRoad = true; result.distance = 0; },
  forEachObstacleNear() {},
  collideVehicle() {},
  updateProgress() {},
};

function createController({ speed = 20, lateral = 0, yaw = 0, drift = false } = {}) {
  return {
    physics: VEHICLES.chevette.physics,
    driftMode: drift,
    gear: 3,
    manual: true,
    rpm: 4000,
    throttle: 0,
    shiftTimer: 0,
    autoShiftTimer: 0,
    steerInput: 0,
    engineSound: 0.5,
    setGear(gear) { this.gear = gear; },
    state: {
      x: 0, z: 0, h: 0, vx: lateral, vz: speed, r: yaw, vf: speed,
      ax: 0, ay: 0, steer: 0, pitch: 0, roll: 0,
      slipFront: 0, slipRear: 0, brake: false, reverse: false,
      tc: false, esc: false, escCut: 1, fyRear: 0,
      slipAngleFront: 0, slipAngleRear: 0,
    },
  };
}

const input = (steer, extra = {}) => ({ accel: false, brake: false, handbrake: false, steer, ...extra });

function simulate(controller, inp, count) {
  for (let i = 0; i < count; i++) PhysicsSystem.step(controller, inp, map, 1 / 120);
  return controller.state;
}

test('direita (+1) vira o carro para a direita, com as rodas apontando para o mesmo lado', () => {
  const s = simulate(createController(), input(1), 60);
  assert.ok(s.r < -0.3, `guinada ${s.r}`);
  assert.ok(s.h < 0 && s.x < 0, 'o carro deve sair para a direita');
  assert.ok(s.steer > 0, 'as rodas dianteiras devem esterçar para a direita');
});

test('esquerda e direita são espelhadas', () => {
  const right = simulate(createController(), input(1), 60);
  const left = simulate(createController(), input(-1), 60);
  assert.ok(Math.abs(right.r + left.r) < 1e-9);
  assert.ok(Math.abs(right.x + left.x) < 1e-9);
});

test('no modo drift, acelerar e esterçar mantém o carro girando para o lado do comando', () => {
  for (const sign of [1, -1]) {
    const s = simulate(createController({ drift: true }), input(sign, { accel: true }), 120);
    assert.equal(Math.sign(s.r), -sign);
    assert.ok(Math.abs(s.r) > 0.3);
  }
});

test('no modo drift, o contra-esterço automático segura o carro ao soltar o volante', () => {
  for (const sign of [1, -1]) {
    const s = simulate(createController({ drift: true, lateral: 3 * sign, yaw: 0.8 * sign }), input(0), 60);
    assert.ok(Math.abs(s.r) < 0.1, `guinada ${s.r}`);
  }
});

test('no modo normal, um carro escorregando se estabiliza', () => {
  for (const sign of [1, -1]) {
    const s = simulate(createController({ lateral: 3 * sign, yaw: 0.8 * sign }), input(0), 60);
    assert.ok(Math.abs(s.r) < 0.05, `guinada ${s.r}`);
  }
});

test('no modo drift, com a traseira escorregando, as rodas seguem o volante do jogador', () => {
  for (const sign of [1, -1]) {
    // carro deslizando e girando: comandos para os dois lados (fechar o drift e contra-esterçar)
    for (const command of [1, -1]) {
      const s = simulate(createController({ drift: true, lateral: 4 * sign, yaw: 0.9 * sign }), input(command), 30);
      assert.equal(Math.sign(s.steer), command, `deriva ${sign}, volante ${command}`);
      assert.ok(Math.abs(s.steer) > 0.17, `rodas só a ${(s.steer * 57.3).toFixed(0)}°`);
    }
  }
});
