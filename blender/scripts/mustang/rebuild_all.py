# Reconstrói o Mustang 1965 inteiro na coleção "Mustang" a partir dos módulos (rodas e volante são mantidos).
# Como usar, com blender/mustang.blend aberto no Blender (console Python ou aba Scripting):
#   ns = {}; exec(open(r"<repo>/blender/scripts/mustang/rebuild_all.py", encoding="utf-8").read(), ns)
#   bpy.app.driver_namespace["mustang_rebuild"] = ns
#   ns["run"](("body", "front", "rear", "side", "interior", "assemble", "lower"))
# Depois exporte a coleção "Mustang" para blender/export/mustang.glb e rode: npm run optimize:mustang && npm run embed
# A superfície "Ref_Externa" (coleção Referencia_IA) é a malha antiga, usada só como medida das seções.
import os
import bpy, bmesh, math
import numpy as np
from mathutils import Matrix

DIR = os.path.join(os.path.dirname(bpy.data.filepath), "scripts", "mustang")
KEEP = {"Roda_Dianteira_Direita", "Roda_Dianteira_Esquerda", "Roda_Traseira_Direita", "Roda_Traseira_Esquerda", "Volante", "Volante_Aro"}
D = bpy.app.driver_namespace

def load(mod, key):
    ns = {}
    exec(open(os.path.join(DIR, mod + ".py"), encoding="utf-8").read(), ns)
    D[key] = ns
    return ns

def clear():
    col = bpy.data.collections["Mustang"]
    for o in list(col.objects):
        if o.name in KEEP: continue
        me = o.data; bpy.data.objects.remove(o)
        if me is not None and getattr(me, "users", 1) == 0 and isinstance(me, bpy.types.Mesh): bpy.data.meshes.remove(me)
    for o in [o for o in bpy.data.objects if o.name.startswith("tmp_")]:
        bpy.data.objects.remove(o)

def surface_tree(ob):
    from mathutils.bvhtree import BVHTree
    bm = bmesh.new(); bm.from_mesh(ob.data)
    return BVHTree.FromBMesh(bm), bm

def apply_bool(target, cutter, op):
    """Booleana numa superfície aberta: o Blender acrescenta paredes do cortador 'por dentro';
    só ficam as faces que estão sobre a superfície original."""
    tree, tbm = surface_tree(target)
    bpy.context.view_layer.objects.active = target
    m = target.modifiers.new("b", "BOOLEAN"); m.object = cutter; m.operation = op; m.solver = 'EXACT'; m.use_hole_tolerant = True
    bpy.ops.object.modifier_apply(modifier=m.name)
    bm = bmesh.new(); bm.from_mesh(target.data)
    extra = []
    for f in bm.faces:
        c = f.calc_center_median()
        hit = tree.find_nearest(c)
        if hit[0] is None or hit[3] > 0.006: extra.append(f)
    if extra:
        bmesh.ops.delete(bm, geom=extra, context='FACES')
        bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS')
        bm.to_mesh(target.data)
    bm.free(); tbm.free()
    return len(extra)

# ---------------------------------------------------------------- correção de altura (foto do carro real)
# O gabarito (malha da IA) é alto demais: comparando com a foto (câmera reconstruída pelas rodas), a
# carroceria fica ~10 cm acima do real, a lateral é "grossa" e os vidros, baixos. A correção é um
# mapeamento de altura aplicado a tudo depois de montado (menos rodas): assoalho 0,26 -> 0,20,
# cintura 0,985 -> 0,89 e teto 1,324 -> 1,285 (vidros mais altos); a frente ainda desce até 4,5 cm
# em direção à ponta (capô e para-lamas caem para a frente, como no carro).
ZMAP = dict(floor=(0.26, 0.20), belt=(0.985, 0.89), roof=(1.324, 1.285), front_drop=0.045)
ARCH_R = 0.365          # borda da caixa de roda: ~3 cm acima do pneu (raio 0,3355)

def zmap(x, y, z):
    (f0, f1), (b0, b1), (r0, r1) = ZMAP["floor"], ZMAP["belt"], ZMAP["roof"]
    if z <= f0: zz = z * f1 / f0
    elif z <= b0: zz = f1 + (z - f0) * (b1 - f1) / (b0 - f0)
    else: zz = b1 + (z - b0) * (r1 - b1) / (r0 - b0)
    t = min(max((-0.50 - y) / 1.70, 0.0), 1.0); t = t * t * (3 - 2 * t)
    zz -= ZMAP["front_drop"] * t * min(max((z - 0.40) / 0.45, 0.0), 1.0)
    return zz

def apply_zmap():
    col = bpy.data.collections["Mustang"]
    for o in col.objects:
        if o.name.startswith("Roda_") or o.name == "Volante_Aro": continue
        if o.type == 'EMPTY':
            if o.name == "Volante":
                p = o.location; o.location.z = zmap(p.x, p.y, p.z)
            continue
        me = o.data; mw = o.matrix_world
        if mw != Matrix.Identity(4):
            me.transform(mw); o.matrix_world = Matrix.Identity(4)
        co = np.empty(len(me.vertices) * 3, np.float32); me.vertices.foreach_get("co", co); co = co.reshape(-1, 3)
        co[:, 2] = [zmap(x, y, z) for x, y, z in co]
        me.vertices.foreach_set("co", co.ravel()); me.update()

def cut_arches(targets, R=ARCH_R):
    AXLES = (-1.432, 1.365); AZ = 0.3355
    for name in targets:
        ob = bpy.data.objects[name]
        for ay in AXLES:
            for sx in (1, -1):
                bm = bmesh.new()
                bmesh.ops.create_cone(bm, cap_ends=True, segments=64, radius1=R, radius2=R, depth=0.7,
                                      matrix=Matrix.Translation((sx * 0.92, ay, AZ)) @ Matrix.Rotation(math.pi / 2, 4, 'Y'))
                me = bpy.data.meshes.new("tmp_corte"); bm.to_mesh(me); bm.free()
                c = bpy.data.objects.new("tmp_corte", me); bpy.context.scene.collection.objects.link(c)
                apply_bool(ob, c, 'DIFFERENCE')
                bpy.data.objects.remove(c); bpy.data.meshes.remove(me)

def arches(cut=True, R=0.395):
    if cut: cut_arches(["Carroceria_Grade"], R)
    AXLES = (-1.432, 1.365); AZ = 0.3355
    # caixas de roda internas
    bm = bmesh.new()
    for ay in AXLES:
        for sx in (1, -1):
            segs = 28; x0, x1 = sx * 0.86, sx * 0.52; ring = []
            for k in range(segs + 1):
                a = math.pi * (-0.025 + 1.05 * k / segs)      # só acima da linha da carroceria (sem "abas" pretas)
                yy, zz = ay - math.cos(a) * (R + 0.012), AZ + math.sin(a) * (R + 0.012)
                ring.append((bm.verts.new((x0, yy, zz)), bm.verts.new((x1, yy, zz))))
            for k in range(segs):
                q = [ring[k][0], ring[k + 1][0], ring[k + 1][1], ring[k][1]]
                bm.faces.new(q if sx > 0 else q[::-1])
            cen = bm.verts.new((x1, ay, AZ - 0.03))
            for k in range(segs):
                t = [ring[k][1], ring[k + 1][1], cen]
                bm.faces.new(t if sx > 0 else t[::-1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    for f in bm.faces: f.normal_flip()
    D["mustang_panels"]["new_object"]("Caixas_Roda", bm, [D["mustang_mats"]["under"]])

def greenhouse():
    gns = D["mustang_gh"]
    shell = gns["build"]("Cabine_Casca")
    cut = gns["cutters"]()
    glass_parts = []
    for c in cut:
        g = shell.copy(); g.data = shell.data.copy(); g.name = "tmp_vidro"
        bpy.context.scene.collection.objects.link(g)
        apply_bool(g, c, 'INTERSECT'); glass_parts.append(g)
    for c in cut: apply_bool(shell, c, 'DIFFERENCE')
    shell.name = "Cabine"; shell.data.name = "Cabine"
    bpy.ops.object.select_all(action='DESELECT')
    for g in glass_parts: g.select_set(True)
    bpy.context.view_layer.objects.active = glass_parts[0]
    bpy.ops.object.join()
    gl = bpy.context.view_layer.objects.active; gl.name = "Vidros"; gl.data.name = "Vidros"
    bm = bmesh.new(); bm.from_mesh(gl.data); bm.normal_update()
    for v in bm.verts: v.co -= v.normal * 0.004
    bm.to_mesh(gl.data); bm.free()
    col = bpy.data.collections["Mustang"]
    if gl.name not in col.objects: col.objects.link(gl)
    for cc in list(gl.users_collection):
        if cc != col: cc.objects.unlink(gl)
    for c in cut: me = c.data; bpy.data.objects.remove(c); bpy.data.meshes.remove(me)

def materials():
    M = D["mustang_mats"]
    order = ["paint", "vinyl", "under", "rubber", "chrome", "glass"]
    def assign(ob, rule):
        me = ob.data; me.materials.clear()
        for k in order: me.materials.append(M[k])
        cen = np.empty(len(me.polygons) * 3, np.float32); me.polygons.foreach_get("center", cen); cen = cen.reshape(-1, 3)
        nrm = np.empty(len(me.polygons) * 3, np.float32); me.polygons.foreach_get("normal", nrm); nrm = nrm.reshape(-1, 3)
        idx = np.array([order.index(rule(c, n)) for c, n in zip(cen, nrm)], np.int32)
        me.polygons.foreach_set("material_index", idx); me.update()
    def body_rule(c, n):
        x, y, z = c; ax = abs(x)
        if z < 0.45 and n[2] < -0.5 and ax < 0.78: return "under"
        if -0.47 < y < 1.20 and ax < 0.70 and z < 0.99: return "vinyl"
        return "paint"
    assign(bpy.data.objects["Carroceria_Grade"], body_rule)
    for n in ("Frente_Tampa", "Traseira_Tampa"): assign(bpy.data.objects[n], lambda c, nn: "under" if (c[2] < 0.42 and nn[2] < -0.5) else "paint")
    assign(bpy.data.objects["Cabine"], lambda c, n: "paint" if n[2] > -0.3 or c[2] > 1.2 else "vinyl")
    assign(bpy.data.objects["Vidros"], lambda c, n: "glass")

def run(stages=("body", "front")):
    clear()
    vol = bpy.data.objects.get("Volante")
    if vol: vol.location = (0.38, -0.12, 0.93)      # posição de projeto (antes da correção de altura)
    ns = load("body", "mustang_ns"); load("caps", "mustang_caps"); pns = load("panels", "mustang_panels"); load("greenhouse", "mustang_gh")
    ys, secs = ns["build"]()
    ns["to_mesh"](ys, secs, "Carroceria_Grade")
    D["mustang_caps"]["build_cap"](secs[0], True, "Frente_Tampa", rings=10)
    D["mustang_caps"]["build_cap"](secs[-1], False, "Traseira_Tampa", rings=10)
    lower = "lower" in stages
    if not lower: arches()            # com a correção de altura, as caixas de roda são cortadas no fim
    greenhouse()
    materials()
    made = pns["split"]("Carroceria_Grade")
    pns["open_seams"](list(made.keys()), 0.0022)
    g = bpy.data.objects["Carroceria_Grade"]; g.hide_set(True); g.hide_render = True
    if "front" in stages: load("front", "mustang_front")["build"]()
    if "rear" in stages: load("rear", "mustang_rear")["build"]()
    if "side" in stages: load("side", "mustang_side")["build"]()
    if "interior" in stages: load("interior", "mustang_interior")["build"]()
    if "assemble" in stages: print("porta:", load("assemble", "mustang_assemble")["build"]())
    if lower:
        apply_zmap()
        # caixas de roda cortadas na posição real das rodas, depois de baixar a carroceria
        cut_arches([n for n in ("Carroceria", "Paralama_Esquerdo", "Paralama_Direito", "Carroceria_Grade") if bpy.data.objects.get(n)])
        arches(cut=False, R=ARCH_R)
    bpy.ops.object.select_all(action='DESELECT')
    return made
