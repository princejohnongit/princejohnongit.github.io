/* ============================================================
   SIDEBAR — Vertical navigation with glider indicator
   ============================================================ */

function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarNav = document.querySelector('.sidebar-nav');
  const glider = document.getElementById('sidebar-glider');
  const navItems = document.querySelectorAll('.sidebar-nav-item[data-section]');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  if (!sidebar || !glider) return;

  // ── Glider position updater ──
  function moveGlider(activeItem) {
    if (!activeItem) {
      glider.classList.remove('active');
      return;
    }

    const navRect = sidebarNav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const top = itemRect.top - navRect.top + sidebarNav.scrollTop;

    glider.style.top = top + 'px';
    glider.style.height = itemRect.height + 'px';
    glider.classList.add('active');
  }

  // ── Active section tracking via IntersectionObserver ──
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('data-section') === id) {
            item.classList.add('active');
            moveGlider(item);
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));

  // ── Click navigation ──
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = item.getAttribute('data-section');

      if (sectionId === 'personal-life') {
        switchToView('personal-life');
        window.history.pushState(null, null, '#personal-life');
      } else {
        switchToView('home');
        const target = document.getElementById(sectionId);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
        window.history.pushState(null, null, '#' + sectionId);
      }

      // Close mobile menu
      closeMobileMenu();
    });
  });

  // ── Mobile menu toggle ──
  function closeMobileMenu() {
    if (sidebar.classList.contains('mobile-open')) {
      sidebar.classList.remove('mobile-open');
      mobileToggle?.classList.remove('active');
      sidebarOverlay?.classList.remove('active');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('active', isOpen);
      sidebarOverlay?.classList.toggle('active', isOpen);
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileMenu);
  }

  // ── Initial glider position ──
  const activeItem = document.querySelector('.sidebar-nav-item.active');
  if (activeItem) {
    moveGlider(activeItem);
  } else {
    // Default to first item
    const firstItem = navItems[0];
    if (firstItem) {
      firstItem.classList.add('active');
      moveGlider(firstItem);
    }
  }

  // ── SPA routing ──
  window.addEventListener('popstate', () => {
    if (window.location.hash === '#personal-life') {
      switchToView('personal-life');
    } else {
      switchToView('home');
    }
  });

  if (window.location.hash === '#personal-life') {
    switchToView('personal-life');
  }

  // ── Global anchor click handler for #hash links ──
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    // Skip sidebar nav items (already handled)
    if (anchor.classList.contains('sidebar-nav-item')) return;

    e.preventDefault();
    const href = anchor.getAttribute('href');

    if (href === '#personal-life') {
      switchToView('personal-life');
      window.history.pushState(null, null, href);
    } else {
      switchToView('home');
      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
      window.history.pushState(null, null, href);
    }

    closeMobileMenu();
  });
}

/* ============================================================
   SPA VIEW SWITCHING
   ============================================================ */

function switchToView(viewName) {
  const homeView = document.getElementById('home-view');
  const personalLifeView = document.getElementById('personal-life-view');

  if (viewName === 'personal-life') {
    if (homeView) homeView.style.display = 'none';
    if (personalLifeView) {
      personalLifeView.style.display = 'block';
      // Re-trigger reveal animations
      personalLifeView.querySelectorAll('.reveal').forEach(el => {
        if (typeof revealObserver !== 'undefined') {
          revealObserver.observe(el);
        }
      });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (typeof resetPersonalLifeScrollTrigger === 'function') {
      resetPersonalLifeScrollTrigger();
    }
  } else {
    if (personalLifeView) personalLifeView.style.display = 'none';
    if (homeView) homeView.style.display = 'block';
  }
}
