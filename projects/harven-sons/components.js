/* ── Harven & Sons — Shared Components ── */

const NAV_HTML = `
<nav class="nav" id="main-nav">
  <div class="container nav-inner">
    <div class="nav-logo">
      <a href="index.html">
        <span class="nav-logo-name">Harven &amp; Sons</span>
        <span class="nav-logo-tag">Built by hand. Built to last.</span>
      </a>
    </div>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="testimonials.html">Testimonials</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li class="nav-cta"><a href="contact.html" class="btn btn-primary">Get a Quote</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo-name">Harven &amp; Sons</div>
        <div class="footer-logo-tag">Built by hand. Built to last.</div>
        <p class="footer-desc">Family-owned custom home builder and renovation specialist serving Western North Carolina since 1987. Three generations of craftsmanship, one standard of excellence.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul class="footer-links">
          <li><a href="services.html#custom-homes">Custom Home Building</a></li>
          <li><a href="services.html#renovations">Kitchen &amp; Bath Renovations</a></li>
          <li><a href="services.html#additions">Room Additions</a></li>
          <li><a href="services.html#outdoor">Deck &amp; Outdoor Structures</a></li>
          <li><a href="services.html#historic">Historic Restoration</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 5.82 5.82l1.33-1.34a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <a href="tel:+18285540192" style="color:rgba(255,255,255,.75)">+1 828-554-0192</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:info@harvenandsons.com" style="color:rgba(255,255,255,.75)">info@harvenandsons.com</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Asheville, North Carolina</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Mon–Fri 7am–5pm<br>Sat by appointment</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 Harven &amp; Sons Construction. All rights reserved.</span>
      <span>NC License <span>#44821</span></span>
    </div>
  </div>
</footer>`;

function initComponents() {
  // Inject nav
  const navTarget = document.getElementById('nav-target');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // Inject footer
  const footerTarget = document.getElementById('footer-target');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  // Set active nav link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
}

/* ── Scroll-based fade-up animation ── */
function initFadeUps() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

/* ── Count-up animation ── */
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el      = entry.target;
      const target  = +el.dataset.count;
      const suffix  = el.dataset.suffix || '';
      const dur     = 1600;
      const start   = performance.now();
      const update  = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

document.addEventListener('DOMContentLoaded', () => {
  initComponents();
  initFadeUps();
  initCountUp();
});
