import { $ } from '../utils/Helpers.js';

/**
 * Controles de tela de toque: detecta o aparelho, mostra os botões e liga cada botão à ação do jogo.
 * Os botões de dirigir (acelerar, frear, virar, freio de mão) ficam "pressionados" via InputSystem.
 */
export class TouchControls {
  constructor(game) {
    this.game = game;
    document.querySelectorAll('.tb[data-k]').forEach(b => game.input.bindHoldButton(b, b.dataset.k));
    const tap = (selector, handler) => document.querySelectorAll(selector).forEach(b => b.addEventListener('pointerdown', e => {
      e.preventDefault();
      handler(b);
    }));
    tap('[data-s]', b => game.started && game.vehicleReady && game.controller.toggleIndicator(+b.dataset.s));
    tap('[data-f]', b => game.started && game.vehicleReady && (b.dataset.f === 'L' ? game.controller.cycleLights() : game.toggleNight()));
    tap('[data-g]', b => {
      const g = b.dataset.g;
      if (!game.started || !game.vehicleReady) return;
      g === 'up' ? game.controller.shiftUp() : g === 'dn' ? game.controller.shiftDown() : game.controller.toggleGearbox();
    });
    tap('[data-a]', b => game.started && game.vehicleReady && game.runAction(b.dataset.a));

    const coarse = (navigator.maxTouchPoints > 0 || 'ontouchstart' in window || matchMedia('(pointer:coarse)').matches)
      && !matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (coarse) this.enable();
    addEventListener('touchstart', () => this.enable(), { once: true, passive: true });
    addEventListener('contextmenu', e => document.body.classList.contains('touch') && e.preventDefault());
  }

  /** Liga o modo toque uma única vez (menos resolução e sombras menores para aliviar o aparelho). */
  enable() {
    if (document.body.classList.contains('touch')) return;
    document.body.classList.add('touch');
    $('touch').style.display = 'block';
    this.game.renderer.enableLowPower();
    this.game.resize();
  }
}
