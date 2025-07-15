## MySQL Database Design

### Table: patients
- id: INT, Primary Key, AUTO_INCREMENT
- name: VARCHAR(100), NOT NULL
- email: VARCHAR(100), UNIQUE, NOT NULL
- phone: VARCHAR(15), NOT NULL
- gender: ENUM('Male', 'Female', 'Other')
- birth_date: DATE
- created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

### Table: doctors
- id: INT, Primary Key, AUTO_INCREMENT
- name: VARCHAR(100), NOT NULL
- specialty: VARCHAR(100), NOT NULL
- email: VARCHAR(100), UNIQUE, NOT NULL
- phone: VARCHAR(15), NOT NULL
- availability: TEXT (JSON string for slots)

### Table: appointments
- id: INT, Primary Key, AUTO_INCREMENT
- patient_id: INT, Foreign Key → patients(id)
- doctor_id: INT, Foreign Key → doctors(id)
- appointment_time: DATETIME, NOT NULL
- status: ENUM('Scheduled', 'Completed', 'Cancelled'), DEFAULT 'Scheduled'
- created_at: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  

### Table: admins
- id: INT, Primary Key, AUTO_INCREMENT
- username: VARCHAR(50), UNIQUE, NOT NULL
- password: VARCHAR(255), NOT NULL
- email: VARCHAR(100), UNIQUE
- role: VARCHAR(50), DEFAULT 'admin'

## MongoDB Collection Design

### Collection: prescriptions

```json
{
  "_id": "ObjectId('64f0a1a2c6b8ab23ef123abc')",
  "patientId": 2,
  "appointmentId": 11,
  "doctorId": 5,
  "medications": [
    {
      "name": "Paracetamol",
      "dosage": "500mg",
      "instructions": "Take after meals, 3 times a day"
    },
    {
      "name": "Amoxicillin",
      "dosage": "250mg",
      "instructions": "Take once in the morning"
    }
  ],
  "doctorNotes": "Patient recovering well, continue medication for 5 more days.",
  "refillAvailable": true,
  "issuedAt": "2025-07-15T09:30:00Z",
  "pharmacy": {
    "name": "GoodHealth Pharmacy",
    "location": "Jayanagar, Bangalore"
  }
}
