package com.example.Trippleback;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booked")
public class ExtendedTrippleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String riderName;
    private Integer riderAge;
    private String riderGender;
    private String riderExperience;
    private String riderContact;
    private String riderEmail;
    private String tourName;
    private String accommodationType;
    private Integer numRiders;
    private String tripType;
    private String bikeType;
    private String bikeModel;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRiderName() {
        return riderName;
    }

    public void setRiderName(String riderName) {
        this.riderName = riderName;
    }

    public Integer getRiderAge() {
        return riderAge;
    }

    public void setRiderAge(Integer riderAge) {
        this.riderAge = riderAge;
    }

    public String getRiderGender() {
        return riderGender;
    }

    public void setRiderGender(String riderGender) {
        this.riderGender = riderGender;
    }

    public String getRiderExperience() {
        return riderExperience;
    }

    public void setRiderExperience(String riderExperience) {
        this.riderExperience = riderExperience;
    }

    public String getRiderContact() {
        return riderContact;
    }

    public void setRiderContact(String riderContact) {
        this.riderContact = riderContact;
    }

    public String getRiderEmail() {
        return riderEmail;
    }

    public void setRiderEmail(String riderEmail) {
        this.riderEmail = riderEmail;
    }

    public String getTourName() {
        return tourName;
    }

    public void setTourName(String tourName) {
        this.tourName = tourName;
    }

    public String getAccommodationType() {
        return accommodationType;
    }

    public void setAccommodationType(String accommodationType) {
        this.accommodationType = accommodationType;
    }

    public Integer getNumRiders() {
        return numRiders;
    }

    public void setNumRiders(Integer numRiders) {
        this.numRiders = numRiders;
    }

    public String getTripType() {
        return tripType;
    }

    public void setTripType(String tripType) {
        this.tripType = tripType;
    }

    public String getBikeType() {
        return bikeType;
    }

    public void setBikeType(String bikeType) {
        this.bikeType = bikeType;
    }

    public String getBikeModel() {
        return bikeModel;
    }

    public void setBikeModel(String bikeModel) {
        this.bikeModel = bikeModel;
    }
}
