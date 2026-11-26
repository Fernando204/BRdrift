# Interior do Mustang 1965: painel "twin-cowl" com 5 instrumentos (GT), coluna de direção, bancos concha,
# banco traseiro, forro do teto, retrovisor interno e alavanca de câmbio.
import bpy, bmesh, math
import numpy as np
from mathutils import Vector, Matrix

D = bpy.app.driver_namespace
P = D["mustang_panels"]; M = D["mustang_mats"]

def mat(name, color, rough, metal=0.0):
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name); m.use_nodes = True
    p = next(n for n in m.node_tree.nodes if n.type == "BSDF_PRINCIPLED")
    p.inputs["Base Color"].default_value = (*color, 1); p.inputs["Roughness"].default_value = rough; p.inputs["Metallic"].default_value = metal
    m.diffuse_color = (*color, 1); m.use_backface_culling = False
    return m

FORRO = mat("Forro_Teto", (0.62, 0.6, 0.55), 0.8)
INSTR = mat("Instrumentos", (0.01, 0.01, 0.012), 0.3)
VINIL = M["vinyl"]

def loft_x(bm, xs, section_of, mat_index=0, close_ends=True):
    """Superfície varrida em X: section_of(x) -> lista de (y, z)."""
    rings = [[bm.verts.new((x, y, z)) for y, z in section_of(x)] for x in xs]
    m = len(rings[0])
    for a, b in zip(rings[:-1], rings[1:]):
        for k in range(m - 1):
            f = bm.faces.new([a[k], a[k + 1], b[k + 1], b[k]]); f.material_index = mat_index; f.smooth = True
    if close_ends:
        for ring in (rings[0], rings[-1][::-1]):
            try: f = bm.faces.new(ring); f.material_index = mat_index
            except ValueError: pass
    return rings

def dashboard(bm):
    W = 0.66
    def sec(x):
        ax = abs(x)
        # dois "capuzes" (twin cowl): mais altos na frente do motorista e do passageiro
        hump = 0.035 * math.exp(-((ax - 0.38) / 0.13) ** 2)
        top = 0.985 + hump
        return [(-0.455, 1.040), (-0.40, top + 0.012), (-0.31, top + 0.008), (-0.255, top - 0.01), (-0.245, top - 0.045),
                (-0.255, 0.80), (-0.29, 0.70), (-0.36, 0.64), (-0.45, 0.62)]
    loft_x(bm, list(np.linspace(-W, W, 33)), sec, 0)

def gauges(bm):
    # conjunto de 5 instrumentos redondos sob o capuz do motorista, aro cromado
    for k, x in enumerate(np.linspace(0.27, 0.49, 5)):
        r = 0.032 if k in (1, 3) else 0.026
        if k == 2: r = 0.04
        c = Vector((x, -0.243, 0.905))
        bmesh.ops.create_circle(bm, cap_ends=True, segments=20, radius=r, matrix=Matrix.Translation(c) @ Matrix.Rotation(math.pi / 2, 4, 'X'))
    for f in bm.faces:
        if f.material_index == 0: f.material_index = 1

def column(bm):
    hub = Vector((0.38, -0.12, 0.93)); axis = Vector((0, 0.906, 0.423))
    a = hub - axis * 0.03; b = hub - axis * 0.24
    P["tube"](bm, [b, a], 0.03, sides=12, mat_index=2)

def bucket(bm, cx):
    # assento
    def seat(x):
        u = (x - cx) / 0.24
        bol = 0.03 * u ** 6
        return [(-0.02, 0.43), (-0.03, 0.50 + bol), (0.05, 0.53 + bol), (0.30, 0.52 + bol), (0.42, 0.50 + bol), (0.44, 0.43)]
    loft_x(bm, list(np.linspace(cx - 0.24, cx + 0.24, 9)), seat, 0)
    # encosto (inclinado ~20°), com abas laterais
    def back(x):
        u = (x - cx) / 0.23
        bol = 0.035 * u ** 6
        pts = []
        for t in np.linspace(0, 1, 7):
            y = 0.40 + 0.17 * t; z = 0.50 + 0.54 * t
            pts.append((y - 0.035 - bol, z))
        pts += [(y + 0.05, z) for y, z in reversed([(0.40 + 0.17 * t, 0.50 + 0.54 * t) for t in np.linspace(0, 1, 7)])]
        return pts
    loft_x(bm, list(np.linspace(cx - 0.23, cx + 0.23, 9)), back, 0)

def rear_bench(bm):
    def seat(x):
        return [(0.72, 0.40), (0.72, 0.48), (0.80, 0.50), (1.05, 0.49), (1.12, 0.45)]
    loft_x(bm, list(np.linspace(-0.60, 0.60, 13)), seat, 0)
    def back(x):
        return [(1.06, 0.47), (1.10, 0.75), (1.15, 0.97), (1.19, 0.99), (1.19, 0.47)]
    loft_x(bm, list(np.linspace(-0.60, 0.60, 13)), back, 0)

def headliner():
    """Forro: cópia do teto da cabine recuada 1,5 cm para dentro, virada para baixo."""
    cab = bpy.data.objects["Cabine"]
    bm = bmesh.new(); bm.from_mesh(cab.data)
    kill = [f for f in bm.faces if not (f.calc_center_median().z > 1.15 and abs(f.calc_center_median().x) < 0.66 and -0.05 < f.calc_center_median().y < 1.18)]
    bmesh.ops.delete(bm, geom=kill, context='FACES')
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS')
    bm.normal_update()
    for v in bm.verts: v.co -= v.normal * 0.015 if v.normal.z > 0 else -v.normal * 0.015
    for f in bm.faces: f.normal_flip(); f.material_index = 0
    P["new_object"]("Forro_Teto", bm, [FORRO])

def build():
    bm = bmesh.new()
    dashboard(bm)
    column(bm)
    for cx in (0.37, -0.37): bucket(bm, cx)
    rear_bench(bm)
    # console/alavanca do câmbio de 4 marchas
    P["tube"](bm, [Vector((0.0, 0.02, 0.40)), Vector((0.0, -0.02, 0.62))], 0.008, sides=8, mat_index=3)
    bmesh.ops.create_uvsphere(bm, u_segments=12, v_segments=8, radius=0.022, matrix=Matrix.Translation((0.0, -0.025, 0.635)))
    # retrovisor interno no topo do para-brisa
    bmesh.ops.create_cube(bm, size=1, matrix=Matrix.LocRotScale((0.0, -0.10, 1.215), None, (0.20, 0.012, 0.055)))
    P["new_object"]("Interior", bm, [VINIL, INSTR, M["rubber"], M["chrome"]])
    bm = bmesh.new(); gauges(bm)
    # aros cromados dos instrumentos
    for k, x in enumerate(np.linspace(0.27, 0.49, 5)):
        r = 0.032 if k in (1, 3) else 0.026
        if k == 2: r = 0.04
        P["tube"](bm, [Vector((x + r * math.cos(a), -0.246, 0.905 + r * math.sin(a))) for a in np.linspace(0, 2 * math.pi, 24, endpoint=False)], 0.004, closed=True, sides=6, mat_index=0)
    P["new_object"]("Painel_Instrumentos", bm, [M["chrome"], INSTR])
    headliner()
