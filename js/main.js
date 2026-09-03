/* ============================================================
   MAIN — Entry point, initializes all modules
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all HTML from data
  renderPortfolio();

  // 2. Initialize interactive modules
  initParticles();
  initTyping();
  initScrollReveal();
  initStatCounters();
  initSidebar();
  initMusic();
  initModal();

  // 3. Mouse glow effect (needs rendered DOM)
  initMouseGlow();

  // 4. Coursework expand/collapse toggle
  initCourseworkToggle();
});

function initCourseworkToggle() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#coursework-toggle-btn');
    if (!btn) return;

    const container = document.getElementById('edu-coursework-container');
    if (!container) return;

    const isExpanded = container.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', isExpanded);

    const toggleText = btn.querySelector('.toggle-text') || btn.querySelector('span:first-child');
    if (toggleText) {
      const totalCount = PORTFOLIO_DATA.education.relevantcoursework.length;
      toggleText.textContent = isExpanded
        ? 'Show less '
        : 'See more.... ';
    }
  });
}
