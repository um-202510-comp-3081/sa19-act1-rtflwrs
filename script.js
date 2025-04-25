// Show a welcome message on page load
window.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to my portfolio site!');
  });
  
  // Highlight section headers when they enter the viewport
  const sections = document.querySelectorAll('main section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.backgroundColor = '#e0f7fa';
        entry.target.style.transition = 'background-color 0.5s ease-in-out';
      } else {
        entry.target.style.backgroundColor = 'transparent';
      }
    });
  }, {
    threshold: 0.2
  });
  
  sections.forEach(section => observer.observe(section));
  