"""Gera as cópias "<arquivo>.js" dos assets, para o jogo funcionar abrindo o index.html direto do disco.

Aberto por file://, o navegador bloqueia fetch(). Uma tag <script> continua funcionando, então cada
asset ganha um irmão .js que registra o conteúdo em window.__GAME_ASSETS__[caminho]. O AssetManager
só injeta esse script quando o asset é pedido (carregamento sob demanda) e apaga o registro depois.
Em http(s) os arquivos originais são baixados normalmente e estas cópias não são usadas.

Uso:  python tools/embed_assets.py
Rode de novo sempre que mudar um modelo (.glb) ou o mapa (.json).
"""
import base64
import json
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
ASSETS = RAIZ / "assets"
REGISTRO = "__GAME_ASSETS__"


def embutir(arquivo: Path) -> Path:
    url = arquivo.relative_to(RAIZ).as_posix()          # mesmo caminho usado no código (vehicles/maps config)
    if arquivo.suffix == ".json":
        tipo, dados = "json", arquivo.read_text(encoding="utf-8")
        json.loads(dados)                                 # falha aqui se o JSON estiver inválido
    else:
        tipo, dados = "base64", json.dumps(base64.b64encode(arquivo.read_bytes()).decode("ascii"))
    saida = arquivo.with_name(arquivo.name + ".js")
    saida.write_text(
        f"// Gerado por tools/embed_assets.py a partir de {arquivo.name}. Não edite à mão.\n"
        f"(window.{REGISTRO} = window.{REGISTRO} || {{}})[{json.dumps(url)}] = {{ type: {json.dumps(tipo)}, data: {dados} }};\n",
        encoding="utf-8",
    )
    return saida


if __name__ == "__main__":
    for arquivo in sorted(list(ASSETS.rglob("*.glb")) + list(ASSETS.rglob("*.json"))):
        saida = embutir(arquivo)
        print(f"{saida.relative_to(RAIZ).as_posix()}: {saida.stat().st_size / 1e6:.2f} MB")
