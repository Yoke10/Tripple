package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class service {

    @Autowired
    private repo repo;

    public List<entity> getAllTripples() {
        return repo.findAll();
    }

    public Optional<entity> getTrippleById(int id) {
        return repo.findById(id);
    }

    public entity createTripple(entity tripple) {
        return repo.save(tripple);
    }

    public entity updateTripple(int id, entity trippleDetails) {
        Optional<entity> optionalTripple = repo.findById(id);
        if (optionalTripple.isPresent()) {
            entity tripple = optionalTripple.get();
            tripple.setName(trippleDetails.getName());
            tripple.setEmail(trippleDetails.getEmail());
            tripple.setPassword(trippleDetails.getPassword());
            tripple.setConfirmpassword(trippleDetails.getConfirmpassword());
            return repo.save(tripple);
        }
        return null;
    }

    public void deleteTripple(int id) {
        repo.deleteById(id);
    }

    public Optional<entity> login(String email, String password) {
        List<entity> users = repo.findByEmailAndPassword(email, password);
        if (users.isEmpty()) {
            return Optional.empty();
        } else {
            return Optional.of(users.get(0));
        }
    }
}