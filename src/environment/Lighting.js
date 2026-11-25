import { DirectionalLight } from 'three';
import { RENDER_LAYERS, GRAPHICS_PRESETS } from '../utils/Constants.js';

/** Sol com sombras. A área de sombra acompanha o jogador para manter a nitidez perto dele. */
export class Lighting {
  constructor(scene, sunDirection) {
    this.sunDirection = sunDirection;
    this.sun = new DirectionalLight(16773596, 2.6);
    this.sun.castShadow = true;
    this.quality = 'medium';
    this.setShadowQuality(this.quality);
    Object.assign(this.sun.shadow.camera, { left: -35, right: 35, top: 35, bottom: -35, near: 1, far: 260 });
    this.sun.shadow.bias = -4e-4;
    this.sun.shadow.normalBias = 0.03;
    this.sun.layers.enable(RENDER_LAYERS.VEHICLE);   // ilumina também a passada do carro
    scene.add(this.sun, this.sun.target);
  }

  setNight(night) {
    this.sun.intensity = night ? 0.15 : 2.6;
    this.sun.color.set(night ? 9086207 : 16773596);
  }

  /** 'off' desliga a sombra do sol; 'low' | 'medium' | 'high' definem a resolução do mapa de sombra. */
  setShadowQuality(quality) {
    this.quality = quality;
    const enabled = quality !== 'off';
    this.sun.castShadow = enabled;
    if (!enabled) {
      this.#disposeShadowMap();
      return;
    }
    const size = GRAPHICS_PRESETS[quality].shadowMapSize;
    if (this.sun.shadow.mapSize.x === size) return;
    this.sun.shadow.mapSize.set(size, size);
    this.#disposeShadowMap();
  }

  follow(x, z) {
    const d = this.sunDirection;
    this.sun.position.set(x + d.x * 120, d.y * 120, z + d.z * 120);
    this.sun.target.position.set(x, 0, z);
  }

  #disposeShadowMap() {
    if (this.sun.shadow.map) {
      this.sun.shadow.map.dispose();
      this.sun.shadow.map = null;
    }
  }
}
