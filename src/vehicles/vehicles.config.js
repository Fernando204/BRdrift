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
      wheelRadius: 0.289,    // m
      /** Relações com o diferencial: [ré, neutro, 1ª ... 5ª]. */
      gearRatios: [-9.5, 0, 12.5, 7.6, 5.2, 3.9, 3.1],
      maxTorque: 170,        // N·m
      idleRpm: 900,
      redlineRpm: 7200,
    },

    sound: { baseFrequency: 38, frequencyRange: 120 },
  },
};
