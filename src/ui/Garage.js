import { $ } from '../utils/Helpers.js';
import { VEHICLES } from '../vehicles/vehicles.config.js';

const PALETTE = ['#e9e9e6', '#151618', '#a7abae', '#6b6e72', '#b01522', '#f28c28', '#f2b705', '#2e8b57', '#1f4fb5', '#5b2a86', '#00a3a3', '#ff4fa3'];

/**
 * Oficina: escolhe uma cor e clica nas peças (ou pinta o carro inteiro com desconto), ajusta a altura
 * e paga. Tudo aparece na hora no carro do estúdio; "Desfazer" ou sair sem confirmar volta ao que foi pago.
 */
export class Garage {
  constructor(game, iface) {
    this.game = game;
    this.iface = iface;
    this.color = PALETTE[4];
    this.pending = {};          // peça -> cor escolhida (ainda não paga)
    this.full = false;
    this.lowering = 0;

    const palette = $('garage-palette');
    for (const c of PALETTE) {
      const b = document.createElement('button');
      b.style.background = c;
      b.dataset.color = c;
      b.title = c;
      b.type = 'button';
      palette.appendChild(b);
    }
    const custom = document.createElement('input');
    custom.type = 'color';
    custom.title = 'Outra cor';
    custom.setAttribute('aria-label', 'Escolher outra cor');
    palette.appendChild(custom);
    palette.addEventListener('click', e => {
      const b = e.target.closest('button[data-color]');
      if (b) this.#pickColor(b.dataset.color);
    });
    custom.addEventListener('input', () => this.#pickColor(custom.value));

    $('garage-parts').addEventListener('click', e => {
      const b = e.target.closest('.part');
      if (!b) return;
      const id = b.dataset.part;
      if (this.pending[id]?.toLowerCase() === this.color.toLowerCase()) delete this.pending[id];   // clicar de novo desfaz
      else this.pending[id] = this.color;
      this.full = false;
      this.#preview();
    });
    $('full-paint').addEventListener('change', e => {
      this.full = e.target.checked;
      this.#preview();
    });
    $('garage-height').addEventListener('input', e => {
      this.lowering = +e.target.value / 100;
      this.#preview();
    });
    $('garage-undo').addEventListener('click', () => this.reset());
    $('garage-confirm').addEventListener('click', () => this.#confirm());
    $('garage-cars').addEventListener('click', e => {
      const b = e.target.closest('button[data-car]');
      if (b) this.game.setActiveCar(b.dataset.car);
    });
  }

  get session() { return this.game.session; }
  get carId() { return this.game.vehicleId; }
  get look() { return this.session.look(this.carId); }

  /** Abre a oficina para o carro ativo, sem alterações pendentes. */
  open() {
    this.pending = {};
    this.full = false;
    this.lowering = this.look.lowering || 0;
    this.render();
  }

  /** Volta o carro para a aparência paga (ao desfazer ou sair da oficina). */
  reset() {
    this.open();
    this.game.vehicle?.applyLook(this.look);
  }

  #pickColor(hex) {
    this.color = hex;
    if (this.full) this.#preview();
    this.#renderPalette();
  }

  /** Cores finais das peças (pagas + pendentes) para a prévia e o carrinho. */
  #wanted() {
    const car = this.session.carInfo(this.carId);
    if (!car) return {};
    if (this.full) return Object.fromEntries(car.parts.map(p => [p.id, this.color]));
    return this.pending;
  }

  #preview() {
    const look = this.look;
    this.game.vehicle?.applyLook({ colors: { ...look.colors, ...this.#wanted() }, lowering: this.lowering });
    this.render();
  }

  #costs() {
    const s = this.session, look = this.look;
    const paint = s.paintCost(this.carId, look.colors, this.full ? {} : this.pending, this.full ? this.color : null);
    const height = s.suspensionCost(this.carId, look.lowering || 0, this.lowering);
    return { paint, height, total: paint + height };
  }

  #renderPalette() {
    for (const b of $('garage-palette').querySelectorAll('button')) b.classList.toggle('on', b.dataset.color.toLowerCase() === this.color.toLowerCase());
  }

  render() {
    const s = this.session, car = s.carInfo(this.carId), cfg = VEHICLES[this.carId];
    if (!car || !s.profile) return;
    const look = this.look, price = s.catalog.paintPartPrice;
    $('garage-cars').innerHTML = s.profile.cars.map(c =>
      `<button type="button" data-car="${c.carId}" class="${c.carId === this.carId ? 'on' : ''}">${VEHICLES[c.carId]?.name || c.carId}</button>`).join('');
    $('part-price').textContent = price;
    $('cm-price').textContent = s.catalog.suspensionPricePerCm;
    $('paint-note').textContent = this.full ? 'carro inteiro' : '';
    $('full-paint').checked = this.full;
    this.#renderPalette();
    const wanted = this.#wanted();
    $('garage-parts').innerHTML = car.parts.map(p => {
      const current = look.colors[p.id] || p.defaultColor || car.defaultColor;
      const next = wanted[p.id];
      const changed = next && next.toLowerCase() !== current.toLowerCase();
      return `<button type="button" class="part${changed ? ' changed' : ''}" data-part="${p.id}">` +
        `<span class="dot" style="background:${next || current}"></span><span class="pname">${p.name}</span>` +
        (changed && !this.full ? `<span class="pcost">${price}</span>` : '') + '</button>';
    }).join('');

    const maxCm = car.maxDropCm, cm = Math.round(this.lowering * maxCm);
    $('garage-height').value = Math.round(this.lowering * 100);
    $('garage-height-value').value = cm ? `−${cm} cm` : 'Original';
    $('garage-height').title = `Até −${maxCm} cm`;

    const { paint, height, total } = this.#costs(), lines = [];
    if (paint) lines.push([this.full ? 'Pintura completa (−10%)' : `Pintura (${Object.keys(this.pending).length} peça(s))`, paint]);
    if (height) lines.push([`Suspensão (${cm ? '−' + cm + ' cm' : 'original'})`, height]);
    $('cart-lines').innerHTML = lines.map(([t, v]) => `<div><span>${t}</span><span>${v}</span></div>`).join('') || '<div><span>Nenhuma alteração</span></div>';
    $('garage-total').textContent = total;
    $('garage-confirm').disabled = (!paint && !height && !this.#heightChanged()) || total > s.coins;
    $('garage-error').textContent = total > s.coins ? `Faltam ${total - s.coins} moedas.` : '';
    this.iface.setCaption(cfg?.name);
  }

  #heightChanged() {
    return Math.abs((this.look.lowering || 0) - this.lowering) > 1e-6;
  }

  async #confirm() {
    const api = this.game.api, carId = this.carId;
    const { paint, height } = this.#costs();
    $('garage-confirm').disabled = true;
    try {
      let spent = 0;
      if (paint) {
        const r = this.full ? await api.paint(carId, null, this.color) : await api.paint(carId, this.pending, null);
        this.session.set(r.profile);
        spent += r.cost;
      }
      if (height || this.#heightChanged()) {
        const r = await api.suspension(carId, this.lowering);
        this.session.set(r.profile);
        spent += r.cost;
      }
      this.iface.toast(spent ? `Serviço feito: −${spent} moedas` : 'Alterações salvas', 'ok');
      this.game.onLookChanged();
      this.open();
    } catch (err) {
      $('garage-error').textContent = err.message;
      this.render();
    }
  }
}
