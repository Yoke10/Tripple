package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExtendedTrippleService {

    @Autowired
    private ExtendedTrippleRepository repob;

    public List<ExtendedTrippleEntity> getAllTripples() {
        return repob.findAll();
    }

    public Optional<ExtendedTrippleEntity> getTrippleById(Long id) {
        return repob.findById(id);
    }

    public ExtendedTrippleEntity createTripple(ExtendedTrippleEntity tripple) {
        return repob.save(tripple);
    }

    public ExtendedTrippleEntity updateTripple(Long id, ExtendedTrippleEntity trippleDetails) {
        if (repob.existsById(id)) {
            trippleDetails.setId(id);
            return repob.save(trippleDetails);
        }
        return null;
    }

    public void deleteTripple(Long id) {
        repob.deleteById(id);
    }
}
