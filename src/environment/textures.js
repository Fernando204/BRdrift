import { CanvasTexture, SRGBColorSpace, RepeatWrapping } from 'three';

/**
 * Textura procedural desenhada num canvas (o jogo não usa imagens externas).
 * Cada textura pertence ao objeto que a criou e é liberada junto com ele.
 */
export function createCanvasTexture(width, height, draw, repeatX = 1, repeatY = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  draw(canvas.getContext('2d'), width, height);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 8;
  return tex;
}

/** Fundo com granulado (asfalto, terra, calçada). */
export function noiseFill(g, w, h, base, count, alpha) {
  g.fillStyle = base;
  g.fillRect(0, 0, w, h);
  for (let k = 0; k < count; k++) {
    const s = (Math.random() * 255) | 0;
    g.fillStyle = `rgba(${s},${s},${s},${alpha})`;
    g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
  }
}
