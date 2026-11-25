/**
 * Estado e comandos do motorista: câmbio (manual/automático), partida, faróis, setas e modo de condução.
 * A dinâmica (forças e movimento) fica em PhysicsSystem; a parte visual em Vehicle.
 */
export class VehicleController {
  constructor(config) {
    this.config = config;
    this.physics = config.physics;
    this.state = {
      x: 0, z: 0, h: 0,            // posição e rumo
      vx: 0, vz: 0,                // velocidade no mundo
      r: 0,                        // velocidade de guinada (rad/s)
      vf: 0,                       // velocidade longitudinal
      ax: 0, ay: 0,                // acelerações (para rolagem/arfagem e transferência de carga)
      steer: 0,                    // ângulo de esterço das rodas
      pitch: 0, roll: 0,
      slipFront: 0, slipRear: 0,   // quanto cada eixo está escorregando (marcas e fumaça)
      brake: false, reverse: false,
      tc: false, esc: false,       // controle de tração / estabilidade atuando
      escCut: 1, fyRear: 0, slipAngleFront: 0, slipAngleRear: 0,
    };
    this.gear = 1;
    this.manual = false;
    this.rpm = 900;
    this.throttle = 0;
    this.engineSound = 0.25;
    this.steerInput = 0;
    this.shiftTimer = 0;           // corte de torque durante a troca de marcha
    this.autoShiftTimer = 0;
    this.engineOn = false;
    this.startTimer = 0;           // > 0 enquanto o motor de arranque gira
    this.driftMode = false;
    this.lightsMode = 0;           // 0 apagados, 1 baixo, 2 alto
    this.indicators = 0;           // 1 esquerda, 2 direita, 3 alerta
    this.blinkTime = 0;
    this.blinkOn = false;
    this.onMessage = null;         // (texto, segundos) => void
    this.onBlink = null;           // (aceso) => void   (som do pisca)
    this.onEngineStart = null;
  }

  /** Velocidade em m/s. */
  get speedMs() {
    return Math.hypot(this.state.vx, this.state.vz);
  }

  get indicatorLeftOn() {
    return this.blinkOn && (this.indicators & 1) !== 0;
  }

  get indicatorRightOn() {
    return this.blinkOn && (this.indicators & 2) !== 0;
  }

  resetMotion() {
    const s = this.state;
    s.vx = s.vz = s.steer = s.vf = s.r = s.ax = s.ay = 0;
    this.gear = 1;
    this.shiftTimer = 0;
    this.rpm = 900;
  }

  // ------------------------------------------------------------------ câmbio
  setGear(g) {
    if (g !== this.gear) this.gear = g, this.shiftTimer = 0.15;
  }

  #toManual() {
    if (!this.manual) this.manual = true, this.onMessage?.('C\xE2mbio manual (T volta ao autom\xE1tico)', 2);
  }

  shiftUp() {
    this.#toManual();
    if (this.gear < 5) this.setGear(this.gear + 1);
  }

  shiftDown() {
    this.#toManual();
    if (this.gear === 0 && Math.abs(this.state.vf) > 3) {
      this.onMessage?.('Pare o carro para engatar a r\xE9', 1.5);
      return;
    }
    if (this.gear > -1) this.setGear(this.gear - 1);
  }

  toggleGearbox() {
    this.manual = !this.manual;
    this.onMessage?.(this.manual ? 'C\xE2mbio manual' : 'C\xE2mbio autom\xE1tico', 1.8);
  }

  // ------------------------------------------------------------------ motor
  /** Liga (com o motor de arranque girando por ~0,9 s) ou desliga o motor. */
  toggleIgnition() {
    if (this.engineOn) {
      this.engineOn = false;
      this.onMessage?.('Motor desligado', 1.2);
      return false;
    }
    if (this.startTimer > 0) return false;
    this.startTimer = 0.9;
    this.setGear(0);
    return true;   // começou a dar partida
  }

  stopEngine() {
    this.engineOn = false;
    this.startTimer = 0;
  }

  /** Avança a partida e ajusta o giro do motor desligado (chamado a cada quadro). */
  updateEngine(dt) {
    if (this.startTimer > 0 && (this.startTimer -= dt) <= 0) {
      this.engineOn = true;
      this.rpm = 2600;
      this.onMessage?.('Motor ligado', 1.2);
      this.onEngineStart?.();
    }
    if (!this.engineOn) this.rpm = this.startTimer > 0 ? 250 + Math.random() * 120 : 0;
  }

  // ------------------------------------------------------------------ luzes
  cycleLights() {
    this.lightsMode = (this.lightsMode + 1) % 3;
  }

  toggleIndicator(which) {
    this.indicators = this.indicators === which ? 0 : which;
    this.blinkTime = 0;
  }

  /** Pisca a ~1,5 Hz; avisa quando acende/apaga (para o som do relé). */
  updateIndicators(dt) {
    this.blinkTime += dt;
    const on = this.indicators > 0 && this.blinkTime % 0.66 < 0.33;
    if (on !== this.blinkOn) {
      this.blinkOn = on;
      if (this.indicators) this.onBlink?.(on);
    }
  }

  setDriftMode(drift) {
    this.driftMode = drift;
    this.state.slipAngleFront = this.state.slipAngleRear = 0;
  }
}
