\# Smart Clinic Management System Architecture Design



---



\## Section 1: Architecture Summary



This Spring Boot application uses both MVC and REST controllers. Thymeleaf templates are used for the Admin and Doctor dashboards, while REST APIs serve all other modules. The application interacts with two databases—MySQL (for patient, doctor, appointment, and admin data) and MongoDB (for prescriptions). All controllers route requests through a common service layer, which in turn delegates to the appropriate repositories. MySQL uses JPA entities while MongoDB uses document models.



---



\## Section 2: Numbered Flow of Data and Control



1\. User accesses AdminDashboard or Appointment pages.

2\. The action is routed to the appropriate Thymeleaf or REST controller.

3\. The controller calls the service layer, where business logic is applied.

4\. The service interacts with a repository interface for data persistence.

5\. MySQL stores core records (patients, doctors, admins); MongoDB stores prescriptions.

6\. Data retrieved from DB is bound to Java model classes (`@Entity`, `@Document`).

7\. Models are passed to Thymeleaf templates (MVC) or returned as JSON (REST).



---



