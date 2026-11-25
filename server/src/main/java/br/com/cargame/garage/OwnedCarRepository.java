package br.com.cargame.garage;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnedCarRepository extends JpaRepository<OwnedCar, Long> {
    List<OwnedCar> findByUserIdOrderByIdAsc(Long userId);
    Optional<OwnedCar> findByUserIdAndCarId(Long userId, String carId);
    boolean existsByUserId(Long userId);
}
