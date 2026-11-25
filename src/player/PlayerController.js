import { Character } from './Character.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';

const WALK_SPEED = 1.8, RUN_SPEED = 5.2, TURN_RATE = 2.6, BODY_RADIUS = 0.32, INTERACT_DISTANCE = 1.8;

/**
 * O jogador: sentado no carro ou a pé. Cuida de abrir/fechar a porta, entrar, sair e andar.
 */
export class PlayerController {
  constructor(scene) {
    this.scene = scene;
    this.inVehicle = true;
    this.body = { x: 0, z: 0, h: 0, vx: 0, vz: 0, r: 0, speed: 0, phase: 0 };
    this.character = new Character();
    this.onMessage = null;
  }

  /** Posição que o minimapa, o GPS, a câmera e as sombras devem seguir. */
  focus(vehicleState) {
    return this.inVehicle ? vehicleState : this.body;
  }

  #standPoint(vs, cfg) {
    const [lx, lz] = cfg.door.standPoint, c = Math.cos(vs.h), s = Math.sin(vs.h);
    return { x: vs.x + lx * c + lz * s, z: vs.z - lx * s + lz * c };
  }

  sitIn(vehicle) {
    this.character.sitIn(vehicle.model, vehicle.config.driverSeat);
  }

  enter(vehicle, ctrl) {
    this.inVehicle = true;
    vehicle.doorTarget = 0;
    ctrl.stopEngine();
    this.body.speed = 0;
    this.sitIn(vehicle);
  }

  /** Só sai com o carro (quase) parado; desliga o motor e abre a porta. */
  exit(vehicle, ctrl) {
    if (ctrl.speedMs > 1.2) {
      this.onMessage?.('Pare o carro para sair', 1.5);
      return false;
    }
    ctrl.stopEngine();
    this.inVehicle = false;
    vehicle.doorTarget = 1;
    const p = this.#standPoint(ctrl.state, vehicle.config);
    Object.assign(this.body, { x: p.x, z: p.z, h: ctrl.state.h, speed: 0 });
    this.character.standIn(this.scene, p.x, p.z, this.body.h);
    return true;
  }

  /**
   * Ações possíveis agora: [id, texto, tecla]. Dentro do carro: partida e sair;
   * a pé, perto da porta: abrir, entrar ou fechar.
   */
  availableActions(vehicle, ctrl, keyLabel) {
    if (this.inVehicle) {
      const list = [];
      if (ctrl.startTimer > 0) list.push(['', 'Dando partida…', '']);
      else list.push(['partida', ctrl.engineOn ? 'Desligar motor' : 'Dar partida', keyLabel('partida')]);
      if (ctrl.speedMs < 1.2) list.push(['sair', 'Sair do carro', keyLabel('acao')]);
      return list;
    }
    const p = this.#standPoint(ctrl.state, vehicle.config);
    if (Math.hypot(this.body.x - p.x, this.body.z - p.z) > INTERACT_DISTANCE) return [];
    return vehicle.doorTarget
      ? [['entrar', 'Entrar no carro', keyLabel('acao')], ['fechar', 'Fechar porta', '']]
      : [['abrir', 'Abrir porta', keyLabel('acao')]];
  }

  /** Movimento a pé (W/S andam, A/D giram, Espaço corre) e colisões. */
  update(dt, input, map, vehicleState, vehicleConfig) {
    const b = this.body, forward = input.isDown('accel') ? 1 : 0, back = input.isDown('brake') ? 1 : 0;
    b.h += ((input.isDown('left') ? 1 : 0) - (input.isDown('right') ? 1 : 0)) * TURN_RATE * dt;
    b.speed += ((forward - back * 0.6) * (input.isDown('hb') ? RUN_SPEED : WALK_SPEED) - b.speed) * Math.min(1, dt * 8);
    b.vx = Math.sin(b.h) * b.speed;
    b.vz = Math.cos(b.h) * b.speed;
    b.x += b.vx * dt;
    b.z += b.vz * dt;
    CollisionSystem.circleVsVehicle(b, BODY_RADIUS, vehicleState, vehicleConfig.bodyHalfSize);
    CollisionSystem.circleVsObstacles(b, BODY_RADIUS, map);
    map.collideBody(b);
    b.phase += b.speed * dt * 3.4;
    this.character.animateWalk(b.phase, b.speed, b.x, b.z, b.h);
  }

  /** Esconde o personagem na visão de primeira pessoa (a câmera fica dentro da cabeça). */
  setVisible(visible) {
    this.character.root.visible = visible;
  }
}
