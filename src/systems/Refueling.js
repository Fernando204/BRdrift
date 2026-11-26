import { Mesh, BoxGeometry, CylinderGeometry, MeshStandardMaterial } from 'three';
import { Character } from '../player/Character.js';
import { GasStations, ISLANDS } from '../environment/maps/city/GasStations.js';
import { angleDiff } from '../utils/MathUtils.js';
import { $ } from '../utils/Helpers.js';

/**
 * Frentistas e abastecimento nos postos da cidade.
 *
 * Os frentistas (dois por posto) só existem perto do jogador. Para abastecer: pare o carro ao lado de
 * uma bomba e desligue o motor; um frentista vem até o carro e completa o tanque (ou até onde as moedas
 * dão). Ligar o motor, sair com o carro ou "Parar" encerra antes. O servidor cobra os litros colocados.
 * Em pane seca, o guincho leva o carro até o posto mais perto.
 */
const SPAWN_RADIUS = 150, DESPAWN_RADIUS = 200;
const FILL_RATE = 2.5;            // L/s (acelerado: uma bomba de verdade faz ~0,6 L/s)
const WALK_SPEED = 1.6;           // m/s
const COURTESY = 5;               // litros que o frentista dá em pane seca sem moedas (igual ao servidor)
const BAYS = GasStations.bays();
const SKINS = [0xf1c27d, 0xd8a07a, 0xc68642, 0x8d5524, 0xe0ac69];
const HAIRS = [0x2a1c12, 0x1b1b1b, 0x6b4423, 0x8a8a8a];
const pick = a => a[(Math.random() * a.length) | 0];
const liters = v => v.toFixed(1).replace('.', ',');

export class Refueling {
  constructor(game) {
    this.game = game;
    this.crews = new Map();       // id do posto -> { members: [frentista, frentista] }
    this.state = 'idle';          // idle | coming | filling | paying | done
    this.job = null;              // { station, bay, attendant, start, added, limit, courtesy, timer }
    this.stopRequested = false;
    this.shown = null;
  }

  get stations() { return this.game.world.map?.stations || null; }
  get filling() { return this.state === 'filling'; }

  update(dt) {
    const st = this.stations;
    if (!st) return;
    this.#updateCrews(st, dt);
    if (this.game.fuel.enabled) this.#updateRefuel(st, dt);
    else this.#panel(null);
  }

  /** Fim de partida / troca de mapa: tira os frentistas da cena. */
  reset() {
    if (this.job && this.state !== 'paying') this.game.fuel.liters = this.job.start;   // bomba interrompida: nada foi cobrado
    for (const crew of this.crews.values()) for (const a of crew.members) a.char.dispose();
    this.crews.clear();
    this.state = 'idle';
    this.job = null;
    this.#panel(null);
  }

  stopFilling() {
    if (this.state === 'filling') this.stopRequested = true;
  }

  // ------------------------------------------------------------------ guincho e GPS
  /** Pane seca: o guincho deixa o carro na bomba do posto mais perto. */
  tow() {
    const st = this.stations, g = this.game;
    if (!st || !g.fuel.empty) return;
    const s = g.controller.state, station = st.nearest(s.x, s.z), bay = BAYS[0];
    const p = st.toWorld(station, bay.u, bay.v);
    s.x = p.x, s.z = p.z, s.h = st.heading(station, 1, 0);
    g.controller.resetMotion();
    g.cameraController.heading = s.h;
    g.hud.message(`O guincho deixou você no posto da ${station.rua}`, 4);
  }

  /** Marca no GPS o posto mais perto (se o GPS não estiver sendo usado). */
  guideToNearest() {
    const st = this.stations, gps = this.game.world.map?.gps;
    if (!st || !gps || gps.hasDestination) return false;
    const s = this.game.controller.state, station = st.nearest(s.x, s.z), p = st.toWorld(station, 0, BAYS[0].v);
    gps.setDestination(p.x, p.z);
    return true;
  }

  // ------------------------------------------------------------------ frentistas
  #updateCrews(st, dt) {
    const focus = this.game.focus;
    for (const station of st.list) {
      const d = Math.hypot(focus.x - station.x, focus.z - station.z);
      let crew = this.crews.get(station.id);
      if (!crew && d < SPAWN_RADIUS) this.crews.set(station.id, crew = this.#spawnCrew(st, station));
      else if (crew && d > DESPAWN_RADIUS && this.job?.station !== station) {
        for (const a of crew.members) a.char.dispose();
        this.crews.delete(station.id);
        continue;
      }
      if (crew) for (const a of crew.members) this.#animate(a, dt);
    }
  }

  #spawnCrew(st, station) {
    const homes = [[-3.95, ISLANDS[0]], [3.95, ISLANDS[1]]];
    const members = homes.map(([u, v]) => {
      const char = new Character({ skin: pick(SKINS), hair: pick(HAIRS), shirt: 0x127c6a, pants: 0x2a2f3b });
      // boné e bico da bomba (na mão direita, só aparece abastecendo)
      const capMat = new MeshStandardMaterial({ color: 0x127c6a, roughness: 0.7 });
      const cap = new Mesh(new CylinderGeometry(0.135, 0.14, 0.08, 14), capMat);
      cap.position.y = 1.79;
      const visor = new Mesh(new BoxGeometry(0.2, 0.02, 0.12), capMat);
      visor.position.set(0, 1.765, 0.15);
      const nozzle = new Mesh(new BoxGeometry(0.06, 0.07, 0.26), new MeshStandardMaterial({ color: 0x23272d, roughness: 0.5 }));
      nozzle.position.set(0, -0.62, 0.12);
      nozzle.visible = false;
      char.root.add(cap, visor);
      char.armR.add(nozzle);
      const p = st.toWorld(station, u, v), h = st.heading(station, 0, -1);
      char.standIn(this.game.scene, p.x, p.z, h);
      return { char, nozzle, x: p.x, z: p.z, heading: h, home: { x: p.x, z: p.z, h }, target: null, face: 0, arrived: true, filling: false, phase: 0 };
    });
    return { members };
  }

  #animate(a, dt) {
    const tx = a.target ? a.target.x : a.home.x, tz = a.target ? a.target.z : a.home.z;
    const dx = tx - a.x, dz = tz - a.z, d = Math.hypot(dx, dz);
    if (d > 0.05) {
      const step = Math.min(d, WALK_SPEED * dt);
      a.x += dx / d * step, a.z += dz / d * step;
      a.heading = Math.atan2(dx, dz);
      a.phase += dt * 9;
      a.arrived = false;
      a.nozzle.visible = false;
      a.char.animateWalk(a.phase, WALK_SPEED, a.x, a.z, a.heading);
      return;
    }
    a.arrived = true;
    let face = a.target ? a.face : a.home.h;
    const car = this.game.controller.state;
    if (!a.target && Math.hypot(car.x - a.x, car.z - a.z) < 25) face = Math.atan2(car.x - a.x, car.z - a.z);   // olha para quem chega
    a.heading += angleDiff(face, a.heading) * Math.min(1, dt * 4);
    a.char.animateWalk(0, 0, a.x, a.z, a.heading);
    if (a.filling) a.char.armR.rotation.x = -1.2;
    a.nozzle.visible = a.filling;
  }

  // ------------------------------------------------------------------ abastecimento
  #bayAt(st, s) {
    const station = st.lotAt(s.x, s.z);
    if (!station) return null;
    const p = st.toLocal(station, s.x, s.z);
    const bay = BAYS.find(b => Math.abs(p.u - b.u) < 3.6 && Math.abs(p.v - b.v) < 0.95);
    return bay ? { station, bay } : null;
  }

  /** Quanto dá para pôr: até encher, limitado pelas moedas (online); cortesia em pane seca sem moedas. */
  #limit() {
    const g = this.game, fuel = g.fuel, room = fuel.room;
    if (!g.session.loggedIn) return { limit: room, courtesy: false };
    const affordable = Math.floor(g.session.coins / fuel.price * 10) / 10;
    if (affordable >= room) return { limit: room, courtesy: false };
    if (affordable < COURTESY && fuel.liters < 1) return { limit: Math.min(COURTESY, room), courtesy: true };
    return { limit: affordable, courtesy: false };
  }

  #updateRefuel(st, dt) {
    const g = this.game, ctrl = g.controller, s = ctrl.state, fuel = g.fuel, job = this.job;
    const engine = ctrl.engineOn || ctrl.startTimer > 0;
    switch (this.state) {
      case 'idle': {
        const hit = ctrl.speedMs < 0.6 ? this.#bayAt(st, s) : null;
        if (!hit) return this.#panel(null);
        if (fuel.room < 0.3) return this.#panel('Tanque cheio', `${liters(fuel.liters)} de ${fuel.tank} L`);
        if (engine) return this.#panel('Abastecer', `Desligue o motor (${g.input.label('partida')}) para o frentista encher o tanque`);
        const { limit, courtesy } = this.#limit();
        if (limit < 0.1) return this.#panel('Sem moedas', `O litro custa ${fuel.price} moedas`);
        this.#begin(st, hit, limit, courtesy);
        return;
      }
      case 'coming': {
        if (engine || !this.#stillInBay(st, s, ctrl)) return this.#release('idle');
        job.timer -= dt;
        if (job.attendant.arrived || job.timer <= 0) {
          this.state = 'filling';
          job.attendant.filling = true;
          this.stopRequested = false;
        }
        return this.#panel('Abastecer', 'O frentista está vindo…');
      }
      case 'filling': {
        const stop = this.stopRequested || engine || !this.#stillInBay(st, s, ctrl);
        if (!stop) {
          job.added = Math.min(job.limit, job.added + FILL_RATE * dt);
          fuel.liters = job.start + job.added;
        }
        const cost = job.courtesy || !g.session.loggedIn ? 0 : Math.ceil(job.added * fuel.price - 1e-9);
        this.#panel('Abastecendo…', `${liters(job.added)} L · ${job.courtesy ? 'cortesia' : g.session.loggedIn ? cost + ' moedas' : 'offline: grátis'}`);
        if (stop || job.added >= job.limit - 1e-6) this.#finish();
        return;
      }
      case 'paying':
        return;
      case 'done': {
        if (engine || ctrl.speedMs > 1 || !this.#bayAt(st, s)) this.state = 'idle';
        return;
      }
    }
  }

  #stillInBay(st, s, ctrl) {
    return ctrl.speedMs < 0.8 && this.#bayAt(st, s)?.station === this.job.station;
  }

  #begin(st, hit, limit, courtesy) {
    const g = this.game, s = g.controller.state, crew = this.crews.get(hit.station.id);
    if (!crew) return;
    // frentista mais perto vai até a traseira do carro, do lado da ilha
    const attendant = crew.members.reduce((a, b) => (Math.hypot(a.x - s.x, a.z - s.z) <= Math.hypot(b.x - s.x, b.z - s.z) ? a : b));
    const local = st.toLocal(hit.station, s.x, s.z), island = st.toWorld(hit.station, local.u, ISLANDS[hit.bay.island]);
    const sx = island.x - s.x, sz = island.z - s.z, sl = Math.hypot(sx, sz) || 1;
    const fx = Math.sin(s.h), fz = Math.cos(s.h);
    const tx = s.x - fx * 1.3 + sx / sl * 1.2, tz = s.z - fz * 1.3 + sz / sl * 1.2;
    attendant.target = { x: tx, z: tz };
    attendant.face = Math.atan2(s.x - tx, s.z - tz);
    this.job = { station: hit.station, bay: hit.bay, attendant, start: g.fuel.liters, added: 0, limit, courtesy, timer: 10 };
    this.state = 'coming';
    g.hud.message(courtesy ? 'Frentista: "Sem moedas? Vou colocar uns litros pra você chegar em casa."' : 'Frentista: "Completa?"', 3);
  }

  /** Volta o frentista para o lugar dele e muda de estado. */
  #release(state) {
    if (this.job) {
      this.job.attendant.target = null;
      this.job.attendant.filling = false;
    }
    this.state = state;
    if (state === 'idle') this.job = null;
  }

  async #finish() {
    const g = this.game, job = this.job, added = job.added;
    this.#release('paying');
    if (added < 0.05) {
      g.fuel.liters = job.start;
      this.state = 'done';
      this.job = null;
      return;
    }
    try {
      const r = await g.fuel.commitRefill(job.start, added);
      const what = `${liters(r.liters)} L`;
      if (r.offline) g.iface.toast(`Abastecido: ${what} (modo offline: grátis)`);
      else if (r.courtesy) g.iface.toast(`O frentista colocou ${what} de cortesia`, 'gold');
      else g.iface.toast(`Abastecido: ${what} por ${r.cost} moedas`, 'gold');
      this.#panel('Abastecido', `${liters(g.fuel.liters)} de ${g.fuel.tank} L no tanque`);
    } catch (err) {
      g.iface.toast('Abastecimento não registrado: ' + err.message);
      this.#panel(null);
    }
    this.state = 'done';
    this.job = null;
  }

  // ------------------------------------------------------------------ painel
  #panel(title, sub = '') {
    const key = title === null ? null : title + '|' + sub;
    if (key === this.shown) return;
    this.shown = key;
    const el = $('posto');
    el.hidden = key === null;
    if (key !== null) $('posto-title').textContent = title, $('posto-sub').textContent = sub;
  }
}
