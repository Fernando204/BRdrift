package br.com.cargame.auth;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    Optional<UserAccount> findByUsernameKey(String usernameKey);
    boolean existsByUsernameKey(String usernameKey);
    List<UserAccount> findTop20ByBestDriftGreaterThanOrderByBestDriftDesc(long min);
}
