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
    const el = $('time');
    if (el.textContent !== text) el.textContent = text;
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

  /** Setas e farol no painel. */
  setSignals(ctrl) {
    $('sl').classList.toggle('on', ctrl.indicatorLeftOn);
    $('sr').classList.toggle('on', ctrl.indicatorRightOn);
    $('hl').className = ctrl.lightsMode === 2 ? 'hi' : ctrl.lightsMode ? 'lo' : '';
    $('gm').textContent = ctrl.manual ? 'M' : 'A';
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
