package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import java.util.List;

@Document(collection = "prescriptions")
public class Prescription {

    @Id
    private String id;

    @NotBlank
    private String patientName;

    private Long appointmentId;

    @NotBlank
    private String medication;

    private String dosage;

    private String doctorNotes;

    private Integer refillCount;

    private Pharmacy pharmacy;

    private List<String> tags;

    public Prescription() {}

    // Inner class for nested structure
    public static class Pharmacy {
        private String name;
        private String location;

        public Pharmacy() {}

        public Pharmacy(String name, String location) {
            this.name = name;
            this.location = location;
        }

        // Getters and setters
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getLocation() {
            return location;
        }

        public void setLocation(String location) {
            this.location = location;
        }
    }

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getMedication() {
        return medication;
    }

    public void setMedication(String medication) {
        this.medication = medication;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getDoctorNotes() {
        return doctorNotes;
    }

    public void setDoctorNotes(String doctorNotes) {
        this.doctorNotes = doctorNotes;
    }

    public Integer getRefillCount() {
        return refillCount;
    }

    public void setRefillCount(Integer refillCount) {
        this.refillCount = refillCount;
    }

    public Pharmacy getPharmacy() {
        return pharmacy;
    }

    public void setPharmacy(Pharmacy pharmacy) {
        this.pharmacy = pharmacy;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }
}
