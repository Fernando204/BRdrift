import {
  Scene, Fog, Color, Mesh, SphereGeometry, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry,
  Float32BufferAttribute, BackSide, PMREMGenerator, Vector3,
} from 'three';
import { createCanvasTexture } from './textures.js';
import { SUN_DIRECTION } from '../utils/Constants.js';

const DAY = { fog: 13229292, fogNear: 150, envIntensity: 0.9, sky: 1 };
const NIGHT = { fog: 659488, fogNear: 40, fogFar: 320, envIntensity: 0.18, sky: 0.06 };

/** Cena 3D base: céu em gradiente, mapa de reflexos, neblina e o gramado infinito. */
export class Environment {
  constructor(renderer) {
    this.scene = new Scene();
    this.scene.fog = new Fog(DAY.fog, DAY.fogNear, 700);
    this.sunDirection = new Vector3(...SUN_DIRECTION).normalize();

    this.sky = createSkyDome(900, this.sunDirection, false);
    this.sky.renderOrder = 2;          // desenhado depois dos opacos: só os pixels de fundo são pintados
    this.scene.add(this.sky);

    // reflexos do ambiente: renderiza um céu pequeno uma única vez e descarta o gerador
    const envScene = new Scene();
    const envSky = createSkyDome(50, this.sunDirection, true);
    envScene.add(envSky);
    const pmrem = new PMREMGenerator(renderer);
    this.scene.environment = pmrem.fromScene(envScene, 0.02).texture;
    this.scene.environmentIntensity = DAY.envIntensity;
    pmrem.dispose();
    envSky.traverse(o => { o.geometry?.dispose(); o.material?.dispose(); });

    this.groundTexture = createCanvasTexture(256, 256, (g, w, h) => {
      g.fillStyle = '#4f7d3a', g.fillRect(0, 0, w, h);
      for (let n = 0; n < 2500; n++) {
        g.fillStyle = `hsl(${85 + Math.random() * 30},${35 + Math.random() * 20}%,${25 + Math.random() * 18}%)`;
        g.fillRect(Math.random() * w, Math.random() * h, 2, 2 + Math.random() * 3);
      }
    }, 400, 400);
    this.ground = new Mesh(new PlaneGeometry(2e3, 2e3), new MeshStandardMaterial({ map: this.groundTexture, roughness: 1 }));
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.ground.renderOrder = 1;       // depois de ruas e prédios (menos sobreposição de pixels)
    this.scene.add(this.ground);

    this.night = false;
    this.mapFogFar = 700;
    this.renderDistance = null;
  }

  /** O gramado acompanha o tamanho do mapa (a cidade é maior que o circuito). */
  setGroundScale(scale) {
    this.ground.scale.setScalar(scale);
    this.groundTexture.repeat.set(400 * scale, 400 * scale);
  }

  setMapFogFar(far) {
    this.mapFogFar = far;
    this.#applyFog();
  }

  setRenderDistance(distance) {
    this.renderDistance = distance;
    this.#applyFog();
  }

  setNight(night) {
    this.night = night;
    const p = night ? NIGHT : DAY;
    this.scene.environmentIntensity = p.envIntensity;
    this.scene.fog.color.set(p.fog);
    this.scene.fog.near = p.fogNear;
    this.sky.material.color.setScalar(p.sky);
    this.#applyFog();
  }

  /** O céu acompanha a câmera para nunca ser alcançado. */
  followCamera(camera) {
    this.sky.position.copy(camera.position);
  }

  #applyFog() {
    this.scene.fog.far = this.renderDistance ?? (this.night ? NIGHT.fogFar : this.mapFogFar);
  }
}

/** Esfera com gradiente de cor nos vértices (horizonte claro, zênite azul) e, opcionalmente, o sol. */
function createSkyDome(radius, sunDirection, withSun) {
  const geo = new SphereGeometry(radius, 32, 16);
  const pos = geo.attributes.position;
  const horizon = new Color(13624306), zenith = new Color(3108804), below = new Color(7176034), c = new Color();
  const colors = [];
  for (let i = 0; i < pos.count; i++) {
    const h = pos.getY(i) / radius;
    h < 0 ? c.copy(below) : c.lerpColors(horizon, zenith, Math.pow(h, 0.5));
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new Float32BufferAttribute(colors, 3));
  const dome = new Mesh(geo, new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false }));
  if (withSun) {
    const sun = new Mesh(new SphereGeometry(radius * 0.08, 16, 8), new MeshBasicMaterial({ color: new Color(14, 12, 9) }));
    sun.position.copy(sunDirection).multiplyScalar(radius * 0.9);
    dome.add(sun);
  }
  return dome;
}
