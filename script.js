const toggleBtn = document.getElementById('darkModeToggle');
  const icon = toggleBtn.querySelector('.icon');
  const label = toggleBtn.querySelector('.label');
  const body = document.body;

  function showSection(section) {
      // Hide all sections
      document.getElementById('praktikum-section').style.display = 'none';
      document.getElementById('teori-section').style.display = 'none';
      
      // Remove active class from all buttons
      document.querySelectorAll('.toggle-btn').forEach(btn => {
          btn.classList.remove('active');
      });
      
      // Show selected section and make its button active
      if (section === 'praktikum') {
          document.getElementById('praktikum-section').style.display = 'flex';
          document.querySelector('.toggle-btn:nth-child(1)').classList.add('active');
      } else {
          document.getElementById('teori-section').style.display = 'flex';
          document.querySelector('.toggle-btn:nth-child(2)').classList.add('active');
      }
  }
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = '☀️';
    label.textContent = 'Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      icon.textContent = '☀️';
      label.textContent = 'Light Mode';
    } else {
      localStorage.setItem('theme', 'light');
      icon.textContent = '🌙';
      label.textContent = 'Dark Mode';
    }
  });

