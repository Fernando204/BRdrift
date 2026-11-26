# Frente do Mustang 1965: boca da grade, grade, barra cromada, faróis, faróis de neblina, para-choque e setas.
import bpy, bmesh, math
import numpy as np
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree

P = bpy.app.driver_namespace["mustang_panels"]
M = bpy.app.driver_namespace["mustang_mats"]
G = bpy.app.driver_namespace.setdefault("mustang_lens_mats", {})

def lens_mat(name, color, rough=0.05, alpha=1.0):
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name); m.use_nodes = True
    p = next(n for n in m.node_tree.nodes if n.type == "BSDF_PRINCIPLED")
    p.inputs["Base Color"].default_value = (*color, 1); p.inputs["Roughness"].default_value = rough
    m.diffuse_color = (*color, 1); m.use_backface_culling = False
    G[name] = m; return m

LF = lens_mat("Lente_Farol", (0.92, 0.92, 0.88))
LA = lens_mat("Lente_Ambar", (0.95, 0.45, 0.03))
LV = lens_mat("Lente_Vermelha", (0.6, 0.02, 0.02), 0.1)
LR = lens_mat("Lente_Re_Branca", (0.88, 0.88, 0.88))
GRADE = bpy.data.materials.get("Grade_Escura") or bpy.data.materials.new("Grade_Escura")
GRADE.use_nodes = True
_p = next(n for n in GRADE.node_tree.nodes if n.type == "BSDF_PRINCIPLED")
_p.inputs["Base Color"].default_value = (0.03, 0.03, 0.035, 1); _p.inputs["Roughness"].default_value = 0.35; _p.inputs["Metallic"].default_value = 0.6
GRADE.diffuse_color = (0.03, 0.03, 0.035, 1)

# medidas tiradas da foto (metade da frente mais próxima da câmera): a grade é bem mais estreita que o
# vão entre os faróis (sobra painel da cor do carro entre a grade e cada farol) e fica na altura dos faróis
MOUTH = dict(x=0.45, z0=0.69, z1=0.915, r=0.07)            # boca da grade (meia largura, base, topo, raio dos cantos)
HEAD = dict(x=0.715, z=0.805, r=0.093)                     # faróis (centro e raio do aro)
FOG = dict(x=0.35, z=0.79, r=0.05)                         # faróis de neblina (GT), nas pontas da grade

def mouth_outline(n_side=8):
    m = MOUTH; pts = []
    corners = [(m["x"] - m["r"], m["z1"] - m["r"], 0), (-m["x"] + m["r"], m["z1"] - m["r"], 90),
               (-m["x"] + m["r"], m["z0"] + m["r"], 180), (m["x"] - m["r"], m["z0"] + m["r"], 270)]
    for cx, cz, a0 in corners:
        for k in range(n_side + 1):
            a = math.radians(a0 + 90 * k / n_side)
            pts.append((cx + m["r"] * math.cos(a), cz + m["r"] * math.sin(a)))
    return pts

def prism_y(name, poly_xz, y0, y1):
    bm = bmesh.new()
    a = [bm.verts.new((x, y0, z)) for x, z in poly_xz]; b = [bm.verts.new((x, y1, z)) for x, z in poly_xz]
    bm.faces.new(a); bm.faces.new(b[::-1]); n = len(poly_xz)
    for k in range(n): bm.faces.new([a[k], a[(k + 1) % n], b[(k + 1) % n], b[k]])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(ob); ob.hide_set(True); return ob

def circle(cx, cz, r, n=32):
    return [(cx + r * math.cos(2 * math.pi * k / n), cz + r * math.sin(2 * math.pi * k / n)) for k in range(n)]

def bool_cut(target, cutter):
    # mesma booleana "limpa" do rebuild (sem as paredes internas do cortador)
    bpy.app.driver_namespace["mustang_rebuild"]["apply_bool"](target, cutter, 'DIFFERENCE')
    me = cutter.data; bpy.data.objects.remove(cutter); bpy.data.meshes.remove(me)

def front_tree():
    ob = bpy.data.objects["Frente_Tampa"]; bm = bmesh.new(); bm.from_mesh(ob.data)
    return BVHTree.FromBMesh(bm), bm

def surf_y(tree, x, z):
    h = tree.ray_cast(Vector((x, -3, z)), Vector((0, 1, 0)))
    return (h[0].y, h[1]) if h[0] else (None, None)

def build():
    cap = bpy.data.objects["Frente_Tampa"]
    tree, tbm = front_tree()
    # -------- boca da grade e buracos dos faróis (no painel frontal)
    bool_cut(cap, prism_y("tmp_boca", mouth_outline(), -2.6, -2.05))
    for s in (1, -1):
        bool_cut(cap, prism_y("tmp_farol", circle(s * HEAD["x"], HEAD["z"], HEAD["r"] + 0.004), -2.6, -1.98))
    bm = bmesh.new()
    # -------- garganta da boca (parede escura) e grade ao fundo
    outline = mouth_outline()
    GY = -2.085
    front_ring, back_ring = [], []
    for x, z in outline:
        y, _ = surf_y(tree, x * 0.999, z)
        y = y if y is not None else -2.15
        front_ring.append(bm.verts.new((x, y + 0.002, z)))
        back_ring.append(bm.verts.new((x * 0.985, GY, z)))
    n = len(outline)
    for k in range(n):
        f = bm.faces.new([front_ring[k], back_ring[k], back_ring[(k + 1) % n], front_ring[(k + 1) % n]]); f.material_index = 1
    f = bm.faces.new(back_ring[::-1]); f.material_index = 1
    # grade em colmeia: barras finas verticais e horizontais logo à frente do fundo
    xs = np.linspace(-MOUTH["x"] + 0.03, MOUTH["x"] - 0.03, 24); zs = np.linspace(MOUTH["z0"] + 0.02, MOUTH["z1"] - 0.02, 8)
    for x in xs:
        bmesh.ops.create_cube(bm, size=1, matrix=Matrix.LocRotScale((x, GY - 0.012, (zs[0] + zs[-1]) / 2), None, (0.006, 0.02, zs[-1] - zs[0])))
    for z in zs:
        bmesh.ops.create_cube(bm, size=1, matrix=Matrix.LocRotScale((0, GY - 0.012, z), None, (2 * MOUTH["x"] - 0.06, 0.02, 0.006)))
    for f in bm.faces:
        if f.material_index == 0 and f.calc_center_median().y > -2.11: f.material_index = 1
    P["new_object"]("Grade", bm, [M["chrome"], GRADE])
    # -------- barra cromada horizontal (curral) e moldura central
    bm = bmesh.new()
    bar = [Vector((x, GY - 0.045, FOG["z"])) for x in np.linspace(-FOG["x"] + FOG["r"], FOG["x"] - FOG["r"], 12)]
    P["tube"](bm, bar, 0.009, sides=8, mat_index=0)
    frame = []
    for x, z in [(-0.08, FOG["z"] - 0.05), (0.08, FOG["z"] - 0.05), (0.08, FOG["z"] + 0.05), (-0.08, FOG["z"] + 0.05)]:
        frame.append(Vector((x, GY - 0.05, z)))
    P["tube"](bm, P["resample"](frame, 0.02, True), 0.008, closed=True, sides=8, mat_index=0)
    # placa central lisa (sem logotipo)
    bmesh.ops.create_cube(bm, size=1, matrix=Matrix.LocRotScale((0, GY - 0.044, FOG["z"]), None, (0.14, 0.006, 0.085)))
    P["new_object"]("Grade_Cromados", bm, [M["chrome"]])
    # -------- faróis: caneca, aro cromado e lente; faróis de neblina na grade
    bm = bmesh.new()
    for s in (1, -1):
        cx = s * HEAD["x"]
        yf, _ = surf_y(tree, cx + s * (HEAD["r"] + 0.01), HEAD["z"])
        yf = yf if yf is not None else -2.08
        # caneca (cilindro curto pintado) e aro cromado
        ring_f, ring_b = [], []
        for x, z in circle(cx, HEAD["z"], HEAD["r"] + 0.004, 32):
            ring_f.append(bm.verts.new((x, yf, z))); ring_b.append(bm.verts.new((x, yf + 0.05, z)))
        for k in range(32):
            f = bm.faces.new([ring_f[k], ring_b[k], ring_b[(k + 1) % 32], ring_f[(k + 1) % 32]]); f.material_index = 0
        bez = [Vector((x, yf - 0.006, z)) for x, z in circle(cx, HEAD["z"], HEAD["r"] - 0.002, 40)]
        P["tube"](bm, bez, 0.011, closed=True, sides=10, mat_index=1)
    P["new_object"]("Farol_Canecas", bm, [M["paint"], M["chrome"]])
    bm = bmesh.new()
    for s in (1, -1):
        for d, (cx, cz, r, ylens) in enumerate(((s * HEAD["x"], HEAD["z"], HEAD["r"] - 0.008, None), (s * FOG["x"], FOG["z"], FOG["r"] - 0.006, GY - 0.06))):
            if ylens is None:
                yf, _ = surf_y(tree, cx + s * (HEAD["r"] + 0.01), cz); ylens = (yf if yf is not None else -2.08) + 0.01
            # lente abaulada (calota esférica)
            rings = 6
            prev = None
            center = bm.verts.new((cx, ylens - 0.03, cz))
            for i in range(1, rings + 1):
                rr = r * i / rings; dy = 0.03 * (1 - (i / rings) ** 2)
                ring = [bm.verts.new((cx + rr * math.cos(2 * math.pi * k / 24), ylens - dy, cz + rr * math.sin(2 * math.pi * k / 24))) for k in range(24)]
                if prev is None:
                    for k in range(24): bm.faces.new([center, ring[(k + 1) % 24], ring[k]])
                else:
                    for k in range(24): bm.faces.new([prev[k], prev[(k + 1) % 24], ring[(k + 1) % 24], ring[k]])
                prev = ring
    for f in bm.faces: f.smooth = True
    P["new_object"]("Farois", bm, [LF])
    # aros cromados dos faróis de neblina
    bm = bmesh.new()
    for s in (1, -1):
        P["tube"](bm, [Vector((x, GY - 0.062, z)) for x, z in circle(s * FOG["x"], FOG["z"], FOG["r"], 32)], 0.008, closed=True, sides=8)
    P["new_object"]("Neblina_Aros", bm, [M["chrome"]])
    # -------- para-choque dianteiro (lâmina cromada que contorna as quinas)
    bm = bmesh.new()
    path = body_outline(["Frente_Tampa", "Paralama_Esquerdo", "Paralama_Direito", "Carroceria"], 0.556, True,
                        gap_center=0.07, gap_side=0.03, wrap_to=-1.96)
    section = [(-0.03, 0.05), (0.0, 0.048), (0.013, 0.039), (0.018, 0.018), (0.02, -0.004), (0.015, -0.026), (0.004, -0.04), (-0.02, -0.044)]
    sweep(bm, path, section)
    P["new_object"]("Para_Choque_Dianteiro", bm, [M["chrome"]])
    # -------- setas (luzes de posição) redondas na saia, abaixo do para-choque
    bm = bmesh.new()
    for s in (1, -1):
        cx, cz = s * 0.585, 0.455
        yf, _ = surf_y(tree, cx, cz); yf = (yf if yf is not None else -2.12) - 0.004
        c = bm.verts.new((cx, yf - 0.012, cz))
        ring = [bm.verts.new((cx + 0.034 * math.cos(2 * math.pi * k / 20), yf, cz + 0.034 * math.sin(2 * math.pi * k / 20))) for k in range(20)]
        for k in range(20): bm.faces.new([c, ring[(k + 1) % 20], ring[k]])
    P["new_object"]("Setas_Dianteiras", bm, [LA])
    tbm.free()

def body_outline(names, z, front, gap_center=0.06, gap_side=0.03, wrap_to=-1.96):
    """Contorno da carroceria na altura z (vista de cima), afastado 'gap' para fora: caminho de um
    para-choque que acompanha a frente/traseira e dobra nas quinas até 'wrap_to' (em y)."""
    bm = bmesh.new()
    for n in names:
        o = bpy.data.objects.get(n)
        if o: bm.from_mesh(o.data)
    tree = BVHTree.FromBMesh(bm)
    sgn = -1 if front else 1
    face = []
    for x in np.linspace(-0.80, 0.80, 41):
        h = tree.ray_cast(Vector((x, sgn * 4.0, z)), Vector((0, -sgn, 0)))
        if h[0]: face.append(Vector((x, h[0].y, z)))
    corners = {}
    for s in (1, -1):
        edge_y = face[-1].y if s > 0 else face[0].y
        pts = []
        for y in np.linspace(edge_y - sgn * 0.02, wrap_to, 7):
            h = tree.ray_cast(Vector((s * 2.0, y, z)), Vector((-s, 0, 0)))
            if h[0] and h[0].x * s > 0.5: pts.append(Vector((h[0].x, y, z)))
        corners[s] = pts
    path = corners[-1][::-1] + face + corners[1]
    bm.free()
    center = Vector((0, sgn * 1.7, z))
    out = []
    n = len(path)
    for i, p in enumerate(path):
        a = path[max(i - 1, 0)]; b = path[min(i + 1, n - 1)]
        t = (b - a); t.z = 0; t.normalize()
        nrm = Vector((t.y, -t.x, 0))
        if nrm.dot(Vector((p.x - center.x, p.y - center.y, 0))) < 0: nrm = -nrm
        g = gap_side + (gap_center - gap_side) * max(0.0, 1 - abs(p.x) / 0.8) ** 0.5
        out.append(p + nrm * g)
    # suaviza o caminho (sem quinas vivas)
    for _ in range(3):
        out = [out[0]] + [(out[i - 1] + out[i] * 2 + out[i + 1]) / 4 for i in range(1, len(out) - 1)] + [out[-1]]
    return out

def sweep(bm, path, section, center=None):
    """Varre a seção (deslocamento para fora, altura) ao longo do caminho horizontal.
    'Para fora' = para longe do ponto 'center' (no meio do carro, atrás do para-choque)."""
    rings = []
    n = len(path)
    if center is None:
        center = Vector((0, -1.7 if path[n // 2].y < 0 else 1.7, 0))
    for i, p in enumerate(path):
        a = path[max(i - 1, 0)]; b = path[min(i + 1, n - 1)]
        t = (b - a).normalized()
        out = Vector((t.y, -t.x, 0))
        away = Vector((p.x - center.x, p.y - center.y, 0))
        if out.dot(away) < 0: out = -out
        rings.append([bm.verts.new(p + out * u + Vector((0, 0, w))) for u, w in section])
    m = len(section)
    for i in range(n - 1):
        A, B = rings[i], rings[i + 1]
        for k in range(m):
            f = bm.faces.new([A[k], A[(k + 1) % m], B[(k + 1) % m], B[k]]); f.smooth = True
    bm.faces.new(rings[0]); bm.faces.new(rings[-1][::-1])
