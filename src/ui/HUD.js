import { $ } from '../utils/Helpers.js';
import { Gauges } from './Gauges.js';
import { formatLapTime } from '../utils/MathUtils.js';

/** Informações durante a partida: tempo/rua, mensagens, mostradores, minimapa, setas, ações e destino do GPS. */
export class HUD {
  constructor() {
    this.root = $('hud');
    this.gauges = new Gauges($('gg'));
    this.minimap = $('mini');
    this.minimapCtx = this.minimap.getContext('2d');
    this.messageTimer = 0;
    this.actionsSignature = '';
    this.onAction = null;   // (id) => void
    $('acao').addEventListener('pointerdown', e => {
      const b = e.target.closest('button');
      if (b && b.dataset.acao) e.preventDefault(), this.onAction?.(b.dataset.acao);
    });
  }

  show() {
    this.root.style.display = 'block';
  }

  message(text, seconds = 3) {
    const el = $('msg');
    el.textContent = text;
    el.style.opacity = 1;
    this.messageTimer = seconds;
  }

  /** Conta o tempo das mensagens (só enquanto o jogo roda, como antes). */
  tick(dt) {
    if (this.messageTimer > 0 && (this.messageTimer -= dt) <= 0) $('msg').style.opacity = 0;
  }

  /**
   * Botões de ação contextuais. Recebe uma chave numérica do estado e só monta a lista
   * (arrays e textos) quando a chave muda.
   */
  updateActions(key, build) {
    if (key === this.actionsKey) return;
    this.actionsKey = key;
    this.setActions(build());
  }

  setMapMode(map) {
    document.body.classList.toggle('cidade', map.bodyClass === 'cidade');
  }

  setLap(lap) {
    $('lap').textContent = lap;
  }

  setBest(ms) {
    $('best').textContent = ms ? formatLapTime(ms) : '–';
  }

  setTimerText(text) {
    if (text === this.timerText) return;
    this.timerText = text;
    (this.timeEl || (this.timeEl = $('time'))).textContent = text;
  }

  setHelp(text) {
    $('help').textContent = text;
  }

  fadeHelpLater() {
    setTimeout(() => ($('help').style.opacity = 0), 9e3);
  }

  setDriveModeButton(drift) {
    $('bmodo').textContent = drift ? '💨 Modo drift' : '🚗 Modo normal';
  }

  /** Destino do GPS ("◆ Rua X · 1,2 km"). */
  setDestination(gps) {
    const el = $('dest');
    if (!gps || !gps.hasDestination || !gps.label) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    const html = gps.routeFound ? "<span style='color:#d48cff'>◆</span> " + gps.label : gps.label;
    if (el.innerHTML !== html) el.innerHTML = html;
  }

  /** Setas e farol no painel (escreve no DOM só quando algo muda). */
  setSignals(ctrl) {
    const key = (ctrl.indicatorLeftOn ? 1 : 0) | (ctrl.indicatorRightOn ? 2 : 0) | (ctrl.lightsMode << 2) | (ctrl.manual ? 16 : 0);
    if (key === this.signalsKey) return;
    this.signalsKey = key;
    const el = this.signalEls || (this.signalEls = { sl: $('sl'), sr: $('sr'), hl: $('hl'), gm: $('gm') });
    el.sl.classList.toggle('on', ctrl.indicatorLeftOn);
    el.sr.classList.toggle('on', ctrl.indicatorRightOn);
    el.hl.className = ctrl.lightsMode === 2 ? 'hi' : ctrl.lightsMode ? 'lo' : '';
    el.gm.textContent = ctrl.manual ? 'M' : 'A';
  }

  /** Botões de ação contextuais (só refaz o HTML quando mudam). */
  setActions(actions) {
    const sig = actions.map(a => a[0] + a[1]).join('|');
    if (sig === this.actionsSignature) return;
    this.actionsSignature = sig;
    $('acao').innerHTML = actions.map(([id, text, key]) =>
      "<button data-acao='" + id + "'" + (id ? '' : ' disabled') + '>' + text + (key && key !== '—' ? ' <kbd>' + key + '</kbd>' : '') + '</button>').join('');
  }

  draw(ctrl, map, focus) {
    this.gauges.draw(ctrl);
    map.drawMinimap(this.minimapCtx, this.minimap, focus);
  }
}
