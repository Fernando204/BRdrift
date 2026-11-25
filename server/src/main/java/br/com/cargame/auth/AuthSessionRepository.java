package br.com.cargame.auth;

import java.time.Instant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthSessionRepository extends MongoRepository<AuthSession, String> {
    long deleteByExpiresAtBefore(Instant now);
}
