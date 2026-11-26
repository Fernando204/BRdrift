# Divide a carroceria em painéis (com folgas reais) e utilidades para frisos cromados.
import bpy, bmesh, math
import numpy as np
from mathutils import Vector, Matrix
from mathutils.kdtree import KDTree

DOOR = (-0.443, 0.82); COWL = -0.47; LID_Y = 1.40

def panel_of(c):
    x, y, z = c; ax = abs(x); side = "Esquerda" if x > 0 else "Direita"
    if y < COWL and z > 0.90 and ax < 0.70: return "Capo"
    if y > LID_Y and z > 0.90 and ax < 0.70: return "Tampa_Porta_Malas"
    if DOOR[0] < y < DOOR[1] and z > 0.41 and ax > 0.55: return "Porta_" + side
    if y < DOOR[0] and z > 0.36 and ax > 0.55 and y > -2.03: return "Paralama_" + ("Esquerdo" if x > 0 else "Direito")
    return "Carroceria"

def split(src_name="Carroceria_Grade"):
    src = bpy.data.objects[src_name]; me = src.data
    groups = {}
    for p in me.polygons:
        groups.setdefault(panel_of(p.center), []).append(p.index)
    col = bpy.data.collections["Mustang"]
    made = {}
    for name, faces in groups.items():
        bm = bmesh.new(); bm.from_mesh(me)
        keep = set(faces)
        bmesh.ops.delete(bm, geom=[f for f in bm.faces if f.index not in keep], context='FACES')
        bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS')
        # malha nova e materiais ANTES da geometria (limpar os materiais depois zera os índices das faces)
        m = bpy.data.meshes.new(name)
        for mt in me.materials: m.materials.append(mt)
        bm.to_mesh(m); bm.free()
        ob = bpy.data.objects.get(name) or bpy.data.objects.new(name, m); ob.data = m
        if ob.name not in col.objects: col.objects.link(ob)
        made[name] = len(m.polygons)
    return made

def open_seams(names, gap=0.0018):
    """Recua 'gap' metros as bordas de cada painel que encostam em outro painel (folga visível)."""
    data = {}
    for n in names:
        ob = bpy.data.objects[n]; bm = bmesh.new(); bm.from_mesh(ob.data); bm.verts.ensure_lookup_table()
        data[n] = (ob, bm)
    # árvore com os vértices de borda de todos os painéis
    for n in names:
        ob, bm = data[n]
        others = KDTree(sum(len(b.verts) for k, (o, b) in data.items() if k != n))
        i = 0
        for k, (o, b) in data.items():
            if k == n: continue
            for v in b.verts:
                if v.is_boundary: others.insert(v.co, i); i += 1
        others.balance()
        moves = []
        for v in bm.verts:
            if not v.is_boundary: continue
            co, idx, d = others.find(v.co)
            if co is None or d > 1e-4: continue
            # direção para dentro do painel, no plano da superfície
            inward = Vector()
            for f in v.link_faces: inward += f.calc_center_median() - v.co
            nrm = v.normal
            inward -= nrm * inward.dot(nrm)
            if inward.length > 1e-9: moves.append((v, inward.normalized() * gap))
        for v, mv in moves: v.co += mv
    for n in names:
        ob, bm = data[n]; bm.to_mesh(ob.data); bm.free()

# ---------------------------------------------------------------- frisos (tubos ao longo de polilinhas)
def boundary_loops(ob):
    """Polilinhas (listas de Vector, em coordenadas do mundo) das bordas abertas do objeto."""
    bm = bmesh.new(); bm.from_mesh(ob.data); bm.transform(ob.matrix_world)
    edges = [e for e in bm.edges if e.is_boundary]
    adj = {}
    for e in edges:
        a, b = e.verts
        adj.setdefault(a, []).append(b); adj.setdefault(b, []).append(a)
    seen = set(); loops = []
    for start in adj:
        if start in seen: continue
        loop = [start]; seen.add(start); prev = None; cur = start
        while True:
            nxt = [w for w in adj[cur] if w is not prev and w not in seen]
            if not nxt: break
            prev, cur = cur, nxt[0]; loop.append(cur); seen.add(cur)
        closed = start in adj[cur] and len(loop) > 2
        loops.append(([v.co.copy() for v in loop], closed))
    bm.free()
    return loops

def resample(pts, step, closed):
    P = [Vector(p) for p in pts]
    if closed: P = P + [P[0]]
    out = [P[0]]; acc = 0.0
    for a, b in zip(P[:-1], P[1:]):
        L = (b - a).length
        if L < 1e-9: continue
        t = step - acc
        while t <= L:
            out.append(a.lerp(b, t / L)); t += step
        acc = (acc + L) % step
    if not closed and (out[-1] - P[-1]).length > step * 0.3: out.append(P[-1])
    if closed and (out[-1] - out[0]).length < step * 0.5: out.pop()
    return out

def tube(bm, pts, radius, closed=False, sides=6, mat_index=0, flat=1.0):
    """Tubo (seção elíptica: 'flat' < 1 achata na direção radial do carro) ao longo dos pontos."""
    n = len(pts)
    if n < 2: return
    rings = []
    for i, p in enumerate(pts):
        a = pts[i - 1] if (i > 0 or closed) else pts[i]
        b = pts[(i + 1) % n] if (i < n - 1 or closed) else pts[i]
        t = (b - a); t = t.normalized() if t.length > 1e-9 else Vector((0, 1, 0))
        up = Vector((0, 0, 1)) if abs(t.z) < 0.9 else Vector((1, 0, 0))
        u = t.cross(up).normalized(); w = t.cross(u).normalized()
        ring = []
        for s in range(sides):
            ang = 2 * math.pi * s / sides
            ring.append(bm.verts.new(p + u * (math.cos(ang) * radius) + w * (math.sin(ang) * radius * flat)))
        rings.append(ring)
    last = n if closed else n - 1
    for i in range(last):
        A, B = rings[i], rings[(i + 1) % n]
        for s in range(sides):
            f = bm.faces.new((A[s], A[(s + 1) % sides], B[(s + 1) % sides], B[s]))
            f.material_index = mat_index; f.smooth = True
    if not closed:
        for ring in (rings[0], rings[-1][::-1]):
            try:
                f = bm.faces.new(ring); f.material_index = mat_index
            except ValueError: pass

def new_object(name, bm, mats):
    me = bpy.data.meshes.new(name)
    for m in mats: me.materials.append(m)          # antes da geometria: preserva o índice de material das faces
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.get(name) or bpy.data.objects.new(name, me); ob.data = me
    col = bpy.data.collections["Mustang"]
    if ob.name not in col.objects: col.objects.link(ob)
    for c in list(ob.users_collection):
        if c != col: c.objects.unlink(ob)
    return ob
