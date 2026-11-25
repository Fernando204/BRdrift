import { $ } from '../utils/Helpers.js';
import { ACTIONS } from '../systems/InputSystem.js';

/**
 * Menu inicial/pausa: telas principal, opções e controles (com troca de teclas).
 * Não conhece a lógica do jogo: chama as funções de `actions` recebidas do Game.
 */
export class Menu {
  /**
   * @param actions { start, resume, restart, pause, selectMap, setGearbox, setDriveMode, setNight, setColor, setVolume, setGraphicsQuality, setShadows, setRenderDistance }
   */
  constructor(game, actions) {
    this.game = game;
    this.actions = actions;
    this.screen = 'main';
    this.capture = null;        // { action, slot } enquanto espera a nova tecla

    document.querySelectorAll('[data-scr]').forEach(b => (b.onclick = () => this.showScreen(b.dataset.scr)));
    $('go').onclick = () => (game.started ? actions.resume() : actions.start());
    $('rs').onclick = () => actions.restart();
    $('pbtn').onpointerdown = e => { e.preventDefault(); if (game.started && !game.paused) actions.pause(); };
    $('o-gb').onclick = this.#segment(v => actions.setGearbox(v === 1));
    $('o-dm').onclick = this.#segment(v => actions.setDriveMode(v === 1));
    $('o-nt').onclick = this.#segment(v => actions.setNight(v === 1));
    $('o-map').onclick = this.#segment(v => actions.selectMap(v === 1 ? 'salto' : 'circuito'));
    $('o-quality').onclick = this.#segment(v => actions.setGraphicsQuality(['low', 'medium', 'high'][v]));
    $('o-diag').onclick = this.#segment(v => actions.setDiagnostics(v === 1));
    $('o-shadow').onclick = this.#segment(v => actions.setShadows(v === 1));
    $('o-distance').oninput = e => actions.setRenderDistance(+e.target.value);
    $('o-vol').oninput = e => actions.setVolume(e.target.value / 100);
    $('ctlList').onclick = e => {
      const b = e.target.closest('.kbtn');
      if (!b) return;
      this.capture = { action: b.dataset.act, slot: +b.dataset.idx };
      $('ctlmsg').textContent = '';
      this.renderControls();
    };
    $('ctlreset').onclick = () => {
      game.input.resetBindings();
      game.updateHelp();
      $('ctlmsg').textContent = 'Controles restaurados.';
      this.renderControls();
    };
  }

  #segment(handler) {
    return e => {
      const b = e.target.closest('button');
      if (b) handler(+b.dataset.v);
    };
  }

  get isOpen() {
    return $('intro').style.display !== 'none';
  }

  open() {
    this.showScreen('main');
    $('go').textContent = 'Continuar';
    $('rs').style.display = 'block';
    $('intro').style.display = 'flex';
  }

  close() {
    $('intro').style.display = 'none';
  }

  setLoading(text) {
    $('ld').textContent = text;
  }

  enableStart() {
    $('go').disabled = false;
    $('go').textContent = 'Jogar';
  }

  showScreen(name) {
    this.screen = name;
    document.querySelectorAll('.scr').forEach(s => (s.hidden = s.id !== 'scr-' + name));
    if (name === 'ctl') this.renderControls();
    if (name === 'opt') this.refresh();
  }

  /**
   * Esc: cancela a troca de tecla, volta à tela principal ou alterna pausa.
   * Retorna true se tratou a tecla.
   */
  handleEscape() {
    if (this.capture) {
      this.capture = null;
      this.renderControls();
      return true;
    }
    if (this.screen !== 'main') {
      this.showScreen('main');
      return true;
    }
    return false;
  }

  /** Enquanto espera uma tecla nova, consome qualquer tecla. */
  captureKey(code) {
    if (!this.capture) return false;
    const { action, slot } = this.capture;
    this.capture = null;
    if (code !== 'Escape') {
      $('ctlmsg').textContent = this.game.input.rebind(action, slot, code);
      this.game.updateHelp();
    }
    this.renderControls();
    return true;
  }

  renderControls() {
    const input = this.game.input;
    $('ctlList').innerHTML = ACTIONS.map(([id, description]) => '<span>' + description + '</span>' + [0, 1].map(slot => {
      const capturing = this.capture && this.capture.action === id && this.capture.slot === slot;
      return '<button class="kbtn' + (capturing ? ' cap' : '') + '" data-act="' + id + '" data-idx="' + slot + '">' +
        (capturing ? 'Pressione…' : input.keyName(input.bindings[id][slot])) + '</button>';
    }).join('')).join('');
  }

  /** Atualiza o estado visual das opções. */
  refresh() {
    const s = this.game.settings, toggle = (id, on) => document.querySelectorAll(`#${id} button`).forEach(b => b.classList.toggle('on', on(+b.dataset.v)));
    toggle('o-map', v => (v === 1) === (s.mapId === 'salto'));
    $('osm').hidden = s.mapId !== 'salto';
    toggle('o-dm', v => (v === 1) === s.driftMode);
    toggle('o-gb', v => (v === 1) === s.manualGearbox);
    toggle('o-nt', v => (v === 1) === s.night);
    toggle('o-quality', v => v === ['low', 'medium', 'high'].indexOf(s.graphicsQuality));
    toggle('o-diag', v => (v === 1) === s.diagnostics);
    toggle('o-shadow', v => (v === 1) === s.shadows);
    $('o-distance').value = s.renderDistance;
    $('o-distance-value').value = s.renderDistance + ' m';
    const colors = this.game.vehicleColors, swatches = $('o-col');
    if (!swatches.children.length) {
      colors.forEach((c, i) => {
        const b = document.createElement('button');
        b.style.background = c;
        b.onclick = () => this.actions.setColor(i);
        swatches.appendChild(b);
      });
    }
    [...swatches.children].forEach((b, i) => b.classList.toggle('on', i === s.colorIndex));
    $('o-vol').value = Math.round(s.volume * 100);
  }
}
