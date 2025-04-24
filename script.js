const toggleBtn = document.getElementById('darkModeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️ Light Mode';
    } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '🌙 Dark Mode';
    }
  });

