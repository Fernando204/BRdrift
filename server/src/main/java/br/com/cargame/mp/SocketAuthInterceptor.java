package br.com.cargame.mp;

import br.com.cargame.auth.AuthService;
import br.com.cargame.auth.SessionCookies;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

/** O WebSocket usa o mesmo cookie de login: sem sessão válida, a conexão é recusada (401). */
@Component
public class SocketAuthInterceptor implements HandshakeInterceptor {
    static final String USER_ATTR = "userId";

    private final AuthService auth;
    private final SessionCookies cookies;

    public SocketAuthInterceptor(AuthService auth, SessionCookies cookies) {
        this.auth = auth;
        this.cookies = cookies;
    }

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler handler, Map<String, Object> attributes) {
        if (!(request instanceof ServletServerHttpRequest servlet)) return false;
        HttpServletRequest http = servlet.getServletRequest();
        var userId = auth.resolve(cookies.read(http));
        if (userId.isEmpty()) {
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return false;
        }
        attributes.put(USER_ATTR, userId.get());
        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler handler, Exception exception) {}
}
