# Traseira do Mustang 1965: lanternas de 3 barras com moldura cromada, tampa do tanque, para-choque,
# luzes de ré na saia e ponteiras do escapamento (GT).
import bpy, bmesh, math
import numpy as np
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree

D = bpy.app.driver_namespace
P = D["mustang_panels"]; M = D["mustang_mats"]; F = D["mustang_front"]
LV = F["LV"]; LR = F["LR"]

def rear_tree():
    bm = bmesh.new()
    for n in ("Traseira_Tampa", "Tampa_Porta_Malas", "Carroceria"):
        bm.from_mesh(bpy.data.objects[n].data)
    return BVHTree.FromBMesh(bm), bm

def on_rear(tree, x, z, off=0.0):
    h = tree.ray_cast(Vector((x, 3.0, z)), Vector((0, -1, 0)))
    if not h[0]: return Vector((x, 2.2 + off, z)), Vector((0, 1, 0))
    n = h[1] if h[1].y > 0 else -h[1]
    return h[0] + n * off, n

def patch(bm, tree, x0, x1, z0, z1, off, nu=4, nv=4, bulge=0.0, mat=0):
    """Retângulo que acompanha a superfície traseira (lente/placa), com leve abaulamento."""
    grid = {}
    for i in range(nu + 1):
        for j in range(nv + 1):
            u, v = i / nu, j / nv
            x, z = x0 + (x1 - x0) * u, z0 + (z1 - z0) * v
            b = bulge * math.sin(math.pi * u) * math.sin(math.pi * v)
            p, n = on_rear(tree, x, z, off + b)
            grid[i, j] = bm.verts.new(p)
    for i in range(nu):
        for j in range(nv):
            f = bm.faces.new([grid[i, j], grid[i + 1, j], grid[i + 1, j + 1], grid[i, j + 1]]); f.material_index = mat; f.smooth = True

def build():
    tree, tbm = rear_tree()
    # -------- lanternas: 3 lentes verticais por lado, divisórias e moldura cromadas
    bm_l = bmesh.new(); bm_c = bmesh.new()
    BARS = (0.365, 0.468, 0.571); W = 0.044; Z0, Z1 = 0.705, 0.826
    for s in (1, -1):
        for cx in BARS:
            x0, x1 = s * (cx - W), s * (cx + W)
            patch(bm_l, tree, min(x0, x1), max(x0, x1), Z0, Z1, 0.010, 4, 6, 0.006)
        # moldura (retângulo arredondado) e divisórias
        frame = []
        xa, xb = BARS[0] - W - 0.012, BARS[-1] + W + 0.012
        for x, z in [(xa, Z0 - 0.012), (xb, Z0 - 0.012), (xb, Z1 + 0.012), (xa, Z1 + 0.012)]:
            frame.append((s * x, z))
        pts = []
        for k in range(4):
            a, b = frame[k], frame[(k + 1) % 4]
            for t in np.linspace(0, 1, 12, endpoint=False):
                x, z = a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t
                pts.append(on_rear(tree, x, z, 0.012)[0])
        P["tube"](bm_c, pts, 0.008, closed=True, sides=8)
        for d in (BARS[0] + BARS[1], BARS[1] + BARS[2]):
            x = s * d / 2
            P["tube"](bm_c, [on_rear(tree, x, z, 0.014)[0] for z in np.linspace(Z0 - 0.008, Z1 + 0.008, 6)], 0.006, sides=6)
    P["new_object"]("Lanternas", bm_l, [LV])
    # -------- tampa do tanque (centro do painel) — disco cromado liso, sem emblema
    c0, n0 = on_rear(tree, 0.0, 0.765, 0.006)
    bmesh.ops.create_cone(bm_c, cap_ends=True, segments=32, radius1=0.066, radius2=0.058, depth=0.022,
                          matrix=Matrix.Translation(c0 + n0 * 0.011) @ Matrix.Rotation(-math.pi / 2, 4, 'X'))
    bmesh.ops.create_cone(bm_c, cap_ends=True, segments=24, radius1=0.032, radius2=0.026, depth=0.014,
                          matrix=Matrix.Translation(c0 + n0 * 0.026) @ Matrix.Rotation(-math.pi / 2, 4, 'X'))
    # -------- fechadura do porta-malas
    c1, n1 = on_rear(tree, 0.0, 0.875, 0.004)
    bmesh.ops.create_cone(bm_c, cap_ends=True, segments=16, radius1=0.016, radius2=0.014, depth=0.01,
                          matrix=Matrix.Translation(c1 + n1 * 0.005) @ Matrix.Rotation(-math.pi / 2, 4, 'X'))
    P["new_object"]("Traseira_Cromados", bm_c, [M["chrome"]])
    # -------- para-choque traseiro
    bm = bmesh.new()
    path = F["body_outline"](["Traseira_Tampa", "Carroceria"], 0.615, False, gap_center=0.05, gap_side=0.025, wrap_to=2.02)
    section = [(-0.03, 0.048), (0.0, 0.046), (0.012, 0.037), (0.017, 0.015), (0.018, -0.007), (0.014, -0.027), (0.004, -0.04), (-0.02, -0.044)]
    F["sweep"](bm, path, section, center=Vector((0, 1.7, 0)))
    P["new_object"]("Para_Choque_Traseiro", bm, [M["chrome"]])
    # -------- luzes de ré (retangulares, na saia abaixo do para-choque)
    bm = bmesh.new()
    for s in (1, -1):
        x0, x1 = sorted((s * 0.205, s * 0.295))
        patch(bm, tree, x0, x1, 0.47, 0.515, 0.006, 3, 2, 0.003)
    P["new_object"]("Luzes_Re", bm, [LR])
    # -------- ponteiras do escapamento (saindo pela saia, GT)
    bm = bmesh.new()
    for s in (1, -1):
        p, n = on_rear(tree, s * 0.50, 0.425, 0.0)
        ring_o, ring_i, ring_b = [], [], []
        for k in range(20):
            a = 2 * math.pi * k / 20
            dx, dz = 0.048 * math.cos(a), 0.030 * math.sin(a)
            ring_o.append(bm.verts.new((p.x + dx, p.y + 0.035, p.z + dz)))
            ring_i.append(bm.verts.new((p.x + dx * 0.82, p.y + 0.035, p.z + dz * 0.75)))
            ring_b.append(bm.verts.new((p.x + dx, p.y - 0.06, p.z + dz)))
        for k in range(20):
            k2 = (k + 1) % 20
            f = bm.faces.new([ring_b[k], ring_b[k2], ring_o[k2], ring_o[k]]); f.material_index = 0; f.smooth = True
            f = bm.faces.new([ring_o[k], ring_o[k2], ring_i[k2], ring_i[k]]); f.material_index = 0
        f = bm.faces.new(ring_i[::-1]); f.material_index = 1
    P["new_object"]("Escapamento", bm, [M["chrome"], M["rubber"]])
    tbm.free()
