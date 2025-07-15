-- stored_procedures.sql
-- Smart Clinic Management System
-- Created for report generation using stored procedures

-- Procedure 1: Get all appointments for a specific date
DELIMITER $$

CREATE PROCEDURE GetDailyAppointments(IN report_date DATE)
BEGIN
    SELECT 
        a.id AS appointment_id,
        d.name AS doctor_name,
        p.name AS patient_name,
        a.appointment_time,
        a.status
    FROM 
        appointment a
        JOIN doctor d ON a.doctor_id = d.id
        JOIN patient p ON a.patient_id = p.id
    WHERE 
        DATE(a.appointment_time) = report_date;
END $$

DELIMITER ;

-- Procedure 2: Summary of appointments by status
DELIMITER $$

CREATE PROCEDURE GetAppointmentSummary()
BEGIN
    SELECT 
        status,
        COUNT(*) AS count
    FROM 
        appointment
    GROUP BY 
        status;
END $$

DELIMITER ;

-- Procedure 3: Get all appointments for a specific doctor
DELIMITER $$

CREATE PROCEDURE GetDoctorAppointments(IN doctorId INT)
BEGIN
    SELECT 
        a.id AS appointment_id,
        p.name AS patient_name,
        a.appointment_time,
        a.status
    FROM 
        appointment a
        JOIN patient p ON a.patient_id = p.id
    WHERE 
        a.doctor_id = doctorId;
END $$

DELIMITER ;
