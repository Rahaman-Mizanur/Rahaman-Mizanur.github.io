/* ============================================================
   main.js — PhD Portfolio Website: Md. Mizanur Rahaman
   ============================================================ */

/* --- Shared Navigation HTML --- */
const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Md. Mizanur <span>Rahaman</span></a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-page="index">Home</a></li>
      <li><a href="about.html" data-page="about">About</a></li>
      <li><a href="research.html" data-page="research">Research</a></li>
      <li><a href="publications.html" data-page="publications">Publications</a></li>
      <li><a href="cv.html" data-page="cv">CV</a></li>
      <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
`;

/* --- Shared Footer HTML --- */
const FOOTER_HTML = `
<footer id="footer">
  <div class="footer-inner">
    <div>
      <div class="footer-name">Md. Mizanur Rahaman</div>
      <a href="mailto:mizan.becm13@gmail.com" class="footer-email">mizan.becm13@gmail.com</a>
    </div>
    <div class="footer-links">
      <a href="mailto:mizan.becm13@gmail.com">📧 Email</a>
      <a href="https://linkedin.com/in/rahaman-mizanur" target="_blank" rel="noopener">💼 LinkedIn</a>
      <a href="https://github.com/Rahaman-Mizanur" target="_blank" rel="noopener">🐙 GitHub</a>
      <a href="https://scholar.google.com/citations?user=Gajk6tkAAAAJ&hl=en" target="_blank" rel="noopener">🎓 Google Scholar</a>
    </div>
  </div>
  <div class="footer-inner">
    <div class="footer-copy">
      &copy; <span id="copyright-year"></span> Md. Mizanur Rahaman. All rights reserved.
    </div>
  </div>
</footer>
`;

/* --- Inject nav and footer, then initialise --- */
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  setActiveNav();
  initHamburger();
  setCopyrightYear();
  initScrollSpy();
});

/* --- Mark active nav link --- */
function setActiveNav() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  const pageName = filename.replace('.html', '') || 'index';

  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.dataset.page === pageName) {
      link.classList.add('active');
    }
  });
}

/* --- Hamburger menu --- */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

/* --- Auto copyright year --- */
function setCopyrightYear() {
  const el = document.getElementById('copyright-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* --- Subtle scroll spy: add shadow to navbar on scroll --- */
function initScrollSpy() {
  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.35)';
    } else {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
}
