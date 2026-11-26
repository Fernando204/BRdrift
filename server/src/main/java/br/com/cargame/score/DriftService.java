package br.com.cargame.score;

import br.com.cargame.auth.UserAccount;
import br.com.cargame.auth.UserAccountRepository;
import br.com.cargame.common.ApiException;
import br.com.cargame.common.Retry;
import br.com.cargame.config.GameProperties;
import java.time.Duration;
import java.time.Instant;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 * Converte pontos de drift em moedas. O cliente calcula a pontuação; o servidor confere se ela é
 * plausível (pontos por segundo, duração máxima e intervalo mínimo entre drifts) antes de pagar.
 */
@Service
public class DriftService {
    private final UserAccountRepository users;
    private final GameProperties.Economy economy;

    public DriftService(UserAccountRepository users, GameProperties props) {
        this.users = users;
        this.economy = props.economy();
    }

    public record DriftResult(long coinsEarned, long coins, long bestDrift, boolean newRecord) {}
    public record Entry(String username, long bestDrift, long totalDriftPoints) {}

    public DriftResult bank(String userId, long points, long durationMs) {
        if (durationMs < 500 || durationMs > economy.maxDriftSeconds() * 1000L)
            throw ApiException.badRequest("invalid_drift", "Duração de drift inválida.");
        if (points <= 0 || points > durationMs / 1000.0 * economy.maxDriftPointsPerSecond())
            throw ApiException.badRequest("invalid_drift", "Pontuação de drift inválida.");
        return Retry.onConflict(() -> bankOnce(userId, points, durationMs));
    }

    private DriftResult bankOnce(String userId, long points, long durationMs) {
        UserAccount user = users.findById(userId).orElseThrow(() -> ApiException.unauthorized("Sessão inválida."));
        Instant now = Instant.now();
        // um drift não pode ser registrado antes de ele ter tido tempo de acontecer
        if (user.getLastDriftBankAt() != null
                && Duration.between(user.getLastDriftBankAt(), now).toMillis() < durationMs * 0.8)
            throw ApiException.badRequest("drift_too_fast", "Drifts registrados rápido demais.");
        long coins = (long) Math.floor(points * economy.coinsPerPoint());
        boolean record = points > user.getBestDrift();
        user.setCoins(user.getCoins() + coins);
        user.setTotalDriftPoints(user.getTotalDriftPoints() + points);
        if (record) user.setBestDrift(points);
        user.setLastDriftBankAt(now);
        users.save(user);   // @Version: dois drifts registrados ao mesmo tempo não somam em dobro
        return new DriftResult(coins, user.getCoins(), user.getBestDrift(), record);
    }

    public List<Entry> leaderboard() {
        return users.findTop20ByBestDriftGreaterThanOrderByBestDriftDesc(0).stream()
                .map(u -> new Entry(u.getUsername(), u.getBestDrift(), u.getTotalDriftPoints())).toList();
    }
}
