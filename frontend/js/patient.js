// patient.js
document.addEventListener('DOMContentLoaded', () => {
  const bookBtn = document.getElementById('book-appointment');

  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      alert('Appointment booked!');
    });
  }
});
