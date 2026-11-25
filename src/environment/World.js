import { MAPS } from './maps/maps.config.js';

/**
 * Mapa ativo: carrega sob demanda, troca e libera o anterior (geometrias, materiais, texturas e dados),
 * para que só o mapa em uso ocupe memória.
 */
export class World {
  constructor(environment, assets) {
    this.environment = environment;
    this.assets = assets;
    this.map = null;
    this.loading = null;
  }

  get mapId() {
    return this.map ? this.map.id : null;
  }

  async setMap(id) {
    if (this.map && this.map.id === id) return this.map;
    const config = MAPS[id];
    if (!config) throw new Error(`Mapa desconhecido: ${id}`);
    const next = await config.create(this.assets, config);

    const previous = this.map;
    if (previous) {
      this.environment.scene.remove(previous.group);
      previous.dispose();
      if (previous.dataUrl) this.assets.release(previous.dataUrl);   // descarta também os dados JSON
    }
    this.map = next;
    this.environment.scene.add(next.group);
    this.environment.setGroundScale(next.groundScale);
    this.environment.setMapFogFar(next.fogFar);
    next.setNight(this.environment.night);
    return next;
  }
}
