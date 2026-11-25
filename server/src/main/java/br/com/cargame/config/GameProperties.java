package br.com.cargame.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/** Configurações do jogo (application.yml, prefixo "game"). */
@ConfigurationProperties(prefix = "game")
public record GameProperties(String staticDir, Session session, Economy economy, Rooms rooms) {

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
}
