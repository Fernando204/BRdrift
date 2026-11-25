import { clamp, angleDiff } from '../utils/MathUtils.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';

export const FPS_CONFIG = Object.freeze({
  walkSpeed: 4.4,
  runSpeed: 5.8,
  acceleration: 14,
  deceleration: 16,
  gravity: 20,
  jumpSpeed: 7.2,
  eyeHeight: 1.67,
  bodyRadius: 0.32,
  mouseSensitivity: 0.0022,
  pitchLimit: Math.PI / 2 - 0.01,
  bobWalk: 0.035,
  bobRun: 0.055,
});

/** Movimento FPS a pé: Pointer Lock, WASD relativo à câmera, pulo e colisões físicas. */
export class FirstPersonController {
  constructor(canvas) {
    this.canvas = canvas;
    this.enabled = false;
    this.yaw = 0;
    this.pitch = 0;
    this.jumpHeld = false;
    this.bobPhase = 0;
    this.bobAmount = 0;

    canvas.addEventListener('click', () => {
      if (this.enabled && !document.pointerLockElement && this.canvas.requestPointerLock) {
        const request = this.canvas.requestPointerLock();
        request?.catch?.(error => console.warn('Não foi possível capturar o mouse:', error));
      }
    });
  }

  get pointerLocked() {
    return document.pointerLockElement === this.canvas;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled && this.pointerLocked) this.exitPointerLock();
  }

  exitPointerLock() {
    if (this.pointerLocked) document.exitPointerLock();
  }

  bindMouse() {
    document.removeEventListener('mousemove', this.#onMouseMove);
    document.addEventListener('mousemove', this.#onMouseMove);
  }

  #onMouseMove = e => {
    if (!this.enabled || !this.pointerLocked) return;
    this.yaw -= e.movementX * FPS_CONFIG.mouseSensitivity;
    this.pitch -= e.movementY * FPS_CONFIG.mouseSensitivity;
    this.pitch = clamp(this.pitch, -FPS_CONFIG.pitchLimit, FPS_CONFIG.pitchLimit);
  };

  reset(heading) {
    this.yaw = heading;
    this.pitch = 0;
  }

  /** Mantém os controles reais do personagem separados da física do carro. */
  update(dt, input, map, vehicleState, vehicleConfig, body) {
    if (!this.enabled) {
      this.jumpHeld = input.isDown('hb');
      return;
    }

    const forwardInput = (input.isDown('accel') ? 1 : 0) - (input.isDown('brake') ? 1 : 0);
    const rightInput = (input.isDown('right') ? 1 : 0) - (input.isDown('left') ? 1 : 0);
    let forwardX = Math.sin(this.yaw), forwardZ = Math.cos(this.yaw);
    let rightX = -Math.cos(this.yaw), rightZ = Math.sin(this.yaw);
    let moveX = forwardX * forwardInput + rightX * rightInput;
    let moveZ = forwardZ * forwardInput + rightZ * rightInput;
    const length = Math.hypot(moveX, moveZ);
    if (length > 1) moveX /= length, moveZ /= length;

    const running = input.isDown('run') && forwardInput > 0;
    const targetSpeed = (running ? FPS_CONFIG.runSpeed : FPS_CONFIG.walkSpeed) * (forwardInput < 0 ? 0.75 : 1);
    const targetVX = moveX * targetSpeed;
    const targetVZ = moveZ * targetSpeed;
    const blend = Math.min(1, dt * (length > 0 ? FPS_CONFIG.acceleration : FPS_CONFIG.deceleration));
    body.vx += (targetVX - body.vx) * blend;
    body.vz += (targetVZ - body.vz) * blend;
    if (length === 0 && Math.hypot(body.vx, body.vz) < 0.02) body.vx = body.vz = 0;

    body.x += body.vx * dt;
    CollisionSystem.circleVsVehicle(body, FPS_CONFIG.bodyRadius, vehicleState, vehicleConfig.bodyHalfSize);
    CollisionSystem.circleVsObstacles(body, FPS_CONFIG.bodyRadius, map);
    map.collideBody(body);

    body.z += body.vz * dt;
    CollisionSystem.circleVsVehicle(body, FPS_CONFIG.bodyRadius, vehicleState, vehicleConfig.bodyHalfSize);
    CollisionSystem.circleVsObstacles(body, FPS_CONFIG.bodyRadius, map);
    map.collideBody(body);

    if (map.half) {
      const limit = map.half - 8;
      body.x = clamp(body.x, -limit, limit);
      body.z = clamp(body.z, -limit, limit);
    } else if (map.distanceToTrack) {
      const distance = map.distanceToTrack(body.x, body.z);
      if (distance > 160 && map.points?.[map.index]) {
        const p = map.points[map.index], dx = p.x - body.x, dz = p.z - body.z, d = Math.hypot(dx, dz) || 1;
        body.x = p.x - dx / d * 20;
        body.z = p.z - dz / d * 20;
      }
    }

    body.y ??= 0;
    body.vy ??= 0;
    const jumpPressed = input.isDown('hb') && !this.jumpHeld;
    if (jumpPressed && body.grounded) {
      body.vy = FPS_CONFIG.jumpSpeed;
      body.grounded = false;
    }
    this.jumpHeld = input.isDown('hb');

    body.vy -= FPS_CONFIG.gravity * dt;
    body.y += body.vy * dt;
    if (body.y <= 0) {
      body.y = 0;
      body.vy = 0;
      body.grounded = true;
    }

    body.h = this.yaw;
    body.speed = Math.hypot(body.vx, body.vz);
    if (body.speed > 0.05 && body.grounded) {
      this.bobPhase += body.speed * dt * (running ? 1.75 : 1.35);
      this.bobAmount += ((running ? FPS_CONFIG.bobRun : FPS_CONFIG.bobWalk) - this.bobAmount) * Math.min(1, dt * 8);
    } else {
      this.bobAmount *= Math.exp(-dt * 8);
    }
  }

  /** Posição do olho (objeto reaproveitado; não guarde a referência entre quadros). */
  getCameraPosition(body) {
    const bob = Math.sin(this.bobPhase) * this.bobAmount, eye = this.eye || (this.eye = { x: 0, y: 0, z: 0 });
    eye.x = body.x, eye.y = body.y + FPS_CONFIG.eyeHeight + bob, eye.z = body.z;
    return eye;
  }

  resolveSafeSpawnPoint(body, point, map, vehicleState, vehicleConfig) {
    const candidates = [{ x: point.x, z: point.z }];
    for (let radius = 0.55; radius <= 1.8; radius += 0.55) {
      for (let i = 0; i < 16; i++) {
        const a = i * Math.PI / 8;
        candidates.push({ x: point.x + Math.cos(a) * radius, z: point.z + Math.sin(a) * radius });
      }
    }
    for (const candidate of candidates) {
      const test = { x: candidate.x, z: candidate.z, vx: 0, vz: 0, r: 0 };
      CollisionSystem.circleVsVehicle(test, FPS_CONFIG.bodyRadius, vehicleState, vehicleConfig.bodyHalfSize);
      CollisionSystem.circleVsObstacles(test, FPS_CONFIG.bodyRadius, map);
      map.collideBody(test);
      if (Math.hypot(test.x - candidate.x, test.z - candidate.z) < 0.02) {
        body.x = candidate.x;
        body.z = candidate.z;
        body.vx = body.vz = body.vy = 0;
        body.y = 0;
        body.grounded = true;
        return;
      }
    }
  }
}
