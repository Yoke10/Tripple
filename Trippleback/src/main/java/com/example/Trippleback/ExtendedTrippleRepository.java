package com.example.Trippleback;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExtendedTrippleRepository extends JpaRepository<ExtendedTrippleEntity, Long> {
    Optional<ExtendedTrippleEntity> findByRiderEmail(String email);
}
