// doctor.js
document.addEventListener('DOMContentLoaded', () => {
  const scheduleForm = document.getElementById('schedule-form');

  if (scheduleForm) {
    scheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Availability submitted!');
    });
  }
});
