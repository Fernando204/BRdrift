const WIDTH = 340, HEIGHT = 170;

/** Conta-giros, velocímetro, marcha, câmbio e luzes de TC/ESC num canvas 2D. */
export class Gauges {
  constructor(canvas) {
    this.canvas = canvas;
    this.g = canvas.getContext('2d');
    this.ratio = Math.min(devicePixelRatio, 2);
    canvas.width = WIDTH * this.ratio;
    canvas.height = HEIGHT * this.ratio;
  }

  #dial(cx, cy, radius, value, max, step, majorEvery, redFrom, text, unit) {
    const g = this.g, start = Math.PI * 0.75, ang = t => start + Math.PI * 1.5 * t;
    g.save();
    g.translate(cx, cy);
    g.lineWidth = 6, g.strokeStyle = 'rgba(255,255,255,.2)';
    g.beginPath(), g.arc(0, 0, radius - 5, ang(0), ang(1)), g.stroke();
    if (redFrom) g.strokeStyle = '#ff3b30', g.beginPath(), g.arc(0, 0, radius - 5, ang(redFrom / max), ang(1)), g.stroke();
    g.strokeStyle = g.fillStyle = '#fff', g.font = '600 10px system-ui,sans-serif', g.textAlign = 'center', g.textBaseline = 'middle';
    for (let d = 0; d <= max / step; d++) {
      const a = ang(d * step / max), c = Math.cos(a), s = Math.sin(a), major = d % majorEvery === 0;
      g.lineWidth = major ? 2 : 1;
      g.beginPath(), g.moveTo(c * (radius - 12), s * (radius - 12)), g.lineTo(c * (radius - (major ? 20 : 17)), s * (radius - (major ? 20 : 17))), g.stroke();
      if (major) g.fillText(d * step, c * (radius - 31), s * (radius - 31));
    }
    const a = ang(Math.min(value / max, 1.04));
    g.strokeStyle = '#ff4d3a', g.lineWidth = 3;
    g.beginPath(), g.moveTo(-Math.cos(a) * 8, -Math.sin(a) * 8), g.lineTo(Math.cos(a) * (radius - 14), Math.sin(a) * (radius - 14)), g.stroke();
    g.fillStyle = '#ff4d3a', g.beginPath(), g.arc(0, 0, 5, 0, 7), g.fill();
    g.fillStyle = '#fff', g.font = '700 16px system-ui,sans-serif', g.fillText(text, 0, radius * 0.5);
    g.font = '500 10px system-ui,sans-serif', g.fillText(unit, 0, radius * 0.5 + 14);
    g.restore();
  }

  /** Hodômetro (km do carro) e parcial (km desta partida), embaixo do conta-giros. */
  #odometer(car) {
    const g = this.g, odo = Math.floor(car.odometer), trip = Math.floor(car.trip * 10) / 10;
    if (odo !== this.odoValue) this.odoValue = odo, this.odoText = String(Math.min(odo, 999999)).padStart(6, '0');
    if (trip !== this.tripValue) this.tripValue = trip, this.tripText = 'parcial ' + trip.toFixed(1).replace('.', ',') + ' km';
    g.fillStyle = 'rgba(0,0,0,.5)', g.strokeStyle = 'rgba(255,255,255,.28)', g.lineWidth = 1;
    g.beginPath(), g.roundRect(39.5, 143.5, 66, 15, 3), g.fill(), g.stroke();
    g.textAlign = 'center', g.textBaseline = 'middle';
    g.fillStyle = '#fff', g.font = '700 11px ui-monospace,Consolas,monospace', g.fillText(this.odoText, 72.5, 151.5);
    g.fillStyle = 'rgba(255,255,255,.75)', g.font = '600 9px system-ui,sans-serif', g.fillText('km', 115, 151.5);
    g.fillText(this.tripText, 80, 165);
  }

  /** Marcador de combustível embaixo do velocímetro (E ... F), luz da reserva e os litros em números. */
  #fuel(fuel) {
    const g = this.g, x0 = 228, x1 = 292, y = 151, f = Math.max(0, Math.min(1, fuel.fraction)), low = fuel.inReserve;
    const blink = low && Math.floor(performance.now() / 500) % 2 === 0;
    g.fillStyle = 'rgba(255,255,255,.18)', g.fillRect(x0, y - 3, x1 - x0, 6);
    g.fillStyle = low ? '#ff9f1a' : '#fff', g.fillRect(x0, y - 3, (x1 - x0) * f, 6);
    g.fillStyle = '#fff';
    for (let i = 1; i < 4; i++) g.fillRect(x0 + (x1 - x0) * i / 4 - 0.5, y - 5, 1, 2);
    g.font = '700 9px system-ui,sans-serif', g.textAlign = 'center', g.textBaseline = 'middle';
    g.fillStyle = low ? '#ff9f1a' : 'rgba(255,255,255,.8)', g.fillText('E', x0 - 7, y), g.fillStyle = 'rgba(255,255,255,.8)', g.fillText('F', x1 + 7, y);
    // bomba (acende em laranja na reserva)
    g.fillStyle = blink || (low && fuel.liters < 0.02) ? '#ff9f1a' : low ? 'rgba(255,159,26,.45)' : 'rgba(255,255,255,.55)';
    const ix = 206, iy = y - 6;
    g.fillRect(ix, iy, 7, 12), g.fillStyle = '#0c1018', g.fillRect(ix + 1.5, iy + 2, 4, 3.5);
    g.strokeStyle = g.fillStyle = blink || low ? '#ff9f1a' : 'rgba(255,255,255,.55)', g.lineWidth = 1.2;
    g.beginPath(), g.moveTo(ix + 7, iy + 3), g.lineTo(ix + 10, iy + 5), g.lineTo(ix + 10, iy + 10), g.stroke();
    const tenth = Math.floor(fuel.liters * 10);
    if (tenth !== this.litersValue || fuel.tank !== this.tankValue) {
      this.litersValue = tenth, this.tankValue = fuel.tank;
      this.litersText = (tenth / 10).toFixed(1).replace('.', ',') + ' de ' + fuel.tank + ' L';
    }
    g.textAlign = 'center', g.textBaseline = 'middle', g.font = '700 10px system-ui,sans-serif';
    g.fillStyle = low ? '#ff9f1a' : '#fff', g.fillText(this.litersText, 260, 165);
  }

  /** car: tanque e hodômetro do carro (FuelSystem), ou null nos menus. */
  draw(ctrl, car = null) {
    const g = this.g, kmh = ctrl.speedMs * 3.6, rpm = ctrl.rpm, s = ctrl.state;
    g.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
    g.clearRect(0, 0, WIDTH, HEIGHT);
    this.#dial(80, 86, 74, rpm / 1e3, 8, 1, 1, 7, (rpm / 1e3).toFixed(1), 'x1000 rpm');
    this.#dial(260, 86, 74, kmh, 240, 20, 2, 0, Math.round(kmh), 'km/h');
    g.textAlign = 'center', g.textBaseline = 'middle', g.fillStyle = '#fff', g.font = '700 40px system-ui,sans-serif';
    g.fillText(ctrl.gear < 0 ? 'R' : ctrl.gear === 0 ? 'N' : ctrl.gear, 170, 78);
    g.font = '600 11px system-ui,sans-serif', g.fillStyle = ctrl.manual ? '#ffb020' : '#9fe870';
    g.fillText(ctrl.manual ? 'MANUAL' : 'AUTO', 170, 106);
    if (s.esc || s.tc) g.fillStyle = '#ffb020', g.font = '700 11px system-ui,sans-serif', g.fillText(s.esc ? 'ESC' : 'TC', 170, 124);
    g.fillStyle = ctrl.driftMode ? '#ff6b4a' : '#8fd3ff', g.font = '600 10px system-ui,sans-serif';
    g.fillText(ctrl.driftMode ? 'DRIFT' : 'NORMAL', 170, 142);
    if (rpm > 6400 && Math.floor(performance.now() / 90) % 2) g.fillStyle = '#ff3b30', g.beginPath(), g.arc(170, 30, 8, 0, 7), g.fill();
    if (car?.carId) this.#odometer(car);
    if (car?.enabled) this.#fuel(car);
  }
}
