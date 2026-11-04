/**
 * Audio synthesis utility for Smart Factory Engineering Challenge
 * Uses Web Audio API for zero-latency, reliable countdown sound effects
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  } catch {
    return null;
  }
}

/**
 * Plays an alert tick sound for the final 10-second countdown.
 * Increases in frequency/pitch during the final 3 seconds for urgency.
 */
export function playCountdownTick(secondsLeft: number): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Frequency rises as time runs out (<= 3s: 980Hz, <= 10s: 780Hz)
    const frequency = secondsLeft <= 3 ? 980 : 780;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Short crisp percussive envelope (70ms)
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.07);
  } catch (err) {
    console.warn('Countdown audio error', err);
  }
}

/**
 * Plays a cheerful, positive reward chime when the answer is correct (+1 point).
 * Two-tone ascending chime (587Hz -> 880Hz) with bell sparkle.
 */
export function playCorrectAnswerSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [
      { freq: 587.33, start: 0, duration: 0.12 }, // D5
      { freq: 880.00, start: 0.09, duration: 0.35 }, // A5
      { freq: 1174.66, start: 0.12, duration: 0.32 }, // D6 harmonic sparkle
    ];

    notes.forEach(({ freq, start, duration }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + start);

      const st = now + start;
      const et = st + duration;

      gain.gain.setValueAtTime(0.0001, st);
      gain.gain.linearRampToValueAtTime(0.22, st + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, et);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(st);
      osc.stop(et);
    });
  } catch (err) {
    console.warn('Correct answer audio error', err);
  }
}

/**
 * Plays a gentle, distinct wrong answer tone when the answer is incorrect (0 points).
 * Descending two-tone (349Hz -> 246Hz).
 */
export function playIncorrectAnswerSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [
      { freq: 349.23, start: 0, duration: 0.14 }, // F4
      { freq: 246.94, start: 0.11, duration: 0.28 }, // B3
    ];

    notes.forEach(({ freq, start, duration }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);

      osc.frequency.setValueAtTime(freq, now + start);

      const st = now + start;
      const et = st + duration;

      gain.gain.setValueAtTime(0.0001, st);
      gain.gain.linearRampToValueAtTime(0.18, st + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, et);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(st);
      osc.stop(et);
    });
  } catch (err) {
    console.warn('Incorrect answer audio error', err);
  }
}

/**
 * Plays a timeout buzzer when time expires before an answer is submitted.
 * Double descending tone (392Hz -> 261Hz).
 */
export function playTimeoutSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const beeps = [
      { freq: 392.00, start: 0, duration: 0.12 },
      { freq: 261.63, start: 0.14, duration: 0.28 },
    ];

    beeps.forEach(({ freq, start, duration }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);

      osc.frequency.setValueAtTime(freq, now + start);

      const st = now + start;
      const et = st + duration;

      gain.gain.setValueAtTime(0.0001, st);
      gain.gain.linearRampToValueAtTime(0.16, st + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, et);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(st);
      osc.stop(et);
    });
  } catch (err) {
    console.warn('Timeout audio error', err);
  }
}

/**
 * Plays an uplifting, triumphant celebratory victory fanfare on the summary screen.
 * Synthesizes a rich arpeggiated harmonic chord with bells and shimmer.
 */
export function playSummaryFanfare(percentage: number = 100): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Harmonious victory progression
    // C major pentatonic / fanfare: G4 -> C5 -> E5 -> G5 -> C6 (with harmonic layer)
    const notes = [
      { freq: 392.00, start: 0.00, duration: 0.16 }, // G4
      { freq: 523.25, start: 0.13, duration: 0.16 }, // C5
      { freq: 659.25, start: 0.26, duration: 0.16 }, // E5
      { freq: 783.99, start: 0.39, duration: 0.22 }, // G5
      { freq: 1046.50, start: 0.54, duration: 1.10 }, // C6 (triumphant climax)
      { freq: 1318.51, start: 0.54, duration: 1.10 }, // E6 (harmony)
      { freq: 1567.98, start: 0.58, duration: 1.00 }, // G6 (sparkle shimmer)
    ];

    const now = ctx.currentTime;

    notes.forEach(({ freq, start, duration }) => {
      // Primary melodic tone (triangle gives rich, warm brass/organ body)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now + start);

      // Shimmering overtone (sine for pure high harmonics)
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now + start);

      const startTime = now + start;
      const endTime = startTime + duration;

      noteGain.gain.setValueAtTime(0.0001, startTime);
      // Quick attack
      noteGain.gain.linearRampToValueAtTime(0.24, startTime + 0.04);
      // Exponential decay
      noteGain.gain.exponentialRampToValueAtTime(0.0001, endTime);

      osc1.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(ctx.destination);

      osc1.start(startTime);
      osc1.stop(endTime);
      osc2.start(startTime);
      osc2.stop(endTime);
    });

    // Add gentle celebratory chime sparkles
    const sparkles = [1568, 1760, 2093];
    sparkles.forEach((freq, idx) => {
      const chimeOsc = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      const chimeStart = now + 0.7 + idx * 0.12;
      const chimeEnd = chimeStart + 0.45;

      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(freq, chimeStart);

      chimeGain.gain.setValueAtTime(0.0001, chimeStart);
      chimeGain.gain.linearRampToValueAtTime(0.09, chimeStart + 0.02);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, chimeEnd);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(ctx.destination);

      chimeOsc.start(chimeStart);
      chimeOsc.stop(chimeEnd);
    });
  } catch (err) {
    console.warn('Summary fanfare audio error', err);
  }
}
