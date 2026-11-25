import { $ } from '../utils/Helpers.js';
import { VEHICLES } from '../vehicles/vehicles.config.js';
import { Garage } from './Garage.js';

const MAP_NAMES = { circuito: 'Circuito', salto: 'Salto de Pirapora' };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * Telas fora do jogo: entrar/criar conta, carro inicial, menu principal (jogar, oficina, loja,
 * ranking, opções, controles) e pausa. Chama o Game para as ações e lê o perfil da Session.
 */
export class Interface {
  constructor(game) {
    this.game = game;
    this.root = $('ui');
    this.screen = null;
    this.tab = 'play';
    this.authMode = 'login';
    this.soloMap = 'circuito';
    this.garage = new Garage(game, this);
    this.#bindAuth();
    this.#bindHub();
    this.#bindPause();
    game.session.onChange(p => this.#onProfile(p));
  }

  // ------------------------------------------------------------------ telas
  show(screen) {
    this.screen = screen;
    this.root.hidden = screen === null;
    for (const s of ['auth', 'starter', 'hub', 'pause']) $('screen-' + s).hidden = s !== screen;
    $('topbar').hidden = screen !== 'hub';
    this.root.classList.toggle('solid', screen === 'pause');
    if (screen === 'hub') this.showTab(this.tab);
    if (screen === 'starter') this.#renderStarter();
  }

  hide() {
    if (this.screen === 'hub' && this.tab === 'garage') this.garage.reset();
    this.show(null);
  }

  get open() { return this.screen !== null; }

  setOffline(offline) {
    this.root.classList.toggle('offline', offline);
  }

  loading(text) {
    $('loading').hidden = !text;
    if (text) $('loading-text').textContent = text;
  }

  toast(text, kind = '') {
    const el = document.createElement('div');
    el.className = 'toast ' + kind;
    el.textContent = text;
    $('toasts').appendChild(el);
    setTimeout(() => el.classList.add('out'), 3200);
    setTimeout(() => el.remove(), 3600);
  }

  setCaption(name) {
    $('car-caption').innerHTML = name ? `<small>Seu carro</small><b>${esc(name)}</b>` : '';
  }

  // ------------------------------------------------------------------ entrar / criar conta
  #bindAuth() {
    $('auth-tabs').addEventListener('click', e => {
      const b = e.target.closest('button[data-mode]');
      if (b) this.#setAuthMode(b.dataset.mode);
    });
    $('auth-form').addEventListener('submit', async e => {
      e.preventDefault();
      const user = $('auth-user').value.trim(), pass = $('auth-pass').value;
      $('auth-error').textContent = '';
      if (!user || !pass) return void ($('auth-error').textContent = 'Preencha usuário e senha.');
      $('auth-submit').disabled = true;
      try {
        await this.game.authenticate(this.authMode, user, pass);
        $('auth-pass').value = '';
      } catch (err) {
        $('auth-error').textContent = err.message;
      } finally {
        $('auth-submit').disabled = false;
      }
    });
    $('auth-offline').addEventListener('click', () => this.game.enterOffline());
  }

  #setAuthMode(mode) {
    this.authMode = mode;
    for (const b of $('auth-tabs').children) b.classList.toggle('on', b.dataset.mode === mode);
    $('auth-submit').textContent = mode === 'login' ? 'Entrar' : 'Criar conta';
    $('auth-pass').autocomplete = mode === 'login' ? 'current-password' : 'new-password';
    $('auth-hint').hidden = mode === 'login';
    $('auth-error').textContent = '';
  }

  /** Tela de login; status explica quando o servidor não responde (e oferece o modo offline). */
  showAuth(status = '', offlineAvailable = false) {
    $('auth-status').textContent = status;
    $('auth-offline').hidden = !offlineAvailable;
    this.#setAuthMode(this.authMode);
    this.show('auth');
    setTimeout(() => $('auth-user').focus(), 50);
  }

  // ------------------------------------------------------------------ carro inicial
  #renderStarter() {
    const cards = Object.entries(VEHICLES).map(([id, cfg]) => this.#carCard(id, cfg, `<button class="btn-primary wide" data-starter="${id}">Escolher ${esc(cfg.name)}</button>`));
    $('starter-cards').innerHTML = cards.join('');
    $('starter-cards').onclick = async e => {
      const b = e.target.closest('button[data-starter]');
      if (!b) return;
      b.disabled = true;
      try { await this.game.chooseStarter(b.dataset.starter); } catch (err) { this.toast(err.message); b.disabled = false; }
    };
  }

  #carCard(id, cfg, actions, extraClass = '') {
    const p = cfg.physics, kind = id === 'saveiro' ? 'pickup' : 'sedan';
    return `<div class="car-card ${extraClass}"><h3>${esc(cfg.name)}</h3>` +
      `<div class="car-art ${kind}" style="--car-color:${cfg.colors[0]}"></div>` +
      `<div class="specs"><div class="spec"><b>${p.mass} kg</b><span>peso</span></div>` +
      `<div class="spec"><b>${p.maxTorque} N·m</b><span>torque</span></div>` +
      `<div class="spec"><b>${p.wheelbase.toFixed(2)} m</b><span>entre-eixos</span></div></div>${actions}</div>`;
  }

  // ------------------------------------------------------------------ menu principal
  #bindHub() {
    $('tabs').addEventListener('click', e => {
      const b = e.target.closest('button[data-tab]');
      if (b) this.showTab(b.dataset.tab);
    });
    $('logout').addEventListener('click', () => this.game.logout());
    $('play-global').addEventListener('click', () => this.#play(() => this.game.playRoom('global')));
    $('play-solo').addEventListener('click', () => this.#play(() => this.game.playSolo(this.soloMap)));
    $('solo-map').addEventListener('click', e => {
      const b = e.target.closest('button[data-map]');
      if (!b) return;
      this.soloMap = b.dataset.map;
      for (const x of $('solo-map').children) x.classList.toggle('on', x === b);
    });
    $('offline-cars').addEventListener('click', e => {
      const b = e.target.closest('button[data-car]');
      if (b) this.game.selectVehicle(b.dataset.car).then(() => this.#renderOfflineCars());
    });
    $('rooms-refresh').addEventListener('click', () => this.#loadRooms());
    $('room-list').addEventListener('click', e => {
      const b = e.target.closest('button[data-room]');
      if (!b) return;
      const pass = b.closest('.room').querySelector('input')?.value || '';
      if (!pass) return void ($('play-error').textContent = 'Digite a senha da sala.');
      this.#play(() => this.game.playRoom(b.dataset.room, pass));
    });
    $('create-room').addEventListener('submit', e => {
      e.preventDefault();
      const name = $('room-name').value.trim(), pass = $('room-pass').value, map = $('room-map').value;
      this.#play(async () => {
        const room = await this.game.api.createRoom(name, pass, map);
        await this.game.playRoom(room.id, pass);
      });
    });
    $('shop-cards').addEventListener('click', async e => {
      const b = e.target.closest('button[data-buy], button[data-use]');
      if (!b) return;
      $('shop-error').textContent = '';
      b.disabled = true;
      try {
        if (b.dataset.buy) {
          this.game.session.set(await this.game.api.buyCar(b.dataset.buy));
          this.toast(`${VEHICLES[b.dataset.buy].name} comprado!`, 'gold');
        } else {
          await this.game.setActiveCar(b.dataset.use);
        }
        this.#renderShop();
      } catch (err) {
        $('shop-error').textContent = err.message;
        b.disabled = false;
      }
    });
  }

  async #play(action) {
    $('play-error').textContent = '';
    try {
      await action();
    } catch (err) {
      $('play-error').textContent = err.message;
      this.loading(false);
    }
  }

  showTab(tab) {
    if (this.tab === 'garage' && tab !== 'garage') this.garage.reset();
    this.tab = tab;
    for (const b of $('tabs').children) b.classList.toggle('on', b.dataset.tab === tab);
    for (const t of ['play', 'garage', 'shop', 'ranking', 'options', 'controls']) $('tab-' + t).hidden = t !== tab;
    this.setCaption(VEHICLES[this.game.vehicleId]?.name);
    if (tab === 'play') {
      $('resume-card').hidden = !this.game.started;
      $('resume-info').textContent = this.game.matchDescription();
      this.#loadRooms();
      this.#renderOfflineCars();
    }
    if (tab === 'garage') this.garage.open();
    if (tab === 'shop') this.#renderShop();
    if (tab === 'ranking') this.#loadRanking();
    if (tab === 'options') this.game.menu.refresh();
    if (tab === 'controls') this.game.menu.renderControls();
  }

  #renderOfflineCars() {
    $('offline-cars').innerHTML = Object.entries(VEHICLES).map(([id, cfg]) =>
      `<button data-car="${id}" class="${id === this.game.vehicleId ? 'on' : ''}">${esc(cfg.name)}</button>`).join('');
  }

  async #loadRooms() {
    if (!this.game.session.loggedIn) return;
    try {
      const rooms = await this.game.api.rooms();
      const global = rooms.find(r => r.id === 'global');
      $('global-count').textContent = global ? global.players : 0;
      const priv = rooms.filter(r => r.isPrivate);
      $('room-list').innerHTML = priv.length ? priv.map(r =>
        `<div class="room"><div class="room-main"><div class="room-name">${esc(r.name)}<span class="lock">senha</span></div>` +
        `<div class="room-meta">${MAP_NAMES[r.map] || r.map} · ${r.players}/${r.maxPlayers} jogadores${r.mine ? ' · sua sala' : ''}</div></div>` +
        `<input type="password" placeholder="Senha" maxlength="32" aria-label="Senha da sala ${esc(r.name)}">` +
        `<button class="btn" data-room="${esc(r.id)}">Entrar</button></div>`).join('')
        : '<p class="muted small">Nenhuma sala aberta. Crie uma abaixo e chame os amigos.</p>';
    } catch (err) {
      $('room-list').innerHTML = `<p class="muted small">${esc(err.message)}</p>`;
    }
  }

  #renderShop() {
    const s = this.game.session;
    if (!s.profile || !s.catalog) return;
    $('shop-cards').innerHTML = s.catalog.cars.map(car => {
      const cfg = VEHICLES[car.id], owned = s.owns(car.id), active = s.profile.selectedCar === car.id;
      const action = !owned
        ? `<div class="price"><span class="coins">${car.price}</span><button class="btn-primary" data-buy="${car.id}" ${s.coins < car.price ? 'disabled' : ''}>Comprar</button></div>`
        : active ? '<div class="price"><span class="muted">Em uso</span></div>'
          : `<div class="price"><span class="muted">Na sua garagem</span><button class="btn" data-use="${car.id}">Usar</button></div>`;
      return this.#carCard(car.id, cfg, action, active ? 'active' : '').replace('<h3>', owned ? '<span class="tag">SEU</span><h3>' : '<h3>');
    }).join('');
  }

  async #loadRanking() {
    const s = this.game.session, p = s.profile;
    if (p) {
      $('my-stats').innerHTML = `<div class="stat"><b>${p.bestDrift.toLocaleString('pt-BR')}</b><span>seu melhor drift</span></div>` +
        `<div class="stat"><b>${p.totalDriftPoints.toLocaleString('pt-BR')}</b><span>pontos no total</span></div>` +
        `<div class="stat"><b class="coins">${p.coins.toLocaleString('pt-BR')}</b><span>moedas</span></div>`;
    }
    try {
      const rows = await this.game.api.leaderboard();
      $('ranking-body').innerHTML = rows.length ? rows.map((r, i) =>
        `<tr class="${p && r.username === p.username ? 'me' : ''}"><td>${i + 1}</td><td>${esc(r.username)}</td>` +
        `<td>${r.bestDrift.toLocaleString('pt-BR')}</td><td>${r.totalDriftPoints.toLocaleString('pt-BR')}</td></tr>`).join('')
        : '<tr><td colspan="4" class="muted">Ninguém pontuou ainda. Seja o primeiro!</td></tr>';
    } catch (err) {
      $('ranking-body').innerHTML = `<tr><td colspan="4" class="muted">${esc(err.message)}</td></tr>`;
    }
  }

  #onProfile(p) {
    if (!p) return;
    $('chip-name').textContent = p.username;
    $('chip-avatar').textContent = p.username[0].toUpperCase();
    $('chip-coins').textContent = p.coins.toLocaleString('pt-BR');
    if (this.screen === 'hub' && this.tab === 'shop') this.#renderShop();
  }

  // ------------------------------------------------------------------ pausa
  #bindPause() {
    $('pause-resume').addEventListener('click', () => this.game.resume());
    $('pause-restart').addEventListener('click', () => this.game.restart());
    $('pause-exit').addEventListener('click', () => this.game.exitToMenu());
    // opções durante a partida: abre o menu principal sem sair da sala (o jogo continua pausado)
    $('pause-options').addEventListener('click', () => {
      this.tab = 'options';
      this.show('hub');
    });
    $('resume-play').addEventListener('click', () => this.game.resume());
    $('resume-exit').addEventListener('click', () => this.game.exitToMenu());
  }

  showPause(info) {
    $('pause-info').textContent = info;
    this.show('pause');
  }
}
