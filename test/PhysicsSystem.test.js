import test from 'node:test';
import assert from 'node:assert/strict';
import { PhysicsSystem } from '../src/systems/PhysicsSystem.js';
import { VEHICLES } from '../src/vehicles/vehicles.config.js';

const map = {
  surfaceUnder(_state, result) { result.onRoad = true; result.distance = 0; },
  forEachObstacleNear() {},
  collideVehicle() {},
  updateProgress() {},
};

function createController({ speed = 20, lateral = 3, yaw = 0.8 } = {}) {
  return {
    physics: VEHICLES.chevette.physics,
    driftMode: true,
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

function simulate(controller, input, count) {
  for (let i = 0; i < count; i++) PhysicsSystem.step(controller, input, map, 1 / 120);
}

test('countersteer reduces yaw in mirrored drifts', () => {
  for (const sign of [1, -1]) {
    const controller = createController({ lateral: sign * 3, yaw: sign * 0.8 });
    simulate(controller, { accel: false, brake: false, handbrake: false, steer: -sign }, 18);

    assert.ok(Math.abs(controller.state.r) < 0.8);
    assert.equal(Math.sign(controller.state.steer), -sign);
  }
});

test('sustained countersteer can transition the drift to the opposite side', () => {
  const controller = createController();
  simulate(controller, { accel: true, brake: false, handbrake: false, steer: -1 }, 240);

  assert.ok(controller.state.r < 0);
  assert.ok(controller.state.vx < 0);
});

test('releasing throttle lets rear slip recover compared with sustained throttle', () => {
  const coasting = createController();
  const accelerating = createController();
  simulate(coasting, { accel: false, brake: false, handbrake: false, steer: 0 }, 120);
  simulate(accelerating, { accel: true, brake: false, handbrake: false, steer: 0 }, 120);

  assert.ok(Math.abs(coasting.state.slipAngleRear) < Math.abs(accelerating.state.slipAngleRear));
});

test('countersteer remains effective at low, medium, and high speeds', () => {
  for (const speed of [6, 20, 35]) {
    const controller = createController({ speed, lateral: 2, yaw: 0.5 });
    simulate(controller, { accel: false, brake: false, handbrake: false, steer: -1 }, 18);

    assert.ok(Math.abs(controller.state.r) < 0.5, `countersteer did not reduce yaw at ${speed} m/s`);
  }
});

test('front tire force steers the vehicle in the commanded direction', () => {
  const controller = createController({ lateral: 0, yaw: 0 });
  controller.driftMode = false;
  simulate(controller, { accel: false, brake: false, handbrake: false, steer: 1 }, 24);

  assert.ok(controller.state.r > 0);
});
