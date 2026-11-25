import { Group, Mesh, Vector3, Quaternion, Color, SpotLight, DoubleSide, Float32BufferAttribute, BufferAttribute } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { disposeObject3D } from '../utils/Helpers.js';
import { RENDER_LAYERS } from '../utils/Constants.js';

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
    this.#prepareCustomizableParts();
    this.#mergeStaticMeshes();
    this.#setupHeadlights();
    this.root.traverse(o => o.layers.set(RENDER_LAYERS.VEHICLE));
    for (const light of this.headlights) light.layers.enable(RENDER_LAYERS.WORLD);

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
      pivot.userData.baseY = wheel.position.y;     // altura original do eixo (para o rebaixamento)
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
    this.door.traverse(object => { object.userData.vehicleInteraction = cfg.door.interactionAction; });
    this.door.traverse(o => {
      if (!o.isMesh) return;
      o.castShadow = o.receiveShadow = true;
      if (o.material && /Vidro/.test(o.material.name)) o.renderOrder = 2;
    });
    scene.updateMatrixWorld(true);
    this.movingParts = new Set([this.steeringWheel, this.door, ...Object.values(this.wheels).map(w => w.pivot)]);
  }

  #prepareCustomizableParts() {
    const definitions = new Map((this.config.customizableParts || []).map(part => [part.objectName, part]));
    const found = new Set();
    this.customizableParts = [];
    this.paintMaterials = [];
    this.model.traverse(object => {
      const definition = definitions.get(object.name);
      if (!definition) return;
      found.add(definition.objectName);
      const meshes = [];
      if (object.isMesh) meshes.push(object);
      else object.traverse(child => { if (child.isMesh) meshes.push(child); });

      const partMaterials = [], paintMaterials = [], meshMaterials = [];
      for (const mesh of meshes) {
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        const clones = materials.map(material => material.clone());
        meshMaterials.push([mesh, clones]);
        partMaterials.push(...clones);
        paintMaterials.push(...clones.filter(material => material.name === definition.materialName));
      }
      if (!paintMaterials.length) {
        console.warn(`A peça "${definition.objectName}" não possui o material "${definition.materialName}".`);
        partMaterials.forEach(material => material.dispose());
        return;
      }
      for (const [mesh, clones] of meshMaterials) mesh.material = Array.isArray(mesh.material) ? clones : clones[0];

      const part = {
        ...definition,
        object,
        meshes,
        materials: partMaterials,
        paintMaterials,
        originalColor: definition.originalColor || '#' + paintMaterials[0].color.getHexString(),
      };
      object.userData.customizablePart = part;
      for (const mesh of meshes) mesh.userData.customizablePart = part;
      this.customizableParts.push(part);
      if (definition.materialName === this.config.paintMaterial) this.paintMaterials.push(...paintMaterials);
    });

    for (const definition of definitions.values()) {
      if (!found.has(definition.objectName)) console.warn(`Peça personalizável não encontrada no modelo: "${definition.objectName}".`);
    }
  }

  /** Funde todas as malhas estáticas que usam o mesmo material numa só (menos chamadas de desenho). */
  #mergeStaticMeshes() {
    const scene = this.model, lights = this.config.lights;
    const isMoving = obj => { for (; obj; obj = obj.parent) if (this.movingParts.has(obj)) return true; return false; };
    const byMaterial = new Map(), merged = [], indicatorSides = {};
    scene.traverse(mesh => {
      if (!mesh.isMesh || isMoving(mesh)) return;
      if (mesh.userData.customizablePart) return;
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
    if (this.materials.paint) this.paintMaterials.push(this.materials.paint);
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

  /**
   * Rebaixamento: desce o modelo inteiro (carroceria, interior, faróis, motorista, câmera de cockpit)
   * e sobe os eixos na mesma medida, para as rodas continuarem apoiadas no chão.
   * @param drop metros, limitado a config.suspension.maxDrop
   */
  setRideHeight(drop) {
    const max = this.config.suspension?.maxDrop ?? 0;
    this.rideDrop = Math.min(Math.max(drop, 0), max);
    this.model.position.y = -this.rideDrop;
    for (const w of Object.values(this.wheels)) w.pivot.position.y = w.pivot.userData.baseY + this.rideDrop;
    this.root.updateMatrixWorld(true);
  }

  setColor(hex) {
    for (const material of this.paintMaterials) material.color.set(hex);
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
      // apagado de fato: o Three.js deixa de calcular os 2 holofotes em todos os pixels da cena
      // (as duas variantes dos shaders são pré-compiladas em Game.prewarmShaders, sem travadas)
      light.visible = mode > 0 || light.intensity > 1;
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
