/* ============================================================
   MUSIC — Ambient Web Audio API Background Music
   ============================================================ */

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
    osc2.frequency.value = freq * 0.1;
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

  // Gentle pentatonic arpeggiation layer
  const arpNotes = [261.63, 293.66, 329.63, 392.00, 440.00]; // C4, D4, E4, G4, A4
  let arpIndex = 0;

  function playArpNote() {
    if (!musicPlaying || !audioCtx) return;

    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = arpNotes[arpIndex] * 0.5; // One octave lower

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 3);

    const arpFilter = audioCtx.createBiquadFilter();
    arpFilter.type = 'lowpass';
    arpFilter.frequency.value = 600;

    osc.connect(arpFilter);
    arpFilter.connect(gain);
    gain.connect(convolver);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 3.5);

    arpIndex = (arpIndex + 1) % arpNotes.length;
    setTimeout(playArpNote, 2500 + Math.random() * 2000);
  }

  // Start arpeggiation after a delay
  setTimeout(playArpNote, 3000);
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

function initMusic() {
  const musicBtn = document.getElementById('sidebar-music-btn');
  const musicIcon = musicBtn?.querySelector('.sidebar-music-icon');
  const musicLabel = musicBtn?.querySelector('.sidebar-music-label');

  if (!musicBtn) return;

  musicBtn.addEventListener('click', () => {
    if (!audioCtx) {
      createAmbientMusic();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!musicPlaying) {
      fadeIn();
      musicPlaying = true;
      musicBtn.classList.add('playing');
      if (musicIcon) musicIcon.textContent = '🔊';
      if (musicLabel) musicLabel.textContent = 'Music On';
    } else {
      fadeOut();
      musicPlaying = false;
      musicBtn.classList.remove('playing');
      if (musicIcon) musicIcon.textContent = '🔇';
      if (musicLabel) musicLabel.textContent = 'Play Music';
    }
  });
}
