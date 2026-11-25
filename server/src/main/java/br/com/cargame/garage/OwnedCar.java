package br.com.cargame.garage;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

/** Carro na garagem de um jogador, com a pintura de cada peça e o rebaixamento. */
@Entity
@Table(name = "owned_car", uniqueConstraints = @UniqueConstraint(columnNames = {"userId", "carId"}))
public class OwnedCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false, length = 32)
    private String carId;

    /** JSON {peça: "#rrggbb"}; peças ausentes usam a cor original do carro. */
    @Column(nullable = false, length = 4000)
    private String colorsJson = "{}";

    /** Rebaixamento de 0 (original) a 1 (máximo do carro). */
    private double lowering;

    protected OwnedCar() {}

    public OwnedCar(Long userId, String carId) {
        this.userId = userId;
        this.carId = carId;
    }

    public Long getUserId() { return userId; }
    public String getCarId() { return carId; }
    public String getColorsJson() { return colorsJson; }
    public void setColorsJson(String colorsJson) { this.colorsJson = colorsJson; }
    public double getLowering() { return lowering; }
    public void setLowering(double lowering) { this.lowering = lowering; }
}
