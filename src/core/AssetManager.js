import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { disposeObject3D } from '../utils/Helpers.js';

/**
 * Carregamento centralizado de arquivos (modelos GLB e dados JSON), sob demanda e sem duplicatas.
 *
 * - Em http(s) os arquivos são baixados com fetch.
 * - Aberto direto do disco (file://) o navegador bloqueia fetch; então cada asset tem uma cópia
 *   "<arquivo>.js" (gerada por tools/embed_assets.py) que é injetada só quando o asset é pedido.
 * - Pedidos repetidos do mesmo arquivo reaproveitam a mesma promessa (nada é carregado duas vezes).
 * - release(url) descarta o asset e libera a memória de GPU (geometrias, materiais, texturas).
 */
const EMBED_REGISTRY = '__GAME_ASSETS__';

export class AssetManager {
  constructor() {
    this.cache = new Map();   // url -> Promise<asset>
    this.gltfLoader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  }

  get isFileProtocol() {
    return location.protocol === 'file:';
  }

  /** Modelo glTF/GLB já interpretado (cena, materiais, nós). */
  loadGLTF(url) {
    return this.#cached(url, async () => {
      const buffer = await this.#loadBinary(url);
      return new Promise((resolve, reject) => this.gltfLoader.parse(buffer, '', resolve, reject));
    });
  }

  /** Dados JSON (por exemplo, o mapa da cidade). */
  loadJSON(url) {
    return this.#cached(url, async () => {
      if (this.isFileProtocol) return (await this.#loadEmbedded(url)).data;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Falha ao carregar ${url}: ${res.status} ${res.statusText}`);
      return res.json();
    });
  }

  /** Descarta um asset do cache; se for um modelo, libera também a memória de GPU. */
  async release(url) {
    const pending = this.cache.get(url);
    if (!pending) return;
    this.cache.delete(url);
    const asset = await pending.catch(() => null);
    if (asset && asset.scene) disposeObject3D(asset.scene);
  }

  #cached(url, load) {
    if (!this.cache.has(url)) {
      const promise = load();
      promise.catch(() => this.cache.delete(url));   // permite tentar de novo depois de um erro
      this.cache.set(url, promise);
    }
    return this.cache.get(url);
  }

  async #loadBinary(url) {
    if (!this.isFileProtocol) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Falha ao carregar ${url}: ${res.status} ${res.statusText}`);
      return res.arrayBuffer();
    }
    const entry = await this.#loadEmbedded(url);
    return base64ToArrayBuffer(entry.data);
  }

  /** Injeta "<url>.js", lê o conteúdo registrado e remove o script e o registro (libera memória). */
  #loadEmbedded(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url + '.js';
      script.onload = () => {
        const registry = window[EMBED_REGISTRY] || {};
        const entry = registry[url];
        delete registry[url];
        script.remove();
        entry ? resolve(entry) : reject(new Error(`${url}.js não registrou o asset`));
      };
      script.onerror = () => {
        script.remove();
        reject(new Error(`Não foi possível ler ${url}.js (rode: python tools/embed_assets.py)`));
      };
      document.head.appendChild(script);
    });
  }
}

function base64ToArrayBuffer(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}
