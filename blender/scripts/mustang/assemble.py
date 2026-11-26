# Junta/separa os objetos no formato que o jogo espera e prepara a exportação.
import bpy, bmesh
import numpy as np

D = bpy.app.driver_namespace

def join(target, others):
    bpy.ops.object.select_all(action='DESELECT')
    t = bpy.data.objects[target]
    for n in others:
        o = bpy.data.objects.get(n)
        if o: o.select_set(True)
    t.select_set(True); bpy.context.view_layer.objects.active = t
    bpy.ops.object.join()

def split_off(src, new_name, rule):
    """Move as faces de 'src' que satisfazem rule(centro) para um objeto novo."""
    ob = bpy.data.objects[src]; me = ob.data
    bm = bmesh.new(); bm.from_mesh(me)
    sel = [f for f in bm.faces if rule(f.calc_center_median())]
    nb = bmesh.new(); nb.from_mesh(me)
    keep_idx = {f.index for f in sel}
    bmesh.ops.delete(nb, geom=[f for f in nb.faces if f.index not in keep_idx], context='FACES')
    bmesh.ops.delete(nb, geom=[v for v in nb.verts if not v.link_faces], context='VERTS')
    bmesh.ops.delete(bm, geom=sel, context='FACES')
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS')
    bm.to_mesh(me); bm.free()
    m2 = bpy.data.meshes.new(new_name); nb.to_mesh(m2); nb.free()
    for mt in me.materials: m2.materials.append(mt)
    o2 = bpy.data.objects.new(new_name, m2)
    bpy.data.collections["Mustang"].objects.link(o2)
    return len(sel)

def build():
    # tampas e canecas dos faróis fazem parte da carroceria (pintura)
    join("Carroceria", ["Frente_Tampa", "Traseira_Tampa", "Farol_Canecas"])
    # porta do motorista: vidro, frisos, maçaneta, quebra-vento, borracha e retrovisor giram junto
    DOOR = (-0.443, 0.82)
    n1 = split_off("Vidros", "Vidro_Porta_Esquerda", lambda c: c.x > 0.5 and DOOR[0] < c.y < 0.80 and c.z > 0.98)
    n2 = split_off("Cromados_Laterais", "Porta_Esquerda_Cromados",
                   lambda c: c.x > 0.5 and ((DOOR[0] < c.y < DOOR[1] and 0.975 < c.z < 1.012) or
                                            (0.60 < c.y < 0.80 and 0.85 < c.z < 0.95) or
                                            (-0.19 < c.y < 0.05 and c.z > 0.99 and c.y < -0.17 + 0.20 * (c.z - 0.998) / 0.226 + 0.03)))
    n3 = split_off("Borrachas_Janela", "Porta_Esquerda_Borracha", lambda c: c.x > 0)
    # auxiliares fora da exportação
    for n in ("Carroceria_Grade",):
        o = bpy.data.objects.get(n)
        if o: me = o.data; bpy.data.objects.remove(o); bpy.data.meshes.remove(me)
    # vidro: transparente na exportação (alphaMode BLEND)
    vm = bpy.data.materials["Vidro_Mustang"]
    try: vm.surface_render_method = 'BLENDED'
    except Exception: pass
    for o in bpy.data.collections["Mustang"].objects:
        o.hide_set(False); o.hide_render = False
    return n1, n2, n3
