package br.com.cargame.garage;

import br.com.cargame.auth.UserAccount;
import br.com.cargame.auth.UserAccountRepository;
import br.com.cargame.common.ApiException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Monta o perfil do jogador (moedas, carros, pintura, rebaixamento, recordes). */
@Service
public class ProfileService {
    private static final TypeReference<Map<String, String>> COLORS = new TypeReference<>() {};

    private final UserAccountRepository users;
    private final OwnedCarRepository cars;
    private final ObjectMapper json;

    public ProfileService(UserAccountRepository users, OwnedCarRepository cars, ObjectMapper json) {
        this.users = users;
        this.cars = cars;
        this.json = json;
    }

    /** Aparência de um carro: o que os outros jogadores precisam para desenhá-lo. */
    public record Look(String carId, Map<String, String> colors, double lowering) {}

    public record Profile(String username, long coins, String selectedCar, boolean needsStarter,
                          List<Look> cars, long bestDrift, long totalDriftPoints) {}

    @Transactional(readOnly = true)
    public Profile profile(Long userId) {
        UserAccount u = user(userId);
        List<Look> owned = cars.findByUserIdOrderByIdAsc(userId).stream().map(this::look).toList();
        return new Profile(u.getUsername(), u.getCoins(), u.getSelectedCar(), owned.isEmpty(), owned,
                u.getBestDrift(), u.getTotalDriftPoints());
    }

    /** Aparência do carro selecionado (usada nas salas multiplayer). */
    @Transactional(readOnly = true)
    public Look selectedLook(Long userId) {
        UserAccount u = user(userId);
        if (u.getSelectedCar() == null) return new Look("chevette", Map.of(), 0);
        return cars.findByUserIdAndCarId(userId, u.getSelectedCar()).map(this::look)
                .orElse(new Look(u.getSelectedCar(), Map.of(), 0));
    }

    @Transactional(readOnly = true)
    public String username(Long userId) {
        return user(userId).getUsername();
    }

    Look look(OwnedCar car) {
        return new Look(car.getCarId(), colors(car), car.getLowering());
    }

    Map<String, String> colors(OwnedCar car) {
        try {
            return new LinkedHashMap<>(json.readValue(car.getColorsJson(), COLORS));
        } catch (JsonProcessingException e) {
            return new LinkedHashMap<>();
        }
    }

    String writeColors(Map<String, String> colors) {
        try {
            return json.writeValueAsString(colors);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException(e);
        }
    }

    UserAccount user(Long userId) {
        return users.findById(userId).orElseThrow(() -> ApiException.unauthorized("Sessão inválida."));
    }
}
