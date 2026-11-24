type SoundEffect = 'move' | 'capture' | 'win' | 'lose' | 'chat' | 'tick' | 'error' | 'dice';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (Ctx) {
      audioCtx = new Ctx();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    void audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playTone(
  freq: number,
  durationSec: number,
  type: OscillatorType = 'sine',
  gainValue = 0.08,
  delaySec = 0,
): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime + delaySec;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(gainValue, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + durationSec + 0.02);
}

export function playSound(effect: SoundEffect, enabled: boolean): void {
  if (!enabled) return;
  try {
    switch (effect) {
      case 'move':
        playTone(440, 0.08, 'triangle', 0.07);
        break;
      case 'capture':
        playTone(320, 0.07, 'sawtooth', 0.06, 0);
        playTone(220, 0.1, 'sawtooth', 0.06, 0.06);
        break;
      case 'dice':
        playTone(500, 0.04, 'square', 0.04, 0);
        playTone(620, 0.04, 'square', 0.04, 0.05);
        playTone(760, 0.06, 'square', 0.05, 0.1);
        break;
      case 'win':
        playTone(523.25, 0.12, 'triangle', 0.08, 0);
        playTone(659.25, 0.12, 'triangle', 0.08, 0.1);
        playTone(783.99, 0.22, 'triangle', 0.09, 0.2);
        break;
      case 'lose':
        playTone(349.23, 0.14, 'sine', 0.07, 0);
        playTone(293.66, 0.22, 'sine', 0.07, 0.12);
        break;
      case 'chat':
        playTone(660, 0.06, 'sine', 0.05);
        break;
      case 'tick':
        playTone(880, 0.04, 'sine', 0.04);
        break;
      case 'error':
        playTone(190, 0.14, 'sawtooth', 0.06);
        break;
    }
  } catch {
    // Ignore audio errors if user hasn't interacted yet
  }
}
