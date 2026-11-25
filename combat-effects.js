(function combatEffects() {
  const ns = 'http://www.w3.org/2000/svg';
  const motifs = {
    ice: 'M0-48V48M-42-24L42 24M42-24L-42 24M-12-35L0-26L12-35M-12 35L0 26L12 35M-37-12L-23-14L-26-30M37 12L23 14L26 30M37-12L23-14L26-30M-37 12L-23 14L-26 30',
    shield: 'M0-45L37-31L33 6Q26 33 0 46Q-26 33-33 6L-37-31ZM0-31V33M-24-10H24',
    bolt: 'M13-54L-37 7L-5 7L-18 51L43-13L11-13Z',
    flask: 'M-13-44H13M-9-44V-14L-30 25Q-38 41-18 43H18Q38 41 30 25L9-14V-44M-25 15Q0 29 25 15',
    root: 'M0-45L-5 3L-45 39M-5 3L23 44M-5 3L50 17M-25 21L-37 14M-25 21L-20 43M14 28L34 24M22 11L31-12',
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
    revive: ['flask', '#b4ef7d'],
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

  function sound(audio, recipe, seed, attack, impactTime, power, candy) {
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
    if (candy) {
      sweep('sine', 710, 184, hit - .01, .164, .10);
      sweep('triangle', 320, 65, hit, .21, .083);
      sweep('sine', 520, 195, hit + .13, .095, .033);
      sweep('sine', 382, 139, hit + .22, .083, .026);
    }

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
    filter.frequency.value = candy ? 850 : cutoff * (attack ? 1 : 1.24);
    filter.Q.value = resonance;
    dynamics.gain.setValueAtTime(.05 * power, now + hit);
    dynamics.gain.exponentialRampToValueAtTime(.0001, now + hit + .27);
    noise.connect(filter).connect(dynamics).connect(mix);
    noise.start(now + hit);
    noise.stop(now + hit + .28);
    window.setTimeout(() => mix.disconnect(), (tail + .08) * 1000);
  }

  function painted(parent, drawing, x, y, rotation = 0) {
    const position = svgNode('g', { transform: `translate(${x} ${y}) rotate(${rotation})` }, parent);
    const art = svgNode('g', { class: 'combat-painted' }, position);
    art.innerHTML = drawing;
    return art;
  }

  function play({ card, kind = 'skill', source, targets = [], audio }) {
    const recipe = window.peppermintCombatRecipes[card?.id];
    const reference = window.peppermintCombatArt;
    const start = frame(source);
    const targetFrames = targets.map((element) => ({ element, box: frame(element) })).filter(({ box }) => box).slice(0, 3);
    if (!recipe || !reference || (!start && !targetFrames.length)) return false;
    if (kind === 'strike' && recipe.strike === '-') return false;
    const origin = start || targetFrames[0].box;
    const destinations = targetFrames.length ? targetFrames : [{ box: origin }];
    const attack = kind === 'strike';
    const melee = attack && !isRanged(card);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const signature = seedFor(`${card.id}:${kind}`);
    const [lead, mark] = (attack ? recipe.strike : recipe.skill).split('+');
    const theme = reference.describe(card, kind, lead, mark);
    const candy = theme.impact === 'candy';
    const sharedField = !attack && sharedFields.has(card.id);
    const power = sharedField ? 1.12 : 1;
    const impactAt = attack ? 590 : sharedField ? 530 : 405;
    const weaponScale = Math.min(1.24, Math.max(.60, origin.h / 146));
    const prepared = Math.max(135, impactAt * .43);
    const color = candy ? '#fc57a9' : recipe.color;
    const layer = svgNode('svg', { class: 'combat-fx-layer', 'aria-hidden': 'true', viewBox: `0 0 ${window.innerWidth} ${window.innerHeight}` }, document.body);
    layer.style.setProperty('--combat-color', color);
    while (layers.size >= 6) {
      const old = layers.values().next().value;
      layers.delete(old);
      old.remove();
    }
    layers.add(layer);
    window.setTimeout(() => { layers.delete(layer); layer.remove(); }, impactAt + (reduced ? 340 : candy ? 1110 : 770));
    const palette = reference.mount(layer, svgNode, color, theme.dark, theme.hot);
    const weapon = theme.key ? palette.weapon(theme.key) : '';
    const first = destinations[0].box;
    const angle = Math.atan2(first.y - origin.y, first.x - origin.x);
    const facing = angle * 180 / Math.PI;
    const spread = Math.min(.42, Math.abs((first.y - origin.y) / 180)) * 28 + 16;
    const weaponAngle = melee ? facing + 58 : sharedField ? -8 : facing + 90;
    const protecting = !attack && ['shield', 'heart', 'cage'].includes(mark);

    if (sharedField && !reduced) {
      const haze = svgNode('ellipse', { cx: first.x, cy: first.y, rx: Math.min(window.innerWidth * .28, 380), ry: Math.min(window.innerHeight * .23, 200), class: 'combat-fx-haze' }, layer);
      motion(haze, [{ opacity: 0 }, { opacity: .17 }, { opacity: 0 }], 885);
    }
    if (weapon && !melee) {
      const prop = painted(layer, weapon, origin.x, origin.y, weaponAngle);
      motion(prop, [
        { opacity: 0, transform: `translateY(12px) scale(${weaponScale * .76})` },
        { opacity: 1, transform: `translateY(0) scale(${weaponScale})`, offset: .35 },
        { opacity: .94, transform: `translateY(0) scale(${weaponScale})`, offset: .73 },
        { opacity: 0, transform: `translateY(4px) scale(${weaponScale * .90})` },
      ], Math.max(240, prepared + 185));
    }
    if (!weapon && !reduced) {
      const swell = painted(layer, palette.paint(theme.flight, 'projectile', signature, lead), origin.x, origin.y, facing);
      motion(swell, [
        { opacity: 0, transform: 'scale(.30)' },
        { opacity: .79, transform: 'scale(.93)', offset: .6 },
        { opacity: 0, transform: 'scale(1.27)' },
      ], prepared + 65);
    }

    destinations.forEach(({ box: target, element: cardElement }, index) => {
      const dx = target.x - origin.x;
      const dy = target.y - origin.y;
      const distance = Math.hypot(dx, dy);
      const rotation = Math.atan2(dy, dx);
      const deg = rotation * 180 / Math.PI;
      const delay = Math.min(index * 48, 96);
      const hitAt = impactAt + delay;
      if (melee && distance > 12 && !reduced) {
        const reach = Math.max(.22, 1 - Math.min(distance * .7, Math.min(origin.h, target.h) * .45) / distance);
        const thrust = `translate(${dx * reach}px, ${dy * reach}px)`;
        source?.animate?.([
          { transform: 'translate(0, 0)', filter: 'brightness(1)' },
          { transform: `translate(${-dx * .045}px, ${-dy * .045}px)`, offset: .36 },
          { transform: `${thrust} scale(1.06)`, filter: 'brightness(1.26)', offset: impactAt / 735 },
          { transform: 'translate(0, 0)', filter: 'brightness(1)' },
        ], { duration: 735, easing: 'cubic-bezier(.3,.69,.34,1)' });
        if (weapon) {
          const carried = svgNode('g', { class: 'combat-carried' }, layer);
          const prop = painted(carried, weapon, origin.x, origin.y, weaponAngle);
          motion(prop, [
            { opacity: 0, transform: `rotate(${-spread * 2.6}deg) scale(${weaponScale * .85})` },
            { opacity: 1, transform: `rotate(${-spread * 2}deg) scale(${weaponScale})`, offset: .44 },
            { opacity: 1, transform: `rotate(${spread * 1.1}deg) scale(${weaponScale})`, offset: .82 },
            { opacity: 0, transform: `rotate(${spread * 2}deg) scale(${weaponScale})` },
          ], 735);
          motion(carried, [
            {transform:'translate(0, 0)'}, {transform:`translate(${-dx*.045}px, ${-dy*.045}px)`,offset:.36},
            {transform:thrust,offset:impactAt/735},{transform:'translate(0, 0)'},
          ],735);
        }
      } else if (!reduced && distance > 16) {
        const direct = ['arrow', 'shot', 'bolt'].includes(lead);
        const setback = candy ? Math.min(distance * .53, 49 * weaponScale) : weapon && !direct ? Math.min(distance * .35, 34 * weaponScale) : 0;
        const x = origin.x + Math.cos(rotation) * setback;
        const y = origin.y + Math.sin(rotation) * setback;
        const travelX = target.x - x;
        const travelY = target.y - y;
        const bend = direct ? 0 : (signature % 2 ? -1 : 1) * Math.min(candy ? 41 : 59, distance * (candy ? .15 : .13));
        const mx = travelX*.52 - Math.sin(rotation)*bend;
        const my = travelY*.52 + Math.cos(rotation)*bend;
        const travel = hitAt - prepared - delay;
        const width = candy ? 6 : direct ? 2.1 : 4.5;
        const ribbon = svgNode('path', {
          class: 'combat-flight-ribbon', d: `M${x} ${y}Q${x + mx*2 - travelX*.5} ${y + my*2 - travelY*.5} ${target.x} ${target.y}`,
          pathLength: 1, stroke: color, 'stroke-width': width,
        }, layer);
        motion(ribbon, [
          { opacity: 0, strokeDashoffset: 1 }, { opacity: candy ? .69 : .67, strokeDashoffset: .27, offset: .59 },
          { opacity: 0, strokeDashoffset: -.25 },
        ],travel+125,prepared+delay,'linear');
        const traveller = svgNode('g', {}, layer);
        painted(traveller, palette.missile(lead, theme.flight, signature), x, y, deg);
        motion(traveller, [
          { opacity: 0, transform: 'translate(0, 0)' },
          { opacity: 1, transform: `translate(${mx}px, ${my}px)`, offset: .52 },
          { opacity: .93, transform: `translate(${travelX}px, ${travelY}px)` },
        ], travel, prepared + delay, 'linear');
        window.setTimeout(() => traveller.remove(), hitAt + 4);
        if (candy) {
          for (let i = 0; i < 5; i++) {
            const drop = painted(layer, palette.particle('candy', i), x, y, deg - 90);
            const fraction = .16 + i * .145;
            const offset = (i % 2 ? -1 : 1) * (9 + i);
            motion(drop, [
              { opacity: .87, transform: `translate(${travelX * fraction}px, ${travelY * fraction}px) scale(.34)` },
              { opacity: 0, transform: `translate(${travelX * fraction - Math.sin(rotation) * offset}px, ${travelY * fraction + Math.cos(rotation) * offset}px) scale(.15)` },
            ],240,prepared+delay+travel*fraction);
            drop.style.opacity = '0';
          }
        }
      }

      const scale = Math.min(1.47, Math.max(.63, Math.max(target.w, target.h) / 118)) * power;
      const rotationAtImpact = candy || ['growth','ice','fire'].includes(theme.impact) ? 0 : deg * .4;
      const burst = painted(layer, palette.paint(theme.impact, 'impact', signature, mark), target.x, target.y, rotationAtImpact);
      const impactMotion = candy ? [
        {opacity:0, transform:`scale(${scale*.12},${scale*.86})`},
        {opacity:1, transform:`scale(${scale*1.05},${scale*.73})`,offset:.14},
        {opacity:.97, transform:`scale(${scale*1.26},${scale*.93})`,offset:.35},
        {opacity:.91, transform:`translateY(4px) scale(${scale*1.19},${scale*.78})`,offset:.58},
        {opacity:0,transform:`translateY(17px) scale(${scale*1.35},${scale*.50})`},
      ] : [
        {opacity:0, transform:`scale(${scale*.28})`},
        {opacity:1, transform:`scale(${scale})`,offset:.24},
        {opacity:0, transform:`scale(${scale*1.3})`},
      ];
      const frames = reduced ? [{opacity:0,transform:`scale(${scale})`}, {opacity:.87}, {opacity:0}] : impactMotion;
      motion(burst, frames, reduced ? 255 : candy ? 900 : 520, hitAt - 22);
      if (reduced) return;
      if (!attack && cardElement?.matches?.('.battle-card, .life-card')) {
        cardElement.animate?.([
          { filter: 'brightness(1)', transform: 'scale(1)' },
          { filter: 'brightness(1.29)', transform: `scale(${protecting ? 1.035 : .975})` },
          { filter: 'brightness(1)', transform: 'scale(1)' },
        ], { duration: 260, delay: hitAt, easing: 'ease-out' });
      }
      const particles = candy ? 20 : theme.impact === 'ice' ? 15 : 8 + signature % 5;
      for (let i = 0; i < particles; i++) {
        const angle = i * Math.PI * 2 / particles + (signature % 63) / 10;
        const distance = (34 + ((signature >>> (i % 12)) + (i * 31)) % (candy ? 77 : 53)) * scale;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const size = (.30 + ((signature >>> (i % 12)) % 45) / 100) * scale;
        const chip = painted(layer, palette.particle(theme.impact, i), target.x, target.y, angle * 180 / Math.PI + 90);
        motion(chip, [
          { opacity: 0, transform: 'translate(0, 0) scale(.16)' },
          { opacity: .96, transform: `translate(${x*.6}px, ${y*.71}px) scale(${size})`, offset: .23 },
          { opacity: 0, transform: `translate(${x}px, ${y + (candy ? 42 : 14)}px) scale(${size*.46})` },
        ], (candy ? 550 : 320) + i * 12, hitAt + i * 4);
      }
    });
    try { sound(audio, recipe, signature, attack, impactAt, power, candy); } catch { /* Visual feedback can run on its own. */ }
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
