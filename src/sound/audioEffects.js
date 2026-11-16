// Procedural Web Audio API Sound Engine & GTA Radio Synthesizer
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.radioPlaying = false;
    this.radioVolume = 0.25;
    this.currentStationIndex = 0;
    this.radioInterval = null;
    this.radioGainNode = null;
    this.radioStations = [
      { name: "TECH WAVE FM", genre: "80s Synthwave", bpm: 120 },
      { name: "SAN ANDREAS BEATS", genre: "West Coast Funk", bpm: 90 },
      { name: "LOS SANTOS TECHNO", genre: "Cyber Electro", bpm: 128 }
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.radioGainNode = this.ctx.createGain();
        this.radioGainNode.gain.setValueAtTime(this.muted ? 0 : this.radioVolume, this.ctx.currentTime);
        this.radioGainNode.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.radioGainNode && this.ctx) {
      this.radioGainNode.gain.setValueAtTime(this.muted ? 0 : this.radioVolume, this.ctx.currentTime);
    }
    return this.muted;
  }

  setRadioVolume(vol) {
    this.radioVolume = Math.max(0, Math.min(1, vol));
    if (this.radioGainNode && this.ctx && !this.muted) {
      this.radioGainNode.gain.setValueAtTime(this.radioVolume, this.ctx.currentTime);
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, vol = 0.1) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playHover() {
    this.playTone(1300, 'sine', 0.03, 0.03);
  }

  playClick() {
    this.playTone(850, 'triangle', 0.06, 0.08);
  }

  playMenuClick() {
    this.playTone(600, 'square', 0.04, 0.06);
  }

  playLoadoutSelect() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.09);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
      setTimeout(() => this.playTone(1500, 'square', 0.05, 0.08), 80);
    } catch (e) {}
  }

  playMissionAccepted() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
      setTimeout(() => this.playTone(980, 'sine', 0.15, 0.12), 140);
    } catch (e) {}
  }

  playPagerSound() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [1400, 1760, 1400, 1760].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.12, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * 0.07);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + (i + 1) * 0.07);
      });
    } catch (e) {}
  }

  playMissionPassed() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [
        { f: 523.25, d: 0.14 },
        { f: 659.25, d: 0.14 },
        { f: 783.99, d: 0.18 },
        { f: 1046.50, d: 0.45 }
      ];
      notes.forEach((note, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        const start = now + i * 0.14;
        osc.frequency.setValueAtTime(note.f, start);
        gain.gain.setValueAtTime(0.16, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + note.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + note.d);
      });
    } catch (e) {}
  }

  playWantedStar(level = 1) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const baseFreq = 180 + level * 80;
      this.playTone(baseFreq, 'sawtooth', 0.22, 0.15);
      setTimeout(() => this.playTone(baseFreq * 1.5, 'square', 0.18, 0.1), 60);
    } catch (e) {}
  }

  playNotification() {
    this.playTone(900, 'sine', 0.08, 0.1);
    setTimeout(() => this.playTone(1350, 'sine', 0.12, 0.12), 80);
  }

  playViceCityChime() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [880, 1108.73, 1318.51, 1760].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        const start = now + idx * 0.09;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.14, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.35);
      });
    } catch (e) {}
  }

  toggleRadio() {
    this.init();
    if (this.radioPlaying) {
      this.stopRadio();
      return false;
    } else {
      this.startRadio();
      return true;
    }
  }

  startRadio() {
    if (!this.ctx || this.radioPlaying) return;
    this.radioPlaying = true;
    const station = this.radioStations[this.currentStationIndex];
    const beatInterval = (60 / station.bpm) * 1000;

    let step = 0;
    const synthNotes = [220, 261.63, 329.63, 392, 440, 523.25, 659.25];
    const bassNotes = [110, 110, 130.81, 146.83, 164.81];

    this.radioInterval = setInterval(() => {
      if (!this.radioPlaying || this.muted || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        if (step % 2 === 0) {
          const kickOsc = this.ctx.createOscillator();
          const kickGain = this.ctx.createGain();
          kickOsc.type = 'sine';
          kickOsc.frequency.setValueAtTime(120, now);
          kickOsc.frequency.exponentialRampToValueAtTime(30, now + 0.1);
          kickGain.gain.setValueAtTime(0.25, now);
          kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
          kickOsc.connect(kickGain);
          kickGain.connect(this.radioGainNode);
          kickOsc.start(now);
          kickOsc.stop(now + 0.12);
        }

        const bassFreq = bassNotes[(step + this.currentStationIndex) % bassNotes.length];
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = 'sawtooth';
        bassOsc.frequency.setValueAtTime(bassFreq, now);
        bassGain.gain.setValueAtTime(0.12, now);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        bassOsc.connect(bassGain);
        bassGain.connect(this.radioGainNode);
        bassOsc.start(now);
        bassOsc.stop(now + 0.2);

        if (step % 1 === 0) {
          const noteFreq = synthNotes[(step * 2 + this.currentStationIndex) % synthNotes.length];
          const synthOsc = this.ctx.createOscillator();
          const synthGain = this.ctx.createGain();
          synthOsc.type = 'triangle';
          synthOsc.frequency.setValueAtTime(noteFreq, now);
          synthGain.gain.setValueAtTime(0.08, now);
          synthGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
          synthOsc.connect(synthGain);
          synthGain.connect(this.radioGainNode);
          synthOsc.start(now);
          synthOsc.stop(now + 0.15);
        }

        step = (step + 1) % 16;
      } catch (e) {}
    }, beatInterval / 2);
  }

  stopRadio() {
    this.radioPlaying = false;
    if (this.radioInterval) {
      clearInterval(this.radioInterval);
      this.radioInterval = null;
    }
  }

  nextStation() {
    this.currentStationIndex = (this.currentStationIndex + 1) % this.radioStations.length;
    this.playTone(800, 'square', 0.08, 0.1);
    if (this.radioPlaying) {
      this.stopRadio();
      this.startRadio();
    }
    return this.radioStations[this.currentStationIndex];
  }

  getCurrentStation() {
    return this.radioStations[this.currentStationIndex];
  }
}

export const soundManager = new SoundEngine();
