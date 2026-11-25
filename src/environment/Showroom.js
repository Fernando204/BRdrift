import {
  Scene, Color, PerspectiveCamera, DirectionalLight, HemisphereLight, Mesh, CircleGeometry,
  MeshBasicMaterial, MeshStandardMaterial, CanvasTexture,
} from 'three';
import { RENDER_LAYERS } from '../utils/Constants.js';

/**
 * Estúdio dos menus: o carro do jogador girando devagar sobre um piso escuro, separado do cenário
 * do jogo. Usa o mesmo mapa de reflexos do mundo (a pintura brilha igual) e uma sombra de contato
 * pintada (sem mapa de sombra: custo quase zero).
 */
export class Showroom {
  constructor(environmentMap) {
    this.scene = new Scene();
    this.scene.background = new Color(0x0b0f17);
    this.scene.environment = environmentMap;
    this.scene.environmentIntensity = 0.85;
    this.camera = new PerspectiveCamera(32, 1, 0.1, 100);
    this.camera.layers.enableAll();
    this.angle = 0.9;
    this.focusRight = 0.17;          // fração da largura: o carro aparece à direita dos painéis
    this.car = null;

    const key = new DirectionalLight(0xfff1e0, 2.4);
    key.position.set(-4, 6, 3);
    const rim = new DirectionalLight(0x9cc4ff, 1.6);
    rim.position.set(4, 3, -5);
    const fill = new HemisphereLight(0xbfd4ff, 0x1a1f2a, 0.55);
    for (const l of [key, rim, fill]) { l.layers.enableAll(); this.scene.add(l); }

    // piso com brilho suave no centro e sombra de contato sob o carro
    const floor = new Mesh(new CircleGeometry(9, 64), new MeshStandardMaterial({ color: 0x141a26, roughness: 0.35, metalness: 0.2 }));
    floor.rotation.x = -Math.PI / 2;
    const shadow = new Mesh(new CircleGeometry(3.2, 48), new MeshBasicMaterial({ map: radialTexture(), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.005;
    shadow.scale.set(0.75, 1.45, 1);
    for (const m of [floor, shadow]) { m.layers.enableAll(); this.scene.add(m); }
  }

  /** Mostra este carro (o objeto 3D é emprestado da cena do jogo enquanto o menu estiver aberto). */
  show(vehicle) {
    this.car = vehicle;
    if (!vehicle) return;
    vehicle.root.removeFromParent();
    vehicle.root.position.set(0, 0, 0);
    vehicle.root.rotation.set(0, 0, 0);
    vehicle.model.rotation.set(0, 0, 0);
    vehicle.root.traverse(o => o.layers.enable(RENDER_LAYERS.VEHICLE));
    this.scene.add(vehicle.root);
  }

  /** Devolve o carro para a cena do jogo. */
  release(gameScene) {
    if (!this.car) return;
    gameScene.add(this.car.root);
    this.car = null;
  }

  setAspect(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.width = width;
    this.height = height;
  }

  update(dt) {
    this.angle += dt * 0.18;
    const r = 10, cam = this.camera;
    cam.position.set(Math.sin(this.angle) * r, 2.1, Math.cos(this.angle) * r);
    cam.lookAt(0, 0.55, 0);
    if (this.width) cam.setViewOffset(this.width, this.height, -this.width * this.focusRight, 0, this.width, this.height);
    if (this.car) this.car.root.updateMatrixWorld(true);
  }

  render(renderer) {
    renderer.info.reset();
    renderer.render(this.scene, this.camera);
  }
}

function radialTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d'), grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grad.addColorStop(0, 'rgba(0,0,0,0.85)');
  grad.addColorStop(0.55, 'rgba(0,0,0,0.45)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new CanvasTexture(c);
}
