package br.com.cargame.taxi;

import br.com.cargame.auth.CurrentUser;
import br.com.cargame.config.GameProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/taxi")
public class TaxiController {
    private final TaxiService taxis;
    private final GameProperties.Taxi config;

    public TaxiController(TaxiService taxis, GameProperties props) {
        this.taxis = taxis;
        this.config = props.taxi();
    }

    /** Tabela de preços (o jogo mostra a estimativa da corrida com a mesma fórmula). */
    public record Rates(int baseFare, int perKm, int minRouteMeters, int maxRouteMeters) {}

    @GetMapping("/rates")
    public Rates rates() {
        return new Rates(config.baseFare(), config.perKm(), config.minRouteMeters(), config.maxRouteMeters());
    }

    public record FareRequest(double routeMeters, double straightMeters, long durationMs) {}

    @PostMapping("/fare")
    public TaxiService.FareResult fare(@CurrentUser String userId, @RequestBody FareRequest body) {
        return taxis.complete(userId, body.routeMeters(), body.straightMeters(), body.durationMs());
    }
}
