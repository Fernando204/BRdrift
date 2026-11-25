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

/**
 * Camadas de renderização (THREE.Layers).
 * - WORLD: cenário, desenhado na 1ª passada.
 * - SHADOW_ONLY: objetos que só projetam sombra (nunca aparecem na imagem).
 * - VEHICLE: carro e efeitos transparentes que se misturam com ele (fumaça, rota do GPS), na 2ª passada.
 *   Assim, a "transmission" das lentes do carro reprocessa só o carro, e não a cidade inteira.
 */
export const RENDER_LAYERS = { WORLD: 0, SHADOW_ONLY: 1, VEHICLE: 2 };

/**
 * Predefinições de qualidade gráfica.
 * pixelRatio: limite da resolução interna; shadowMapSize: resolução do mapa de sombra do sol;
 * lodDistance: além dela, cada região esconde detalhes pequenos (troncos, faixas) e as árvores usam farDensity;
 * renderDistance: distância de visão sugerida ao escolher a predefinição (ajustável depois).
 */
export const GRAPHICS_PRESETS = {
  low: { pixelRatio: 0.75, shadowMapSize: 512, lodDistance: 220, farDensity: 0.5, renderDistance: 450 },
  medium: { pixelRatio: 1.25, shadowMapSize: 1024, lodDistance: 320, farDensity: 1, renderDistance: 700 },
  high: { pixelRatio: 2, shadowMapSize: 2048, lodDistance: 480, farDensity: 1, renderDistance: 1000 },
};
