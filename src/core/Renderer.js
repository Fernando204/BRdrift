import { WebGLRenderer, PCFSoftShadowMap, ACESFilmicToneMapping, PerspectiveCamera } from 'three';
import { RENDER_LAYERS } from '../utils/Constants.js';

/** Configuração do renderizador WebGL e ajuste ao tamanho da janela. */
export class Renderer {
  constructor(container = document.body) {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.quality = 'medium';
    this.lowPower = false;
    this.resolutionScale = 1;
    this.setQuality(this.quality);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.info.autoReset = false;   // somamos as passadas; zerado em render()
    container.prepend(this.renderer.domElement);

    // Câmera "sonda" da passada de sombras: enxerga todas as camadas, mas seu frustum fica longe de tudo,
    // então só o mapa de sombra é desenhado (o Three.js filtra quem projeta sombra pelas camadas da câmera).
    this.shadowProbe = new PerspectiveCamera(1, 1, 0.1, 1);
    this.shadowProbe.position.set(0, -1e6, 0);
    this.shadowProbe.lookAt(0, -2e6, 0);
    this.shadowProbe.updateMatrixWorld();
    this.shadowProbe.layers.disableAll();
    for (const layer of Object.values(RENDER_LAYERS)) this.shadowProbe.layers.enable(layer);
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

  /** Escala da resolução interna (0,5–1), aplicada sobre o limite da qualidade. */
  setResolutionScale(scale) {
    this.resolutionScale = scale;
    this.#applyPixelRatio();
  }

  #applyPixelRatio() {
    const maxRatio = { low: 0.75, medium: 1.25, high: 2 }[this.quality];
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, maxRatio, this.lowPower ? 1.5 : Infinity) * this.resolutionScale);
  }

  /**
   * Três passadas:
   * 0. só o mapa de sombra (sonda com todas as camadas: cenário, carro e objetos "só de sombra");
   * 1. o cenário;
   * 2. o carro e os transparentes que se misturam com ele, sobre a profundidade do cenário.
   * Separar o carro faz a "transmission" das lentes reprocessar só o carro, e não a cidade.
   */
  render(scene, camera) {
    const r = this.renderer, shadows = r.shadowMap;
    const autoClear = r.autoClear, autoUpdate = shadows.autoUpdate, autoMatrix = scene.matrixWorldAutoUpdate;
    r.info.reset();
    scene.updateMatrixWorld();
    scene.matrixWorldAutoUpdate = false;     // já atualizado acima; evita percorrer a cena 3 vezes
    if (shadows.enabled) {
      r.autoClear = false;
      shadows.autoUpdate = true;
      r.render(scene, this.shadowProbe);
    }
    shadows.autoUpdate = false;
    r.autoClear = autoClear;
    camera.layers.set(RENDER_LAYERS.WORLD);
    r.render(scene, camera);
    r.autoClear = false;
    camera.layers.set(RENDER_LAYERS.VEHICLE);
    r.render(scene, camera);
    camera.layers.set(RENDER_LAYERS.WORLD);
    r.autoClear = autoClear;
    shadows.autoUpdate = autoUpdate;
    scene.matrixWorldAutoUpdate = autoMatrix;
  }
}
