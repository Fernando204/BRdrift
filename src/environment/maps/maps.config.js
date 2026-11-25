import { TrackMap } from './TrackMap.js';
import { CityMap } from './CityMap.js';

/**
 * Mapas disponíveis. Para adicionar um mapa: crie uma classe com a mesma interface de
 * TrackMap/CityMap (ver README) e registre-a aqui. Os dados só são carregados quando o mapa é escolhido.
 */
export const MAPS = {
  circuito: {
    id: 'circuito',
    name: 'Circuito',
    create: () => TrackMap.create(),
  },
  salto: {
    id: 'salto',
    name: 'Salto de Pirapora',
    data: 'assets/maps/salto_de_pirapora/salto_de_pirapora.json',
    attribution: '© colaboradores do OpenStreetMap',
    create: (assets, config) => CityMap.create(assets, config),
  },
};
