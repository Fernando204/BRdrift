/**
 * Conexão WebSocket do multiplayer (/ws, autenticada pelo cookie de login).
 * Envia o estado do carro ~12 vezes por segundo e repassa ao jogo o que chega dos outros jogadores.
 */
const SEND_INTERVAL = 1000 / 12;

export class MultiplayerClient {
  constructor() {
    this.ws = null;
    this.room = null;            // { id, name, map, isPrivate, ... } depois do "welcome"
    this.you = null;
    this.lastSent = 0;
    this.pending = null;         // { resolve, reject } do join em andamento
    this.state = [];             // reaproveitado a cada envio
    // eventos (o Game/RemotePlayers preenchem)
    this.onPlayerJoin = null;    // ({id, name, look})
    this.onPlayerLeave = null;   // (id)
    this.onState = null;         // (id, p, f)
    this.onLook = null;          // (id, look)
    this.onDisconnect = null;    // (motivo)
  }

  get connected() { return this.ws?.readyState === WebSocket.OPEN; }
  get inRoom() { return this.connected && !!this.room; }

  connect() {
    if (this.connected) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const url = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + location.pathname.replace(/[^/]*$/, '') + 'ws';
      const ws = new WebSocket(url);
      this.ws = ws;
      ws.onopen = () => {
        this.ping = setInterval(() => this.#send({ t: 'ping' }), 20000);
        resolve();
      };
      ws.onerror = () => reject(new Error('Não foi possível conectar ao servidor multiplayer.'));
      ws.onclose = () => {
        clearInterval(this.ping);
        const wasInRoom = !!this.room;
        this.room = null;
        this.ws = null;
        this.pending?.reject(new Error('Conexão encerrada.'));
        this.pending = null;
        if (wasInRoom) this.onDisconnect?.(this.kickedMessage || 'Conexão com o servidor perdida.');
        this.kickedMessage = null;
      };
      ws.onmessage = e => this.#receive(e.data);
    });
  }

  /** Entra numa sala; resolve com os jogadores já presentes. */
  async join(roomId, password) {
    await this.connect();
    return new Promise((resolve, reject) => {
      this.pending = { resolve, reject };
      this.#send({ t: 'join', room: roomId, password });
    });
  }

  leave() {
    if (this.connected && this.room) this.#send({ t: 'leave' });
    this.room = null;
  }

  disconnect() {
    this.leave();
    this.ws?.close();
  }

  /** Aparência mudou (oficina, troca de carro): o servidor relê do banco e avisa a sala. */
  announceLook() {
    if (this.connected) this.#send({ t: 'look' });
  }

  /** Estado do carro: [x, z, h, vx, vz, esterço, arfagem, rolagem, vel. longitudinal] + flags. */
  sendState(now, s, flags) {
    if (!this.inRoom || now - this.lastSent < SEND_INTERVAL) return;
    this.lastSent = now;
    const p = this.state;
    p[0] = s.x; p[1] = s.z; p[2] = s.h; p[3] = s.vx; p[4] = s.vz; p[5] = s.steer; p[6] = s.pitch; p[7] = s.roll; p[8] = s.vf;
    this.ws.send(JSON.stringify({ t: 's', p, f: flags }));
  }

  #send(obj) {
    if (this.connected) this.ws.send(JSON.stringify(obj));
  }

  #receive(text) {
    let m;
    try { m = JSON.parse(text); } catch { return; }
    switch (m.t) {
      case 'welcome':
        this.room = m.room;
        this.you = m.you;
        this.pending?.resolve(m);
        this.pending = null;
        break;
      case 'error':
        if (this.pending) { this.pending.reject(new Error(m.message)); this.pending = null; }
        break;
      case 'join': this.onPlayerJoin?.(m.player); break;
      case 'leave': this.onPlayerLeave?.(m.id); break;
      case 's': this.onState?.(m.id, m.p, m.f); break;
      case 'look': this.onLook?.(m.id, m.look); break;
      case 'kicked': this.kickedMessage = m.message; break;
      default: break;
    }
  }
}
