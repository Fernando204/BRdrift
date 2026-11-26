package br.com.cargame.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/** Configurações do jogo (application.yml, prefixo "game"). */
@ConfigurationProperties(prefix = "game")
public record GameProperties(String staticDir, Session session, Economy economy, Rooms rooms, Taxi taxi) {

    public record Session(String cookieName, int days) {}

    public record Economy(
            int carPrice,
            int paintPartPrice,
            double fullPaintDiscount,
            int suspensionPricePerCm,
            double coinsPerPoint,
            int maxDriftPointsPerSecond,
            int maxDriftSeconds) {}

    public record Rooms(String globalMap, int globalMaxPlayers, int privateMaxPlayers) {}

    /** Modo táxi: bandeirada + preço por km da rota; limites para conferir a corrida. */
    public record Taxi(int baseFare, int perKm, int minRouteMeters, int maxRouteMeters, double maxAverageSpeed, int maxMinutes) {}
}
