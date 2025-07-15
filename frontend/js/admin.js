// admin.js
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("header").innerHTML = `<h1>Smart Clinic Admin</h1>`;
  document.getElementById("footer").innerHTML = `<footer>© 2025 Smart Clinic</footer>`;

  // Sample dynamic content (you'll later replace this with real API data)
  const main = document.querySelector("main");
  const adminSection = document.createElement("section");
  adminSection.innerHTML = `
    <h3>Manage Doctors</h3>
    <ul>
      <li>Dr. Smith - Cardiologist</li>
      <li>Dr. Jane - Neurologist</li>
    </ul>
  `;
  main.appendChild(adminSection);
  const approveButtons = document.querySelectorAll('.approve-user');

  approveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('User approved!');
    });
  });
});
