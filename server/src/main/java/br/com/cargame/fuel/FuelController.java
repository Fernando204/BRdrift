package br.com.cargame.fuel;

import br.com.cargame.auth.CurrentUser;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/fuel")
public class FuelController {
    private final FuelService fuel;

    public FuelController(FuelService fuel) {
        this.fuel = fuel;
    }

    public record ReportRequest(String carId, double liters) {}
    public record RefillRequest(String carId, double currentLiters, double liters) {}

    /** Quanto resta no tanque (o jogo informa de tempos em tempos enquanto o carro roda). */
    @PostMapping("/report")
    public FuelService.FuelState report(@CurrentUser String userId, @RequestBody ReportRequest body) {
        return fuel.report(userId, body.carId(), body.liters());
    }

    /** Abastecimento no posto, pago em moedas. */
    @PostMapping("/refill")
    public FuelService.RefillResult refill(@CurrentUser String userId, @RequestBody RefillRequest body) {
        return fuel.refill(userId, body.carId(), body.currentLiters(), body.liters());
    }
}
