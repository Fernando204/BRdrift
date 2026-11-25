/**
 * Pontuação de drift.
 * - Conta enquanto o carro anda de lado: velocidade > 7 m/s e ângulo de deriva entre 15° e 100°.
 * - Pontos por segundo = velocidade (m/s) × ângulo (graus) × 0,35 × combo.
 * - O combo sobe 0,5 a cada 2 s de drift contínuo (até ×4).
 * - O drift termina 1,2 s depois de o carro alinhar; batidas (perda brusca de velocidade) zeram o drift.
 * Ao terminar, onBank(pontos, duração) é chamado (o servidor converte em moedas).
 */
const MIN_SPEED = 7, MIN_ANGLE = 0.26, MAX_ANGLE = 1.75;
const GRACE = 1.2, MIN_BANK = 150, CRASH_DECEL = 4;   // m/s perdidos num quadro = batida
const MAX_RATE = 1400;

export class DriftScoring {
  constructor() {
    this.active = false;
    this.points = 0;
    this.combo = 1;
    this.time = 0;
    this.grace = 0;
    this.startedAt = 0;
    this.angle = 0;
    this.prevSpeed = 0;
    this.onBank = null;     // (pontos, duraçãoMs) => void
    this.onFail = null;     // () => void
  }

  reset() {
    this.active = false;
    this.points = 0;
    this.combo = 1;
    this.time = 0;
    this.grace = 0;
  }

  update(dt, ctrl, driving) {
    const s = ctrl.state, speed = Math.hypot(s.vx, s.vz);
    const sinH = Math.sin(s.h), cosH = Math.cos(s.h);
    const vLong = s.vx * sinH + s.vz * cosH, vLat = s.vx * cosH - s.vz * sinH;
    this.angle = Math.atan2(Math.abs(vLat), Math.max(Math.abs(vLong), 0.01));
    const crashed = this.prevSpeed - speed > CRASH_DECEL;
    this.prevSpeed = speed;

    if (this.active && crashed) {
      this.reset();
      this.onFail?.();
      return;
    }
    const drifting = driving && speed > MIN_SPEED && vLong > 0 && this.angle > MIN_ANGLE && this.angle < MAX_ANGLE;
    if (drifting) {
      if (!this.active) {
        this.active = true;
        this.points = 0;
        this.time = 0;
        this.startedAt = performance.now();
      }
      this.time += dt;
      this.combo = 1 + Math.min(3, Math.floor(this.time / 2) * 0.5);
      // limitado a 1400 pts/s: abaixo do teto que o servidor aceita (1500), para nenhum drift real ser recusado
      this.points += dt * Math.min(MAX_RATE, speed * (this.angle * 180 / Math.PI) * 0.35 * this.combo);
      this.grace = GRACE;
    } else if (this.active && (this.grace -= dt) <= 0) {
      const points = Math.round(this.points), duration = performance.now() - this.startedAt;
      this.reset();
      if (points >= MIN_BANK) this.onBank?.(points, Math.round(duration));
    }
  }

  /** Progresso até o próximo nível de combo (0..1), para a barra do HUD. */
  get comboProgress() {
    return this.combo >= 4 ? 1 : (this.time % 2) / 2;
  }
}
