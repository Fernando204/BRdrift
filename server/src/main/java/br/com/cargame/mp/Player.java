package br.com.cargame.mp;

import br.com.cargame.garage.ProfileService.Look;
import java.io.IOException;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

/** Jogador conectado em uma sala. */
public class Player {
    private final Long userId;
    private final String username;
    private final WebSocketSession session;   // já decorado para envio seguro entre threads
    private volatile Look look;
    private volatile Room room;
    private long windowStart;
    private int messagesInWindow;

    public Player(Long userId, String username, WebSocketSession session, Look look) {
        this.userId = userId;
        this.username = username;
        this.session = session;
        this.look = look;
    }

    public Long userId() { return userId; }
    public String username() { return username; }
    public WebSocketSession session() { return session; }
    public Look look() { return look; }
    public void look(Look look) { this.look = look; }
    public Room room() { return room; }
    public void room(Room room) { this.room = room; }

    public void send(String json) {
        if (!session.isOpen()) return;
        try {
            session.sendMessage(new TextMessage(json));
        } catch (IOException | IllegalStateException e) {
            // conexão caindo: o fechamento remove o jogador da sala
        }
    }

    /** Limite de mensagens por segundo (protege a sala de clientes que inundam a conexão). */
    public synchronized boolean allowMessage(int perSecond) {
        long now = System.currentTimeMillis();
        if (now - windowStart >= 1000) { windowStart = now; messagesInWindow = 0; }
        return ++messagesInWindow <= perSecond;
    }
}
