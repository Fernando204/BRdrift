package br.com.cargame.garage;

import java.util.LinkedHashMap;
import java.util.Map;

/** Carro na garagem de um jogador (embutido no documento do usuário), com a pintura de cada peça e o rebaixamento. */
public class OwnedCar {
    private String carId;

    /** {peça: "#rrggbb"}; peças ausentes usam a cor original do carro. */
    private Map<String, String> colors = new LinkedHashMap<>();

    /** Rebaixamento de 0 (original) a 1 (máximo do carro). */
    private double lowering;

    /** Litros no tanque (null: ainda não rodou; começa com parte do tanque). */
    private Double fuel;

    /** Hodômetro: km rodados com este carro (só aumenta). */
    private double odometer;

    protected OwnedCar() {}

    public OwnedCar(String carId) {
        this.carId = carId;
    }

    public String getCarId() { return carId; }
    public Map<String, String> getColors() { return colors == null ? (colors = new LinkedHashMap<>()) : colors; }
    public double getLowering() { return lowering; }
    public void setLowering(double lowering) { this.lowering = lowering; }
    public Double getFuel() { return fuel; }
    public void setFuel(Double fuel) { this.fuel = fuel; }
    public double getOdometer() { return odometer; }
    public void setOdometer(double odometer) { this.odometer = odometer; }
}
