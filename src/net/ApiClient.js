/**
 * Cliente da API REST do servidor (Spring Boot). A sessão vai num cookie HttpOnly, que o
 * navegador envia sozinho; o JavaScript nunca vê o token.
 */
export class ApiError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export class ApiClient {
  /** O jogo só fala com o servidor quando é servido por ele (http/https, não file://). */
  get available() {
    return location.protocol === 'http:' || location.protocol === 'https:';
  }

  async request(method, path, body, keepalive = false) {
    let res;
    try {
      res = await fetch('api' + path, {
        method,
        keepalive,                        // continua mesmo se a página estiver fechando (nível do tanque)
        credentials: 'same-origin',
        headers: body === undefined ? {} : { 'Content-Type': 'application/json' },
        body: body === undefined ? undefined : JSON.stringify(body),
      });
    } catch {
      throw new ApiError(0, 'offline', 'Servidor indisponível.');
    }
    if (res.status === 204) return null;
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new ApiError(res.status, data?.error || 'error', data?.message || `Erro ${res.status}`);
    return data;
  }

  me() { return this.request('GET', '/me'); }
  register(username, password) { return this.request('POST', '/auth/register', { username, password }); }
  login(username, password) { return this.request('POST', '/auth/login', { username, password }); }
  logout() { return this.request('POST', '/auth/logout'); }
  catalog() { return this.request('GET', '/catalog'); }
  chooseStarter(carId) { return this.request('POST', '/garage/starter', { carId }); }
  selectCar(carId) { return this.request('POST', '/garage/select', { carId }); }
  buyCar(carId) { return this.request('POST', '/shop/buy', { carId }); }
  paint(carId, colors, fullColor) { return this.request('POST', '/garage/paint', { carId, colors, fullColor }); }
  suspension(carId, lowering) { return this.request('POST', '/garage/suspension', { carId, lowering }); }
  fuelReport(carId, liters, odometerKm, keepalive = false) { return this.request('POST', '/fuel/report', { carId, liters, odometerKm }, keepalive); }
  fuelRefill(carId, currentLiters, liters) { return this.request('POST', '/fuel/refill', { carId, currentLiters, liters }); }
  taxiRates() { return this.request('GET', '/taxi/rates'); }
  taxiFare(routeMeters, straightMeters, durationMs) { return this.request('POST', '/taxi/fare', { routeMeters, straightMeters, durationMs }); }
  bankDrift(points, durationMs) { return this.request('POST', '/score/drift', { points, durationMs }); }
  leaderboard() { return this.request('GET', '/leaderboard'); }
  rooms() { return this.request('GET', '/rooms'); }
  createRoom(name, password, map) { return this.request('POST', '/rooms', { name, password, map }); }
}
