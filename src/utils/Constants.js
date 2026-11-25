/** Configurações gerais do jogo, num só lugar. */
export const GAME = {
  /** Passo máximo da física (s): o quadro é dividido em subpassos deste tamanho. */
  physicsStep: 0.0085,
  /** Maior intervalo de tempo aceito por quadro (s): evita saltos ao trocar de aba. */
  maxFrameTime: 0.05,
  defaultVehicle: 'chevette',
  defaultMap: 'circuito',
};

/** Chaves usadas no localStorage. */
export const STORAGE_KEYS = {
  options: 'opts',
  bindings: 'binds',
  bestLap: 'best',
};

/** Direção do sol (normalizada no uso). */
export const SUN_DIRECTION = [0.5, 0.75, 0.4];

export const GRAVITY = 9.81;
