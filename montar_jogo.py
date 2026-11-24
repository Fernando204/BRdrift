"""Gera chevette_glb.js a partir de chevette.glb.

O navegador bloqueia fetch("chevette.glb") quando o index.html é aberto direto do disco (file://).
Uma tag <script src="chevette_glb.js"> funciona mesmo assim, então o modelo também vai
embutido nesse arquivo, em base64. O index.html usa essa cópia quando é aberto por file://
e baixa o chevette.glb normalmente quando roda num servidor (http/https).

Uso:  python montar_jogo.py
Rode de novo sempre que reexportar o chevette.glb do Blender.
"""
import base64
from pathlib import Path

pasta = Path(__file__).resolve().parent
glb = (pasta / "chevette.glb").read_bytes()
saida = pasta / "chevette_glb.js"
saida.write_text(
    "// Gerado por montar_jogo.py a partir de chevette.glb. Não edite à mão.\n"
    f"window.CHEVETTE_GLB_B64=\"{base64.b64encode(glb).decode('ascii')}\";\n",
    encoding="utf-8",
)
print(f"{saida.name}: {saida.stat().st_size / 1e6:.1f} MB (modelo: {len(glb) / 1e6:.1f} MB)")
