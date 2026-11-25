import { GAME } from '../utils/Constants.js';

/** Laço principal com requestAnimationFrame; entrega o tempo do quadro limitado a GAME.maxFrameTime. */
export class GameLoop {
  constructor(onFrame) {
    this.onFrame = onFrame;
    this.last = performance.now();
    this.running = false;
    this.tick = this.tick.bind(this);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this.tick);
  }

  /** Zera o relógio (depois de pausas), para o próximo quadro não "pular" no tempo. */
  resetClock() {
    this.last = performance.now();
  }

  tick(now) {
    if (!this.running) return;
    requestAnimationFrame(this.tick);
    const dt = Math.min((now - this.last) / 1e3, GAME.maxFrameTime);
    this.last = now;
    this.onFrame(dt, now);
  }
}
