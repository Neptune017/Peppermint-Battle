(() => {
  const STARTING_DIAMONDS = 100;
  const DISPLAY_SIZE = { Common: 150, Uncommon: 60, Rare: 30, 'Super Rare': 3, 'Ultra Rare': 1 };
  const DUPLICATE_DIAMONDS = { Common: 1, Uncommon: 1, Rare: 1, 'Super Rare': 2, 'Ultra Rare': 3 };
  const DECKS = [
    { id: 'wild-west', name: 'Wild West', logo: 'assets/deck-logos/wild-west.png', pack: 'assets/booster-packs/wild-west-booster-pack-cutout.png' },
    { id: 'island-paradise', name: 'Island Paradise', logo: 'assets/deck-logos/island-paradise.png', pack: 'assets/booster-packs/island-paradise-coyote-chase-booster-pack-cutout.png' },
    { id: 'living-toy', name: 'Living Toy', logo: 'assets/deck-logos/living-toy.png', pack: 'assets/booster-packs/living-toy-dollmaster-fritz-booster-pack-cutout.png' },
    { id: 'winter-ball', name: 'Winter Ball', logo: 'assets/deck-logos/winter-ball.png', pack: 'assets/booster-packs/winter-ball-topaz-diamond-dimitri-booster-pack-cutout.png' },
  ];
  const STORAGE_KEY = 'peppermint-battle-collection-v1';
  const cardsByDeck = buildBoosterCatalog();
  let player = loadLocalSave();
  let activeDeck = 'wild-west';
  let activeDeckSlot = 'deck-1';
  let cloudUserId = null;
  let cloudSaveData = null;
  let opening = false;
  let revealTimer = null;
  let revealItems = [];
  let revealIndex = 0;
  let revealBundle = false;

  function mainCards(deckId) {
    const source = deckId === 'wild-west' ? wildWestLibrary
      : deckId === 'island-paradise' ? islandParadiseLibrary
      : deckId === 'living-toy' ? livingToyLibrary
      : deckId === 'winter-ball' ? winterBallLibrary
      : cardLibrary.filter((card) => !['locker-room', 'zodiac-egg'].includes(card.id));
    return source.filter((card) => card.type !== 'Transformation');
  }
  function rarityFor(card) {
    const type = card.type || 'Fighter';
    if (type === 'Transformation') return 'Ultra Rare';
    if (card.cost === 5) return 'Super Rare';
    if (card.cost === 1 && type === 'Creature') return 'Common';
    if (card.cost === 0 && type === 'Action') return 'Common';
    if (card.cost === 1 && (type === 'Fighter' || type === 'Action')) return 'Uncommon';
    if (card.cost === 2 && type === 'Creature') return 'Uncommon';
    if (card.cost >= 2 && card.cost <= 4 && (type === 'Fighter' || type === 'Action')) return 'Rare';
    return null;
  }
  function buildBoosterCatalog() {
    function transformationsForDeck(deckId) {
    const ids = { 'wild-west':['zodiac-guardian-rick'], 'island-paradise':['ip-coyote-zodiac','ip-chase-zodiac'], 'living-toy':['lt-zodiac-fritz'], 'winter-ball':['wb-zodiac-topaz','wb-zodiac-dimitri'] }[deckId] || [];
    return [...new Map(allCardCatalog().filter((card) => card.type === 'Transformation' && ids.includes(card.id)).map((card) => [card.id, card])).values()];
  }
    return Object.fromEntries(DECKS.map((deck) => {
      const transforms = transformationsForDeck(deck.id);
      const cards = [...new Map([...mainCards(deck.id), ...transforms].map((card) => [card.id, card])).values()]
        .map((card) => ({ ...card, rarity: rarityFor(card) }))
        .filter((card) => card.rarity && card.art);
      return [deck.id, cards];
    }));
  }
  function freshSave() {
    const academy = [...new Map(mainCards('academy').map((card) => [card.id, card])).values()];
    const deckList = academy.flatMap((card) => Array.from({ length: card.deckCopies ?? 1 }, () => card.id)).slice(0, 24);
    const counts = new Map(); deckList.forEach((id) => counts.set(id, (counts.get(id) || 0) + 1));
    while (deckList.length < 24) {
      const next = academy.find((card) => card.deckCopies == null && (counts.get(card.id) || 0) < (['Creature', 'Action'].includes(card.type) ? 3 : 1));
      if (!next) break;
      deckList.push(next.id); counts.set(next.id, (counts.get(next.id) || 0) + 1);
    }
    return { version: 2, diamonds: STARTING_DIAMONDS, cards: { ...Object.fromEntries(counts), 'zodiac-guardian-kage': 1, 'zodiac-guardian-ryota': 1 }, deckList, ascendanceDeck: ['zodiac-guardian-kage', 'zodiac-guardian-ryota'], deckSlots: [{ id: 'deck-1', name: 'Academy Starter', cards: [...deckList], ascendance: ['zodiac-guardian-kage', 'zodiac-guardian-ryota'] }], activeDeckId: 'deck-1', displays: {}, unlockedBoosters: {}, defeatedDecks: {} };
  }
  function collectionCards() {
    const source = [...new Map([...mainCards('academy'), ...wildWestLibrary, ...islandParadiseLibrary, ...livingToyLibrary, ...winterBallLibrary, ...allCardCatalog().filter((card) => card.type === 'Transformation')].filter((card) => card && card.art).map((card) => [card.id, card])).values()];
    const seen = new Set();
    return source.filter((card) => { const key = `${card.title}|${card.name}`; if (seen.has(key)) return false; seen.add(key); return true; }).map((card) => ({ ...card, rarity: rarityFor(card) || 'Starter' }));
  }
  function canonicalId(cardId) {
    const source = allCardCatalog().find((card) => card.id === cardId);
    if (!source) return cardId;
    return collectionCards().find((card) => card.title === source.title && card.name === source.name)?.id || cardId;
  }
  function aliasesFor(card) { return allCardCatalog().filter((item) => item.title === card.title && item.name === card.name).map((item) => item.id); }
  function normalizeSave(value) {
    const save = value && typeof value === 'object' ? value : freshSave();
    const rawCards = save.cards && typeof save.cards === 'object' ? save.cards : {};
    const cards = {};
    for (const card of collectionCards()) {
      const owned = aliasesFor(card).reduce((sum, id) => sum + Math.max(0, Math.floor(Number(rawCards[id]) || 0)), 0);
      if (owned) cards[card.id] = Math.min(collectionLimit(card), owned);
    }
    cards['zodiac-guardian-kage'] = Math.max(1, cards['zodiac-guardian-kage'] || 0);
    cards['zodiac-guardian-ryota'] = Math.max(1, cards['zodiac-guardian-ryota'] || 0);
    const ownedAscendance = [...new Map(allCardCatalog().filter((card) => card.type === 'Transformation' && (cards[card.id] || 0) > 0).map((card) => [card.id, card])).keys()].slice(0, 12);
    const academy = [...new Map(mainCards('academy').map((card) => [card.id, card])).values()];
    const migratedDeck = academy.flatMap((card) => Array.from({ length: Math.min(Math.max(0, Math.floor(Number(cards[card.id]) || 0)), collectionLimit(card)) }, () => card.id)).slice(0, 40);
    const oldDeck = Array.isArray(save.deckList) ? save.deckList.filter((id) => typeof id === 'string').map(canonicalId).slice(0, 40) : migratedDeck;
    const slots = Array.isArray(save.deckSlots) ? save.deckSlots.slice(0, 20).filter((slot) => slot && typeof slot === 'object').map((slot, index) => ({ id: typeof slot.id === 'string' ? slot.id : `deck-${index + 1}`, name: String(slot.name || `Deck ${index + 1}`).slice(0, 28), cards: Array.isArray(slot.cards) ? slot.cards.filter((id) => typeof id === 'string').map(canonicalId).slice(0, 40) : [], ascendance: (Array.isArray(slot.ascendance) ? slot.ascendance : (Array.isArray(save.ascendanceDeck) && slot.id === save.activeDeckId ? save.ascendanceDeck : ownedAscendance)).filter((id) => ownedAscendance.includes(id)).slice(0, 12) })) : [];
    if (!slots.length) slots.push({ id: 'deck-1', name: 'Academy Starter', cards: oldDeck, ascendance: ownedAscendance });
    const activeDeckId = slots.some((slot) => slot.id === save.activeDeckId) ? save.activeDeckId : slots[0].id;
    const active = slots.find((slot) => slot.id === activeDeckId);
    return { version: 2, diamonds: Math.max(0, Math.floor(Number(save.diamonds) || 0)), cards, deckList: [...active.cards], ascendanceDeck: [...active.ascendance], deckSlots: slots, activeDeckId, displays: save.displays && typeof save.displays === 'object' ? save.displays : {}, unlockedBoosters: save.unlockedBoosters && typeof save.unlockedBoosters === 'object' ? save.unlockedBoosters : {}, defeatedDecks: save.defeatedDecks && typeof save.defeatedDecks === 'object' ? save.defeatedDecks : {} };
  }  function loadLocalSave() {
    try { const saved = localStorage.getItem(STORAGE_KEY); const normalized = saved ? normalizeSave(JSON.parse(saved)) : freshSave(); localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized)); return normalized; }
    catch { return freshSave(); }
  }
  function mergeSaves(localValue, cloudValue) {
    const local = normalizeSave(localValue);
    const cloud = normalizeSave(cloudValue);
    const cards = { ...cloud.cards };
    Object.entries(local.cards).forEach(([id, count]) => { cards[id] = Math.max(cards[id] || 0, count); });
    const deckSlots = cloud.deckSlots.map((slot) => ({ ...slot, cards: [...slot.cards], ascendance: [...slot.ascendance] }));
    for (const localSlot of local.deckSlots) {
      const existing = deckSlots.find((slot) => slot.id === localSlot.id);
      if (!existing) { if (deckSlots.length < 20) deckSlots.push({ ...localSlot, cards: [...localSlot.cards], ascendance: [...localSlot.ascendance] }); continue; }
      const same = existing.name === localSlot.name && JSON.stringify(existing.cards) === JSON.stringify(localSlot.cards) && JSON.stringify(existing.ascendance) === JSON.stringify(localSlot.ascendance);
      if (same || deckSlots.length >= 20) continue;
      let suffix = 1, id = `${localSlot.id}-local-${suffix}`;
      while (deckSlots.some((slot) => slot.id === id)) { suffix += 1; id = `${localSlot.id}-local-${suffix}`; }
      deckSlots.push({ ...localSlot, id, name: `${localSlot.name} (Local)`.slice(0, 28), cards: [...localSlot.cards], ascendance: [...localSlot.ascendance] });
    }
    const displays = { ...local.displays, ...cloud.displays };
    for (const [deckId, localStock] of Object.entries(local.displays)) {
      const cloudStock = cloud.displays[deckId];
      if (!cloudStock) { displays[deckId] = { ...localStock }; continue; }
      displays[deckId] = { ...localStock, ...cloudStock };
      for (const [cardId, count] of Object.entries(localStock)) if (Number.isFinite(cloudStock[cardId])) displays[deckId][cardId] = Math.min(count, cloudStock[cardId]);
    }
    return normalizeSave({ ...cloud, cards, deckSlots: deckSlots.slice(0, 20), displays, unlockedBoosters: { ...local.unlockedBoosters, ...cloud.unlockedBoosters }, defeatedDecks: { ...local.defeatedDecks, ...cloud.defeatedDecks } });
  }
  function storeSave() {
    const activeSlot = player.deckSlots?.find((slot) => slot.id === player.activeDeckId);
    if (activeSlot) activeSlot.cards = [...player.deckList];
    if (activeSlot) activeSlot.ascendance = [...(player.ascendanceDeck || [])];
    player.ascendanceDeck = [...(activeSlot?.ascendance || player.ascendanceDeck || [])];
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(player)); } catch { if (!cloudUserId) setMessage('This browser could not save local collection data.', 'error'); }
    if (cloudUserId && window.peppermintPlayerSave) {
      const base = cloudSaveData && typeof cloudSaveData === 'object' ? cloudSaveData : {};
      cloudSaveData = { ...base, boosters: player };
      window.peppermintPlayerSave.save(cloudSaveData).catch(() => setMessage('Saved on this device; cloud save could not be updated.', 'error'));
    }
    renderWallet();
  }
  function getDeck(deckId = activeDeck) { return DECKS.find((deck) => deck.id === deckId) || DECKS[0]; }
  function isUnlocked(deckId) { return Boolean(player.unlockedBoosters[deckId]); }
  function getStock(deckId, card) {
    const stock = player.displays[deckId] || (player.displays[deckId] = {});
    if (!Number.isFinite(stock[card.id])) stock[card.id] = DISPLAY_SIZE[card.rarity];
    stock[card.id] = Math.max(0, Math.min(DISPLAY_SIZE[card.rarity], Math.floor(stock[card.id])));
    return stock[card.id];
  }
  function remainingCards(deckId = activeDeck) { return cardsByDeck[deckId].reduce((sum, card) => sum + getStock(deckId, card), 0); }
  function rarityRemaining(deckId, rarity) { return cardsByDeck[deckId].filter((card) => card.rarity === rarity).reduce((sum, card) => sum + getStock(deckId, card), 0); }
  function collectionLimit(card) { return ['Creature', 'Action'].includes(card.type) ? 3 : 1; }
  function collectionCount(card) { return aliasesFor(card).reduce((sum, id) => sum + Math.max(0, Math.floor(Number(player.cards[id]) || 0)), 0); }
  function setMessage(text, kind = '') { const el = document.getElementById('booster-message'); el.textContent = text || ''; el.dataset.kind = kind; }
  function renderWallet() { document.getElementById('diamond-total').textContent = player.diamonds.toLocaleString(); }
  function renderDeckTabs() {
    document.getElementById('booster-deck-tabs').innerHTML = DECKS.map((deck) => { const unlocked = isUnlocked(deck.id); return `<button class="booster-deck-tab ${deck.id === activeDeck ? 'selected' : ''} ${unlocked ? '' : 'locked'}" data-booster-deck="${deck.id}" aria-pressed="${deck.id === activeDeck}" ${unlocked ? '' : 'aria-label="${deck.name} booster locked; beat this deck in Standard"'}><img src="${deck.logo}" alt=""/><span>${unlocked ? deck.name : `🔒 ${deck.name}`}</span></button>`; }).join('');
  }
  function rarityClass(rarity) { return `rarity-${rarity.toLowerCase().replaceAll(' ', '-')}`; }
  function renderDisplay() {
    const deck = getDeck();
    if (!isUnlocked(activeDeck)) {
      document.getElementById('booster-display').innerHTML = `<img class="booster-deck-logo" src="${deck.logo}" alt="${deck.name}"/><div class="booster-display-heading"><div><span class="eyebrow">BOOSTER LOCKED</span><h3>${deck.name}</h3><p>Defeat the ${deck.name} deck in Standard to unlock this display.</p></div><img src="${deck.pack}" alt="${deck.name} booster pack"/></div>`;
      return;
    }
    const rarityOrder = Object.keys(DISPLAY_SIZE);
    const cards = [...cardsByDeck[activeDeck]].sort((a, b) => rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity) || (a.title + ' ' + a.name).localeCompare(b.title + ' ' + b.name));
    const left = remainingCards(activeDeck);
    const guaranteedReady = left >= 100 && (rarityRemaining(activeDeck, 'Super Rare') + rarityRemaining(activeDeck, 'Ultra Rare') > 0);
    document.getElementById('booster-display').innerHTML = `<img class="booster-deck-logo" src="${deck.logo}" alt="${deck.name}"/><div class="booster-display-heading"><div><span class="eyebrow">SEALED BOOSTER DISPLAY</span><h3>${deck.name}</h3><p>10 cards per pack · ${left.toLocaleString()} cards remain in this display</p></div><img src="${deck.pack}" alt="${deck.name} booster pack"/></div><div class="display-card-grid">${cards.map((card) => { const stock = getStock(activeDeck, card); const owned = collectionCount(card) >= collectionLimit(card); const exhausted = stock <= 0 || owned; return `<article class="display-card ${exhausted ? 'display-card-empty' : ''}" title="${exhausted ? 'All available copies collected' : `${stock} copies remain in this display`}"><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div><small class="${rarityClass(card.rarity)}">${card.rarity} · ${card.title}</small><strong>${card.name}</strong><span>${stock} left${owned ? ' · collected' : ''}</span></div></article>`; }).join('')}</div><div class="booster-buy-row"><button class="booster-buy" id="buy-one" ${opening || player.diamonds < 25 || left < 10 ? 'disabled' : ''}>OPEN 1 PACK <span>25 <img class="inline-diamond-icon" src="assets/ui-icons/diamond-currency.png" alt="Diamonds"/></span></button><button class="booster-buy booster-buy-guaranteed" id="buy-ten" ${opening || player.diamonds < 250 || !guaranteedReady ? 'disabled' : ''}>OPEN 10 PACKS <span>250 <img class="inline-diamond-icon" src="assets/ui-icons/diamond-currency.png" alt="Diamonds"/> · GUARANTEED SUPER RARE+</span></button></div>${left < 10 ? '<p class="display-empty">This display is empty.</p>' : ''}`;
    document.getElementById('buy-one')?.addEventListener('click', () => openPack(false));
    document.getElementById('buy-ten')?.addEventListener('click', () => openPack(true));
  }
  function renderCollection() {
    const allCards = collectionCards()
      .sort((a, b) => Object.keys(DISPLAY_SIZE).indexOf(a.rarity) - Object.keys(DISPLAY_SIZE).indexOf(b.rarity) || `${a.title} ${a.name}`.localeCompare(`${b.title} ${b.name}`));
    const owned = allCards.reduce((sum, card) => sum + collectionCount(card), 0);
    document.getElementById('collection-summary').textContent = `${owned} cards collected · ${allCards.length} unique cards`;
    document.getElementById('booster-collection').innerHTML = allCards.map((card) => {
      const count = collectionCount(card), max = collectionLimit(card), missing = count === 0;
      return `<article class="collection-card ${missing ? 'not-owned' : ''}"><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div class="collection-card-info"><small class="${rarityClass(card.rarity)}">${card.rarity} · ${card.title}</small><strong>${card.name}</strong><span>${count} / ${max}</span></div></article>`;
    }).join('');
  }
  function renderResults(items, bundle) {
    const title = bundle ? '10-PACK DISPLAY OPENED' : 'BOOSTER PACK OPENED';
    const count = items.filter((item) => item.converted).length;
    const rarityOrder = Object.keys(DISPLAY_SIZE);
    const sorted = [...items].sort((a, b) => rarityOrder.indexOf(b.card.rarity) - rarityOrder.indexOf(a.card.rarity));
    document.getElementById('booster-results').innerHTML = `<div class="booster-results-heading"><div><span class="eyebrow">${title}</span><h3>${items.length} cards revealed</h3></div><span>${count} duplicates converted</span></div><div class="booster-pulls">${sorted.map((item, index) => `<article class="booster-pull ${item.converted ? 'converted' : ''} ${item.wasNew ? 'newly-collected' : ''}" style="--reveal-delay:${Math.min(index, 24) * 35}ms">${item.wasNew ? '<span class="booster-new-badge">NEW</span>' : ''}<img class="${item.converted ? 'duplicate-art' : ''}" src="${item.converted ? 'assets/ui-icons/diamond-currency.png' : item.card.art.split('?')[0]}" alt="${item.converted ? 'Diamond currency' : ''}" loading="lazy"/><div class="booster-pull-info"><small class="${rarityClass(item.card.rarity)}">${item.card.rarity} · ${item.card.title}</small><strong>${item.card.name}</strong><span>${item.converted ? `Duplicate · +${item.reward}` : `Collected · ${item.count} / ${item.limit}`}</span></div></article>`).join('')}</div>`;
    document.getElementById('booster-results').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function appendRevealCard(item) {
    const strip = document.getElementById('booster-pack-revealed');
    const card = document.createElement('article'); card.className = 'booster-reveal-card';
    card.innerHTML = (item.wasNew ? '<span class="booster-new-badge">NEW</span>' : '') + '<img src="' + item.card.art.split('?')[0] + '" alt=""/><small>' + item.card.rarity + '</small><strong>' + item.card.title + ' · ' + item.card.name + '</strong>';
    strip.appendChild(card);
  }
  function revealNextCard() {
    if (revealIndex >= revealItems.length) { finishPackReveal(); return; }
    const item = revealItems[revealIndex], stage = document.getElementById('booster-flight-stage');
    const flying = document.createElement('div'); flying.className = 'booster-flying-wrap ' + rarityClass(item.card.rarity);
    flying.innerHTML = '<img src="' + item.card.art.split('?')[0] + '" alt="' + item.card.title + ' ' + item.card.name + '"/>' + (item.wasNew ? '<span class="booster-new-badge">NEW</span>' : '');
    stage.appendChild(flying); window.setTimeout(() => flying.remove(), 700);
    const packNumber = Math.floor(revealIndex / 10) + 1, cardNumber = (revealIndex % 10) + 1;
    document.getElementById('booster-opening-progress').textContent = revealBundle ? 'Pack ' + packNumber + ' of 10 · Card ' + cardNumber + ' of 10' : 'Card ' + cardNumber + ' of 10';
    appendRevealCard(item); revealIndex += 1;
    if (revealBundle && revealIndex % 10 === 0) {
      const next = document.getElementById('next-booster-pack'); next.hidden = false;
      next.textContent = revealIndex >= revealItems.length ? 'VIEW ALL PULLS' : 'NEXT PACK · ' + (Math.floor(revealIndex / 10) + 1) + ' OF 10'; return;
    }
    if (revealIndex >= revealItems.length) { finishPackReveal(); return; }
    revealTimer = window.setTimeout(revealNextCard, 380);
  }
  function finishPackReveal() {
    if (revealTimer) window.clearTimeout(revealTimer); revealTimer = null; opening = false;
    document.getElementById('booster-opening').classList.add('hidden'); document.getElementById('booster-flight-stage').replaceChildren(); document.getElementById('next-booster-pack').hidden = true;
    renderDisplay(); renderResults(revealItems, revealBundle); setMessage(revealBundle ? 'All 10 packs are open. The bundle included a guaranteed Super Rare or Ultra Rare card.' : 'Cards were pulled from this display and will not be replaced.', 'success'); revealItems = [];
  }
  function startPackReveal(items, bundle) {
    revealItems = items; revealIndex = 0; revealBundle = bundle; opening = true;
    const overlay = document.getElementById('booster-opening'); document.getElementById('booster-results').replaceChildren(); document.getElementById('booster-pack-revealed').replaceChildren(); document.getElementById('next-booster-pack').hidden = true; overlay.classList.remove('hidden');
    document.getElementById('booster-opening-pack').src = getDeck().pack; document.getElementById('booster-opening-progress').textContent = bundle ? 'Pack 1 of 10 · Card 1 of 10' : 'Opening booster pack · Card 1 of 10';
    renderDisplay(); requestAnimationFrame(() => overlay.scrollIntoView({ block: 'start', behavior: 'smooth' })); revealTimer = window.setTimeout(revealNextCard, 400);
  }
  function drawOne(deckId, guaranteed = false) {
    const stock = player.displays[deckId] || (player.displays[deckId] = {});
    const available = cardsByDeck[deckId].filter((card) => getStock(deckId, card) > 0 && (!guaranteed || ['Super Rare', 'Ultra Rare'].includes(card.rarity)));
    const total = available.reduce((sum, card) => sum + stock[card.id], 0);
    if (!total) return null;
    let pick = Math.random() * total;
    let chosen = available[available.length - 1];
    for (const card of available) { pick -= stock[card.id]; if (pick < 0) { chosen = card; break; } }
    stock[chosen.id] -= 1;
    const oldCount = collectionCount(chosen), limit = collectionLimit(chosen);
    if (oldCount >= limit) {
      const reward = DUPLICATE_DIAMONDS[chosen.rarity];
      player.diamonds += reward;
      return { card: chosen, converted: true, reward, count: oldCount, limit };
    }
    const nextCount = oldCount + 1;
    const canonical = canonicalId(chosen.id);
    aliasesFor(chosen).forEach((id) => { delete player.cards[id]; });
    player.cards[canonical] = nextCount;
    if (chosen.type === 'Transformation') {
      player.deckSlots.forEach((slot) => { if (slot.ascendance.length < 12 && !slot.ascendance.includes(canonical)) slot.ascendance.push(canonical); });
      player.ascendanceDeck = [...(player.deckSlots.find((slot) => slot.id === player.activeDeckId)?.ascendance || [])];
    }
    return { card: chosen, converted: false, reward: 0, count: nextCount, limit, wasNew: oldCount === 0 };
  }
  function openPack(bundle) {
    if (opening) return;
    const price = bundle ? 250 : 25, pulls = bundle ? 100 : 10, available = remainingCards(activeDeck);
    const guaranteedAvailable = rarityRemaining(activeDeck, 'Super Rare') + rarityRemaining(activeDeck, 'Ultra Rare');
    if (player.diamonds < price) return setMessage(`You need ${price} Diamonds for this purchase.`, 'error');
    if (available < pulls) return setMessage(`Only ${available} cards remain in this display.`, 'error');
    if (bundle && !guaranteedAvailable) return setMessage('This display has no Super Rare or Ultra Rare cards remaining for its guarantee.', 'error');
    opening = true; renderDisplay(); setMessage('Opening the display…');
    player.diamonds -= price;
    const items = [];
    for (let i = 0; i < pulls; i += 1) items.push(drawOne(activeDeck, bundle && i === 0));
    const valid = items.filter(Boolean);
    storeSave(); renderCollection(); startPackReveal(valid, bundle);
  }
  function render() {
    renderWallet(); renderDeckTabs();
    renderDisplay(); renderCollection();
  }
  function handleAuthChange(user) {
    if (!user) {
      cloudUserId = null; cloudSaveData = null; player = loadLocalSave(); render(); return;
    }
    if (cloudUserId === user.id) return;
    cloudUserId = user.id;
    if (!window.peppermintPlayerSave) { setMessage('Account save is unavailable; collection stays on this device.', 'error'); render(); return; }
    window.peppermintPlayerSave.load().then((data) => {
      cloudSaveData = data && typeof data === 'object' ? data : {};
      const localSave = loadLocalSave();
      if (cloudSaveData.boosters) player = mergeSaves(localSave, cloudSaveData.boosters);
      else player = localSave;
      storeSave();
      render();
    }).catch(() => { cloudUserId = null; setMessage('Could not load the account collection. Local collection remains available.', 'error'); render(); });
  }
  window.peppermintCollection = {
    renderBoosterDisplay() { render(); },
    openBoosterDisplay() { render(); const dialog = document.getElementById('booster-dialog'); if (!dialog.open) dialog.showModal(); },
    count(cardId) { return collectionCount({ id: cardId }); },
    deckList() { return [...player.deckList]; },
    setDeckList(ids) {
      const cards = collectionCards(); const catalog = new Map(cards.map((card) => [card.id, card]));
      if (!Array.isArray(ids) || ids.length > 40) return false;
      const counts = new Map();
      for (const id of ids) {
        const card = catalog.get(id); if (!card) return false;
        const next = (counts.get(id) || 0) + 1;
        const limit = Math.min(collectionCount(card), collectionLimit(card));
        if (next > limit) return false;
        counts.set(id, next);
      }
      player.deckList = ids.map(canonicalId); storeSave(); return true;
    },
    listOwnedCards() {
      return collectionCards().filter((card) => card.type !== 'Transformation').map((card) => ({ ...card, type: card.title === 'Pocket World' ? 'Field' : card.type, role: card.title === 'Pocket World' ? 'Field' : card.role, owned: collectionCount(card), deckLimit: Math.min(collectionCount(card), collectionLimit(card)), inDeck: player.deckList.filter((id) => canonicalId(id) === card.id).length }));
    },
    listOwnedAscendance() { return allCardCatalog().filter((card) => card.type === 'Transformation').map((card) => ({ ...card, owned: collectionCount(card) })).sort((a, b) => a.name.localeCompare(b.name)); },
    ascendanceDeck() { return [...(player.ascendanceDeck || [])]; },
    setAscendanceDeck(ids) {
      const owned = new Set(this.listOwnedAscendance().filter((card) => card.owned > 0).map((card) => card.id));
      const next = [...new Set(Array.isArray(ids) ? ids : [])];
      if (next.length > 12 || next.some((id) => !owned.has(id))) return false;
      player.ascendanceDeck = next; storeSave(); renderDeckEditor(); return true;
    },
    deckSlots() { return player.deckSlots.map((slot) => ({ id: slot.id, name: slot.name, count: slot.cards.length, active: slot.id === player.activeDeckId })); },
    selectDeck(id) { const slot = player.deckSlots.find((entry) => entry.id === id); if (!slot) return false; player.activeDeckId = id; activeDeckSlot = id; player.deckList = [...slot.cards]; player.ascendanceDeck = [...slot.ascendance]; storeSave(); renderDeckEditor(); return true; },
    createDeck(name) { if (player.deckSlots.length >= 20) return false; const n = player.deckSlots.length + 1; const id = `deck-${Date.now()}-${n}`; const ascendance = this.listOwnedAscendance().filter((card) => card.owned > 0).slice(0, 12).map((card) => card.id); const slot = { id, name: String(name || `My Deck ${n}`).slice(0, 28), cards: [], ascendance }; player.deckSlots.push(slot); player.activeDeckId = id; activeDeckSlot = id; player.deckList = []; player.ascendanceDeck = ascendance; storeSave(); renderDeckEditor(); return true; },
    renameDeck(name) { const slot = player.deckSlots.find((entry) => entry.id === player.activeDeckId); if (!slot || !String(name || '').trim()) return false; slot.name = String(name).trim().slice(0, 28); storeSave(); renderDeckEditor(); return true; },
    renderDeckEditor() { renderDeckEditor(); },
    editorChange(cardId, delta) {
      cardId = canonicalId(cardId);
      const next = [...player.deckList];
      if (delta > 0) {
        const card = collectionCards().find((entry) => entry.id === cardId);
        if (!card || next.length >= 40 || next.filter((id) => id === cardId).length >= Math.min(collectionCount(card), collectionLimit(card))) return false;
        next.push(cardId);
      } else {
        const index = next.lastIndexOf(cardId); if (index < 0) return false; next.splice(index, 1);
      }
      player.deckList = next; storeSave(); renderDeckEditor(); return true;
    },
    awardBattle({ won, opponentDeckId, remainingLifeCards = 0, avatarGemUses = 0, turnsElapsed = 0, battleDestroyedCards = 0 }) {
      const base = won ? 20 : 10;
      const gem = Math.max(0, Math.floor(Number(avatarGemUses) || 0)) * 20;
      const life = Math.max(0, Math.floor(Number(remainingLifeCards) || 0)) * 15;
      const turns = Math.max(0, Math.floor(Number(turnsElapsed) || 0));
      const destroyed = Math.max(0, Math.floor(Number(battleDestroyedCards) || 0));
      const unlocked = Boolean(won && opponentDeckId !== 'academy' && DECKS.some((deck) => deck.id === opponentDeckId) && !player.unlockedBoosters[opponentDeckId]);
      if (won && opponentDeckId !== 'academy' && DECKS.some((deck) => deck.id === opponentDeckId)) {
        player.defeatedDecks[opponentDeckId] = true;
        player.unlockedBoosters[opponentDeckId] = true;
      }
      player.diamonds += base + gem + life + turns + destroyed;
      storeSave(); render();
      return { total: base + gem + life + turns + destroyed, base, avatarGem: gem, life, turns, destroyed, unlocked };
    },
  };
  function renderDeckEditor() {
    const cards = window.peppermintCollection.listOwnedCards();
    const query = document.getElementById('deck-editor-search').value.trim().toLowerCase();
    const sort = document.getElementById('deck-editor-sort').value;
    const roleSelect = document.getElementById('deck-editor-class');
    const selectedRole = roleSelect.value;
    const roles = [...new Set(cards.map((card) => card.role).filter(Boolean))].sort();
    roleSelect.innerHTML = '<option value="">All classes</option>' + roles.map((role) => `<option value="${role}">${role}</option>`).join('');
    roleSelect.value = roles.includes(selectedRole) ? selectedRole : '';
    const rank = { Common: 0, Uncommon: 1, Rare: 2, 'Super Rare': 3, 'Ultra Rare': 4 };
    cards.sort((a, b) => sort === 'cost' ? a.cost - b.cost || a.name.localeCompare(b.name)
      : sort === 'attack' ? (b.attack || 0) - (a.attack || 0) || a.name.localeCompare(b.name)
      : sort === 'rarity' ? (rank[a.rarity] ?? 9) - (rank[b.rarity] ?? 9) || a.name.localeCompare(b.name)
      : `${a.title} ${a.name}`.localeCompare(`${b.title} ${b.name}`));
    const filters = { type: document.getElementById('deck-editor-type').value, element: document.getElementById('deck-editor-element').value, role: document.getElementById('deck-editor-class').value, pack: document.getElementById('deck-editor-pack').value };
    const cardPacks = (card) => DECKS.filter((entry) => cardsByDeck[entry.id].some((item) => item.id === card.id)).map((entry) => entry.id);
    const hideUnowned = document.getElementById('deck-editor-hide-unowned').checked;
    const shown = cards.filter((card) => (!hideUnowned || card.owned > 0) && `${card.title} ${card.name}`.toLowerCase().includes(query) && (!filters.type || (card.type || 'Fighter') === filters.type) && (!filters.element || card.element === filters.element) && (!filters.role || (card.role || '') === filters.role) && (!filters.pack || (filters.pack === 'academy' ? cardPacks(card).length === 0 : cardPacks(card).includes(filters.pack))));
    const deck = player.deckList;
    const slotSelect = document.getElementById('deck-editor-slot');
    slotSelect.innerHTML = player.deckSlots.map((slot) => `<option value="${slot.id}">${slot.name} · ${slot.cards.length}/40</option>`).join('');
    slotSelect.value = player.activeDeckId;
    document.getElementById('deck-editor-new').disabled = player.deckSlots.length >= 20;
    document.getElementById('deck-editor-new').title = player.deckSlots.length >= 20 ? 'Maximum 20 saved decks' : 'Create a new saved deck';
    document.getElementById('deck-editor-count').textContent = `${deck.length} / 40 cards`;
    document.getElementById('deck-editor-list').innerHTML = deck.length ? deck.map((id) => {
      const card = cards.find((entry) => entry.id === canonicalId(id)) || collectionCards().find((entry) => entry.id === canonicalId(id));
      return card ? `<div class="editor-deck-row" draggable="true" data-editor-drag-remove="${card.id}"><img src="${card.art.split('?')[0]}" alt=""/><span><small>${card.title}</small><strong>${card.name}</strong></span><button type="button" data-editor-card="${card.id}" data-editor-delta="-1" aria-label="Remove ${card.name}">−</button></div>` : '';
    }).join('') : '<p class="editor-empty">Your deck is empty. Drag cards here or add them from the list.</p>';
    document.getElementById('deck-editor-cards').innerHTML = shown.map((card) => {
      const unavailable = !card.owned || deck.length >= 40 || card.inDeck >= card.deckLimit;
      return `<article class="editor-card ${unavailable ? 'cannot-add' : ''}" draggable="${!unavailable}" data-editor-drag-add="${card.id}"><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div class="editor-card-info"><small>${card.title} · ${card.type || 'Fighter'} · ${card.cost} Mana</small><strong>${card.name}</strong><span>Owned ${card.owned} · In deck ${card.inDeck} / ${card.deckLimit}</span><button type="button" data-editor-card="${card.id}" data-editor-delta="1" ${unavailable ? 'disabled' : ''}>ADD CARD</button></div></article>`;
    }).join('') || '<p class="editor-empty">No cards match this search.</p>';
    const ascCards = window.peppermintCollection.listOwnedAscendance();
    const ascDeck = window.peppermintCollection.ascendanceDeck();
    document.getElementById('ascendance-editor-count').textContent = `${ascDeck.length} / 12 cards`;
    document.getElementById('ascendance-editor-list').innerHTML = ascCards.map((card) => {
      const inDeck = ascDeck.includes(card.id), unavailable = !card.owned || (!inDeck && ascDeck.length >= 12);
      return `<article class="ascendance-editor-card ${card.owned ? '' : 'cannot-add'}"><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div><small>ZODIAC GUARDIAN · ${card.element}</small><strong>${card.name}</strong><span>${card.owned ? (inDeck ? 'In this Ascendance Deck' : 'Owned') : 'Not owned'}</span></div><button type="button" data-ascendance-card="${card.id}" data-ascendance-action="${inDeck ? 'remove' : 'add'}" ${unavailable ? 'disabled' : ''}>${inDeck ? 'REMOVE' : 'ADD'}</button></article>`;
    }).join('');
  }
  document.getElementById('deck-editor-search').addEventListener('input', renderDeckEditor);
  ['deck-editor-type','deck-editor-element','deck-editor-class','deck-editor-pack','deck-editor-hide-unowned'].forEach((id) => document.getElementById(id).addEventListener('change', renderDeckEditor));
  document.getElementById('deck-editor-slot').addEventListener('change', (event) => window.peppermintCollection.selectDeck(event.target.value));
  document.getElementById('deck-editor-new').addEventListener('click', () => { const name = prompt('Name this deck', `My Deck ${player.deckSlots.length + 1}`); if (name !== null && !window.peppermintCollection.createDeck(name)) setMessage('You can save up to 20 decks.', 'error'); });
  document.getElementById('deck-editor-rename').addEventListener('click', () => { const slot = player.deckSlots.find((entry) => entry.id === player.activeDeckId); const name = prompt('Rename this deck', slot?.name || 'My Deck'); if (name !== null) window.peppermintCollection.renameDeck(name); });
  const bindEditorDrag = (container, mode) => {
    container.addEventListener('dragstart', (event) => { const item = event.target.closest(mode === 'add' ? '[data-editor-drag-add]' : '[data-editor-drag-remove]'); if (!item || item.draggable === false) { event.preventDefault(); return; } const id = item.dataset[mode === 'add' ? 'editorDragAdd' : 'editorDragRemove']; event.dataTransfer.setData('text/plain', `${mode}:${id}`); event.dataTransfer.effectAllowed = 'move'; });
  };
  bindEditorDrag(document.getElementById('deck-editor-cards'), 'add');
  bindEditorDrag(document.getElementById('deck-editor-list'), 'remove');
  const bindEditorDrop = (container, acceptedMode, delta) => { container.addEventListener('dragover', (event) => { if (event.dataTransfer.types.includes('text/plain')) { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; } }); container.addEventListener('drop', (event) => { event.preventDefault(); const [mode, id] = event.dataTransfer.getData('text/plain').split(':'); if (mode === acceptedMode && id) window.peppermintCollection.editorChange(id, delta); }); };
  bindEditorDrop(document.getElementById('deck-editor-list'), 'add', 1);
  bindEditorDrop(document.getElementById('deck-editor-cards'), 'remove', -1);  document.getElementById('deck-editor-sort').addEventListener('change', renderDeckEditor);
  document.getElementById('deck-editor-cards').addEventListener('click', (event) => { const button = event.target.closest('[data-editor-card]'); if (button) window.peppermintCollection.editorChange(button.dataset.editorCard, Number(button.dataset.editorDelta)); });
  document.getElementById('deck-editor-list').addEventListener('click', (event) => { const button = event.target.closest('[data-editor-card]'); if (button) window.peppermintCollection.editorChange(button.dataset.editorCard, Number(button.dataset.editorDelta)); });
  document.getElementById('ascendance-editor-list').addEventListener('click', (event) => {
    const button = event.target.closest('[data-ascendance-card]'); if (!button) return;
    const ids = window.peppermintCollection.ascendanceDeck();
    if (button.dataset.ascendanceAction === 'add') ids.push(button.dataset.ascendanceCard);
    else ids.splice(ids.indexOf(button.dataset.ascendanceCard), 1);
    window.peppermintCollection.setAscendanceDeck(ids);
  });
  document.getElementById('booster-button').addEventListener('click', () => window.peppermintCollection.openBoosterDisplay());
  document.getElementById('close-boosters').addEventListener('click', () => document.getElementById('booster-dialog').close());
  document.getElementById('booster-dialog').addEventListener('close', () => { if (opening) finishPackReveal(); });
  document.getElementById('skip-booster-animation').addEventListener('click', finishPackReveal);
  document.getElementById('next-booster-pack').addEventListener('click', () => { if (!revealBundle) return; if (revealIndex >= revealItems.length) { finishPackReveal(); return; } document.getElementById('booster-pack-revealed').replaceChildren(); document.getElementById('next-booster-pack').hidden = true; revealTimer = window.setTimeout(revealNextCard, 180); });
  document.getElementById('booster-deck-tabs').addEventListener('click', (event) => {
    const tab = event.target.closest('[data-booster-deck]'); if (!tab) return;
    if (!isUnlocked(tab.dataset.boosterDeck)) { setMessage(`Defeat the ${getDeck(tab.dataset.boosterDeck).name} deck in Standard to unlock this booster.`, 'error'); return; }
    activeDeck = tab.dataset.boosterDeck; document.getElementById('booster-results').replaceChildren(); setMessage('', ''); render();
  });
  document.getElementById('open-collection').addEventListener('click', () => { renderCollection(); document.getElementById('collection-dialog').showModal(); });
  document.getElementById('close-collection').addEventListener('click', () => document.getElementById('collection-dialog').close());
  document.getElementById('collection-back-to-boosters').addEventListener('click', () => document.getElementById('collection-dialog').close());
  document.getElementById('collection-dialog').addEventListener('close', () => { if (document.getElementById('booster-dialog').open) document.getElementById('booster-dialog').focus(); });
  window.addEventListener('peppermint-auth-state', (event) => handleAuthChange(event.detail?.user || null));
  render();
})();
