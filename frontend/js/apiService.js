// frontend/js/apiService.js
export async function fetchAppointments() {
  const response = await fetch('/api/appointments');
  return await response.json();
}

export async function fetchDoctors() {
  const response = await fetch('/api/doctors');
  return await response.json();
}
