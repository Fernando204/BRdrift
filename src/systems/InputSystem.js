import { storage } from '../utils/Helpers.js';
import { STORAGE_KEYS } from '../utils/Constants.js';

/** Ações do jogo: [id, descrição, [tecla principal, tecla alternativa]]. */
export const ACTIONS = [
  ['accel', 'Acelerar', ['KeyW', 'ArrowUp']],
  ['brake', 'Frear / r\xE9', ['KeyS', 'ArrowDown']],
  ['left', 'Virar \xE0 esquerda', ['KeyA', 'ArrowLeft']],
  ['right', 'Virar \xE0 direita', ['KeyD', 'ArrowRight']],
  ['run', 'Correr', ['ShiftLeft', '']],
  ['hb', 'Freio de m\xE3o', ['Space', '']],
  ['sigL', 'Seta esquerda', ['KeyQ', '']],
  ['sigR', 'Seta direita', ['KeyE', '']],
  ['hazard', 'Pisca-alerta', ['KeyH', '']],
  ['lights', 'Far\xF3is', ['KeyL', '']],
  ['night', 'Dia / noite', ['KeyN', '']],
  ['cam', 'Trocar c\xE2mera', ['KeyC', '']],
  ['reset', 'Voltar \xE0 pista', ['KeyR', '']],
  ['map', 'Mapa / GPS', ['KeyM', '']],
  ['paint', 'Trocar pintura', ['KeyP', '']],
  ['up', 'Subir marcha', ['ShiftLeft', 'KeyF']],
  ['dn', 'Descer marcha', ['ControlLeft', 'KeyV']],
  ['man', 'Manual / autom\xE1tico', ['KeyT', '']],
  ['edit', 'Modo de edição', ['KeyX', '']],
  ['acao', 'Porta / entrar / sair', ['KeyG', '']],
  ['partida', 'Dar partida / desligar', ['KeyI', '']],
  ['modo', 'Modo normal / drift', ['KeyB', '']],
  ['diag', 'Painel de desempenho', ['F3', '']],
];

const KEY_NAMES = {
  ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Space: 'Espa\xE7o',
  ShiftLeft: 'Shift', ControlLeft: 'Ctrl', AltLeft: 'Alt', Enter: 'Enter', Tab: 'Tab', Backquote: '`',
  Minus: '-', Equal: '=', Comma: ',', Period: '.', Slash: '/', Semicolon: ';', BracketLeft: '[', BracketRight: ']', Backslash: '\\',
};
const PREVENT_DEFAULT = ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'F3'];
const normalizeCode = code => (code === 'ShiftRight' ? 'ShiftLeft' : code === 'ControlRight' ? 'ControlLeft' : code);

/**
 * Teclado e botões de toque. Mantém o estado das teclas, as associações configuráveis (salvas)
 * e dispara ações pontuais (faróis, câmera...) quando o jogo está em andamento.
 */
export class InputSystem {
  constructor() {
    this.down = {};                          // código da tecla (ou "@ação" para toque) -> pressionada
    this.defaults = Object.fromEntries(ACTIONS.map(a => [a[0], a[2]]));
    this.bindings = Object.fromEntries(ACTIONS.map(a => [a[0], a[2].slice()]));
    const saved = storage.get(STORAGE_KEYS.bindings, null);
    if (saved) for (const id in this.defaults) if (Array.isArray(saved[id]) && saved[id].length === 2) this.bindings[id] = saved[id].map(String);

    this.handlers = {};                      // ação -> função (ações pontuais)
    this.interceptor = null;                 // (código, evento) => true se consumiu a tecla
    this.onEscape = null;
    this.isPlaying = () => false;            // ações e preventDefault só durante o jogo

    this.releaseAll = this.releaseAll.bind(this);
    addEventListener('keydown', this.#onKeyDown);
    addEventListener('keyup', this.#onKeyUp);
    addEventListener('blur', this.releaseAll);
  }

  /** A ação está pressionada (por qualquer uma das duas teclas ou pelo botão de toque)? */
  isDown(action) {
    return this.bindings[action].some(code => code && this.down[code]) || !!this.down['@' + action];
  }

  on(action, handler) {
    this.handlers[action] = handler;
  }

  releaseAll() {
    for (const k in this.down) this.down[k] = 0;
  }

  /** Botão de toque que fica "pressionado" enquanto o dedo está em cima (acelerar, frear, virar). */
  bindHoldButton(element, action) {
    const key = '@' + action;
    element.addEventListener('pointerdown', e => { this.down[key] = 1; e.preventDefault(); });
    for (const type of ['pointerup', 'pointerleave', 'pointercancel']) element.addEventListener(type, () => { this.down[key] = 0; });
  }

  // ------------------------------------------------------------------ nomes e reconfiguração
  keyName(code) {
    return code ? KEY_NAMES[code] || code.replace(/^Key|^Digit/, '').replace(/^Numpad/, 'Num ') : '—';
  }

  /** Nome da tecla principal de uma ação (para textos de ajuda). */
  label(action) {
    return this.keyName(this.bindings[action].find(c => c) || '');
  }

  /** Associa a tecla a (ação, posição); se ela já era usada em outra ação, remove de lá. Retorna aviso ou "". */
  rebind(action, slot, code) {
    let notice = '';
    if (code === 'Delete' || code === 'Backspace') this.bindings[action][slot] = '';
    else {
      for (const [id, description] of ACTIONS) {
        this.bindings[id].forEach((c, i) => {
          if (c === code && !(id === action && i === slot)) {
            this.bindings[id][i] = '';
            if (id !== action) notice = this.keyName(code) + ' foi movida de “' + description + '”.';
          }
        });
      }
      this.bindings[action][slot] = code;
    }
    this.save();
    return notice;
  }

  resetBindings() {
    for (const [id, , keys] of ACTIONS) this.bindings[id] = keys.slice();
    this.save();
  }

  save() {
    storage.set(STORAGE_KEYS.bindings, this.bindings);
  }

  // ------------------------------------------------------------------ eventos
  #onKeyDown = e => {
    const code = normalizeCode(e.code);
    if (this.interceptor && this.interceptor(code, e)) return;
    if (code === 'Escape') {
      if (!e.repeat) this.onEscape?.();
      return;
    }
    this.down[code] = 1;
    const playing = this.isPlaying();
    if (playing && !e.repeat) {
      for (const action in this.handlers) if (this.bindings[action].includes(code)) this.handlers[action]();
    }
    if (playing && PREVENT_DEFAULT.includes(code)) e.preventDefault();
  };

  #onKeyUp = e => {
    this.down[normalizeCode(e.code)] = 0;
  };

  dispose() {
    removeEventListener('keydown', this.#onKeyDown);
    removeEventListener('keyup', this.#onKeyUp);
    removeEventListener('blur', this.releaseAll);
  }
}
