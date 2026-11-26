package br.com.cargame.taxi;

import br.com.cargame.auth.UserAccount;
import br.com.cargame.auth.UserAccountRepository;
import br.com.cargame.common.ApiException;
import br.com.cargame.config.GameProperties;
import java.time.Duration;
import java.time.Instant;
import org.springframework.stereotype.Service;

/**
 * Modo táxi: paga a corrida pela distância da rota (pelas ruas) entre o embarque e o destino.
 * O jogo calcula a rota; o servidor confere se a corrida é possível (distância dentro dos limites,
 * velocidade média plausível e sem corridas sobrepostas) antes de pagar.
 */
@Service
public class TaxiService {
    private final UserAccountRepository users;
    private final GameProperties.Taxi taxi;

    public TaxiService(UserAccountRepository users, GameProperties props) {
        this.users = users;
        this.taxi = props.taxi();
    }

    public record FareResult(long coinsEarned, long coins, long rides) {}

    /** Valor da corrida: bandeirada + preço por km da rota. */
    public long fare(double routeMeters) {
        return (long) Math.floor(taxi.baseFare() + taxi.perKm() * routeMeters / 1000.0);
    }

    public FareResult complete(String userId, double routeMeters, double straightMeters, long durationMs) {
        if (Double.isNaN(routeMeters) || routeMeters < taxi.minRouteMeters() || routeMeters > taxi.maxRouteMeters())
            throw ApiException.badRequest("invalid_ride", "Distância da corrida inválida.");
        if (Double.isNaN(straightMeters) || straightMeters < 0 || straightMeters > routeMeters * 1.02 + 5)
            throw ApiException.badRequest("invalid_ride", "Distância da corrida inválida.");
        // não dá para fazer a rota mais rápido que a velocidade média máxima nem demorar mais que o limite
        if (durationMs < routeMeters / taxi.maxAverageSpeed() * 1000 || durationMs > taxi.maxMinutes() * 60_000L)
            throw ApiException.badRequest("invalid_ride", "Tempo de corrida inválido.");
        UserAccount user = users.findById(userId).orElseThrow(() -> ApiException.unauthorized("Sessão inválida."));
        Instant now = Instant.now();
        // uma corrida por vez: a anterior precisa ter terminado antes desta começar
        if (user.getLastTaxiAt() != null && Duration.between(user.getLastTaxiAt(), now).toMillis() < durationMs * 0.8)
            throw ApiException.badRequest("ride_too_fast", "Corridas registradas rápido demais.");
        long coins = fare(routeMeters);
        user.setCoins(user.getCoins() + coins);
        user.setTaxiRides(user.getTaxiRides() + 1);
        user.setTaxiCoins(user.getTaxiCoins() + coins);
        user.setLastTaxiAt(now);
        users.save(user);
        return new FareResult(coins, user.getCoins(), user.getTaxiRides());
    }
}
