# Laterais e acabamentos: frisos das janelas, quebra-vento, friso da soleira, enfeite da tomada lateral,
# maçanetas, retrovisor, antena e tomada de ar do capô.
import bpy, bmesh, math
import numpy as np
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree

D = bpy.app.driver_namespace
P = D["mustang_panels"]; M = D["mustang_mats"]

def tree_of(names):
    bm = bmesh.new()
    for n in names:
        o = bpy.data.objects[n]; t = o.data.copy(); t.transform(o.matrix_world); bm.from_mesh(t); bpy.data.meshes.remove(t)
    return BVHTree.FromBMesh(bm), bm

def on_side(tree, s, y, z, off=0.0):
    h = tree.ray_cast(Vector((s * 2.0, y, z)), Vector((-s, 0, 0)))
    if not h[0] or h[0].x * s < 0.45: return None, None      # só aceita a superfície do próprio lado
    n = h[1] if h[1].x * s > 0 else -h[1]
    return h[0] + n * off, n

def window_trims(bm):
    """Frisos cromados em todas as bordas abertas da cabine (para-brisa, vidro traseiro, janelas, cintura)."""
    chains = []
    for pts, closed in P["boundary_loops"](bpy.data.objects["Cabine"]):
        # corta a cadeia onde há "pulo" (vértice com mais de duas bordas): evita friso reto atravessando a cabine
        segs, cur = [], [pts[0]]
        for a, b in zip(pts[:-1], pts[1:]):
            if (b - a).length > 0.035:
                segs.append(cur); cur = [b]
            else:
                cur.append(b)
        segs.append(cur)
        if closed and len(segs) == 1 and (pts[-1] - pts[0]).length <= 0.035:
            chains.append((segs[0], True))
        else:
            chains += [(s, False) for s in segs]
    for pts, closed in chains:
        if len(pts) < 2: continue
        pts = P["resample"](pts, 0.02, closed)
        # trechos da borda de baixo que atravessam o cowl/tampa (|x| pequeno) não levam friso
        keep = [abs(p.x) > 0.62 or p.z > 1.02 for p in pts]
        runs, cur = [], []
        for p, k in zip(pts, keep):
            if k: cur.append(p)
            elif cur: runs.append(cur); cur = []
        if cur: runs.append(cur)
        if closed and len(runs) == 1 and all(keep): P["tube"](bm, runs[0], 0.0065, closed=True, sides=6, flat=0.6); continue
        for r in runs:
            if len(r) >= 3: P["tube"](bm, r, 0.0065, sides=6, flat=0.6)

def build():
    body = ["Carroceria", "Porta_Esquerda", "Porta_Direita", "Paralama_Esquerdo", "Paralama_Direito"]
    tb, tbm = tree_of(body)
    tg, tgm = tree_of(["Vidros"])
    bm = bmesh.new()
    window_trims(bm)
    for s in (1, -1):
        # quebra-vento (divisória cromada inclinada) e borracha entre o vidro da porta e o vidro traseiro lateral
        vent = []
        for t in np.linspace(0, 1, 10):
            y, z = -0.17 + 0.20 * t, 0.998 + 0.226 * t       # divisória do quebra-vento, inclinada como a coluna
            p, n = on_side(tg, s, y, z, 0.004)
            if p: vent.append(p)
        if len(vent) > 2: P["tube"](bm, vent, 0.007, sides=6)
        # friso da soleira (rocker), entre as caixas de roda
        rock = []
        for y in np.arange(-1.0, 0.95, 0.04):
            p, n = on_side(tb, s, y, 0.405, 0.003)
            if p: rock.append(p)
        if len(rock) > 2: P["tube"](bm, rock, 0.009, sides=6, flat=0.5)
        # enfeite cromado da tomada lateral (parede de trás do rebaixo, logo atrás da porta)
        stem = []
        for z in np.linspace(0.565, 0.715, 6):
            p, n = on_side(tb, s, 0.872, z, 0.004)
            if p: stem.append(p)
        if len(stem) > 2: P["tube"](bm, stem, 0.008, sides=6)
        for z in (0.585, 0.625, 0.665, 0.705):
            prong = []
            for y in np.linspace(0.872, 0.828, 5):
                p, n = on_side(tb, s, y, z, 0.006)
                if p: prong.append(p)
            if len(prong) > 2: P["tube"](bm, prong, 0.0055, sides=6)
        # maçaneta (alavanca horizontal com botão) perto do topo traseiro da porta
        hd = []
        for y in np.linspace(0.66, 0.77, 6):
            p, n = on_side(tb, s, y, 0.893, 0.012)
            if p: hd.append(p)
        if len(hd) > 2: P["tube"](bm, hd, 0.009, sides=8, flat=0.7)
        p, n = on_side(tb, s, 0.775, 0.893, 0.006)
        if p:
            bmesh.ops.create_cone(bm, cap_ends=True, segments=12, radius1=0.011, radius2=0.009, depth=0.012,
                                  matrix=Matrix.Translation(p) @ Matrix.Rotation(s * math.pi / 2, 4, 'Y'))
    P["new_object"]("Cromados_Laterais", bm, [M["chrome"]])
    # borracha (preta) entre vidro da porta e vidro traseiro lateral
    bm = bmesh.new()
    for s in (1, -1):
        seal = []
        for z in np.linspace(0.998, 1.228, 8):
            p, n = on_side(tg, s, 0.795, z, 0.003)
            if p: seal.append(p)
        if len(seal) > 2: P["tube"](bm, seal, 0.006, sides=6)
    P["new_object"]("Borrachas_Janela", bm, [M["rubber"]])
    # retrovisor redondo cromado só do lado do motorista (+X), preso à porta
    bm = bmesh.new()
    p, n = on_side(tb, 1, -0.34, 0.975, 0.0)
    if p:
        base = p + Vector((0.01, 0, 0))
        bmesh.ops.create_cone(bm, cap_ends=True, segments=12, radius1=0.016, radius2=0.012, depth=0.07,
                              matrix=Matrix.Translation(base + Vector((0.02, 0.0, 0.04))) @ Matrix.Rotation(-0.5, 4, 'Y'))
        head = base + Vector((0.05, 0.0, 0.09))
        bmesh.ops.create_cone(bm, cap_ends=True, segments=24, radius1=0.05, radius2=0.044, depth=0.03,
                              matrix=Matrix.Translation(head) @ Matrix.Rotation(-math.pi / 2, 4, 'X'))
    for f in bm.faces: f.smooth = True
    mirror = P["new_object"]("Retrovisor", bm, [M["chrome"]])
    # antena no para-lama dianteiro esquerdo, perto do para-brisa, levemente inclinada para trás
    bm = bmesh.new()
    h = tb.ray_cast(Vector((0.74, -0.66, 2.0)), Vector((0, 0, -1)))
    if h[0]:
        b = h[0]
        mast = [b + Vector((0, 0.06 * t, 0.78 * t)) for t in np.linspace(0, 1, 6)]
        P["tube"](bm, mast, 0.0032, sides=6)
        bmesh.ops.create_cone(bm, cap_ends=True, segments=12, radius1=0.016, radius2=0.01, depth=0.02, matrix=Matrix.Translation(b + Vector((0, 0, 0.008))))
    P["new_object"]("Antena", bm, [M["chrome"]])
    tbm.free(); tgm.free()
    hood_scoop()

def hood_scoop():
    """Tomada de ar do capô (GT): cunha baixa com a boca escura virada para a frente. Vai junto do capô."""
    hood = bpy.data.objects["Capo"]
    bm0 = bmesh.new(); bm0.from_mesh(hood.data); tree = BVHTree.FromBMesh(bm0)
    def top(x, y):
        h = tree.ray_cast(Vector((x, y, 2.0)), Vector((0, 0, -1)))
        return h[0].z if h[0] else 1.0
    bm = bmesh.new()
    Y0, Y1 = -1.63, -1.10
    nu, nv = 10, 8
    grid = {}
    for i in range(nu + 1):
        for j in range(nv + 1):
            u, v = i / nu, j / nv               # u: de trás (0) para a frente (1); v: da esquerda para a direita
            y = Y1 + (Y0 - Y1) * u
            half = 0.115 + 0.095 * u
            x = (v * 2 - 1) * half
            hgt = 0.048 * u ** 1.4 * (1 - abs(v * 2 - 1) ** 6)
            grid[i, j] = bm.verts.new((x, y, top(x, y) + hgt + 0.0015))
    for i in range(nu):
        for j in range(nv):
            f = bm.faces.new([grid[i, j], grid[i, j + 1], grid[i + 1, j + 1], grid[i + 1, j]]); f.smooth = True; f.material_index = 0
    # boca (frente) escura
    front = [grid[nu, j] for j in range(nv + 1)]
    base = [bm.verts.new((v.co.x, v.co.y, top(v.co.x, v.co.y) + 0.002)) for v in front]
    for j in range(nv):
        f = bm.faces.new([base[j], base[j + 1], front[j + 1], front[j]]); f.material_index = 1
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    ob = P["new_object"]("tmp_tomada", bm, [M["paint"], M["rubber"]])
    # junta ao capô (pinta junto)
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True); hood.select_set(True); bpy.context.view_layer.objects.active = hood
    bpy.ops.object.join()
    bm0.free()
