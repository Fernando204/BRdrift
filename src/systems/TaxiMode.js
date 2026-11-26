import { Group, Mesh, CylinderGeometry, ConeGeometry, MeshBasicMaterial, AdditiveBlending, DoubleSide } from 'three';
import { Character } from '../player/Character.js';
import { RENDER_LAYERS } from '../utils/Constants.js';
import { formatDistance } from '../utils/MathUtils.js';
import { $ } from '../utils/Helpers.js';

/**
 * Modo táxi (cidade): um passageiro aparece numa calçada aleatória; o jogador vai até ele (GPS), para ao
 * lado, ele entra e senta no banco do passageiro; o GPS leva ao destino (aleatório, 350 m a 2,2 km) e,
 * parando lá, ele desce e a corrida é paga. O valor depende do comprimento da ROTA pelas ruas entre o
 * embarque e o destino (bandeirada + preço por km), não do caminho que o jogador fez.
 */
const PICKUP_RANGE = [120, 450];      // distância (linha reta) do passageiro até o carro ao aparecer
const DEST_RANGE = [350, 2200];       // distância (linha reta) do embarque ao destino
const ROUTE_LIMITS = [300, 5500];     // rota aceitável (o servidor recusa acima de 6 km)
const STOP_RADIUS = 9;                // metros: parar perto o bastante do passageiro/destino
const STOP_SPEED = 1.6;               // m/s: considerado parado
const WALK_SPEED = 1.7;               // m/s do passageiro andando até o carro
const SHIRTS = [0xc0392b, 0x27ae60, 0xf1c40f, 0x8e44ad, 0xe67e22, 0x16a085, 0xecf0f1, 0x34495e, 0xd35400, 0x2c3e50];
const PANTS = [0x2a2f3b, 0x3b2f25, 0x1f3a5f, 0x555555, 0x6d5d4b];
const SKINS = [0xf1c27d, 0xd8a07a, 0xc68642, 0x8d5524, 0xe0ac69];
const HAIRS = [0x2a1c12, 0x1b1b1b, 0x6b4423, 0xb8860b, 0x8a8a8a];
const pick = a => a[(Math.random() * a.length) | 0];

export class TaxiMode {
  constructor(game) {
    this.game = game;
    this.active = false;
    this.state = 'idle';
    this.rates = { baseFare: 10, perKm: 60 };
    this.passenger = null;        // { char, x, z, heading, road: {x, z}, phase }
    this.ride = null;             // { dest, destRoad, routeL, straight, fare, start }
    this.timer = 0;
    this.shown = '';
    this.markers = this.#buildMarkers();
  }

  get map() { return this.game.world.map; }
  get available() { return !!this.map?.network; }

  /** Preço da corrida (mesma fórmula do servidor). */
  fare(routeMeters) {
    return Math.floor(this.rates.baseFare + this.rates.perKm * routeMeters / 1000);
  }

  async start() {
    if (!this.available) return false;
    this.active = true;
    this.state = 'spawn';
    this.timer = 1.2;
    this.map.gps.autoClear = false;
    $('taxi').hidden = false;
    this.#panel('Modo táxi', 'Procurando um passageiro…');
    if (this.game.api.available) {
      try { this.rates = await this.game.api.taxiRates(); } catch { /* usa a tabela padrão */ }
    }
    return true;
  }

  stop() {
    this.active = false;
    this.state = 'idle';
    this.#removePassenger();
    this.ride = null;
    this.markers.pickup.visible = false;
    const gps = this.map?.gps;
    if (gps) gps.autoClear = true, gps.beam.visible = true, gps.clear();
    $('taxi').hidden = true;
    this.shown = '';
  }

  update(dt) {
    if (!this.active || !this.available) return;
    const g = this.game, ctrl = g.controller, s = ctrl.state, inCar = g.player.inVehicle;
    const speed = ctrl.speedMs;
    this.markers.pickup.rotation.y += dt * 1.5;
    this.markers.sign.position.y = 2.25 + Math.sin(performance.now() / 300) * 0.08;
    switch (this.state) {
      case 'spawn':
        if ((this.timer -= dt) <= 0) this.#spawnPassenger(s);
        break;
      case 'pickup': {
        const p = this.passenger, d = Math.hypot(s.x - p.road.x, s.z - p.road.z);
        if (Math.hypot(p.x - p.home.x, p.z - p.home.z) > 0.1) this.#walkTo(p, p.home.x, p.home.z, dt);   // volta ao ponto
        else this.#idle(p, dt);
        if (inCar && d < STOP_RADIUS && speed < STOP_SPEED) {
          // entra pela porta do lado em que está (a da direita, se o carro parou junto à calçada dele)
          p.side = (p.x - s.x) * -Math.cos(s.h) + (p.z - s.z) * Math.sin(s.h) >= -0.5 ? 1 : -1;
          this.state = 'boarding';
          this.timer = 7;
          this.#panel('Passageiro entrando…', 'Espere parado');
        } else {
          this.#panel('Pegue o passageiro', d < 40 ? 'Pare ao lado dele' : `${formatDistance(d)} · siga o GPS`);
        }
        break;
      }
      case 'boarding': {
        const p = this.passenger, door = this.#doorPoint(s, p.side);
        const dx = door.x - p.x, dz = door.z - p.z, d = Math.hypot(dx, dz);
        if (!inCar || speed > 3 || Math.hypot(s.x - p.road.x, s.z - p.road.z) > STOP_RADIUS + 6) {
          this.state = 'pickup';                   // o carro saiu: volta a esperar na calçada
          break;
        }
        if (d < 0.35 || (this.timer -= dt) <= 0) this.#board();
        else this.#walkTo(p, door.x, door.z, dt);
        break;
      }
      case 'ride': {
        const r = this.ride, d = Math.hypot(s.x - r.destRoad.x, s.z - r.destRoad.z);
        if (!inCar) { this.#cancel('Corrida cancelada: o passageiro desceu.'); break; }
        if (d < STOP_RADIUS && speed < STOP_SPEED) { this.#alight(); break; }
        if (g.vehicle && this.passenger.char.root.parent !== g.vehicle.model) this.#seat();   // trocou de carro no meio da corrida
        this.#panel(`Corrida: ${r.fare} moedas`, d < 40 ? 'Pare para o passageiro descer' : `Rota de ${formatDistance(r.routeL)} \u00B7 siga o GPS`);
        break;
      }
      case 'leaving': {
        const p = this.passenger;
        if (p) this.#walkTo(p, p.home.x, p.home.z, dt);
        if ((this.timer -= dt) <= 0) {
          this.#removePassenger();
          this.state = 'spawn';
          this.timer = 2.5;
          this.#panel('Modo táxi', 'Procurando o próximo passageiro…');
        }
        break;
      }
    }
  }

  // ------------------------------------------------------------------ passageiro
  #spawnPassenger(car) {
    const spot = this.#randomSidewalk(car.x, car.z, PICKUP_RANGE);
    if (!spot) { this.timer = 1; return; }
    const char = new Character({ shirt: pick(SHIRTS), pants: pick(PANTS), skin: pick(SKINS), hair: pick(HAIRS) });
    char.standIn(this.game.scene, spot.x, spot.z, spot.faceRoad);
    char.root.traverse(o => { if (o.isMesh) o.castShadow = true; });
    this.passenger = { char, x: spot.x, z: spot.z, face: spot.faceRoad, heading: spot.faceRoad, road: spot.road, home: { x: spot.x, z: spot.z }, side: 1, phase: 0 };
    this.markers.pickup.position.set(spot.x, 0, spot.z);
    this.markers.pickup.visible = true;
    this.map.gps.setDestination(spot.road.x, spot.road.z);
    this.map.gps.beam.visible = false;                 // o feixe amarelo marca o passageiro; o anel roxo, onde parar
    this.state = 'pickup';
    this.game.hud.message('Novo passageiro! Siga o GPS', 2.5);
  }

  /** Ponto aleatório numa calçada a uma distância [min, max] de (x, z), com o ponto da rua ao lado. */
  #randomSidewalk(x, z, [min, max]) {
    const net = this.map.network, segs = net.segments, side = this.map.sidewalkWidth || 2.5;
    for (let tries = 0; tries < 400; tries++) {
      const s = segs[(Math.random() * segs.length) | 0];
      if (s[6] === 7) continue;                                  // sem estradas de terra
      const dx = s[2] - s[0], dz = s[3] - s[1], L = Math.hypot(dx, dz);
      if (L < 12) continue;
      const t = 0.2 + Math.random() * 0.6, cx = s[0] + dx * t, cz = s[1] + dz * t;
      const dist = Math.hypot(cx - x, cz - z);
      if (dist < min || dist > max) continue;
      const nx = dz / L, nz = -dx / L, sign = Math.random() < 0.5 ? 1 : -1, hw = s[4];
      const px = cx + nx * sign * (hw + side * 0.55), pz = cz + nz * sign * (hw + side * 0.55);
      if (net.isOnRoad(px, pz)) continue;                        // calçada colada em outra rua: tenta de novo
      return {
        x: px, z: pz, faceRoad: Math.atan2(-nx * sign, -nz * sign),
        road: { x: cx + nx * sign * hw * 0.55, z: cz + nz * sign * hw * 0.55 },
      };
    }
    return null;
  }

  /** Parado de frente para a rua, acenando com o braço direito erguido. */
  #idle(p, dt) {
    p.phase += dt;
    p.heading = p.face;
    p.char.animateWalk(0, 0, p.x, p.z, p.face);
    p.char.armR.rotation.x = -2.7;
    p.char.armR.rotation.z = -0.25 + Math.sin(p.phase * 6) * 0.3;
  }

  #walkTo(p, tx, tz, dt) {
    const dx = tx - p.x, dz = tz - p.z, d = Math.hypot(dx, dz);
    p.char.armR.rotation.z = 0;
    if (d < 0.05) { p.char.animateWalk(0, 0, p.x, p.z, p.heading); return; }
    const step = Math.min(d, WALK_SPEED * dt);
    p.x += dx / d * step; p.z += dz / d * step;
    p.heading = Math.atan2(dx, dz);
    p.phase += dt * 9;
    p.char.animateWalk(p.phase, WALK_SPEED, p.x, p.z, p.heading);
  }

  /** Ponto junto à porta: side 1 = direita (banco do passageiro), -1 = esquerda. */
  #doorPoint(s, side = 1) {
    const fx = Math.sin(s.h), fz = Math.cos(s.h), rx = -Math.cos(s.h) * side, rz = Math.sin(s.h) * side;
    return { x: s.x + rx * 1.25 + fx * 0.15, z: s.z + rz * 1.25 + fz * 0.15 };
  }

  /** Entra e senta no banco do passageiro (espelho do banco do motorista); começa a corrida. */
  #board() {
    const g = this.game, p = this.passenger;
    p.char.animateWalk(0, 0, 0, 0, 0);
    this.#seat();
    this.markers.pickup.visible = false;
    const net = this.map.network;
    for (let tries = 0; tries < 30; tries++) {
      const spot = this.#randomSidewalk(p.road.x, p.road.z, DEST_RANGE);
      if (!spot) continue;
      const o = net.project(p.road.x, p.road.z), d = net.project(spot.road.x, spot.road.z);
      const r = o && d ? net.route(o, d) : null;
      if (!r || r.L < ROUTE_LIMITS[0] || r.L > ROUTE_LIMITS[1]) continue;
      const routeL = Math.round(r.L);
      this.ride = {
        dest: spot, destRoad: spot.road, routeL, fare: this.fare(routeL),
        straight: Math.hypot(d.x - o.x, d.z - o.z), start: performance.now(),   // entre os pontos da rota: nunca maior que ela
      };
      this.map.gps.setDestination(spot.road.x, spot.road.z);
      this.map.gps.beam.visible = true;
      this.state = 'ride';
      g.hud.message(`Corrida de ${formatDistance(routeL)}: ${this.ride.fare} moedas`, 3);
      return;
    }
    // sem destino possível daqui: o passageiro desiste e outro aparece
    this.#cancel('O passageiro desistiu da corrida.');
  }

  #seat() {
    const seat = this.game.vehicles.config.driverSeat;
    const c = this.passenger.char;
    c.sitIn(this.game.vehicle.model, { position: [-seat.position[0], seat.position[1], seat.position[2]], tilt: seat.tilt, scale: seat.scale });
    c.armL.rotation.set(-0.55, 0, 0);                  // mãos no colo (quem segura o volante é o motorista)
    c.armR.rotation.set(-0.55, 0, 0);
  }

  /** O carro vai ser trocado: tira o passageiro do modelo antigo (que será descartado). */
  detachPassenger() {
    if (this.passenger && this.state === 'ride') this.passenger.char.root.removeFromParent();
  }

  /** Tempo de pausa não conta na duração da corrida. */
  shiftTimers(ms) {
    if (this.ride) this.ride.start += ms;
  }

  #alight() {
    const g = this.game, p = this.passenger, r = this.ride, s = g.controller.state;
    const side = (r.dest.x - s.x) * -Math.cos(s.h) + (r.dest.z - s.z) * Math.sin(s.h) >= -0.5 ? 1 : -1;   // desce do lado da calçada
    const door = this.#doorPoint(s, side);
    p.char.standIn(g.scene, door.x, door.z, s.h);
    p.x = door.x; p.z = door.z; p.home = { x: r.dest.x, z: r.dest.z };
    this.map.gps.clear();
    this.state = 'leaving';
    this.timer = 4;
    this.#pay(r);
    this.ride = null;
  }

  async #pay(r) {
    const g = this.game, duration = Math.round(performance.now() - r.start);
    this.#panel(`Corrida concluída · ${formatDistance(r.routeL)}`, `+${r.fare} moedas`);
    if (!g.session.loggedIn) {
      g.iface.toast(`Corrida de ${formatDistance(r.routeL)}: ${r.fare} moedas (modo offline: não são salvas)`);
      return;
    }
    try {
      const res = await g.api.taxiFare(r.routeL, Math.floor(r.straight), duration);
      g.session.setCoins(res.coins);
      g.hud.setCoins(res.coins);
      g.iface.toast(`Corrida de ${formatDistance(r.routeL)}: +${res.coinsEarned} moedas`, 'gold');
    } catch (err) {
      g.iface.toast('Corrida não registrada: ' + err.message);
    }
  }

  #cancel(text) {
    const g = this.game, p = this.passenger;
    if (p && p.char.root.parent !== g.scene) {
      const door = this.#doorPoint(g.controller.state);
      p.char.standIn(g.scene, door.x, door.z, g.controller.state.h);
      p.x = door.x; p.z = door.z;
    }
    this.ride = null;
    this.markers.pickup.visible = false;
    this.map.gps.clear();
    g.hud.message(text, 3);
    this.#panel('Corrida cancelada', 'Procurando outro passageiro…');
    this.state = 'leaving';
    this.timer = 3;
  }

  #removePassenger() {
    if (this.passenger) this.passenger.char.dispose();
    this.passenger = null;
  }

  // ------------------------------------------------------------------ marcador e painel
  #buildMarkers() {
    const beam = new Mesh(new CylinderGeometry(0.55, 0.55, 40, 16, 1, true),
      new MeshBasicMaterial({ color: 0xffc928, transparent: true, opacity: 0.22, depthWrite: false, side: DoubleSide, blending: AdditiveBlending }));
    beam.position.y = 22.7;                            // começa acima da cabeça: não ofusca o passageiro
    const sign = new Mesh(new ConeGeometry(0.28, 0.5, 4), new MeshBasicMaterial({ color: 0xffc928 }));
    sign.rotation.x = Math.PI;                         // seta apontando para o passageiro
    sign.position.y = 2.25;
    const pickup = new Group();
    pickup.add(beam, sign);
    pickup.visible = false;
    pickup.traverse(o => o.layers.set(RENDER_LAYERS.VEHICLE));   // transparentes desenhados na passada do carro
    this.game.scene.add(pickup);
    return { pickup, sign };
  }

  #panel(title, sub) {
    const key = title + '|' + sub;
    if (key === this.shown) return;
    this.shown = key;
    $('taxi-title').textContent = title;
    $('taxi-sub').textContent = sub;
  }
}
