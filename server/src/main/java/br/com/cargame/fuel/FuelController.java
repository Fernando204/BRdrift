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

    /** liters e odometerKm são opcionais (o jogo manda os dois). */
    public record ReportRequest(String carId, Double liters, Double odometerKm) {}
    public record RefillRequest(String carId, double currentLiters, double liters) {}

    /** Quanto resta no tanque e o hodômetro (o jogo informa de tempos em tempos enquanto o carro roda). */
    @PostMapping("/report")
    public FuelService.FuelState report(@CurrentUser String userId, @RequestBody ReportRequest body) {
        return fuel.report(userId, body.carId(), body.liters(), body.odometerKm());
    }

    /** Abastecimento no posto, pago em moedas. */
    @PostMapping("/refill")
    public FuelService.RefillResult refill(@CurrentUser String userId, @RequestBody RefillRequest body) {
        return fuel.refill(userId, body.carId(), body.currentLiters(), body.liters());
    }
}
