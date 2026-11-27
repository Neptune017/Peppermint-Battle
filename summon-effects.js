(() => {
  const elements = ['aer', 'aqua', 'dark', 'glacial', 'ignis', 'mind', 'solar', 'terra'];
  const columns = 4;
  const rows = 4;
  const frameCount = columns * rows;
  const duration = 860;
  const atlases = new Map(elements.map((element) => {
    const atlas = new Image();
    atlas.src = 'assets/effects/summons/' + element + '-summon-v3.webp';
    atlas.decode?.().catch(() => {});
    return [element, atlas];
  }));

  function play(lane, cardElement, element) {
    const atlas = atlases.get(element?.toLowerCase());
    if (!atlas?.complete || !atlas.naturalWidth || !cardElement) return false;
    const cellWidth = atlas.naturalWidth / columns;
    const cellHeight = atlas.naturalHeight / rows;
    const canvas = document.createElement('canvas');
    canvas.className = 'summon-floor-impact';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.width = cellWidth;
    canvas.height = cellHeight;
    const context = canvas.getContext('2d');
    if (!context) return false;
    const width = Math.min(cardElement.offsetWidth * 2.05, lane.clientWidth * 1.33);
    canvas.style.width = width + 'px';
    canvas.style.height = Math.max(width * .86, cardElement.offsetHeight * 1.62) + 'px';
    canvas.style.top = cardElement.offsetTop + cardElement.offsetHeight / 2 + 'px';
    lane.appendChild(canvas);

    function draw(frame) {
      context.clearRect(0, 0, cellWidth, cellHeight);
      context.drawImage(atlas,
        frame % columns * cellWidth, Math.floor(frame / columns) * cellHeight,
        cellWidth, cellHeight, 0, 0, cellWidth, cellHeight);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(6);
      canvas.animate([{ opacity: .65 }, { opacity: 0 }], { duration: 275, fill: 'forwards' });
      window.setTimeout(() => canvas.remove(), 275);
      return true;
    }

    const started = performance.now();
    function tick(now) {
      if (!canvas.isConnected) return;
      const progress = (now - started) / duration;
      if (progress >= 1) {
        canvas.remove();
        return;
      }
      draw(Math.max(0, Math.floor(progress * frameCount)));
      window.requestAnimationFrame(tick);
    }
    draw(0);
    window.requestAnimationFrame(tick);
    return true;
  }

  window.peppermintSummonEffects = { play };
})();
