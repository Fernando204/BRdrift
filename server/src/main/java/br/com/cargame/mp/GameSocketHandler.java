package br.com.cargame.mp;

import br.com.cargame.common.ApiException;
import br.com.cargame.garage.ProfileService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.ConcurrentWebSocketSessionDecorator;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 * Protocolo (JSON, campo "t"):
 *   cliente -> servidor: join {room, password?} · s {p:[números], f:int} · look · leave · ping
 *   servidor -> cliente: welcome {you, room, players} · join {player} · leave {id} · s {id, p, f}
 *                        · look {id, look} · error {code, message} · kicked {message} · pong
 * O servidor só repassa o estado de cada carro aos outros jogadores da sala; a aparência (carro,
 * pintura, altura) vem sempre do banco, então ninguém mostra uma pintura que não comprou.
 */
@Component
public class GameSocketHandler extends TextWebSocketHandler {
    private static final int MAX_STATE_VALUES = 12;
    private static final int MAX_MESSAGES_PER_SECOND = 40;

    private final RoomService rooms;
    private final ProfileService profiles;
    private final ObjectMapper json;
    private final Map<Long, Player> online = new ConcurrentHashMap<>();

    public GameSocketHandler(RoomService rooms, ProfileService profiles, ObjectMapper json) {
        this.rooms = rooms;
        this.profiles = profiles;
        this.json = json;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession raw) {
        Long userId = (Long) raw.getAttributes().get(SocketAuthInterceptor.USER_ATTR);
        WebSocketSession session = new ConcurrentWebSocketSessionDecorator(raw, 5_000, 256 * 1024);
        Player player = new Player(userId, profiles.username(userId), session, profiles.selectedLook(userId));
        Player previous = online.put(userId, player);
        if (previous != null) {   // a mesma conta entrou de outro lugar: derruba a conexão antiga
            leave(previous);
            previous.send(obj("kicked").put("message", "Sua conta entrou em outra janela.").toString());
            closeQuietly(previous.session());
        }
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        Player player = online.get((Long) session.getAttributes().get(SocketAuthInterceptor.USER_ATTR));
        if (player == null || !sameSession(player, session)) return;   // conexão antiga, já substituída
        if (!player.allowMessage(MAX_MESSAGES_PER_SECOND)) return;
        JsonNode msg;
        try {
            msg = json.readTree(message.getPayload());
        } catch (IOException e) {
            return;
        }
        String type = msg.path("t").asText();
        try {
            switch (type) {
                case "join" -> join(player, msg.path("room").asText(), msg.path("password").asText(null));
                case "s" -> relayState(player, msg);
                case "look" -> refreshLook(player);
                case "leave" -> leave(player);
                case "ping" -> player.send(obj("pong").toString());
                default -> { }
            }
        } catch (ApiException e) {
            player.send(obj("error").put("code", e.code()).put("message", e.getMessage()).toString());
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        Long userId = (Long) session.getAttributes().get(SocketAuthInterceptor.USER_ATTR);
        Player player = online.get(userId);
        if (player != null && sameSession(player, session)) {
            online.remove(userId);
            leave(player);
        }
    }

    private void join(Player player, String roomId, String password) {
        Room room = rooms.checkJoin(roomId, password);
        if (player.room() == room) return;
        leave(player);
        player.look(profiles.selectedLook(player.userId()));
        if (!room.add(player)) throw ApiException.badRequest("room_full", "A sala está cheia.");
        player.room(room);
        ObjectNode welcome = obj("welcome").put("you", player.userId());
        welcome.set("room", json.valueToTree(rooms.info(room, player.userId())));
        ArrayNode list = welcome.putArray("players");
        for (Player other : room.players()) if (other != player) list.add(describe(other));
        player.send(welcome.toString());
        ObjectNode joined = obj("join");
        joined.set("player", describe(player));
        broadcast(room, player, joined.toString());
    }

    private void relayState(Player player, JsonNode msg) {
        Room room = player.room();
        JsonNode p = msg.path("p");
        if (room == null || !p.isArray() || p.size() > MAX_STATE_VALUES) return;
        ObjectNode out = obj("s").put("id", player.userId()).put("f", msg.path("f").asInt(0));
        ArrayNode values = out.putArray("p");
        for (JsonNode v : p) {
            double d = v.asDouble();
            if (!Double.isFinite(d)) return;
            values.add(Math.round(d * 1000) / 1000.0);   // 1 mm de precisão basta e reduz o tráfego
        }
        broadcast(room, player, out.toString());
    }

    /** Depois de passar na oficina ou trocar de carro: recarrega a aparência do banco e avisa a sala. */
    private void refreshLook(Player player) {
        player.look(profiles.selectedLook(player.userId()));
        Room room = player.room();
        if (room == null) return;
        ObjectNode out = obj("look").put("id", player.userId());
        out.set("look", json.valueToTree(player.look()));
        broadcast(room, player, out.toString());
    }

    private void leave(Player player) {
        Room room = player.room();
        if (room == null) return;
        room.remove(player.userId());
        player.room(null);
        broadcast(room, player, obj("leave").put("id", player.userId()).toString());
        rooms.afterLeave(room);
    }

    private void broadcast(Room room, Player except, String text) {
        for (Player p : room.players()) if (p != except) p.send(text);
    }

    private ObjectNode describe(Player p) {
        ObjectNode node = json.createObjectNode().put("id", p.userId()).put("name", p.username());
        node.set("look", json.valueToTree(p.look()));
        return node;
    }

    private ObjectNode obj(String type) {
        return json.createObjectNode().put("t", type);
    }

    private static boolean sameSession(Player player, WebSocketSession session) {
        return player.session().getId().equals(session.getId());
    }

    private static void closeQuietly(WebSocketSession session) {
        try {
            session.close(CloseStatus.POLICY_VIOLATION);
        } catch (IOException ignored) {
            // já fechada
        }
    }
}
