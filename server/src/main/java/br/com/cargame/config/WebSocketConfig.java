package br.com.cargame.config;

import br.com.cargame.mp.GameSocketHandler;
import br.com.cargame.mp.SocketAuthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

/** WebSocket do multiplayer em /ws (mesma origem do jogo, autenticado pelo cookie). */
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
    private final GameSocketHandler handler;
    private final SocketAuthInterceptor auth;

    public WebSocketConfig(GameSocketHandler handler, SocketAuthInterceptor auth) {
        this.handler = handler;
        this.auth = auth;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        // sem allowedOrigins: o Spring aceita só a mesma origem do jogo (sites de terceiros não usam o cookie)
        registry.addHandler(handler, "/ws").addInterceptors(auth);
    }
}
