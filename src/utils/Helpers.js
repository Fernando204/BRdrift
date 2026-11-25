/** Atalho para document.getElementById. */
export const $ = id => document.getElementById(id);

/** Leitura/gravação segura no localStorage (o navegador pode bloquear em modo privado ou file://). */
export const storage = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* armazenamento indisponível: segue sem salvar */
    }
  },
};

/** Libera geometrias, materiais e texturas de um objeto 3D e de todos os filhos. */
export function disposeObject3D(root) {
  const materials = new Set();
  root.traverse(obj => {
    if (obj.geometry) obj.geometry.dispose();
    const mats = Array.isArray(obj.material) ? obj.material : obj.material ? [obj.material] : [];
    mats.forEach(m => materials.add(m));
  });
  for (const m of materials) {
    for (const value of Object.values(m)) if (value && value.isTexture) value.dispose();
    m.dispose();
  }
  root.removeFromParent();
}

/**
 * Congela as matrizes de um cenário estático: calcula uma vez e desliga o recálculo por quadro
 * (o Three.js deixa até de percorrer esses filhos em updateMatrixWorld). Use só em objetos que não se movem.
 */
export function freezeStatic(root) {
  root.updateMatrixWorld(true);
  root.traverse(o => {
    if (o === root) return;
    o.matrixAutoUpdate = false;
    o.matrixWorldAutoUpdate = false;
  });
}
