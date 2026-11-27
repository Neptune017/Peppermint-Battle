(function combatEffects() {
  const ns = 'http://www.w3.org/2000/svg';
  const motifs = {
    ice: 'M0-48V48M-42-24L42 24M42-24L-42 24M-12-35L0-26L12-35M-12 35L0 26L12 35M-37-12L-23-14L-26-30M37 12L23 14L26 30M37-12L23-14L26-30M-37 12L-23 14L-26 30',
    shield: 'M0-45L37-31L33 6Q26 33 0 46Q-26 33-33 6L-37-31ZM0-31V33M-24-10H24',
    bolt: 'M13-54L-37 7L-5 7L-18 51L43-13L11-13Z',
    flask: 'M-13-44H13M-9-44V-14L-30 25Q-38 41-18 43H18Q38 41 30 25L9-14V-44M-25 15Q0 29 25 15',
    root: 'M0-45L-5 3L-45 39M-5 3L23 44M-5 3L50 17M-25 21L-37 14M-25 21L-20 43M14 28L34 24M22 11L31-12',
  };
  const statusShapes = {
    freeze: ['ice', '#b6edff'], stun: ['bolt', '#ffe3a4'], root: ['root', '#a6e584'], guard: ['shield', '#84e9ec'],
    revive: ['flask', '#b4ef7d'],
  };
  const sharedFields = new Set(['academy-grounds', 'cactus-creek', 'ip-field', 'toy-store', 'christmas-mall', 'valhalla-bar', 'ts-field']);
  const rangedMotifs = new Set([
    'arrow', 'bolt', 'book', 'coil', 'drop', 'eye', 'feather', 'flame', 'gem', 'note', 'pen',
    'portal', 'rabbit', 'shot', 'staff', 'sun', 'veil', 'wave', 'whirl',
  ]);
  const closeMoves = {
    hammer: [.12, .03, .41], axe: [.09, .16, .37], scythe: [.06, -.21, .32],
    kick: [.07, .22, .24], claw: [.04, -.12, .23], shield: [.14, .04, .40],
    sword: [.075, -.17, .29], rapier: [.15, .02, .38], umbrella: [.10, .13, .36],
    piston: [.14, .015, .32], horn: [.16, .065, .37], leap: [.06, .24, .27],
  };
  function isRanged(card) {
    const lead = window.peppermintCombatRecipes[card?.id]?.strike.split('+')[0];
    if (card?.role === 'Brawler') return false;
    if (card?.role === 'Shooter') return true;
    const scene = window.peppermintCombatDirection[card?.id]?.strike?.move;
    return ['cymbals','raijin','mirrors','fujinWind','buoyThrow','beam','beams','river','twin','kettles','serving','dart','volley','ink','swarm'].includes(scene) || rangedMotifs.has(lead);
  }
  const attackImpactTime = 910;
  const attackResolutionTime = attackImpactTime + 240;
  const layers = new Set();

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

  function painted(parent, drawing, x, y, rotation = 0) {
    const position = svgNode('g', { transform: `translate(${x} ${y}) rotate(${rotation})` }, parent);
    const art = svgNode('g', { class: 'combat-painted' }, position);
    art.innerHTML = drawing;
    return art;
  }

  function play({ card, kind = 'skill', source, targets = [], audio, onImpact }) {
    const clock = () => window.performance?.now() ?? 0;
    const startedAt = clock();
    const timelineStart = document.timeline?.currentTime;
    const motion = (node, frames, duration, delay = 0, easing = 'cubic-bezier(.18,.65,.27,1)') => {
      const animation = node.animate?.(frames, { delay, duration, easing, fill: 'both' });
      if (animation && timelineStart != null) animation.startTime = timelineStart;
    };
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
    const scenes = window.peppermintCombatScenes;
    const direction = window.peppermintCombatDirection[card.id]?.[kind] || {move:attack?'swing':'orbit',contact:'sun',sound:'hall'};
    const theme = reference.describe(card, kind, lead, mark);
    const projectile = window.peppermintProjectiles.profile(card, kind, lead, mark, signature);
    const candy = theme.impact === 'candy';
    const sharedField = !attack && sharedFields.has(card.id);
    const baseAttack = Number.isFinite(card.attack) ? Math.max(0, Math.min(8, card.attack)) : 0;
    const viewportScale = Math.max(.78, Math.min(1, window.innerWidth / 450, window.innerHeight / 680));
    const effectScale = (1.24 + baseAttack * .115) * viewportScale;
    const projectileScale = (1.19 + baseAttack * .10) * viewportScale;
    const impactAt = scenes.productionTime(direction, attack, sharedField) ?? attackImpactTime;
    const prepared = Math.round(impactAt * .45);
    if (attack && !reduced && card.id === 'ts-zodiac-aemi') {
      window.peppermintCombatFrameSheets?.playProp({
        card, kind: 'strike-omen', point: origin, delay: 30, duration: prepared + 380, cueAt: prepared,
      });
    }
    const fist = melee && card.role === 'Brawler' ? scenes.fistStyles[card.id] : null;
    const rasterDuration = window.peppermintCombatFrameSheets?.play({
      card, kind, origin, targets:destinations.map(({box}) => box), impactAt, baseAttack,
      viewport:{w:window.innerWidth,h:window.innerHeight},
    });
    if (rasterDuration) {
      try {
        window.peppermintCombatSound.play({
          audio, mode:direction.sound, seed:signature, strike:attack, release:prepared, impact:impactAt, baseAttack,
          aer:theme.aer, melee, fist:Boolean(fist), finish:direction.contact, count:direction.move === 'kettles' ? 3 : 1,
        });
      } catch { /* Visual feedback remains available without audio. */ }
      if (onImpact) window.setTimeout(onImpact, Math.max(0, impactAt - (clock() - startedAt)));
      return rasterDuration;
    }
    const weaponScale = Math.min(1.27, Math.max(.74, origin.h / 146)) * effectScale;
    const moveDuration = attackResolutionTime - 23;
    const color = candy ? '#fc57a9' : recipe.color;
    const layer = svgNode('svg', { class: 'combat-fx-layer', 'aria-hidden': 'true', viewBox: `0 0 ${window.innerWidth} ${window.innerHeight}` }, document.body);
    layer.style.setProperty('--combat-color', color);
    while (layers.size >= 6) {
      const old = layers.values().next().value;
      layers.delete(old);
      old.remove();
    }
    layers.add(layer);
    const duration = impactAt + (reduced ? 1240 : 1580 + baseAttack * 34);
    window.setTimeout(() => { layers.delete(layer); layer.remove(); }, duration);
    const palette = reference.mount(layer, svgNode, color, theme.dark, theme.hot);
    const weapon = theme.key ? palette.weapon(theme.key) : '';
    const scene = {
      art: (drawing, x, y, rotation) => painted(layer, drawing, x, y, rotation),
      layer, svgNode, palette, motion, direction, card, origin, attack, melee, reduced, color, fist,
      hot: theme.hot, aer: theme.aer, seed: signature, effectScale, impactMaterial: theme.impact, baseAttack, impactAt,
      targets: destinations.map(({box}) => box), viewport: {w:window.innerWidth,h:window.innerHeight},
    };
    const special = scenes.setPiece(scene);
    const missile = palette.missile(projectile, theme.flight);
    const first = destinations[0].box;
    const angle = Math.atan2(first.y - origin.y, first.x - origin.x);
    const facing = angle * 180 / Math.PI;
    const spread = Math.min(.42, Math.abs((first.y - origin.y) / 180)) * 28 + 16;
    const weaponAngle = melee ? facing + 58 : sharedField ? -8 : facing + 90;
    const protecting = !attack && ['shield', 'heart', 'cage'].includes(mark);

    if (sharedField && !reduced) {
      const haze = svgNode('ellipse', { cx: first.x, cy: first.y, rx: Math.min(window.innerWidth * .28, 380), ry: Math.min(window.innerHeight * .23, 200), class: 'combat-fx-haze' }, layer);
      motion(haze, [{ opacity: 0 }, { opacity: .17 }, { opacity: 0 }], 1320);
    }
    const lyndaStrike = attack && ['academy-lynda', 'ww-academy-lynda'].includes(card.id);
    const hasRasterWeapon = !reduced && !melee && !special && (lyndaStrike || card.id === 'zoya' || card.id === 'den' && attack) &&
      window.peppermintCombatFrameSheets?.playProp({
        card, kind:lyndaStrike ? 'strike-weapon' : kind, point:origin, delay:55, duration:prepared+400,
        cueAt:prepared, scale:Math.min(1.18,weaponScale),
        rotation:card.id === 'den' ? facing : facing < 0 ? -13 : 13,
      });
    if (weapon && !melee && !special && !hasRasterWeapon) {
        const prop = painted(layer, weapon, origin.x, origin.y, weaponAngle);
        motion(prop, [
          { opacity: 0, transform: `translateY(12px) scale(${weaponScale * .76})` },
          { opacity: 1, transform: `translateY(0) scale(${weaponScale})`, offset: .35 },
          { opacity: .94, transform: `translateY(0) scale(${weaponScale})`, offset: .73 },
          { opacity: 0, transform: `translateY(4px) scale(${weaponScale * .90})` },
        ], prepared + 280);
    }
    if (!weapon && !hasRasterWeapon && !reduced && !special && !['slimeClaws','fireFist'].includes(direction.move)) {
      const swell = painted(layer, palette.paint(theme.flight, 'projectile', signature, lead), origin.x, origin.y, facing);
      motion(swell, [
        { opacity: 0, transform: `scale(${projectileScale * .30})` },
        { opacity: .86, transform: `scale(${projectileScale})`, offset: .6 },
        { opacity: 0, transform: `scale(${projectileScale * 1.24})` },
      ], prepared + 120);
    }

    destinations.forEach(({ box: target, element: cardElement }) => {
      const dx = target.x - origin.x;
      const dy = target.y - origin.y;
      const distance = Math.hypot(dx, dy);
      const rotation = Math.atan2(dy, dx);
      const deg = rotation * 180 / Math.PI;
      const hitAt = impactAt;
      const sceneContext = { ...scene, special, hitAt, scale: effectScale };
      const rasterSwarm = attack && !reduced && card.id === 'horatio' &&
        [0, 1, 2].map((index) => window.peppermintCombatFrameSheets?.play({
          card, kind, origin, targets:[target], impactAt, baseAttack, viewport:scene.viewport,
          layered:true, releaseAt:210 + index * 95, amplitude:[-52, 0, 52][index],
        })).some(Boolean);
      const rasterAttack = attack && !reduced && card.id !== 'horatio' &&
        window.peppermintCombatFrameSheets?.play({
          card, kind, origin, targets:[target], impactAt, baseAttack, viewport:scene.viewport, layered:true,
        });
      const performed = rasterSwarm || rasterAttack || scenes.choreograph(sceneContext, target, deg, missile);
      if (melee && distance > 12 && !reduced) {
        const reach = Math.max(.22, 1 - Math.min(distance * .7, Math.min(origin.h, target.h) * .45) / distance);
        const [back, bend, hold] = closeMoves[lead] || [.08, -.075, .32];
        const flex = back * (.8 + signature % 21 / 40);
        const feint = Math.min(70, distance * Math.abs(bend)) * Math.sign(bend) * (signature & 1 ? 1 : -1);
        const approach = .54 + ((signature >>> 8) % 13) * .01;
        const line = [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${-dx * flex}px, ${-dy * flex}px)`, offset: hold },
          { transform: `translate(${dx * reach * approach - Math.sin(rotation) * feint}px, ${dy * reach * approach + Math.cos(rotation) * feint}px)`, offset: .64 },
          { transform: `translate(${dx * reach}px, ${dy * reach}px)`, offset: impactAt / moveDuration },
          { transform: 'translate(0, 0)' },
        ];
        const contactScale = 1.04 + baseAttack * .008;
        source?.animate?.(line.map((frame, index) => index === 3
          ? { ...frame, transform: `${frame.transform} scale(${contactScale})`, filter: 'brightness(1.26)' }
          : frame
        ), { duration: moveDuration, easing: 'linear' });
        if (weapon && !rasterAttack) {
          const carried = svgNode('g', { class: 'combat-carried' }, layer);
          const prop = painted(carried, weapon, origin.x, origin.y, weaponAngle);
          motion(prop, [
            { opacity: 0, transform: `rotate(${-spread * 2.6}deg) scale(${weaponScale * .85})` },
            { opacity: 1, transform: `rotate(${-spread * 2}deg) scale(${weaponScale})`, offset: .44 },
            { opacity: 1, transform: `rotate(${spread * 1.1}deg) scale(${weaponScale})`, offset: .82 },
            { opacity: 0, transform: `rotate(${spread * 2}deg) scale(${weaponScale})` },
          ], moveDuration);
          motion(carried, line, moveDuration, 0, 'linear');
        }
      } else if (!performed && !reduced && distance > 16) {
        const direct = projectile.curve === 0;
        const setback = candy ? Math.min(distance * .53, 49 * weaponScale) : weapon && !direct ? Math.min(distance * .35, 34 * weaponScale) : 0;
        const x = origin.x + Math.cos(rotation) * setback;
        const y = origin.y + Math.sin(rotation) * setback;
        const travelX = target.x - x;
        const travelY = target.y - y;
        const bend = (signature % 2 ? -1 : 1) * Math.min(candy ? 59 : 78, distance * projectile.curve);
        const mx = travelX*.52 - Math.sin(rotation)*bend;
        const my = travelY*.52 + Math.cos(rotation)*bend;
        const travel = hitAt - prepared;
        const width = (candy ? 7 : direct ? 2.8 : 4.9) * projectileScale;
        const trace = `M${x} ${y}Q${x + mx*2 - travelX*.5} ${y + my*2 - travelY*.5} ${target.x} ${target.y}`;
        const wakeLayers = baseAttack >= 4 ? 3 : 2;
        for (let i = 0; i < wakeLayers; i++) {
          const ribbon = svgNode('path', {
            class: `combat-flight-ribbon combat-wake-${projectile.wake}${i ? ' combat-wake-core' : ''}`,
            d: trace, pathLength: 1, stroke: i ? theme.hot : color, 'stroke-width': width * (i ? .32 : 1),
            transform: `translate(${i * Math.sin(rotation) * 2} ${i * -Math.cos(rotation) * 2})`,
          }, layer);
          motion(ribbon, [
            { opacity: 0, strokeDashoffset: 1 }, { opacity: i ? .86 : .64, strokeDashoffset: .27, offset: .64 },
            { opacity: 0, strokeDashoffset: -.31 },
          ], travel + 165, prepared + i * 20, 'linear');
        }
        const traveller = svgNode('g', {}, layer);
        const body = painted(traveller, missile, x, y, deg);
        body.setAttribute('transform', `scale(${projectileScale})`);
        const swing = projectile.swing;
        motion(body, [
          { transform: `scale(${projectileScale * .89}) rotate(${-swing * .35}deg)` },
          { transform: `scale(${projectileScale}) rotate(${swing * .35}deg)`, offset: .53 },
          { transform: `scale(${projectileScale}) rotate(${swing}deg)` },
        ], travel, prepared, 'linear');
        motion(traveller, [
          { opacity: 0, transform: 'translate(0, 0)' },
          { opacity: .93, transform: `translate(${mx * .27}px, ${my * .27}px)`, offset: .14 },
          { opacity: 1, transform: `translate(${mx}px, ${my}px)`, offset: .52 },
          { opacity: .93, transform: `translate(${travelX}px, ${travelY}px)` },
        ], travel, prepared, 'linear');
        window.setTimeout(() => traveller.remove(), hitAt + 6);
        const wakeMaterial = { leaves: 'growth', frost: 'ice', water: 'water', drops: theme.flight, smoke: 'dark', ember: 'fire' }[projectile.wake] || theme.flight;
        const trailFragments = (candy ? 6 : 3) + Math.floor(baseAttack / 2);
        for (let i = 0; i < trailFragments; i++) {
          const speck = painted(layer, palette.particle(wakeMaterial, i), x, y, deg - 90);
          const fraction = (i + 1) / (trailFragments + 1);
          const offset = (i % 2 ? -1 : 1) * (11 + (i % 3) * 4) * projectileScale;
          const vx = travelX * fraction - Math.sin(rotation) * bend * Math.sin(fraction * Math.PI);
          const vy = travelY * fraction + Math.cos(rotation) * bend * Math.sin(fraction * Math.PI);
          motion(speck, [
            { opacity: 0, transform: `translate(${vx}px, ${vy}px) scale(.18)` },
            { opacity: .78, transform: `translate(${vx}px, ${vy}px) scale(${.28 * projectileScale})`, offset: .2 },
            { opacity: 0, transform: `translate(${vx - Math.sin(rotation) * offset}px, ${vy + Math.cos(rotation) * offset}px) scale(.09)` },
          ], 310, prepared + travel * fraction);
        }
      } else if (reduced && attack && !melee) {
        const body = painted(layer, missile,
          target.x - Math.cos(rotation) * 28, target.y - Math.sin(rotation) * 28, deg);
        body.setAttribute('transform', `scale(${projectileScale * .65})`);
        motion(body, [{ opacity: 0 }, { opacity: .86 }, { opacity: 0 }], 380, hitAt - 275);
      }

      const rasterContact = rasterAttack && window.peppermintCombatFrameSheetManifest?.assets?.[`${card.id}:${kind}`]?.replaceContact;
      if (!rasterContact) scenes.contactArt(sceneContext, direction.contact, target, deg);
      if (!attack && !reduced && cardElement?.matches?.('.battle-card, .life-card')) {
        cardElement.animate?.([
          { filter: 'brightness(1)', transform: 'scale(1)' },
          { filter: 'brightness(1.28)', transform: `scale(${protecting ? 1.035 : .975})` },
          { filter: 'brightness(1)', transform: 'scale(1)' },
        ], { duration: 390, delay: hitAt, easing: 'ease-out' });
      }
    });
    try {
      window.peppermintCombatSound.play({
        audio, mode: direction.sound, seed: signature, strike: attack, release: prepared, impact: impactAt, baseAttack,
        aer: theme.aer, melee, fist: Boolean(fist), finish: direction.contact, count: direction.move === 'kettles' ? 3 : 1,
      });
    } catch { /* Visual feedback remains available without audio. */ }
    if (onImpact) window.setTimeout(onImpact, Math.max(0, impactAt - (clock() - startedAt)));
    return duration;
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
    window.peppermintCombatFrameSheets?.clear();
  }

  window.peppermintCombatEffects = {
    play(options) {
      try { return play(options); } catch { return false; }
    },
    status, clear, isRanged, attackImpactTime, attackResolutionTime,
  };
})();
