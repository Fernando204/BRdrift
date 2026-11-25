/**
 * Estado do jogador no cliente: perfil (moedas, carros, aparência) e catálogo de preços.
 * Quem precisa saber de mudanças registra-se com onChange (topo da tela, oficina, loja...).
 * Os preços aqui servem só para mostrar; quem cobra é sempre o servidor.
 */
export class Session {
  constructor(api) {
    this.api = api;
    this.profile = null;
    this.catalog = null;
    this.offline = false;
    this.listeners = new Set();
  }

  get loggedIn() { return !!this.profile; }
  get coins() { return this.profile?.coins ?? 0; }

  onChange(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  set(profile) {
    this.profile = profile;
    for (const fn of this.listeners) fn(profile);
  }

  setCoins(coins) {
    if (!this.profile) return;
    this.set({ ...this.profile, coins });
  }

  owns(carId) {
    return !!this.profile?.cars.some(c => c.carId === carId);
  }

  look(carId) {
    return this.profile?.cars.find(c => c.carId === carId) || { carId, colors: {}, lowering: 0 };
  }

  carInfo(carId) {
    return this.catalog?.cars.find(c => c.id === carId);
  }

  /** Mesma regra do servidor: peças que mudam de cor × preço; carro inteiro = soma − desconto. */
  paintCost(carId, current, wanted, fullColor) {
    const car = this.carInfo(carId), price = this.catalog?.paintPartPrice ?? 0;
    if (!car) return 0;
    if (fullColor) return Math.round(car.parts.length * price * (1 - this.catalog.fullPaintDiscount));
    let changed = 0;
    for (const [part, hex] of Object.entries(wanted)) {
      const def = car.parts.find(p => p.id === part);
      const now = current[part] || def?.defaultColor || car.defaultColor;
      if (hex.toLowerCase() !== now.toLowerCase()) changed++;
    }
    return changed * price;
  }

  suspensionCost(carId, from, to) {
    const car = this.carInfo(carId);
    if (!car) return 0;
    return Math.ceil(Math.abs(to - from) * car.maxDropCm - 1e-9) * this.catalog.suspensionPricePerCm;
  }
}
