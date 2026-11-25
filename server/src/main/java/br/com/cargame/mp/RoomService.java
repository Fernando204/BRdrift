package br.com.cargame.mp;

import br.com.cargame.common.ApiException;
import br.com.cargame.config.GameProperties;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/** Salas multiplayer: a global, sempre aberta, e as privadas (com senha), removidas quando ficam vazias. */
@Service
public class RoomService {
    public static final String GLOBAL_ID = "global";
    private static final Set<String> MAPS = Set.of("circuito", "salto");
    private static final String ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    private static final SecureRandom RANDOM = new SecureRandom();

    private final Map<String, Room> rooms = new ConcurrentHashMap<>();
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private final GameProperties.Rooms config;

    public RoomService(GameProperties props) {
        this.config = props.rooms();
        rooms.put(GLOBAL_ID, new Room(GLOBAL_ID, "Sala global", config.globalMap(), config.globalMaxPlayers(), null, null));
    }

    public record RoomInfo(String id, String name, String map, int players, int maxPlayers, boolean isPrivate, boolean mine) {}

    public List<RoomInfo> list(String viewerId) {
        return rooms.values().stream()
                .sorted(Comparator.comparing((Room r) -> !r.id().equals(GLOBAL_ID)).thenComparing(Room::createdAt))
                .map(r -> info(r, viewerId)).toList();
    }

    public RoomInfo info(Room r, String viewerId) {
        return new RoomInfo(r.id(), r.name(), r.map(), r.size(), r.maxPlayers(), r.isPrivate(), viewerId != null && viewerId.equals(r.ownerId()));
    }

    /** Cria uma sala privada; cada jogador mantém no máximo uma (a anterior, se vazia, é substituída). */
    public Room create(String ownerId, String name, String password, String map) {
        String n = name == null ? "" : name.trim();
        if (n.length() < 3 || n.length() > 24) throw ApiException.badRequest("invalid_room", "O nome da sala deve ter de 3 a 24 caracteres.");
        if (password == null || password.length() < 3 || password.length() > 32)
            throw ApiException.badRequest("invalid_room_password", "A senha da sala deve ter de 3 a 32 caracteres.");
        if (!MAPS.contains(map)) throw ApiException.badRequest("invalid_map", "Mapa desconhecido.");
        for (Room r : rooms.values()) {
            if (ownerId.equals(r.ownerId())) {
                if (r.size() > 0) throw ApiException.conflict("room_exists", "Você já tem uma sala aberta: " + r.name());
                rooms.remove(r.id());
            }
        }
        String id;
        do id = randomId(); while (rooms.containsKey(id));
        Room room = new Room(id, n, map, config.privateMaxPlayers(), encoder.encode(password), ownerId);
        rooms.put(id, room);
        return room;
    }

    /** Valida a entrada (sala existe, senha, lotação). A inclusão em si é feita pelo handler do WebSocket. */
    public Room checkJoin(String roomId, String password) {
        Room room = rooms.get(roomId);
        if (room == null) throw ApiException.notFound("room_not_found", "Sala não encontrada.");
        if (room.isPrivate() && (password == null || !encoder.matches(password, room.passwordHash())))
            throw ApiException.badRequest("wrong_password", "Senha da sala incorreta.");
        if (room.size() >= room.maxPlayers()) throw ApiException.badRequest("room_full", "A sala está cheia.");
        return room;
    }

    /** Ao sair o último jogador, a sala privada é removida. */
    public void afterLeave(Room room) {
        if (room.isPrivate() && room.size() == 0) rooms.remove(room.id());
    }

    /** Remove salas privadas criadas e nunca usadas (vazias por mais de 2 minutos). */
    @Scheduled(fixedDelay = 30_000)
    public void cleanup() {
        Instant limit = Instant.now().minus(Duration.ofMinutes(2));
        rooms.values().removeIf(r -> r.isPrivate() && r.size() == 0 && r.emptySince() != null && r.emptySince().isBefore(limit));
    }

    private static String randomId() {
        StringBuilder sb = new StringBuilder(6);
        for (int i = 0; i < 6; i++) sb.append(ALPHABET.charAt(RANDOM.nextInt(ALPHABET.length())));
        return sb.toString();
    }
}
