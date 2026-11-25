/**
 * Sons sintetizados com Web Audio (sem arquivos): motor, pneus cantando, motor de arranque e relé do pisca.
 * O contexto só é criado no primeiro clique em "Jogar" (exigência dos navegadores).
 */
export class AudioSystem {
  constructor(volume = 0.7) {
    this.volume = volume;
    this.ctx = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const ctx = (this.ctx = new (window.AudioContext || window.webkitAudioContext)());
      ctx.resume?.();
      this.master = ctx.createGain();
      this.master.gain.value = this.volume;
      this.master.connect(ctx.destination);

      // motor: dente de serra + quadrada, filtradas
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 900;
      this.engineGain = ctx.createGain();
      this.engineGain.gain.value = 0;
      this.engineOscA = ctx.createOscillator();
      this.engineOscA.type = 'sawtooth';
      this.engineOscB = ctx.createOscillator();
      this.engineOscB.type = 'square';
      this.engineOscA.connect(filter);
      this.engineOscB.connect(filter);
      filter.connect(this.engineGain);
      this.engineGain.connect(this.master);
      this.engineOscA.start();
      this.engineOscB.start();

      // pneus: ruído em loop numa faixa de frequência
      const noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate), data = noise.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      const source = ctx.createBufferSource();
      source.buffer = noise;
      source.loop = true;
      const band = ctx.createBiquadFilter();
      band.type = 'bandpass';
      band.frequency.value = 1800;
      band.Q.value = 2;
      this.tireGain = ctx.createGain();
      this.tireGain.gain.value = 0;
      source.connect(band);
      band.connect(this.tireGain);
      this.tireGain.connect(this.master);
      source.start();
    } catch {
      this.ctx = null;
    }
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  suspend() {
    this.ctx?.suspend?.();
  }

  resume() {
    this.ctx?.resume?.();
  }

  /** Atualizado a cada quadro com o estado do carro. */
  update({ engineLevel, throttle, engineOn, skid, sound }) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, f = sound.baseFrequency + engineLevel * sound.frequencyRange;
    const engine = engineOn ? 0.05 + throttle * 0.06 : 0, tire = Math.min(skid / 6, 1) * 0.06;
    // reagenda só quando o alvo muda de forma audível (antes: 4 eventos de automação por quadro)
    const last = this.lastTargets || (this.lastTargets = { f: -1, engine: -1, tire: -1 });
    if (Math.abs(f - last.f) > 0.05) {
      this.engineOscA.frequency.setTargetAtTime(f, t, 0.05);
      this.engineOscB.frequency.setTargetAtTime(f * 0.5, t, 0.05);
      last.f = f;
    }
    if (Math.abs(engine - last.engine) > 1e-4) this.engineGain.gain.setTargetAtTime(engine, t, 0.08), last.engine = engine;
    if (Math.abs(tire - last.tire) > 1e-4) this.tireGain.gain.setTargetAtTime(tire, t, 0.05), last.tire = tire;
  }

  /** Relé do pisca (clique curto). */
  playBlink(on) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator(), gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = on ? 1500 : 1100;
    gain.gain.value = 0.03;
    osc.connect(gain);
    gain.connect(this.master || this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.025);
  }

  /** Motor de arranque: zumbido elétrico + compressões do motor girando + ruído mecânico (~0,95 s). */
  playStarter() {
    const ctx = this.ctx;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const t0 = ctx.currentTime, dur = 0.95, out = ctx.createGain();
    out.gain.value = 1;
    out.connect(this.master || ctx.destination);

    const osc = ctx.createOscillator(), low = ctx.createBiquadFilter(), oscGain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(95, t0);
    osc.frequency.linearRampToValueAtTime(140, t0 + dur);
    low.type = 'lowpass';
    low.frequency.value = 1400;
    oscGain.gain.setValueAtTime(0, t0);
    oscGain.gain.linearRampToValueAtTime(0.2, t0 + 0.05);
    oscGain.gain.setValueAtTime(0.2, t0 + dur - 0.12);
    oscGain.gain.linearRampToValueAtTime(0, t0 + dur);
    const lfo = ctx.createOscillator(), lfoGain = ctx.createGain();
    lfo.type = 'square';
    lfo.frequency.value = 10.5;
    lfoGain.gain.value = 0.09;
    lfo.connect(lfoGain);
    lfoGain.connect(oscGain.gain);
    osc.connect(low);
    low.connect(oscGain);
    oscGain.connect(out);

    const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate), ch = buffer.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource(), band = ctx.createBiquadFilter(), noiseGain = ctx.createGain();
    noise.buffer = buffer;
    band.type = 'bandpass';
    band.frequency.value = 1500;
    band.Q.value = 1.1;
    noiseGain.gain.setValueAtTime(0.12, t0);
    noiseGain.gain.linearRampToValueAtTime(0, t0 + dur);
    lfoGain.connect(noiseGain.gain);
    noise.connect(band);
    band.connect(noiseGain);
    noiseGain.connect(out);

    const end = t0 + dur + 0.05;
    osc.start(t0), lfo.start(t0), noise.start(t0);
    osc.stop(end), lfo.stop(end), noise.stop(end);
    osc.onended = () => out.disconnect();   // libera o grafo do som ao terminar
  }

  dispose() {
    this.ctx?.close();
    this.ctx = null;
  }
}
