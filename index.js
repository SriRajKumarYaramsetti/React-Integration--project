const root = document.getElementById('root');

fetch('http://localhost:8080/api/employees')
  .then(res => res.json())
  .then(data => {
    root.innerHTML = '<h1>Employees</h1>' +
      data.map(e => `<p>${e.name} - ${e.role}</p>`).join('');
  });