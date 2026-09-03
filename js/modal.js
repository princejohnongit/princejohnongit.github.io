/* ============================================================
   MODAL — Hire Me / Personal Life scroll-triggered modal
   ============================================================ */

function initModal() {
  const plView = document.getElementById('personal-life-view');
  const plGradient = document.getElementById('pl-scroll-gradient');
  const hireModal = document.getElementById('hire-modal');
  const hireModalClose = document.getElementById('hire-modal-close');
  const hireModalCta = document.getElementById('hire-modal-cta');

  function showHireModal() {
    if (hireModal && !hireModal.classList.contains('active')) {
      hireModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function hideHireModal() {
    if (hireModal) {
      hireModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Trigger modal on scroll-down inside the personal life page
  if (plView) {
    plView.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) showHireModal();
    }, { passive: true });

    let touchStartY = 0;
    plView.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    plView.addEventListener('touchmove', (e) => {
      if (touchStartY - e.touches[0].clientY > 15) showHireModal();
    }, { passive: true });
  }

  // Click the gradient prompt
  if (plGradient) plGradient.addEventListener('click', showHireModal);

  // Close modal
  if (hireModalClose) hireModalClose.addEventListener('click', hideHireModal);
  if (hireModal) hireModal.addEventListener('click', (e) => {
    if (e.target === hireModal) hideHireModal();
  });

  // CTA button inside modal navigates to contact and closes
  if (hireModalCta) {
    hireModalCta.addEventListener('click', (e) => {
      e.preventDefault();
      hideHireModal();
      switchToView('home');
      window.history.pushState(null, null, '#contact');
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  }
}
