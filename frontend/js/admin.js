// admin.js
document.addEventListener('DOMContentLoaded', () => {
  const approveButtons = document.querySelectorAll('.approve-user');

  approveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('User approved!');
    });
  });
});
