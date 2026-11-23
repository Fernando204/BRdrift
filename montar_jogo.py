"""Gera chevette_jogo.html: embute chevette.glb (base64) dentro de jogo_template.html.

Uso:  python montar_jogo.py
Rode de novo sempre que reexportar o chevette.glb do Blender ou editar o template.
"""
import base64
from pathlib import Path

pasta = Path(__file__).resolve().parent
template = (pasta / "jogo_template.html").read_text(encoding="utf-8")
glb = (pasta / "chevette.glb").read_bytes()

marcador = "/*GLB_BASE64*/"
if template.count(marcador) != 1:
    raise SystemExit("O template precisa conter o marcador /*GLB_BASE64*/ exatamente uma vez.")

saida = pasta / "chevette_jogo.html"
saida.write_text(template.replace(marcador, base64.b64encode(glb).decode("ascii")), encoding="utf-8")
print(f"{saida.name}: {saida.stat().st_size / 1e6:.1f} MB (modelo: {len(glb) / 1e6:.1f} MB)")
