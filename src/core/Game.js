import { AssetManager } from './AssetManager.js';
import { Renderer } from './Renderer.js';
import { GameLoop } from './GameLoop.js';
import { Settings } from './Settings.js';
import { CameraController, CameraMode } from './Camera.js';
import { Environment } from '../environment/Environment.js';
import { Lighting } from '../environment/Lighting.js';
import { World } from '../environment/World.js';
import { SkidMarks } from '../environment/effects/SkidMarks.js';
import { TireSmoke } from '../environment/effects/TireSmoke.js';
import { InputSystem } from '../systems/InputSystem.js';
import { AudioSystem } from '../systems/AudioSystem.js';
import { PhysicsSystem } from '../systems/PhysicsSystem.js';
import { VehicleSystem } from '../systems/VehicleSystem.js';
import { PlayerController } from '../player/PlayerController.js';
import { HUD } from '../ui/HUD.js';
import { Menu } from '../ui/Menu.js';
import { GpsMap } from '../ui/GpsMap.js';
import { TouchControls } from '../ui/TouchControls.js';
import { VEHICLES } from '../vehicles/vehicles.config.js';
import { VehicleCustomization } from '../vehicles/VehicleCustomization.js';
import { GAME, GRAPHICS_PRESETS } from '../utils/Constants.js';
import { PerformanceMonitor } from './PerformanceMonitor.js';
import { Benchmark } from './Benchmark.js';
import { DiagnosticsPanel } from '../ui/DiagnosticsPanel.js';
import { $ } from '../utils/Helpers.js';
import { ApiClient } from '../net/ApiClient.js';
import { Session } from '../net/Session.js';
import { MultiplayerClient } from '../net/MultiplayerClient.js';
import { RemotePlayers, STATE_FLAGS } from '../multiplayer/RemotePlayers.js';
import { DriftScoring } from '../systems/DriftScoring.js';
import { Showroom } from '../environment/Showroom.js';
import { Interface } from '../ui/Interface.js';

const MAP_NAMES = { circuito: 'Circuito', salto: 'Salto de Pirapora' };

/**
 * Orquestra o jogo: cria os sistemas, liga a interface às ações e define a ordem de atualização por quadro.
 * A lógica específica fica nos módulos (física, mapa, veículo, jogador, interface).
 */
export class Game {
  constructor() {
    this.started = false;        // passou do menu inicial
    this.paused = false;
    this.editMode = true;
    this.pausedAt = 0;
    this.vehicleId = GAME.defaultVehicle;     // trocado pelo salvo nas opções, logo abaixo
    this.physicsInput = { accel: false, brake: false, handbrake: false, steer: 0 };   // reaproveitado a cada passo
    this.physicsAccumulator = 0;
    this.shownLap = 0;
    this.exploringShown = null;
    this.keyLabelsVersion = 0;                  // muda quando as teclas são reconfiguradas (textos das ações)
    this.availableActionsBuilder = () => this.#availableActions();
    // objetos passados a cada quadro, criados uma vez só
    this.cameraContext = { menuOpen: true, vehicleState: ORIGIN, vehicleModel: null, cockpitOffset: null, onFoot: false, playerBody: null };
    this.audioContext = { engineLevel: 0, throttle: 0, engineOn: false, skid: 0, sound: null };

    this.settings = new Settings(Math.min(...Object.values(VEHICLES).map(v => v.colors.length)));
    if (VEHICLES[this.settings.vehicleId]) this.vehicleId = this.settings.vehicleId;
    this.settings.vehicleId = this.vehicleId;
    this.assets = new AssetManager();
    this.renderer = new Renderer();
    this.environment = new Environment(this.renderer.renderer);
    this.scene = this.environment.scene;
    this.lighting = new Lighting(this.scene, this.environment.sunDirection);
    this.cameraController = new CameraController(this.renderer.canvas);
    this.applyGraphics();
    this.world = new World(this.environment, this.assets);
    this.vehicles = new VehicleSystem(this.scene, this.assets);
    this.player = new PlayerController(this.scene, this.renderer.canvas);
    this.smoke = new TireSmoke(this.scene);
    this.skidMarks = new SkidMarks(this.scene, VEHICLES[this.vehicleId].tireContacts, this.smoke);
    this.input = new InputSystem();
    this.audio = new AudioSystem(this.settings.volume);
    this.hud = new HUD();
    this.editModeButton = $('editMode');
    this.monitor = new PerformanceMonitor(this.renderer.renderer);
    this.diagnostics = new DiagnosticsPanel(this.monitor);
    this.diagnostics.setVisible(this.settings.diagnostics);
    this.benchmark = Benchmark.fromUrl();
    this.loop = new GameLoop((dt, now) => this.frame(dt, now));

    // jogo online: conta e economia (REST), salas (WebSocket), pontuação de drift e estúdio dos menus
    this.api = new ApiClient();
    this.session = new Session(this.api);
    this.mp = new MultiplayerClient();
    this.drift = new DriftScoring();
    this.showroom = new Showroom(this.scene.environment);
    this.showroom.setAspect(innerWidth, innerHeight);
    this.remote = new RemotePlayers(this.scene, this.vehicles, this.cameraController.camera, $('tags'));
    this.matchRoom = null;
    this.drift.onBank = (points, duration) => this.#bankDrift(points, duration);
    this.drift.onFail = () => this.hud.driftFail();
    this.mp.onPlayerJoin = p => { this.remote.add(p); this.iface.toast(`${p.name} entrou na sala`); };
    this.mp.onPlayerLeave = id => {
      const name = this.remote.players.get(id)?.name;
      this.remote.remove(id);
      if (name) this.iface.toast(`${name} saiu da sala`);
    };
    this.mp.onState = (id, values, flags) => this.remote.pushState(id, values, flags);
    this.mp.onLook = (id, look) => this.remote.setLook(id, look);
    this.mp.onDisconnect = message => {
      this.iface.toast(message);
      if (this.started) this.exitToMenu();
    };

    const message = (text, seconds) => this.hud.message(text, seconds);
    this.player.onMessage = message;
    this.hud.onAction = id => this.runAction(id);

    this.menu = new Menu(this, {
      start: () => this.start(),
      resume: () => this.resume(),
      restart: () => this.restart(),
      pause: () => this.pause(),
      selectMap: id => this.selectMap(id),
      selectVehicle: id => this.selectVehicle(id),
      setGearbox: manual => { this.settings.manualGearbox = manual; if (this.controller) this.controller.manual = manual; this.menu.refresh(); this.saveSettings(); },
      setDriveMode: drift => this.setDriveMode(drift, false),
      setNight: night => { this.setNight(night); this.menu.refresh(); this.saveSettings(); },
      setColor: index => { this.setColor(index); this.menu.refresh(); this.saveSettings(); },
      setVolume: v => { this.settings.volume = v; this.audio.setVolume(v); this.saveSettings(); },
      setGraphicsQuality: quality => this.setGraphicsPreset(quality),
      setShadowQuality: quality => this.updateGraphics({ shadowQuality: quality }),
      setResolutionScale: scale => this.updateGraphics({ resolutionScale: scale }),
      setLowering: fraction => { this.setLowering(fraction); this.saveSettings(); },
      setDiagnostics: visible => { this.settings.diagnostics = visible; this.diagnostics.setVisible(visible); this.menu.refresh(); this.saveSettings(); },
      setRenderDistance: distance => this.updateGraphics({ renderDistance: distance }),
    });
    this.iface = new Interface(this);
    this.gpsMap = new GpsMap(this);
    this.vehicleCustomization = new VehicleCustomization({
      canvas: this.renderer.canvas,
      getCamera: () => this.cameraController.camera,
      getVehicle: () => this.vehicle,
      getPlayerBody: () => this.player.body,
      onInteract: action => {
        if (action === 'toggleDoor' && this.vehicle) this.vehicle.doorTarget = this.vehicle.doorTarget ? 0 : 1;
      },
      onOpenChange: open => {
        this.input.releaseAll();
        this.player.firstPerson.setEnabled(!open && this.playing && !this.player.inVehicle && !this.paused && !this.gpsMap.open);
      },
    });
    this.#bindInput();
    this.touch = new TouchControls(this);

    $('bmodo').addEventListener('pointerdown', e => { e.preventDefault(); this.setDriveMode(!this.settings.driftMode, true); });
    $('editMode').addEventListener('pointerdown', e => {
      e.preventDefault();
      e.stopPropagation();
      if (!this.player.inVehicle) this.setEditMode(!this.editMode);
    });
    addEventListener('resize', () => this.resize());
    this.resize();
  }

  // ------------------------------------------------------------------ acesso rápido
  get vehicle() { return this.vehicles.vehicle; }
  get controller() { return this.vehicles.controller; }
  get vehicleReady() { return !!this.vehicles.vehicle; }
  get vehicleColors() { return VEHICLES[this.vehicleId].colors; }
  get playing() { return this.started && this.vehicleReady && !this.paused; }

  /** Posição seguida pela câmera, minimapa, GPS e sombras (o carro ou o jogador a pé). */
  get focus() {
    return this.player.focus(this.controller ? this.controller.state : ORIGIN);
  }

  // ------------------------------------------------------------------ inicialização
  async load() {
    this.hud.setDriveModeButton(this.settings.driftMode);
    this.setNight(this.settings.night);
    this.iface.loading('Carregando\u2026');
    try {
      await this.selectMap(this.settings.mapId, { initial: true });
    } catch (err) {
      console.error(err);
      if (this.settings.mapId !== GAME.defaultMap) {
        this.settings.mapId = GAME.defaultMap;
        await this.selectMap(GAME.defaultMap, { initial: true });
      }
    }
    this.menu.refresh();
    this.loop.start();
    try {
      await this.vehicles.spawn(this.vehicleId);
    } catch (err) {
      this.iface.loading('Erro ao carregar o modelo 3D.');
      console.error(err);
      return;
    }
    this.#setupVehicle(null);
    this.showroom.show(this.vehicle);
    this.iface.loading(false);
    if (this.benchmark) {   // benchmark: direto para o jogo, sem conta
      this.session.offline = true;
      await this.benchmark.start(this);
      return;
    }
    await this.#boot();
  }

  /** Já está logado (cookie válido)? Senão, tela de login; sem servidor, oferece jogar offline. */
  async #boot() {
    if (!this.api.available) return this.enterOffline();   // aberto por file://
    try {
      await this.#afterLogin(await this.api.me());
    } catch (err) {
      if (err.status === 401) this.iface.showAuth('', false);
      else this.iface.showAuth('Servidor indisponível. Você pode jogar offline, sem salvar progresso.', true);
    }
  }

  /** Entrar ou criar conta (chamado pela tela de login). */
  async authenticate(mode, username, password) {
    const profile = mode === 'login' ? await this.api.login(username, password) : await this.api.register(username, password);
    await this.#afterLogin(profile);
  }

  async #afterLogin(profile) {
    this.session.offline = false;
    this.iface.setOffline(false);
    if (!this.session.catalog) this.session.catalog = await this.api.catalog();
    this.session.set(profile);
    this.setEditMode(false, true);   // online, a pintura é feita (e paga) na oficina
    if (profile.needsStarter) return this.iface.show('starter');
    await this.#useProfileCar();
    this.iface.show('hub');
  }

  async chooseStarter(carId) {
    this.session.set(await this.api.chooseStarter(carId));
    await this.#useProfileCar();
    this.iface.show('hub');
    this.iface.toast(`Bem-vindo! O ${VEHICLES[carId].name} agora é seu.`, 'ok');
  }

  async #useProfileCar() {
    const id = this.session.profile.selectedCar;
    if (id && id !== this.vehicleId) await this.selectVehicle(id);
    else this.applyProfileLook();
  }

  /** Pintura e altura compradas (online) aplicadas ao seu carro. */
  applyProfileLook() {
    if (this.session.loggedIn && this.vehicle) this.vehicle.applyLook(this.session.look(this.vehicleId));
  }

  /** Troca o carro em uso por outro da garagem (loja/oficina). */
  async setActiveCar(carId) {
    this.session.set(await this.api.selectCar(carId));
    await this.selectVehicle(carId);
    this.onLookChanged();
    if (this.iface.screen === 'hub') this.iface.showTab(this.iface.tab);
  }

  /** Depois da oficina ou de trocar de carro: atualiza o carro e avisa a sala. */
  onLookChanged() {
    this.applyProfileLook();
    this.mp.announceLook();
  }

  enterOffline() {
    this.session.offline = true;
    this.iface.setOffline(true);
    $('chip-name').textContent = 'Modo offline';
    $('chip-avatar').textContent = '?';
    this.iface.show('hub');
  }

  async logout() {
    if (this.started) this.exitToMenu();
    this.mp.disconnect();
    try { await this.api.logout(); } catch { /* sessão já inválida */ }
    this.session.profile = null;
    this.iface.showAuth('', false);
  }

  // ------------------------------------------------------------------ partidas
  /** Treino sozinho (online também vale moedas). */
  async playSolo(mapId) {
    await this.#startMatch(mapId, null);
  }

  /** Sala global ou privada: conecta, entra e monta o mapa da sala. */
  async playRoom(roomId, password) {
    if (!this.session.loggedIn) throw new Error('Entre na sua conta para jogar online.');
    this.iface.loading('Conectando\u2026');
    let welcome;
    try {
      welcome = await this.mp.join(roomId, password);
    } catch (err) {
      this.iface.loading(false);
      throw err;
    }
    this.remote.clear();
    try {
      await this.#startMatch(welcome.room.map, welcome.room);
    } catch (err) {
      this.mp.leave();
      throw err;
    }
    for (const p of welcome.players) this.remote.add(p);
  }

  async #startMatch(mapId, room) {
    if (this.started) this.#endMatch();
    this.iface.loading('Montando o mapa\u2026');
    try {
      await this.selectMap(mapId);
    } finally {
      this.iface.loading(false);
    }
    this.matchRoom = room;
    this.showroom.release(this.scene);
    this.#spawnVehicle(false);
    this.start();
  }

  /** Texto da partida atual (pausa e menu). */
  matchDescription() {
    const map = MAP_NAMES[this.world.mapId] || '';
    if (!this.matchRoom) return `Treino solo · ${map}`;
    const room = this.matchRoom.isPrivate ? `Sala "${this.matchRoom.name}"` : 'Sala global';
    return `${room} · ${map} · ${this.remote.count + 1} jogador(es)`;
  }

  #endMatch() {
    this.mp.leave();
    this.remote.clear();
    this.matchRoom = null;
    this.started = false;
    this.paused = false;
    this.drift.reset();
    this.hud.hide();
    if (this.gpsMap.open) this.gpsMap.hide();
    this.input.releaseAll();
    this.audio.suspend();
    this.vehicleCustomization.close();
    if (this.player.firstPerson.pointerLocked) this.player.firstPerson.exitPointerLock();
    if (!this.player.inVehicle) this.player.enter(this.vehicle, this.controller);
    this.controller.stopEngine();
    this.controller.resetMotion();
    this.vehicle.doorTarget = 0;
  }

  /** Volta ao menu principal (sai da sala, se estiver em uma). */
  exitToMenu() {
    this.#endMatch();
    this.showroom.show(this.vehicle);
    this.iface.tab = 'play';
    this.iface.show('hub');
  }

  /** Drift terminado: online, o servidor confere e paga em moedas. */
  async #bankDrift(points, duration) {
    this.hud.driftBanked(points);
    if (!this.session.loggedIn) return;
    try {
      const r = await this.api.bankDrift(points, duration);
      this.session.setCoins(r.coins);
      this.hud.setCoins(r.coins);
      this.iface.toast(`Drift de ${points.toLocaleString('pt-BR')} pts: +${r.coinsEarned} moedas${r.newRecord ? ' · novo recorde!' : ''}`, 'gold');
    } catch (err) {
      this.iface.toast('Drift não registrado: ' + err.message);
    }
  }

  /** Bits do estado enviado à sala (freio, ré, faróis, setas, motor). */
  #stateFlags(ctrl) {
    const s = ctrl.state;
    return (s.brake ? STATE_FLAGS.BRAKE : 0) | (s.reverse ? STATE_FLAGS.REVERSE : 0) | (ctrl.lightsMode << STATE_FLAGS.LIGHTS_SHIFT)
      | (ctrl.indicators & 1 ? STATE_FLAGS.IND_L : 0) | (ctrl.indicators & 2 ? STATE_FLAGS.IND_R : 0) | (ctrl.engineOn ? STATE_FLAGS.ENGINE : 0);
  }

  /** Liga o carro recém-carregado ao jogo (câmbio, mensagens, cor, marcas de pneu, posição, banco). */
  #setupVehicle(keep) {
    const ctrl = this.controller, cfg = this.vehicles.config;
    ctrl.manual = this.settings.manualGearbox;
    ctrl.onMessage = (text, seconds) => this.hud.message(text, seconds);
    ctrl.onBlink = on => this.audio.playBlink(on);
    ctrl.setDriftMode(this.settings.driftMode);
    if (this.environment.night && !ctrl.lightsMode) ctrl.lightsMode = 1;
    if (this.session?.loggedIn) this.applyProfileLook();
    else {
      this.setColor(this.settings.colorIndex);
      this.setLowering(this.settings.lowering[this.vehicleId] ?? 0);
    }
    this.skidMarks.setWheelPoints(cfg.tireContacts);
    if (keep) {
      Object.assign(ctrl.state, keep);
      ctrl.resetMotion();
      this.cameraController.heading = keep.h;
    } else {
      this.#spawnVehicle(false);
    }
    if (this.player.inVehicle) this.player.sitIn(this.vehicle);
    this.prewarmShaders();
  }

  /**
   * Troca de carro (menu). O novo modelo é carregado sob demanda; o anterior é descartado e liberado
   * da memória. O carro novo aparece no mesmo lugar e, se o jogador estava dentro, ele continua sentado.
   */
  async selectVehicle(id) {
    if (!VEHICLES[id] || (id === this.vehicleId && this.vehicle) || this.loadingVehicle) return;
    this.loadingVehicle = true;
    const st = this.controller?.state;
    const keep = st ? { x: st.x, z: st.z, h: st.h } : null;
    this.iface.loading('Carregando ' + VEHICLES[id].name + '\u2026');
    try {
      this.player.character.root.removeFromParent();   // o personagem não pode ser descartado junto com o carro antigo
      await this.vehicles.spawn(id);
      this.vehicleId = id;
      this.settings.vehicleId = id;
      this.#setupVehicle(keep);
      if (!this.player.inVehicle) this.player.character.standIn(this.scene, this.player.body.x, this.player.body.z, this.player.body.h);
      if (!this.started) this.showroom.show(this.vehicle);
      this.saveSettings();
      this.menu.refresh();
    } catch (err) {
      console.error(err);
      this.iface.toast('Erro ao carregar o modelo 3D.');
      if (this.vehicle && this.player.inVehicle) this.player.sitIn(this.vehicle);
    } finally {
      this.loadingVehicle = false;
      this.iface.loading(false);
    }
  }

  #bindInput() {
    const input = this.input;
    input.isPlaying = () => this.playing;
    input.interceptor = (code, e) => {
      if (this.gpsMap.open) {
        if (code === 'Escape' || input.bindings.map.includes(code)) e.preventDefault(), this.gpsMap.hide();
        return true;
      }
      if (this.menu.capture) {
        e.preventDefault();
        this.menu.captureKey(code);
        return true;
      }
      return false;
    };
    input.onEscape = () => {
      if (this.vehicleCustomization.open) {
        this.vehicleCustomization.close();
        return;
      }
      if (!this.player.inVehicle && this.player.firstPerson.pointerLocked) {
        this.player.firstPerson.exitPointerLock();
        return;
      }
      if (this.menu.handleEscape() || !this.started) return;
      if (!this.paused) this.pause();
      else if (this.iface.screen === 'hub') this.iface.showPause(this.matchDescription());   // opções abertas na pausa
      else this.resume();
    };
    const ctrl = () => this.controller;
    input.on('sigL', () => ctrl().toggleIndicator(1));
    input.on('sigR', () => ctrl().toggleIndicator(2));
    input.on('hazard', () => ctrl().toggleIndicator(3));
    input.on('lights', () => ctrl().cycleLights());
    input.on('night', () => this.toggleNight());
    input.on('cam', () => this.cameraController.toggleMode());
    input.on('reset', () => this.#spawnVehicle(true));
    input.on('map', () => { if (!this.vehicleCustomization.open) this.gpsMap.show(this.focus); });
    input.on('paint', () => this.#freePaint());
    input.on('up', () => { if (this.player.inVehicle) ctrl().shiftUp(); });
    input.on('dn', () => { if (this.player.inVehicle) ctrl().shiftDown(); });
    input.on('man', () => ctrl().toggleGearbox());
    input.on('acao', () => this.primaryAction());
    input.on('partida', () => this.toggleIgnition());
    input.on('diag', () => { this.settings.diagnostics = this.diagnostics.toggle(); this.saveSettings(); });
    input.on('modo', () => this.setDriveMode(!this.settings.driftMode, true));
    input.on('edit', () => { if (!this.player.inVehicle && !this.session.loggedIn) this.setEditMode(!this.editMode); });
  }

  // ------------------------------------------------------------------ fluxo de partida
  start() {
    if (document.body.classList.contains('touch')) {
      try {
        const p = document.documentElement.requestFullscreen?.();
        p?.then(() => screen.orientation?.lock?.('landscape')).catch(() => {});
      } catch { /* tela cheia não suportada */ }
    }
    this.started = true;
    this.paused = false;
    this.iface.hide();
    this.hud.show();
    this.hud.showCoins(this.session.loggedIn ? this.session.coins : null);
    this.drift.reset();
    this.audio.init();
    this.player.exit(this.vehicle, this.controller, this.world.map);
    this.player.firstPerson.reset(this.player.body.h);
    this.player.firstPerson.setEnabled(true);
    this.cameraController.heading = this.player.body.h;
    this.cameraController.mode = CameraMode.COCKPIT;
    this.updateHelp();
    this.hud.message('Pressione ' + this.input.label('partida') + ' para dar partida', 4);
    this.hud.fadeHelpLater();
  }

  pause() {
    this.paused = true;
    this.vehicleCustomization.close();
    this.pausedAt = performance.now();
    this.input.releaseAll();
    this.saveSettings();
    this.iface.showPause(this.matchDescription());
    this.audio.suspend();
  }

  resume() {
    this.paused = false;
    this.world.map.shiftTimers(performance.now() - this.pausedAt);
    this.iface.hide();
    this.audio.resume();
    this.loop.resetClock();
  }

  /** "Reiniciar": volta à largada, dentro do carro, com as voltas zeradas. */
  restart() {
    this.#spawnVehicle(false);
    if (!this.player.inVehicle) this.enterVehicle();
    this.#resetLaps('0:00.000');
    this.resume();
  }

  /** Coloca o carro na largada (ou na pista/rua mais próxima) e zera o movimento. */
  #spawnVehicle(nearCurrent) {
    const ctrl = this.controller;
    if (!ctrl) return;
    this.world.map.spawn(ctrl.state, nearCurrent);
    ctrl.resetMotion();
    this.cameraController.heading = ctrl.state.h;
  }

  #resetLaps(timerText) {
    this.world.map.resetLaps();
    this.shownLap = 1;
    this.hud.setLap(1);
    this.hud.setTimerText(timerText);
  }

  // ------------------------------------------------------------------ mapa
  async selectMap(id, { initial = false } = {}) {
    if (this.world.mapId === id || this.loadingMap) return;
    this.loadingMap = true;
    try {
      const map = await this.world.setMap(id);
      this.environment.setRenderDistance(this.settings.renderDistance);
      this.applyWorldDetail();
      this.settings.mapId = id;
      map.onLap = text => {
        this.hud.message(text);
        this.hud.setBest(map.best);
      };
      if (map.gps) map.gps.onArrive = () => this.hud.message('Voc\xEA chegou ao destino!', 3);
      this.hud.setMapMode(map);
      this.hud.setDestination(map.gps);   // some ao sair da cidade
      this.hud.setBest(map.best);
      this.skidMarks.clear();
      this.#resetLaps(map.gps ? '' : '0:00.000');
      this.#spawnVehicle(false);
      this.updateHelp();
      this.prewarmShaders();
      if (!initial) this.saveSettings(), this.menu.refresh();
    } finally {
      this.loadingMap = false;
    }
  }

  // ------------------------------------------------------------------ opções
  setDriveMode(drift, announce) {
    this.settings.driftMode = drift;
    this.controller?.setDriftMode(drift);
    this.hud.setDriveModeButton(drift);
    if (announce) this.hud.message(drift ? 'Modo drift: tra\xE7\xE3o livre, carro solto' : 'Modo normal: controle de tra\xE7\xE3o e estabilidade ligados', 2.2);
    this.saveSettings();
    this.menu.refresh();
  }

  setNight(night) {
    this.settings.night = night;
    this.environment.setNight(night);
    this.lighting.setNight(night);
    this.world.map?.setNight(night);
    this.applyWorldDetail();
    if (night && this.controller && !this.controller.lightsMode) this.controller.lightsMode = 1;   // acende os faróis
  }

  toggleNight() {
    this.setNight(!this.settings.night);
  }

  /** Rebaixamento do carro atual: fração de 0 (original) a 1 (máximo permitido para o carro). */
  setLowering(fraction) {
    this.settings.lowering[this.vehicleId] = Math.min(Math.max(fraction, 0), 1);
    const max = VEHICLES[this.vehicleId].suspension?.maxDrop ?? 0;
    this.vehicle?.setRideHeight(this.settings.lowering[this.vehicleId] * max);
    this.menu?.refreshLowering?.();
  }

  /** Rebaixamento atual em centímetros (para o menu). */
  get loweringCm() {
    const max = VEHICLES[this.vehicleId].suspension?.maxDrop ?? 0;
    return Math.round((this.settings.lowering[this.vehicleId] ?? 0) * max * 100);
  }

  /** Tecla P / botão 🎨: troca de cor grátis só no modo offline; online, a pintura é na oficina. */
  #freePaint() {
    if (this.session.loggedIn) return this.hud.message('Pinte o carro na Oficina (menu principal)', 2);
    this.setColor(this.settings.colorIndex + 1);
  }

  setColor(index) {
    const n = this.vehicleColors.length;
    this.settings.colorIndex = ((index % n) + n) % n;
    this.vehicle?.setColor(this.vehicleColors[this.settings.colorIndex]);
  }

  /** Predefinição Baixa/Média/Alta: ajusta todos os itens gráficos (cada um pode ser mudado depois). */
  setGraphicsPreset(quality) {
    const preset = GRAPHICS_PRESETS[quality];
    this.updateGraphics({ graphicsQuality: quality, shadowQuality: quality, renderDistance: preset.renderDistance, resolutionScale: 1 });
  }

  /** Muda itens gráficos, aplica, atualiza o menu e salva. */
  updateGraphics(changes) {
    Object.assign(this.settings, changes);
    this.applyGraphics();
    this.menu.refresh();
    this.saveSettings();
  }

  /** Aplica as opções gráficas atuais ao renderizador, sombras, distância e detalhes do mapa. */
  applyGraphics() {
    const s = this.settings, gl = this.renderer.renderer;
    this.renderer.setQuality(s.graphicsQuality);
    this.renderer.setResolutionScale(s.resolutionScale);
    this.lighting.setShadowQuality(s.shadowQuality);
    if (gl.shadowMap.enabled !== s.shadows) {
      gl.shadowMap.enabled = s.shadows;
      this.scene.traverse(o => { if (o.material) for (const m of [].concat(o.material)) m.needsUpdate = true; });   // shaders com/sem sombra
      if (this.started !== undefined) queueMicrotask(() => this.prewarmShaders());
    }
    this.environment.setRenderDistance(s.renderDistance);
    this.cameraController.setRenderDistance(s.renderDistance);
    this.resize();
    this.applyWorldDetail();
  }

  /**
   * Compila de antemão as duas variantes dos shaders (faróis acesos e apagados). Os holofotes
   * ficam invisíveis quando apagados para economizar GPU; sem isso, acender os faróis pela
   * primeira vez recompilaria todos os materiais e travaria o jogo por um instante.
   */
  prewarmShaders() {
    const vehicle = this.vehicle;
    if (!vehicle) return;
    // um quadro completo em cada estado (inclui as variantes da passada de transmission e das sombras,
    // que renderer.compile() não cobre); a imagem é sobrescrita no quadro seguinte
    const camera = this.cameraController.camera, lights = vehicle.headlights;
    const visible = lights.map(l => l.visible);
    for (const on of [true, false]) {
      for (const l of lights) l.visible = on;
      this.renderer.render(this.scene, camera);
    }
    lights.forEach((l, i) => (l.visible = visible[i]));
  }

  /**
   * Distância de visão (o que está além da neblina total não é desenhado), LOD e sombras do mapa,
   * conforme as opções gráficas.
   */
  applyWorldDetail() {
    const preset = GRAPHICS_PRESETS[this.settings.graphicsQuality] || GRAPHICS_PRESETS.medium;
    this.world?.map?.setDetail?.({
      viewDistance: this.environment.scene.fog.far,
      lodDistance: preset.lodDistance,
      farDensity: preset.farDensity,
      shadows: this.settings.shadows,
    });
  }

  saveSettings() {
    if (this.benchmark) return;   // o benchmark muda mapa/horário sem alterar as preferências do jogador
    if (this.controller) this.settings.manualGearbox = this.controller.manual;   // T troca o câmbio durante o jogo
    this.settings.save();
  }

  updateHelp() {
    this.keyLabelsVersion = (this.keyLabelsVersion + 1) & 0xffff;
    const k = a => this.input.label(a), city = !!this.world.map?.gps;
    const customize = this.player && !this.player.inVehicle
      ? (this.editMode ? ' \xB7 Mire numa pe\xE7a e clique para personalizar' : ' \xB7 Clique na porta para abrir/fechar')
      : '';
    this.hud.setHelp(k('cam') + ' c\xE2mera \xB7 ' + k('reset') + (city ? ' voltar \xE0 rua \xB7 ' : ' voltar \xE0 pista \xB7 ') + k('lights') + ' far\xF3is \xB7 ' +
      k('man') + ' manual \xB7 ' + k('acao') + ' porta/entrar/sair \xB7 ' + k('partida') + ' partida \xB7 ' +
      (this.player && !this.player.inVehicle ? k('edit') + ' edição \xB7 ' : '') + (city ? k('map') + ' mapa/GPS \xB7 ' : '') + customize + ' \xB7 Esc menu');
  }

  setEditMode(enabled, silent = false) {
    if (this.vehicleCustomization.open) this.vehicleCustomization.close();
    this.editMode = enabled;
    this.vehicleCustomization.setEditMode(enabled);
    const button = $('editMode');
    button.textContent = enabled ? '✎ Edição: ligada' : '✎ Edição: desligada';
    button.setAttribute('aria-pressed', String(enabled));
    this.updateHelp();
    if (!silent) this.hud.message(enabled ? 'Modo edição ativado' : 'Modo edição desativado', 1.5);
  }

  // ------------------------------------------------------------------ jogador e porta
  toggleIgnition() {
    if (!this.player.inVehicle || !this.vehicleReady) return;
    if (this.controller.toggleIgnition()) this.audio.playStarter();
  }

  enterVehicle() {
    this.vehicleCustomization.close();
    this.player.enter(this.vehicle, this.controller);
    this.player.firstPerson.setEnabled(false);
    this.cameraController.mode = CameraMode.COCKPIT;
    this.cameraController.reset(this.controller.state.h);
    this.updateHelp();
    this.hud.message('Pressione ' + this.input.label('partida') + ' (ou 🔑) para dar partida', 3);
  }

  exitVehicle() {
    if (this.player.exit(this.vehicle, this.controller, this.world.map)) {
      this.player.firstPerson.reset(this.player.body.h);
      this.player.firstPerson.setEnabled(true);
      this.cameraController.mode = CameraMode.COCKPIT;
      this.cameraController.reset(this.player.body.h);
      this.updateHelp();
    }
  }

  runAction(id) {
    if (!this.playing) return;
    if (id === 'abrir') this.vehicle.doorTarget = 1;
    else if (id === 'fechar') this.vehicle.doorTarget = 0;
    else if (id === 'entrar') this.enterVehicle();
    else if (id === 'sair') this.exitVehicle();
    else if (id === 'partida') this.toggleIgnition();
    else if (id === 'map') this.gpsMap.show(this.focus);
    else if (id === 'cam') this.cameraController.toggleMode();
    else if (id === 'reset') this.#spawnVehicle(true);
    else if (id === 'paint') this.#freePaint();
    else if (id === 'acao') this.primaryAction();
  }

  /** Tecla de ação: abre a porta, entra ou sai, conforme a situação. */
  primaryAction() {
    const action = this.#availableActions().find(a => a[0] && a[0] !== 'partida');
    if (action) this.runAction(action[0]);
  }

  #availableActions() {
    return this.player.availableActions(this.vehicle, this.controller, a => this.input.label(a));
  }

  // ------------------------------------------------------------------ quadro
  resize() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.cameraController.setAspect(innerWidth / innerHeight);
    this.showroom?.setAspect(innerWidth, innerHeight);
  }

  frame(dt, now) {
    const map = this.world.map, ctrl = this.controller, vehicle = this.vehicle, monitor = this.monitor, bench = this.benchmark;
    if (!map) return;
    if (bench?.running) dt = bench.fixedDt;
    monitor.frameStart(now);
    if (!this.started) {   // menus: só o estúdio com o carro (o cenário do jogo nem é desenhado)
      this.showroom.update(dt);
      monitor.begin('render');
      this.showroom.render(this.renderer.renderer);
      monitor.end('render');
      monitor.frameEnd();
      return;
    }
    const exploring = !this.player.inVehicle && this.started && !this.paused && !this.gpsMap.open;
    this.vehicleCustomization.setActive(exploring);
    this.player.firstPerson.setEnabled(exploring && !this.vehicleCustomization.open);
    const showEdit = exploring && !this.session.loggedIn;   // online, a pintura é paga na oficina
    if (showEdit !== this.exploringShown) this.exploringShown = showEdit, this.editModeButton.hidden = !showEdit;

    if (this.playing && !this.gpsMap.open) {
      monitor.begin('physics');
      this.#stepPhysics(dt, map);
      if (bench?.running) bench.afterPhysics();
      if (this.remote.count) this.remote.collideLocal(ctrl.state);
      this.drift.update(dt, ctrl, this.player.inVehicle);
      monitor.end('physics');
      monitor.begin('world');
      if (!this.player.inVehicle) this.player.update(dt, this.input, map, ctrl.state, this.vehicles.config);
      ctrl.updateEngine(dt);
      this.hud.updateActions(this.player.actionsKey(vehicle, ctrl) | (this.keyLabelsVersion << 8), this.availableActionsBuilder);
      const focus = this.focus;
      if (map.gps) map.gps.update(focus, dt), this.hud.setDestination(map.gps);
      this.skidMarks.update(ctrl.state, map);
      this.hud.setTimerText(map.timerText(now, focus));
      if (map.currentLap !== undefined && map.currentLap !== this.shownLap) this.shownLap = map.currentLap, this.hud.setLap(this.shownLap);
      this.hud.draw(ctrl, map, focus);
      this.hud.setDrift(this.drift);
      const a = this.audioContext;
      a.engineLevel = ctrl.engineSound, a.throttle = ctrl.throttle, a.engineOn = ctrl.engineOn, a.skid = this.skidMarks.intensity, a.sound = this.vehicles.config.sound;
      this.audio.update(a);
      this.hud.tick(dt);
    }

    if (vehicle) {
      vehicle.update(dt, ctrl);
      this.player.setVisible(!(this.cameraController.mode === CameraMode.COCKPIT && this.started && !this.paused));
      ctrl.updateIndicators(dt);
      this.hud.setSignals(ctrl);
    }
    this.smoke.update(dt);
    this.remote.update(dt);
    if (this.mp.inRoom && ctrl) this.mp.sendState(now, ctrl.state, this.#stateFlags(ctrl));

    const c = this.cameraContext;
    c.menuOpen = !this.playing;
    c.vehicleState = ctrl ? ctrl.state : ORIGIN;
    c.vehicleModel = vehicle ? vehicle.model : null;
    c.cockpitOffset = VEHICLES[this.vehicleId].cockpitCamera;
    c.onFoot = !this.player.inVehicle;
    c.playerBody = this.player.body;
    c.fpsYaw = this.player.firstPerson.yaw;
    c.fpsPitch = this.player.firstPerson.pitch;
    c.fpsEye = this.player.firstPerson.getCameraPosition(this.player.body);
    this.cameraController.update(dt, c);
    this.vehicleCustomization.update(dt);
    const focus = this.focus;
    this.environment.followCamera(this.cameraController.camera);
    map.updateView?.(this.cameraController.camera, focus);
    this.lighting.follow(focus.x, focus.z);
    this.remote.updateLabels(this.playing && !this.gpsMap.open);
    if (this.playing && !this.gpsMap.open) monitor.end('world');
    monitor.begin('render');
    monitor.beginGpu();
    this.renderer.render(this.scene, this.cameraController.camera);
    monitor.endGpu();
    monitor.end('render');
    monitor.frameEnd();
    bench?.endFrame();
  }

  /** Física em passos fixos (~8,5 ms) para ficar estável em qualquer taxa de quadros. */
  #stepPhysics(dt, map) {
    const ctrl = this.controller, input = this.input, driving = this.player.inVehicle, inp = this.physicsInput;
    inp.accel = driving && ctrl.engineOn && input.isDown('accel');
    inp.brake = driving && input.isDown('brake');
    inp.handbrake = !driving || input.isDown('hb');
    inp.steer = driving ? (input.isDown('right') ? 1 : 0) - (input.isDown('left') ? 1 : 0) : 0;
    this.physicsAccumulator += dt;
    while (this.physicsAccumulator >= GAME.physicsStep) {
      PhysicsSystem.step(ctrl, inp, map, GAME.physicsStep);
      this.physicsAccumulator -= GAME.physicsStep;
    }
  }
}

const ORIGIN = { x: 0, z: 0, h: 0, vx: 0, vz: 0 };
