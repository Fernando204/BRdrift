/**
 * Rede de ruas da cidade: índice espacial dos segmentos (consultas rápidas de "estou na rua?")
 * e grafo de cruzamentos com rota mais curta (A*) para o GPS.
 */
const CELL = 16;
const key = (i, j) => i * 100003 + j;

export class RoadNetwork {
  /**
   * @param roads   [{ c: tipo, n: índice do nome, P: [x0, z0, x1, z1, ...] }]
   * @param halfWidths meia largura por tipo de via
   */
  constructor(roads, halfWidths) {
    this.roads = roads;
    this.halfWidths = halfWidths;
    this.#buildGraph();
    this.#buildIndex();
  }

  #buildGraph() {
    const nodeIds = new Map();
    this.nodeXY = [];
    this.edges = [];
    this.adjacency = [];
    const node = (x, z) => {
      const k = Math.round(x * 10) + ',' + Math.round(z * 10);
      let i = nodeIds.get(k);
      if (i === undefined) {
        i = this.nodeXY.length / 2;
        nodeIds.set(k, i);
        this.nodeXY.push(x, z);
        this.adjacency.push([]);
      }
      return i;
    };
    for (const r of this.roads) {
      const P = r.P, a = node(P[0], P[1]), b = node(P[P.length - 2], P[P.length - 1]), acc = [0];
      let L = 0;
      for (let k = 0; k < P.length / 2 - 1; k++) L += Math.hypot(P[k * 2 + 2] - P[k * 2], P[k * 2 + 3] - P[k * 2 + 1]), acc.push(L);
      r.e = this.edges.length;
      this.edges.push({ a, b, L, P, acc, n: r.n });
      this.adjacency[a].push(r.e);
      this.adjacency[b].push(r.e);
    }
  }

  #buildIndex() {
    this.grid = new Map();
    this.segments = [];   // [x0, z0, x1, z1, meiaLargura, nome, tipo, aresta, índice no trecho]
    for (const r of this.roads) {
      const hw = this.halfWidths[r.c];
      for (let k = 0; k < r.P.length / 2 - 1; k++) {
        const s = [r.P[k * 2], r.P[k * 2 + 1], r.P[k * 2 + 2], r.P[k * 2 + 3], hw, r.n, r.c, r.e, k], id = this.segments.length;
        this.segments.push(s);
        for (let i = Math.floor((Math.min(s[0], s[2]) - hw - 30) / CELL); i <= Math.floor((Math.max(s[0], s[2]) + hw + 30) / CELL); i++)
          for (let j = Math.floor((Math.min(s[1], s[3]) - hw - 30) / CELL); j <= Math.floor((Math.max(s[1], s[3]) + hw + 30) / CELL); j++) {
            const h = key(i, j);
            this.grid.has(h) ? this.grid.get(h).push(id) : this.grid.set(h, [id]);
          }
      }
    }
  }

  #cell(x, z) {
    return this.grid.get(key(Math.floor(x / CELL), Math.floor(z / CELL))) || EMPTY;
  }

  /** Segmento cuja borda está mais próxima: [distância ao eixo, t, segmento] ou null. */
  nearest(x, z) {
    let best = null;
    for (const id of this.#cell(x, z)) {
      const s = this.segments[id], dx = s[2] - s[0], dz = s[3] - s[1], L2 = dx * dx + dz * dz;
      const t = L2 ? Math.max(0, Math.min(1, ((x - s[0]) * dx + (z - s[1]) * dz) / L2)) : 0;
      const d = Math.hypot(x - s[0] - dx * t, z - s[1] - dz * t);
      if (!best || d - s[4] < best[0] - best[2][4]) best = [d, t, s];
    }
    return best;
  }

  isOnRoad(x, z) {
    const p = this.nearest(x, z);
    return !!p && p[0] < p[2][4] + 0.4;
  }

  /** Ponto da rede mais próximo de (x, z), com a posição ao longo da aresta. */
  project(x, z) {
    let best = null;
    const test = s => {
      const dx = s[2] - s[0], dz = s[3] - s[1], L2 = dx * dx + dz * dz;
      const t = L2 ? Math.max(0, Math.min(1, ((x - s[0]) * dx + (z - s[1]) * dz) / L2)) : 0;
      const px = s[0] + dx * t, pz = s[1] + dz * t, d = Math.hypot(x - px, z - pz);
      if (!best || d < best.d) best = { d, e: s[7], pos: this.edges[s[7]].acc[s[8]] + t * Math.sqrt(L2), x: px, z: pz };
    };
    for (const id of this.#cell(x, z)) test(this.segments[id]);
    if (!best || best.d > 25) for (const s of this.segments) test(s);
    return best;
  }

  /** Ponto mais próximo sobre uma rua (exceto estradas de terra), com o rumo da via. */
  nearestDrivable(x, z) {
    let best = null;
    for (const s of this.segments) {
      if (s[6] === 7) continue;
      const dx = s[2] - s[0], dz = s[3] - s[1], L2 = dx * dx + dz * dz;
      const t = L2 ? Math.max(0, Math.min(1, ((x - s[0]) * dx + (z - s[1]) * dz) / L2)) : 0;
      const d = Math.hypot(x - s[0] - dx * t, z - s[1] - dz * t);
      if (!best || d < best[0]) best = [d, s, t];
    }
    const [, s, t] = best, dx = s[2] - s[0], dz = s[3] - s[1];
    return { x: s[0] + dx * t, z: s[1] + dz * t, heading: Math.atan2(dx, dz) };
  }

  /** Pontos da aresta e entre as distâncias de -> ate (pode ser no sentido contrário). */
  #stretch(e, from, to, out) {
    const A = this.edges[e], P = A.P, ac = A.acc, n = ac.length;
    const point = d => {
      let k = 0;
      for (; k < n - 2 && ac[k + 1] < d; k++);
      const L = ac[k + 1] - ac[k] || 1, t = Math.max(0, Math.min(1, (d - ac[k]) / L));
      out.push(P[k * 2] + (P[k * 2 + 2] - P[k * 2]) * t, P[k * 2 + 1] + (P[k * 2 + 3] - P[k * 2 + 1]) * t);
    };
    point(from);
    if (from <= to) { for (let k = 1; k < n - 1; k++) if (ac[k] > from && ac[k] < to) out.push(P[k * 2], P[k * 2 + 1]); }
    else for (let k = n - 2; k > 0; k--) if (ac[k] < from && ac[k] > to) out.push(P[k * 2], P[k * 2 + 1]);
    point(to);
  }

  /** Rota mais curta (A*) entre duas projeções. Retorna { pts: [x, z, ...], L } ou null. */
  route(o, d) {
    const pts = [];
    if (o.e === d.e) {
      this.#stretch(o.e, o.pos, d.pos, pts);
      return { pts, L: Math.abs(d.pos - o.pos) };
    }
    // buffers reaproveitados entre recálculos (a rota é refeita a cada 0,6 s com destino marcado)
    const N = this.adjacency.length;
    if (!this.search || this.search.g.length !== N) this.search = { g: new Float64Array(N), via: new Int32Array(N), closed: new Uint8Array(N), heap: new MinHeap() };
    const { g, via, closed, heap } = this.search;
    g.fill(Infinity), via.fill(-1), closed.fill(0), heap.clear();
    const h = v => Math.hypot(this.nodeXY[v * 2] - d.x, this.nodeXY[v * 2 + 1] - d.z);
    const eo = this.edges[o.e], ed = this.edges[d.e];
    g[eo.a] = o.pos;
    g[eo.b] = Math.min(g[eo.b], eo.L - o.pos);
    heap.push(g[eo.a] + h(eo.a), eo.a);
    heap.push(g[eo.b] + h(eo.b), eo.b);
    let best = Infinity, end = -1;
    while (heap.size) {
      const f = heap.topKey, v = heap.pop();
      if (closed[v]) continue;
      if (f >= best) break;
      closed[v] = 1;
      if (v === ed.a && g[v] + d.pos < best) best = g[v] + d.pos, end = v;
      if (v === ed.b && g[v] + ed.L - d.pos < best) best = g[v] + ed.L - d.pos, end = v;
      for (const e of this.adjacency[v]) {
        const A = this.edges[e], u = A.a === v ? A.b : A.a, ng = g[v] + A.L;
        if (ng < g[u]) g[u] = ng, via[u] = e, heap.push(ng + h(u), u);
      }
    }
    if (end < 0) return null;
    const chain = [];
    for (let v = end; via[v] >= 0;) {
      const e = via[v], A = this.edges[e];
      chain.push([e, v]);
      v = A.a === v ? A.b : A.a;
    }
    let start = end;
    for (const [e] of chain) { const A = this.edges[e]; start = A.a === start ? A.b : A.a; }
    this.#stretch(o.e, o.pos, start === eo.a ? 0 : eo.L, pts);
    for (let k = chain.length - 1; k >= 0; k--) {
      const [e, v] = chain[k], A = this.edges[e];
      v === A.b ? this.#stretch(e, 0, A.L, pts) : this.#stretch(e, A.L, 0, pts);
    }
    this.#stretch(d.e, end === ed.a ? 0 : ed.L, d.pos, pts);
    return { pts, L: best };
  }
}

const EMPTY = [];

/** Fila de prioridade mínima em arrays paralelos (sem criar um objeto por item). */
class MinHeap {
  constructor() {
    this.keys = new Float64Array(256);
    this.values = new Int32Array(256);
    this.size = 0;
  }

  clear() {
    this.size = 0;
  }

  get topKey() {
    return this.keys[0];
  }

  push(f, v) {
    if (this.size === this.keys.length) {
      const k = new Float64Array(this.size * 2), w = new Int32Array(this.size * 2);
      k.set(this.keys), w.set(this.values);
      this.keys = k, this.values = w;
    }
    const K = this.keys, V = this.values;
    let i = this.size++;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (K[p] <= f) break;
      K[i] = K[p], V[i] = V[p];
      i = p;
    }
    K[i] = f, V[i] = v;
  }

  /** Remove e devolve o valor de menor chave (leia topKey antes, se precisar da chave). */
  pop() {
    const K = this.keys, V = this.values, top = V[0], n = --this.size;
    if (n > 0) {
      const f = K[n], v = V[n];
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = -1, mk = f;
        if (l < n && K[l] < mk) m = l, mk = K[l];
        if (r < n && K[r] < mk) m = r;
        if (m < 0) break;
        K[i] = K[m], V[i] = V[m];
        i = m;
      }
      K[i] = f, V[i] = v;
    }
    return top;
  }
}
