import { fuelModel, fuelFlowLph } from '../vehicles/FuelModel.js';

export const RESERVE = 0.12;          // fração do tanque: luz da reserva
const SYNC_EVERY = 20;                // s: grava o nível de tempos em tempos enquanto o carro roda
const START_FRACTION = 0.5;           // carro sem registro: meio tanque (igual ao servidor)

/**
 * Tanque do carro em uso. O nível é de cada carro e vale em todos os modos com combustível (salas
 * online e táxi): online fica na garagem do jogador no servidor; offline, no navegador.
 * No treino solo (e no circuito, que não tem posto) o combustível fica desligado.
 */
export class FuelSystem {
  constructor(game) {
    this.game = game;
    this.enabled = false;
    this.carId = null;
    this.model = null;
    this.liters = 0;
    this.saved = 0;                   // último nível gravado
    this.syncTimer = SYNC_EVERY;
    this.reserveWarned = false;
    this.queue = Promise.resolve();   // gravações no servidor, uma de cada vez
    this.onEmpty = null;              // () => void   (pane seca)
    this.onReserve = null;            // () => void   (entrou na reserva)
  }

  get tank() { return this.model?.tank ?? 0; }
  get fraction() { return this.tank ? this.liters / this.tank : 0; }
  get inReserve() { return this.enabled && this.fraction <= RESERVE; }
  get empty() { return this.enabled && this.liters < 0.02; }
  get room() { return Math.max(0, this.tank - this.liters); }

  /** Carro em uso (também na troca de carro): grava o anterior e carrega o nível deste. */
  useCar(carId, config) {
    if (this.carId && this.carId !== carId) this.flush();
    this.carId = carId;
    this.model = fuelModel(config);
    this.#load();
  }

  /** Liga (salas online e táxi na cidade) ou desliga (treino solo, circuito, menus). */
  setEnabled(on) {
    if (this.enabled && !on) this.flush();
    this.enabled = on;
    if (on && this.carId) this.#load();
  }

  #load() {
    const g = this.game, id = this.carId;
    const v = g.session.loggedIn ? g.session.profile.fuel?.[id] : g.settings.fuel[id];
    this.liters = this.saved = typeof v === 'number' ? Math.min(this.tank, Math.max(0, v)) : this.tank * START_FRACTION;
    this.reserveWarned = this.fraction <= RESERVE;
    this.syncTimer = SYNC_EVERY;
  }

  /** Consumo do quadro (motor ligado), avisos de reserva e pane seca, e gravação periódica. */
  update(dt, ctrl) {
    if (!this.enabled || !this.model) return;
    if (ctrl.engineOn && this.liters > 0) {
      this.liters = Math.max(0, this.liters - fuelFlowLph(this.model, ctrl) * dt / 3600);
      if (this.liters <= 0) {
        ctrl.stopEngine();
        this.flush();
        this.onEmpty?.();
      }
    }
    if (!this.reserveWarned && this.fraction <= RESERVE && this.liters > 0) this.reserveWarned = true, this.onReserve?.();
    else if (this.fraction > RESERVE + 0.02) this.reserveWarned = false;
    if ((this.syncTimer -= dt) <= 0) {
      this.syncTimer = SYNC_EVERY;
      if (this.saved - this.liters > 0.01) this.flush();
    }
  }

  /** Grava o nível atual: no servidor (online; ele só aceita descer) ou no navegador (offline). */
  flush(keepalive = false) {
    const g = this.game, carId = this.carId;
    if (!carId || Math.abs(this.saved - this.liters) < 0.005) return this.queue;
    const liters = Math.round(this.liters * 100) / 100;
    this.saved = liters;
    if (!g.session.loggedIn) {
      g.settings.fuel[carId] = liters;
      g.saveSettings();
      return this.queue;
    }
    if (g.session.profile.fuel) g.session.profile.fuel[carId] = liters;
    this.queue = this.queue
      .then(() => g.api.fuelReport(carId, liters, keepalive))
      .catch(() => { if (this.carId === carId) this.saved = Math.max(this.saved, liters + 0.02); });   // tenta de novo depois
    return this.queue;
  }

  /**
   * Fecha um abastecimento: start = litros antes da bomba, added = litros colocados.
   * Online o servidor cobra e devolve o nível; offline só grava (sem moedas, não há o que cobrar).
   */
  async commitRefill(start, added) {
    const g = this.game, carId = this.carId;
    if (!g.session.loggedIn) {
      this.liters = Math.min(this.tank, start + added);
      this.saved = -1;
      this.flush();
      return { liters: added, cost: 0, courtesy: false, offline: true };
    }
    await this.queue;
    try {
      const r = await g.api.fuelRefill(carId, Math.round(start * 100) / 100, Math.round(added * 10) / 10);
      if (this.carId === carId) this.liters = this.saved = r.fuel;
      if (g.session.profile.fuel) g.session.profile.fuel[carId] = r.fuel;
      g.session.setCoins(r.coins);
      g.hud.setCoins(r.coins);
      return r;
    } catch (err) {
      if (this.carId === carId) this.liters = start;
      throw err;
    }
  }

  /** Preço do litro em moedas (catálogo do servidor). */
  get price() {
    return this.game.session.catalog?.fuelPricePerLiter ?? 6;
  }
}
