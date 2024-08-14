package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private ExtendedTrippleService bookingService;

    @GetMapping("/bookings")
    public ResponseEntity<List<ExtendedTrippleEntity>> getAllBookings() {
        List<ExtendedTrippleEntity> bookings = bookingService.getAllTripples();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<ExtendedTrippleEntity> getBookingById(@PathVariable Long id) {
        Optional<ExtendedTrippleEntity> booking = bookingService.getTrippleById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/bookings")
    public ResponseEntity<ExtendedTrippleEntity> createBooking(@RequestBody ExtendedTrippleEntity booking) {
        try {
            ExtendedTrippleEntity createdBooking = bookingService.createTripple(booking);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdBooking);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/bookings/{id}")
    public ResponseEntity<ExtendedTrippleEntity> updateBooking(@PathVariable Long id, @RequestBody ExtendedTrippleEntity bookingDetails) {
        ExtendedTrippleEntity updatedBooking = bookingService.updateTripple(id, bookingDetails);
        if (updatedBooking != null) {
            return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/bookings/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteTripple(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
