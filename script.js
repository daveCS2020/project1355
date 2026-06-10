// ── Dark Mode Toggle ──────────────────────────────────────────
const toggleBtn = document.getElementById('darkModeToggle');

// Remember the user's preference permanent
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button label and save preference
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'enabled');
  } else { 
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// ── Hamburger Menu Toggle ─────────────────────────────────────
const menuToggle = document.getElementById('davidMenu');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});