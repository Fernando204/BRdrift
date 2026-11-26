# Cabine (estufa) do Mustang 1965 hardtop: casca lisa sobre as portas, depois recortes das janelas.
import bpy, bmesh, math
import numpy as np
from mathutils import Vector, Matrix

BELT = 0.985
def top_center(y):
    """Altura no centro: capô/cowl -> para-brisa -> teto -> vidro traseiro -> tampa."""
    ys = [-0.50, -0.44, -0.30, -0.16, -0.06, 0.05, 0.30, 0.70, 1.00, 1.12, 1.18, 1.26, 1.34, 1.40, 1.46]
    zs = [1.045, 1.072, 1.150, 1.225, 1.290, 1.312, 1.324, 1.316, 1.303, 1.290, 1.270, 1.190, 1.090, 1.020, 0.998]
    return float(np.interp(y, ys, zs))

def edge_x(y):
    """Meia largura da quina do teto (calha) / borda externa das colunas."""
    return float(np.interp(y, [-0.46, -0.44, -0.06, 0.20, 1.00, 1.18, 1.30, 1.46], [0.775, 0.77, 0.665, 0.675, 0.68, 0.70, 0.76, 0.80]))

def belt_x(y):
    return float(np.interp(y, [-0.46, -0.40, 0.20, 0.60, 0.85, 1.00, 1.46], [0.79, 0.825, 0.825, 0.812, 0.80, 0.825, 0.80]))

def crown(y):
    """Quanto o teto/para-brisa cai do centro até a quina."""
    return float(np.interp(y, [-0.50, -0.44, -0.06, 0.10, 1.10, 1.30, 1.46], [0.0, 0.03, 0.05, 0.05, 0.05, 0.03, 0.0]))

def side_height(y):
    """Altura da quina do teto acima da cintura (0 onde a coluna encosta na carroceria)."""
    zc = top_center(y) - crown(y)
    return max(zc - BELT, 0.0)

def build(name="Cabine_Casca"):
    ys = list(np.arange(-0.46, 1.461, 0.02))
    XS = [1.0, 0.92, 0.82, 0.68, 0.52, 0.36, 0.18, 0.0]    # frações da meia largura no topo
    SIDE = [0.0, 0.25, 0.5, 0.75, 1.0]                     # frações da subida lateral (cintura -> quina)
    bm = bmesh.new(); rows = []
    for y in ys:
        xb, xe, zc, cr = belt_x(y), edge_x(y), top_center(y), crown(y)
        ze = zc - cr
        zb = min(BELT, ze) if y > -0.44 else min(ze, 1.04)
        sec = []
        for t in SIDE:                                       # lateral com leve curvatura (tumblehome)
            x = xb + (xe - xb) * t + 0.012 * math.sin(math.pi * t)
            z = zb + (ze - zb) * t
            sec.append((x, z))
        for f in XS[1:]:
            x = xe * f
            z = zc - cr * f ** 2.5
            sec.append((x, z))
        rows.append((y, sec))
    grid = []
    for y, sec in rows:
        L = [bm.verts.new((x, y, z)) for x, z in sec]
        R = [bm.verts.new((-x, y, z)) if x > 1e-6 else L[k] for k, (x, z) in enumerate(sec)]
        grid.append((L, R))
    for i in range(len(grid) - 1):
        (l0, r0), (l1, r1) = grid[i], grid[i + 1]
        for k in range(len(l0) - 1):
            for a, b, sgn in ((l0, l1, 1), (r0, r1, -1)):
                q = [a[k], a[k + 1], b[k + 1], b[k]]
                q = q if sgn > 0 else q[::-1]
                if len(set(q)) < 3: continue
                try: bm.faces.new(list(dict.fromkeys(q)))
                except ValueError: pass
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    for f in bm.faces:
        f.smooth = True
        if f.normal.z < -0.2 and f.calc_center_median().z > 1.2: f.normal_flip()
    me = bpy.data.meshes.get(name) or bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.get(name) or bpy.data.objects.new(name, me); ob.data = me
    col = bpy.data.collections["Mustang"]
    if ob.name not in col.objects: col.objects.link(ob)
    return ob

# ---------------------------------------------------------------- recortes das janelas
def prism_x(name, poly_yz, x0, x1):
    """Prisma ao longo de X com o contorno (y, z) dado."""
    bm = bmesh.new()
    a = [bm.verts.new((x0, y, z)) for y, z in poly_yz]
    b = [bm.verts.new((x1, y, z)) for y, z in poly_yz]
    bm.faces.new(a); bm.faces.new(b[::-1])
    n = len(poly_yz)
    for k in range(n):
        bm.faces.new([a[k], a[(k + 1) % n], b[(k + 1) % n], b[k]])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(ob); ob.hide_set(True)
    return ob

def prism_z(name, poly_xy, z0, z1):
    bm = bmesh.new()
    a = [bm.verts.new((x, y, z0)) for x, y in poly_xy]
    b = [bm.verts.new((x, y, z1)) for x, y in poly_xy]
    bm.faces.new(a); bm.faces.new(b[::-1])
    n = len(poly_xy)
    for k in range(n):
        bm.faces.new([a[k], a[(k + 1) % n], b[(k + 1) % n], b[k]])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(ob); ob.hide_set(True)
    return ob

def rounded(poly, r=0.035, seg=4):
    """Arredonda os cantos de um polígono 2D (cantos de janela)."""
    out = []; n = len(poly)
    for k in range(n):
        p0, p1, p2 = np.array(poly[k - 1]), np.array(poly[k]), np.array(poly[(k + 1) % n])
        d0 = p0 - p1; d2 = p2 - p1
        l0, l2 = np.linalg.norm(d0), np.linalg.norm(d2)
        rr = min(r, l0 * 0.45, l2 * 0.45)
        a = p1 + d0 / l0 * rr; c = p1 + d2 / l2 * rr
        for s in range(seg + 1):
            t = s / seg
            q = (1 - t) ** 2 * a + 2 * (1 - t) * t * p1 + t ** 2 * c
            out.append(tuple(q))
    return out

# contornos das aberturas, tirados da foto e das medidas do modelo (vista lateral y,z / vista de cima x,y)
SIDE_WINDOW = [(-0.40, 0.995), (-0.075, 1.228), (0.90, 1.235), (1.13, 1.02), (1.10, 0.995)]
WINDSHIELD = [(-0.655, -0.425), (0.655, -0.425), (0.615, -0.085), (-0.615, -0.085)]
REAR_WINDOW = [(-0.585, 1.175), (0.585, 1.175), (0.63, 1.385), (-0.63, 1.385)]

def cutters():
    obs = []
    sw = rounded(SIDE_WINDOW, 0.05)
    obs.append(prism_x("tmp_janela_E", sw, 0.40, 1.2))
    obs.append(prism_x("tmp_janela_D", sw, -1.2, -0.40))
    obs.append(prism_z("tmp_parabrisa", rounded(WINDSHIELD, 0.06), 0.9, 1.6))
    obs.append(prism_z("tmp_vidro_tras", rounded(REAR_WINDOW, 0.06), 0.95, 1.6))
    return obs
