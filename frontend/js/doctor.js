// doctor.js
document.addEventListener('DOMContentLoaded', () => {
  const completeButtons = document.querySelectorAll('.mark-completed');

  completeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.appointment-card');
      const statusSpan = card.querySelector('.status');
      statusSpan.textContent = 'Completed';
      alert('Appointment marked as completed.');
    });
  });

  const scheduleForm = document.getElementById('schedule-form');

  if (scheduleForm) {
    scheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Availability submitted!');
    });
  }
});
