// Mobile Menu Toggle
const setupMobileMenu = () => {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const icon = nav.classList.contains('open') ? '✕' : '☰';
      btn.textContent = icon;
    });
  }
};

// Intersection Observer for Fade-in animations
const setupAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupAnimations();
  
  // Dynamic Year
  const yearSpan = document.querySelector('#year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
