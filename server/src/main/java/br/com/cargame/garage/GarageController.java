package br.com.cargame.garage;

import br.com.cargame.auth.CurrentUser;
import br.com.cargame.config.GameProperties;
import br.com.cargame.garage.ProfileService.Profile;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** Catálogo (público), carro inicial, loja e oficina. Toda operação devolve o perfil atualizado. */
@RestController
@RequestMapping("/api")
public class GarageController {
    private final GarageService garage;
    private final ProfileService profiles;
    private final CarCatalog catalog;
    private final GameProperties.Economy economy;

    public GarageController(GarageService garage, ProfileService profiles, CarCatalog catalog, GameProperties props) {
        this.garage = garage;
        this.profiles = profiles;
        this.catalog = catalog;
        this.economy = props.economy();
    }

    public record CatalogResponse(List<CarCatalog.Car> cars, int paintPartPrice, double fullPaintDiscount,
                                  int suspensionPricePerCm, double coinsPerPoint) {}
    public record CarRequest(String carId) {}
    public record PaintRequest(String carId, Map<String, String> colors, String fullColor) {}
    public record SuspensionRequest(String carId, double lowering) {}
    public record Result(Profile profile, long cost) {}

    @GetMapping("/catalog")
    public CatalogResponse catalog() {
        return new CatalogResponse(catalog.all(), economy.paintPartPrice(), economy.fullPaintDiscount(),
                economy.suspensionPricePerCm(), economy.coinsPerPoint());
    }

    @PostMapping("/garage/starter")
    public Profile starter(@CurrentUser String userId, @RequestBody CarRequest body) {
        garage.chooseStarter(userId, body.carId());
        return profiles.profile(userId);
    }

    @PostMapping("/garage/select")
    public Profile select(@CurrentUser String userId, @RequestBody CarRequest body) {
        garage.select(userId, body.carId());
        return profiles.profile(userId);
    }

    @PostMapping("/shop/buy")
    public Profile buy(@CurrentUser String userId, @RequestBody CarRequest body) {
        garage.buy(userId, body.carId());
        return profiles.profile(userId);
    }

    @PostMapping("/garage/paint")
    public Result paint(@CurrentUser String userId, @RequestBody PaintRequest body) {
        long cost = garage.paint(userId, body.carId(), body.colors(), body.fullColor());
        return new Result(profiles.profile(userId), cost);
    }

    @PostMapping("/garage/suspension")
    public Result suspension(@CurrentUser String userId, @RequestBody SuspensionRequest body) {
        long cost = garage.suspension(userId, body.carId(), body.lowering());
        return new Result(profiles.profile(userId), cost);
    }
}
