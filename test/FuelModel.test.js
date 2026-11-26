import test from 'node:test';
import assert from 'node:assert/strict';
import { VEHICLES } from '../src/vehicles/vehicles.config.js';
import { fuelModel, simulateDrive } from '../src/vehicles/FuelModel.js';

// O consumo no jogo precisa ficar perto do carro real (tanque e km/l em vehicles.config.js).
// Se falhar depois de mexer na física, recalibre conferindo os números impressos.

const CITY = [[0, 10], [60, 25], [0, 12], [40, 20], [0, 12], [60, 25], [0, 12], [40, 20], [0, 8]];
const kmPerLiter = (m, r) => r.km / (m.a * r.krpmH + m.b * r.kWh);

for (const [id, config] of Object.entries(VEHICLES)) {
  test(`${id}: consumo na cidade e na estrada perto do carro real`, () => {
    const m = fuelModel(config), F = config.fuel;
    const city = kmPerLiter(m, simulateDrive(config, CITY));
    const road = kmPerLiter(m, simulateDrive(config, [[90, 40, false], [90, 150]]));
    console.log(`${id}: cidade ${city.toFixed(1)} km/l (real ${F.cityKmL}), estrada ${road.toFixed(1)} km/l (real ${F.highwayKmL})`);
    assert.ok(Math.abs(city / F.cityKmL - 1) < 0.2, `cidade: ${city.toFixed(1)} km/l`);
    assert.ok(Math.abs(road / F.highwayKmL - 1) < 0.25, `estrada: ${road.toFixed(1)} km/l`);
    assert.ok(road > city, 'na estrada gasta menos que na cidade');
    const idle = m.a * config.physics.idleRpm / 1000;
    assert.ok(idle >= 0.6 * F.idleLph - 1e-9 && idle <= 1.4 * F.idleLph + 1e-9, `marcha lenta ${idle.toFixed(2)} L/h`);
  });
}

test('pé no fundo gasta muito mais que em velocidade constante', () => {
  const config = VEHICLES.chevette, m = fuelModel(config);
  const wot = simulateDrive(config, [[200, 20]]), lph = (m.a * wot.krpmH + m.b * wot.kWh) / (20 / 3600);
  assert.ok(lph > 12 && lph < 60, `${lph.toFixed(0)} L/h`);
});
