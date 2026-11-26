package br.com.cargame.auth;

import br.com.cargame.garage.OwnedCar;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Version;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Conta do jogador (coleção "users"): credenciais, moedas, recordes e a garagem.
 * Os carros ficam dentro do próprio documento, então comprar, pintar ou mexer na suspensão
 * grava um único documento de uma vez (atômico no MongoDB, sem transação).
 */
@Document("users")
public class UserAccount {
    @Id
    private String id;

    /** Nome como o jogador digitou (exibido). */
    private String username;

    /** Nome em minúsculas, com índice único: "Fulano" e "fulano" não coexistem. */
    @Indexed(unique = true)
    private String usernameKey;

    private String passwordHash;
    private long coins;
    private String selectedCar;

    @Indexed
    private long bestDrift;
    private long totalDriftPoints;
    private Instant lastDriftBankAt;
    private long taxiRides;
    private long taxiCoins;
    private Instant lastTaxiAt;
    private Instant createdAt = Instant.now();

    /** Carros da garagem, na ordem em que foram conseguidos. */
    private List<OwnedCar> cars = new ArrayList<>();

    /** Bloqueio otimista: duas compras simultâneas não gastam o mesmo saldo. */
    @Version
    private Long version;

    protected UserAccount() {}

    public UserAccount(String username, String passwordHash) {
        this.username = username;
        this.usernameKey = username.toLowerCase();
        this.passwordHash = passwordHash;
    }

    public String getId() { return id; }
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
    public long getTaxiRides() { return taxiRides; }
    public void setTaxiRides(long taxiRides) { this.taxiRides = taxiRides; }
    public long getTaxiCoins() { return taxiCoins; }
    public void setTaxiCoins(long taxiCoins) { this.taxiCoins = taxiCoins; }
    public Instant getLastTaxiAt() { return lastTaxiAt; }
    public void setLastTaxiAt(Instant lastTaxiAt) { this.lastTaxiAt = lastTaxiAt; }

    public List<OwnedCar> getCars() { return cars; }

    public Optional<OwnedCar> car(String carId) {
        return cars.stream().filter(c -> c.getCarId().equals(carId)).findFirst();
    }
}
