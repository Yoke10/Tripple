//package com.example.Trippleback;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/tripples")
//@CrossOrigin(origins = "http://localhost:3003") // Adjust the allowed origins as needed
//public class controller {
//
//    @Autowired
//    private service service;
//
//    // Retrieve all entities
//    @GetMapping
//    public List<entity> getAllTripples() {
//        return service.getAllTripples();
//    }
//
//    // Retrieve a specific entity by its ID
//    @GetMapping("/{id}")
//    public ResponseEntity<entity> getTrippleById(@PathVariable int id) {
//        Optional<entity> tripple = service.getTrippleById(id);
//        return tripple.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    // Create a new entity
//    @PostMapping
//    public ResponseEntity<entity> createTripple(@RequestBody entity tripple) {
//        entity createdTripple = service.createTripple(tripple);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdTripple);
//    }
//
//    // Update an existing entity by ID
//    @PutMapping("/{id}")
//    public ResponseEntity<entity> updateTripple(@PathVariable int id, @RequestBody entity trippleDetails) {
//        entity updatedTripple = service.updateTripple(id, trippleDetails);
//        if (updatedTripple != null) {
//            return ResponseEntity.ok(updatedTripple);
//        }
//        return ResponseEntity.notFound().build();
//    }
//
//    // Delete an entity by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteTripple(@PathVariable int id) {
//        service.deleteTripple(id);
//        return ResponseEntity.noContent().build();
//    }
//
//    // Login endpoint
//    @PostMapping("/login")
//    public ResponseEntity<entity> login(@RequestBody entity loginDetails) {
//        Optional<entity> user = service.login(loginDetails.getEmail(), loginDetails.getPassword());
//        if (user.isPresent()) {
//            return ResponseEntity.ok(user.get());
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }
//}
