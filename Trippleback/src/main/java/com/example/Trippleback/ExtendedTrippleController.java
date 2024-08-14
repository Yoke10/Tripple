package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/extended-tripples")
@CrossOrigin(origins = "http://localhost:3000") // Update with your frontend URL
public class ExtendedTrippleController {

    @Autowired
    private ExtendedTrippleService service;

    @GetMapping
    public List<ExtendedTrippleEntity> getAllTripples() {
        return service.getAllTripples();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExtendedTrippleEntity> getTrippleById(@PathVariable Long id) {
        Optional<ExtendedTrippleEntity> tripple = service.getTrippleById(id);
        return tripple.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ExtendedTrippleEntity> createTripple(
            @RequestParam("riderName") String riderName,
            @RequestParam("riderAge") Integer riderAge,
            @RequestParam("riderGender") String riderGender,
            @RequestParam("riderExperience") String riderExperience,
            @RequestParam("riderContact") String riderContact,
            @RequestParam("riderEmail") String riderEmail,
            @RequestParam("tourName") String tourName,
            @RequestParam("accommodationType") String accommodationType,
            @RequestParam("numRiders") Integer numRiders,
            @RequestParam("tripType") String tripType,
            @RequestParam("bikeType") String bikeType,
            @RequestParam("bikeModel") String bikeModel) {

        try {
            ExtendedTrippleEntity tripple = new ExtendedTrippleEntity();
            tripple.setRiderName(riderName);
            tripple.setRiderAge(riderAge);
            tripple.setRiderGender(riderGender);
            tripple.setRiderExperience(riderExperience);
            tripple.setRiderContact(riderContact);
            tripple.setRiderEmail(riderEmail);
            tripple.setTourName(tourName);
            tripple.setAccommodationType(accommodationType);
            tripple.setNumRiders(numRiders);
            tripple.setTripType(tripType);
            tripple.setBikeType(bikeType);
            tripple.setBikeModel(bikeModel);

            ExtendedTrippleEntity createdTripple = service.createTripple(tripple);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdTripple);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ExtendedTrippleEntity> updateTripple(@PathVariable Long id, @RequestBody ExtendedTrippleEntity trippleDetails) {
        ExtendedTrippleEntity updatedTripple = service.updateTripple(id, trippleDetails);
        if (updatedTripple != null) {
            return ResponseEntity.ok(updatedTripple);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTripple(@PathVariable Long id) {
        service.deleteTripple(id);
        return ResponseEntity.noContent().build();
    }
}
