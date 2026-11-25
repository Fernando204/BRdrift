package br.com.cargame.mp;

import java.time.Instant;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/** Uma sala: a global (sem senha) ou uma privada (com senha, criada por um jogador). */
public class Room {
    private final String id;
    private final String name;
    private final String map;
    private final int maxPlayers;
    private final String passwordHash;   // null na sala global
    private final Long ownerId;
    private final Instant createdAt = Instant.now();
    private volatile Instant emptySince = Instant.now();
    private final Map<Long, Player> players = new ConcurrentHashMap<>();

    public Room(String id, String name, String map, int maxPlayers, String passwordHash, Long ownerId) {
        this.id = id;
        this.name = name;
        this.map = map;
        this.maxPlayers = maxPlayers;
        this.passwordHash = passwordHash;
        this.ownerId = ownerId;
    }

    public String id() { return id; }
    public String name() { return name; }
    public String map() { return map; }
    public int maxPlayers() { return maxPlayers; }
    public String passwordHash() { return passwordHash; }
    public Long ownerId() { return ownerId; }
    public boolean isPrivate() { return passwordHash != null; }
    public Instant createdAt() { return createdAt; }
    public Instant emptySince() { return emptySince; }
    public Collection<Player> players() { return players.values(); }
    public int size() { return players.size(); }

    boolean add(Player p) {
        synchronized (players) {
            if (players.size() >= maxPlayers) return false;
            players.put(p.userId(), p);
            emptySince = null;
            return true;
        }
    }

    void remove(Long userId) {
        synchronized (players) {
            players.remove(userId);
            if (players.isEmpty()) emptySince = Instant.now();
        }
    }
}
