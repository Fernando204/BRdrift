"""Posiciona os postos de combustível de Salto de Pirapora no mapa do jogo e grava
src/environment/maps/city/postos.js (lido por CityMap).

Fontes (novembro de 2026):
  - OpenStreetMap (amenity=fuel): Auto Posto Bravus e Auto Posto Trevão Farrapo, com coordenadas.
  - Endereços de cadastros públicos de empresas (consertameucarro, listatudo, applocal, paginaamarela):
    os outros cinco postos. Como o OSM não tem os números das casas, a posição é estimada pela regra
    usual de numeração: o número é a distância (m) desde a ponta da rua mais próxima do centro, com
    os pares à direita e os ímpares à esquerda de quem segue a numeração. Erro típico: dezenas de metros
    (conferido com o Trevão Farrapo, cuja posição real o OSM tem: a estimativa erra ~50 m).
  - O Auto Posto Kafisso (Rua Petrônio Portela, 27) ficou de fora: essa rua não existe no OSM.

O terreno de cada posto (28 x 24 m: cobertura, duas ilhas de bombas e a loja) fica junto à calçada.
Se ele invadir outra rua (posto perto de cruzamento), escorrega ao longo da rua até caber.
No jogo, as construções e árvores geradas que caem no terreno são retiradas.

Uso:  python tools/gerar_postos.py
"""
import json
import math
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
MAPA = RAIZ / "assets" / "maps" / "salto_de_pirapora" / "salto_de_pirapora.json"
SAIDA = RAIZ / "src" / "environment" / "maps" / "city" / "postos.js"

LON0, LAT0 = -47.5745, -23.6470           # mesmo sistema de tools/gerar_cidade.py
KX = 111320 * math.cos(math.radians(LAT0))
KZ = 110540
LOTE = (-14.0, 14.0, 0.0, 24.0)           # u (ao longo da rua) e v (para dentro do terreno), em metros

POSTOS = [
    # id, rua, como localizar
    ("bravus", "Rua Vicente Marcello dos Santos", {"osm": (-23.6419525, -47.5821355)}),
    ("trevao", "Rua Benedito de Góes Vieira", {"osm": (-23.6408297, -47.5762357)}),
    ("primus", "Rua Dorival de Barros Leite", {"numero": 200}),
    ("floriano", "Rua Elias dos Santos", {"numero": 345}),
    ("gto", "Rua Francisco de Barros Leite", {"numero": 593}),
    ("roberta", "Avenida Pedro Pires de Mello", {"numero": 80}),
    ("farrapo", "Praça Elpídio Marcello", {"numero": 26}),
]

dados = json.loads(MAPA.read_text(encoding="utf-8"))
nomes, calcada = dados["nomes"], dados["calcada"]
larg = {int(k): v for k, v in dados["larguras"].items()}
ruas = [(r[0], r[1], [(r[k] / 10, r[k + 1] / 10) for k in range(2, len(r), 2)]) for r in dados["ruas"]]
segs = [(a[0], a[1], b[0], b[1], larg[c], n) for c, n, P in ruas for a, b in zip(P, P[1:])]


def dist_seg(px, pz, s):
    x0, z0, x1, z1 = s[:4]
    dx, dz = x1 - x0, z1 - z0
    L2 = dx * dx + dz * dz
    t = 0 if L2 == 0 else max(0.0, min(1.0, ((px - x0) * dx + (pz - z0) * dz) / L2))
    return math.hypot(px - x0 - t * dx, pz - z0 - t * dz), t


def folga(px, pz):
    """Distância até a borda de asfalto mais próxima (negativa = em cima da rua)."""
    return min(dist_seg(px, pz, s)[0] - s[4] for s in segs)


def cadeia(nome):
    """Maior trecho contínuo da rua (as vias do OSM vêm partidas nos cruzamentos)."""
    i = nomes.index(nome)
    linhas = [P[:] for c, n, P in ruas if n == i]
    perto = lambda p, q: math.dist(p, q) < 1.0
    unidas = True
    while unidas:
        unidas = False
        for a in range(len(linhas)):
            for b in range(len(linhas)):
                if a == b:
                    continue
                A, B = linhas[a], linhas[b]
                if perto(A[-1], B[0]): N = A + B[1:]
                elif perto(A[-1], B[-1]): N = A + B[::-1][1:]
                elif perto(A[0], B[-1]): N = B + A[1:]
                elif perto(A[0], B[0]): N = B[::-1] + A[1:]
                else: continue
                linhas = [l for k, l in enumerate(linhas) if k not in (a, b)] + [N]
                unidas = True
                break
            if unidas:
                break
    comp = lambda l: sum(math.dist(p, q) for p, q in zip(l, l[1:]))
    melhor = max(linhas, key=comp)
    # a numeração começa na ponta mais próxima do centro da cidade
    return melhor if math.hypot(*melhor[0]) <= math.hypot(*melhor[-1]) else melhor[::-1]


def ponto(linha, d):
    """Ponto a d metros do início da linha e a direção da rua ali."""
    d = max(0.0, d)
    for (x0, z0), (x1, z1) in zip(linha, linha[1:]):
        s = math.hypot(x1 - x0, z1 - z0)
        if d <= s and s > 0:
            t = d / s
            return x0 + (x1 - x0) * t, z0 + (z1 - z0) * t, (x1 - x0) / s, (z1 - z0) / s
        d -= s
    (x0, z0), (x1, z1) = linha[-2], linha[-1]
    s = math.hypot(x1 - x0, z1 - z0)
    return x1, z1, (x1 - x0) / s, (z1 - z0) / s


def projetar(linha, px, pz):
    """Distância ao longo da linha do ponto mais próximo de (px, pz)."""
    melhor, acc = (1e9, 0.0), 0.0
    for (x0, z0), (x1, z1) in zip(linha, linha[1:]):
        s = math.hypot(x1 - x0, z1 - z0)
        d, t = dist_seg(px, pz, (x0, z0, x1, z1))
        if d < melhor[0]:
            melhor = (d, acc + t * s)
        acc += s
    return melhor[1]


def lote(cx, cz, ux, uz, lado, hw):
    """Origem e eixos do terreno: u ao longo da rua, v para dentro (lado = +1 à direita de quem segue
    (ux, uz), -1 à esquerda; com x = leste e z = sul, a direita de (ux, uz) é (-uz, ux))."""
    nx, nz = -uz * lado, ux * lado                 # normal apontando para o terreno
    if lado < 0:                                    # mantém v = u girado 90° (mesma convenção do jogo)
        ux, uz = -ux, -uz
    ox, oz = cx + nx * (hw + calcada), cz + nz * (hw + calcada)
    return ox, oz, ux, uz, nx, nz


def cabe(ox, oz, ux, uz, nx, nz):
    u0, u1, v0, v1 = LOTE
    for i in range(15):
        for j in range(13):
            u = u0 + (u1 - u0) * i / 14
            v = v0 + 0.6 + (v1 - v0 - 0.6) * j / 12
            px, pz = ox + ux * u + nx * v, oz + uz * u + nz * v
            if folga(px, pz) < calcada - 0.2:
                return False
            if abs(px) > dados["meia"] - 20 or abs(pz) > dados["meia"] - 20:
                return False
    return True


saida = []
for pid, rua, fonte in POSTOS:
    linha = cadeia(rua)
    hw = larg[next(c for c, n, P in ruas if n == nomes.index(rua))]
    if "osm" in fonte:
        lat, lon = fonte["osm"]
        px, pz = (lon - LON0) * KX, -(lat - LAT0) * KZ
        d0 = projetar(linha, px, pz)
        cx, cz, ux, uz = ponto(linha, d0)
        lado = 1 if ux * (pz - cz) - uz * (px - cx) > 0 else -1   # de que lado da rua fica o nó do OSM
        origem = "OpenStreetMap"
    else:
        d0 = fonte["numero"]
        lado = 1 if fonte["numero"] % 2 == 0 else -1             # pares à direita, ímpares à esquerda
        origem = f"endereço nº {fonte['numero']} (estimado)"
    escolhido = None
    for desl in sorted(range(-60, 61, 3), key=abs):
        cx, cz, ux, uz = ponto(linha, d0 + desl)
        L = lote(cx, cz, ux, uz, lado, hw)
        if cabe(*L):
            escolhido = (desl, L)
            break
    if not escolhido:
        print(f"{pid}: não coube junto à {rua}")
        continue
    desl, (ox, oz, ux, uz, nx, nz) = escolhido
    ang = math.atan2(uz, ux)
    print(f"{pid:9} {rua:34} {origem:28} deslocado {desl:+3d} m -> ({ox:7.1f}, {oz:7.1f})")
    saida.append({"id": pid, "rua": rua, "x": round(ox, 2), "z": round(oz, 2), "a": round(ang, 4), "fonte": origem})

js = ["// Gerado por tools/gerar_postos.py: postos de combustível reais de Salto de Pirapora.",
      "// x, z: frente do terreno (borda da calçada); a: rumo da rua (eixo u = (cos a, sin a); v = (-sin a, cos a) entra no terreno).",
      "export const POSTOS = ["]
for p in saida:
    js.append(f"  {{ id: '{p['id']}', rua: '{p['rua']}', x: {p['x']}, z: {p['z']}, a: {p['a']} }},   // {p['fonte']}")
js.append("];")
SAIDA.write_text("\n".join(js) + "\n", encoding="utf-8")
print(f"{SAIDA.relative_to(RAIZ)}: {len(saida)} postos")
