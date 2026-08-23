/* ============================================================
   Prince John — Portfolio Interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────────────────────
  // 1. PARTICLE CONSTELLATION BACKGROUND
  // ──────────────────────────────────────────────────────────
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouse = { x: null, y: null };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            this.x -= dx * 0.01;
            this.y -= dy * 0.01;
          }
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 100);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      drawConnections();
      animationId = requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });
  }


  // ──────────────────────────────────────────────────────────
  // 2. TYPING ANIMATION
  // ──────────────────────────────────────────────────────────
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const roles = [
      'AI & ML Engineer',
      'Full-Stack Developer',
      'Hackathon Builder',
      'Agentic AI Enthusiast',
      'IoT Tinkerer',
      'Problem Solver'
    ];

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
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before next word
      }

      setTimeout(typeEffect, typeSpeed);
    }

    setTimeout(typeEffect, 1000);
  }


  // ──────────────────────────────────────────────────────────
  // 3. SCROLL REVEAL ANIMATIONS
  // ──────────────────────────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
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


  // ──────────────────────────────────────────────────────────
  // 4. STAT COUNTER ANIMATION
  // ──────────────────────────────────────────────────────────
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


  // ──────────────────────────────────────────────────────────
  // 5. NAVBAR SCROLL EFFECT
  // ──────────────────────────────────────────────────────────
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  // ──────────────────────────────────────────────────────────
  // 6. ACTIVE NAV LINK TRACKING
  // ──────────────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[data-nav]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-nav') === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));


  // ──────────────────────────────────────────────────────────
  // 7. MOBILE MENU TOGGLE
  // ──────────────────────────────────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }


  // ──────────────────────────────────────────────────────────
  // 8. SMOOTH SCROLL FOR ANCHOR LINKS
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  // ──────────────────────────────────────────────────────────
  // 9. MOUSE GLOW EFFECT ON CARDS
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('.project-card, .skill-category, .hackathon-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
      card.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(56, 189, 248, 0.04), transparent 40%), rgba(17, 24, 39, 0.6)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });


  // ──────────────────────────────────────────────────────────
  // 10. AMBIENT BACKGROUND MUSIC (Web Audio API)
  // ──────────────────────────────────────────────────────────
  const musicToggle = document.getElementById('music-toggle');
  const musicIcon = document.getElementById('music-icon');
  const musicLabel = document.getElementById('music-label');
  let audioCtx = null;
  let musicPlaying = false;
  let masterGain = null;
  let musicNodes = [];

  function createAmbientMusic() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioCtx.destination);

    // Soft reverb via convolver with generated impulse response
    const convolver = audioCtx.createConvolver();
    const reverbLength = 3 * audioCtx.sampleRate;
    const impulse = audioCtx.createBuffer(2, reverbLength, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < reverbLength; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / reverbLength, 2.5);
      }
    }
    convolver.buffer = impulse;

    const reverbGain = audioCtx.createGain();
    reverbGain.gain.value = 0.3;
    convolver.connect(reverbGain);
    reverbGain.connect(masterGain);

    const dryGain = audioCtx.createGain();
    dryGain.gain.value = 0.7;
    dryGain.connect(masterGain);

    // Dreamy pad layers — Cmaj7 chord (C3, E3, G3, B3)
    const notes = [130.81, 164.81, 196.00, 246.94];
    const detunes = [-5, 3, -2, 7];

    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.detune.value = detunes[i];

      const osc2 = audioCtx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.value = freq * 0.999;
      osc2.detune.value = -detunes[i];

      // LFO for gentle volume swell
      const lfo = audioCtx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.08 + i * 0.03;
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.value = 0.15;
      lfo.connect(lfoGain);

      const voiceGain = audioCtx.createGain();
      voiceGain.gain.value = 0.06;
      lfoGain.connect(voiceGain.gain);

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 800 + i * 100;
      filter.Q.value = 0.5;

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(voiceGain);
      voiceGain.connect(dryGain);
      voiceGain.connect(convolver);

      osc.start();
      osc2.start();
      lfo.start();
      musicNodes.push(osc, osc2, lfo);
    });

    // Subtle high sparkle
    const sparkle = audioCtx.createOscillator();
    sparkle.type = 'sine';
    sparkle.frequency.value = 523.25;
    const sparkleGain = audioCtx.createGain();
    sparkleGain.gain.value = 0.012;
    const sparkleLfo = audioCtx.createOscillator();
    sparkleLfo.type = 'sine';
    sparkleLfo.frequency.value = 0.15;
    const sparkleLfoGain = audioCtx.createGain();
    sparkleLfoGain.gain.value = 0.01;
    sparkleLfo.connect(sparkleLfoGain);
    sparkleLfoGain.connect(sparkleGain.gain);

    const sparkleFilter = audioCtx.createBiquadFilter();
    sparkleFilter.type = 'lowpass';
    sparkleFilter.frequency.value = 1200;

    sparkle.connect(sparkleFilter);
    sparkleFilter.connect(sparkleGain);
    sparkleGain.connect(convolver);

    sparkle.start();
    sparkleLfo.start();
    musicNodes.push(sparkle, sparkleLfo);
  }

  function fadeIn() {
    if (masterGain) {
      masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
      masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.35, audioCtx.currentTime + 2);
    }
  }

  function fadeOut() {
    if (masterGain) {
      masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
      masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
    }
  }

  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      if (!audioCtx) {
        createAmbientMusic();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (!musicPlaying) {
        fadeIn();
        musicPlaying = true;
        musicToggle.classList.add('playing');
        musicIcon.textContent = '🔊';
        musicLabel.textContent = 'Music On';
      } else {
        fadeOut();
        musicPlaying = false;
        musicToggle.classList.remove('playing');
        musicIcon.textContent = '🔇';
        musicLabel.textContent = 'Play Music';
      }
    });
  }

});
