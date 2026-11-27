(() => {
  const STARTING_DIAMONDS = 100;
  const DISPLAY_SIZE = { Common: 150, Uncommon: 60, Rare: 30, 'Super Rare': 3, 'Ultra Rare': 1 };
  const DUPLICATE_DIAMONDS = { Common: 1, Uncommon: 1, Rare: 1, 'Super Rare': 2, 'Ultra Rare': 3 };
  const BUNDLE_PACK_COUNT = 3;
  const DECKS = [
    { id: 'wild-west', name: 'Wild West', logo: 'assets/deck-logos/wild-west.webp', pack: 'assets/booster-packs/wild-west-booster-pack-cutout.webp', field: 'assets/backgrounds/field-cactus-creek.webp' },
    { id: 'island-paradise', name: 'Island Paradise', logo: 'assets/deck-logos/island-paradise.webp', pack: 'assets/booster-packs/island-paradise-coyote-chase-booster-pack-cutout.webp', field: 'assets/backgrounds/field-island-paradise.webp' },
    { id: 'living-toy', name: 'Living Toy', logo: 'assets/deck-logos/living-toy.webp', pack: 'assets/booster-packs/living-toy-dollmaster-fritz-booster-pack-cutout.webp', field: 'assets/backgrounds/field-toy-store.webp' },
    { id: 'winter-ball', name: 'Winter Ball', logo: 'assets/deck-logos/winter-ball.webp', pack: 'assets/booster-packs/winter-ball-topaz-diamond-dimitri-booster-pack-cutout.webp', field: 'assets/backgrounds/field-christmas-mall.webp' },
    { id: 'valhalla', name: 'Valhalla', logo: 'assets/deck-logos/valhalla.webp', pack: 'assets/booster-packs/valhalla-booster-pack-cutout.webp', field: 'assets/backgrounds/field-valhalla-bar.webp' },
    { id: 'toxic-sewer', name: 'Toxic Sewer', logo: 'assets/deck-logos/toxic-sewer.webp', pack: 'assets/booster-packs/toxic-sewer-booster-pack-cutout.webp?v=aemi-details', field: 'assets/backgrounds/field-toxic-sewers.webp' },
  ];
  const STORAGE_KEY = 'peppermint-battle-collection-v2';
  const cardsByDeck = buildBoosterCatalog();
  let profileId = null;
  let player = readLocalSave(profileId).save;
  let activeDeck = 'toxic-sewer';
  let editorDraft = null;
  let pendingCollectionLoad = null;
  let saveRevision = 0;
  let decksUnsynced = false;
  let saveQueue = Promise.resolve();
  const publishCollectionChange = () => window.dispatchEvent(new Event('peppermint-collection-change'));
  let cloudSaveData = null;
  let opening = false;
  let revealTimer = null;
  let revealItems = [];
  let revealIndex = 0;
  let revealBundle = false;
  window.PB_CARD_PREVIEW_REGISTRY = window.PB_CARD_PREVIEW_REGISTRY || new Map();
  function cardPreviewAttrs(card) {
    const key = `collection:${card.id}`;
    window.PB_CARD_PREVIEW_REGISTRY.set(key, { ...card, instance: key });
    return `data-card-preview="${key}"`;
  }

  function cardReviewButton(card) {
    const key = `collection:${card.id}`;
    window.PB_CARD_PREVIEW_REGISTRY.set(key, { ...card, instance: key });
    return `<button type="button" class="card-review-button" data-card-preview="${key}" aria-label="View card details: ${displayedCardName(card)}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 5 5"/></svg></button>`;
  }
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.card-review-button');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const card = window.PB_CARD_PREVIEW_REGISTRY.get(button.dataset.cardPreview);
    if (!card) return;
    const dialog = document.getElementById('card-review-dialog');
    document.getElementById('card-review-art').src = card.art || '';
    document.getElementById('card-review-art').alt = displayedCardName(card) || 'Card art';
    document.getElementById('card-review-kicker').textContent = `${card.title || ''} · ${card.element || 'Neutral'}`;
    document.getElementById('card-review-name').textContent = displayedCardName(card) || 'Card';
    document.getElementById('card-review-type').textContent = `${card.role ? `${card.role} · ` : ''}${card.type || 'Fighter'}`;
    document.getElementById('card-review-attack').textContent = `${card.attack ?? 0} ATK`;
    document.getElementById('card-review-mana').textContent = `${card.cost ?? 0} Mana`;
    document.getElementById('card-review-ability').textContent = card.ability || 'No special effect.';
    const classSection = document.getElementById('card-review-class-section');
    classSection.hidden = !card.role || !card.classAbility;
    document.getElementById('card-review-class-title').textContent = `${card.role || ''} class ability`;
    document.getElementById('card-review-class-ability').textContent = card.classAbility || '';
    if (!dialog.open) dialog.showModal();
  }, true);
  document.getElementById('card-review-close').addEventListener('click', () => document.getElementById('card-review-dialog').close());
  document.getElementById('card-review-dialog').addEventListener('click', (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });
  function mainCards(deckId) {
    const source = deckId === 'wild-west' ? wildWestLibrary
      : deckId === 'island-paradise' ? islandParadiseLibrary
      : deckId === 'living-toy' ? livingToyLibrary
      : deckId === 'winter-ball' ? winterBallLibrary
      : deckId === 'valhalla' ? [...valhallaLibrary, ...cardLibrary.filter((card) => card.id === 'academy-sabrina')]
      : deckId === 'toxic-sewer' ? toxicSewerLibrary
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
    if (deckId === 'toxic-sewer') return toxicSewerLibrary.filter((card) => card.type === 'Transformation');
    const ids = { 'wild-west':['zodiac-guardian-rick','ww-zodiac-guardian-brian'], 'island-paradise':['ip-coyote-zodiac','ip-chase-zodiac'], 'living-toy':['lt-zodiac-fritz'], 'winter-ball':['wb-zodiac-topaz','wb-zodiac-dimitri'], 'valhalla':['zodiac-guardian-sabrina'] }[deckId] || [];
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
  function starterCards() {
    const academy = [...new Map(mainCards('academy').map((card) => [card.id, card])).values()];
    const deckList = academy.flatMap((card) => Array.from({ length: card.deckCopies ?? 1 }, () => card.id)).slice(0, 24);
    const counts = new Map(); deckList.forEach((id) => counts.set(id, (counts.get(id) || 0) + 1));
    while (deckList.length < 24) {
      const next = academy.find((card) => card.deckCopies == null && (counts.get(card.id) || 0) < (['Creature', 'Action'].includes(card.type) ? 3 : 1));
      if (!next) break;
      deckList.push(next.id); counts.set(next.id, (counts.get(next.id) || 0) + 1);
    }
    return { deckList, counts };
  }
  function freshSave() {
    const { counts } = starterCards();
    return {
      version: 3,
      diamonds: STARTING_DIAMONDS,
      cards: { ...Object.fromEntries(counts), 'zodiac-guardian-kage': 1, 'zodiac-guardian-ryota': 1 },
      deckSlots: [],
      activeDeckId: null,
      displays: {},
      unlockedBoosters: {},
      defeatedDecks: {},
      tutorialRewardClaimed: false,
    };
  }
  function collectionCards() {
    const source = [...new Map([...mainCards('academy'), ...wildWestLibrary, ...islandParadiseLibrary, ...livingToyLibrary, ...winterBallLibrary, ...valhallaLibrary, ...toxicSewerLibrary, ...allCardCatalog().filter((card) => card.type === 'Transformation')].filter((card) => card && card.art).map((card) => [card.id, card])).values()];
    const seen = new Set();
    return source.filter((card) => { const key = `${card.title}|${card.name}`; if (seen.has(key)) return false; seen.add(key); return true; }).map((card) => ({ ...card, rarity: rarityFor(card) || 'Starter' }));
  }
  function canonicalId(cardId) {
    const source = allCardCatalog().find((card) => card.id === cardId);
    if (!source) return cardId;
    return collectionCards().find((card) => card.title === source.title && card.name === source.name)?.id || cardId;
  }
  function aliasesFor(card) { return allCardCatalog().filter((item) => item.title === card.title && item.name === card.name).map((item) => item.id); }
  function deckSignature(deck) {
    return JSON.stringify([deck.name.trim().normalize('NFC').toLowerCase(), [...deck.cards].sort(), [...deck.ascendance].sort()]);
  }
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
    const ownedAscendance = allCardCatalog().filter((card) => card.type === 'Transformation' && (cards[card.id] || 0) > 0).map((card) => card.id);
    const catalog = new Map(collectionCards().map((card) => [card.id, card]));
    const clampDeck = (list) => {
      const counts = new Map();
      return list.filter((id) => typeof id === 'string').map(canonicalId).filter((id) => {
        const card = catalog.get(id);
        if (!card || card.type === 'Transformation') return false;
        const count = counts.get(id) || 0;
        if (count >= Math.min(collectionLimit(card), cards[id] || 0)) return false;
        counts.set(id, count + 1);
        return true;
      }).slice(0, 40);
    };
    const legacy = Number(save.version) < 3 || !save.version;
    const rawSlots = Array.isArray(save.deckSlots) ? save.deckSlots : [];
    if (legacy && !Array.isArray(save.deckSlots) && Array.isArray(save.deckList)) {
      rawSlots.push({ id: 'deck-1', name: 'Academy Starter', cards: save.deckList, ascendance: save.ascendanceDeck });
    }
    const starter = legacy ? deckSignature({
      name: 'Academy Starter',
      cards: clampDeck(starterCards().deckList),
      ascendance: ownedAscendance.filter((id) => ['zodiac-guardian-kage', 'zodiac-guardian-ryota'].includes(id)),
    }) : '';
    const ownedTransformations = new Set(ownedAscendance);
    const signatures = new Set();
    const byId = new Map();
    rawSlots.filter((slot) => slot && typeof slot === 'object').forEach((slot, index) => {
      const id = typeof slot.id === 'string' && slot.id ? slot.id : `deck-${index + 1}`;
      const name = (String(slot.name || '').trim() || `Deck ${index + 1}`).slice(0, 28);
      const deckCards = Array.isArray(slot.cards) ? clampDeck(slot.cards) : [];
      const savedAscendance = Array.isArray(slot.ascendance) ? slot.ascendance
        : (slot.id === save.activeDeckId && Array.isArray(save.ascendanceDeck) ? save.ascendanceDeck : ownedAscendance.slice(0, 12));
      const ascendance = [...new Set(savedAscendance.filter((id) => ownedTransformations.has(id)))].slice(0, 12);
      byId.set(id, { id, name, cards: deckCards, ascendance });
    });
    const slots = [...byId.values()].filter((slot) => {
      const signature = deckSignature(slot);
      if (signatures.has(signature) || (legacy && slot.id === 'deck-1' && signature === starter)) return false;
      if (legacy && !slot.cards.length && /^(Academy Starter|My Deck \d+)$/i.test(slot.name)) return false;
      signatures.add(signature);
      return true;
    }).slice(0, 20);
    const activeDeckId = slots.some((slot) => slot.id === save.activeDeckId) ? save.activeDeckId : slots[0]?.id || null;
    return {
      version: 3, diamonds: Math.max(0, Math.floor(Number(save.diamonds) || 0)), cards,
      deckSlots: slots, activeDeckId,
      displays: save.displays && typeof save.displays === 'object' ? save.displays : {},
      unlockedBoosters: save.unlockedBoosters && typeof save.unlockedBoosters === 'object' ? save.unlockedBoosters : {},
      defeatedDecks: save.defeatedDecks && typeof save.defeatedDecks === 'object' ? save.defeatedDecks : {},
      tutorialRewardClaimed: Boolean(save.tutorialRewardClaimed),
    };
  }
  function storageKey(accountId) { return `${STORAGE_KEY}:${accountId || 'guest'}`; }
  function readLocalSave(accountId) {
    try {
      const cached = JSON.parse(localStorage.getItem(storageKey(accountId)));
      if (cached?.save) return { save: normalizeSave(cached.save), unsynced: Boolean(cached.unsynced) };
    } catch { /* The local cache may be unavailable. */ }
    return { save: freshSave(), unsynced: false };
  }
  function cacheSave(accountId, save, unsynced) {
    try { localStorage.setItem(storageKey(accountId), JSON.stringify({ save, unsynced })); }
    catch { if (!accountId) setMessage('This browser could not save local collection data.', 'error'); }
  }
  function mergeSaves(localValue, cloudValue, preferLocalDecks) {
    const local = normalizeSave(localValue);
    const cloud = normalizeSave(cloudValue);
    const cards = { ...cloud.cards };
    Object.entries(local.cards).forEach(([id, count]) => { cards[id] = Math.max(cards[id] || 0, count); });

    const displays = { ...local.displays, ...cloud.displays };
    for (const [deckId, localStock] of Object.entries(local.displays)) {
      const cloudStock = cloud.displays[deckId];
      if (!cloudStock) { displays[deckId] = { ...localStock }; continue; }
      displays[deckId] = { ...localStock, ...cloudStock };
      for (const [cardId, count] of Object.entries(localStock)) if (Number.isFinite(cloudStock[cardId])) displays[deckId][cardId] = Math.min(count, cloudStock[cardId]);
    }
    const decks = preferLocalDecks ? local : cloud;
    return normalizeSave({ ...cloud, cards, deckSlots: decks.deckSlots, activeDeckId: decks.activeDeckId, displays, unlockedBoosters: { ...local.unlockedBoosters, ...cloud.unlockedBoosters }, defeatedDecks: { ...local.defeatedDecks, ...cloud.defeatedDecks }, tutorialRewardClaimed: local.tutorialRewardClaimed || cloud.tutorialRewardClaimed });
  }
  function storeSave(decksChanged = false) {
    if (pendingCollectionLoad) return;
    decksUnsynced ||= decksChanged;
    const accountId = profileId;
    const revision = ++saveRevision;
    const snapshot = JSON.parse(JSON.stringify(player));
    cacheSave(accountId, snapshot, decksUnsynced);
    if (accountId && cloudSaveData && window.peppermintPlayerSave) {
      const payload = { ...cloudSaveData, boosters: snapshot };
      saveQueue = saveQueue.then(async () => {
        if (profileId !== accountId || revision !== saveRevision) return;
        await window.peppermintPlayerSave.save(payload, accountId);
        if (profileId === accountId && revision === saveRevision) {
          decksUnsynced = false;
          cacheSave(accountId, snapshot, false);
        }
      }).catch(() => {
        if (profileId === accountId) setMessage('Saved on this device; cloud save could not be updated.', 'error');
      });
    }
    renderWallet();
    publishCollectionChange();
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
  function collectionLimit(card) { return card.maxCopies ?? (['Creature', 'Action'].includes(card.type) ? 3 : 1); }
  function collectionCount(card) { return aliasesFor(card).reduce((sum, id) => sum + Math.max(0, Math.floor(Number(player.cards[id]) || 0)), 0); }
  function setMessage(text, kind = '') { const el = document.getElementById('booster-message'); el.textContent = text || ''; el.dataset.kind = kind; }
  function renderWallet() { document.getElementById('diamond-total').textContent = player.diamonds.toLocaleString(); }
  function renderDeckTabs() {
    const tabs = document.getElementById('booster-deck-tabs');
    tabs.innerHTML = DECKS.map((deck) => { const unlocked = isUnlocked(deck.id); return `<button class="booster-deck-tab ${deck.id === activeDeck ? 'selected' : ''} ${unlocked ? '' : 'locked'}" data-booster-deck="${deck.id}" aria-pressed="${deck.id === activeDeck}" ${unlocked ? '' : 'aria-label="${deck.name} booster locked; beat this deck in Standard"'}><img src="${deck.logo}" alt=""/><span>${unlocked ? deck.name : `🔒 ${deck.name}`}</span></button>`; }).join('');
    requestAnimationFrame(() => {
      const selected = tabs.querySelector('.booster-deck-tab.selected');
      if (selected) tabs.scrollTo({ left: selected.offsetLeft - (tabs.clientWidth - selected.offsetWidth) / 2, behavior: 'smooth' });
    });
  }
  function packNavigation() { return `<div class="booster-pack-navigation" aria-label="Booster navigation"><button type="button" data-booster-step="-1" aria-label="Previous booster">‹</button><span>${DECKS.findIndex((deck) => deck.id === activeDeck) + 1} / ${DECKS.length}</span><button type="button" data-booster-step="1" aria-label="Next booster">›</button></div>`; }
  function rarityClass(rarity) { return `rarity-${rarity.toLowerCase().replaceAll(' ', '-')}`; }
  function renderDisplay() {
    const deck = getDeck();
    const displayPanel = document.getElementById('booster-display-panel');
    displayPanel.style.setProperty('--booster-field-background', 'url(' + JSON.stringify(deck.field) + ')');
    displayPanel.dataset.boosterDeck = deck.id;
    document.getElementById('booster-dialog').dataset.boosterDeck = deck.id;
    if (!isUnlocked(activeDeck)) {
      document.getElementById('booster-display').innerHTML = `<img class="booster-deck-logo" src="${deck.logo}" alt="${deck.name}"/><div class="booster-display-heading"><div class="booster-display-copy"><span class="eyebrow">BOOSTER LOCKED</span><h3>${deck.name}</h3><p>Defeat the ${deck.name} deck in Standard to unlock this display.</p></div><div class="booster-pack-art"><img src="${deck.pack}" alt="${deck.name} booster pack"/>${packNavigation()}</div></div>`;
      return;
    }
    const rarityOrder = Object.keys(DISPLAY_SIZE);
    const cards = [...cardsByDeck[activeDeck]].sort((a, b) => rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity) || (a.title + ' ' + a.name).localeCompare(b.title + ' ' + b.name));
    const left = remainingCards(activeDeck);
    const guaranteedReady = left >= 30 && (rarityRemaining(activeDeck, 'Super Rare') + rarityRemaining(activeDeck, 'Ultra Rare') > 0);
    const buyControls = '<div class="booster-buy-row"><button class="booster-buy" id="buy-one" ' + (opening || player.diamonds < 50 || left < 10 ? 'disabled' : '') + '>OPEN 1 PACK <span>50 <img class="inline-diamond-icon" src="assets/ui-icons/diamond-currency.webp" alt="Diamonds"/></span></button><button class="booster-buy booster-buy-guaranteed" id="buy-ten" ' + (opening || player.diamonds < 150 || !guaranteedReady ? 'disabled' : '') + '>OPEN 3 PACKS <span>150 <img class="inline-diamond-icon" src="assets/ui-icons/diamond-currency.webp" alt="Diamonds"/> · GUARANTEED SUPER RARE+</span></button></div>';
    document.getElementById('booster-display').innerHTML = `<img class="booster-deck-logo" src="${deck.logo}" alt="${deck.name}"/><div class="booster-display-heading"><div class="booster-display-copy"><span class="eyebrow">CARD SHOP · BOOSTER DISPLAY</span><h3>${deck.name}</h3><p>10 cards per pack · ${left.toLocaleString()} cards remain in this display</p>${buyControls}</div><div class="booster-pack-art"><img src="${deck.pack}" alt="${deck.name} booster pack"/>${packNavigation()}</div></div><div class="display-card-grid">${cards.map((card) => { const stock = getStock(activeDeck, card); const owned = collectionCount(card) >= collectionLimit(card); const exhausted = stock <= 0 || owned; return `<article class="display-card ${exhausted ? 'display-card-empty' : ''}" ${cardPreviewAttrs(card)} title="${exhausted ? 'All available copies collected' : `${stock} copies remain in this display`}"><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div><small class="${rarityClass(card.rarity)}">${card.rarity} · ${card.title}</small><strong>${displayedCardName(card)}</strong><span>${stock} left${owned ? ' · collected' : ''}</span></div>${cardReviewButton(card)}</article>`; }).join('')}</div>${left < 10 ? '<p class="display-empty">This display is empty.</p>' : ''}`;
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
      return `<article class="collection-card ${missing ? 'not-owned' : ''}" ${cardPreviewAttrs(card)}><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div class="collection-card-info"><small class="${rarityClass(card.rarity)}">${card.rarity} · ${card.title}</small><strong>${displayedCardName(card)}</strong><span>${count} / ${max}</span></div>${cardReviewButton(card)}</article>`;
    }).join('');
  }
  function renderResults(items, bundle) {
    const title = bundle ? '3-PACK DISPLAY OPENED' : 'BOOSTER PACK OPENED';
    const count = items.filter((item) => item.converted).length;
    const rarityOrder = Object.keys(DISPLAY_SIZE);
    const sorted = [...items].sort((a, b) => rarityOrder.indexOf(b.card.rarity) - rarityOrder.indexOf(a.card.rarity));
    document.getElementById('booster-results').innerHTML = `<div class="booster-results-heading"><div><span class="eyebrow">${title}</span><h3>${items.length} cards revealed</h3></div><span>${count} duplicates converted</span></div><div class="booster-pulls">${sorted.map((item, index) => `<article class="booster-pull ${item.converted ? 'converted' : ''} ${item.wasNew ? 'newly-collected' : ''}" ${cardPreviewAttrs(item.card)} style="--reveal-delay:${Math.min(index, 24) * 35}ms">${item.wasNew ? '<span class="booster-new-badge">NEW</span>' : ''}<img class="${item.converted ? 'duplicate-art' : ''}" src="${item.converted ? 'assets/ui-icons/diamond-currency.webp' : item.card.art.split('?')[0]}" alt="${item.converted ? 'Diamond currency' : ''}" loading="lazy"/><div class="booster-pull-info"><small class="${rarityClass(item.card.rarity)}">${item.card.rarity} · ${item.card.title}</small><strong>${displayedCardName(item.card)}</strong><span>${item.converted ? `Duplicate · +${item.reward}` : `Collected · ${item.count} / ${item.limit}`}</span></div>${cardReviewButton(item.card)}</article>`).join('')}</div>`;
    document.getElementById('booster-results').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function appendRevealCard(item) {
    const strip = document.getElementById('booster-pack-revealed');
    const card = document.createElement('article'); card.className = 'booster-reveal-card';
    card.setAttribute('data-card-preview', cardPreviewAttrs(item.card).match(/data-card-preview="([^"]+)"/)[1]);
    card.innerHTML = (item.wasNew ? '<span class="booster-new-badge">NEW</span>' : '') + '<img src="' + item.card.art.split('?')[0] + '" alt=""/><small>' + item.card.rarity + '</small><strong>' + displayedCardName(item.card) + '</strong>';
    strip.appendChild(card);
  }
  function revealNextCard() {
    if (revealIndex >= revealItems.length) { finishPackReveal(); return; }
    const item = revealItems[revealIndex], stage = document.getElementById('booster-flight-stage');
    const flying = document.createElement('div'); flying.className = 'booster-flying-wrap ' + rarityClass(item.card.rarity);
    flying.innerHTML = '<img src="' + item.card.art.split('?')[0] + '" alt="' + item.card.title + ' ' + item.card.name + '"/>' + (item.wasNew ? '<span class="booster-new-badge">NEW</span>' : '');
    stage.appendChild(flying); window.setTimeout(() => flying.remove(), 700);
    const packNumber = Math.floor(revealIndex / 10) + 1, cardNumber = (revealIndex % 10) + 1;
    document.getElementById('booster-opening-progress').textContent = revealBundle ? 'Pack ' + packNumber + ' of ' + BUNDLE_PACK_COUNT + ' · Card ' + cardNumber + ' of 10' : 'Card ' + cardNumber + ' of 10';
    appendRevealCard(item); revealIndex += 1;
    if (revealBundle && revealIndex % 10 === 0) {
      const next = document.getElementById('next-booster-pack'); next.hidden = false;
      next.textContent = revealIndex >= revealItems.length ? 'VIEW ALL PULLS' : 'NEXT PACK · ' + (Math.floor(revealIndex / 10) + 1) + ' OF ' + BUNDLE_PACK_COUNT; return;
    }
    if (revealIndex >= revealItems.length) { finishPackReveal(); return; }
    revealTimer = window.setTimeout(revealNextCard, 380);
  }
  function finishPackReveal() {
    if (revealTimer) window.clearTimeout(revealTimer); revealTimer = null; opening = false;
    document.getElementById('booster-opening').classList.add('hidden'); document.getElementById('booster-flight-stage').replaceChildren(); document.getElementById('next-booster-pack').hidden = true;
    renderDisplay(); renderResults(revealItems, revealBundle); setMessage(revealBundle ? 'All 3 packs are open. The bundle included a guaranteed Super Rare or Ultra Rare card.' : 'Cards were pulled from this display and will not be replaced.', 'success'); revealItems = [];
  }
  function startPackReveal(items, bundle) {
    revealItems = items; revealIndex = 0; revealBundle = bundle; opening = true;
    const overlay = document.getElementById('booster-opening'); document.getElementById('booster-results').replaceChildren(); document.getElementById('booster-pack-revealed').replaceChildren(); document.getElementById('next-booster-pack').hidden = true; overlay.classList.remove('hidden');
    document.getElementById('booster-opening-pack').src = getDeck().pack; document.getElementById('booster-opening-progress').textContent = bundle ? 'Pack 1 of ' + BUNDLE_PACK_COUNT + ' · Card 1 of 10' : 'Opening booster pack · Card 1 of 10';
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
    return { card: chosen, converted: false, reward: 0, count: nextCount, limit, wasNew: oldCount === 0 };
  }
  function openPack(bundle) {
    if (opening || !accountCollectionReady()) return;
    const price = bundle ? 150 : 50, pulls = bundle ? 30 : 10, available = remainingCards(activeDeck);
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
  function accountCollectionReady() {
    return Boolean(profileId && profileId === window.peppermintCurrentUser?.id && !pendingCollectionLoad);
  }
  function handleAuthChange(user) {
    const accountId = user?.id || null;
    if (profileId === accountId) return;
    profileId = accountId;
    saveRevision++;
    pendingCollectionLoad = null;
    cloudSaveData = null;
    editorDraft = null;
    const cache = readLocalSave(accountId);
    player = cache.save;
    decksUnsynced = cache.unsynced;
    setEditorStatus('');

    if (!accountId || !window.peppermintPlayerSave) {
      render();
      publishCollectionChange();
      return;
    }
    const load = window.peppermintPlayerSave.load();
    pendingCollectionLoad = load;
    publishCollectionChange();
    load.then((data) => {
      if (pendingCollectionLoad !== load) return;
      pendingCollectionLoad = null;
      cloudSaveData = data && typeof data === 'object' ? data : {};
      if (cloudSaveData.boosters) {
        player = mergeSaves(cache.save, cloudSaveData.boosters, cache.unsynced);
      }
      cacheSave(accountId, player, decksUnsynced);
      setEditorStatus('');
      render();
      publishCollectionChange();
    }, () => {
      if (pendingCollectionLoad !== load) return;
      pendingCollectionLoad = null;
      setMessage('Could not load the account collection. Local collection remains available.', 'error');
      setEditorStatus('');
      render();
      publishCollectionChange();
    });
  }
  function copyDeck(slot) {
    return { ...slot, cards: [...slot.cards], ascendance: [...slot.ascendance], dirty: false };
  }
  function setEditorStatus(message) {
    document.getElementById('deck-editor-status').textContent = message;
  }
  function canReplaceDraft() {
    const message = 'Discard the unsaved changes to this deck?';
    return !editorDraft?.dirty || confirm(window.peppermintLanguage?.translate(message) || message);
  }
  function markDeckEdited() {
    editorDraft.dirty = true;
    setEditorStatus('Unsaved changes');
    renderDeckEditor();
  }
  window.peppermintCollection = {
    renderBoosterDisplay() { render(); },
    openBoosterDisplay(deckId) { if (DECKS.some((deck) => deck.id === deckId)) activeDeck = deckId; render(); const dialog = document.getElementById('booster-dialog'); if (!dialog.open) dialog.showModal(); },
    count(cardId) {
      if (!accountCollectionReady()) return 0;
      const card = allCardCatalog().find((entry) => entry.id === cardId);
      return card ? collectionCount(card) : 0;
    },
    listOwnedCards() {
      const selected = editorDraft?.cards || [];
      return collectionCards().filter((card) => card.type !== 'Transformation').map((card) => ({
        ...card,
        type: card.title === 'Pocket World' ? 'Field' : card.type,
        role: card.title === 'Pocket World' ? 'Field' : card.role,
        owned: collectionCount(card),
        deckLimit: Math.min(collectionCount(card), collectionLimit(card)),
        inDeck: selected.filter((id) => id === card.id).length,
      }));
    },
    listOwnedAscendance() { return allCardCatalog().filter((card) => card.type === 'Transformation').map((card) => ({ ...card, owned: collectionCount(card) })).sort((a, b) => a.name.localeCompare(b.name)); },
    setAscendanceDeck(ids) {
      if (!editorDraft || !accountCollectionReady()) return false;
      const owned = new Set(this.listOwnedAscendance().filter((card) => card.owned > 0).map((card) => card.id));
      const next = [...new Set(ids)];
      if (next.length > 12 || next.some((id) => !owned.has(id))) return false;
      editorDraft.ascendance = next;
      markDeckEdited();
      return true;
    },
    deckSlots() {
      if (!accountCollectionReady()) return [];
      return player.deckSlots.map((slot) => ({ id: slot.id, name: slot.name, count: slot.cards.length, active: slot.id === player.activeDeckId }));
    },
    battleDeckSlots() { return this.deckSlots(); },
    battleDeck(id) {
      if (!accountCollectionReady()) return null;
      const slot = player.deckSlots.find((entry) => entry.id === id && entry.cards.length >= 20 && entry.cards.length <= 40);
      return slot ? { name: slot.name, cards: [...slot.cards], ascendance: [...slot.ascendance] } : null;
    },
    selectDeck(id) {
      if (!accountCollectionReady()) return false;
      const slot = player.deckSlots.find((entry) => entry.id === id);
      if (!slot || !canReplaceDraft()) return false;
      editorDraft = copyDeck(slot);
      setEditorStatus('');
      renderDeckEditor();
      return true;
    },
    createDeck(name) {
      if (!accountCollectionReady() || player.deckSlots.length >= 20 || !canReplaceDraft()) return false;
      const label = String(name || '').trim().slice(0, 28);
      if (!label) return false;
      editorDraft = { id: null, name: label, cards: [], ascendance: [], dirty: true };
      markDeckEdited();
      return true;
    },
    renameDeck(name) {
      const label = String(name || '').trim().slice(0, 28);
      if (!editorDraft || !accountCollectionReady() || !label || editorDraft.name === label) return false;
      editorDraft.name = label;
      markDeckEdited();
      return true;
    },
    saveDeck() {
      if (!editorDraft?.dirty || !editorDraft.cards.length || !accountCollectionReady()) return false;
      const { id, name, cards, ascendance } = editorDraft;
      const index = player.deckSlots.findIndex((slot) => slot.id === id);
      if (index < 0 && player.deckSlots.length >= 20) return false;
      const saved = { id: id || crypto.randomUUID(), name, cards: [...cards], ascendance: [...ascendance] };
      if (player.deckSlots.some((slot) => slot.id !== id && deckSignature(slot) === deckSignature(saved))) {
        setEditorStatus('This deck is already saved.');
        return false;
      }
      if (index < 0) player.deckSlots.push(saved);
      else player.deckSlots[index] = saved;
      player.activeDeckId = saved.id;
      editorDraft = copyDeck(saved);
      storeSave(true);
      setEditorStatus('Deck saved.');
      renderDeckEditor();
      return true;
    },
    deleteActiveDeck() {
      if (!editorDraft?.id || !accountCollectionReady()) return false;
      const index = player.deckSlots.findIndex((slot) => slot.id === editorDraft.id);
      if (index < 0) return false;
      player.deckSlots.splice(index, 1);
      if (player.activeDeckId === editorDraft.id) player.activeDeckId = player.deckSlots[Math.max(0, index - 1)]?.id || null;
      editorDraft = null;
      storeSave(true);
      setEditorStatus('Deck deleted.');
      renderDeckEditor();
      return true;
    },
    renderDeckEditor() { renderDeckEditor(); },
    editorChange(cardId, delta) {
      if (!editorDraft || !accountCollectionReady()) return false;
      const id = canonicalId(cardId);
      const deck = editorDraft.cards;
      if (delta > 0) {
        const card = collectionCards().find((entry) => entry.id === id);
        if (!card || card.type === 'Transformation' || deck.length >= 40 || deck.filter((entry) => entry === id).length >= Math.min(collectionCount(card), collectionLimit(card))) return false;
        deck.push(id);
      } else {
        const index = deck.lastIndexOf(id);
        if (index < 0) return false;
        deck.splice(index, 1);
      }
      markDeckEdited();
      return true;
    },
    claimTutorialReward() { if (player.tutorialRewardClaimed) return { total:0, base:0, avatarGem:0, life:0, turns:0, destroyed:0, unlocked:false, won:true, tutorialBonus:true }; player.tutorialRewardClaimed=true; player.diamonds+=100; storeSave(); render(); return { total:100, base:100, avatarGem:0, life:0, turns:0, destroyed:0, unlocked:false, won:true, tutorialBonus:true }; },
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
    const ready = accountCollectionReady();
    if (ready && !editorDraft) {
      const slot = player.deckSlots.find((entry) => entry.id === player.activeDeckId);
      if (slot) editorDraft = copyDeck(slot);
    }
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
    const shown = cards.filter((card) => (!hideUnowned || card.owned > 0) && (`${card.title} ${card.name || card.title}`.toLowerCase().includes(query) || (window.peppermintLanguage?.translate(`${card.title} ${card.name || card.title}`) || '').toLowerCase().includes(query)) && (!filters.type || displayedCardType(card) === filters.type) && (!filters.element || card.element === filters.element) && (!filters.role || (card.role || '') === filters.role) && (!filters.pack || (filters.pack === 'academy' ? cardPacks(card).length === 0 : cardPacks(card).includes(filters.pack))));
    const deck = editorDraft?.cards || [];
    const slotSelect = document.getElementById('deck-editor-slot');
    const draftOption = new Option(editorDraft?.id ? 'Choose a saved deck' : editorDraft?.name || 'Choose a saved deck', '');
    draftOption.disabled = true;
    slotSelect.replaceChildren(draftOption, ...window.peppermintCollection.deckSlots().map((slot) => new Option(`${slot.name} · ${slot.count}/40`, slot.id)));
    slotSelect.disabled = !ready || !player.deckSlots.length;
    slotSelect.value = editorDraft?.id || '';
    document.getElementById('deck-editor-new').disabled = !ready || player.deckSlots.length >= 20;
    document.getElementById('deck-editor-new').title = player.deckSlots.length >= 20 ? 'Maximum 20 saved decks' : 'Start a new deck';
    document.getElementById('deck-editor-rename').disabled = !ready || !editorDraft;
    document.getElementById('deck-editor-delete').disabled = !ready || !editorDraft?.id;
    document.getElementById('deck-editor-save').disabled = !ready || !editorDraft?.dirty || !deck.length;
    if (pendingCollectionLoad) setEditorStatus('Loading saved decks…');
    else if (editorDraft?.dirty) setEditorStatus('Unsaved changes');
    document.getElementById('deck-editor-count').textContent = `${deck.length} / 40 cards`;
    document.getElementById('deck-editor-list').innerHTML = deck.length ? deck.map((id) => {
      const card = cards.find((entry) => entry.id === canonicalId(id)) || collectionCards().find((entry) => entry.id === canonicalId(id));
      return card ? `<div class="editor-deck-row" draggable="true" data-editor-drag-remove="${card.id}" ${cardPreviewAttrs(card)}><img src="${card.art.split('?')[0]}" alt=""/><span><small>${card.title}</small><strong>${displayedCardName(card)}</strong></span>${cardReviewButton(card)}<button type="button" data-editor-card="${card.id}" data-editor-delta="-1" aria-label="Remove ${displayedCardName(card)}">−</button></div>` : '';
    }).join('') : '<p class="editor-empty">Your deck is empty. Drag cards here or add them from the list.</p>';
    document.getElementById('deck-editor-cards').innerHTML = shown.map((card) => {
      const unavailable = !ready || !editorDraft || !card.owned || deck.length >= 40 || card.inDeck >= card.deckLimit;
      return `<article class="editor-card ${unavailable ? 'cannot-add' : ''}" draggable="${!unavailable}" data-editor-drag-add="${card.id}" ${cardPreviewAttrs(card)}><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div class="editor-card-info"><small>${card.title} · ${displayedCardType(card)} · ${card.attack ?? 0} ATK · ${card.cost} Mana</small><strong>${displayedCardName(card)}</strong><span>Owned ${card.owned} · In deck ${card.inDeck} / ${card.deckLimit}</span><button type="button" data-editor-card="${card.id}" data-editor-delta="1" ${unavailable ? 'disabled' : ''}>ADD CARD</button>${cardReviewButton(card)}</div></article>`;
    }).join('') || '<p class="editor-empty">No cards match this search.</p>';
    const ascCards = window.peppermintCollection.listOwnedAscendance();
    const ascDeck = editorDraft?.ascendance || [];
    document.getElementById('ascendance-editor-count').textContent = `${ascDeck.length} / 12 cards`;
    document.getElementById('ascendance-editor-list').innerHTML = ascCards.map((card) => {
      const inDeck = ascDeck.includes(card.id), unavailable = !ready || !editorDraft || !card.owned || (!inDeck && ascDeck.length >= 12);
      return `<article class="ascendance-editor-card ${card.owned ? '' : 'cannot-add'}" ${cardPreviewAttrs(card)}><img src="${card.art.split('?')[0]}" alt="" loading="lazy"/><div><small>ZODIAC GUARDIAN · ${card.element}</small><strong>${displayedCardName(card)}</strong><span>${card.owned ? (inDeck ? 'In this Ascendance Deck' : 'Owned') : 'Not owned'}</span></div><button type="button" data-ascendance-card="${card.id}" data-ascendance-action="${inDeck ? 'remove' : 'add'}" ${unavailable ? 'disabled' : ''}>${inDeck ? 'REMOVE' : 'ADD'}</button></article>`;
    }).join('');
  }
  document.getElementById('deck-editor-search').addEventListener('input', renderDeckEditor);
  ['deck-editor-type','deck-editor-element','deck-editor-class','deck-editor-pack','deck-editor-hide-unowned'].forEach((id) => document.getElementById(id).addEventListener('change', renderDeckEditor));
  document.getElementById('deck-editor-slot').addEventListener('change', (event) => {
    if (!window.peppermintCollection.selectDeck(event.target.value)) event.target.value = editorDraft?.id || '';
  });
  document.getElementById('deck-editor-new').addEventListener('click', () => {
    const name = prompt('Name this deck', `My Deck ${player.deckSlots.length + 1}`);
    if (name !== null) window.peppermintCollection.createDeck(name);
  });
  document.getElementById('deck-editor-rename').addEventListener('click', () => {
    const name = prompt('Rename this deck', editorDraft?.name || '');
    if (name !== null) window.peppermintCollection.renameDeck(name);
  });
  document.getElementById('deck-editor-save').addEventListener('click', () => window.peppermintCollection.saveDeck());
  document.getElementById('deck-editor-delete').addEventListener('click', () => {
    const slot = player.deckSlots.find((entry) => entry.id === editorDraft?.id);
    const message = 'Delete the active deck? This cannot be undone.';
    if (slot && confirm(`${window.peppermintLanguage?.translate(message) || message}\n\n${slot.name}`)) window.peppermintCollection.deleteActiveDeck();
  });
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
    const ids = [...(editorDraft?.ascendance || [])];
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
  document.getElementById('booster-display').addEventListener('click', (event) => {
    const control = event.target.closest('[data-booster-step]'); if (!control) return;
    const currentIndex = DECKS.findIndex((deck) => deck.id === activeDeck);
    activeDeck = DECKS[(currentIndex + Number(control.dataset.boosterStep) + DECKS.length) % DECKS.length].id;
    document.getElementById('booster-results').replaceChildren(); setMessage('', ''); render();
  });
  document.getElementById('open-collection').addEventListener('click', () => { renderCollection(); document.getElementById('collection-dialog').showModal(); });
  document.getElementById('close-collection').addEventListener('click', () => document.getElementById('collection-dialog').close());
  document.getElementById('collection-back-to-boosters').addEventListener('click', () => document.getElementById('collection-dialog').close());
  document.getElementById('collection-dialog').addEventListener('close', () => { if (document.getElementById('booster-dialog').open) document.getElementById('booster-dialog').focus(); });
  window.addEventListener('peppermint-auth-state', (event) => handleAuthChange(event.detail?.user || null));
  window.addEventListener('peppermint-collection-change', () => {
    if (document.getElementById('deck-editor-dialog').open) renderDeckEditor();
  });
  if (window.peppermintCurrentUser) handleAuthChange(window.peppermintCurrentUser);
  render();
})();

