import { Group, Mesh, Vector3, Quaternion, Color, SpotLight, DoubleSide, Float32BufferAttribute, BufferAttribute } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { disposeObject3D } from '../utils/Helpers.js';

const KEEP_ATTRIBUTES = ['position', 'normal', 'uv'];
const UP = new Vector3(0, 1, 0);
const _q = new Quaternion();
const _center = new Vector3();

/**
 * Parte visual de um veículo: monta o modelo glTF (rodas, volante e porta móveis; o resto é
 * fundido por material para reduzir chamadas de desenho), luzes e animações.
 */
export class Vehicle {
  constructor(gltf, config) {
    this.config = config;
    this.root = new Group();          // posição/rumo no mundo
    this.model = gltf.scene;          // inclinação da carroceria (rolagem/arfagem)
    this.root.add(this.model);

    this.#setupMovingParts();
    this.#mergeStaticMeshes();
    this.#setupHeadlights();

    this.doorAngle = 0;
    this.doorTarget = 0;
    this.wheelSpin = 0;
    this.steeringAngle = 0;          // ângulo animado do volante (com mola)
    this.steeringVelocity = 0;
  }

  #setupMovingParts() {
    const scene = this.model, cfg = this.config;
    this.wheels = {};
    for (const [slot, name] of Object.entries(cfg.wheels)) {
      const wheel = scene.getObjectByName(name), pivot = new Group();
      pivot.position.copy(wheel.position);
      wheel.position.set(0, 0, 0);
      scene.add(pivot);
      pivot.add(wheel);
      this.wheels[slot] = { pivot, wheel, front: slot[0] === 'f' };
    }
    this.steeringWheel = scene.getObjectByName(cfg.steeringWheel);
    this.steeringRest = this.steeringWheel.quaternion.clone();
    scene.updateMatrixWorld(true);

    this.door = new Group();
    this.door.position.fromArray(cfg.door.hinge);
    scene.add(this.door);
    scene.updateMatrixWorld(true);
    for (const name of cfg.door.parts) {
      const part = scene.getObjectByName(name);
      if (part) this.door.attach(part);
    }
    this.door.traverse(o => {
      if (!o.isMesh) return;
      o.castShadow = o.receiveShadow = true;
      if (o.material && /Vidro/.test(o.material.name)) o.renderOrder = 2;
    });
    scene.updateMatrixWorld(true);
    this.movingParts = new Set([this.steeringWheel, this.door, ...Object.values(this.wheels).map(w => w.pivot)]);
  }

  /** Funde todas as malhas estáticas que usam o mesmo material numa só (menos chamadas de desenho). */
  #mergeStaticMeshes() {
    const scene = this.model, lights = this.config.lights;
    const isMoving = obj => { for (; obj; obj = obj.parent) if (this.movingParts.has(obj)) return true; return false; };
    const byMaterial = new Map(), merged = [], indicatorSides = {};
    scene.traverse(mesh => {
      if (!mesh.isMesh || isMoving(mesh)) return;
      const geo = toFloatGeometry(mesh.geometry);
      geo.applyMatrix4(mesh.matrixWorld);
      if (mesh.matrixWorld.determinant() < 0) flipWinding(geo);
      let material = mesh.material;
      if (material.name === lights.indicator) {   // setas esquerda/direita piscam separadamente
        geo.computeBoundingBox();
        const side = geo.boundingBox.getCenter(_center).x > 0 ? 'L' : 'R';
        material = indicatorSides[side] || (indicatorSides[side] = material.clone());
      }
      if (!byMaterial.has(material)) byMaterial.set(material, []);
      byMaterial.get(material).push(geo);
      merged.push(mesh);
    });
    merged.forEach(m => { m.removeFromParent(); m.geometry.dispose(); });

    this.materials = { indicators: indicatorSides };
    for (const [material, geometries] of byMaterial) {
      const mesh = new Mesh(mergeGeometries(geometries, false), material);
      geometries.forEach(g => g.dispose());
      mesh.castShadow = mesh.receiveShadow = true;
      scene.add(mesh);
      const name = material.name;
      if (/Vidro/.test(name)) {
        Object.assign(material, { transparent: true, opacity: 0.3, depthWrite: false, side: DoubleSide, roughness: 0.04, metalness: 0.2 });
        material.color.set(726560);
        mesh.renderOrder = 2;
      }
      if (name === lights.tail) material.emissive = new Color(16718352), material.emissiveIntensity = 0.15, this.materials.tail = material;
      if (name === lights.reverse) material.emissive = new Color(16777215), material.emissiveIntensity = 0, this.materials.reverse = material;
      if (name === lights.head) material.emissive = new Color(16773846), material.emissiveIntensity = 0.05, this.materials.head = material;
      if (name === lights.indicator) material.emissive = new Color(16742912), material.emissiveIntensity = 0;
      if (name === this.config.paintMaterial) this.materials.paint = material;
    }
  }

  #setupHeadlights() {
    const [x, y, z] = this.config.lights.headlightOffset;
    this.headlights = [];
    for (const side of [-1, 1]) {
      const light = new SpotLight(16773846, 0, 70, 0.5, 0.7, 2);
      light.userData.side = side;
      light.position.set(side * x, y, z);
      this.model.add(light, light.target);
      this.headlights.push(light);
    }
  }

  setColor(hex) {
    this.materials.paint?.color.set(hex);
  }

  /** Posição, rodas, volante, porta e luzes a partir do estado do controlador. */
  update(dt, ctrl) {
    const s = ctrl.state;
    this.doorAngle += (this.doorTarget - this.doorAngle) * Math.min(1, dt * 5);
    this.door.rotation.y = this.config.door.openAngle * this.doorAngle;

    this.root.position.set(s.x, 0, s.z);
    this.root.rotation.y = s.h;
    this.model.rotation.set(s.pitch, 0, s.roll);
    this.wheelSpin += s.vf * dt / this.config.physics.wheelRadius;
    for (const w of Object.values(this.wheels)) {
      w.wheel.rotation.x = this.wheelSpin;
      if (w.front) w.pivot.rotation.y = -s.steer * 1.2;
    }

    // volante: segue o esterço com uma mola amortecida (integração em passos de 20 ms)
    const target = -s.steer / 0.45 * 2.8, step = 0.02;
    for (let t = 0; t < dt; t += step) {
      this.steeringVelocity += ((target - this.steeringAngle) * 140 - this.steeringVelocity * 15) * step;
      this.steeringAngle += this.steeringVelocity * step;
    }
    this.steeringWheel.quaternion.copy(this.steeringRest).multiply(_q.setFromAxisAngle(UP, this.steeringAngle));

    const mode = ctrl.lightsMode, high = mode === 2, m = this.materials;
    m.tail.emissiveIntensity = s.brake ? 3 : mode ? 0.7 : 0.15;
    m.head.emissiveIntensity = [0.05, 2.5, 4][mode];
    for (const light of this.headlights) {
      const side = light.userData.side;
      light.intensity += ([0, 3e3, 7e3][mode] - light.intensity) * Math.min(1, dt * 12);
      light.angle = high ? 0.33 : 0.5;
      light.distance = high ? 140 : 70;
      light.target.position.set(side * (high ? 0.35 : 0.5), high ? 0.5 : 0, high ? 45 : 14);
    }
    m.reverse.emissiveIntensity = s.reverse ? 2 : 0;
    if (m.indicators.L) m.indicators.L.emissiveIntensity = ctrl.indicatorLeftOn ? 4 : 0;
    if (m.indicators.R) m.indicators.R.emissiveIntensity = ctrl.indicatorRightOn ? 4 : 0;
    this.root.updateMatrixWorld(true);
  }

  dispose() {
    disposeObject3D(this.root);
  }
}

/**
 * Cópia da geometria só com posição/normal/UV em Float32 (desfaz a quantização do Meshopt),
 * para poder aplicar a matriz do objeto e fundir malhas com segurança.
 */
function toFloatGeometry(source) {
  const geo = source.clone();
  for (const name of Object.keys(geo.attributes)) if (!KEEP_ATTRIBUTES.includes(name)) geo.deleteAttribute(name);
  for (const name of KEEP_ATTRIBUTES) {
    const attr = geo.getAttribute(name);
    if (!attr || (attr.array instanceof Float32Array && !attr.normalized && !attr.isInterleavedBufferAttribute)) continue;
    const size = attr.itemSize, out = new Float32Array(attr.count * size);
    for (let i = 0; i < attr.count; i++) {
      out[i * size] = attr.getX(i);
      if (size > 1) out[i * size + 1] = attr.getY(i);
      if (size > 2) out[i * size + 2] = attr.getZ(i);
      if (size > 3) out[i * size + 3] = attr.getW(i);
    }
    geo.setAttribute(name, new BufferAttribute(out, size));
  }
  if (!geo.attributes.uv) geo.setAttribute('uv', new Float32BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
  if (!geo.index) geo.setIndex([...Array(geo.attributes.position.count).keys()]);
  return geo;
}

function flipWinding(geo) {
  const idx = geo.index.array.slice();
  for (let i = 0; i < idx.length; i += 3) { const t = idx[i]; idx[i] = idx[i + 2]; idx[i + 2] = t; }
  geo.setIndex(Array.from(idx));
}
