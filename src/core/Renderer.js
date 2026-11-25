import { WebGLRenderer, PCFSoftShadowMap, ACESFilmicToneMapping } from 'three';
import { RENDER_LAYERS } from '../utils/Constants.js';

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
    this.renderer.info.autoReset = false;   // somamos as duas passadas; zerado em render()
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

  /**
   * Duas passadas: o cenário e depois o carro (com a profundidade do cenário preservada).
   * O mapa de sombra é gerado só na primeira e reaproveitado na segunda.
   */
  render(scene, camera) {
    const r = this.renderer, shadows = r.shadowMap;
    r.info.reset();
    camera.layers.set(RENDER_LAYERS.WORLD);
    r.render(scene, camera);
    const autoClear = r.autoClear, autoUpdate = shadows.autoUpdate;
    r.autoClear = false;
    shadows.autoUpdate = false;
    camera.layers.set(RENDER_LAYERS.VEHICLE);
    r.render(scene, camera);
    r.autoClear = autoClear;
    shadows.autoUpdate = autoUpdate;
    camera.layers.set(RENDER_LAYERS.WORLD);
  }
}
