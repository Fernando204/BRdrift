import { PerspectiveCamera, Vector3, Quaternion } from 'three';
import { clamp, angleDiff } from '../utils/MathUtils.js';

export const CameraMode = { CHASE: 0, COCKPIT: 1 };

const _eye = new Vector3();
const _quat = new Quaternion();
const _turnY = new Quaternion();
const _tiltX = new Quaternion();
const FLIP = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), Math.PI);
const AXIS_X = new Vector3(1, 0, 0), AXIS_Y = new Vector3(0, 1, 0);

/**
 * Câmera do jogo: perseguição (com arrasto para olhar em volta e zoom), primeira pessoa no banco
 * do motorista, terceira pessoa a pé e uma órbita lenta enquanto o menu está aberto.
 */
export class CameraController {
  constructor(canvas) {
    this.camera = new PerspectiveCamera(62, 1, 0.1, 1200);
    this.mode = CameraMode.CHASE;
    this.heading = 0;        // rumo suavizado que a câmera segue
    this.lookYaw = 0;        // giro manual (arrasto)
    this.lookPitch = 0;
    this.zoom = 1;
    this.dragging = false;
    this.idleTime = 0;
    this.menuAngle = 0;
    this.#bindPointer(canvas);
  }

  #bindPointer(canvas) {
    let pointerId = -1, lastX = 0, lastY = 0;
    canvas.style.cursor = 'grab';
    canvas.addEventListener('pointerdown', e => {
      if (pointerId >= 0) return;
      pointerId = e.pointerId, lastX = e.clientX, lastY = e.clientY, this.dragging = true;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = 'grabbing';
    });
    canvas.addEventListener('pointermove', e => {
      if (e.pointerId !== pointerId) return;
      this.lookYaw += (e.clientX - lastX) * 0.006;
      this.lookPitch = clamp(this.lookPitch + (e.clientY - lastY) * 0.004, -0.35, 0.9);
      lastX = e.clientX, lastY = e.clientY, this.idleTime = 0;
    });
    for (const type of ['pointerup', 'pointercancel']) {
      canvas.addEventListener(type, e => {
        if (e.pointerId === pointerId) pointerId = -1, this.dragging = false, canvas.style.cursor = 'grab';
      });
    }
    canvas.addEventListener('wheel', e => {
      this.zoom = clamp(this.zoom * (1 + e.deltaY * 0.001), 0.5, 2.5);
      e.preventDefault();
    }, { passive: false });
  }

  toggleMode() {
    this.mode ^= 1;
  }

  /** Recentraliza a câmera atrás de um rumo (ao entrar/sair do carro, reiniciar etc.). */
  reset(heading) {
    this.heading = heading;
    this.lookYaw = this.lookPitch = 0;
  }

  setAspect(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  /**
   * @param ctx { menuOpen, vehicleState, vehicleModel, cockpitOffset, onFoot, playerBody }
   */
  update(dt, ctx) {
    const cam = this.camera, K = ctx.vehicleState, speed = Math.hypot(K.vx, K.vz);
    // com o menu aberto em telas largas, o carro aparece à direita do painel
    if (ctx.menuOpen && innerWidth >= 900) cam.setViewOffset(innerWidth, innerHeight, -innerWidth * 0.2, 0, innerWidth, innerHeight);
    else if (cam.view && cam.view.enabled) cam.clearViewOffset();
    // depois de 1,2 s sem arrastar, o olhar volta devagar para a frente
    if (!this.dragging && (this.idleTime += dt) > 1.2) {
      const k = Math.exp(-dt * 3);
      this.lookYaw *= k;
      this.lookPitch *= k;
    }

    if (ctx.menuOpen) {
      this.menuAngle += dt * 0.25;
      cam.position.set(K.x + Math.sin(this.menuAngle) * 7.5, 2.3, K.z + Math.cos(this.menuAngle) * 7.5);
      cam.lookAt(K.x, 0.8, K.z);
      cam.fov = 45;
    } else if (ctx.onFoot) {
      const b = ctx.playerBody;
      this.heading += angleDiff(b.h, this.heading) * Math.min(1, dt * 4);
      const dist = 4.3 * this.zoom, yaw = this.heading - this.lookYaw, pitch = clamp(0.3 + this.lookPitch, 0.05, 1.3), c = Math.cos(pitch);
      cam.position.set(b.x - Math.sin(yaw) * c * dist, 1.25 + Math.sin(pitch) * dist, b.z - Math.cos(yaw) * c * dist);
      cam.lookAt(b.x, 1.4, b.z);
      cam.fov = 60;
    } else if (this.mode === CameraMode.CHASE) {
      const target = speed > 8 ? K.h + angleDiff(Math.atan2(K.vx, K.vz), K.h) * 0.35 : K.h;
      this.heading += angleDiff(target, this.heading) * Math.min(1, dt * 3.5);
      const dist = (6.8 + speed * 0.03) * this.zoom, yaw = this.heading - this.lookYaw;
      const pitch = clamp(0.2 + this.lookPitch + speed * 0.0015, 0.02, 1.3), c = Math.cos(pitch);
      const ahead = Math.max(0, 1 - Math.abs(this.lookYaw) * 1.5) * 3;
      cam.position.set(K.x - Math.sin(yaw) * c * dist, 1.1 + Math.sin(pitch) * dist, K.z - Math.cos(yaw) * c * dist);
      cam.lookAt(K.x + Math.sin(this.heading) * ahead, 1.1, K.z + Math.cos(this.heading) * ahead);
      cam.fov = 62 + Math.min(speed, 50) * 0.4;
    } else {
      const model = ctx.vehicleModel;
      cam.position.copy(_eye.fromArray(ctx.cockpitOffset).applyMatrix4(model.matrixWorld));
      model.getWorldQuaternion(_quat);
      cam.quaternion.copy(_quat).multiply(FLIP).multiply(_turnY.setFromAxisAngle(AXIS_Y, this.lookYaw)).multiply(_tiltX.setFromAxisAngle(AXIS_X, this.lookPitch));
      cam.fov = 72;
    }
    cam.updateProjectionMatrix();
  }
}
