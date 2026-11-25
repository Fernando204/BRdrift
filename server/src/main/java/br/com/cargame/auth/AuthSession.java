package br.com.cargame.auth;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import java.time.Instant;

/**
 * Sessão de login. O cookie guarda um token aleatório; aqui fica só o hash SHA-256 dele,
 * então um vazamento do banco não permite entrar na conta de ninguém.
 */
@Entity
@Table(name = "auth_session", indexes = @Index(columnList = "userId"))
public class AuthSession {
    @Id
    @Column(length = 64)
    private String tokenHash;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Instant expiresAt;

    protected AuthSession() {}

    public AuthSession(String tokenHash, Long userId, Instant expiresAt) {
        this.tokenHash = tokenHash;
        this.userId = userId;
        this.expiresAt = expiresAt;
    }

    public String getTokenHash() { return tokenHash; }
    public Long getUserId() { return userId; }
    public Instant getExpiresAt() { return expiresAt; }
}
