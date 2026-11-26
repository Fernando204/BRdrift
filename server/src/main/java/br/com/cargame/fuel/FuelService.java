package br.com.cargame.fuel;

import br.com.cargame.auth.UserAccount;
import br.com.cargame.auth.UserAccountRepository;
import br.com.cargame.common.ApiException;
import br.com.cargame.common.Retry;
import br.com.cargame.config.GameProperties;
import br.com.cargame.garage.CarCatalog;
import br.com.cargame.garage.OwnedCar;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.stereotype.Service;

/**
 * Tanque de cada carro, guardado na garagem do jogador (vale em todos os modos com combustível:
 * salas online e táxi). O jogo calcula o consumo e informa quanto resta; o servidor só deixa o
 * nível descer por aí. Subir, só abastecendo no posto, pagando o litro em moedas.
 */
@Service
public class FuelService {
    private final UserAccountRepository users;
    private final CarCatalog catalog;
    private final GameProperties.Fuel fuel;

    public FuelService(UserAccountRepository users, CarCatalog catalog, GameProperties props) {
        this.users = users;
        this.catalog = catalog;
        this.fuel = props.fuel();
    }

    public record FuelState(String carId, double fuel, double tank) {}
    public record RefillResult(String carId, double liters, long cost, boolean courtesy, double fuel, double tank, long coins) {}

    /** Litros no tanque; um carro sem registro (recém-chegado à garagem) vem com parte do tanque. */
    public double level(CarCatalog.Car car, OwnedCar owned) {
        Double f = owned.getFuel();
        return f == null ? round(car.tankLiters() * fuel.startFraction()) : Math.min(f, car.tankLiters());
    }

    /** Nível de cada carro da garagem (vai no perfil). */
    public Map<String, Double> levels(UserAccount user) {
        Map<String, Double> out = new LinkedHashMap<>();
        for (OwnedCar owned : user.getCars()) out.put(owned.getCarId(), level(catalog.get(owned.getCarId()), owned));
        return out;
    }

    /** O jogo informa quanto resta: o nível só desce (informar mais do que tem não enche o tanque). */
    public FuelState report(String userId, String carId, double liters) {
        if (Double.isNaN(liters) || liters < 0) throw ApiException.badRequest("invalid_fuel", "Nível de combustível inválido.");
        CarCatalog.Car car = catalog.get(carId);
        return Retry.onConflict(() -> {
            UserAccount user = user(userId);
            OwnedCar owned = owned(user, carId);
            double level = Math.min(level(car, owned), round(liters));
            owned.setFuel(level);
            users.save(user);
            return new FuelState(carId, level, car.tankLiters());
        });
    }

    /**
     * Abastece no posto: até encher o tanque ou acabar o dinheiro (litros com uma casa decimal).
     * Em pane seca e sem moedas para o mínimo, o frentista quebra o galho com alguns litros de graça.
     */
    public RefillResult refill(String userId, String carId, double currentLiters, double liters) {
        if (Double.isNaN(currentLiters) || currentLiters < 0 || Double.isNaN(liters) || liters <= 0)
            throw ApiException.badRequest("invalid_fuel", "Quantidade de combustível inválida.");
        CarCatalog.Car car = catalog.get(carId);
        return Retry.onConflict(() -> {
            UserAccount user = user(userId);
            OwnedCar owned = owned(user, carId);
            double level = Math.min(level(car, owned), round(currentLiters));
            double room = car.tankLiters() - level;
            if (room < 0.05) throw ApiException.badRequest("tank_full", "O tanque já está cheio.");
            double add = Math.min(round(liters), room);
            double price = fuel.pricePerLiter();
            boolean courtesy = false;
            if (user.getCoins() < Math.ceil(add * price - 1e-9)) {
                double affordable = Math.floor(user.getCoins() / price * 10) / 10;
                if (affordable < fuel.courtesyLiters() && level < 1) {
                    add = Math.min(fuel.courtesyLiters(), room);
                    courtesy = true;
                } else {
                    add = affordable;
                }
            }
            if (add < 0.05) throw ApiException.badRequest("insufficient_coins", "Moedas insuficientes para abastecer.");
            long cost = courtesy ? 0 : (long) Math.ceil(add * price - 1e-9);
            user.setCoins(user.getCoins() - cost);
            owned.setFuel(round(level + add));
            users.save(user);
            return new RefillResult(carId, round(add), cost, courtesy, owned.getFuel(), car.tankLiters(), user.getCoins());
        });
    }

    private UserAccount user(String userId) {
        return users.findById(userId).orElseThrow(() -> ApiException.unauthorized("Sessão inválida."));
    }

    private static OwnedCar owned(UserAccount user, String carId) {
        return user.car(carId).orElseThrow(() -> ApiException.badRequest("not_owned", "Você não tem esse carro."));
    }

    private static double round(double liters) {
        return Math.round(liters * 100) / 100.0;
    }
}
