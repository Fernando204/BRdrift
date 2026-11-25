package br.com.cargame.garage;

import br.com.cargame.auth.UserAccount;
import br.com.cargame.auth.UserAccountRepository;
import br.com.cargame.common.ApiException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

/** Monta o perfil do jogador (moedas, carros, pintura, rebaixamento, recordes). */
@Service
public class ProfileService {
    private final UserAccountRepository users;

    public ProfileService(UserAccountRepository users) {
        this.users = users;
    }

    /** Aparência de um carro: o que os outros jogadores precisam para desenhá-lo. */
    public record Look(String carId, Map<String, String> colors, double lowering) {}

    public record Profile(String username, long coins, String selectedCar, boolean needsStarter,
                          List<Look> cars, long bestDrift, long totalDriftPoints) {}

    public Profile profile(String userId) {
        UserAccount u = user(userId);
        List<Look> owned = u.getCars().stream().map(ProfileService::look).toList();
        return new Profile(u.getUsername(), u.getCoins(), u.getSelectedCar(), owned.isEmpty(), owned,
                u.getBestDrift(), u.getTotalDriftPoints());
    }

    /** Aparência do carro selecionado (usada nas salas multiplayer). */
    public Look selectedLook(String userId) {
        UserAccount u = user(userId);
        if (u.getSelectedCar() == null) return new Look("chevette", Map.of(), 0);
        return u.car(u.getSelectedCar()).map(ProfileService::look).orElse(new Look(u.getSelectedCar(), Map.of(), 0));
    }

    public String username(String userId) {
        return user(userId).getUsername();
    }

    static Look look(OwnedCar car) {
        return new Look(car.getCarId(), new LinkedHashMap<>(car.getColors()), car.getLowering());
    }

    UserAccount user(String userId) {
        return users.findById(userId).orElseThrow(() -> ApiException.unauthorized("Sessão inválida."));
    }
}
