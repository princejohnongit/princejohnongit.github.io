/* ============================================================
   RENDERER — Dynamically builds HTML from PORTFOLIO_DATA
   ============================================================
   This module renders all sections from data.js so content
   changes only require editing data.js — no HTML needed.
   ============================================================ */

const GITHUB_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;

const LINKEDIN_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;

const EMAIL_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

const PROJECTS_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`;


/* ── Sidebar ── */
function renderSidebar() {
  const d = PORTFOLIO_DATA;
  const navItems = d.navLinks.map(link => {
    const isCta = link.id === 'contact';
    return `<a href="#${link.id}" class="sidebar-nav-item${isCta ? ' nav-cta-item' : ''}" data-section="${link.id}">
      <span class="sidebar-nav-icon">${link.icon}</span>
      <span class="sidebar-nav-label">${link.label}</span>
    </a>`;
  }).join('');

  return `
    <nav class="sidebar" id="sidebar">
      <a href="#hero" class="sidebar-logo" aria-label="${d.personal.name}">
        ${d.personal.logoImage ? `<img src="${d.personal.logoImage}" alt="${d.personal.name}" class="sidebar-logo-img" />` : ''}
        <span class="sidebar-logo-text">${d.personal.logoText}</span>
      </a>
      <div class="sidebar-nav">
        <div class="sidebar-glider" id="sidebar-glider"></div>
        ${navItems}
      </div>
      <div class="sidebar-bottom">
        <button class="sidebar-music-btn" id="sidebar-music-btn" aria-label="Toggle background music">
          <span class="sidebar-music-icon">🔇</span>
          <span class="sidebar-music-label">Play Music</span>
          <div class="eq-bars">
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
          </div>
        </button>
      </div>
    </nav>
    <button class="mobile-nav-toggle" id="mobile-nav-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>`;
}


/* ── Hero Section ── */
function renderHero() {
  const d = PORTFOLIO_DATA.personal;
  return `
    <section class="hero" id="hero">
      <canvas id="particle-canvas"></canvas>
      <div class="hero-content">
        <div class="hero-portrait">
          <div class="hero-portrait-wrapper">
            <img src="${d.portraitImage}" alt="${d.name}" class="hero-portrait-img" />
          </div>
          <div class="hero-portrait-dots"></div>
          <div class="hero-portrait-ring"></div>
        </div>
        <div class="hero-text">
          <div class="hero-badge">
            <span class="pulse-dot"></span>
            ${d.badgeText}
          </div>
          <h1 class="hero-title">
            ${d.heroGreeting} <span class="gradient-text">${d.name}</span>
          </h1>
          <div class="hero-role">
            <span class="typed-text" id="typed-text"></span><span class="cursor">|</span>
          </div>
          <p class="hero-description">${d.description}</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">
              ${PROJECTS_SVG}
              View Projects
            </a>
            <a href="mailto:${d.email}" class="btn btn-outline">
              ${EMAIL_SVG}
              Get In Touch
            </a>
          </div>
          <div class="hero-socials">
            <a href="${d.github}" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">${GITHUB_SVG}</a>
            <a href="${d.linkedin}" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">${LINKEDIN_SVG}</a>
            <a href="mailto:${d.email}" class="social-link" aria-label="Email">${EMAIL_SVG}</a>
          </div>
        </div>
        
      </div>
      <div class="scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>`;
}


/* ── About Section ── */
function renderAbout() {
  const d = PORTFOLIO_DATA.about;
  const paragraphs = d.paragraphs.map(p => `<p>${p}</p>`).join('');
  const stats = d.stats.map(s => `
    <div class="stat-card">
      <div class="stat-number" data-count="${s.count}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${d.label}</span>
          <h2 class="section-title">${d.title}</h2>
          <p class="section-subtitle">${d.subtitle}</p>
        </div>
        <div class="about-grid">
          <div class="about-text reveal">
            ${paragraphs}
            <div class="about-philosophy">${d.philosophy}</div>
          </div>
          <div class="stats-grid reveal reveal-delay-2">
            ${stats}
          </div>
        </div>
      </div>
    </section>`;
}


/* ── Experience Section ── */
function renderExperience() {
  const d = PORTFOLIO_DATA.experience;
  const items = d.items.map((item, i) => {
    const duties = item.duties.map(duty => `<li>${duty}</li>`).join('');
    return `
      <div class="timeline-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-card">
          <h3>${item.role}</h3>
          <div class="company">${item.company}</div>
          <ul>${duties}</ul>
        </div>
      </div>`;
  }).join('');

  return `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${d.label}</span>
          <h2 class="section-title">${d.title}</h2>
          <p class="section-subtitle">${d.subtitle}</p>
        </div>
        <div class="timeline">${items}</div>
      </div>
    </section>`;
}


/* ── Projects Section ── */
function renderProjects() {
  const d = PORTFOLIO_DATA.projects;
  const cards = d.items.map((proj, i) => {
    const tags = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    const githubLink = proj.github
      ? `<div class="project-links"><a href="${proj.github}" target="_blank" rel="noopener" aria-label="View ${proj.name} on GitHub">${GITHUB_SVG}</a></div>`
      : '';
    const delay = i % 4;
    return `
      <div class="project-card reveal${delay > 0 ? ` reveal-delay-${delay}` : ''}">
        <div class="project-card-header">
          <span class="project-icon">${proj.icon}</span>
          ${githubLink}
        </div>
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
        <div class="project-tags">${tags}</div>
      </div>`;
  }).join('');

  return `
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${d.label}</span>
          <h2 class="section-title">${d.title}</h2>
          <p class="section-subtitle">${d.subtitle}</p>
        </div>
        <div class="projects-grid">${cards}</div>
      </div>
    </section>`;
}


/* ── Skills Section ── */
function renderSkills() {
  const d = PORTFOLIO_DATA.skills;
  const categories = d.categories.map((cat, i) => {
    const items = cat.items.map(item => `<span class="skill-item">${item}</span>`).join('');
    const delay = i % 8;
    return `
      <div class="skill-category reveal${delay > 0 ? ` reveal-delay-${delay}` : ''}">
        <div class="skill-category-header">
          <div class="skill-category-icon ${cat.colorClass}">${cat.icon}</div>
          <h3>${cat.name}</h3>
        </div>
        <div class="skill-list">${items}</div>
      </div>`;
  }).join('');

  return `
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${d.label}</span>
          <h2 class="section-title">${d.title}</h2>
          <p class="section-subtitle">${d.subtitle}</p>
        </div>
        <div class="skills-grid">${categories}</div>
      </div>
    </section>`;
}


/* ── Hackathons Section ── */
function renderHackathons() {
  const d = PORTFOLIO_DATA.hackathons;
  const cards = d.items.map((h, i) => {
    const delay = i % 4;
    return `
      <div class="hackathon-card reveal${delay > 0 ? ` reveal-delay-${delay}` : ''}">
        <span class="hackathon-emoji">${h.emoji}</span>
        <h3>${h.name}</h3>
        <div class="hackathon-date">${h.date}</div>
        <p>${h.description}</p>
        <span class="hackathon-badge ${h.badgeClass}">${h.badge}</span>
      </div>`;
  }).join('');

  return `
    <section class="section" id="hackathons">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${d.label}</span>
          <h2 class="section-title">${d.title}</h2>
          <p class="section-subtitle">${d.subtitle}</p>
        </div>
        <div class="hackathons-grid">${cards}</div>
      </div>
    </section>`;
}


/* ── Certifications & Education Section ── */
function renderCertifications() {
  const certs = PORTFOLIO_DATA.certifications;
  const edu = PORTFOLIO_DATA.education;

  const certItems = certs.items.map((c, i) => {
    const delay = i % 3;
    const verifyButton = c.link
      ? `<a href="${c.link}" target="_blank" rel="noopener" class="cert-verify-btn" aria-label="Verify ${c.name}">
           <span>Verify</span>
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
         </a>`
      : '';
    const embedBadge = c.embedLink ? `<div class="cert-embed">${c.embedLink}</div>` : '';

    return `
      <div class="cert-item reveal${delay > 0 ? ` reveal-delay-${delay}` : ''}">
        <div class="cert-icon">${c.icon}</div>
        <div class="cert-info">
          <h3>${c.name}</h3>
          <span class="cert-issuer">${c.issuer}</span>
          ${embedBadge}
        </div>
        <div class="cert-action">
          <span class="cert-date">${c.date}</span>
          ${verifyButton}
        </div>
      </div>`;
  }).join('');

  return `
    <section class="section" id="certifications">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${certs.label}</span>
          <h2 class="section-title">${certs.title}</h2>
          <p class="section-subtitle">${certs.subtitle}</p>
        </div>
        <div class="certs-list">${certItems}</div>
        <div style="margin-top: 64px;">
          <div class="education-card education-card-horizontal reveal">
            <div class="edu-media-col">
              ${edu.image ? `
                <img src="${edu.image}" alt="${edu.school}" class="edu-banner-img" />
                <div class="edu-banner-overlay"></div>
              ` : ''}
              ${edu.logo ? `<img src="${edu.logo}" alt="${edu.school} Logo" class="edu-logo-badge" />` : ''}
            </div>
            
            <div class="edu-body">
              <div class="edu-meta-top">
                <span class="edu-school-name">${edu.school}</span>
                <span class="cgpa">${edu.cgpa}</span>
              </div>
              <h3 class="degree">${edu.degree}</h3>
              <div class="edu-details">${edu.details}</div>
              
              ${edu.relevantcoursework && edu.relevantcoursework.length > 0 ? `
              <div class="edu-coursework" id="edu-coursework-container">
                <div class="edu-coursework-header">
                  <span class="edu-coursework-title">Relevant Coursework</span>
      
                </div>
                <div class="edu-coursework-tags">
                  ${edu.relevantcoursework.slice(0, 5).map(c => `<span class="coursework-tag">${c}</span>`).join('')}
                  <div class="edu-coursework-more" id="edu-coursework-more" style="display: contents;">
                    ${edu.relevantcoursework.slice(5).map(c => `<span class="coursework-tag coursework-tag-hidden">${c}</span>`).join('')}
                  </div>
                </div>
                ${edu.relevantcoursework.length > 5 ? `
                <button type="button" class="coursework-toggle-btn" id="coursework-toggle-btn" aria-expanded="false">
                  <span>See more.... </span>
                  <span>↓</span>
                </button>` : ''}
              </div>` : ''}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}


/* ── Leadership & Interests Section ── */
function renderLeadership() {
  const d = PORTFOLIO_DATA.leadership;
  const categories = d.categories.map((cat, i) => {
    const items = cat.items.map(item =>
      `<span class="skill-item">${item}</span>`
    ).join('');
    return `
      <div class="skill-category reveal${i > 0 ? ` reveal-delay-${i}` : ''}">
        <div class="skill-category-header">
          <div class="skill-category-icon ${cat.colorClass}">${cat.icon}</div>
          <h3>${cat.name}</h3>
        </div>
        <div class="skill-list leadership-list">${items}</div>
      </div>`;
  }).join('');

  return `
    <section class="section" id="leadership-interests">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${d.label}</span>
          <h2 class="section-title">${d.title}</h2>
          <p class="section-subtitle">${d.subtitle}</p>
        </div>
        <div class="skills-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
          ${categories}
        </div>
      </div>
    </section>`;
}


/* ── Contact Section ── */
function renderContact() {
  const d = PORTFOLIO_DATA.contact;
  const links = d.links.map(link => {
    const externalAttrs = link.external ? ' target="_blank" rel="noopener"' : '';
    return `
      <a href="${link.href}"${externalAttrs} class="contact-btn">
        <span class="contact-icon">${link.icon}</span>
        ${link.text}
      </a>`;
  }).join('');

  return `
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${d.label}</span>
          <h2 class="section-title">${d.title}</h2>
          <p class="section-subtitle">${d.subtitle}</p>
        </div>
        <div class="contact-content reveal">
          <div class="contact-links-grid">${links}</div>
          <div class="personal-life-discovery">
            <span class="pl-discovery-hint">Curious about what lies beyond the code?</span>
            <a href="#personal-life" class="btn pl-complimentary-btn" id="open-personal-life-btn">
              <span class="btn-sparkle">✨</span>
              <span>A Glimpse Into My Personal Life</span>
              <span class="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>`;
}


/* ── Personal Life View ── */
function renderPersonalLife() {
  const d = PORTFOLIO_DATA.personalLife;
  const p = PORTFOLIO_DATA.personal;

  const timelineItems = d.timeline.map(item => `
    <div class="pl-timeline-item">
      <div class="pl-timeline-dot"></div>
      <div class="pl-timeline-content">
        <div class="pl-timeline-meta">
          <span class="pl-timeline-date">${item.date}</span>
          ${item.location ? `<span class="pl-timeline-location"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>${item.location}</span>` : ''}
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>`).join('');

  return `
    <div id="personal-life-view" class="spa-view" style="display:none;">
      <div class="personal-life-page">
        <div class="pl-portrait-bg">
          <img src="${p.portraitImage}" alt="${p.name}" />
        </div>
        <div class="container">
          <div class="pl-nav-back-container reveal">
            <a href="#hero" class="pl-back-btn" id="pl-back-btn">
              <span>←</span> Back to Portfolio
            </a>
          </div>
          <div class="section-header reveal">
            <span class="section-label">${d.label}</span>
            <h2 class="section-title">${d.title}</h2>
            <p class="section-subtitle">${d.subtitle}</p>
          </div>
          <div class="personal-timeline reveal">${timelineItems}</div>
          <div class="pl-scroll-gradient reveal" id="pl-scroll-gradient">
            <span class="pl-scroll-text">Want to see more of my personal life?</span>
            <span style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">Click here or scroll down to unlock</span>
            <svg class="pl-scroll-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>`;
}


/* ── Hire Me Modal ── */
function renderHireModal() {
  return `
    <div class="hire-modal-overlay" id="hire-modal">
      <div class="hire-modal-card">
        <button class="hire-modal-close" id="hire-modal-close" aria-label="Close">&times;</button>
        <div class="hire-modal-emoji">🚀</div>
        <h3>Hire Me as an Employee</h3>
        <p>to See More of my Personal Life!</p>
        <a href="#contact" class="btn btn-primary hire-modal-btn" id="hire-modal-cta">
          Let's Talk
        </a>
      </div>
    </div>`;
}


/* ── Footer ── */
function renderFooter() {
  const d = PORTFOLIO_DATA.footer;
  const links = d.links.map(link =>
    `<a href="${link.href}" target="_blank" rel="noopener">${link.text}</a>`
  ).join('');

  return `
    <footer class="footer">
      <div class="container">
        <span class="footer-text">${d.text}</span>
        <div class="footer-links">${links}</div>
      </div>
    </footer>`;
}


/* ══════════════════════════════════════════════════════════════
   RENDER ALL — Main render function
   ══════════════════════════════════════════════════════════════ */

function renderPortfolio() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderSidebar()}
    <div class="main-content">
      <div id="home-view" class="spa-view">
        ${renderHero()}
        ${renderAbout()}
        ${renderExperience()}
        ${renderProjects()}
        ${renderSkills()}
        ${renderHackathons()}
        ${renderCertifications()}
        ${renderLeadership()}
        ${renderContact()}
      </div>
      ${renderPersonalLife()}
      ${renderHireModal()}
      ${renderFooter()}
    </div>`;

  // Execute any embedded scripts (such as Credly badge script)
  app.querySelectorAll('script').forEach(oldScript => {
    const newScript = document.createElement('script');
    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}
