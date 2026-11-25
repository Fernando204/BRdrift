import { Sprite, SpriteMaterial } from 'three';
import { createCanvasTexture } from '../textures.js';

const POOL_SIZE = 90;

/** Fumaça/poeira dos pneus: um conjunto fixo de sprites reaproveitados (sem criar objetos no jogo). */
export class TireSmoke {
  constructor(scene) {
    this.texture = createCanvasTexture(64, 64, g => {
      const grad = g.createRadialGradient(32, 32, 2, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,.9)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, 64, 64);
    });
    this.sprites = [];
    this.next = 0;
    for (let i = 0; i < POOL_SIZE; i++) {
      const s = new Sprite(new SpriteMaterial({ map: this.texture, transparent: true, depthWrite: false, opacity: 0, color: 14540253 }));
      s.visible = false;
      s.userData = { life: 0, alpha: 0, vx: 0, vy: 0, vz: 0 };
      scene.add(s);
      this.sprites.push(s);
    }
  }

  emit(x, z, onRoad, amount, state) {
    const s = this.sprites[this.next++ % POOL_SIZE], d = s.userData;
    s.visible = true;
    s.material.color.set(onRoad ? 15132390 : 8084795);
    s.position.set(x, 0.25, z);
    d.life = 1;
    d.alpha = amount;
    d.vx = state.vx * 0.15 + Math.random() - 0.5;
    d.vy = (onRoad ? 0.8 : 1.5) + Math.random();
    d.vz = state.vz * 0.15 + Math.random() - 0.5;
    s.scale.setScalar(onRoad ? 1 : 0.8);
  }

  update(dt) {
    for (const s of this.sprites) {
      const d = s.userData;
      if (d.life <= 0) {
        s.visible = false;
        continue;
      }
      d.life -= dt * 0.7;
      s.position.x += d.vx * dt;
      s.position.y += d.vy * dt * 0.5;
      s.position.z += d.vz * dt;
      s.scale.setScalar(1 + (1 - d.life) * 4);
      s.material.opacity = Math.max(0, d.life) * 0.35 * (d.alpha || 1);
    }
  }
}
