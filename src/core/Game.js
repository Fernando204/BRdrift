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
    this.vehicleId = GAME.defaultVehicle;
    this.physicsInput = { accel: false, brake: false, handbrake: false, steer: 0 };   // reaproveitado a cada passo
    this.shownLap = 0;
    // objetos passados a cada quadro, criados uma vez só
    this.cameraContext = { menuOpen: true, vehicleState: ORIGIN, vehicleModel: null, cockpitOffset: null, onFoot: false, playerBody: null };
    this.audioContext = { engineLevel: 0, throttle: 0, engineOn: false, skid: 0, sound: null };

    this.settings = new Settings(this.vehicleColors.length);
    this.assets = new AssetManager();
    this.renderer = new Renderer();
    this.environment = new Environment(this.renderer.renderer);
    this.scene = this.environment.scene;
    this.lighting = new Lighting(this.scene, this.environment.sunDirection);
    this.cameraController = new CameraController(this.renderer.canvas);
    this.renderer.setQuality(this.settings.graphicsQuality);
    this.lighting.setQuality(this.settings.graphicsQuality);
    this.renderer.renderer.shadowMap.enabled = this.settings.shadows;
    this.lighting.setShadows(this.settings.shadows);
    this.cameraController.setRenderDistance(this.settings.renderDistance);
    this.world = new World(this.environment, this.assets);
    this.vehicles = new VehicleSystem(this.scene, this.assets);
    this.player = new PlayerController(this.scene, this.renderer.canvas);
    this.smoke = new TireSmoke(this.scene);
    this.skidMarks = new SkidMarks(this.scene, VEHICLES[this.vehicleId].tireContacts, this.smoke);
    this.input = new InputSystem();
    this.audio = new AudioSystem(this.settings.volume);
    this.hud = new HUD();
    this.monitor = new PerformanceMonitor(this.renderer.renderer);
    this.diagnostics = new DiagnosticsPanel(this.monitor);
    this.diagnostics.setVisible(this.settings.diagnostics);
    this.benchmark = Benchmark.fromUrl();
    this.loop = new GameLoop((dt, now) => this.frame(dt, now));

    const message = (text, seconds) => this.hud.message(text, seconds);
    this.player.onMessage = message;
    this.hud.onAction = id => this.runAction(id);

    this.menu = new Menu(this, {
      start: () => this.start(),
      resume: () => this.resume(),
      restart: () => this.restart(),
      pause: () => this.pause(),
      selectMap: id => this.selectMap(id),
      setGearbox: manual => { this.settings.manualGearbox = manual; if (this.controller) this.controller.manual = manual; this.menu.refresh(); this.saveSettings(); },
      setDriveMode: drift => this.setDriveMode(drift, false),
      setNight: night => { this.setNight(night); this.menu.refresh(); this.saveSettings(); },
      setColor: index => { this.setColor(index); this.menu.refresh(); this.saveSettings(); },
      setVolume: v => { this.settings.volume = v; this.audio.setVolume(v); this.saveSettings(); },
      setGraphicsQuality: quality => { this.settings.graphicsQuality = quality; this.renderer.setQuality(quality); this.lighting.setQuality(quality); this.applyWorldDetail(); this.menu.refresh(); this.saveSettings(); },
      setDiagnostics: visible => { this.settings.diagnostics = visible; this.diagnostics.setVisible(visible); this.menu.refresh(); this.saveSettings(); },
      setShadows: enabled => { this.settings.shadows = enabled; this.renderer.renderer.shadowMap.enabled = enabled; this.lighting.setShadows(enabled); this.applyWorldDetail(); this.menu.refresh(); this.saveSettings(); },
      setRenderDistance: distance => { this.settings.renderDistance = distance; this.environment.setRenderDistance(distance); this.cameraController.setRenderDistance(distance); this.applyWorldDetail(); this.menu.refresh(); this.saveSettings(); },
    });
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
    try {
      await this.selectMap(this.settings.mapId, { initial: true });
    } catch (err) {
      console.error(err);
      if (this.settings.mapId !== GAME.defaultMap) {
        this.menu.setLoading('N\xE3o foi poss\xEDvel carregar o mapa da cidade.');
        this.settings.mapId = GAME.defaultMap;
        await this.selectMap(GAME.defaultMap, { initial: true });
      }
    }
    this.menu.refresh();
    this.loop.start();
    try {
      await this.vehicles.spawn(this.vehicleId);
    } catch (err) {
      this.menu.setLoading('Erro ao carregar o modelo 3D.');
      console.error(err);
      return;
    }
    const ctrl = this.controller;
    ctrl.manual = this.settings.manualGearbox;
    ctrl.onMessage = (text, seconds) => this.hud.message(text, seconds);
    ctrl.onBlink = on => this.audio.playBlink(on);
    ctrl.setDriftMode(this.settings.driftMode);
    if (this.environment.night && !ctrl.lightsMode) ctrl.lightsMode = 1;
    this.setColor(this.settings.colorIndex);
    this.#spawnVehicle(false);
    this.player.sitIn(this.vehicle);
    this.menu.enableStart();
    this.menu.setLoading('Modelo carregado.');
    if (this.benchmark) await this.benchmark.start(this);
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
      this.paused ? this.resume() : this.pause();
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
    input.on('paint', () => this.setColor(this.settings.colorIndex + 1));
    input.on('up', () => { if (this.player.inVehicle) ctrl().shiftUp(); });
    input.on('dn', () => { if (this.player.inVehicle) ctrl().shiftDown(); });
    input.on('man', () => ctrl().toggleGearbox());
    input.on('acao', () => this.primaryAction());
    input.on('partida', () => this.toggleIgnition());
    input.on('diag', () => { this.settings.diagnostics = this.diagnostics.toggle(); this.saveSettings(); });
    input.on('modo', () => this.setDriveMode(!this.settings.driftMode, true));
    input.on('edit', () => { if (!this.player.inVehicle) this.setEditMode(!this.editMode); });
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
    this.menu.close();
    this.hud.show();
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
    this.menu.open();
    this.audio.suspend();
  }

  resume() {
    this.paused = false;
    this.world.map.shiftTimers(performance.now() - this.pausedAt);
    this.menu.close();
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
    const previousText = $('ld').textContent;
    if (!initial) this.menu.setLoading('Montando o mapa…');
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
      if (!initial) this.saveSettings(), this.menu.refresh();
    } finally {
      this.loadingMap = false;
      if (!initial) this.menu.setLoading(previousText);
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

  setColor(index) {
    const n = this.vehicleColors.length;
    this.settings.colorIndex = ((index % n) + n) % n;
    this.vehicle?.setColor(this.vehicleColors[this.settings.colorIndex]);
  }

  /**
   * Distância de visão (o que está além da neblina total não é desenhado), LOD e sombras do mapa,
   * conforme as opções gráficas.
   */
  applyWorldDetail() {
    const preset = GRAPHICS_PRESETS[this.settings.graphicsQuality] || GRAPHICS_PRESETS.medium;
    this.world.map?.setDetail?.({
      viewDistance: this.environment.scene.fog.far,
      lodDistance: preset.lodDistance,
      farDensity: preset.farDensity,
      shadows: this.settings.shadows,
    });
  }

  saveSettings() {
    if (this.controller) this.settings.manualGearbox = this.controller.manual;   // T troca o câmbio durante o jogo
    this.settings.save();
  }

  updateHelp() {
    const k = a => this.input.label(a), city = !!this.world.map?.gps;
    const customize = this.player && !this.player.inVehicle
      ? (this.editMode ? ' \xB7 Mire numa pe\xE7a e clique para personalizar' : ' \xB7 Clique na porta para abrir/fechar')
      : '';
    this.hud.setHelp(k('cam') + ' c\xE2mera \xB7 ' + k('reset') + (city ? ' voltar \xE0 rua \xB7 ' : ' voltar \xE0 pista \xB7 ') + k('lights') + ' far\xF3is \xB7 ' +
      k('man') + ' manual \xB7 ' + k('acao') + ' porta/entrar/sair \xB7 ' + k('partida') + ' partida \xB7 ' +
      (this.player && !this.player.inVehicle ? k('edit') + ' edição \xB7 ' : '') + (city ? k('map') + ' mapa/GPS \xB7 ' : '') + customize + ' \xB7 Esc menu');
  }

  setEditMode(enabled) {
    if (this.vehicleCustomization.open) this.vehicleCustomization.close();
    this.editMode = enabled;
    this.vehicleCustomization.setEditMode(enabled);
    const button = $('editMode');
    button.textContent = enabled ? '✎ Edição: ligada' : '✎ Edição: desligada';
    button.setAttribute('aria-pressed', String(enabled));
    this.updateHelp();
    this.hud.message(enabled ? 'Modo edição ativado' : 'Modo edição desativado', 1.5);
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
    else if (id === 'paint') this.setColor(this.settings.colorIndex + 1);
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
  }

  frame(dt, now) {
    const map = this.world.map, ctrl = this.controller, vehicle = this.vehicle, monitor = this.monitor, bench = this.benchmark;
    if (!map) return;
    if (bench?.running) dt = bench.fixedDt;
    monitor.frameStart(now);
    const exploring = !this.player.inVehicle && this.started && !this.paused && !this.gpsMap.open;
    this.vehicleCustomization.setActive(exploring);
    this.player.firstPerson.setEnabled(exploring && !this.vehicleCustomization.open);
    $('editMode').hidden = !exploring;

    if (this.playing && !this.gpsMap.open) {
      monitor.begin('physics');
      this.#stepPhysics(dt, map);
      if (bench?.running) bench.afterPhysics();
      monitor.end('physics');
      monitor.begin('world');
      if (!this.player.inVehicle) this.player.update(dt, this.input, map, ctrl.state, this.vehicles.config);
      ctrl.updateEngine(dt);
      this.hud.setActions(this.#availableActions());
      const focus = this.focus;
      if (map.gps) map.gps.update(focus, dt), this.hud.setDestination(map.gps);
      this.skidMarks.update(ctrl.state, map);
      this.hud.setTimerText(map.timerText(now, focus));
      if (map.currentLap !== undefined && map.currentLap !== this.shownLap) this.shownLap = map.currentLap, this.hud.setLap(this.shownLap);
      this.hud.draw(ctrl, map, focus);
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
    const steps = Math.ceil(dt / GAME.physicsStep);
    for (let i = 0; i < steps; i++) PhysicsSystem.step(ctrl, inp, map, dt / steps);
  }
}

const ORIGIN = { x: 0, z: 0, h: 0, vx: 0, vz: 0 };
