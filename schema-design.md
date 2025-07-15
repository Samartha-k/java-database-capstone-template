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
