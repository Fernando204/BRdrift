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
    this.driftMode = !!saved.drift;
    this.graphicsQuality = ['low', 'medium', 'high'].includes(saved.gfx) ? saved.gfx : 'medium';
    this.shadows = typeof saved.shadow === 'boolean' ? saved.shadow : true;
    this.diagnostics = !!saved.diag;
    this.renderDistance = typeof saved.renderDistance === 'number'
      ? clamp(saved.renderDistance, 250, 1200)
      : 700;
  }

  save() {
    storage.set(STORAGE_KEYS.options, {
      manual: this.manualGearbox,
      night: this.night,
      pi: this.colorIndex,
      vol: this.volume,
      mapa: this.mapId === 'salto' ? 1 : 0,
      drift: this.driftMode ? 1 : 0,
      gfx: this.graphicsQuality,
      shadow: this.shadows,
      renderDistance: this.renderDistance,
      diag: this.diagnostics,
    });
  }
}
