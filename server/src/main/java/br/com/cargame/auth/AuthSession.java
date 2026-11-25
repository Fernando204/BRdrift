package br.com.cargame.auth;

import java.time.Instant;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Sessão de login (coleção "sessions"). O cookie guarda um token aleatório; aqui fica só o hash
 * SHA-256 dele, então um vazamento do banco não permite entrar na conta de ninguém.
 * O índice TTL em expiresAt faz o próprio MongoDB apagar as sessões vencidas.
 */
@Document("sessions")
public class AuthSession {
    @Id
    private String tokenHash;

    @Indexed
    private String userId;

    @Indexed(expireAfterSeconds = 0)
    private Instant expiresAt;

    protected AuthSession() {}

    public AuthSession(String tokenHash, String userId, Instant expiresAt) {
        this.tokenHash = tokenHash;
        this.userId = userId;
        this.expiresAt = expiresAt;
    }

    public String getTokenHash() { return tokenHash; }
    public String getUserId() { return userId; }
    public Instant getExpiresAt() { return expiresAt; }
}
