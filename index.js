const root = document.getElementById('root');

fetch('http://127.0.0.1:9091/api/employees', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  credentials: 'include'
})
  .then(res => {
    if (!res.ok) {
      throw new Error(`Hdjahfgjshdfghjksdhfgjkhjsdfk! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    root.innerHTML = '<h1>Employees</h1>' +
      data.map(e => `<p>${e.name} - ${e.role}</p>`).join('');
  })
  .catch(error => {
    console.error('Error fetching employees:', error);
    root.innerHTML = '<h1>Employees</h1><p style="color: red;">Error loading employees. Make sure the backend is running on http://localhost:9091</p>';
  });