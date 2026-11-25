package br.com.cargame.auth;

import java.time.Instant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface AuthSessionRepository extends JpaRepository<AuthSession, String> {
    @Modifying
    @Transactional
    @Query("delete from AuthSession s where s.expiresAt < :now")
    int deleteExpired(Instant now);
}
