/**
 * Registro central de veículos. Para adicionar um carro, inclua uma entrada aqui com o caminho
 * do modelo e os nomes dos objetos (definidos no Blender). Nada mais precisa ser alterado no código.
 *
 * Coordenadas no referencial do modelo (glTF): x = esquerda do carro, y = cima, z = frente.
 */
export const VEHICLES = {
  chevette: {
    name: 'Chevette SL',
    model: 'assets/models/vehicles/chevette/chevette.glb',

    /** Material cuja cor é trocada pela opção "Cor do carro". */
    paintMaterial: 'Pintura_Branca',
    colors: ['#e7e7e3', '#c4161c', '#1f4fb5', '#f2b705', '#1b1b1d', '#2e8b57'],
    customizableParts: [
      { objectName: 'Capo', name: 'Capô', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Cabine', name: 'Teto e cabine', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Carroceria', name: 'Carroceria', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Porta_Esquerda', name: 'Porta do motorista', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Porta_Direita', name: 'Porta do passageiro', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Paralama_Ponta_Esquerda', name: 'Para-lama dianteiro esquerdo', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Paralama_Ponta_Direita', name: 'Para-lama dianteiro direito', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Tampa_Porta_Malas', name: 'Tampa do porta-malas', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Saia_Dianteira', name: 'Saia dianteira', materialName: 'Pintura_Branca', originalColor: '#e7e7e3', categories: ['paint'] },
      { objectName: 'Para_Choque_Dianteiro', name: 'Para-choque dianteiro', materialName: 'Borracha_Preta', originalColor: '#242424', categories: ['trim'] },
      { objectName: 'Para_Choque_Traseiro', name: 'Para-choque traseiro', materialName: 'Borracha_Preta', originalColor: '#242424', categories: ['trim'] },
    ],

    /** Objetos do modelo que se movem separadamente do resto (não entram na fusão de malhas). */
    wheels: {
      fl: 'Roda_Dianteira_Esquerda',
      fr: 'Roda_Dianteira_Direita',
      rl: 'Roda_Traseira_Esquerda',
      rr: 'Roda_Traseira_Direita',
    },
    steeringWheel: 'Volante',
    door: {
      hinge: [0.765, 0, 0.862],
      openAngle: -1.12,
      interactionAction: 'toggleDoor',
      /** Ponto ao lado da porta (x lateral, z) onde o jogador aparece ao sair e pode interagir. */
      standPoint: [1.3, 0.15],
      parts: [
        'Porta_Esquerda', 'Vidro_Porta_Esquerdo', 'Vidro_Quebra_Vento_Esquerdo', 'Borracha_Janela_Porta_Esquerdo_mesh',
        'Divisor_Quebra_Vento_Esquerdo_mesh', 'Macaneta_Esquerda', 'Macaneta_Esquerda_Base', 'Friso_Porta_Esquerdo',
        'Forro_Porta_Esquerdo', 'Forro_Porta_Esquerdo_Tecido', 'Apoio_Braco_Esquerdo', 'Retrovisor_Esquerdo_Base',
        'Retrovisor_Esquerdo_Carcaca', 'Retrovisor_Esquerdo_Espelho', 'Emblema_Lateral_Esquerdo_mesh',
      ],
    },

    /** Materiais das luzes (nomes do Blender). */
    lights: {
      head: 'Lente_Farol',
      tail: 'Lente_Vermelha',
      reverse: 'Lente_Re_Branca',
      indicator: 'Lente_Ambar',
      headlightOffset: [0.5, 0.62, 1.9],
    },

    cockpitCamera: [0.37, 1.13, -0.24],
    driverSeat: { position: [0.37, -0.36, -0.12], tilt: -0.2, scale: 0.92 },
    /** Meias dimensões da carroceria para colisão com o jogador a pé. */
    bodyHalfSize: [0.82, 2.12],
    /** Pontos de contato dos pneus para marcas/fumaça: [lateral, longitudinal, 0 dianteiro | 1 traseiro]. */
    tireContacts: [[0.655, 1.385, 0], [-0.655, 1.385, 0], [0.685, -1.005, 1], [-0.685, -1.005, 1]],

    physics: {
      mass: 1000,            // kg
      yawInertia: 1300,      // kg·m²
      wheelbase: 2.39,       // m
      cgToFront: 1.15,       // m
      cgToRear: 1.24,        // m
      cgHeight: 0.52,        // m
      trackWidth: 1.42,      // m
      wheelRadius: 0.289,    // m
      /** Relações com o diferencial: [ré, neutro, 1ª ... 5ª]. */
      gearRatios: [-9.5, 0, 12.5, 7.6, 5.2, 3.9, 3.1],
      maxTorque: 170,        // N·m
      idleRpm: 900,
      redlineRpm: 7200,
    },

    sound: { baseFrequency: 38, frequencyRange: 120 },

    /** Rebaixamento máximo (m): a lataria do para-lama traseiro encosta no ombro do pneu com ~9,9 cm. */
    suspension: { maxDrop: 0.09 },
  },

  saveiro: {
    name: 'Saveiro Robust',
    model: 'assets/models/vehicles/saveiro/saveiro.glb',

    paintMaterial: 'Pintura_Branca',
    // branco cristal, vermelho tornado, prata sirius, preto ninja, cinza platinum, azul
    colors: ['#e9e9e6', '#b01522', '#a7abae', '#151618', '#6b6e72', '#1f4fb5'],
    customizableParts: [
      { objectName: 'Capo', name: 'Capô', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Cabine', name: 'Teto e cabine', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Carroceria', name: 'Carroceria e caçamba', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Porta_Esquerda', name: 'Porta do motorista', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Porta_Direita', name: 'Porta do passageiro', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Tampa_Cacamba', name: 'Tampa da caçamba', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Para_Choque_Dianteiro', name: 'Para-choque dianteiro', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Para_Choque_Traseiro', name: 'Para-choque traseiro', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Retrovisor_Esquerdo_Carcaca', name: 'Retrovisor esquerdo', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
      { objectName: 'Retrovisor_Direito_Carcaca', name: 'Retrovisor direito', materialName: 'Pintura_Branca', originalColor: '#e9e9e6', categories: ['paint'] },
    ],

    wheels: {
      fl: 'Roda_Dianteira_Esquerda',
      fr: 'Roda_Dianteira_Direita',
      rl: 'Roda_Traseira_Esquerda',
      rr: 'Roda_Traseira_Direita',
    },
    steeringWheel: 'Volante',
    door: {
      hinge: [0.85, 0, 0.766],
      openAngle: -1.12,
      interactionAction: 'toggleDoor',
      standPoint: [1.35, 0.2],
      parts: [
        'Porta_Esquerda', 'Vidro_Porta_Esquerda', 'Macaneta_Esquerdo', 'Friso_Janela_Esquerdo',
        'Retrovisor_Esquerdo_Base', 'Retrovisor_Esquerdo_Carcaca', 'Retrovisor_Esquerdo_Espelho',
        'Forro_Porta_Esquerda_Apoio', 'Forro_Porta_Esquerda_Macaneta',
      ],
    },

    lights: {
      head: 'Lente_Farol',
      tail: 'Lente_Vermelha',
      reverse: 'Lente_Re_Branca',
      indicator: 'Lente_Ambar',
      headlightOffset: [0.55, 0.79, 2.12],
    },

    cockpitCamera: [0.37, 1.24, -0.29],
    // cabine simples: pouco espaço atrás do banco; inclinação menor e quadril à frente
    // para a cabeça e as costas não atravessarem a parede traseira (d = 2,80 m)
    driverSeat: { position: [0.37, -0.28, -0.152], tilt: -0.12, scale: 0.92 },
    bodyHalfSize: [0.86, 2.25],
    tireContacts: [[0.715, 1.4465, 0], [-0.715, 1.4465, 0], [0.71, -1.3035, 1], [-0.71, -1.3035, 1]],

    physics: {
      mass: 1130,            // kg (cabine simples, vazia)
      yawInertia: 1700,      // kg·m²
      wheelbase: 2.75,       // m
      cgToFront: 1.12,       // m (mais peso na dianteira, caçamba vazia)
      cgToRear: 1.63,        // m
      cgHeight: 0.62,        // m
      trackWidth: 1.48,      // m
      wheelRadius: 0.30,     // m (175/70 R14)
      gearRatios: [-10.6, 0, 13.4, 8.1, 5.5, 4.1, 3.25],
      maxTorque: 180,        // N·m
      idleRpm: 850,
      redlineRpm: 6500,
    },

    sound: { baseFrequency: 34, frequencyRange: 112 },

    /** Rebaixamento máximo (m): limitado pelas caixas de roda da caçamba (folga de ~19 cm). */
    suspension: { maxDrop: 0.17 },
  },

  mustang: {
    name: 'Mustang 1965',
    model: 'assets/models/vehicles/mustang/mustang.glb',

    // modelo refeito do zero (carroceria limpa em painéis, cromados, interior); pintura em cor sólida
    paintMaterial: 'Pintura_Mustang',
    // vinho (Vintage Burgundy, como na foto), vermelho, azul, preto, branco, verde
    colors: ['#6e1923', '#a3131d', '#1c3f8c', '#121314', '#e6e4dc', '#1f5a3a'],
    customizableParts: [
      { objectName: 'Capo', name: 'Capô', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
      { objectName: 'Cabine', name: 'Teto e colunas', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
      { objectName: 'Carroceria', name: 'Carroceria', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
      { objectName: 'Porta_Esquerda', name: 'Porta do motorista', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
      { objectName: 'Porta_Direita', name: 'Porta do passageiro', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
      { objectName: 'Paralama_Esquerdo', name: 'Para-lama dianteiro esquerdo', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
      { objectName: 'Paralama_Direito', name: 'Para-lama dianteiro direito', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
      { objectName: 'Tampa_Porta_Malas', name: 'Tampa do porta-malas', materialName: 'Pintura_Mustang', originalColor: '#6e1923', categories: ['paint'] },
    ],

    wheels: {
      fl: 'Roda_Dianteira_Esquerda',
      fr: 'Roda_Dianteira_Direita',
      rl: 'Roda_Traseira_Esquerda',
      rr: 'Roda_Traseira_Direita',
    },
    steeringWheel: 'Volante',
    door: {
      hinge: [0.83, 0, 0.443],
      openAngle: -1.1,
      interactionAction: 'toggleDoor',
      standPoint: [1.35, -0.05],
      // vidro (sem coluna: hardtop), maçaneta, quebra-vento, frisos e retrovisor giram com a porta
      parts: ['Porta_Esquerda', 'Vidro_Porta_Esquerda', 'Porta_Esquerda_Cromados', 'Porta_Esquerda_Borracha', 'Retrovisor'],
    },

    lights: {
      head: 'Lente_Farol',
      tail: 'Lente_Vermelha',
      reverse: 'Lente_Re_Branca',
      indicator: 'Lente_Ambar',
      headlightOffset: [0.715, 0.805, 2.1],
    },

    cockpitCamera: [0.38, 1.12, -0.33],
    driverSeat: { position: [0.38, -0.39, -0.19], tilt: -0.15, scale: 0.92 },
    bodyHalfSize: [0.88, 2.31],
    tireContacts: [[0.728, 1.432, 0], [-0.728, 1.432, 0], [0.73, -1.365, 1], [-0.73, -1.365, 1]],

    physics: {
      mass: 1300,            // kg (cupê V8)
      yawInertia: 2150,      // kg·m²
      wheelbase: 2.797,      // m
      cgToFront: 1.26,       // m (55% do peso na frente: motor V8)
      cgToRear: 1.537,       // m
      cgHeight: 0.55,        // m
      trackWidth: 1.46,      // m
      wheelRadius: 0.3355,   // m (195/70 R14)
      /** Relações com o diferencial (câmbio de 4 marchas + overdrive, diferencial 3,0). */
      gearRatios: [-8.4, 0, 8.3, 5.8, 4.1, 3.0, 2.55],
      maxTorque: 330,        // N·m (V8 289)
      idleRpm: 700,
      redlineRpm: 5800,
    },

    sound: { baseFrequency: 28, frequencyRange: 96 },

    /** Rebaixamento máximo (m): a caixa de roda (raio 0,395) deixa ~6 cm acima do pneu. */
    suspension: { maxDrop: 0.055 },
  },
};
