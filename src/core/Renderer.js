import { WebGLRenderer, PCFSoftShadowMap, ACESFilmicToneMapping } from 'three';

/** Configuração do renderizador WebGL e ajuste ao tamanho da janela. */
export class Renderer {
  constructor(container = document.body) {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
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
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);
  }
}
