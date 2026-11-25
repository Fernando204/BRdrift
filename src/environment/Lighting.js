import { DirectionalLight } from 'three';

/** Sol com sombras. A área de sombra acompanha o jogador para manter a nitidez perto dele. */
export class Lighting {
  constructor(scene, sunDirection) {
    this.sunDirection = sunDirection;
    this.sun = new DirectionalLight(16773596, 2.6);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    Object.assign(this.sun.shadow.camera, { left: -35, right: 35, top: 35, bottom: -35, near: 1, far: 260 });
    this.sun.shadow.bias = -4e-4;
    this.sun.shadow.normalBias = 0.03;
    scene.add(this.sun, this.sun.target);
  }

  setNight(night) {
    this.sun.intensity = night ? 0.15 : 2.6;
    this.sun.color.set(night ? 9086207 : 16773596);
  }

  follow(x, z) {
    const d = this.sunDirection;
    this.sun.position.set(x + d.x * 120, d.y * 120, z + d.z * 120);
    this.sun.target.position.set(x, 0, z);
  }

  /** Telas de toque: mapa de sombra menor (libera o mapa atual para ser recriado no novo tamanho). */
  reduceShadowQuality() {
    this.sun.shadow.mapSize.set(1024, 1024);
    if (this.sun.shadow.map) {
      this.sun.shadow.map.dispose();
      this.sun.shadow.map = null;
    }
  }
}
