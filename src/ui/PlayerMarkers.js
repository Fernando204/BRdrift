/**
 * Marcadores dos outros jogadores nos mapas (minimapa e mapa do GPS).
 * O chamador passa a projeção do mapa: P(x, z) devolve [px, py] no canvas (mesmo array reaproveitado).
 */

/** Seta apontando para o rumo h (mesma convenção do marcador do jogador: frente = (sen h, cos h)). */
export function drawArrow(g, x, y, h, size, fill) {
  const fx = Math.sin(h), fz = Math.cos(h), a = size, b = size * 0.64, c = size * 0.27;
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(x + fx * a, y + fz * a);
  g.lineTo(x - fx * b + fz * b, y - fz * b - fx * b);
  g.lineTo(x - fx * c, y - fz * c);
  g.lineTo(x - fx * b - fz * b, y - fz * b + fx * b);
  g.closePath();
  g.fill();
  g.stroke();
}

/**
 * Desenha cada jogador remoto. Com `radius`, quem está fora do círculo (minimapa) fica preso na borda,
 * como um ponto, indicando a direção em que ele está. Com `labels`, escreve o nome (mapa do GPS).
 */
export function drawPlayers(g, remote, P, { size = 7, radius = 0, center = [0, 0], labels = false } = {}) {
  if (!remote || !remote.count) return;
  g.lineWidth = Math.max(1.5, size / 5);
  g.strokeStyle = '#fff';
  g.lineJoin = 'round';
  remote.forEachOnMap((s, name, color) => {
    const [px, py] = P(s.x, s.z);
    let x = px, y = py;
    if (radius) {
      const dx = x - center[0], dy = y - center[1], l = Math.hypot(dx, dy);
      if (l > radius) {   // longe: ponto na borda, na direção do jogador
        x = center[0] + dx * radius / l, y = center[1] + dy * radius / l;
        g.fillStyle = color;
        g.beginPath(), g.arc(x, y, size * 0.55, 0, 7), g.fill(), g.stroke();
        return;
      }
    }
    drawArrow(g, x, y, s.h, size, color);
    if (labels) {
      g.font = '600 12px "Segoe UI", system-ui, sans-serif';
      g.textAlign = 'center';
      g.lineWidth = 3;
      g.strokeStyle = 'rgba(0,0,0,.65)';
      g.strokeText(name, x, y - size - 6);
      g.fillStyle = '#fff';
      g.fillText(name, x, y - size - 6);
      g.lineWidth = Math.max(1.5, size / 5);
      g.strokeStyle = '#fff';
    }
  });
}
