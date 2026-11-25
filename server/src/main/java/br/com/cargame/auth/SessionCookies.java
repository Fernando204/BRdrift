package br.com.cargame.auth;

import br.com.cargame.config.GameProperties;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import java.time.Duration;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

/** Cookie da sessão: HttpOnly (o JavaScript não lê), SameSite=Lax e Secure quando em HTTPS. */
@Component
public class SessionCookies {
    private final String name;
    private final Duration maxAge;

    public SessionCookies(GameProperties props) {
        this.name = props.session().cookieName();
        this.maxAge = Duration.ofDays(props.session().days());
    }

    public String name() { return name; }

    public String read(HttpServletRequest request) {
        if (request.getCookies() == null) return null;
        for (Cookie c : request.getCookies()) if (name.equals(c.getName())) return c.getValue();
        return null;
    }

    public ResponseCookie create(String token, boolean secure) {
        return ResponseCookie.from(name, token).httpOnly(true).secure(secure).sameSite("Lax").path("/").maxAge(maxAge).build();
    }

    public ResponseCookie clear(boolean secure) {
        return ResponseCookie.from(name, "").httpOnly(true).secure(secure).sameSite("Lax").path("/").maxAge(0).build();
    }
}
