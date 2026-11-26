import { storage } from '../utils/Helpers.js';
import { STORAGE_KEYS } from '../utils/Constants.js';
import { clamp } from '../utils/MathUtils.js';

/**
 * Opções do jogador salvas entre partidas.
 * Mantém o mesmo formato já gravado no navegador (chave "opts"), para não perder as preferências.
 */
export class Settings {
  constructor(colorCount) {
    const saved = storage.get(STORAGE_KEYS.options, {}) || {};
    this.manualGearbox = !!saved.manual;
    this.night = !!saved.night;
    this.colorIndex = Number.isInteger(saved.pi) && saved.pi >= 0 && saved.pi < colorCount ? saved.pi : 0;
    this.volume = typeof saved.vol === 'number' ? clamp(saved.vol, 0, 1) : 0.7;
    this.mapId = saved.mapa ? 'salto' : 'circuito';
    this.vehicleId = typeof saved.car === 'string' ? saved.car : null;   // validado pelo Game
    // rebaixamento por carro, de 0 (original) a 1 (máximo do carro)
    this.lowering = {};
    if (saved.low && typeof saved.low === 'object') {
      for (const [id, v] of Object.entries(saved.low)) if (typeof v === 'number') this.lowering[id] = clamp(v, 0, 1);
    }
    this.driftMode = !!saved.drift;
    // litros no tanque de cada carro (jogo offline; online o nível fica na conta)
    this.fuel = {};
    if (saved.fuel && typeof saved.fuel === 'object') {
      for (const [id, v] of Object.entries(saved.fuel)) if (typeof v === 'number' && v >= 0) this.fuel[id] = v;
    }
    this.graphicsQuality = ['low', 'medium', 'high'].includes(saved.gfx) ? saved.gfx : 'medium';
    // sombras: desligadas ou qualidade própria (antes só havia ligado/desligado em "shadow")
    this.shadowQuality = ['off', 'low', 'medium', 'high'].includes(saved.shadowQ)
      ? saved.shadowQ
      : saved.shadow === false ? 'off' : this.graphicsQuality;
    this.resolutionScale = typeof saved.res === 'number' ? clamp(saved.res, 0.5, 1) : 1;
    this.diagnostics = !!saved.diag;
    this.renderDistance = typeof saved.renderDistance === 'number'
      ? clamp(saved.renderDistance, 250, 1200)
      : 700;
  }

  get shadows() {
    return this.shadowQuality !== 'off';
  }

  save() {
    storage.set(STORAGE_KEYS.options, {
      manual: this.manualGearbox,
      night: this.night,
      pi: this.colorIndex,
      vol: this.volume,
      mapa: this.mapId === 'salto' ? 1 : 0,
      car: this.vehicleId,
      low: this.lowering,
      drift: this.driftMode ? 1 : 0,
      fuel: this.fuel,
      gfx: this.graphicsQuality,
      shadow: this.shadows,
      shadowQ: this.shadowQuality,
      res: this.resolutionScale,
      renderDistance: this.renderDistance,
      diag: this.diagnostics,
    });
  }
}
