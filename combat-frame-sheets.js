(() => {
  const canvas = document.createElement('canvas');
  canvas.className = 'combat-raster-fx-layer';
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, { position:'fixed', inset:'0', width:'100vw', height:'100vh', pointerEvents:'none', zIndex:'480' });
  const ctx = canvas.getContext('2d', { alpha:true });
  const featheredFrames = new Map();
  const active = [];
  const images = new Map();
  let config = window.peppermintCombatFrameSheetManifest || { enabled:false, assets:{} };
  let raf = 0;
  const tracksImpact = (entry) => entry.impactFrame != null || ['projectile','travel','scene'].includes(entry.mode);

  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize, { passive:true });

  function loadManifest() {
    config = window.peppermintCombatFrameSheetManifest || { enabled:false, assets:{} };
    for (const entry of Object.values(config.assets || {})) {
      if (!entry?.file || images.has(entry.file)) continue;
      const image = new Image();
      images.set(entry.file, image);
      image.src = new URL(entry.file, document.baseURI).href;
      image.decode?.().catch(() => {});
    }
  }

  function featherFrame(image, item, frame, sx, sy) {
    const key = `${item.entry.file}:${frame}:${item.entry.edgeFeather}:${Boolean(item.entry.roundHalo)}`;
    if (featheredFrames.has(key)) return featheredFrames.get(key);
    const frameCanvas = document.createElement('canvas');
    const width = frameCanvas.width = Math.round(item.cellWidth);
    const height = frameCanvas.height = Math.round(item.cellHeight);
    const frameCtx = frameCanvas.getContext('2d');
    frameCtx.drawImage(image, sx, sy, item.cellWidth, item.cellHeight, 0, 0, width, height);
    frameCtx.globalCompositeOperation = 'destination-in';
    const feather = item.entry.edgeFeather;
    if (item.entry.roundHalo) {
      frameCtx.scale(width, height);
      const mask = frameCtx.createRadialGradient(.5, .5, .5 - feather, .5, .5, .5);
      mask.addColorStop(0, 'black');
      mask.addColorStop(1, 'transparent');
      frameCtx.fillStyle = mask;
      frameCtx.fillRect(0, 0, 1, 1);
    } else {
      for (const [x, y] of [[width, 0], [0, height]]) {
        const mask = frameCtx.createLinearGradient(0, 0, x, y);
        mask.addColorStop(0, 'transparent');
        mask.addColorStop(feather, 'black');
        mask.addColorStop(1 - feather, 'black');
        mask.addColorStop(1, 'transparent');
        frameCtx.fillStyle = mask;
        frameCtx.fillRect(0, 0, width, height);
      }
    }
    featheredFrames.set(key, frameCanvas);
    return frameCanvas;
  }

  function render(time) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    for (let i = active.length - 1; i >= 0; i--) {
      const item = active[i];
      const elapsed = time - item.started;
      if (elapsed < 0) continue;
      if (elapsed >= item.duration) { active.splice(i, 1); continue; }
      const image = images.get(item.entry.file);
      if (!image?.complete || !image.naturalWidth) continue;
      const scene = item.entry.mode === 'scene';
      const travel = ['projectile','travel'].includes(item.entry.mode);
      const impactFrame = Math.max(1, Math.min(item.frames - 1, item.entry.impactFrame ?? Math.floor(item.frames * .75)));
      let progress = elapsed / item.duration;
      const syncImpact = tracksImpact(item.entry) && item.impactAt > 0;
      if (syncImpact) {
        const postImpact = Math.max(1, item.duration - item.impactAt);
        progress = elapsed < item.impactAt
          ? (elapsed / item.impactAt) * (impactFrame / item.frames)
          : (impactFrame + Math.min(1, (elapsed - item.impactAt) / postImpact) * (item.frames - impactFrame)) / item.frames;
      }
      progress = Math.max(0, Math.min(.9999, progress));
      const frame = item.entry.loopFps
        ? Math.floor(elapsed * item.entry.loopFps / 1000) % item.frames
        : Math.min(item.frames - 1, Math.floor(progress * item.frames));
      const cols = item.entry.columns;
      let sx = (frame % cols) * item.cellWidth;
      let sy = Math.floor(frame / cols) * item.cellHeight;
      let sprite = image;
      let sw = item.cellWidth, sh = item.cellHeight;
      if (item.entry.edgeFeather) {
        sprite = featherFrame(image, item, frame, sx, sy);
        sx = sy = 0;
        sw = sprite.width;
        sh = sprite.height;
      }
      const target = item.target;
      const travelTime = item.impactAt > 0 ? item.impactAt : item.duration;
      const p = travel ? Math.min(1, elapsed / travelTime) : 1;
      const anchor = item.entry.anchor === 'target' ? 1 : .5;
      const mid = {x:item.origin.x + (target.x - item.origin.x) * anchor, y:item.origin.y + (target.y - item.origin.y) * anchor};
      let x = scene ? mid.x : travel ? item.origin.x + (target.x - item.origin.x) * p : (item.entry.anchor === 'source' ? item.origin.x : target.x);
      let y = scene ? mid.y : travel ? item.origin.y + (target.y - item.origin.y) * p : (item.entry.anchor === 'source' ? item.origin.y : target.y);
      if (item.entry.mode === 'prop' && item.origin !== target) {
        x = item.origin.x + (target.x - item.origin.x) * progress;
        y = item.origin.y + (target.y - item.origin.y) * progress;
      }
      if (travel && p > 0 && p < 1) {
        const dx = target.x - item.origin.x;
        const dy = target.y - item.origin.y;
        const distance = Math.hypot(dx, dy);
        const normalX = -dy / Math.max(1, distance);
        const normalY = dx / Math.max(1, distance);
        const trajectory = item.entry.trajectory || 'direct';
        const amplitude = (item.amplitude ?? item.entry.amplitude ?? Math.min(112, distance * .16)) * item.viewportScale;
        let offset = 0;
        if (trajectory === 'arc') offset = Math.sin(Math.PI * p) * amplitude;
        if (trajectory === 'lob') y -= Math.sin(Math.PI * p) * amplitude;
        if (trajectory === 'zigzag') {
          const turns = Math.max(2, item.entry.turns || 4);
          offset = Math.sin(Math.PI * p) * Math.sin(Math.PI * 2 * turns * p) * amplitude;
        }
        x += normalX * offset;
        y += normalY * offset;
      }
      const attackScale = 1 + item.baseAttack * .035;
      const effectScale = item.entry.scale ?? .9;
      const pulse = item.entry.pulse === false ? 1 : .9 + .1 * Math.sin(progress * Math.PI);
      const pathSpan = Math.hypot(target.x - item.origin.x, target.y - item.origin.y);
      const designWidth = item.entry.fitPath
        ? Math.max(item.entry.minWidth || 360, pathSpan + (item.entry.pathPadding || 220))
        : item.entry.width;
      const w = designWidth * item.viewportScale * attackScale * effectScale * pulse;
      const h = item.entry.height * item.viewportScale * attackScale * effectScale * pulse;
      const fade = item.entry.fade ? Math.min(1, elapsed / 100, (item.duration - elapsed) / 160) : 1;
      ctx.globalAlpha = (item.entry.opacity ?? 1) * fade;
      ctx.globalCompositeOperation = item.entry.blend || 'lighter';
      if (scene || item.entry.aimAlongPath || item.rotation || item.flip) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(scene || item.entry.aimAlongPath ? Math.atan2(target.y - item.origin.y, target.x - item.origin.x) : item.rotation || 0);
        if (item.flip) ctx.scale(-1, 1);
        ctx.drawImage(sprite, sx, sy, sw, sh, -w * (.5 + (item.entry.hitOffset || 0)), -h/2, w, h);
        ctx.restore();
      } else ctx.drawImage(sprite, sx, sy, sw, sh, x - w/2, y - h/2, w, h);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    if (active.length) raf = requestAnimationFrame(render);
    else { raf = 0; canvas.remove(); }
  }

  function getEntry(card, kind) {
    if (!config.enabled) return null;
    const entry = config.assets?.[`${card?.id}:${kind}`];
    const image = images.get(entry?.file);
    return entry?.enabled && image?.complete && image.naturalWidth ? entry : null;
  }

  function play({ card, kind, origin, targets, impactAt, baseAttack, viewport, layered = false, releaseAt, amplitude }) {
    const entry = getEntry(card, kind);
    if (!entry || entry.mode === 'prop' || Boolean(entry.layered) !== layered) return null;
    const image = images.get(entry.file);
    const frames = entry.frames || (entry.columns * entry.rows);
    const cellWidth = entry.frameWidth || image.naturalWidth / entry.columns;
    const cellHeight = entry.frameHeight || image.naturalHeight / entry.rows;
    const destination = targets?.[0] || origin;
    if (!destination || !cellWidth || !cellHeight) return null;
    const viewportScale = Math.max(.72, Math.min(1, viewport.w / 450, viewport.h / 680));
    const defaultRelease = entry.mode === 'impact' && kind === 'strike' ? impactAt : 0;
    let wait = releaseAt ?? (entry.releaseFraction == null ? defaultRelease : Math.round(impactAt * entry.releaseFraction));
    if (entry.closeRelease && kind === 'strike' && card.role === 'Brawler') {
      const dx = destination.x - origin.x;
      const dy = destination.y - origin.y;
      const distance = Math.hypot(dx, dy);
      const advance = Math.max(.52, 1 - 140 * viewportScale / Math.max(1, distance));
      origin = { x:origin.x + dx * advance, y:origin.y + dy * advance };
      wait = Math.max(0, impactAt - 270);
    }
    impactAt -= wait;
    const naturalDuration = Math.ceil(frames / (entry.fps || 30) * 1000);
    const postImpactDuration = Math.ceil((frames - Math.max(1, entry.impactFrame ?? Math.floor(frames * .75))) / (entry.fps || 30) * 1000);
    const effectDuration = entry.duration || (tracksImpact(entry) && impactAt > 0
      ? Math.max(naturalDuration, impactAt + postImpactDuration) : naturalDuration);
    const totalDuration = wait + effectDuration;
    const destinations = entry.eachTarget && targets?.length ? targets : [destination];
    const started = performance.now() + wait;
    for (const target of destinations) {
      active.push({ entry, origin, target, frames, cellWidth, cellHeight, duration:effectDuration, impactAt, started,
        baseAttack:Math.max(0, Math.min(8, baseAttack || 0)), viewportScale, amplitude,
        flip:entry.faceTarget && target.x < origin.x });
    }
    startRendering();
    return totalDuration;
  }

  function playProp({ card, kind, point, destination = point, delay, duration, scale = 1, rotation = 0, flip = false, cueAt = 0 }) {
    const entry = getEntry(card, kind);
    if (entry?.mode !== 'prop') return false;
    const image = images.get(entry.file);
    active.push({
      entry, origin:point, target:destination, duration, started:performance.now() + delay,
      frames:entry.columns * entry.rows, cellWidth:image.naturalWidth / entry.columns,
      cellHeight:image.naturalHeight / entry.rows, rotation:rotation * Math.PI / 180, flip,
      impactAt:Math.max(0, cueAt - delay), baseAttack:0, viewportScale:scale,
    });
    startRendering();
    return true;
  }

  function startRendering() {
    if (!canvas.isConnected) { resize(); document.body.appendChild(canvas); }
    if (!raf) raf = requestAnimationFrame(render);
  }

  function clear() {
    active.length = 0;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.remove();
  }

  window.peppermintCombatFrameSheets = { play, playProp, clear, reload:loadManifest };
  loadManifest();
})();
