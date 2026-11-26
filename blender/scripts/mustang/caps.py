# Tampas frontal e traseira da carroceria (anéis do contorno da última seção até o centro)
# e recorte das caixas de roda.
import bpy, bmesh, math
import numpy as np
from mathutils import Vector

ns = bpy.app.driver_namespace["mustang_ns"]
ray = ns["ray"]

def face_y(x, z, front, y0):
    """Superfície (por projeto, a partir das medidas) da frente/traseira, sem para-choques, grade e lanternas."""
    ax = min(abs(x) / 0.86, 1.0)
    if front:
        # o centro avança 18 cm além da última seção e recua em curva até os faróis (y -2,08 em x 0,75)
        d = float(np.interp(z, [0.30, 0.40, 0.50, 0.62, 0.72, 0.90, 0.95, 1.00], [0.06, 0.10, 0.14, 0.165, 0.18, 0.18, 0.16, 0.11]))
        return y0 - d * (1 - ax ** 6)          # frente quase plana: faróis quase alinhados com a grade (foto)
    # traseira: painel traseiro côncavo (2,20 no centro) e pontas dos para-lamas recuadas para trás (2,28)
    e = float(np.interp(z, [0.30, 0.40, 0.55, 0.65, 0.90, 0.95, 1.00], [0.04, 0.06, 0.09, 0.10, 0.10, 0.075, 0.03]))
    corner = float(np.interp(z, [0.40, 0.55, 0.84, 0.93], [0.4, 0.8, 0.8, 0.0]))     # pontas dos para-lamas, sem "chifres" no alto
    return y0 + e * (1 + corner * ax ** 4)

def section_loop(pts):
    """Contorno fechado da seção: lado esquerdo (+X) do centro de baixo ao centro de cima, volta pelo direito."""
    left = [(x, z) for x, z, _ in pts]
    right = [(-x, z) for x, z, _ in reversed(pts) if x > 1e-6]
    return left + right[:-0] if False else left + right

def build_cap(sec, front, name, rings=9, zc=0.70):
    y0, pts = sec
    loop = section_loop(pts)
    # remove ponto duplicado do centro (x=0) no fim
    loop = [p for k, p in enumerate(loop) if k == 0 or (abs(p[0] - loop[k - 1][0]) > 1e-6 or abs(p[1] - loop[k - 1][1]) > 1e-6)]
    if abs(loop[0][0] - loop[-1][0]) < 1e-6 and abs(loop[0][1] - loop[-1][1]) < 1e-6: loop = loop[:-1]
    n = len(loop)
    # anéis: o 1º colado à borda (raio da quina), depois espaçados até o centro
    scales = [1.0, 0.99, 0.97, 0.94] + [0.90 - 0.90 * r / (rings - 4) for r in range(rings - 4)]
    ramp = [0.0, 0.30, 0.65, 0.90] + [1.0] * (rings - 4)          # quina arredondada em 3 anéis (sem vinco)
    grid = np.zeros((rings, n, 3)); valid = np.zeros((rings, n), bool)
    for r, s in enumerate(scales):
        for k, (x, z) in enumerate(loop):
            xx, zz = x * s, zc + (z - zc) * s
            if r == 0:
                grid[r, k] = (xx, y0, zz); valid[r, k] = True; continue
            # suaviza a quina da frente/traseira (sobe a profundidade aos poucos nos primeiros anéis)
            t = ramp[r]
            y = y0 + (face_y(xx, zz, front, y0) - y0) * (t * t * (3 - 2 * t))
            grid[r, k] = (xx, y, zz); valid[r, k] = True
    center_y = face_y(0.0, zc, front, y0)
    bm = bmesh.new()
    V = [[bm.verts.new(tuple(grid[r, k])) for k in range(n)] for r in range(rings)]
    c = bm.verts.new((0, center_y, zc))
    for r in range(rings - 1):
        for k in range(n):
            q = [V[r][k], V[r][(k + 1) % n], V[r + 1][(k + 1) % n], V[r + 1][k]]
            try: bm.faces.new(q if front else q[::-1])
            except ValueError: pass
    for k in range(n):
        t = [V[rings - 1][k], V[rings - 1][(k + 1) % n], c]
        try: bm.faces.new(t if front else t[::-1])
        except ValueError: pass
    for f in bm.faces: f.smooth = True
    me = bpy.data.meshes.get(name) or bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.get(name) or bpy.data.objects.new(name, me); ob.data = me
    col = bpy.data.collections["Mustang"]
    if ob.name not in col.objects: col.objects.link(ob)
    return ob
