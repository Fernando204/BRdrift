package br.com.cargame;

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
        SpringApplication.run(CarGameApplication.class, args);
    }
}
