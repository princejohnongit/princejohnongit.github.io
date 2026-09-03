/* ============================================================
   MODAL — Hire Me / Personal Life scroll-triggered modal
   ============================================================ */

let canTriggerModal = false;
let userHasScrolled = false;

function resetPersonalLifeScrollTrigger() {
  canTriggerModal = false;
  userHasScrolled = false;
  // Delay activation to ensure view transition and scroll-to-top are complete
  setTimeout(() => {
    canTriggerModal = true;
  }, 1000);
}

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
      userHasScrolled = false;
    }
  }

  // Click the unlock / see more prompt at bottom of timeline
  if (plGradient) {
    plGradient.addEventListener('click', showHireModal);
  }

  // Trigger modal when scrolling reaches the end of the personal life page
  window.addEventListener('scroll', () => {
    if (!canTriggerModal) return;
    if (!plView || plView.style.display === 'none') return;

    // Must scroll at least 200px from top before modal can trigger
    if (window.scrollY > 200) {
      userHasScrolled = true;
    }

    if (!userHasScrolled) return;

    const scrollBottom = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    // Trigger only when reaching the very bottom of the timeline
    if (scrollBottom >= documentHeight - 40) {
      showHireModal();
    }
  }, { passive: true });

  // Close modal on close button click
  if (hireModalClose) hireModalClose.addEventListener('click', hideHireModal);

  // Close modal on outside backdrop click
  if (hireModal) {
    hireModal.addEventListener('click', (e) => {
      if (e.target === hireModal) hideHireModal();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hireModal && hireModal.classList.contains('active')) {
      hideHireModal();
    }
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
