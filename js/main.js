// Minimal JS for small interactions

document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
      const expanded = siteNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }
});