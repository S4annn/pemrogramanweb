const toggleBtn = document.getElementById('darkModeToggle');
  const icon = toggleBtn.querySelector('.icon');
  const label = toggleBtn.querySelector('.label');
  const body = document.body;

  // Cek preferensi tersimpan
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

