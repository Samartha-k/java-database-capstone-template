// frontend/js/loginService.js
export function login(email, password, role) {
  // Dummy logic: replace with backend API
  if (role === 'admin') {
    window.location.href = 'dashboard-admin.html';
  } else if (role === 'doctor') {
    window.location.href = 'dashboard-doctor.html';
  } else {
    alert('Invalid credentials');
  }
}
