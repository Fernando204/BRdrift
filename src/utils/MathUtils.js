import { MathUtils } from 'three';

export const clamp = MathUtils.clamp;

/** Diferença angular em (-π, π]: quanto falta girar de `b` para chegar em `a`. */
export const angleDiff = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));

export const smoothstep = t => {
  t = clamp(t, 0, 1);
  return t * t * (3 - 2 * t);
};

/** Gerador pseudoaleatório determinístico (LCG), para cenários que precisam sair sempre iguais. */
export function seededRandom(seed) {
  let s = seed >>> 0;
  return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
}

/** 83456 ms -> "1:23.456" */
export const formatLapTime = ms => ((ms / 6e4) | 0) + ':' + ((ms / 1e3) % 60).toFixed(3).padStart(6, '0');

/** 830 -> "830 m", 1240 -> "1,2 km" */
export const formatDistance = m =>
  m < 1e3 ? Math.round(m / 10) * 10 + ' m' : (m / 1e3).toFixed(1).replace('.', ',') + ' km';
