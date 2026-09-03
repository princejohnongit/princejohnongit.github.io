/* ============================================================
   TYPING — Animated role text in the hero section
   ============================================================ */

function initTyping() {
  const typedEl = document.getElementById('typed-text');
  if (!typedEl) return;

  const roles = PORTFOLIO_DATA.personal.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typedEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  setTimeout(typeEffect, 1000);
}
