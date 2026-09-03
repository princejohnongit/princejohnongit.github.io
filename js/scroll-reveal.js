/* ============================================================
   SCROLL REVEAL — Intersection Observer based animations
   ============================================================ */

let revealObserver;

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ============================================================
   STAT COUNTER — Animated number counting
   ============================================================ */

function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 40;
  const duration = 1500;
  const stepTime = duration / 40;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + '+';
  }, stepTime);
}

/* ============================================================
   MOUSE GLOW — Card hover glow effect
   ============================================================ */

function initMouseGlow() {
  document.querySelectorAll('.project-card, .skill-category, .hackathon-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
      card.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(56, 189, 248, 0.04), transparent 40%), rgba(255, 255, 255, 0.8)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });
}
