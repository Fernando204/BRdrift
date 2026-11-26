# Carroceria do Mustang 1965 reconstruída como grade organizada de seções (eixo Y: frente em -Y).
# Usa a malha da IA (Ref_Externa) só como medida: cada seção é amostrada por raios e depois suavizada.
import bpy, bmesh, math
import numpy as np
from mathutils import Vector
from mathutils.bvhtree import BVHTree

ref = bpy.data.objects["Ref_Externa"]
_bm = bmesh.new(); _bm.from_mesh(ref.data)
TREE = BVHTree.FromBMesh(_bm)

def ray(o, d):
    return TREE.ray_cast(Vector(o), Vector(d))[0]

AXLES = (-1.432, 1.365)
ARCH_R = 0.395           # raio da caixa de roda (borda do para-lama)
AXLE_Z = 0.3355
Y_FRONT, Y_REAR = -2.02, 2.12          # fim da grade lateral (depois vêm as tampas frontal/traseira)
DOOR = (-0.443, 0.82)
COWL, SHELF = -0.47, 1.20              # cabine aberta entre a base do para-brisa e a base do vidro traseiro
HOOD_REAR = COWL
LID = (1.40, Y_REAR)                   # tampa do porta-malas (até a borda traseira)

# linhas (alturas) fixas da lateral: base do rocker, fundo da porta, rebaixo, vinco (dupla), cintura
SIDE_Z = [None, 0.36, 0.41, 0.46, 0.52, 0.58, 0.64, 0.70, 0.75, 0.785, 0.80, 0.815, 0.86, 0.91, 0.945, None]
TOP_X = [0.80, 0.76, 0.70, 0.62, 0.50, 0.38, 0.26, 0.13, 0.0]      # topo (capô/tampa): de fora para o centro
FLOOR_X = [0.0, 0.36, 0.62, 0.74]                                     # assoalho: do centro para fora

def stations():
    ys = list(np.arange(Y_FRONT, Y_REAR + 1e-6, 0.04))
    for s in (DOOR[0], DOOR[1], COWL, SHELF, LID[0], HOOD_REAR, -1.95):
        ys.append(s)
    ys = sorted(set(round(v, 4) for v in ys))
    out = []
    for v in ys:                      # remove estações coladas (< 1,5 cm) mantendo as de costura
        if out and v - out[-1] < 0.015 and v not in (DOOR[0], DOOR[1], COWL, SHELF, LID[0]):
            continue
        out.append(v)
    return out

def in_arch(y, z, margin=0.0):
    return any((y - a) ** 2 + (z - AXLE_Z) ** 2 < (ARCH_R + margin) ** 2 for a in AXLES)

def smooth_rows(arr, valid, win=5):
    """arr: (n_est, n_linhas). Preenche inválidos por interpolação em y e suaviza (mediana + média)."""
    a = arr.copy()
    n = a.shape[0]; idx = np.arange(n)
    for j in range(a.shape[1]):
        v = valid[:, j]
        if v.sum() >= 2:
            a[~v, j] = np.interp(idx[~v], idx[v], a[v, j])
        col = a[:, j].copy()
        med = np.array([np.median(col[max(0, k - win // 2):k + win // 2 + 1]) for k in range(n)])
        sm = np.convolve(np.pad(med, 1, mode='edge'), [0.25, 0.5, 0.25], mode='valid')
        a[:, j] = sm
    return a

def sample():
    ys = stations(); n = len(ys)
    top_z = np.zeros((n, len(TOP_X))); top_ok = np.zeros_like(top_z, bool)
    belt = np.zeros(n); floor = np.zeros(n); side_bot = np.zeros(n)
    side_x = np.zeros((n, len(SIDE_Z))); side_ok = np.zeros_like(side_x, bool)
    for i, y in enumerate(ys):
        cabin = COWL < y < SHELF
        # topo (capô / tampa): raio de cima; na cabine fica sem topo
        for j, x in enumerate(TOP_X):
            h = ray((x, y, 3), (0, 0, -1))
            # sem as bases das colunas da cabine nem a tomada de ar (peças à parte): capô <= 1,035, tampa <= 1,0
            lim = 1.035 if y < COWL else 1.0
            if h and not cabin and h.z < lim + 0.015:
                top_z[i, j] = min(h.z, lim); top_ok[i, j] = True
        # cintura: topo da lateral (quina do para-lama / soleira da janela)
        belt[i] = 0.985 if cabin else (top_z[i, 0] - 0.012 if top_ok[i, 0] else 0.975)
        # assoalho (por projeto: a malha da IA tem furos embaixo): plano entre as rodas, sobe nos balanços
        floor[i] = float(np.interp(y, [-2.10, -1.85, -1.10, 1.00, 1.80, 2.20], [0.40, 0.33, 0.26, 0.26, 0.33, 0.42]))
        side_bot[i] = floor[i]
        for j, z in enumerate(SIDE_Z):
            if z is None: continue
            if in_arch(y, z, 0.03): continue
            h = ray((3, y, z), (-1, 0, 0))
            if h and h.x > 0.62:
                side_x[i, j] = h.x; side_ok[i, j] = True
    return ys, top_z, top_ok, belt, floor, side_bot, side_x, side_ok

CLEAN_Z = [0.46, 0.55, 0.64, 0.72, 0.80, 0.88, 0.94]    # linhas medidas (limpas) da lateral

def smoothstep(a, b, v):
    t = min(max((v - a) / (b - a), 0.0), 1.0); return t * t * (3 - 2 * t)

def side_profile(ys):
    """Largura x nas alturas CLEAN_Z para cada estação, suavizada; caixas de roda preenchidas por interpolação."""
    n = len(ys); m = np.zeros((n, len(CLEAN_Z))); ok = np.zeros_like(m, bool)
    for i, y in enumerate(ys):
        for j, z in enumerate(CLEAN_Z):
            if in_arch(y, z, 0.03) or y < -1.97 or y > 2.10: continue
            h = ray((3, y, z), (-1, 0, 0))
            if h and h.x > 0.70: m[i, j] = h.x; ok[i, j] = True
    m = smooth_rows(m, ok, 3)
    # rebaixo da porta começa suave (ponta da "escultura" lateral) em vez do degrau de 4 cm na emenda
    fender = m[[k for k, y in enumerate(ys) if -0.60 < y < -0.47]].mean(0)
    for i, y in enumerate(ys):
        if DOOR[0] - 0.02 < y < -0.18:
            t = smoothstep(DOOR[0] - 0.02, -0.18, y)
            for j in range(4):
                m[i, j] = fender[j] * (1 - t) + m[i, j] * t
    return m

def build(name="Carroceria_Grade"):
    ys, top_z, top_ok, belt, floor, side_bot, side_x, side_ok = sample()
    n = len(ys)
    top_z = smooth_rows(top_z, top_ok, 5)
    belt = smooth_rows(belt[:, None], np.ones((n, 1), bool), 5)[:, 0]
    floor = smooth_rows(floor[:, None], np.ones((n, 1), bool), 9)[:, 0]
    prof = side_profile(ys)
    sx = np.zeros((n, len(SIDE_Z)))
    for i in range(n):
        x46, x55, x64, x72, x80, x88, x94 = prof[i]
        crest = max(x80, x72 + 0.012, x88 + 0.004)
        sx[i] = [x46 - 0.045, x46 - 0.03, x46 - 0.01, x46, x55, x64 - 0.002, x64, x72, (x72 + crest) / 2 - 0.006,
                 crest - 0.004, crest, crest - 0.004, x88, (x88 + x94) / 2, x94, x94 - 0.006]
    sections = []
    for i, y in enumerate(ys):
        cabin = COWL < y < SHELF
        zb = belt[i]; zf = floor[i]; zs = max(side_bot[i], zf + 0.02)
        pts = []          # (x, z, tipo) da base ao centro do topo
        for x in FLOOR_X:
            pts.append((x, zf, "piso"))
        x_bot = sx[i, 0] - 0.03
        pts.append((x_bot, zs, "piso"))
        rows = []
        for j, z in enumerate(SIDE_Z):
            if j == 0: zz = zs + 0.012
            elif j == len(SIDE_Z) - 1: zz = zb
            else: zz = max(z, zs + 0.012 + 0.006 * j)
            zz = min(zz, zb - 0.004 * (len(SIDE_Z) - 1 - j))
            rows.append((sx[i, j], zz, "lado"))
        pts += rows
        xb = rows[-1][0]
        if not cabin:
            for j, x in enumerate(TOP_X):
                xx = min(x, xb - 0.02 * (j + 1)) if j < 2 else x
                pts.append((xx, top_z[i, j], "topo"))
        else:
            ledge = [(xb - 0.03, zb + 0.004), (0.74, zb), (0.69, zb - 0.01), (0.655, zb - 0.06), (0.64, 0.80),
                     (0.63, 0.62), (0.60, 0.44), (0.30, 0.36), (0.0, 0.36)]
            pts += [(x, z, "cabine") for x, z in ledge]
        sections.append((y, pts))
    return ys, sections

def to_mesh(ys, sections, name):
    bm = bmesh.new()
    grid = []
    for y, pts in sections:
        ring = []
        m = len(pts)
        # lado esquerdo (+X) completo; lado direito espelhado sem repetir os pontos do centro (x=0)
        left = [bm.verts.new((x, y, z)) for x, z, _ in pts]
        right = [bm.verts.new((-x, y, z)) if x > 1e-6 else left[k] for k, (x, z, _) in enumerate(pts)]
        grid.append((left, right, pts))
    faces_info = []
    for i in range(len(grid) - 1):
        (l0, r0, p0), (l1, r1, p1) = grid[i], grid[i + 1]
        for k in range(len(p0) - 1):
            for side, a, b in (("E", l0, l1), ("D", r0, r1)):
                q = [a[k], a[k + 1], b[k + 1], b[k]] if side == "E" else [a[k], b[k], b[k + 1], a[k + 1]]
                if len(set(q)) < 3: continue
                try:
                    f = bm.faces.new(list(dict.fromkeys(q)))
                except ValueError:
                    continue
                faces_info.append((f, i, k, side, p0[k][2], p0[k + 1][2]))
    for f, i, k, side, ta, tb in faces_info:
        f.smooth = True
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.get(name) or bpy.data.meshes.new(name)
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.get(name) or bpy.data.objects.new(name, me); ob.data = me
    col = bpy.data.collections["Mustang"]
    if ob.name not in col.objects: col.objects.link(ob)
    return ob
