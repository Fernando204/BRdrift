package br.com.cargame.garage;

import br.com.cargame.auth.UserAccount;
import br.com.cargame.auth.UserAccountRepository;
import br.com.cargame.common.ApiException;
import br.com.cargame.config.GameProperties;
import java.util.Map;
import java.util.regex.Pattern;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Regras da economia (sempre no servidor, para o cliente não conseguir trapacear):
 * carro inicial grátis, compra de carros, pintura por peça (carro inteiro com desconto) e suspensão.
 */
@Service
public class GarageService {
    private static final Pattern HEX = Pattern.compile("^#[0-9a-fA-F]{6}$");

    private final UserAccountRepository users;
    private final OwnedCarRepository cars;
    private final CarCatalog catalog;
    private final ProfileService profiles;
    private final GameProperties.Economy economy;

    public GarageService(UserAccountRepository users, OwnedCarRepository cars, CarCatalog catalog,
                         ProfileService profiles, GameProperties props) {
        this.users = users;
        this.cars = cars;
        this.catalog = catalog;
        this.profiles = profiles;
        this.economy = props.economy();
    }

    /** Primeiro acesso: o jogador escolhe um carro de graça (só uma vez). */
    @Transactional
    public void chooseStarter(Long userId, String carId) {
        catalog.get(carId);
        if (cars.existsByUserId(userId)) throw ApiException.conflict("starter_taken", "O carro inicial já foi escolhido.");
        cars.save(new OwnedCar(userId, carId));
        profiles.user(userId).setSelectedCar(carId);
    }

    @Transactional
    public void buy(Long userId, String carId) {
        CarCatalog.Car car = catalog.get(carId);
        if (cars.findByUserIdAndCarId(userId, carId).isPresent()) throw ApiException.conflict("already_owned", "Você já tem esse carro.");
        if (!cars.existsByUserId(userId)) throw ApiException.badRequest("starter_first", "Escolha o carro inicial primeiro.");
        charge(profiles.user(userId), car.price());
        cars.save(new OwnedCar(userId, carId));
    }

    @Transactional
    public void select(Long userId, String carId) {
        owned(userId, carId);
        profiles.user(userId).setSelectedCar(carId);
    }

    /** Preço de pintar as peças pedidas (as que já têm a cor pedida não são cobradas). */
    public long paintCost(CarCatalog.Car car, Map<String, String> current, Map<String, String> requested, String fullColor) {
        if (fullColor != null) {
            long sum = (long) car.parts().size() * economy.paintPartPrice();
            return Math.round(sum * (1 - economy.fullPaintDiscount()));
        }
        long changed = requested.entrySet().stream()
                .filter(e -> !e.getValue().equalsIgnoreCase(current.getOrDefault(e.getKey(), car.defaultColorOf(e.getKey()))))
                .count();
        return changed * economy.paintPartPrice();
    }

    @Transactional
    public long paint(Long userId, String carId, Map<String, String> requested, String fullColor) {
        CarCatalog.Car car = catalog.get(carId);
        OwnedCar owned = owned(userId, carId);
        Map<String, String> colors = profiles.colors(owned);
        Map<String, String> wanted = requested == null ? Map.of() : requested;
        if (fullColor != null && !HEX.matcher(fullColor).matches()) throw ApiException.badRequest("invalid_color", "Cor inválida.");
        if (fullColor == null && wanted.isEmpty()) throw ApiException.badRequest("nothing_to_paint", "Escolha ao menos uma peça.");
        for (var e : wanted.entrySet()) {
            if (!car.hasPart(e.getKey())) throw ApiException.badRequest("unknown_part", "Peça desconhecida: " + e.getKey());
            if (e.getValue() == null || !HEX.matcher(e.getValue()).matches()) throw ApiException.badRequest("invalid_color", "Cor inválida.");
        }
        long cost = paintCost(car, colors, wanted, fullColor);
        charge(profiles.user(userId), cost);
        if (fullColor != null) car.parts().forEach(p -> colors.put(p.id(), fullColor.toLowerCase()));
        else wanted.forEach((part, hex) -> colors.put(part, hex.toLowerCase()));
        owned.setColorsJson(profiles.writeColors(colors));
        return cost;
    }

    /** Custo de mudar a altura: por centímetro alterado (baixar ou erguer). */
    public long suspensionCost(CarCatalog.Car car, double from, double to) {
        double cm = Math.abs(to - from) * car.maxDropCm();
        return (long) Math.ceil(cm - 1e-9) * economy.suspensionPricePerCm();
    }

    @Transactional
    public long suspension(Long userId, String carId, double lowering) {
        if (Double.isNaN(lowering) || lowering < 0 || lowering > 1) throw ApiException.badRequest("invalid_height", "Altura inválida.");
        CarCatalog.Car car = catalog.get(carId);
        OwnedCar owned = owned(userId, carId);
        long cost = suspensionCost(car, owned.getLowering(), lowering);
        charge(profiles.user(userId), cost);
        owned.setLowering(lowering);
        return cost;
    }

    private OwnedCar owned(Long userId, String carId) {
        catalog.get(carId);
        return cars.findByUserIdAndCarId(userId, carId)
                .orElseThrow(() -> ApiException.badRequest("not_owned", "Você não tem esse carro."));
    }

    private static void charge(UserAccount user, long cost) {
        if (cost <= 0) return;
        if (user.getCoins() < cost)
            throw ApiException.badRequest("insufficient_coins", "Moedas insuficientes: faltam " + (cost - user.getCoins()) + ".");
        user.setCoins(user.getCoins() - cost);
    }
}
