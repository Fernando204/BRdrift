import { Game } from './core/Game.js';

/** Ponto de entrada: cria o jogo e começa a carregar o mapa e o carro. */
const game = new Game();
game.load();

// inspeção pelo console só quando pedida na URL (?bench=... ou ?debug)
const params = new URLSearchParams(location.search);
if (params.has('bench') || params.has('debug')) window.__game = game;
