package br.com.cargame.auth;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import java.time.Instant;

/** Conta do jogador: credenciais, moedas e recordes. */
@Entity
@Table(name = "user_account")
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Nome como o jogador digitou (exibido). */
    @Column(nullable = false, length = 20)
    private String username;

    /** Nome em minúsculas: garante que "Fulano" e "fulano" não coexistam. */
    @Column(nullable = false, length = 20, unique = true)
    private String usernameKey;

    @Column(nullable = false, length = 72)
    private String passwordHash;

    private long coins;
    private String selectedCar;
    private long bestDrift;
    private long totalDriftPoints;
    private Instant lastDriftBankAt;

    @Column(nullable = false)
    private Instant createdAt = Instant.now();

    /** Bloqueio otimista: duas compras simultâneas não gastam o mesmo saldo. */
    @Version
    private long version;

    protected UserAccount() {}

    public UserAccount(String username, String passwordHash) {
        this.username = username;
        this.usernameKey = username.toLowerCase();
        this.passwordHash = passwordHash;
    }

    public Long getId() { return id; }
    public String getUsername() { return username; }
    public String getPasswordHash() { return passwordHash; }
    public long getCoins() { return coins; }
    public void setCoins(long coins) { this.coins = coins; }
    public String getSelectedCar() { return selectedCar; }
    public void setSelectedCar(String selectedCar) { this.selectedCar = selectedCar; }
    public long getBestDrift() { return bestDrift; }
    public void setBestDrift(long bestDrift) { this.bestDrift = bestDrift; }
    public long getTotalDriftPoints() { return totalDriftPoints; }
    public void setTotalDriftPoints(long totalDriftPoints) { this.totalDriftPoints = totalDriftPoints; }
    public Instant getLastDriftBankAt() { return lastDriftBankAt; }
    public void setLastDriftBankAt(Instant lastDriftBankAt) { this.lastDriftBankAt = lastDriftBankAt; }
}
