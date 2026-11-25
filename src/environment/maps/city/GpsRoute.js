import { Group, Mesh, BufferGeometry, Float32BufferAttribute, MeshBasicMaterial, CylinderGeometry, DoubleSide, AdditiveBlending } from 'three';
import { createCanvasTexture } from '../../textures.js';
import { formatDistance } from '../../../utils/MathUtils.js';
import { RENDER_LAYERS } from '../../../utils/Constants.js';

const ROUTE_COLOR = '#b44dff';
const RECALC_INTERVAL = 0.6;   // s

/**
 * GPS no estilo dos jogos de mundo aberto: destino marcado, rota pelas ruas recalculada
 * continuamente, faixa com setas no asfalto e feixe de luz no destino.
 */
export class GpsRoute {
  constructor(network, streetNames, parent) {
    this.network = network;
    this.names = streetNames;
    this.destination = null;
    this.route = null;
    this.timer = 0;
    this.label = '';             // texto para o HUD ("Rua X · 1,2 km")
    this.onArrive = null;

    this.arrowTexture = createCanvasTexture(64, 64, (g, w, h) => {
      g.clearRect(0, 0, w, h), g.fillStyle = 'rgba(190,80,255,.55)', g.fillRect(0, 0, w, h);
      g.strokeStyle = '#f4dcff', g.lineWidth = 9, g.lineJoin = 'round';
      g.beginPath(), g.moveTo(12, 44), g.lineTo(32, 20), g.lineTo(52, 44), g.stroke();
    });
    this.line = new Mesh(new BufferGeometry(), new MeshBasicMaterial({
      map: this.arrowTexture, transparent: true, depthWrite: false, side: DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -8, polygonOffsetUnits: -8,
    }));
    this.line.frustumCulled = false;
    this.line.renderOrder = 3;
    this.line.visible = false;

    this.beam = new Mesh(new CylinderGeometry(2.2, 2.2, 90, 24, 1, true),
      new MeshBasicMaterial({ color: 12603135, transparent: true, opacity: 0.28, depthWrite: false, side: DoubleSide, blending: AdditiveBlending }));
    this.beam.position.y = 45;
    this.beam.renderOrder = 4;
    const ring = new Mesh(new CylinderGeometry(4.5, 4.5, 0.12, 32),
      new MeshBasicMaterial({ color: 12603135, transparent: true, opacity: 0.6, depthWrite: false }));
    this.marker = new Group();
    this.marker.add(this.beam, ring);
    this.marker.visible = false;
    // transparentes: desenhados na passada do carro para a ordem de mistura ficar correta
    this.line.layers.set(RENDER_LAYERS.VEHICLE);
    this.marker.traverse(o => o.layers.set(RENDER_LAYERS.VEHICLE));
    parent.add(this.line, this.marker);
  }

  get hasDestination() {
    return !!this.destination;
  }

  /** Marca o destino na rua mais próxima do ponto clicado (até 60 m). */
  setDestination(x, z) {
    const p = this.network.project(x, z);
    if (!p || p.d > 60) return false;
    this.destination = p;
    this.marker.position.set(p.x, 0, p.z);
    this.marker.visible = true;
    this.timer = 0;
    return true;
  }

  clear() {
    this.destination = this.route = null;
    this.line.visible = this.marker.visible = false;
    this.label = '';
  }

  update(focus, dt) {
    if (!this.destination) return;
    this.arrowTexture.offset.y -= dt * 1.4;
    this.beam.rotation.y += dt;
    if ((this.timer -= dt) > 0) return;
    this.timer = RECALC_INTERVAL;
    const origin = this.network.project(focus.x, focus.z);
    if (!origin) return;
    const r = this.network.route(origin, this.destination);
    if (!r) {
      this.label = 'Sem caminho até o destino';
      this.routeFound = false;
      return;
    }
    this.route = r;
    this.routeFound = true;
    this.#buildLine(r.pts);
    const name = this.names[this.network.edges[this.destination.e].n] || 'Destino';
    this.label = name + ' \xB7 ' + formatDistance(r.L + origin.d);
    if (r.L < 14 && origin.d < 12) {
      this.clear();
      this.onArrive?.();
    }
  }

  /** Faixa larga sobre o asfalto, com UV ao longo do caminho (as setas "andam" para o destino). */
  #buildLine(pts) {
    const pos = [], uv = [], idx = [], hw = 0.75;
    let dist = 0;
    for (let k = 0; k < pts.length / 2; k++) {
      const a = Math.max(0, k - 1), b = Math.min(pts.length / 2 - 1, k + 1);
      let tx = pts[b * 2] - pts[a * 2], tz = pts[b * 2 + 1] - pts[a * 2 + 1];
      const tl = Math.hypot(tx, tz) || 1;
      tx /= tl, tz /= tl;
      if (k) dist += Math.hypot(pts[k * 2] - pts[k * 2 - 2], pts[k * 2 + 1] - pts[k * 2 - 1]);
      pos.push(pts[k * 2] - tz * hw, 0.08, pts[k * 2 + 1] + tx * hw, pts[k * 2] + tz * hw, 0.08, pts[k * 2 + 1] - tx * hw);
      uv.push(0, dist / 2.6, 1, dist / 2.6);
      if (k) idx.push(k * 2 - 2, k * 2 - 1, k * 2, k * 2 - 1, k * 2 + 1, k * 2);
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    this.line.geometry.dispose();   // a rota antiga é liberada a cada recálculo
    this.line.geometry = geo;
    this.line.visible = pts.length >= 4;
  }

  /** Desenha a rota e o destino num canvas 2D, com a função de projeção do mapa. */
  drawOn(g, project, lineWidth) {
    if (this.route) {
      const P = this.route.pts;
      g.strokeStyle = ROUTE_COLOR, g.lineWidth = lineWidth, g.lineCap = g.lineJoin = 'round';
      g.beginPath();
      for (let k = 0; k < P.length; k += 2) {
        const [x, y] = project(P[k], P[k + 1]);
        k ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.stroke();
    }
  }

  dispose() {
    this.line.geometry.dispose();
    this.line.material.dispose();
    this.arrowTexture.dispose();
    this.marker.traverse(o => { o.geometry?.dispose(); o.material?.dispose(); });
  }
}
