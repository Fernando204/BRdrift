package br.com.cargame;

import br.com.cargame.config.MongoUri;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/** Servidor do jogo: contas, perfil, loja, oficina, pontuação de drift e salas multiplayer. */
@SpringBootApplication
@ConfigurationPropertiesScan
@EnableScheduling
public class CarGameApplication {
    public static void main(String[] args) {
        // confere CARGAME_MONGODB_URI antes de o Spring ler (valor colado com aspas, espaços etc.)
        String uri;
        try {
            uri = MongoUri.normalize(System.getenv(MongoUri.VARIABLE));
        } catch (IllegalStateException e) {
            System.err.println("ERRO DE CONFIGURAÇÃO: " + e.getMessage());
            System.exit(1);
            return;
        }
        if (uri != null) System.setProperty("spring.data.mongodb.uri", uri);
        SpringApplication.run(CarGameApplication.class, args);
    }
}
