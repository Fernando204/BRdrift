package br.com.cargame.auth;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserAccountRepository extends MongoRepository<UserAccount, String> {
    Optional<UserAccount> findByUsernameKey(String usernameKey);
    boolean existsByUsernameKey(String usernameKey);
    List<UserAccount> findTop20ByBestDriftGreaterThanOrderByBestDriftDesc(long min);
}
