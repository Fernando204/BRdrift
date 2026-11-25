import { VEHICLES } from '../vehicles/vehicles.config.js';
import { Vehicle } from '../vehicles/Vehicle.js';
import { VehicleController } from '../vehicles/VehicleController.js';

/**
 * Veículos disponíveis: carrega só o escolhido (sob demanda) e libera o anterior ao trocar.
 * Preparado para garagem/seleção de carros: basta registrar novos carros em vehicles.config.js.
 */
export class VehicleSystem {
  constructor(scene, assets) {
    this.scene = scene;
    this.assets = assets;
    this.id = null;
    this.vehicle = null;
    this.controller = null;
  }

  get available() {
    return Object.entries(VEHICLES).map(([id, cfg]) => ({ id, name: cfg.name }));
  }

  get config() {
    return VEHICLES[this.id];
  }

  /** Carrega e posiciona o veículo; mantém o controlador se for o mesmo carro. */
  async spawn(id) {
    if (this.id === id && this.vehicle) return this.vehicle;
    const config = VEHICLES[id];
    if (!config) throw new Error(`Veículo desconhecido: ${id}`);
    const gltf = await this.assets.loadGLTF(config.model);
    this.despawn();
    this.id = id;
    this.vehicle = new Vehicle(gltf, config);
    this.controller = new VehicleController(config);
    this.scene.add(this.vehicle.root);
    return this.vehicle;
  }

  /** Remove o veículo atual e libera o modelo da memória. */
  despawn() {
    if (!this.vehicle) return;
    const url = this.config.model;
    this.vehicle.dispose();
    this.assets.release(url);
    this.vehicle = this.controller = null;
    this.id = null;
  }
}
