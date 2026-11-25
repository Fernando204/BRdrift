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
    this.modelUsers = new Map();   // carro -> quantos veículos usam o modelo (o seu e os de outros jogadores)
  }

  /** Modelo de um carro, carregado uma vez e compartilhado; conte cada uso com release(). */
  async acquireModel(id) {
    const config = VEHICLES[id];
    if (!config) throw new Error(`Veículo desconhecido: ${id}`);
    const gltf = await this.assets.loadGLTF(config.model);
    this.modelUsers.set(id, (this.modelUsers.get(id) || 0) + 1);
    return gltf;
  }

  /** Quando ninguém mais usa o modelo, ele sai da memória. */
  releaseModel(id) {
    const n = (this.modelUsers.get(id) || 0) - 1;
    if (n > 0) return void this.modelUsers.set(id, n);
    this.modelUsers.delete(id);
    this.assets.release(VEHICLES[id].model);
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
    const gltf = await this.acquireModel(id);
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
    this.vehicle.dispose();
    this.releaseModel(this.id);
    this.vehicle = this.controller = null;
    this.id = null;
  }
}
