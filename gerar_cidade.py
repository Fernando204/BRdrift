"""Converte export.geojson (ruas de Salto de Pirapora, OpenStreetMap) em salto_de_pirapora.js.

O arquivo gerado define window.MAPA_SALTO com:
  - ruas: tipo, nome e pontos (em decímetros, sistema local em metros: x = leste, z = sul)
  - pracas: triângulos de áreas de pedestre (Calçadão)
  - construcoes: casas, comércios e prédios genéricos posicionados ao longo das ruas
  - arvores: árvores fora das ruas e das construções
  - inicio: posição e rumo de largada

Uso:  python gerar_cidade.py
Dados das ruas © colaboradores do OpenStreetMap (licença ODbL).
"""
import json
import math
import random
from pathlib import Path

PASTA = Path(__file__).resolve().parent
ENTRADA = PASTA / "export.geojson"
SAIDA = PASTA / "salto_de_pirapora.js"

# Centro: o Calçadão, no centro da cidade
LON0, LAT0 = -47.5745, -23.6470
MEIA = 3200.0                      # o mapa jogável é um quadrado de 2*MEIA metros
KX = 111320 * math.cos(math.radians(LAT0))
KZ = 110540

# tipo -> (código, meia largura em metros)
TIPOS = {
    "primary": (0, 4.2), "secondary": (1, 4.0), "tertiary": (2, 3.8),
    "residential": (3, 3.3), "unclassified": (3, 3.3), "living_street": (4, 2.8),
    "service": (5, 2.3), "primary_link": (6, 3.2), "secondary_link": (6, 3.2),
    "track": (7, 2.0),
}
CALCADA = 2.2                       # largura da calçada (m)
random.seed(1554)                   # resultado sempre igual


def proj(lon, lat):
    return ((lon - LON0) * KX, -(lat - LAT0) * KZ)


def clip_seg(p, q):
    """Recorta o segmento p-q no quadrado [-MEIA, MEIA] (Liang-Barsky)."""
    x0, z0 = p
    dx, dz = q[0] - x0, q[1] - z0
    t0, t1 = 0.0, 1.0
    for pp, qq in ((-dx, x0 + MEIA), (dx, MEIA - x0), (-dz, z0 + MEIA), (dz, MEIA - z0)):
        if pp == 0:
            if qq < 0:
                return None
            continue
        r = qq / pp
        if pp < 0:
            t0 = max(t0, r)
        else:
            t1 = min(t1, r)
        if t0 > t1:
            return None
    return (x0 + dx * t0, z0 + dz * t0), (x0 + dx * t1, z0 + dz * t1)


def rdp(pts, tol):
    if len(pts) < 3:
        return pts
    (ax, az), (bx, bz) = pts[0], pts[-1]
    L = math.hypot(bx - ax, bz - az) or 1e-9
    imax, dmax = 0, -1
    for i in range(1, len(pts) - 1):
        px, pz = pts[i]
        d = abs((bx - ax) * (az - pz) - (ax - px) * (bz - az)) / L
        if d > dmax:
            imax, dmax = i, d
    if dmax <= tol:
        return [pts[0], pts[-1]]
    return rdp(pts[: imax + 1], tol)[:-1] + rdp(pts[imax:], tol)


def earclip(poly):
    """Triangulação simples por orelhas de um polígono sem furos."""
    pts = poly[:]
    if sum(pts[i][0] * pts[i - 1][1] - pts[i - 1][0] * pts[i][1] for i in range(len(pts))) < 0:
        pts.reverse()
    idx = list(range(len(pts)))
    tris = []

    def inside(p, a, b, c):
        def s(p1, p2, p3):
            return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1])
        d1, d2, d3 = s(p, a, b), s(p, b, c), s(p, c, a)
        return not ((d1 < 0 or d2 < 0 or d3 < 0) and (d1 > 0 or d2 > 0 or d3 > 0))

    guard = 0
    while len(idx) > 3 and guard < 10000:
        guard += 1
        for k in range(len(idx)):
            i0, i1, i2 = idx[k - 1], idx[k], idx[(k + 1) % len(idx)]
            a, b, c = pts[i0], pts[i1], pts[i2]
            if (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]) <= 0:
                continue
            if any(inside(pts[j], a, b, c) for j in idx if j not in (i0, i1, i2)):
                continue
            tris.append((a, b, c))
            idx.pop(k)
            break
        else:
            break
    if len(idx) == 3:
        tris.append(tuple(pts[i] for i in idx))
    return tris


# ---------------------------------------------------------------- leitura
dados = json.loads(ENTRADA.read_text(encoding="utf-8"))
ruas, pracas, nomes, nome_idx = [], [], [], {}
uso = {}                  # quantas vezes cada ponto aparece nas vias (> 1 = cruzamento)
for f in dados["features"]:
    if f["geometry"]["type"] == "LineString" and f["properties"].get("highway") in TIPOS:
        for c in f["geometry"]["coordinates"]:
            key = (round(c[0], 7), round(c[1], 7))
            uso[key] = uso.get(key, 0) + 1
for f in dados["features"]:
    g, p = f["geometry"], f["properties"]
    h = p.get("highway")
    if g["type"] == "Polygon" and h == "pedestrian":
        poly = [proj(*c) for c in g["coordinates"][0][:-1]]
        if all(abs(x) < MEIA and abs(z) < MEIA for x, z in poly):
            pracas.append(earclip(poly))
        continue
    if g["type"] != "LineString" or h not in TIPOS:
        continue
    # divide a via nos cruzamentos, para que a simplificação não apague o ponto em comum
    # (a rede de ruas precisa ficar conectada para o GPS calcular rotas)
    coords = g["coordinates"]
    pedacos, atual = [], [coords[0]]
    for i, c in enumerate(coords[1:], 1):
        atual.append(c)
        if i < len(coords) - 1 and uso[(round(c[0], 7), round(c[1], 7))] > 1:
            pedacos.append(atual)
            atual = [c]
    pedacos.append(atual)
    for ped in pedacos:
        pts = [proj(*c) for c in ped]
        run = []
        for a, b in zip(pts, pts[1:]):
            c = clip_seg(a, b)
            if c is None:
                if len(run) > 1:
                    ruas.append((h, p.get("name") or "", run))
                run = []
                continue
            if not run or math.dist(run[-1], c[0]) > 0.01:
                if len(run) > 1:
                    ruas.append((h, p.get("name") or "", run))
                run = [c[0]]
            run.append(c[1])
        if len(run) > 1:
            ruas.append((h, p.get("name") or "", run))

ruas = [(h, n, rdp(r, 0.35)) for h, n, r in ruas]
print(f"ruas no mapa: {len(ruas)}, {sum(math.dist(a, b) for _, _, r in ruas for a, b in zip(r, r[1:])) / 1000:.0f} km")

# ---------------------------------------------------------------- índice espacial dos segmentos
CEL = 20.0
segs = []                 # (x0, z0, x1, z1, meia_largura, código)
hash_seg = {}
for h, n, r in ruas:
    cod, hw = TIPOS[h]
    for (x0, z0), (x1, z1) in zip(r, r[1:]):
        k = len(segs)
        segs.append((x0, z0, x1, z1, hw, cod))
        m = hw + CALCADA + 1
        for i in range(int(math.floor((min(x0, x1) - m) / CEL)), int(math.floor((max(x0, x1) + m) / CEL)) + 1):
            for j in range(int(math.floor((min(z0, z1) - m) / CEL)), int(math.floor((max(z0, z1) + m) / CEL)) + 1):
                hash_seg.setdefault((i, j), []).append(k)


def dist_seg(px, pz, s):
    x0, z0, x1, z1 = s[:4]
    dx, dz = x1 - x0, z1 - z0
    L2 = dx * dx + dz * dz
    t = 0 if L2 == 0 else max(0, min(1, ((px - x0) * dx + (pz - z0) * dz) / L2))
    return math.hypot(px - x0 - t * dx, pz - z0 - t * dz)


def folga_rua(px, pz):
    """Distância até a borda da rua mais próxima (negativa = em cima da rua)."""
    best = 99.0
    for k in hash_seg.get((int(math.floor(px / CEL)), int(math.floor(pz / CEL))), ()):
        s = segs[k]
        best = min(best, dist_seg(px, pz, s) - s[4])
    return best


# ---------------------------------------------------------------- mancha urbana (densidade de ruas)
CU = 100.0
dens = {}
for x0, z0, x1, z1, hw, cod in segs:
    if cod in (0, 1, 2, 3, 4):
        k = (int(math.floor((x0 + x1) / 2 / CU)), int(math.floor((z0 + z1) / 2 / CU)))
        dens[k] = dens.get(k, 0) + math.hypot(x1 - x0, z1 - z0)


def urbano(x, z):
    i, j = int(math.floor(x / CU)), int(math.floor(z / CU))
    tot = sum(dens.get((i + a, j + b), 0) for a in (-1, 0, 1) for b in (-1, 0, 1))
    return tot > 1100


# ---------------------------------------------------------------- construções
CB = 30.0
hash_b = {}
constr = []       # (x, z, ang, w, d, h, tipo, cor)


def cantos(x, z, a, w, d):
    c, s = math.cos(a), math.sin(a)
    return [(x + c * u - s * v, z + s * u + c * v) for u, v in ((-w / 2, -d / 2), (w / 2, -d / 2), (w / 2, d / 2), (-w / 2, d / 2))]


def sat(A, B):
    for P in (A, B):
        for i in range(4):
            ex, ez = P[(i + 1) % 4][0] - P[i][0], P[(i + 1) % 4][1] - P[i][1]
            nx, nz = -ez, ex
            pa = [nx * x + nz * z for x, z in A]
            pb = [nx * x + nz * z for x, z in B]
            if max(pa) < min(pb) or max(pb) < min(pa):
                return False
    return True


def cabe(x, z, a, w, d):
    C = cantos(x, z, a, w + 1.2, d + 1.2)
    for px, pz in C + [(x, z)] + [((C[i][0] + C[(i + 1) % 4][0]) / 2, (C[i][1] + C[(i + 1) % 4][1]) / 2) for i in range(4)]:
        if folga_rua(px, pz) < CALCADA - 0.1:
            return False
    r = math.hypot(w, d) / 2
    for i in range(int(math.floor((x - r) / CB)), int(math.floor((x + r) / CB)) + 1):
        for j in range(int(math.floor((z - r) / CB)), int(math.floor((z + r) / CB)) + 1):
            for k in hash_b.get((i, j), ()):
                b = constr[k]
                if math.hypot(b[0] - x, b[1] - z) > r + math.hypot(b[3], b[4]) / 2:
                    continue
                if sat(C, cantos(*b[:5])):
                    return False
    return True


def guardar(b):
    k = len(constr)
    constr.append(b)
    r = math.hypot(b[3], b[4]) / 2
    for i in range(int(math.floor((b[0] - r) / CB)), int(math.floor((b[0] + r) / CB)) + 1):
        for j in range(int(math.floor((b[1] - r) / CB)), int(math.floor((b[1] + r) / CB)) + 1):
            hash_b.setdefault((i, j), []).append(k)


def escolher_tipo(x, z, cod):
    r = math.hypot(x, z)
    p = random.random()
    principal = cod in (0, 1, 2)
    if r < 650:
        return "predio" if p < 0.10 else "comercio" if p < (0.65 if principal else 0.45) else "casa"
    if r < 1500:
        return "predio" if p < 0.04 else "comercio" if p < (0.30 if principal else 0.10) else "casa"
    return "predio" if p < 0.015 else "comercio" if p < (0.18 if principal else 0.05) else "casa"


ordem = sorted(range(len(ruas)), key=lambda i: TIPOS[ruas[i][0]][0])   # ruas principais primeiro
for ri in ordem:
    h, n, r = ruas[ri]
    cod, hw = TIPOS[h]
    if cod in (5, 6, 7):
        continue
    for lado in (-1, 1):
        resto = random.uniform(0, 6)
        for (x0, z0), (x1, z1) in zip(r, r[1:]):
            L = math.hypot(x1 - x0, z1 - z0)
            if L < 1e-6:
                continue
            ux, uz = (x1 - x0) / L, (z1 - z0) / L
            nx, nz = -uz * lado, ux * lado
            ang = math.atan2(uz, ux)
            t = resto
            while t < L:
                px, pz = x0 + ux * t, z0 + uz * t
                tipo = escolher_tipo(px, pz, cod)
                if tipo == "casa":
                    w, d = random.uniform(7, 10.5), random.uniform(8, 13)
                    hgt = 3.0 if random.random() < 0.78 else 5.8
                    passo = w + random.uniform(1.0, 3.5)
                    recuo = random.uniform(1.5, 4.5)
                elif tipo == "comercio":
                    w, d = random.uniform(9, 18), random.uniform(10, 18)
                    hgt = 3.6 * random.choice((1, 1, 2, 2, 3))
                    passo = w + random.uniform(0.3, 1.5)
                    recuo = random.uniform(0.6, 1.4)
                else:
                    w, d = random.uniform(14, 22), random.uniform(14, 22)
                    hgt = 3.0 * random.randint(4, 11)
                    passo = w + random.uniform(4, 10)
                    recuo = random.uniform(3, 7)
                cx = px + ux * (w / 2) + nx * (hw + CALCADA + recuo + d / 2)
                cz = pz + uz * (w / 2) + nz * (hw + CALCADA + recuo + d / 2)
                if urbano(cx, cz) and abs(cx) < MEIA - 15 and abs(cz) < MEIA - 15 and cabe(cx, cz, ang, w, d):
                    guardar((cx, cz, ang, w, d, hgt, tipo, random.randrange(8)))
                    t += passo
                else:
                    t += 2.5
            resto = t - L
print(f"construções: {len(constr)} ({sum(b[6] == 'casa' for b in constr)} casas, "
      f"{sum(b[6] == 'comercio' for b in constr)} comércios, {sum(b[6] == 'predio' for b in constr)} prédios)")

# ---------------------------------------------------------------- árvores
arv = []
alvo = 4200
tent = 0
while len(arv) < alvo and tent < 200000:
    tent += 1
    x, z = random.uniform(-MEIA + 10, MEIA - 10), random.uniform(-MEIA + 10, MEIA - 10)
    urb = urbano(x, z)
    if urb and random.random() < 0.7:
        continue
    if folga_rua(x, z) < (CALCADA + 2.5):
        continue
    if not cabe(x, z, 0, 2.5, 2.5):
        continue
    s = random.uniform(0.75, 1.35)
    arv.append((x, z, s))
print(f"árvores: {len(arv)}")

# ---------------------------------------------------------------- largada: rua principal mais perto do centro
melhor = None
for x0, z0, x1, z1, hw, cod in segs:
    if cod in (1, 2) and math.hypot(x1 - x0, z1 - z0) > 25:
        mx, mz = (x0 + x1) / 2, (z0 + z1) / 2
        dd = math.hypot(mx, mz)
        if melhor is None or dd < melhor[0]:
            melhor = (dd, mx, mz, math.atan2(x1 - x0, z1 - z0))
inicio = [round(melhor[1], 2), round(melhor[2], 2), round(melhor[3], 4)]

# ---------------------------------------------------------------- saída compacta
dm = lambda v: int(round(v * 10))
saida = {
    "fonte": "© colaboradores do OpenStreetMap (ODbL)",
    "meia": MEIA,
    "calcada": CALCADA,
    "larguras": {str(c): hw for c, hw in TIPOS.values()},
    "nomes": nomes,
    "ruas": [],
    "pracas": [[dm(v) for tri in t for p in tri for v in p] for t in pracas],
    "construcoes": [],
    "arvores": [v for x, z, s in arv for v in (dm(x), dm(z), int(s * 100))],
    "inicio": inicio,
}
for h, n, r in ruas:
    if n not in nome_idx:
        nome_idx[n] = len(nomes)
        nomes.append(n)
    saida["ruas"].append([TIPOS[h][0], nome_idx[n]] + [dm(v) for p in r for v in p])
tcod = {"casa": 0, "comercio": 1, "predio": 2}
for x, z, a, w, d, hgt, tipo, cor in constr:
    saida["construcoes"] += [dm(x), dm(z), int(round(math.degrees(a) * 10)), dm(w), dm(d), dm(hgt), tcod[tipo], cor]

SAIDA.write_text(
    "// Gerado por gerar_cidade.py a partir de export.geojson. Não edite à mão.\n"
    "// Ruas de Salto de Pirapora: © colaboradores do OpenStreetMap (ODbL).\n"
    "window.MAPA_SALTO=" + json.dumps(saida, ensure_ascii=False, separators=(",", ":")) + ";\n",
    encoding="utf-8",
)
print(f"{SAIDA.name}: {SAIDA.stat().st_size / 1e6:.2f} MB")
