package br.com.cargame.auth;

import br.com.cargame.garage.ProfileService;
import br.com.cargame.garage.ProfileService.Profile;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** Criar conta, entrar, sair e consultar o perfil logado. */
@RestController
@RequestMapping("/api")
public class AuthController {
    private final AuthService auth;
    private final SessionCookies cookies;
    private final ProfileService profiles;

    public AuthController(AuthService auth, SessionCookies cookies, ProfileService profiles) {
        this.auth = auth;
        this.cookies = cookies;
        this.profiles = profiles;
    }

    public record Credentials(@NotNull String username, @NotNull String password) {}

    @PostMapping("/auth/register")
    public ResponseEntity<Profile> register(@RequestBody Credentials body, HttpServletRequest request) {
        var login = auth.register(body.username(), body.password());
        return ResponseEntity.status(HttpStatus.CREATED)
                .header(HttpHeaders.SET_COOKIE, cookies.create(login.token(), request.isSecure()).toString())
                .body(profiles.profile(login.user().getId()));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Profile> login(@RequestBody Credentials body, HttpServletRequest request) {
        var login = auth.login(body.username(), body.password());
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookies.create(login.token(), request.isSecure()).toString())
                .body(profiles.profile(login.user().getId()));
    }

    @PostMapping("/auth/logout")
    public ResponseEntity<Void> logout(HttpServletRequest request) {
        auth.logout(cookies.read(request));
        return ResponseEntity.noContent().header(HttpHeaders.SET_COOKIE, cookies.clear(request.isSecure()).toString()).build();
    }

    @GetMapping("/me")
    public Profile me(@CurrentUser Long userId) {
        return profiles.profile(userId);
    }
}
