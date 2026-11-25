(function combatEffects() {
  const ns = 'http://www.w3.org/2000/svg';
  const motifs = {
    crescent: 'M-49 27Q-12 35 37-37Q36 4 8 25Q-21 43-49 27Z',
    kick: 'M-45 31Q-25 31-8 14L25-35L42-25L19 12Q-1 37-39 42Z',
    book: 'M0-23Q-24-43-46-24V25Q-23 15 0 33Q23 15 46 25V-24Q22-43 0-23V33M-34-15L-10-7M-34-3L-10 5M10-7L34-15M10 5L34-3',
    leaf: 'M-42 30Q-49-30 39-36Q46 36-38 26M-48 40L31-26M-20 14L-23-12M-4 1L20 3',
    staff: 'M-47 36L36-21M-59 41L-35 26M36-21Q57-22 42-43Q18-40 36-21Z',
    gem: 'M0-43L33-14L25 26L0 43L-25 26L-33-14Z M0-43L13-9L0 43L-13-9Z M-33-14L-13-9L13-9L33-14',
    orbit: 'M-47 2a47 14 0 1 0 94 0a47 14 0 1 0-94 0M-34 27Q-52-3 34-28Q64-33 35 1Q3 33-34 27Z',
    arrow: 'M-56 0H49L25-12M49 0L25 12M-50 0L-37-13M-50 0L-37 13',
    flame: 'M-37 29Q-49 6-26-17Q-20 5-11 1Q-1-25-5-44Q25-26 18-9Q29-13 32-27Q60 18 27 37Q-1 56-37 29Z',
    scythe: 'M-45 45L24-31M18-23Q29-44 56-34Q45-18 29-18Q51-13 60-19Q46 1 23-7',
    veil: 'M-54-21Q-11-53 24-30Q55-13 41 8Q27 24 51 37Q5 47-25 12Q-36 0-54 4Z',
    mask: 'M-46-30L-23-20L0-29L23-20L46-30L42 4L24 28L0 38L-24 28L-42 4ZM-31-3L-11 8L-28 10ZM31-3L11 8L28 10Z',
    sun: 'M23 0A23 23 0 1 1-23 0A23 23 0 1 1 23 0M0-51V-32M0 32V51M-51 0H-32M32 0H51M-36-36L-23-23M23 23L36 36M36-36L23-23M-23 23L-36 36',
    lion: 'M-44-39L-19-26L0-37L19-26L44-39L37-10L48 4L29 24L10 39H-10L-29 24L-48 4L-37-10ZM-22-6L-11 3M22-6L11 3M-9 17L0 23L9 17M-17 27Q0 40 17 27',
    shatter: 'M0-49L-5-14L10-3L-15 9L-29 42M10-3L44 21M-5-14L-43-27M-15 9L24 41M-15 9L-46 16M10-3L38-41',
    chain: 'M-54 22Q-44 30-31 22L-19 12Q-15 0-23-7Q-33-13-43-5L-55 7ZM-20 3Q-10 12 2 3L15-8Q18-18 11-24Q3-32-8-25L-20-15ZM14-17Q24-9 36-18L49-29Q54-38 46-46Q38-53 26-45L15-35Z',
    star: 'M0-49L10-11L48 0L10 11L0 49L-10 11L-48 0L-10-11ZM-34-34L-24-23M30 27L37 36',
    portal: 'M45 0A45 31 0 1 1-45 0A45 31 0 1 1 45 0M31 0A31 20 0 1 1-31 0A31 20 0 1 1 31 0M0-38V-22M0 22V38',
    drop: 'M0-49Q37-10 31 13Q26 35 0 39Q-26 35-31 13Q-37-10 0-49ZM-19 6Q-17 22-4 24',
    wave: 'M-56 17Q-28 31-8-2Q17-39 46-17Q56-8 50 6Q38-10 22 10Q8 34-19 36Q-40 37-56 17Z',
    ice: 'M0-48V48M-42-24L42 24M42-24L-42 24M-12-35L0-26L12-35M-12 35L0 26L12 35M-37-12L-23-14L-26-30M37 12L23 14L26 30M37-12L23-14L26-30M-37 12L-23 14L-26 30',
    shield: 'M0-45L37-31L33 6Q26 33 0 46Q-26 33-33 6L-37-31ZM0-31V33M-24-10H24',
    cage: 'M-39-28L-23-43H23L39-28V31L23 43H-23L-39 31ZM-20-35V35M0-39V39M20-35V35',
    candy: 'M-22-17L-50-32L-47 31L-22 16M22-17L50-32L47 31L22 16M24 0A24 24 0 1 1-24 0A24 24 0 1 1 24 0M-10-20L10 21',
    pot: 'M-44-7H44L34 24Q0 48-34 24ZM-53-14H53M-15-23Q-27-35-15-48M5-23Q-6-37 5-48M25-23Q15-35 25-48',
    feather: 'M-45 43Q-38-46 42-48Q39 23-30 29M-45 43L35-37M-31 19L-24-13M-13 3L19 2',
    rabbit: 'M-29-2L-40-35Q-42-51-29-49L-13-17L-2-49Q8-52 11-42L9-16Q41-15 40 10Q39 34 11 39H-10Q-45 33-29-2Z',
    bolt: 'M13-54L-37 7L-5 7L-18 51L43-13L11-13Z',
    axe: 'M-46 42L32-39M-3-2Q-32-10-40-39L-17-46Q-4-20 13-17M13-17Q33-12 49 20L30 34Q20 6-3-2',
    arch: 'M-43 40V-5Q-43-41 0-47Q43-41 43-5V40H27V-2Q27-28 0-31Q-27-28-27-2V40ZM-55 40H55M-38-17L-26-11M38-17L26-11',
    note: 'M-17 30V-39L33-48V15M-17-25L33-34M-17 30Q-20 47-38 38Q-49 28-35 23Q-23 18-17 30ZM33 15Q29 36 10 27Q0 16 13 10Q25 5 33 15Z',
    wing: 'M-48 36Q-34-30 48-44Q31-17 1-13L29-16Q14 2-12 6L12 4Q-1 22-27 25L-11 24Q-27 38-48 36Z',
    piston: 'M-47-16H-8V16H-47ZM-8-8H38V8H-8M38-22H52V22H38ZM-43-6H-14M-43 6H-14',
    flask: 'M-13-44H13M-9-44V-14L-30 25Q-38 41-18 43H18Q38 41 30 25L9-14V-44M-25 15Q0 29 25 15',
    whirl: 'M53 0Q50-39 1-38Q-49-37-46 1Q-43 33-3 34Q35 35 33 2Q30-20 7-17Q-12-15-11 4Q-9 12 2 9',
    steam: 'M-29 40Q-51 17-20-1Q10-18-20-44M0 39Q-15 15 9-2Q31-20 13-44M29 39Q13 16 33 2Q51-16 38-35',
    heart: 'M0 39L-38 5Q-54-18-32-33Q-12-44 0-24Q12-44 32-33Q54-18 38 5Z',
    stitch: 'M-52 24L52-24M-45 10L-33 30M-27 1L-15 21M-9-8L3 12M9-17L21 3M27-26L39-6M43-33L54-15',
    claw: 'M-49 31Q-22-15 21-38Q5-9-32 42ZM-19 40Q-1-6 43-28Q24 0 1 41ZM10 45Q22 13 57-7Q44 16 28 48Z',
    horn: 'M-52-33Q-45 21-17 21L0 39L17 21Q45 21 52-33Q31-7 14-10L0-4L-14-10Q-31-7-52-33Z',
    egg: 'M0-47Q22-47 34-6Q46 40 0 43Q-46 40-34-6Q-22-47 0-47ZM-32 3L-11-7L3 3L16-10L34 1',
    shot: 'M-59 0H26L58-6L26-12H6M-59 11H11M-48-11H-18M-34 22H-8',
    spark: 'M0-40L4-8L37 0L4 8L0 40L-4 8L-37 0L-4-8ZM-38-24L-19-13M19 13L38 24',
    target: 'M37 0A37 37 0 1 1-37 0A37 37 0 1 1 37 0M0-48V-22M0 22V48M-48 0H-22M22 0H48M9 0A9 9 0 1 1-9 0A9 9 0 1 1 9 0',
    hammer: 'M-49 40L12-22M-2-42L21-53L51-23L37 1L12-22ZM-11-35L28 5',
    stamp: 'M-44-30H44V30H-44ZM-31-20H31V20H-31ZM0-13L11 8L-11 8Z',
    mud: 'M-57 25Q-30-4-12 16Q-11-25 9-14Q18-41 35 8Q53-12 58 28Z M-43-17L-34-23M31-33L44-25',
    coil: 'M-45 33Q-52 12-19 8Q28 6 23-10Q19-22-12-17Q-38-13-39-31Q-39-48-9-46L24-39M23-44L42-35L23-28',
    eye: 'M-55 0Q0-54 55 0Q0 54-55 0ZM13 0A13 13 0 1 1-13 0A13 13 0 1 1 13 0M0-15V15',
    thorn: 'M-53 34Q-21 2 53-30M-34 17L-35-8L-12 2M-7-1L-1-27L16-13M20-15L36-36L40-24',
    petal: 'M0 0Q-51-5-44-35Q-25-51 0 0Q-12-54 14-49Q38-41 0 0Q45-45 52-15Q57 7 0 0Q54 14 31 41Q14 57 0 0Q-13 51-35 38Q-49 21 0 0Z',
    moon: 'M27-38Q-20-34-20 2Q-20 33 32 30Q13 52-14 41Q-44 30-42 0Q-39-42 4-45Z',
    root: 'M0-45L-5 3L-45 39M-5 3L23 44M-5 3L50 17M-25 21L-37 14M-25 21L-20 43M14 28L34 24M22 11L31-12',
    fin: 'M-52 24Q-27 19-16-33Q16-28 37 10L56 22ZM-18 8L-6-19M4 13L11-9',
    ring: 'M47 0A47 27 0 1 1-47 0A47 27 0 1 1 47 0M31 0A31 14 0 1 1-31 0A31 14 0 1 1 31 0M-35 16L-22 10M35-16L22-10',
    echo: 'M-52 32Q-22 0-52-32M-29 31Q0 0-29-31M-5 30Q23 0-5-30M20 28Q49 0 20-28',
    leap: 'M-48 33Q0-76 48 33M25 13L48 33L53 4M-37 17L-55 7',
    ink: 'M-12-35Q7-51 17-28Q38-42 44-19Q58 4 31 10Q47 32 22 41Q-1 53-14 27Q-39 44-49 20Q-58-4-31-10Q-39-35-12-35Z',
    pen: 'M-40 42L-28 2L23-44L45-19L-10 27ZM-40 42L15-16M-18 0L-8 11',
    rapier: 'M-51 43L45-47L38-25L-39 45ZM-54 17L-24 48M-49 39L-58 48',
    crown: 'M-43 30L-49-26L-22-1L0-39L22-1L49-26L43 30ZM-40 15H40',
    box: 'M-44-10L0-34L44-10V30L0 48L-44 30ZM-44-10L0 10L44-10M0 10V48M-38-30L0-50L38-30',
    spring: 'M-49 29Q-64 12-32 7Q-10 5-9 19Q-8 37-28 36Q-48 35-37 13Q-23-11 4-12Q29-12 29 6Q29 20 13 21Q-1 21 12-3Q21-20 46-29',
    wood: 'M-46 29L35-43L49-27L-34 43ZM-36 27L31-31M-20 26L29-17',
    clap: 'M-49-13L-21-8L-10 9L-20 31L-49 21M49-13L21-8L10 9L20 31L49 21M0-46V-17M-24-39L-13-20M24-39L13-20',
    drum: 'M-40-22Q0-44 40-22V21Q0 42-40 21ZM-40-22Q0-2 40-22M-40 3L-19-10L0 16L19-10L40 3',
    cup: 'M-40-22H31V11Q24 38-7 39Q-40 35-40 11ZM31-17H43Q62 1 40 14H28M-53 43H45',
    gift: 'M-40-21H40V37H-40ZM-46-28H46V-11H-46ZM0-28V37M0-28Q-43-24-29-48Q-13-52 0-28Q13-52 29-48Q43-24 0-28Z',
    umbrella: 'M-46 31L49-39L17 20L-24 33L-46 31ZM-26 27L49-39M-3 23L49-39M-42 32Q-56 31-57 22',
    icicle: 'M-38-38L-29 17L-15-22L0 43L9-27L27 26L37-38ZM-25-31L-1-22L26-31',
    sword: 'M-44 43L-23 22L-38 7L-31 0L-21 10L36-47L49-46L50-34L-7 23L3 33L-4 40L-19 25L-40 47Z',
  };
  const voices = {
    pulse: ['sine', 316, 820, .82], chime: ['sine', 760, 2400, .62], string: ['triangle', 450, 1600, 1.6],
    blade: ['sawtooth', 250, 2700, 3.8], brass: ['sawtooth', 144, 930, 1.1], choir: ['triangle', 165, 680, .83],
    water: ['sine', 246, 1340, 1.5], glass: ['sine', 1020, 3450, 5.5], bubble: ['sine', 540, 1200, 2.2],
    wind: ['sine', 350, 2100, 1.3], bell: ['sine', 680, 2450, 4.1], circuit: ['square', 365, 2670, 3.1],
    fabric: ['triangle', 185, 740, .87], flute: ['sine', 780, 1850, 2.0], harp: ['triangle', 490, 2270, 2.6],
    metal: ['triangle', 172, 2950, 5.5], drum: ['sine', 105, 505, 1.4], snap: ['triangle', 275, 1950, 1.1],
    wood: ['triangle', 210, 1090, 2.4], whistle: ['sine', 1250, 2600, 3.5], buzz: ['square', 225, 1290, 2.4],
  };
  const statusShapes = {
    freeze: ['ice', '#b6edff'], stun: ['bolt', '#ffe3a4'], root: ['root', '#a6e584'], guard: ['shield', '#84e9ec'],
    euphoria: ['orbit', '#ffcf71'], boon: ['star', '#9be7b7'], bane: ['chain', '#ef9cca'], revive: ['flask', '#b4ef7d'],
    shieldedEuphoria: ['wing', '#ffeda2'],
  };
  const sharedFields = new Set(['academy-grounds', 'cactus-creek', 'ip-field', 'toy-store', 'christmas-mall', 'valhalla-bar']);
  const rangedMotifs = new Set([
    'arrow', 'bolt', 'book', 'coil', 'drop', 'eye', 'feather', 'flame', 'gem', 'note', 'pen',
    'portal', 'rabbit', 'shot', 'staff', 'sun', 'veil', 'wave', 'whirl',
  ]);
  function isRanged(card) {
    const lead = window.peppermintCombatRecipes[card?.id]?.strike.split('+')[0];
    return card?.role === 'Shooter' || rangedMotifs.has(lead);
  }
  const layers = new Set();
  const noiseByContext = new WeakMap();

  function seedFor(value) {
    let seed = 2166136261;
    for (const char of value) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
    return seed >>> 0;
  }

  function svgNode(name, attributes, parent) {
    const node = document.createElementNS(ns, name);
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, value);
    parent?.appendChild(node);
    return node;
  }

  function frame(elementOrRect) {
    const box = elementOrRect?.getBoundingClientRect?.() || elementOrRect;
    return box?.width && box?.height ? { x: box.left + box.width / 2, y: box.top + box.height / 2, w: box.width, h: box.height } : null;
  }

  function motion(node, frames, duration, delay = 0, easing = 'cubic-bezier(.18,.65,.27,1)') {
    node.animate?.(frames, { delay, duration, easing, fill: 'both' });
  }

  function symbol(parent, motif, x, y, rotation = 0) {
    const outer = svgNode('g', { transform: `translate(${x} ${y}) rotate(${rotation})` }, parent);
    const inner = svgNode('g', {}, outer);
    svgNode('path', { d: motifs[motif], class: 'combat-fx-motif' }, inner);
    return inner;
  }

  function sound(audio, recipe, seed, attack, impactTime, power) {
    if (!audio || audio.state !== 'running') return;
    const [wave, pitch, cutoff, resonance] = voices[recipe.voice];
    const now = audio.currentTime + .012;
    const note = pitch * [1, 1.059, 1.125, 1.215, 1.333, 1.414, 1.498][seed % 7];
    const hit = impactTime / 1000;
    const mix = audio.createGain();
    mix.gain.value = .62;
    mix.connect(audio.destination);
    const tail = hit + .66;

    const sweep = (type, from, to, delay, length, gain) => {
      const osc = audio.createOscillator();
      const volume = audio.createGain();
      const t = now + delay;
      osc.type = type;
      osc.frequency.setValueAtTime(from, t);
      osc.frequency.exponentialRampToValueAtTime(Math.max(25, to), t + length);
      volume.gain.setValueAtTime(.0001, t);
      volume.gain.exponentialRampToValueAtTime(gain, t + .012);
      volume.gain.exponentialRampToValueAtTime(.0001, t + length);
      osc.connect(volume).connect(mix);
      osc.start(t);
      osc.stop(t + length + .008);
    };
    sweep('sine', note * .44, note * .82, 0, .16, .025);
    sweep(wave, note, note * (attack ? .36 : 1.38), .17, .16 + (seed % 4) * .024, .038);
    sweep(wave, note * (attack ? .66 : 1.24), note * .25, hit, .24, .075 * power);
    sweep('sine', note * (1.73 + (seed % 4) * .1), note * 1.2, hit + .045, .29, .029);
    sweep('sine', note * 2, note * 1.49, hit + .16, .24, .015);

    let buffer = noiseByContext.get(audio);
    if (!buffer) {
      buffer = audio.createBuffer(1, Math.ceil(audio.sampleRate * .3), audio.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let i = 0; i < samples.length; i++) samples[i] = (Math.random() * 2 - 1) * (1 - i / samples.length) ** 1.4;
      noiseByContext.set(audio, buffer);
    }
    const noise = audio.createBufferSource();
    const filter = audio.createBiquadFilter();
    const dynamics = audio.createGain();
    noise.buffer = buffer;
    filter.type = 'bandpass';
    filter.frequency.value = cutoff * (attack ? 1 : 1.24);
    filter.Q.value = resonance;
    dynamics.gain.setValueAtTime(.05 * power, now + hit);
    dynamics.gain.exponentialRampToValueAtTime(.0001, now + hit + .27);
    noise.connect(filter).connect(dynamics).connect(mix);
    noise.start(now + hit);
    noise.stop(now + hit + .28);
    window.setTimeout(() => mix.disconnect(), (tail + .08) * 1000);
  }

  function play({ card, kind = 'skill', source, targets = [], audio }) {
    const recipe = window.peppermintCombatRecipes[card?.id];
    const start = frame(source);
    const targetFrames = targets.map((element) => ({ element, box: frame(element) })).filter(({ box }) => box).slice(0, 3);
    const endPoints = targetFrames.map(({ box }) => box);
    if (!recipe || (!start && !endPoints.length)) return false;
    if (kind === 'strike' && recipe.strike === '-') return false;
    const origin = start || endPoints[0];
    const destinations = endPoints.length ? endPoints : [origin];
    const attack = kind === 'strike';
    const melee = attack && !isRanged(card);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const signature = seedFor(`${card.id}:${kind}`);
    const [lead, mark] = (attack ? recipe.strike : recipe.skill).split('+');
    const changesArena = !attack && sharedFields.has(card.id);
    const power = changesArena ? 1.12 : 1;
    const impactAt = attack ? 590 : changesArena ? 530 : 405;
    const end = impactAt + (reduced ? 290 : 580);
    const isProtection = ['shield', 'heart', 'cage', 'chain'].includes(mark);
    const traces = ['wave', 'bolt', 'whirl', 'flame', 'leaf', 'wing'].includes(lead) ? 3 : 1;
    const layer = svgNode('svg', { class: 'combat-fx-layer', 'aria-hidden': 'true', viewBox: `0 0 ${window.innerWidth} ${window.innerHeight}` }, document.body);
    layer.style.setProperty('--combat-color', recipe.color);
    layer.style.setProperty('--combat-power', power);
    while (layers.size >= 6) {
      const old = layers.values().next().value;
      layers.delete(old);
      old.remove();
    }
    layers.add(layer);

    if (!reduced) {
      if (changesArena) {
        const haze = svgNode('ellipse', { cx: origin.x, cy: origin.y, rx: Math.min(window.innerWidth * .28, 400), ry: Math.min(window.innerHeight * .24, 225), class: 'combat-fx-haze' }, layer);
        motion(haze, [{ opacity: 0 }, { opacity: .22 }, { opacity: 0 }], end);
      }
      const windup = symbol(layer, lead, origin.x, origin.y, (signature % 21) - 10);
      motion(windup, [
        { opacity: 0, transform: 'scale(.38)' },
        { opacity: .95, transform: `scale(${1.03 * power})`, offset: .72 },
        { opacity: 0, transform: `scale(${1.35 * power})` },
      ], Math.max(180, impactAt - 90));
      const release = svgNode('ellipse', { cx: origin.x, cy: origin.y, rx: Math.min(origin.w * .61, 93), ry: Math.min(origin.h * .52, 80), class: 'combat-fx-ring' }, layer);
      motion(release, [{ opacity: 0, transform: 'scale(.7)' }, { opacity: .83 }, { opacity: 0, transform: 'scale(1.42)' }], 235, impactAt * .25);
    }

    destinations.forEach((target, index) => {
      const dx = target.x - origin.x;
      const dy = target.y - origin.y;
      const distance = Math.hypot(dx, dy);
      const rotation = (Math.atan2(dy, dx) * 180 / Math.PI) || 0;
      const direct = ['arrow', 'shot', 'bolt', 'rapier'].includes(lead);
      const spread = direct ? 0 : (signature % 2 ? -1 : 1) * Math.min(90, distance * (.14 + (signature % 7) * .013));
      const arcX = distance ? -dy / distance * spread : 0;
      const arcY = distance ? dx / distance * spread : 0;
      const delay = Math.min(index * 45, 90);
      if (melee && !reduced && distance > 12) {
        const reach = Math.max(.22, 1 - Math.min(distance * .7, Math.min(origin.h, target.h) * .45) / distance);
        source?.animate?.([
          { transform: 'translate(0, 0)', filter: 'brightness(1)' },
          { transform: `translate(${-dx * .045}px, ${-dy * .045}px)`, offset: .36 },
          { transform: `translate(${dx * reach}px, ${dy * reach}px) scale(1.06)`, filter: 'brightness(1.35)', offset: impactAt / 735 },
          { transform: 'translate(0, 0)', filter: 'brightness(1)' },
        ], { duration: 735, easing: 'cubic-bezier(.3,.69,.34,1)' });
        const swipe = symbol(layer, lead, target.x - dx / distance * 28, target.y - dy / distance * 28, rotation);
        motion(swipe, [
          { opacity: 0, transform: 'scale(.72)' },
          { opacity: .9, transform: 'scale(1.15)', offset: .32 },
          { opacity: 0, transform: 'scale(1.4)' },
        ], 245, impactAt - 100);
      } else if (!reduced && distance > 12) {
        const startAt = Math.min(235, impactAt * .43);
        const travel = impactAt - startAt;
        const trace = `M${origin.x} ${origin.y}Q${origin.x + dx / 2 + arcX * 2} ${origin.y + dy / 2 + arcY * 2} ${target.x} ${target.y}`;
        for (let ribbon = 0; ribbon < traces; ribbon++) {
          const trail = svgNode('path', { class: 'combat-fx-trail', d: trace, pathLength: 1 }, layer);
          if (ribbon) trail.setAttribute('transform', `translate(${ribbon * 4} ${-ribbon * 6})`);
          motion(trail, [
            { opacity: 0, strokeDashoffset: 1 },
            { opacity: .9 / (ribbon + 1), strokeDashoffset: 0, offset: .65 },
            { opacity: 0, strokeDashoffset: -.24 },
          ], travel + 120, startAt + delay + ribbon * 26, 'linear');
        }
        const traveller = svgNode('g', {}, layer);
        symbol(traveller, lead, origin.x, origin.y, rotation).setAttribute('transform', 'scale(.6)');
        motion(traveller, [
          { opacity: 0, transform: 'translate(0, 0)' },
          { opacity: 1, transform: `translate(${dx * .52 + arcX}px, ${dy * .52 + arcY}px)`, offset: .52 },
          { opacity: .9, transform: `translate(${dx}px, ${dy}px)` },
        ], travel, startAt + delay, 'linear');
        window.setTimeout(() => traveller.remove(), impactAt + delay + 15);
      }
      const scale = Math.min(1.68, Math.max(.7, Math.max(target.w, target.h) / 103)) * power;
      const burst = symbol(layer, mark, target.x, target.y, (signature % 59) - 29);
      motion(burst, [
        { opacity: 0, transform: `scale(${scale * .35})` },
        { opacity: .97, transform: `scale(${scale})`, offset: .24 },
        { opacity: 0, transform: `scale(${scale * (reduced ? 1.15 : 1.62)})` },
      ], reduced ? 255 : 490, impactAt + delay - 30);
      if (reduced) return;
      const cardElement = targetFrames[index]?.element;
      if (!attack && cardElement?.matches?.('.battle-card, .life-card')) {
        cardElement.animate?.([
          { filter: 'brightness(1)', transform: 'scale(1)' },
          { filter: 'brightness(1.35)', transform: `scale(${isProtection ? 1.04 : .975})` },
          { filter: 'brightness(1)', transform: 'scale(1)' },
        ], { duration: 260, delay: impactAt + delay, easing: 'ease-out' });
      }
      const pressure = isProtection
        ? svgNode('rect', { x: target.x - target.w * .52, y: target.y - target.h * .52, width: target.w * 1.04, height: target.h * 1.04, rx: 10, class: 'combat-fx-ring' }, layer)
        : svgNode('ellipse', { cx: target.x, cy: target.y, rx: Math.min(140, target.w * .46 + 9), ry: Math.min(120, target.h * .48 + 8), class: 'combat-fx-ring' }, layer);
      motion(pressure, [{ opacity: 0, transform: 'scale(.62)' }, { opacity: .82, offset: .2 }, { opacity: 0, transform: 'scale(1.64)' }], 410, impactAt + delay - 12);
      const sparkCount = 4 + (signature % 5);
      for (let i = 0; i < sparkCount; i++) {
        const angle = i * Math.PI * 2 / sparkCount + (signature % 63) / 10;
        const distance = (44 + ((signature >>> (i % 12)) % 49)) * scale;
        const chip = symbol(layer, i % 3 === 0 ? lead : 'spark', target.x, target.y, i * 31);
        motion(chip, [
          { opacity: 0, transform: 'translate(0, 0) scale(.07)' },
          { opacity: .84, offset: .16 },
          { opacity: 0, transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(.17)` },
        ], 340 + i * 12, impactAt + delay + 18);
      }
    });
    try { sound(audio, recipe, signature, attack, impactAt, power); } catch { /* Visual feedback can run on its own. */ }
    window.setTimeout(() => { layers.delete(layer); layer.remove(); }, end + 100);
    return true;
  }

  function status(ids) {
    if (!ids.length) return '';
    const body = ids.map((id, index) => {
      const [motif, color] = statusShapes[id];
      const framePath = id === 'root' ? 'M3 82Q18 67 5 49M97 79Q83 65 95 46M14 97Q29 81 48 97Q72 80 86 97'
        : id === 'freeze' ? 'M3 42L12 23L4 4L29 13L43 3M97 57L88 79L96 96L73 86L57 97'
        : 'M22 4H7V27M78 4H93V27M7 74V95H22M93 74V95H78';
      return `<g style="--combat-state:${color}" class="combat-state-${id}"><path d="${framePath}"/><g transform="translate(${15 + index * 14} 33) scale(.11)"><path d="${motifs[motif]}"/></g></g>`;
    }).join('');
    return `<svg class="combat-fx-status" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${body}</svg>`;
  }

  function clear() {
    for (const layer of layers) layer.remove();
    layers.clear();
  }

  window.peppermintCombatEffects = {
    play(options) {
      try { return play(options); } catch { return false; }
    },
    status, clear, isRanged,
  };
})();
