package br.com.cargame.score;

import br.com.cargame.auth.CurrentUser;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ScoreController {
    private final DriftService drifts;

    public ScoreController(DriftService drifts) {
        this.drifts = drifts;
    }

    public record DriftRequest(long points, long durationMs) {}

    @PostMapping("/score/drift")
    public DriftService.DriftResult drift(@CurrentUser Long userId, @RequestBody DriftRequest body) {
        return drifts.bank(userId, body.points(), body.durationMs());
    }

    /** Público: melhores drifts. */
    @GetMapping("/leaderboard")
    public List<DriftService.Entry> leaderboard() {
        return drifts.leaderboard();
    }
}
