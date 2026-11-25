import { WebGLRenderer, PCFSoftShadowMap, ACESFilmicToneMapping } from 'three';

/** Configuração do renderizador WebGL e ajuste ao tamanho da janela. */
export class Renderer {
  constructor(container = document.body) {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.quality = 'medium';
    this.lowPower = false;
    this.setQuality(this.quality);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    container.prepend(this.renderer.domElement);
  }

  get canvas() {
    return this.renderer.domElement;
  }

  setSize(width, height) {
    this.renderer.setSize(width, height);
  }

  /** Telas de toque: menos pixels por quadro. */
  enableLowPower() {
    this.lowPower = true;
    this.#applyPixelRatio();
  }

  setQuality(quality) {
    this.quality = quality;
    this.#applyPixelRatio();
  }

  #applyPixelRatio() {
    const maxRatio = { low: 0.75, medium: 1.25, high: 2 }[this.quality];
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, maxRatio, this.lowPower ? 1.5 : Infinity));
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);
  }
}
