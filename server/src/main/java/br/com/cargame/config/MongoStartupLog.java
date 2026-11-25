package br.com.cargame.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

/** Mostra no log em qual banco o jogo está gravando (só o nome: nada de usuário, senha ou endereço). */
@Component
public class MongoStartupLog implements ApplicationRunner {
    private static final Logger log = LoggerFactory.getLogger(MongoStartupLog.class);
    private final MongoTemplate mongo;

    public MongoStartupLog(MongoTemplate mongo) {
        this.mongo = mongo;
    }

    @Override
    public void run(ApplicationArguments args) {
        log.info("MongoDB: usando o banco \"{}\"", mongo.getDb().getName());
    }
}
