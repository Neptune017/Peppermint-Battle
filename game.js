const cardLibrary = [
  { id: 'academy-coyote', title: 'Academy', name: 'Coyote', cost: 3, attack: 3, element: 'Mind', role: 'Brawler', art: 'assets/cards/AcademyCoyote.png', ability: 'On summon, draw an Academy Brawler from your deck.' },
  { id: 'peppermint', title: 'Academy', name: 'Peppermint', cost: 5, attack: 5, element: 'Mind', role: 'Trickster', art: 'assets/cards/AcademyPeppermint.png?v=20261120bm', ability: '+1 attack for each adjacent ally Academy card.' },
  { id: 'aemi', title: 'Academy', name: 'Aemi', cost: 2, attack: 2, element: 'Dark', role: 'Shooter', art: 'assets/cards/AcademyAemi.png', ability: 'Draw an Academy card with a different element.' },
  { id: 'kage', title: 'Academy', name: 'Kage', cost: 3, attack: 3, element: 'Dark', role: 'Blader', art: 'assets/cards/AcademyKage.png', ability: 'Draw a Zoya card when destroyed.' },
  { id: 'ryota', title: 'Academy', name: 'Ryota', cost: 3, attack: 2, element: 'Solar', role: 'Shooter', art: 'assets/cards/AcademyRyota.png', ability: 'Discard a card to destroy a fighter.' },
  { id: 'zoya', title: 'Academy', name: 'Zoya', cost: 5, attack: 4, element: 'Dark', role: 'Summoner', art: 'assets/cards/AcademyZoya.png', ability: 'Return an Academy card on the field to its owner’s hand.' },
  { id: 'berry', title: 'Candy Goblin', name: 'Berry', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Brawler', art: 'assets/cards/CandyGoblinBerry.png', ability: 'Return one of your fighters to your hand.' },
  { id: 'frosty', title: 'Candy Goblin', name: 'Frosty', type: 'Creature', cost: 1, attack: 1, element: 'Glacial', role: 'Shielder', art: 'assets/cards/CandyGoblinFrosty.png', ability: 'The opposing fighter cannot attack next turn.' },
  { id: 'gummy', title: 'Candy Goblin', name: 'Gummy', type: 'Creature', cost: 1, attack: 1, element: 'Ignis', role: 'Enchanter', art: 'assets/cards/CandyGoblinGummy.png', ability: 'Draw a Cooking action card.' },
  { id: 'runny', title: 'Candy Goblin', name: 'Runny', type: 'Creature', cost: 1, attack: 1, element: 'Aer', role: 'Brawler', art: 'assets/cards/CandyGoblinRunny.png', ability: 'Choose an Academy card costing 4 or less from your deck and add it to your hand.' },
  { id: 'amethyst', title: 'Academy', name: 'Amethyst', cost: 4, attack: 4, element: 'Dark', role: 'Shielder', art: 'assets/cards/AcademyAmethyst.png', ability: 'Destroy the opposing fighter.' },
  { id: 'den', title: 'Academy', name: 'Den', cost: 4, attack: 2, element: 'Mind', role: 'Enchanter', art: 'assets/cards/AcademyDen.png?v=20261120bm', ability: 'Let a fighter attack on its first turn.' },
  { id: 'peppermint-ally', title: 'Academy', name: 'Cotton', cost: 4, attack: 4, element: 'Mind', role: 'Blader', art: 'assets/cards/AcademyCotton.png', ability: 'Discard this card to draw Academy Hall from your deck into your hand.' },
  { id: 'academy-grounds', title: 'Pocket World', name: 'Academy Hall', type: 'Action', deckCopies: 1, cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/AcademyHall.png', ability: 'Academy cards gain +1 attack if there are no Fighter or Creature cards in the Pandemonium Zone, other than Academy cards.' },
  { id: 'cooking', title: 'General', name: 'Cooking', type: 'Action', cost: 3, attack: 0, element: 'Ignis', role: 'Action', art: 'assets/cards/Cooking.png', ability: 'Return a Fighter or Creature card from your Pandemonium Zone to your hand.' },
  { id: 'locker-room', title: 'General', name: 'Locker Room', type: 'Action', cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/LockerRoom.png', ability: 'If a Fighter you control shares a name with a card in your hand or deck that has a different title, destroy your Fighter and summon that card in its lane.' },
  { id: 'avatar-gem', title: 'General', name: 'Avatar Gem', type: 'Action', deckCopies: 1, cost: 4, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/AvatarGem.png', ability: 'Replace a card in a fighter zone with a card from the Ascendance Deck that has the same name.' },
  { id: 'academy-fritz', title: 'Academy', name: 'Fritz', cost: 1, attack: 1, element: 'Dark', role: 'Summoner', art: 'assets/cards/AcademyFritz.png?v=20261120a', ability: 'Draw an Academy card with a different element.' },
  { id: 'academy-lynda', title: 'Academy', name: 'Lynda', cost: 1, attack: 1, element: 'Mind', role: 'Trickster', art: 'assets/cards/AcademyLynda-WildWest.png', ability: 'Draw an Academy card with a different element.' },
  { id: 'dharma', title: 'Academy', name: 'Dharma', cost: 5, attack: 4, element: 'Terra', role: 'Healer', art: 'assets/cards/AcademyDharma.png', ability: 'On summon, choose a Fighter or Creature in your Pandemonium Zone. At the start of your next turn, summon it to an open Fighter Zone if Dharma is still on the field.' },
  { id: 'horatio', title: 'Academy', name: 'Horatio', cost: 5, attack: 4, element: 'Terra', role: 'Enchanter', art: 'assets/cards/AcademyHoratio.png', ability: 'On summon, draw a Terra Action card.' },
  { id: 'vishnu', title: 'Djinn', name: 'Vishnu', cost: 5, attack: 5, element: 'Dark', role: 'Shooter', art: 'assets/cards/DjinnVishnu.png', ability: 'Can only be summoned if Peppermint is in one of your Fighter Zones. On summon, draw Avatar Gem.' },
  { id: 'brewy', title: 'Candy Goblin', name: 'Brewy', type: 'Creature', cost: 1, attack: 1, element: 'Mind', role: 'Enchanter', art: 'assets/cards/CandyGoblinBrewy.png', ability: 'On summon, draw a Potion card.' },
  { id: 'mana-potion', title: 'General', name: 'Mana Potion', type: 'Action', cost: 0, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/ManaPotion.png', ability: 'Restore up to 2 spent Mana this turn.' },
  { id: 'health-potion', title: 'General', name: 'Health Potion', type: 'Action', cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/HealthPotion.png', ability: 'Restore an empty Life Zone with the top card of your deck.' },
  { id: 'patchy', title: 'Candy Goblin', name: 'Patchy', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Healer', art: 'assets/cards/CandyGoblinPatchy.png', ability: 'When destroyed, draw a Dharma card.' },
  { id: 'zesty', title: 'Candy Goblin', name: 'Zesty', type: 'Creature', cost: 1, attack: 1, element: 'Solar', role: 'Enchanter', art: 'assets/cards/CandyGoblinZesty.png', ability: 'On summon, return an Action card from your Pandemonium Zone to your hand.' },
  { id: 'zomby', title: 'Candy Goblin', name: 'Zomby', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Trickster', art: 'assets/cards/CandyGoblinZomby.png', ability: 'When destroyed, return this card to your hand and increase its cost by 1.' },
  { id: 'zodiac-guardian-rick', title: 'Zodiac Guardian', name: 'Rick', type: 'Transformation', cost: 0, attack: 6, element: 'Terra', role: 'Shielder', art: 'assets/cards/ZodiacGuardianRick.png', ability: '+1 attack for each Terra card in your Pandemonium Zone.' },
  { id: 'zodiac-guardian-kage', title: 'Zodiac Guardian', name: 'Kage', type: 'Transformation', cost: 0, attack: 5, element: 'Dark', role: 'Blader', art: 'assets/cards/ZodiacGuardianKage.png', ability: '+1 attack for each Dark card in your Pandemonium Zone.' },
  { id: 'zodiac-guardian-ryota', title: 'Zodiac Guardian', name: 'Ryota', type: 'Transformation', cost: 0, attack: 5, element: 'Solar', role: 'Shooter', art: 'assets/cards/ZodiacGuardianRyota.png', ability: 'Discard a card to destroy an opposing fighter in a Solar explosion.' },
];
const wildWestLibrary = [
  { id: 'ww-rick', title: 'Wild West', name: 'Rick', cost: 5, attack: 4, element: 'Terra', role: 'Shielder', art: 'assets/cards/WildWestRick.png', ability: 'While this is on the field, Wild West fighters gain +1 attack for each empty fighter zone on both fields.' },
  { id: 'ww-wade', title: 'Wild West', name: 'Wade', cost: 5, attack: 4, element: 'Terra', role: 'Shooter', art: 'assets/cards/WildWestWade.png', ability: '+2 attack for each empty enemy fighter zone.' },
  { id: 'ww-brian', title: 'Wild West', name: 'Brian', cost: 4, attack: 3, element: 'Terra', role: 'Brawler', art: 'assets/cards/WildWestBrian.png', ability: 'On summon, return an enemy fighter to its hand.' },
  { id: 'ww-fritz', title: 'Wild West', name: 'Fritz', cost: 2, attack: 2, element: 'Dark', role: 'Trickster', art: 'assets/cards/WIldWestFritz.png', ability: 'On summon, return an Eggscythe from your Pandemonium Zone to your hand.' },
  { id: 'ww-academy-rick', title: 'Academy', name: 'Rick', cost: 4, attack: 4, element: 'Terra', role: 'Shielder', art: 'assets/cards/AcademyRick.png', ability: 'Cannot be destroyed or returned by card effects, except Avatar Gem or Locker Room.' },
  { id: 'ww-academy-fritz', title: 'Academy', name: 'Fritz', cost: 1, attack: 1, element: 'Dark', role: 'Summoner', art: 'assets/cards/AcademyFritz.png?v=20261120a', ability: 'Draw an Academy card with a different element.' },
  { id: 'ww-academy-lynda', title: 'Academy', name: 'Lynda', cost: 1, attack: 1, element: 'Mind', role: 'Trickster', art: 'assets/cards/AcademyLynda-WildWest.png', ability: 'Draw an Academy card with a different element.' },
  { id: 'ww-medusa', title: 'Wild West', name: 'Medusa', cost: 2, attack: 2, element: 'Mind', role: 'Trickster', art: 'assets/cards/WildWestMedusa.png', ability: 'Once per turn, spend 1 Mana to look at the top card of your deck.' },
  { id: 'ww-wild-ox', title: 'Zodiac', name: 'Wild Ox', type: 'Creature', cost: 2, attack: 2, element: 'Terra', role: 'Shielder', art: 'assets/cards/ZodiacWildOx.png', ability: 'If Rick is on your field, draw an Avatar Gem.' },
  { id: 'ww-eggscythe', title: 'Vegcritter', name: 'Eggscythe', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Blader', art: 'assets/cards/VegcritterEggyscythe.png', ability: 'When destroyed, return a different Dark card from your Pandemonium Zone to your hand.' },
  { id: 'ww-bandito', title: 'Wild West', name: 'Bandito', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Blader', art: 'assets/cards/WildWestBandito.png', ability: 'Can attack on the turn it is summoned, except on the first turn.' },
  { id: 'ww-littlebeak', title: 'Wild West', name: 'Littlebeak', type: 'Creature', cost: 1, attack: 1, element: 'Aer', role: 'Shielder', art: 'assets/cards/WildWestLittlebeak.png', ability: 'Gets +1 attack during the enemy turn.' },
  { id: 'ww-sunnythorn', title: 'Wild West', name: 'Sunnythorn', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Enchanter', art: 'assets/cards/WildWestSunnythorn.png', ability: 'A fighter that destroys this in battle loses 1 attack.' },
  { id: 'ww-galacta', title: 'Wild West', name: 'GaLacta', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Healer', art: 'assets/cards/WildWestGaLacta.png', ability: 'Wild West cards costing 3 or less return to your hand instead of the Pandemonium Zone when defeated in battle. (Except self.)' },
  { id: 'ww-sangrizo', title: 'Wild West', name: 'Sangrizo', type: 'Creature', cost: 1, attack: 1, element: 'Ignis', role: 'Shooter', art: 'assets/cards/WildWestSangrizo.png', ability: 'On summon, spend 1 Mana to destroy a random card in your opponent’s hand.' },
  { id: 'ww-rosaluna', title: 'Wild West', name: 'Rosaluna', type: 'Creature', cost: 1, attack: 1, element: 'Mind', role: 'Enchanter', art: 'assets/cards/WildWestRosaluna.png', ability: 'When destroyed, draw a Mind Wild West card.' },
  { id: 'ww-planting', title: 'General', name: 'Planting', type: 'Action', cost: 2, attack: 0, element: 'Terra', role: 'Action', art: 'assets/cards/Planting.png', ability: 'Summon a Vegcritter from your deck or Pandemonium Zone.' },
  cardLibrary.find((card) => card.id === 'avatar-gem'),
  cardLibrary.find((card) => card.id === 'cooking'),
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
];
const islandParadiseLibrary = [
  { id: 'ip-brody', title: 'Island Paradise', name: 'Brody', cost: 5, attack: 4, element: 'Aqua', role: 'Brawler', art: 'assets/cards/IslandParadiseBrody.png', ability: 'Gain 1 attack after each card destroyed by this card.' },
  { id: 'ip-natsuki', title: 'Island Paradise', name: 'Natsuki', cost: 4, attack: 3, element: 'Aqua', role: 'Healer', art: 'assets/cards/IslandParadiseNatsuki.png', ability: 'On summon, protect an adjacent ally from attacks. It cannot defend its lane’s Life Zone while protected.' },
  { id: 'ip-jet', title: 'Island Paradise', name: 'Jet', cost: 4, attack: 3, element: 'Ignis', role: 'Brawler', art: 'assets/cards/IslandParadiseJet.png', ability: 'Gains 1 attack at the beginning of each of your turns while in the Fighter Zone.' },
  { id: 'ip-sabrina', title: 'Island Paradise', name: 'Sabrina', cost: 5, attack: 5, element: 'Aer', role: 'Brawler', art: 'assets/cards/IslandParadiseSabrina.png', ability: 'Gains 1 attack for each adjacent Brawler.' },
  { id: 'ip-coyote', title: 'Island Paradise', name: 'Coyote', cost: 5, attack: 4, element: 'Aqua', role: 'Brawler', art: 'assets/cards/IslandParadiseCoyote.png', ability: 'Can make 2 attacks each turn, except the turn it is summoned.' },
  { id: 'ip-chase', title: 'Island Paradise', name: 'Chase', cost: 4, attack: 3, element: 'Aqua', role: 'Healer', art: 'assets/cards/IslandParadiseChase.png', ability: 'Each turn, give 1 attack to an adjacent Brawler. Choose one if there are several.' },
  { id: 'ip-banaphin', title: 'Island Paradise', name: 'Banaphin', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Enchanter', art: 'assets/cards/IslandParadiseBanaphin.png', ability: 'When destroyed, draw an Island Paradise Creature.' },
  { id: 'ip-kokocrab', title: 'Island Paradise', name: 'Kokocrab', type: 'Creature', cost: 1, attack: 2, element: 'Aqua', role: 'Brawler', art: 'assets/cards/IslandParadiseKokocrab.png', ability: 'Loses 1 attack while facing a Brawler.' },
  { id: 'ip-pinebeak', title: 'Island Paradise', name: 'Pinebeak', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Enchanter', art: 'assets/cards/IslandParadisePinebeak.png', ability: 'On summon, draw an Island Paradise Creature.' },
  { id: 'ip-croaktail', title: 'Island Paradise', name: 'Croaktail', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Healer', art: 'assets/cards/IslandParadiseCroaktail.png', ability: 'Destroy this card to give an adjacent Brawler +1 attack.' },
  { id: 'ip-floatbite', title: 'Island Paradise', name: 'Floatbite', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Blader', art: 'assets/cards/IslandParadiseFloatbite.png', ability: 'When this destroys an opposing card, an adjacent Aqua Brawler may gain 1 attack.' },
  { id: 'ip-octospray', title: 'Island Paradise', name: 'Octospray', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Shooter', art: 'assets/cards/IslandParadiseOctospray.png', ability: 'After this is attacked, the attacking enemy loses 1 attack.' },
  { id: 'ip-field', title: 'Pocket World', name: 'Island Paradise', type: 'Action', cost: 2, attack: 0, element: 'Aqua', role: 'Action', art: 'assets/cards/IslandParadiseField.png', ability: 'Island Paradise fighters cannot be targeted by attacks, but do not defend their lane’s Life Zone.' },
  { id: 'ip-coyote-zodiac', title: 'Zodiac Guardian', name: 'Coyote', type: 'Transformation', cost: 0, attack: 5, element: 'Mind', role: 'Brawler', art: 'assets/cards/ZodiacGuardianCoyote.png?v=20261120bm', ability: 'Gains 1 attack for each Brawler in your Pandemonium Zone.' },
  { id: 'ip-chase-zodiac', title: 'Zodiac Guardian', name: 'Chase', type: 'Transformation', cost: 0, attack: 5, element: 'Aqua', role: 'Brawler', art: 'assets/cards/ZodiacGuardianChase.png?v=20261120bm', ability: 'Gains 1 attack for each Aqua card in your Pandemonium Zone.' },
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), maxCopies: 3, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'locker-room'), maxCopies: 3, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
];
const livingToyLibrary = [
  { id: 'lt-scribble', title: 'Living Toy', name: 'Scribble', type: 'Creature', maxCopies: 1, cost: 2, attack: 1, element: 'Solar', role: 'Enchanter', art: 'assets/cards/LivingToyScribble.png', ability: 'On summon, draw an Avatar Gem.' },
  { id: 'lt-clary', title: 'Dollmaster', name: 'Clary', cost: 3, attack: 3, element: 'Dark', role: 'Blader', art: 'assets/cards/DollmasterClary.png', ability: 'Gains +1 attack for each adjacent Living Toy or Dollmaster card.' },
  { id: 'lt-fritz', title: 'Dollmaster', name: 'Fritz', cost: 2, attack: 2, element: 'Dark', role: 'Summoner', art: 'assets/cards/DollmasterFritz.png', ability: 'Give 1 attack point to each 1-cost Dark card in the Fighter Zone for each Living Toy card in your hand.' },
  { id: 'lt-rat-king', title: 'Dollmaster', name: 'Rat King', cost: 5, attack: 2, element: 'Dark', role: 'Summoner', art: 'assets/cards/DollmasterRatKing.png', ability: 'Gains +1 attack for each Dark card with a different name in your Pandemonium Zone.' },
  { id: 'lt-boxy', title: 'Tsukumogami', name: 'Boxy', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Enchanter', art: 'assets/cards/TsukumogamiBoxy.png', ability: 'On summon, send a Dark card from your deck to the Pandemonium Zone.' },
  { id: 'lt-teddy', title: 'Tsukumogami', name: 'Teddy', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Blader', art: 'assets/cards/TsukumogamiTeddy.png', ability: 'On summon, discard a card to gain 1 attack.' },
  { id: 'lt-broomy', title: 'Tsukumogami', name: 'Broomy', type: 'Creature', deckCopies: 1, cost: 1, attack: 1, element: 'Dark', role: 'Healer', art: 'assets/cards/TsukumogamiBroomy.png', ability: 'On summon, return a card from your Fighter Zone to your hand and gain Mana equal to its cost.' },
  { id: 'lt-melodoll', title: 'Living Toy', name: 'Melodoll', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Healer', art: 'assets/cards/LivingToyMelodoll.png', ability: 'On summon, return a Dark card from your Pandemonium Zone to your hand.' },
  { id: 'lt-clapster', title: 'Living Toy', name: 'Clapster', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Shooter', art: 'assets/cards/LivingToyClapster.png', ability: 'On summon, send the top card of your deck to the Pandemonium Zone to randomly discard a card from the enemy’s hand.' },
  { id: 'lt-beatcracker', title: 'Living Toy', name: 'Beatcracker', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Brawler', art: 'assets/cards/LivingToyBeatCracker.png', ability: 'If sent to the Pandemonium Zone from your hand or deck, summon this card.' },
  { id: 'lt-zodiac-fritz', title: 'Zodiac Guardian', name: 'Fritz', type: 'Transformation', cost: 0, attack: 3, element: 'Dark', role: 'Trickster', art: 'assets/cards/ZodiacGuardianFritz.png', ability: 'Gains +1 attack for each Dark Fighter or Creature in your Pandemonium Zone.' },
  { ...cardLibrary.find((card) => card.id === 'academy-fritz'), maxCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), maxCopies: 3, deckCopies: 1 },
  { id: 'lt-raterrot', title: 'Zodiac', name: 'Raterrot', type: 'Creature', maxCopies: 1, cost: 1, attack: 1, element: 'Dark', role: 'Summoner', art: 'assets/cards/ZodiacRaterrot.png', ability: "On summon, if Fritz is on the field, draw an Avatar Gem." },
  { id: 'toy-store', title: 'Pocket World', name: 'Toy Store', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 2, attack: 0, element: 'Dark', role: 'Action', art: 'assets/cards/PocketWorldToyStore.png', ability: 'While on the field, all 1-cost Fighters and Creatures gain +1 attack.' },
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
];
const winterBallLibrary = [
  { id: 'drinking-tea', title: 'Winter Ball', name: 'Drinking Tea', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 1, attack: 0, element: 'Aqua', role: 'Action', art: 'assets/cards/DrinkingTea.png', ability: 'Allow one of your Glacial cards to act on its first turn.' },
  { id: 'christmas-mall', title: 'Pocket World', name: 'Christmas Mall', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/PocketWorldChristmasMall.png', ability: 'Once per turn, swap the position of two cards if at least one is Glacial.' },
  { id: 'academy-diamond', title: 'Academy', name: 'Diamond', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 3, attack: 3, element: 'Aer', role: 'Healer', art: 'assets/cards/AcademyDiamond.png', ability: 'If Topaz is on the field, summon this card with no Mana cost.' },
  { id: 'academy-topaz', title: 'Academy', name: 'Topaz', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Aer', role: 'Enchanter', art: 'assets/cards/AcademyTopaz.png', ability: 'If Diamond is on the field, summon this card with no Mana cost.' },
  { id: 'academy-dimitri', title: 'Academy', name: 'Dimitri', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 3, attack: 3, element: 'Glacial', role: 'Blader', art: 'assets/cards/AcademyDimitri.png', ability: 'On summon, draw an Academy card that costs 3 or 4.' },
  { id: 'wb-topaz-diamond', title: 'Winter Ball', name: 'Topaz & Diamond', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Aer', role: 'Enchanter', art: 'assets/cards/WinterBallTopazDiamond.png', ability: 'Once per turn, move one of your fighters to any empty Fighter Zone. Counts as both Topaz and Diamond.' },
  { id: 'wb-bearnardo', title: 'Winter Ball', name: 'Bearnardo', type: 'Creature', maxCopies: 3, deckCopies: 2, cost: 1, attack: 1, element: 'Glacial', role: 'Brawler', art: 'assets/cards/WinterBallBearnardo.png', ability: 'On summon, reduce the cost of a Glacial card in your hand by 1.' },
  { id: 'wb-dimitri', title: 'Winter Ball', name: 'Dimitri', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Glacial', role: 'Blader', art: 'assets/cards/WinterBallDimitri.png', ability: 'Gains +1 attack whenever it moves to another lane.' },
  { id: 'wb-gillusion', title: 'Winter Ball', name: 'Gillusion', type: 'Creature', maxCopies: 3, deckCopies: 2, cost: 1, attack: 1, element: 'Aqua', role: 'Shielder', art: 'assets/cards/WinterBallGillusion.png', ability: 'On summon, move a non-adjacent card to a free Fighter Zone adjacent to its current lane.' },
  { id: 'wb-ladyfeather', title: 'Winter Ball', name: 'Ladyfeather', type: 'Creature', maxCopies: 3, deckCopies: 3, cost: 1, attack: 1, element: 'Aer', role: 'Shooter', art: 'assets/cards/WinterBallLeadyfeather.png', ability: 'On summon, move the opposing card to a free adjacent Fighter Zone.' },
  { id: 'wb-merryhound', title: 'Winter Ball', name: 'Merryhound', type: 'Creature', maxCopies: 3, deckCopies: 3, cost: 1, attack: 1, element: 'Glacial', role: 'Enchanter', art: 'assets/cards/WinterBallMerryhound.png', ability: 'On summon, move an adjacent ally to another free Fighter Zone.' },
  { id: 'wb-rebeccah', title: 'Winter Ball', name: 'Rebeccah', maxCopies: 1, deckCopies: 1, cost: 2, attack: 2, element: 'Glacial', role: 'Enchanter', art: 'assets/cards/WinterBallRebeccah.png', ability: 'Once per turn, move Dimitri to a free adjacent Fighter Zone.' },
  { id: 'wb-magnus', title: 'Winter Ball', name: 'Magnus', maxCopies: 1, deckCopies: 1, cost: 5, attack: 4, element: 'Glacial', role: 'Blader', art: 'assets/cards/WinterBallMagnus.png', ability: 'Gains +1 attack whenever any card moves on the field.' },
  { id: 'wb-sageape', title: 'Winter Ball', name: 'Sageape', type: 'Creature', maxCopies: 3, deckCopies: 3, cost: 1, attack: 1, element: 'Glacial', role: 'Enchanter', art: 'assets/cards/WinterBallSageape.png', ability: 'Discard this card from your hand to move a Glacial card to another Fighter Zone.' },
  { id: 'wb-steepod', title: 'Winter Ball', name: 'Steepod', type: 'Creature', maxCopies: 3, deckCopies: 2, cost: 1, attack: 1, element: 'Glacial', role: 'Healer', art: 'assets/cards/WinterBallSteepod.png', ability: 'Once per turn, move this card to an adjacent Fighter Zone.' },
  { id: 'zodiac-swordtiger', title: 'Zodiac', name: 'Swordtiger', type: 'Creature', maxCopies: 1, deckCopies: 1, cost: 2, attack: 2, element: 'Glacial', role: 'Blader', art: 'assets/cards/ZodiacSwordtiger.png', ability: 'On summon, if Dimitri is on the field, draw an Avatar Gem.' },
  { id: 'wb-zodiac-topaz', title: 'Zodiac Guardian', name: 'Topaz', type: 'Transformation', cost: 0, attack: 5, element: 'Aer', role: 'Enchanter', art: 'assets/cards/ZodiacGuardianTopaz.png', ability: 'Gains +1 attack for each Aer card on the field or in your hand.' },
  { id: 'wb-zodiac-dimitri', title: 'Zodiac Guardian', name: 'Dimitri', type: 'Transformation', cost: 0, attack: 5, element: 'Glacial', role: 'Blader', art: 'assets/cards/ZodiacGuardianDimitri.png', ability: 'Gains +1 attack for each Glacial card on the field or in your hand.' },
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), maxCopies: 1, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
];
const deckNames = { academy: 'Academy', 'wild-west': 'Wild West', 'island-paradise': 'Island Paradise', 'living-toy': 'Living Toy', 'winter-ball': 'Winter Ball', fun: 'Fun Deck' };
function allCardCatalog() { return [...new Map([...cardLibrary, ...wildWestLibrary, ...islandParadiseLibrary, ...livingToyLibrary, ...winterBallLibrary].map((card) => [card.id, card])).values()]; }
let selectedPlayerDeck = 'academy';
let selectedRivalDeck = 'wild-west';
const match = { turn: 1, active: 'player', energy: 1, maxEnergy: 1, turnEnergyCap: 1, secondPlayerBonusPending: true, player: null, opponent: null, playerDeckId: 'academy', opponentDeckId: 'wild-west', fieldCard: null, pendingDharmaRevives: [], selected: null, attackerLane: null, attackMode: false, attackResolving: false, firstPlayer: 'player', over: false };
const battleHistory = [];
function battleSideName(owner) { return owner === match.player ? 'You' : 'Enemy'; }
document.getElementById('battle-history-list')?.previousElementSibling?.addEventListener('click', () => {
  if (window.matchMedia('(max-width: 780px)').matches) document.querySelector('.battle-history')?.classList.toggle('expanded');
});
function logBattleEvent(message, kind = 'system') {
  const list = document.getElementById('battle-history-list');
  if (!list) return;
  const cleanMessage = String(message).replace(/^(?:You|Enemy)\s+/, '');
  const prefix = kind === 'player' ? 'You: ' : kind === 'enemy' ? 'Enemy: ' : '';
  const displayMessage = `${prefix}${cleanMessage}`;
  battleHistory.push({ message: displayMessage, kind });
  if (battleHistory.length > 160) battleHistory.shift();
  const item = document.createElement('li'); item.className = `${kind}-event`; item.textContent = displayMessage;
  list.prepend(item);
  list.scrollTop = 0;
  while (list.children.length > 160) list.lastElementChild.remove();
  document.getElementById('history-count').textContent = String(battleHistory.length);
}
const elementBeats = { Ignis: 'Glacial', Glacial: 'Terra', Terra: 'Aer', Aer: 'Aqua', Aqua: 'Ignis', Mind: 'Solar', Solar: 'Dark', Dark: 'Mind' };
const classAbilities = { Shielder: 'Redirect enemy attacks from adjacent lanes to this card.', Shooter: 'Can attack an adjacent Fighter or the opposite Life Zone directly.', Summoner: 'If this lane’s Life Zone is empty, summon a same-element Creature there as a Familiar.', Enchanter: 'Adjacent allies gain +1 attack.', Trickster: 'The opposing fighter loses 1 attack.', Healer: 'On summon, add the top card of your deck to this lane’s Life Zone.', Blader: '+1 attack when attacking; −1 attack when attacked.', Brawler: '+1 attack while an adjacent lane is empty.' };
const elementIcons = { Aer: 'Aer', Aqua: 'Aqua', Glacial: 'Glacial', Ignis: 'Ignis', Dark: 'Lunar', Mind: 'Mind', Solar: 'Solar', Terra: 'Terra', None: 'Neutral' };
const elementColors = { Aer:'#55e1d6', Aqua:'#55adff', Glacial:'#64c8ff', Ignis:'#ff7654', Dark:'#b59aff', Mind:'#dc80ff', Solar:'#f4c84f', Terra:'#87d875', None:'#d8d0df' };
const classIconShapes = {
  Action: '<path d="M24 7v22"/><circle cx="24" cy="38" r="2.5" fill="var(--class-color)" stroke="none"/>',
  Blader: '<path d="m8 8 23 23M11 6l-5 5 5 5 5-5zM28 28l-5 5 5 5 5-5zM40 8 17 31M37 6l5 5-5 5-5-5zM20 28l5 5-5 5-5-5zM8 40l5-5M40 40l-5-5"/>',
  Brawler: '<path d="M12 23v-8a3 3 0 0 1 6 0v6-9a3 3 0 0 1 6 0v9-8a3 3 0 0 1 6 0v9-6a3 3 0 0 1 6 0v12c0 8-5 13-13 13h-2c-5 0-8-3-11-7l-5-7a3.5 3.5 0 0 1 5-5zM12 23h22"/>',
  Enchanter: '<path d="M10 38 29 19"/><path d="m34 4 3.3 7.4L45 14.5l-7.7 3.1L34 25l-3.3-7.4-7.7-3.1 7.7-3.1z" fill="var(--class-color)" fill-opacity=".18"/><circle cx="10" cy="38" r="2" fill="var(--class-color)"/>',
  Healer: '<path d="M24 9v30M9 24h30" stroke-width="5"/>',
  Shielder: '<path d="M8 9h32v14c0 11-6.5 18-16 23C14.5 41 8 34 8 23zM14 15h20"/>',
  Shooter: '<path d="M7 38 34 11M24 11h10v10M9 27l12 12"/>',
  Summoner: '<circle cx="24" cy="24" r="19"/><path d="m24 7 5.2 11.1 12 .9-9.2 7.8 2.9 11.7L24 32.2l-10.9 6.3L16 26.8l-9.2-7.8 12-.9zM24 7v25.2M41.2 19l-28.1 7.8M35 38.5 18.8 17.1M7 19l28 7.8M13.1 38.5l16.1-21.4" stroke-width="1.5"/>',
  Trickster: '<path d="M24 5c-4 6-13 6-17 13-4 8 1 20 17 25 16-5 21-17 17-25-4-7-13-7-17-13zM12 21c3-4 7-4 10 0M26 21c3-4 7-4 10 0M16 32c5 5 11 6 16 0M16 32h16"/><circle cx="24" cy="26" r="2" fill="var(--class-color)" stroke="none"/>'
};
const classIconMarkup = (role, element = 'Mind', extraClass = '') => `<span class="class-icon-badge ${extraClass}" style="--class-color:${elementColors[element] || '#c9b7df'}" title="${escapeHTML(role || '')}"><svg class="class-icon" viewBox="0 0 48 48" fill="none" stroke="var(--class-color)" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${classIconShapes[role] || classIconShapes.Shielder}</svg></span>`;
const cloneCard = (card) => ({ ...card, type: card.type || 'Fighter', instance: `${card.id}-${Math.random().toString(36).slice(2, 8)}`, ready: false, attacked: false });
function shuffleDeck(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
function newPlayer(isAI = false, deckId = 'academy') {
  const sourceCards = deckId === 'fun' ? allCardCatalog() : deckId === 'wild-west' ? wildWestLibrary : deckId === 'island-paradise' ? islandParadiseLibrary : deckId === 'living-toy' ? livingToyLibrary : deckId === 'winter-ball' ? winterBallLibrary : cardLibrary.filter((card) => card.id !== 'locker-room');
  const baseCards = sourceCards.filter((card) => card.type !== 'Transformation');
  const deckLimit = card => card.deckCopies ?? card.maxCopies ?? (card.type === 'Creature' || card.type === 'Action' ? 3 : 1);
  let deckPool;
  if (deckId === 'fun') deckPool = baseCards.map(cloneCard);
  else if (['island-paradise', 'living-toy', 'winter-ball'].includes(deckId)) deckPool = baseCards.flatMap((card) => Array.from({ length: deckLimit(card) }, () => cloneCard(card)));
  else {
    const firstCopies = baseCards.slice(0, 24);
    deckPool = firstCopies.map(cloneCard);
    const copyCounts = new Map(firstCopies.map(card => [card.id, 1]));
    while (deckPool.length < 24) {
      const repeatable = firstCopies.filter(card => ['Creature', 'Action'].includes(card.type) && (copyCounts.get(card.id) || 0) < deckLimit(card));
      if (!repeatable.length) break;
      const card = repeatable[Math.floor(Math.random() * repeatable.length)];
      deckPool.push(cloneCard(card));
      copyCounts.set(card.id, (copyCounts.get(card.id) || 0) + 1);
    }
  }
  const shuffledPool = shuffleDeck(deckPool);
  const deck = deckId === 'fun' ? [...shuffledPool] : shuffledPool.slice(0, 24);
  const avatarGem = baseCards.find((card) => card.id === 'avatar-gem');
  const guaranteedIds = new Set(avatarGem ? ['avatar-gem'] : []);
  if (['wild-west','island-paradise','living-toy','winter-ball'].includes(deckId)) ['mana-potion','health-potion'].forEach((id) => guaranteedIds.add(id));
  if (deckId === 'island-paradise') guaranteedIds.add('locker-room');
  if (deckId === 'winter-ball') ['drinking-tea','christmas-mall'].forEach((id) => guaranteedIds.add(id));
  for (const id of guaranteedIds) {
    if (deck.some((card) => card.id === id)) continue;
    const replacement = shuffledPool.find((card) => card.id === id && !deck.includes(card));
    if (!replacement) continue;
    let slot = deck.length - 1;
    while (slot >= 0 && guaranteedIds.has(deck[slot].id)) slot--;
    if (slot >= 0) deck[slot] = replacement;
    else if (deck.length < 24) deck.push(replacement);
  }
  shuffleDeck(deck);
  const transformationDeck = allCardCatalog().filter((card) => card.type === 'Transformation').map(cloneCard);
  const lifeCards = deck.splice(0, 4);
  return { hand: deck.splice(0, 4), deck, transformationDeck, life: { middle: lifeCards.slice(0, 3), main: lifeCards[3], familiars: [null, null, null] }, lanes: [null, null, null], destroyed: [], isAI };
}
function beginMatch(playerDeckId = 'academy', opponentDeckId = 'wild-west') {
  battleHistory.length = 0;
  const historyList = document.getElementById('battle-history-list'); if (historyList) historyList.replaceChildren();
  const historyCount = document.getElementById('history-count'); if (historyCount) historyCount.textContent = '0';
  match.turn = 1; match.active = 'player'; match.energy = 1; match.maxEnergy = 1; match.turnEnergyCap = 1; match.secondPlayerBonusPending = true; match.fieldCard = null; match.pendingDharmaRevives = []; match.selected = null; match.attackerLane = null; match.attackMode = false; match.attackResolving = false; match.drawn = false; match.over = false;
  match.playerDeckId = playerDeckId; match.opponentDeckId = opponentDeckId;
  match.player = newPlayer(false, match.playerDeckId); match.opponent = newPlayer(true, match.opponentDeckId);
  render(); logBattleEvent(`Battle started · You: ${deckNames[playerDeckId]} · Enemy: ${deckNames[opponentDeckId]}.`);
}
function syncDeckPicker() {
  document.querySelectorAll('[data-player-deck]').forEach((button) => {
    const selected = button.dataset.playerDeck === selectedPlayerDeck;
    button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-rival-deck]').forEach((button) => {
    const selected = button.dataset.rivalDeck === selectedRivalDeck;
    button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected));
  });
}
function showDeckSelect() { syncDeckPicker(); document.getElementById('deck-select-dialog').showModal(); }
function escapeHTML(value = '') { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function displayedCardType(card) { return ['academy-grounds', 'toy-store', 'ip-field', 'christmas-mall'].includes(card.id) ? 'Field' : card.type || 'Fighter'; }
function cardTypeIcon(card, extraClass = '') { return displayedCardType(card) === 'Field' ? `<svg class="field-type-icon ${extraClass}" viewBox="0 0 48 48" role="img" aria-label="Field card"><circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c6 5 9 11 9 18s-3 13-9 18M24 6c-6 5-9 11-9 18s3 13 9 18M9 15h30M9 33h30"/></svg>` : ''; }
function hasCardClass(card) { return !!card.role && card.role !== 'Action' && card.type !== 'Action'; }
function libraryCardMarkup(card) {
  const element = card.element || 'None';
  const art = card.art ? `<img src="${escapeHTML(card.art)}" alt="${escapeHTML(card.name)} card art" loading="lazy" />` : `<div class="library-art-fallback">${escapeHTML(card.name)}</div>`;
  const typeLabel = displayedCardType(card);
  const classIcon = hasCardClass(card) ? classIconMarkup(card.role, element, 'library-class-icon') : '';
  const elementIcon = elementIcons[element] ? `<img class="library-element-icon" src="assets/icons/${elementIcons[element]}.png" alt="${escapeHTML(element)}" title="${escapeHTML(element)}" />` : '';
  const elementLabel = element === 'None' ? 'Neutral' : escapeHTML(element);
  const attackText = card.type === 'Action' ? 'No attack' : `${Number(card.attack) || 0} ATK`;
  const copies = card.maxCopies ?? (card.type === 'Transformation' || !card.type ? 1 : card.type === 'Creature' || card.type === 'Action' ? 3 : 1);
  const classEffect = !hasCardClass(card) ? '' : classAbilities[card.role] ? `<div class="library-effect library-class-effect"><b>${escapeHTML(card.role)} CLASS</b><span>${escapeHTML(classAbilities[card.role])}</span></div>` : '';
  const typeLine = `<div class="library-type-line">${cardTypeIcon(card, 'library-field-type-icon')}<span>${escapeHTML(typeLabel)}</span></div>`;
  const classLine = `<div class="library-icon-row">${hasCardClass(card) ? `<span>${classIcon}${escapeHTML(card.role)}</span>` : ''}<span>${elementIcon}${elementLabel}</span></div>`;
  return `<article class="library-card element-${element.toLowerCase()}"><div class="library-card-art">${art}<span class="library-cost">${card.cost}</span></div><div class="library-card-info"><span class="library-card-title">${escapeHTML(card.title)}</span><h4>${escapeHTML(card.name)}</h4>${typeLine}${classLine}<div class="library-card-meta"><span>${attackText} · ${card.cost} Mana</span><span>Max ${copies} in deck</span></div>${classEffect}<div class="library-effect"><b>CARD EFFECT</b><span>${escapeHTML(card.ability)}</span></div></div></article>`;
}
const cardLibraryState = { deck: 'all', element: 'all', role: 'all', type: 'all', sort: 'name-asc' };
function renderCardLibrary(deckId = cardLibraryState.deck) {
  cardLibraryState.deck = deckId;
  const unique = (cards) => [...new Map(cards.map((card) => [`${card.title}|${card.name}`, card])).values()];
  const deckSources = { academy: cardLibrary.filter((card) => card.type !== 'Transformation' && card.id !== 'locker-room'), 'wild-west': wildWestLibrary.filter((card) => card.type !== 'Transformation'), 'island-paradise': islandParadiseLibrary.filter((card) => card.type !== 'Transformation'), 'living-toy': livingToyLibrary.filter((card) => card.type !== 'Transformation'), 'winter-ball': winterBallLibrary.filter((card) => card.type !== 'Transformation') };
  const allMain = unique([...deckSources.academy, ...deckSources['wild-west'], ...deckSources['island-paradise'], ...deckSources['living-toy'], ...deckSources['winter-ball']]);
  const mainSource = deckId === 'all' ? allMain : deckSources[deckId] || deckSources.academy;
  const transformSource = unique([...cardLibrary, ...islandParadiseLibrary, ...livingToyLibrary, ...winterBallLibrary].filter((card) => card.type === 'Transformation'));
  const allCards = [...allMain, ...transformSource];
  const typeOf = displayedCardType;
  const filterCards = (cards) => cards.filter((card) => (cardLibraryState.element === 'all' || card.element === cardLibraryState.element) && (cardLibraryState.role === 'all' || card.role === cardLibraryState.role) && (cardLibraryState.type === 'all' || typeOf(card) === cardLibraryState.type));
  const sortCards = (cards) => [...cards].sort((a, b) => {
    if (cardLibraryState.sort === 'name-asc') return `${a.title} ${a.name}`.localeCompare(`${b.title} ${b.name}`);
    if (cardLibraryState.sort === 'atk-desc') return (b.attack || 0) - (a.attack || 0) || a.name.localeCompare(b.name);
    if (cardLibraryState.sort === 'atk-asc') return (a.attack || 0) - (b.attack || 0) || a.name.localeCompare(b.name);
    if (cardLibraryState.sort === 'cost-desc') return (b.cost || 0) - (a.cost || 0) || a.name.localeCompare(b.name);
    if (cardLibraryState.sort === 'cost-asc') return (a.cost || 0) - (b.cost || 0) || a.name.localeCompare(b.name);
    return 0;
  });
  const elements = [...new Set(allCards.map((card) => card.element || 'None'))].sort();
  const roles = [...new Set(allCards.filter(hasCardClass).map((card) => card.role))].sort();
  const types = [...new Set(allCards.map(typeOf))].sort();
  const options = (values, selected, allLabel) => `<option value="all">${allLabel}</option>${values.map((value) => `<option value="${escapeHTML(value)}" ${selected === value ? 'selected' : ''}>${escapeHTML(value)}</option>`).join('')}`;
  const mainCards = sortCards(filterCards(mainSource));
  const transforms = sortCards(filterCards(transformSource));
  const heading = deckId === 'all' ? 'ALL DECKS' : escapeHTML(deckNames[deckId] || 'Academy');
  const section = (title, cards) => `<section class="library-section"><div class="library-section-heading"><h3>${title}</h3><span>${cards.length} cards</span></div>${cards.length ? `<div class="library-card-grid">${cards.map(libraryCardMarkup).join('')}</div>` : '<p class="library-empty">No cards match these filters.</p>'}</section>`;
  const content = document.getElementById('card-library-content');
  content.innerHTML = `<div class="library-filters"><label>ELEMENT<select data-library-filter="element">${options(elements, cardLibraryState.element, 'All elements')}</select></label><label>CLASS<select data-library-filter="role">${options(roles, cardLibraryState.role, 'All classes')}</select></label><label>TYPE<select data-library-filter="type">${options(types, cardLibraryState.type, 'All types')}</select></label><label>SORT BY<select data-library-filter="sort"><option value="name-asc">Name · A–Z</option><option value="atk-desc">ATK · high to low</option><option value="atk-asc">ATK · low to high</option><option value="cost-desc">Cost · high to low</option><option value="cost-asc">Cost · low to high</option></select></label></div>${section(`${heading} · MAIN DECK`, mainCards)}${section('ASCENDANCE DECK', transforms)}`;
  content.querySelector('[data-library-filter="sort"]').value = cardLibraryState.sort;
  content.querySelectorAll('[data-library-filter]').forEach((select) => select.addEventListener('change', () => { cardLibraryState[select.dataset.libraryFilter] = select.value; renderCardLibrary(); }));
  document.querySelectorAll('[data-library-deck]').forEach((button) => { const selected = button.dataset.libraryDeck === deckId; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
}
function showCardLibrary(deckId = 'all') { renderCardLibrary(deckId); document.getElementById('card-library-dialog').showModal(); }
function cardMarkup(card, enemy = false, compact = false) {
  const sideClass = enemy ? 'enemy-card' : 'player-card';
  const elementClass = `element-${(card.element || 'None').toLowerCase()}`;
  const owner = enemy ? match.opponent : match.player;
  const laneIndex = owner?.lanes.indexOf(card) ?? -1;
  const attacking = compact && (card.attacking || (!enemy && match.attackMode && laneIndex === match.attackerLane));
  const attackInfo = compact ? attackBreakdown(card, owner, { attacking, targetIndex: card.attackTargetIndex ?? (attacking ? laneIndex : null) }) : { total: card.attack + (card.attackBonus || 0), change: card.attackBonus || 0, reasons: card.attackBonus ? ['Card effect'] : [], sources: card.attackBonusSources || (card.attackBonus ? [card.name] : []) };
  const attackBadge = attackInfo.change ? `<em class="attack-boost ${attackInfo.change < 0 ? 'attack-reduced' : ''}" title="${attackInfo.sources.join(' · ')}">${attackInfo.change > 0 ? '+' : '−'}${Math.abs(attackInfo.change)}</em>` : '';
  const actionButton = compact && !enemy && ['zoya','ww-medusa','ip-croaktail','wb-steepod','wb-topaz-diamond'].includes(card.id) ? `<button class="card-ability-trigger" data-ability="${card.id}" ${card.abilityUsedTurn === match.turn ? 'disabled' : ''} title="Use ${card.name}’s once-per-turn effect">USE</button>` : '';
  const handAbilityButton = !compact && card.id === 'wb-sageape' ? '<button class="hand-ability-trigger" data-hand-ability="wb-sageape" title="Discard Sageape to move a Glacial fighter">MOVE</button>' : '';
  const freezeBadge = compact && card.skipAttackThisTurn ? '<span class="freeze-mark" title="Cannot attack this turn">❄</span>' : '';
  const handArtClass = !compact && ['ww-academy-rick'].includes(card.id) ? ' hand-art-rick' : !compact && ['academy-lynda', 'ww-academy-lynda'].includes(card.id) ? ' hand-art-lynda' : '';
  const art = card.art ? `<img class="card-art${handArtClass}" src="${card.art}" alt="${card.name}" />` : `<div class="card-art-fallback">${card.name}</div>`;
  const elementIcon = elementIcons[card.element] ? `<img class="element-icon card-element-icon" src="assets/icons/${elementIcons[card.element]}.png" alt="${escapeHTML(card.element)}" title="${escapeHTML(card.element)}" />` : '';
  const attackValueClass = attackInfo.change > 0 ? 'attack-value-raised' : attackInfo.change < 0 ? 'attack-value-lowered' : '';
  const attackValueStyle = attackInfo.change > 0 ? 'color:#ffdf70!important;text-shadow:0 0 8px #ffc64777' : attackInfo.change < 0 ? 'color:#ff817d!important;text-shadow:0 0 8px #f04d5c66' : '';
  const attackValueMarkup = `<strong class="${attackValueClass}" style="${attackValueStyle}">${attackInfo.total}</strong>`;
  const classIcon = classIconMarkup(card.type === 'Action' ? 'Action' : card.role, card.element, 'card-class-icon');
  const details = compact ? `<div class="card-bottom"><span class="card-element"></span><span class="card-stats" title="Base ${card.attack}${attackInfo.sources.length ? ` · ${attackInfo.sources.join(' · ')}` : ''}">${attackValueMarkup}${attackBadge} ATK</span></div>` : card.type === 'Action' ? `<div class="card-bottom"><span class="card-icons"></span><span class="card-stats">${card.cost} MANA</span></div>` : `<div class="card-bottom"><span class="card-icons"></span><span class="card-stats">${attackValueMarkup}${attackBadge} ATK</span></div>`;
  const summonLocked = !compact && card.id === 'vishnu' && !owner?.lanes.some((unit) => unit?.name === 'Peppermint');
  return `<div class="${compact ? 'battle-card' : 'hand-card'} ${sideClass} ${elementClass}${summonLocked ? ' disabled' : ''}" data-card-preview="${card.instance}" ${compact ? `role="button" tabindex="0" aria-label="${card.name}, ${card.ready && !card.attacked ? 'click to attack' : 'fighter'}" data-lane="${laneIndex}"` : `data-id="${card.instance}" title="${summonLocked ? 'Requires Peppermint in your Fighter Zone' : ''}"`}>
    ${art}<span class="art-shade"></span>${compact ? '' : `<span class="card-cost">${card.cost}</span>`}${elementIcon}${classIcon}<div class="card-heading"><div class="card-topline">${card.title}</div><div class="card-name">${card.name}</div></div>
    ${actionButton}${handAbilityButton}${freezeBadge}${details}</div>`;
}
function lifeCount(player) { return player.life.middle.filter(Boolean).length + (player.life.main ? 1 : 0); }
function lifeMarkup(player, side) {
  const attacker = match.player?.lanes[match.attackerLane];
  const middle = player.life.middle.map((card, index) => {
    const direct = side === 'opponent' && match.attackMode && match.attackerLane === index && attacker?.role === 'Shooter' && card;
    const familiar = player.life.familiars?.[index];
    return `<div class="life-card ${card ? '' : 'broken'} ${familiar ? 'has-familiar' : ''} ${direct ? 'direct-life-target' : ''}" data-life-side="${side}" data-life-index="${index}" aria-label="Life zone ${index + 1}">${card ? '<img class="life-heart" src="assets/ui-icons/crystal-heart.png" alt="" aria-hidden="true" />' : ''}${familiar ? `<img class="life-familiar" src="${familiar.art}" alt="${familiar.name} Familiar" title="${familiar.name} · Familiar" />` : ''}</div>`;
  }).join('');
  const mainDirect = side === 'opponent' && match.attackMode && match.attackerLane !== null && canAttackMainLife(attacker, match.attackerLane, player);
  const main = `<div class="life-card main-life ${player.life.main ? '' : 'broken'} ${mainDirect ? 'direct-life-target' : ''}" data-life-side="${side}" data-life-main="true" aria-label="Main life zone">${player.life.main ? '<img class="life-heart main-life-heart" src="assets/ui-icons/crystal-heart.png" alt="" aria-hidden="true" />' : ''}<span>MAIN</span></div>`;
  return `<div class="life-middle">${middle}</div><div class="main-life-back">${main}</div>`;
}
function allMiddleLifeGone(player) { return player.life.middle.every((card) => !card); }
function canAttackMainLife(attacker, laneIndex, defender) {
  const shooterHasCenterAccess = attacker?.role === 'Shooter' && (laneIndex === 1 || !defender.lanes[1]);
  const ordinaryLaneIsOpen = attacker?.role !== 'Shooter' && !defender.lanes[laneIndex];
  return Boolean(attacker && defender.life.main && allMiddleLifeGone(defender) && (shooterHasCenterAccess || ordinaryLaneIsOpen));
}
function hasLifeTarget(player, laneIndex, attacker = null) { return Boolean(player.life.middle[laneIndex] || canAttackMainLife(attacker, laneIndex, player)); }
function shielderLane(defender) { return defender.lanes.findIndex((card) => card?.role === 'Shielder'); }
function canAttackLane(attacker, laneIndex, defender) {
  if (!attacker) return false;
  if (attacker.role === 'Shooter') return Boolean(defender.lanes[laneIndex - 1] || defender.lanes[laneIndex + 1] || hasLifeTarget(defender, laneIndex, attacker));
  return Boolean(defender.lanes[laneIndex] || hasLifeTarget(defender, laneIndex, attacker));
}
function canCardAttack(card) { return Boolean(card?.ready && !card.skipAttackThisTurn && (card.id === 'ip-coyote' ? (card.attacksThisTurn || 0) < 2 : !card.attacked)); }
function canTargetLane(attacker, sourceIndex, defender, targetIndex) {
  if (!attacker || targetIndex < 0 || targetIndex > 2) return false;
  if (attacker.role === 'Shooter') return Math.abs(sourceIndex - targetIndex) === 1 ? Boolean(defender.lanes[targetIndex]) : (sourceIndex === targetIndex && !defender.lanes[targetIndex] && hasLifeTarget(defender, targetIndex, attacker));
  return sourceIndex === targetIndex && Boolean(defender.lanes[targetIndex] || hasLifeTarget(defender, targetIndex, attacker));
}
function resolveAttackTarget(defender, target, sourceIndex = -1) {
  const shield = shielderLane(defender);
  if (shield < 0) return target;
  const shieldIsCenter = shield === 1;
  const targetIsOtherLane = target.type === 'lane' && target.index !== shield;
  const centerIntercepts = shieldIsCenter && (target.type !== 'lane' || targetIsOtherLane);
  const protectedLane = target.type === 'life' ? (target.main ? sourceIndex : target.index) : target.index;
  const sideInterceptsAdjacent = !shieldIsCenter && Math.abs(shield - protectedLane) === 1 && (target.type === 'lane' || target.type === 'life');
  return centerIntercepts || sideInterceptsAdjacent ? { type: 'lane', index: shield, redirected: true, redirectedFrom: target, sourceIndex } : target;
}
function attackBreakdown(card, owner, { attacking = false, defending = false, targetIndex: preferredTarget = null } = {}) {
  if (!card || !owner) return { total: 0, change: 0, reasons: [], sources: [], modifiers: [] };
  let attack = card.attack + (card.attackBonus || 0);
  const sources = [...(card.attackBonusSources || (card.attackBonus ? [card.name] : []))];
  const modifiers = [...(card.attackBonusModifiers || (card.attackBonus ? [{ amount: card.attackBonus, source: card.name }] : []))];
  const addModifier = (amount, source) => { modifiers.push({ amount, source }); sources.push(source); };
  const reasons = card.attackBonus ? ['Card effect'] : [];
  const index = owner.lanes.indexOf(card);
  // Shooter class matchups must use the Fighter being attacked, not the
  // Shooter's facing lane. Outside an attack, show the facing-lane matchup.
  const enemyIndex = attacking && preferredTarget !== null ? preferredTarget : index;
  const adjacent = index < 0 ? [] : [index - 1, index + 1].filter((n) => n >= 0 && n < 3);
  if (card.id === 'lt-clary') { const bonus = adjacent.filter((n) => ['Living Toy', 'Dollmaster'].includes(owner.lanes[n]?.title)).length; if (bonus) { attack += bonus; reasons.push(`Nearby toys +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'lt-rat-king') { const bonus = new Set(owner.destroyed.filter((unit) => unit.element === 'Dark').map((unit) => unit.name)).size; if (bonus) { attack += bonus; reasons.push(`Unique Dark names in Pandemonium Zone +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'lt-zodiac-fritz') { const bonus = owner.destroyed.filter((unit) => ['Fighter', 'Creature'].includes(unit.type || 'Fighter') && unit.element === 'Dark').length; if (bonus) { attack += bonus; reasons.push(`Dark cards in Pandemonium Zone +${bonus}`); addModifier(bonus, card.name); } }
  if (card.role === 'Brawler' && adjacent.some((n) => !owner.lanes[n])) { attack++; reasons.push('Brawler +1'); addModifier(1, card.name); }
  if (card.id === 'ip-sabrina') { const bonus = adjacent.filter((n) => owner.lanes[n]?.role === 'Brawler').length; if (bonus) { attack += bonus; reasons.push(`Adjacent Brawlers +${bonus}`); addModifier(bonus, card.name); } }
  if (owner.life.familiars?.some((familiar) => familiar?.attachedTo === card.instance)) { attack++; reasons.push('Familiar +1'); addModifier(1, owner.life.familiars.find((familiar) => familiar?.attachedTo === card.instance)?.name || 'Familiar'); }
  const enchanters = adjacent.map((n) => owner.lanes[n]).filter((unit) => unit?.role === 'Enchanter');
  const enchanterAuras = enchanters.length;
  if (enchanterAuras) { attack += enchanterAuras; reasons.push(`Enchanter +${enchanterAuras}`); enchanters.forEach((unit) => addModifier(1, unit.name)); }
  if (card.id === 'peppermint') { const academyNeighbors = adjacent.filter((n) => owner.lanes[n]?.title === 'Academy').length; if (academyNeighbors) { attack += academyNeighbors; reasons.push(`Academy allies +${academyNeighbors}`); addModifier(academyNeighbors, card.name); } }
  const wildWestRick = owner.lanes.find((unit) => unit?.id === 'ww-rick');
  if (card.title === 'Wild West' && wildWestRick) { const opponent = owner === match.player ? match.opponent : match.player; const emptyZones = [...owner.lanes, ...(opponent?.lanes || [])].filter((unit) => !unit).length; if (emptyZones) { attack += emptyZones; reasons.push(`Wild West Rick +${emptyZones}`); addModifier(emptyZones, wildWestRick.name); } }
  if (card.id === 'ww-wade') { const opponent = owner === match.player ? match.opponent : match.player; const bonus = (opponent?.lanes || []).filter((unit) => !unit).length * 2; if (bonus) { attack += bonus; reasons.push(`Empty enemy zones +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'ww-littlebeak' && match.active !== (owner === match.player ? 'player' : 'opponent')) { attack++; reasons.push('Littlebeak enemy-turn +1'); addModifier(1, card.name); }
  if (match.fieldCard?.id === 'toy-store' && index >= 0 && card.cost === 1 && ['Fighter', 'Creature'].includes(card.type || 'Fighter')) { attack++; reasons.push('Toy Store +1'); addModifier(1, 'Toy Store'); }
  if (match.fieldCard?.id === 'academy-grounds' && card.title === 'Academy' && owner.destroyed.every((unit) => !['Fighter', 'Creature'].includes(unit.type || 'Fighter') || unit.title === 'Academy')) { attack++; reasons.push('Academy Hall +1'); addModifier(1, 'Academy Hall'); }
  if (card.id === 'zodiac-guardian-rick') { const bonus = owner.destroyed.filter((unit) => unit.element === 'Terra').length; if (bonus) { attack += bonus; reasons.push(`Terra cards destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'wb-zodiac-topaz' || card.id === 'wb-zodiac-dimitri') { const element = card.id === 'wb-zodiac-topaz' ? 'Aer' : 'Glacial'; const bonus = [...owner.hand, ...owner.lanes.filter(Boolean)].filter((unit) => unit.element === element).length; if (bonus) { attack += bonus; reasons.push(`${element} cards in hand or on field +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'zodiac-guardian-kage') { const bonus = owner.destroyed.filter((unit) => unit.element === 'Dark').length; if (bonus) { attack += bonus; reasons.push(`Dark cards destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'ip-coyote-zodiac') { const bonus = owner.destroyed.filter((unit) => unit.role === 'Brawler').length; if (bonus) { attack += bonus; reasons.push(`Brawlers destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'ip-chase-zodiac') { const bonus = owner.destroyed.filter((unit) => unit.element === 'Aqua').length; if (bonus) { attack += bonus; reasons.push(`Aqua cards destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.role === 'Blader') {
    if (attacking) { attack++; reasons.push('Blader attacking +1'); addModifier(1, card.name); }
    else if (defending) { attack--; reasons.push('Blader defending −1'); addModifier(-1, card.name); }
  }
  const opponent = owner === match.player ? match.opponent : match.player;
  if (opponent?.lanes[enemyIndex]?.role === 'Trickster') { attack--; reasons.push('Trickster −1'); addModifier(-1, opponent.lanes[enemyIndex].name); }
  if (card.id === 'ip-kokocrab' && opponent?.lanes[enemyIndex]?.role === 'Brawler') { attack--; reasons.push('Kokocrab vs Brawler −1'); addModifier(-1, card.name); }
  // Element advantage remains tied to the Fighter's own column.
  const facingOpponent = index >= 0 ? opponent?.lanes[index] : null;
  if (facingOpponent && elementBeats[card.element] === facingOpponent.element) { attack++; reasons.push('Element advantage +1'); addModifier(1, 'Element Advantage'); }
  return { total: Math.max(0, attack), change: attack - card.attack, reasons, sources: [...new Set(sources)], modifiers };
}
function effectiveAttack(card, owner, context) { return attackBreakdown(card, owner, context).total; }
function laneMarkup(card, index, side, isActive) {
  const laneClasses = ['lane'];
  if (card) laneClasses.push('has-card');
  if (side === 'player' && match.selected && isActive && !card) laneClasses.push('lane-target');
  if (side === 'player' && isActive && canCardAttack(card) && canAttackLane(card, index, match.opponent)) laneClasses.push('attack-click-ready');
  if (side === 'player' && match.attackMode && canCardAttack(card)) laneClasses.push('attack-source');
  if (side === 'player' && match.attackMode && match.attackerLane === index) laneClasses.push('attack-source-selected');
  if (side === 'opponent' && match.attackMode && match.attackerLane !== null && canTargetLane(match.player.lanes[match.attackerLane], match.attackerLane, match.opponent, index)) laneClasses.push('attack-target');
  const contents = card ? cardMarkup(card, side === 'opponent', true) : '<span class="empty-mark">＋</span>';
  return `<div class="${laneClasses.join(' ')}" data-side="${side}" data-lane="${index}"><span class="lane-label">LANE 0${index + 1}</span>${contents}</div>`;
}
function render() {
  if (!match.player || !match.opponent) return;
  hideCardTooltip();
  const fieldTheme = match.fieldCard?.id || 'city-night';
  document.body.dataset.fieldTheme = fieldTheme;
  document.getElementById('player-board').innerHTML = match.player.lanes.map((card, i) => laneMarkup(card, i, 'player', match.active === 'player')).join('');
  document.getElementById('opponent-board').innerHTML = match.opponent.lanes.map((card, i) => laneMarkup(card, i, 'opponent', false)).join('');
  document.getElementById('hand').innerHTML = match.player.hand.map((card) => cardMarkup(card)).join('') || '<div class="lane-hint">Your hand is empty</div>';
  document.getElementById('hand-count').textContent = `${match.player.hand.length} card${match.player.hand.length === 1 ? '' : 's'}`;
  document.getElementById('energy-value').textContent = match.energy;
  document.getElementById('max-energy').textContent = match.turnEnergyCap;
  document.getElementById('turn-label').textContent = `TURN ${match.turn}`;
  document.getElementById('phase-label').textContent = match.active === 'player' ? 'YOUR TURN' : 'RIVAL TURN';
  document.getElementById('player-deck').textContent = match.player.deck.length;
  document.getElementById('opponent-deck').textContent = match.opponent.deck.length;
  document.getElementById('player-status').textContent = `${deckNames[match.playerDeckId]} Deck`;
  document.getElementById('opponent-status').textContent = `${deckNames[match.opponentDeckId]} Deck`;
  ['player', 'opponent'].forEach((side) => {
    const deck = (side === 'player' ? match.player : match.opponent).transformationDeck;
    const counter = document.getElementById(`${side}-transform-deck`);
    counter.textContent = deck.length;
    counter.parentElement.parentElement.title = `Ascendance Deck: ${deck.map((card) => `${card.title} ${card.name}`).join(', ') || 'empty'}`;
  });
  document.getElementById('player-discard').textContent = match.player.destroyed.length;
  document.getElementById('opponent-discard').textContent = match.opponent.destroyed.length;
  document.getElementById('player-world').classList.add('hidden');
  document.getElementById('opponent-world').classList.add('hidden');
  const fieldZone = document.getElementById('field-zone');
  const fieldNames = { 'academy-grounds': 'Academy Hall', 'ip-field': 'Island Paradise', 'toy-store': 'Toy Store', 'christmas-mall': 'Christmas Mall' };
  const fieldBackgrounds = { 'academy-grounds': 'academy-grounds', 'ip-field': 'island-paradise', 'toy-store': 'toy-store', 'christmas-mall': 'christmas-mall' };
  const fieldName = match.fieldCard ? fieldNames[match.fieldCard.id] || 'Grass Plain' : '';
  if (match.fieldCard) {
    const background = fieldBackgrounds[match.fieldCard.id] || 'grass-plain';
    const mallUseKey = `${match.turn}-${match.active}`;
    const mallUsed = match.fieldCard.usedTurnKeys?.includes(mallUseKey);
    const mallButton = match.fieldCard.id === 'christmas-mall' && match.active === 'player' && !match.over ? `<button class="field-zone-action" data-field-ability="christmas-mall" ${mallUsed ? 'disabled' : ''}>SWAP FIGHTERS</button>` : '';
    const activeCardArt = match.fieldCard.card?.art ? `<img class="field-zone-card-art" src="${match.fieldCard.card.art}" alt=""/>` : '';
    fieldZone.innerHTML = `<div class="field-zone-art" style="--field-zone-image:url('assets/backgrounds/${background}.png')"></div><span class="field-zone-eyebrow">FIELD ZONE</span>${activeCardArt}<strong>${fieldName}</strong>${mallButton}`;
  } else {
    fieldZone.innerHTML = '';
  }
  fieldZone.classList.toggle('hidden', !match.fieldCard);
  document.getElementById('player-life-count').textContent = lifeCount(match.player);
  document.getElementById('opponent-life-count').textContent = lifeCount(match.opponent);
  document.getElementById('player-life').innerHTML = lifeMarkup(match.player, 'player');
  document.getElementById('opponent-life').innerHTML = lifeMarkup(match.opponent, 'opponent');
  document.getElementById('end-turn').disabled = match.active !== 'player' || match.over || match.attackResolving;
  document.getElementById('give-up').disabled = !match.player || match.over || match.attackResolving;
  document.getElementById('attack-button').disabled = match.active !== 'player' || match.over || !match.player.lanes.some((card, index) => canCardAttack(card) && canAttackLane(card, index, match.opponent));
  document.getElementById('attack-button').classList.toggle('active', match.attackMode);
  document.querySelectorAll('.hand-card').forEach((el) => {
    const card = match.player.hand.find((c) => c.instance === el.dataset.id);
    if (card && playCost(match.player, card) > match.energy) el.classList.add('disabled');
    if (card && card.instance === match.selected) el.classList.add('selected');
  });
  const selectedAttacker = match.attackerLane === null ? null : match.player.lanes[match.attackerLane];
  document.getElementById('board-message').textContent = match.attackResolving ? 'Attack resolving · click another ready fighter to queue its attack' : match.attackMode ? (match.attackerLane === null ? 'Select a ready fighter to attack' : selectedAttacker?.role === 'Shooter' ? allMiddleLifeGone(match.opponent) ? 'Choose an adjacent enemy fighter, the opposite Life Zone, or Main Life' : 'Choose an adjacent enemy fighter or the Life Zone directly opposite' : 'Choose the opposing lane in front or the exposed Main Life') : (match.selected ? `Place ${getSelected().name} in an open lane` : 'Play a card or start an attack');
}
function getSelected() { return match.player.hand.find((c) => c.instance === match.selected); }
function cardOwner(card) {
  for (const owner of [match.player, match.opponent]) if (owner && (owner.hand.includes(card) || owner.lanes.includes(card) || owner.destroyed.includes(card))) return owner;
  return null;
}
function isTouchInput() { return window.matchMedia('(hover: none) and (pointer: coarse)').matches; }
let touchCardDetailsArmed = null;
function showCardTooltip(card, event) {
  if (!card) return;
  const tooltip = document.getElementById('card-tooltip'); const owner = cardOwner(card);
  for (const className of [...tooltip.classList]) if (className.startsWith('element-')) tooltip.classList.remove(className);
  tooltip.classList.add(`element-${(card.element || 'None').toLowerCase()}`);
  const laneIndex = owner?.lanes.indexOf(card) ?? -1;
  const typeLabel = displayedCardType(card);
  const details = card.type === 'Action' ? `<div class="tooltip-action-note">${escapeHTML(typeLabel)} card · ${card.cost} Mana · no attack points</div>` : (() => {
    const breakdown = attackBreakdown(card, owner, { attacking: !!card.attacking, targetIndex: card.attackTargetIndex ?? null });
    const modifier = breakdown.modifiers.length ? `<div class="tooltip-modifier-list">${breakdown.modifiers.map(({ amount, source }) => `<span class="tooltip-modifier ${amount > 0 ? 'modifier-up' : 'modifier-down'}">${amount > 0 ? '+' : '−'}${Math.abs(amount)} ${source}</span>`).join('')}</div>` : '';
    return `<div class="tooltip-stats"><span>⚔ <b>${breakdown.total}</b> attack</span><span>✧ <b>${card.cost}</b> energy</span></div>${modifier}`;
  })();
  const inPlayerHand = owner === match.player && match.player.hand.includes(card);
  const canUseFromHand = inPlayerHand && match.active === 'player' && !match.over && playCost(match.player, card) <= match.energy;
  const openLanes = isTouchInput() && canUseFromHand && card.type !== 'Action' && canSummonCard(match.player, card)
    ? match.player.lanes.map((unit, index) => unit ? '' : `<button type="button" data-tooltip-summon="${card.instance}" data-lane="${index}">SUMMON · LANE ${index + 1}</button>`).join('') : '';
  const controls = isTouchInput() && canUseFromHand && card.type === 'Action'
    ? `<div class="tooltip-card-controls"><button type="button" data-tooltip-use="${card.instance}">USE ACTION</button></div>`
    : openLanes ? `<div class="tooltip-card-controls">${openLanes}</div>` : '';
  const artwork = card.art ? `<img src="${card.art}" alt="" />` : '<div class="tooltip-art-fallback">✦</div>';
  const classAbility = hasCardClass(card) && classAbilities[card.role] ? `<div class="tooltip-class-ability"><b>${card.role} class ability</b><span>${classAbilities[card.role]}</span></div>` : '';
  const tooltipIcon = elementIcons[card.element] ? `<img class="element-icon" src="assets/icons/${elementIcons[card.element]}.png" alt="" />` : '';
  const elementLabel = card.element === 'None' ? 'Neutral' : card.element;
  const typeIcon = cardTypeIcon(card, 'tooltip-field-type-icon');
  const tooltipClass = hasCardClass(card) ? `<span class="tooltip-class-chip">${classIconMarkup(card.role, card.element, 'tooltip-class-icon')}<span>${escapeHTML(card.role)}</span></span>` : '';
  tooltip.innerHTML = `<button class="tooltip-dismiss" type="button" aria-label="Close card details">×</button><div class="tooltip-art">${artwork}</div><div class="tooltip-body"><div class="tooltip-kicker"><span>${card.title}</span><span class="tooltip-element-chip">${tooltipIcon}${escapeHTML(elementLabel)}</span>${tooltipClass}</div><strong class="tooltip-name">${card.name}</strong><div class="tooltip-type-row">${typeIcon}<span>${escapeHTML(typeLabel)}</span></div>${details}${classAbility}<div class="tooltip-card-ability"><b>CARD EFFECT</b><span>${card.ability}</span></div>${card.skipAttackThisTurn ? '<div class="tooltip-modifier frozen-note">Frozen: cannot attack this turn</div>' : ''}${laneIndex >= 0 ? `<div class="tooltip-status">FIELD · LANE ${laneIndex + 1}</div>` : ''}</div>${controls}`;
  tooltip.dataset.previewCard = card.instance; tooltip._anchorElement = event?.target?.closest?.('[data-card-preview]') || document.querySelector(`[data-card-preview="${CSS.escape(card.instance)}"]`); tooltip.classList.toggle('mobile-open', isTouchInput());
  tooltip.classList.add('visible'); tooltip.setAttribute('aria-hidden', 'false'); positionCardTooltip(event);
}
function positionCardTooltip(event) {
  const tooltip = document.getElementById('card-tooltip'); if (!tooltip.classList.contains('visible')) return;
  const anchor = tooltip._anchorElement?.isConnected ? tooltip._anchorElement : null;
  const cardRect = anchor?.getBoundingClientRect();
  const pad = 8; const gap = 10; const viewportWidth = window.innerWidth; const viewportHeight = window.innerHeight;
  const x = event?.clientX ?? viewportWidth / 2; const y = event?.clientY ?? viewportHeight / 2;
  const anchorRect = cardRect || { left: x, right: x, top: y, bottom: y, width: 0, height: 0 };
  const maxPanelHeight = Math.min(viewportHeight - pad * 2, 720);
  const leftWidth = Math.max(0, anchorRect.left - gap - pad);
  const rightWidth = Math.max(0, viewportWidth - anchorRect.right - gap - pad);
  const verticalWidth = Math.max(0, viewportWidth - pad * 2);
  const topHeight = Math.max(0, anchorRect.top - gap - pad);
  const bottomHeight = Math.max(0, viewportHeight - anchorRect.bottom - gap - pad);
  const mobile = tooltip.classList.contains('mobile-open');
  let placement;
  if (mobile || Math.max(leftWidth, rightWidth) < Math.min(280, viewportWidth * .38)) {
    placement = topHeight >= bottomHeight ? 'top' : 'bottom';
  } else {
    placement = rightWidth >= leftWidth ? 'right' : 'left';
  }
  let width; let height; let left; let top;
  if (placement === 'right') {
    width = Math.min(760, viewportWidth * .48, rightWidth);
    height = maxPanelHeight; left = anchorRect.right + gap;
    top = Math.max(pad, Math.min(anchorRect.top + (anchorRect.height - height) / 2, viewportHeight - height - pad));
  } else if (placement === 'left') {
    width = Math.min(760, viewportWidth * .48, leftWidth);
    height = maxPanelHeight; left = anchorRect.left - gap - width;
    top = Math.max(pad, Math.min(anchorRect.top + (anchorRect.height - height) / 2, viewportHeight - height - pad));
  } else if (placement === 'top') {
    width = Math.min(760, verticalWidth); height = Math.min(maxPanelHeight, topHeight);
    left = pad; top = anchorRect.top - gap - height;
  } else {
    width = Math.min(760, verticalWidth); height = Math.min(maxPanelHeight, bottomHeight);
    left = pad; top = anchorRect.bottom + gap;
  }
  tooltip.dataset.tooltipSide = placement;
  tooltip.style.setProperty('--tooltip-left', `${Math.max(pad, left)}px`);
  tooltip.style.setProperty('--tooltip-top', `${Math.max(pad, top)}px`);
  tooltip.style.setProperty('--tooltip-width', `${Math.max(1, width)}px`);
  tooltip.style.setProperty('--tooltip-height', `${Math.max(1, height)}px`);
}
function hideCardTooltip() { const tooltip = document.getElementById('card-tooltip'); if (tooltip) { tooltip.classList.remove('visible', 'mobile-open'); delete tooltip.dataset.previewCard; tooltip.setAttribute('aria-hidden', 'true'); } }
function showZoneCards(side, zoneKind) {
  const owner = side === 'player' ? match.player : match.opponent;
  const cards = zoneKind === 'transform' ? owner.transformationDeck : owner.destroyed;
  const zoneName = zoneKind === 'transform' ? 'Ascendance Deck' : 'Pandemonium Zone';
  document.getElementById('zone-kicker').textContent = `${side === 'player' ? 'YOUR' : 'RIVAL'} · ${zoneName.toUpperCase()}`;
  document.getElementById('zone-title').textContent = `${zoneName} · ${cards.length}`;
  document.getElementById('zone-cards').innerHTML = cards.length ? cards.map((card) => {
    const art = card.art ? `<img src="${card.art}" alt="" />` : '<span class="zone-card-fallback">✦</span>';
    const stats = card.type === 'Action' ? `Action · no element · ${card.cost} energy` : `${card.role} · ${card.element} · ${card.attack} ATK`;
    return `<article class="zone-card-row">${art}<div><strong>${card.title} ${card.name}</strong><small>${stats}</small><p>${card.ability}</p></div></article>`;
  }).join('') : '<p class="zone-empty">There are no cards in this zone.</p>';
  document.getElementById('zone-dialog').showModal();
}
function playCard(cardId, laneIndex) {
  const card = match.player.hand.find((c) => c.instance === cardId);
  const cost = playCost(match.player, card);
  if (!card || card.type === 'Action' || match.active !== 'player' || match.player.lanes[laneIndex] || cost > match.energy) return;
  if (!canSummonCard(match.player, card)) { announceEffect('Vishnu can only be summoned while Peppermint is in your Fighter Zone.'); return; }
  match.attackMode = false; match.attackerLane = null;
  match.energy -= cost; match.player.hand.splice(match.player.hand.indexOf(card), 1); card.ready = false; match.player.lanes[laneIndex] = card; match.selected = null; render(); animateSummon(match.player, laneIndex, card).then(() => triggerOnSummon(card, match.player, laneIndex));
}
function playCost(owner, card) { if (!card) return Infinity; if (card.id === 'academy-diamond' && owner.lanes.some((unit) => ['academy-topaz','wb-topaz-diamond'].includes(unit?.id))) return 0; if (card.id === 'academy-topaz' && owner.lanes.some((unit) => ['academy-diamond','wb-topaz-diamond'].includes(unit?.id))) return 0; return card.cost; }
function canSummonCard(owner, card) { return card?.id !== 'vishnu' || Boolean(owner?.lanes.some((unit) => unit?.name === 'Peppermint')); }
function drawCard(player, count = 1) {
  for (let i = 0; i < count; i++) { if (player.deck.length) player.hand.push(player.deck.shift()); }
}
let pendingEffectChoice = null;
const specialSprites = { aemi:'30FPS_FA01_06_Shimmer.png',runny:'30FPS_FA02_04_Impulse.png',berry:'30FPS_FA01_09_Barrier.png',frosty:'30FPS_FA01_08_Shield.png',den:'30FPS_FA01_04_Buff.png',ryota:'30FPS_FA01_01_Slash.png',healer:'30FPS_FA01_07_Cure.png',summoner:'30FPS_FA02_01_EnergyBurst.png',gummy:'30FPS_FA02_03_CrystalBlossom.png',zoya:'30FPS_FA02_02_Smokescreen.png',cooking:'30FPS_FA02_03_CrystalBlossom.png',cotton:'30FPS_FA02_03_CrystalBlossom.png',kage:'30FPS_FA02_02_Smokescreen.png',amethyst:'30FPS_FA01_10_Burst.png',shielder:'30FPS_FA01_08_Shield.png',shooter:'30FPS_FA01_02_Thrust.png',enchanter:'30FPS_FA01_04_Buff.png',trickster:'30FPS_FA01_05_Debuff.png',blader:'30FPS_FA01_01_Slash.png',brawler:'30FPS_FA01_03_Punch.png',peppermint:'30FPS_FA01_04_Buff.png','avatar-gem':'30FPS_FA02_07_HyperCharge.png' };
function playSpecialFx(owner, laneIndex, key, label, { generatedOnly = false, silent = false } = {}) {
  const side = owner === match.player ? 'player' : 'opponent';
  window.setTimeout(() => {
    const host = laneIndex >= 0 ? document.querySelector(`[data-side="${side}"][data-lane="${laneIndex}"]`) : document.getElementById(`${side}-board`);
    if (!host) return;
    const fx = document.createElement('div'); fx.className = `special-fx special-${key}`; fx.innerHTML = `<span>${({ aemi:'⌕',runny:'⌖',berry:'↩',frosty:'❄',den:'✦',ryota:'⚔',healer:'✚',summoner:'✧',gummy:'✹',zoya:'⟲',cooking:'↶',cotton:'⌘',kage:'◐',amethyst:'◆',shielder:'⬟',shooter:'➶',enchanter:'✺',trickster:'♟',blader:'✦',brawler:'✹',peppermint:'✿','avatar-gem':'◇','solar-explosion':'☼' })[key] || '✧'}</span><b>${label}</b>`;
    host.appendChild(fx);
    const spriteFile = generatedOnly ? null : specialSprites[key];
    if (spriteFile) {
      const sheet = new Image();
      sheet.onload = () => {
        if (!fx.isConnected) return;
        const sprite = document.createElement('i'); sprite.className = 'special-sprite'; sprite.style.backgroundImage = `url("assets/effects/${spriteFile}")`;
        const rows = Math.max(1, Math.round(sheet.naturalHeight / (sheet.naturalWidth / 5))); const frameCount = rows * 5;
        sprite.style.backgroundSize = `500% ${rows * 100}%`; fx.classList.add('has-sprite'); fx.appendChild(sprite);
        let frame = 0; const renderFrame = () => { const col = frame % 5, row = Math.floor(frame / 5); sprite.style.backgroundPosition = `${col * 25}% ${rows === 1 ? 0 : row / (rows - 1) * 100}%`; };
        renderFrame(); const timer = window.setInterval(() => { frame++; if (frame >= frameCount || !fx.isConnected) { window.clearInterval(timer); if (fx.isConnected) window.setTimeout(() => fx.remove(), 160); return; } renderFrame(); }, 33);
      };
      sheet.src = `assets/effects/${spriteFile}`;
    } else window.setTimeout(() => fx.remove(), 1250);
    const abilityElements = { aemi:'Dark',runny:'Aer',berry:'Aqua',frosty:'Glacial',den:'Mind',ryota:'Solar',healer:'Terra',summoner:'Dark',gummy:'Ignis',zoya:'Dark',cooking:'Dark',cotton:'Mind',kage:'Dark',amethyst:'Dark',shielder:'Terra',shooter:'Aer',enchanter:'Mind',trickster:'Dark',blader:'Solar',brawler:'Ignis',peppermint:'Mind','avatar-gem':'Dark','solar-explosion':'Solar' };
    if (!silent) playSfx('special', abilityElements[key] || 'Mind');
  }, 0);
}
let fieldFxSequence = 0;
function playFieldActivationFx(fieldId) {
  const host = document.querySelector('.battlefield');
  if (!host) return;
  const names = { 'ip-field':'ISLAND PARADISE', 'toy-store':'TOY STORE', 'christmas-mall':'CHRISTMAS MALL', 'academy-grounds':'ACADEMY HALL' };
  const id = `field-flow-${++fieldFxSequence}`;
  const fx = document.createElement('div');
  fx.className = `field-activation-fx field-activation-${fieldId}`;
  fx.innerHTML = `<svg viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#ff657a"/><stop offset=".17" stop-color="#ffbd67"/><stop offset=".34" stop-color="#fff283"/><stop offset=".5" stop-color="#7dffca"/><stop offset=".67" stop-color="#68ddff"/><stop offset=".84" stop-color="#a78bff"/><stop offset="1" stop-color="#ff8de1"/></linearGradient><filter id="${id}-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g class="field-flow-lines" stroke="url(#${id})" filter="url(#${id}-glow)"><path id="${id}-a" d="M600 350 C480 290 250 200 0 150"/><path id="${id}-b" d="M600 350 C420 350 190 350 0 350"/><path id="${id}-c" d="M600 350 C480 410 250 500 0 550"/><path id="${id}-d" d="M600 350 C720 290 950 200 1200 150"/><path id="${id}-e" d="M600 350 C780 350 1010 350 1200 350"/><path id="${id}-f" d="M600 350 C720 410 950 500 1200 550"/></g><g class="field-flow-particles" fill="url(#${id})"><circle r="6"><animateMotion dur="1.05s" repeatCount="1"><mpath href="#${id}-a"/></animateMotion></circle><circle r="4"><animateMotion dur=".92s" begin=".12s" repeatCount="1"><mpath href="#${id}-b"/></animateMotion></circle><circle r="5"><animateMotion dur="1.15s" begin=".04s" repeatCount="1"><mpath href="#${id}-c"/></animateMotion></circle><circle r="5"><animateMotion dur="1.08s" begin=".08s" repeatCount="1"><mpath href="#${id}-d"/></animateMotion></circle><circle r="6"><animateMotion dur=".95s" begin=".16s" repeatCount="1"><mpath href="#${id}-e"/></animateMotion></circle><circle r="4"><animateMotion dur="1.12s" begin=".05s" repeatCount="1"><mpath href="#${id}-f"/></animateMotion></circle></g><circle class="field-flow-core" cx="600" cy="350" r="20"/><circle class="field-flow-ring" cx="600" cy="350" r="40"/></svg><b>${names[fieldId] || 'FIELD SHIFT'}</b>`;
  host.appendChild(fx);
  window.setTimeout(() => fx.remove(), 1750);
}
function playHealthPotionFx(owner, index) {
  const side = owner === match.player ? 'player' : 'opponent';
  const host = document.querySelector(`#${side}-life .life-middle .life-card:nth-child(${index + 1})`);
  if (!host) return;
  const fx = document.createElement('span'); fx.className = 'health-crystal-fx'; fx.innerHTML = '<svg viewBox="0 0 100 100" aria-hidden="true"><path class="crystal-heart" d="M50 86 15 51C-6 24 18 4 39 18l11 11 11-11c21-14 45 6 24 33Z"/><path class="crystal-facet" d="m50 29-13 20 13 37 13-37Z M15 51h70 M37 49l13-20 13 20"/><circle class="crystal-orbit" cx="50" cy="50" r="43"/><path class="crystal-spark" d="M50 1v14M50 85v14M1 50h14M85 50h14M16 16l10 10M74 74l10 10M84 16 74 26M26 74 16 84"/></svg>';
  host.appendChild(fx);
  window.setTimeout(() => fx.remove(), 1300);
}
function playManaPotionFx() {
  const host = document.querySelector('.energy');
  if (!host) return;
  const fx = document.createElement('span'); fx.className = 'mana-crystal-fx'; fx.innerHTML = '<svg viewBox="0 0 80 100" aria-hidden="true"><path d="M40 4 70 39 40 94 10 39Z"/><path d="m40 4 0 90M10 39h60M40 4 25 39l15 55 15-55Z"/><circle cx="40" cy="47" r="34"/></svg>';
  host.appendChild(fx); window.setTimeout(() => fx.remove(), 1050);
}
function announceEffect(message) {
  const kind = match.eventActor ? (match.eventActor === match.player ? 'player' : 'enemy') : 'system';
  logBattleEvent(message, kind);
  const toast = document.getElementById('effect-toast');
  toast.textContent = message; toast.classList.add('visible');
  window.clearTimeout(announceEffect.timer); announceEffect.timer = window.setTimeout(() => toast.classList.remove('visible'), 2600);
}
function chooseEffect(owner, title, copy, choices, callback) {
  if (!choices.length) { announceEffect('No valid target for this effect.'); return; }
  if (owner.isAI) { callback(choices[0].value); return; }
  document.getElementById('effect-title').textContent = title;
  document.getElementById('effect-copy').textContent = copy;
  document.getElementById('effect-options').innerHTML = choices.map((choice, index) => {
    const card = cardForEffectChoice(choice);
    const art = card?.art ? `<span class="effect-option-art"><img src="${escapeHTML(card.art)}" alt=""/><b>${card.cost}</b></span>` : '<span class="effect-option-art effect-option-art-fallback">✦</span>';
    const stats = card ? `<span class="effect-option-stats">${card.type === 'Action' ? `${escapeHTML(displayedCardType(card))} · ${card.cost} Mana` : `${card.attack} ATK · ${card.cost} Mana`}</span>` : '';
    return `<button class="effect-option" data-choice="${index}">${art}<span class="effect-option-copy"><strong>${escapeHTML(choice.label)}</strong><small>${escapeHTML(choice.detail || '')}</small></span>${stats}</button>`;
  }).join('');
  pendingEffectChoice = callback; chooseEffect.choices = choices; document.getElementById('effect-dialog').showModal();
}
function cardForEffectChoice(choice) {
  if (!choice) return null;
  const activeCards = [match.player, match.opponent].filter(Boolean).flatMap((side) => [
    ...side.hand, ...side.deck, ...side.destroyed, ...side.transformationDeck,
    ...side.lanes.filter(Boolean), ...side.life.middle.filter(Boolean), side.life.main,
    ...(side.life.familiars || []).filter(Boolean),
  ]).filter(Boolean);
  const activeMatch = activeCards.find((card) => card.instance === choice.value);
  if (activeMatch) return activeMatch;
  const name = String(choice.label || '').split(' · ')[0].trim();
  const candidates = [...activeCards, ...allCardCatalog()].filter((card) => card.name === name || `${card.title} ${card.name}` === name);
  const detail = String(choice.detail || '');
  return candidates.find((card) => detail.includes(card.title) || detail.includes(`${card.cost} Mana`)) || candidates[0] || null;
}
function drawMatching(owner, predicate, label) {
  const index = owner.deck.findIndex(predicate);
  if (index < 0) { announceEffect(`No ${label} remains in the deck.`); return false; }
  const [card] = owner.deck.splice(index, 1); owner.hand.push(card); render(); announceEffect(`${card.name} drawn by effect.`); return true;
}
function summonBeatcracker(owner, card) {
  const lane = owner.lanes.findIndex((unit) => !unit);
  if (card?.id !== 'lt-beatcracker' || lane < 0) return false;
  const inPandemonium = owner.destroyed.findIndex((unit) => unit.instance === card.instance);
  if (inPandemonium >= 0) owner.destroyed.splice(inPandemonium, 1);
  owner.lanes[lane] = card; card.ready = false; card.attacked = false;
  render(); logBattleEvent(`${battleSideName(owner)} summoned Beatcracker from the Pandemonium Zone.`, owner === match.player ? 'player' : 'enemy');
  animateSummon(owner, lane, card).then(() => triggerOnSummon(card, owner, lane));
  return true;
}
function useCooking(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (!action || match.energy < action.cost) { announceEffect('Cooking needs 3 energy.'); return; }
  const choices = owner.destroyed.filter((card) => card.type === 'Fighter' || card.type === 'Creature').map((card) => ({ value: card.instance, label: card.name, detail: `${card.title} · ${card.element}` }));
  chooseEffect(owner, 'Cooking', 'Return a Fighter or Creature from your destroyed zone to your hand.', choices, (instance) => {
    const targetIndex = owner.destroyed.findIndex((card) => card.instance === instance);
    if (targetIndex < 0) return;
    const [revived] = owner.destroyed.splice(targetIndex, 1); owner.hand.push(revived); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; playSpecialFx(owner, -1, 'cooking', 'COOKING · REVIVE', { generatedOnly: true, silent: true }); render(); announceEffect(`${revived.name} returned from the destroyed zone.`);
  });
}
function usePlanting(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (!action || match.energy < action.cost) { announceEffect('Planting needs 2 energy.'); return; }
  const openLanes = owner.lanes.map((unit, index) => unit ? -1 : index).filter((index) => index >= 0);
  const targets = [
    ...owner.deck.flatMap((card) => card.title === 'Vegcritter' ? openLanes.map((lane) => ({ value: `deck:${card.instance}:${lane}`, label: `${card.name} · lane ${lane + 1}`, detail: 'From your deck' })) : []),
    ...owner.destroyed.flatMap((card) => card.title === 'Vegcritter' ? openLanes.map((lane) => ({ value: `destroyed:${card.instance}:${lane}`, label: `${card.name} · lane ${lane + 1}`, detail: 'From your destroyed zone' })) : []),
  ];
  if (!openLanes.length) { announceEffect('Planting needs an open fighter zone.'); return; }
  chooseEffect(owner, 'Planting: summon a Vegcritter', 'Choose a Vegcritter from your deck or destroyed zone and an open lane.', targets, (selection) => {
    const [source, instance, laneText] = selection.split(':'); const laneIndex = Number(laneText);
    const pile = source === 'deck' ? owner.deck : owner.destroyed;
    const cardIndex = pile.findIndex((card) => card.instance === instance && card.title === 'Vegcritter');
    if (cardIndex < 0 || owner.lanes[laneIndex] || !owner.hand.includes(action) || match.energy < action.cost) return;
    const [creature] = pile.splice(cardIndex, 1); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); owner.lanes[laneIndex] = creature; match.energy -= action.cost;
    render(); playSpecialFx(owner, laneIndex, 'cotton', 'PLANTING · VEGCRITTER', { generatedOnly: true, silent: true }); animateSummon(owner, laneIndex, creature).then(() => triggerOnSummon(creature, owner, laneIndex));
    announceEffect(`${creature.name} was summoned by Planting.`);
  });
}
function activateMedusa(owner, laneIndex) {
  const medusa = owner.lanes[laneIndex];
  if (!medusa || medusa.id !== 'ww-medusa' || medusa.abilityUsedTurn === match.turn) return;
  if (match.energy < 1) { announceEffect('Medusa needs 1 energy.'); return; }
  if (!owner.deck.length) { announceEffect('There is no card left in the deck to reveal.'); return; }
  match.energy--; medusa.abilityUsedTurn = match.turn;
  const top = owner.deck[0]; render();
  chooseEffect(owner, 'Medusa · top card', 'The top card of your deck is revealed.', [{ value: true, label: top.name, detail: `${top.title} · ${top.element === 'None' ? 'Neutral' : top.element}` }], () => announceEffect(`Medusa revealed ${top.name}.`));
}
function useAvatarGem(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (!action || match.energy < action.cost) { announceEffect('Avatar Gem needs 4 energy.'); return; }
  const choices = owner.lanes.map((card, laneIndex) => card && owner.transformationDeck.some((transform) => transform.name === card.name)
    ? { value: laneIndex, label: card.name, detail: `Transform into Zodiac Guardian · lane ${laneIndex + 1}` }
    : null).filter(Boolean);
  chooseEffect(owner, 'Avatar Gem', 'Choose one of your fighters. Replace it with a same-named Zodiac Guardian from your Transformation Deck.', choices, (laneIndex) => {
    const target = owner.lanes[laneIndex]; const transformIndex = owner.transformationDeck.findIndex((card) => card.name === target?.name);
    if (!target || transformIndex < 0 || !owner.hand.includes(action) || match.energy < action.cost) return;
    const [transformed] = owner.transformationDeck.splice(transformIndex, 1);
    owner.life.familiars?.forEach((familiar) => { if (familiar?.attachedTo === target.instance) familiar.attachedTo = transformed.instance; });
    transformed.ready = target.ready; transformed.attacked = target.attacked; transformed.skipAttackThisTurn = target.skipAttackThisTurn; transformed.skipAttackNext = target.skipAttackNext;
    owner.destroyed.push(target); owner.lanes[laneIndex] = transformed;
    owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost;
    match.eventActor = owner; match.eventSource = action.name;
    render(); playSpecialFx(owner, laneIndex, 'avatar-gem', 'AVATAR GEM · TRANSFORM', { silent: true }); animateSummon(owner, laneIndex, transformed).then(() => triggerOnSummon(transformed, owner, laneIndex));
    announceEffect(`${target.name} transformed into a Zodiac Guardian.`);
  });
}
function setSharedField(owner, id, card = null) {
  const oldField = match.fieldCard;
  if (oldField?.card) {
    const oldOwner = oldField.owner === 'player' ? match.player : match.opponent;
    if (oldOwner && !oldOwner.hand.includes(oldField.card)) oldOwner.hand.push(oldField.card);
  }
  match.fieldCard = { id, owner: owner === match.player ? 'player' : 'opponent', card };
}
function activateAction(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (action) { match.eventActor = owner; match.eventSource = action.name; logBattleEvent(`${battleSideName(owner)} activated ${action.name}.`, owner === match.player ? 'player' : 'enemy'); }
  if (action?.type === 'Action' && match.energy >= action.cost) playActionSfx(action);
  if (action?.id === 'avatar-gem') useAvatarGem(owner, actionInstance);
  else if (action?.id === 'mana-potion' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy = Math.min(match.turnEnergyCap, match.energy - action.cost + 2); render(); playManaPotionFx(); announceEffect('Mana Potion restored up to 2 Mana, without exceeding this turn’s maximum.'); }
  else if (action?.id === 'health-potion' && match.energy >= action.cost) { const openLifeIndex = owner.life.middle.findIndex((lifeCard) => !lifeCard); if (openLifeIndex < 0 || !owner.deck.length) { announceEffect('Health Potion needs an empty Life Zone and a card in your deck.'); return; } owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); owner.life.middle[openLifeIndex] = owner.deck.shift(); match.energy -= action.cost; render(); playHealthPotionFx(owner, openLifeIndex); announceEffect('Health Potion restored a Life Zone.'); }
  else if (action?.id === 'cooking') useCooking(owner, actionInstance);
  else if (action?.id === 'locker-room') useLockerRoom(owner, actionInstance);
  else if (action?.id === 'drinking-tea' && match.energy >= action.cost) {
    const choices = owner.lanes.flatMap((unit, lane) => unit?.element === 'Glacial' && !unit.ready ? [{ value: lane, label: unit.name, detail: `Lane ${lane + 1} · may act this turn` }] : []);
    chooseEffect(owner, 'Drinking Tea: quicken a Glacial ally', 'Choose a Glacial fighter to attack on the turn it was summoned.', choices, (lane) => { const target = owner.lanes[Number(lane)]; if (!target || !owner.hand.includes(action) || match.energy < action.cost) return; owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; target.ready = true; target.skipAttackThisTurn = false; render(); playSpecialFx(owner, Number(lane), 'frosty', 'DRINKING TEA · QUICKEN', { generatedOnly: true, silent: true }); announceEffect(`${target.name} can act on its first turn.`); });
  }
  else if (action?.id === 'ww-planting') usePlanting(owner, actionInstance);
  else if (action?.id === 'academy-grounds' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'academy-grounds', action); render(); playFieldActivationFx('academy-grounds'); announceEffect('Academy Hall is now the shared field. Academy cards gain +1 attack if there are no non-Academy Fighter or Creature cards in their owner’s Pandemonium Zone.'); }
  else if (action?.id === 'ip-field' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'ip-field', action); render(); playFieldActivationFx('ip-field'); announceEffect('Island Paradise is now the shared field. Its fighters on both sides cannot be targeted, but do not defend their Life Zones.'); }
  else if (action?.id === 'toy-store' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'toy-store', action); render(); playFieldActivationFx('toy-store'); announceEffect('Toy Store is now the shared field. All 1-cost Fighters and Creatures on both sides gain +1 attack.'); }
  else if (action?.id === 'christmas-mall' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'christmas-mall', action); match.fieldCard.usedTurnKeys = []; render(); playFieldActivationFx('christmas-mall'); announceEffect('Christmas Mall is now the shared field. Swap two fighters once per turn if one is Glacial.'); }
}
function useLockerRoom(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (!action || match.energy < action.cost) { announceEffect('Locker Room needs 2 energy.'); return; }
  const fieldOptions = owner.lanes.flatMap((unit, lane) => unit && [...owner.hand, ...owner.deck].some((candidate) => candidate.name === unit.name && candidate.title !== unit.title && canSummonCard(owner, candidate))
    ? [{ value: lane, label: unit.name, detail: `Replace ${unit.title} in lane ${lane + 1}` }] : []);
  chooseEffect(owner, 'Locker Room · choose a Fighter', 'Choose a Fighter that has a same-named card with a different title in your hand or deck.', fieldOptions, (lane) => {
    const target = owner.lanes[lane];
    const candidates = [...owner.hand, ...owner.deck].filter((card) => card !== action && card.name === target?.name && card.title !== target?.title && card.type !== 'Action' && canSummonCard(owner, card));
    chooseEffect(owner, 'Locker Room · choose a card', `Choose a different-title ${target?.name} from your hand or deck to summon in lane ${lane + 1}.`, candidates.map((card) => ({ value: card.instance, label: card.name, detail: `${card.title} · ${owner.hand.includes(card) ? 'Hand' : 'Deck'}` })), (instance) => {
      const current = owner.lanes[lane];
      const pile = owner.hand.some((card) => card.instance === instance) ? owner.hand : owner.deck;
      const index = pile.findIndex((card) => card.instance === instance);
      if (!current || index < 0 || !owner.hand.includes(action) || match.energy < action.cost) return;
      const oldCardElement = document.querySelector(`[data-side="${owner === match.player ? 'player' : 'opponent'}"][data-lane="${lane}"] .battle-card`);
      animateShatter(oldCardElement, current.element);
      const [replacement] = pile.splice(index, 1);
      owner.lanes[lane] = null; owner.destroyed.push(current); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost;
      replacement.ready = false; replacement.attacked = false; owner.lanes[lane] = replacement;
      render(); playSpecialFx(owner, lane, 'avatar-gem', 'LOCKER ROOM · REPLACEMENT', { generatedOnly: true, silent: true });
      animateSummon(owner, lane, replacement).then(() => triggerOnSummon(replacement, owner, lane));
      announceEffect(`${replacement.title} ${replacement.name} entered the field through Locker Room.`);
    });
  });
}
function useCotton(owner, cardInstance) {
  const cotton = owner.hand.find((card) => card.instance === cardInstance);
  if (!cotton) return;
  const hallIndex = owner.deck.findIndex((card) => card.id === 'academy-grounds');
  if (hallIndex < 0) { announceEffect('Cotton could not find Academy Hall in your deck.'); return; }
  const [hall] = owner.deck.splice(hallIndex, 1);
  owner.hand.splice(owner.hand.indexOf(cotton), 1); owner.destroyed.push(cotton); owner.hand.push(hall);
  render(); playSpecialFx(owner, -1, 'cotton', 'COTTON · FIELD FOUND', { generatedOnly: true }); announceEffect('Cotton added Academy Hall to your hand.');
}
function isEffectProtected(card) { return card?.id === 'ww-academy-rick'; }
function animateShatter(source, element, variant = '') {
  if (!source) return;
  const bounds = source.getBoundingClientRect();
  const overlay = document.createElement('div');
  overlay.className = `shatter-overlay ${variant} element-${(element || 'None').toLowerCase()}`;
  overlay.style.left = `${bounds.left}px`;
  overlay.style.top = `${bounds.top}px`;
  overlay.style.width = `${bounds.width}px`;
  overlay.style.height = `${bounds.height}px`;
  const pieces = [
    ['0 0, 50% 0, 50% 50%', -34, -43, -18], ['50% 0, 100% 0, 50% 50%', 0, -54, 14],
    ['100% 0, 100% 50%, 50% 50%', 36, -35, 22], ['100% 50%, 100% 100%, 50% 50%', 47, 1, 18],
    ['100% 100%, 50% 100%, 50% 50%', 31, 41, 13], ['50% 100%, 0 100%, 50% 50%', 0, 53, -18],
    ['0 100%, 0 50%, 50% 50%', -36, 38, -24], ['0 50%, 0 0, 50% 50%', -48, 0, 12],
  ];
  pieces.forEach(([clip, x, y, rotation], index) => {
    const shard = source.cloneNode(true);
    shard.classList.add('shatter-fragment');
    shard.style.clipPath = `polygon(${clip})`;
    shard.style.setProperty('--shard-x', `${x}px`);
    shard.style.setProperty('--shard-y', `${y}px`);
    shard.style.setProperty('--shard-rotation', `${rotation}deg`);
    shard.style.animationDelay = `${index * 14}ms`;
    overlay.appendChild(shard);
  });
  document.body.appendChild(overlay);
  window.setTimeout(() => overlay.remove(), 900);
}
function animateCardShatter(owner, laneIndex, card) {
  const side = owner === match.player ? 'player' : 'opponent';
  animateShatter(document.querySelector(`[data-side="${side}"][data-lane="${laneIndex}"] .battle-card`), card.element);
}
function animateLifeShatter(owner, laneIndex, main = false) {
  const side = owner === match.player ? 'player' : 'opponent';
  const selector = main ? `#${side}-life .main-life-back .life-card` : `#${side}-life .life-middle .life-card:nth-child(${laneIndex + 1})`;
  animateShatter(document.querySelector(selector), 'Solar', 'life-shatter-overlay');
}
function returnFighterToHand(owner, laneIndex) {
  const target = owner.lanes[laneIndex];
  if (!target) return;
  if (isEffectProtected(target)) { announceEffect('Academy Rick is protected from card effects.'); return null; }
  owner.lanes[laneIndex] = null; owner.hand.push(target);
  if (target.id === 'ip-natsuki') [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.protectedBy === target.instance) delete unit.protectedBy; }));
  render(); announceEffect(`${target.name} returned to hand.`);
  return target;
}
function destroyUnit(owner, laneIndex, inBattle = false) {
  const card = owner.lanes[laneIndex];
  if (!card) return null;
  if (!inBattle && isEffectProtected(card)) { announceEffect('Academy Rick is protected from card effects.'); return null; }
  const actor = match.eventActor || (inBattle ? (owner === match.player ? match.opponent : match.player) : null);
  const actorText = actor ? battleSideName(actor) : 'An effect';
  const cause = inBattle ? ' in battle' : match.eventSource ? ` ${match.eventSource}'s effect` : '';
  logBattleEvent(`${actorText}${cause} destroyed ${card.name}.`, actor === match.player ? 'player' : actor === match.opponent ? 'enemy' : 'system');
  animateCardShatter(owner, laneIndex, card);
  const galactaSaves = inBattle && card.id !== 'ww-galacta' && card.title === 'Wild West' && card.cost <= 3 && owner.lanes.some((unit) => unit?.id === 'ww-galacta');
  const zombyReturns = card.id === 'zomby';
  owner.lanes[laneIndex] = null;
  const familiarIndex = owner.life.familiars?.findIndex((familiar) => familiar?.attachedTo === card.instance) ?? -1;
  if (familiarIndex >= 0) { owner.destroyed.push(owner.life.familiars[familiarIndex]); owner.life.familiars[familiarIndex] = null; announceEffect(`${card.name}’s Familiar was destroyed with its owner.`); }
  if (zombyReturns) { card.cost += 1; owner.hand.push(card); announceEffect(`Zomby returned to its owner’s hand and its cost increased to ${card.cost} Mana.`); }
  else if (galactaSaves) { owner.hand.push(card); announceEffect(`${card.name} returned to your hand through GaLacta.`); }
  else owner.destroyed.push(card);
  if (!galactaSaves && card.id === 'kage') { playSpecialFx(owner, laneIndex, 'kage', 'KAGE · LAST VEIL'); drawMatching(owner, (candidate) => candidate.name === 'Zoya', 'Zoya'); }
  if (card.id === 'amethyst') { const opponent = owner === match.player ? match.opponent : match.player; if (opponent.lanes[laneIndex]) { playSpecialFx(owner, laneIndex, 'amethyst', 'AMETHYST · SHATTER'); if (destroyUnit(opponent, laneIndex)) announceEffect('Amethyst destroys the fighter opposite it.'); } }
  if (!galactaSaves && card.id === 'ww-eggscythe') {
    const candidates = owner.destroyed.filter((unit) => unit.instance !== card.instance && unit.element === 'Dark').map((unit) => ({ value: unit.instance, label: unit.name, detail: `${unit.title} · Dark` }));
    chooseEffect(owner, 'Eggscythe: return a Dark card', 'Choose a different Dark card from your destroyed zone to return to your hand.', candidates, (instance) => { const i = owner.destroyed.findIndex((unit) => unit.instance === instance); if (i >= 0) { const [returned] = owner.destroyed.splice(i, 1); owner.hand.push(returned); render(); announceEffect(`${returned.name} returned to your hand.`); } });
  }
  if (!galactaSaves && card.id === 'ww-rosaluna') drawMatching(owner, (candidate) => candidate.title === 'Wild West' && candidate.element === 'Mind', 'Mind Wild West card');
  if (!galactaSaves && card.id === 'ip-banaphin') drawMatching(owner, (candidate) => candidate.title === 'Island Paradise' && candidate.type === 'Creature', 'Island Paradise Creature');
  if (card.id === 'ip-natsuki') [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.protectedBy === card.instance) delete unit.protectedBy; }));
  return card;
}
function moveWinterCard(owner, from, to) {
  const card = owner.lanes[from]; if (!card || owner.lanes[to] || to < 0 || to > 2 || from === to) return false;
  owner.lanes[to] = card; owner.lanes[from] = null;
  const familiar = owner.life.familiars?.find((item) => item?.attachedTo === card.instance);
  if (familiar) { const old = owner.life.familiars.indexOf(familiar); owner.life.familiars[old] = null; owner.life.familiars[to] = familiar; }
  if (card.id === 'wb-dimitri') addPermanentAttack(card, 1, 'Dimitri moved');
  [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.id === 'wb-magnus') addPermanentAttack(unit, 1, 'Magnus witnessed a move'); }));
  logBattleEvent(`${card.name} moved from lane ${from + 1} to lane ${to + 1}.`); render(); return true;
}
function swapChristmasMallFighters(owner, first, second) {
  const a = owner.lanes[first], b = owner.lanes[second]; if (!a || !b || first === second) return false;
  owner.lanes[first] = b; owner.lanes[second] = a;
  const familiars = owner.life.familiars || [];
  [familiars[first], familiars[second]] = [familiars[second], familiars[first]];
  if (a.id === 'wb-dimitri') addPermanentAttack(a, 1, 'Dimitri moved');
  if (b.id === 'wb-dimitri') addPermanentAttack(b, 1, 'Dimitri moved');
  [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.id === 'wb-magnus') addPermanentAttack(unit, 2, 'Christmas Mall swapped two fighters'); }));
  logBattleEvent(`${a.name} and ${b.name} swapped lanes ${first + 1} and ${second + 1}.`); render(); return true;
}
function activateChristmasMall(owner) {
  const field = match.fieldCard; if (field?.id !== 'christmas-mall') return;
  const turnKey = `${match.turn}-${owner === match.player ? 'player' : 'opponent'}`;
  if (field.usedTurnKeys?.includes(turnKey)) return;
  const sideKey = owner === match.player ? 'p' : 'o';
  const choices = owner.lanes.flatMap((firstCard, first) => firstCard ? owner.lanes.flatMap((secondCard, second) => second > first && secondCard && (firstCard.element === 'Glacial' || secondCard.element === 'Glacial') ? [{ value: `${first}:${second}`, label: `${firstCard.name} ↔ ${secondCard.name}`, detail: `Your lanes ${first + 1} and ${second + 1}` }] : []) : []);
  chooseEffect(owner, 'Christmas Mall: switch partners', 'Swap two of your fighters. At least one must be Glacial.', choices, (key) => { if (match.fieldCard !== field) return; const [first, second] = key.split(':'); field.usedTurnKeys ||= []; field.usedTurnKeys.push(turnKey); swapChristmasMallFighters(sideKey === 'p' ? match.player : match.opponent, Number(first), Number(second)); });
}
function addPermanentAttack(card, amount, source) { card.attackBonus = (card.attackBonus || 0) + amount; card.attackBonusModifiers = [...(card.attackBonusModifiers || []), { amount, source }]; card.attackBonusSources = [...(card.attackBonusSources || []), source]; }
function triggerOnSummon(card, owner, laneIndex) {
  const opponent = owner === match.player ? match.opponent : match.player;
  match.eventActor = owner; match.eventSource = card.name;
  logBattleEvent(`${battleSideName(owner)} summoned ${card.name}.`, owner === match.player ? 'player' : 'enemy');
  const fxKeys = { aemi:'aemi',runny:'runny',berry:'berry',frosty:'frosty',den:'den',ryota:'ryota',gummy:'gummy',dharma:'healer','zodiac-guardian-ryota':'ryota','academy-fritz':'summoner','ww-academy-fritz':'summoner','academy-lynda':'trickster','ww-academy-lynda':'trickster','lt-fritz':'summoner','lt-raterrot':'summoner','lt-boxy':'enchanter','lt-clapster':'shooter','lt-scribble':'summoner','lt-melodoll':'healer','vishnu':'shooter' };
  if (['aemi','runny','berry','frosty','den','ryota','gummy','brewy','dharma','zodiac-guardian-ryota','academy-fritz','ww-academy-fritz','academy-lynda','ww-academy-lynda','ww-brian','ww-fritz','ww-wild-ox','ww-bandito','ww-sangrizo','ip-natsuki','ip-pinebeak','lt-scribble','lt-fritz','lt-raterrot','lt-boxy','lt-teddy','lt-broomy','lt-melodoll','lt-clapster','vishnu'].includes(card.id)) logBattleEvent(`${battleSideName(owner)} activated ${card.name}'s effect.`, owner === match.player ? 'player' : 'enemy');
  if (fxKeys[card.id]) playSpecialFx(owner, laneIndex, fxKeys[card.id], `${card.name.toUpperCase()} · ABILITY`, { generatedOnly: true });
  if (card.id === 'wb-bearnardo') {
    const choices = owner.hand.filter((unit) => unit.element === 'Glacial' && unit.cost > 0).map((unit) => ({ value: unit.instance, label: unit.name, detail: `Reduce cost ${unit.cost} → ${unit.cost - 1}` }));
    chooseEffect(owner, 'Bearnardo: chill the cost', 'Choose a Glacial card in your hand to cost 1 less.', choices, (instance) => { const target = owner.hand.find((unit) => unit.instance === instance); if (target) { target.cost--; render(); announceEffect(`${target.name} now costs ${target.cost} Mana.`); } });
  }
  if (['wb-gillusion','wb-ladyfeather','wb-merryhound'].includes(card.id)) {
    const adjacent = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3);
    let choices = [];
    if (card.id === 'wb-gillusion') choices = [match.player, match.opponent].flatMap((side) => side.lanes.flatMap((unit, from) => unit && Math.abs(from - laneIndex) > 1 ? adjacent.filter((to) => !side.lanes[to]).map((to) => ({ value: `${side === match.player ? 'p' : 'o'}:${from}:${to}`, label: `${unit.name} · lane ${from + 1} → ${to + 1}`, detail: side === owner ? 'Your fighter' : 'Rival fighter' })) : []));
    if (card.id === 'wb-ladyfeather') { const foe = opponent.lanes[laneIndex]; choices = foe ? adjacent.filter((to) => !opponent.lanes[to]).map((to) => ({ value: `o:${laneIndex}:${to}`, label: `${foe.name} · lane ${laneIndex + 1} → ${to + 1}`, detail: 'Move the opposing fighter' })) : []; }
    if (card.id === 'wb-merryhound') choices = adjacent.flatMap((from) => owner.lanes[from] ? owner.lanes.flatMap((unit, to) => !unit && Math.abs(to - from) > 1 ? [{ value: `p:${from}:${to}`, label: `${owner.lanes[from].name} · lane ${from + 1} → ${to + 1}`, detail: 'Move an adjacent ally' }] : []) : []);
    chooseEffect(owner, `${card.name}: reposition`, 'Choose a legal lane move.', choices, (key) => { const [sideKey, from, to] = key.split(':'); moveWinterCard(sideKey === 'p' ? match.player : match.opponent, Number(from), Number(to)); });
  }
  if (card.id === 'academy-dimitri') {
    const choices = owner.deck.flatMap((unit, index) => unit.title === 'Academy' && [3, 4].includes(unit.cost) ? [{ value: index, label: unit.name, detail: `${unit.cost} Mana · ${unit.element}` }] : []);
    chooseEffect(owner, 'Dimitri: draw an Academy card', 'Choose an Academy card that costs 3 or 4 from your deck.', choices, (index) => { const [drawn] = owner.deck.splice(Number(index), 1); if (drawn) { owner.hand.push(drawn); render(); announceEffect(`${drawn.name} drawn by Dimitri.`); } });
  }
  if (card.id === 'zodiac-swordtiger' && [...match.player.lanes, ...match.opponent.lanes].some((unit) => unit?.name === 'Dimitri')) drawMatching(owner, (unit) => unit.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'dharma') {
    const choices = owner.destroyed.map((held) => ['Fighter', 'Creature'].includes(held.type) ? { value: held.instance, label: held.name, detail: `${held.title} · ${held.element} · returns next turn` } : null).filter(Boolean);
    chooseEffect(owner, 'Dharma: choose a card to revive', 'Choose a Fighter or Creature in your Pandemonium Zone. At the start of your next turn, it returns to an open Fighter Zone if Dharma is still on the field.', choices, (instance) => {
      if (!owner.destroyed.some((held) => held.instance === instance)) return;
      match.pendingDharmaRevives.push({ owner, dharmaInstance: card.instance, revivedInstance: instance });
      render();
      announceEffect(`${owner.destroyed.find((held) => held.instance === instance)?.name || 'The card'} will return next turn if Dharma remains on the field and a lane is open.`);
    });
  }
  if (card.id === 'aemi' || card.id === 'academy-fritz' || card.id === 'ww-academy-fritz' || card.id === 'academy-lynda' || card.id === 'ww-academy-lynda') drawMatching(owner, (candidate) => candidate.title === 'Academy' && candidate.element !== card.element, 'Academy card with another element');
  if (card.id === 'lt-scribble' || card.id === 'vishnu') drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'brewy') drawMatching(owner, (candidate) => candidate.id === 'mana-potion' || candidate.id === 'health-potion', 'Potion card');
  if (card.id === 'lt-boxy') { const index = owner.deck.findIndex((candidate) => candidate.element === 'Dark'); if (index >= 0) { const [sent] = owner.deck.splice(index, 1); owner.destroyed.push(sent); render(); announceEffect(`Boxy sent ${sent.name} from the deck to the Pandemonium Zone.`); summonBeatcracker(owner, sent); } }
  if (card.id === 'lt-melodoll') { const choices = owner.destroyed.map((held, i) => held.element === 'Dark' ? { value: i, label: held.name, detail: `${held.title} · Dark` } : null).filter(Boolean); chooseEffect(owner, 'Melodoll: return a Dark card', 'Choose a Dark card in your Pandemonium Zone to return to your hand.', choices, (index) => { const [returned] = owner.destroyed.splice(index, 1); owner.hand.push(returned); render(); announceEffect(`${returned.name} returned to your hand.`); }); }
  if (card.id === 'lt-clapster') { let milled = null; if (owner.deck.length) { [milled] = owner.deck.splice(0, 1); owner.destroyed.push(milled); } if (opponent.hand.length) { const [discarded] = opponent.hand.splice(Math.floor(Math.random() * opponent.hand.length), 1); opponent.destroyed.push(discarded); announceEffect(`Clapster sent a card to the Pandemonium Zone and discarded ${discarded.name} from the enemy’s hand.`); } else announceEffect('Clapster sent the top card of your deck to the Pandemonium Zone; the enemy had no cards to discard.'); render(); if (milled) summonBeatcracker(owner, milled); }
  if (card.id === 'lt-teddy') { const choices = owner.hand.map((held, i) => ({ value: i, label: held.name, detail: `Discard ${held.title} · gain +1 attack` })); chooseEffect(owner, 'Teddy: discard a card', 'Discard a card from your hand to give Teddy +1 attack.', choices, (index) => { const [discarded] = owner.hand.splice(index, 1); owner.destroyed.push(discarded); if (discarded.id !== 'lt-beatcracker') { card.attackBonus = (card.attackBonus || 0) + 1; card.attackBonusModifiers = [...(card.attackBonusModifiers || []), { amount: 1, source: card.name }]; card.attackBonusSources = [...(card.attackBonusSources || []), card.name]; } render(); announceEffect(`Teddy discarded ${discarded.name} and gained 1 attack.`); summonBeatcracker(owner, discarded); }); }
  if (card.id === 'lt-broomy') { const choices = owner.lanes.map((unit, i) => unit && i !== laneIndex ? { value: i, label: unit.name, detail: `Return to hand · gain ${unit.cost} Mana` } : null).filter(Boolean); chooseEffect(owner, 'Broomy: return a fighter', 'Choose another one of your fighters to return to your hand. Gain Mana equal to its cost.', choices, (index) => { const target = owner.lanes[index]; const gain = target?.cost || 0; if (target) returnFighterToHand(owner, index); match.energy = Math.min(match.turnEnergyCap, match.energy + gain); render(); announceEffect(`Broomy returned a fighter and restored ${gain} Mana.`); }); }
  if (card.id === 'lt-fritz') { const toyCount = owner.hand.filter((held) => held.title === 'Living Toy').length; const targets = owner.lanes.filter((unit) => unit && unit.cost === 1 && unit.element === 'Dark'); if (!toyCount || !targets.length) announceEffect(`${card.name} found no 1-cost Dark fighters to empower or Living Toy cards in hand.`); else { targets.forEach((target) => { target.attackBonus = (target.attackBonus || 0) + toyCount; target.attackBonusModifiers = [...(target.attackBonusModifiers || []), { amount: toyCount, source: card.name }]; target.attackBonusSources = [...(target.attackBonusSources || []), card.name]; }); render(); announceEffect(`${card.name} gave ${toyCount} attack to each 1-cost Dark fighter.`); } }
  if (card.id === 'runny') {
    const choices = owner.deck.map((candidate, deckIndex) => candidate.title === 'Academy' && candidate.cost <= 4 ? { value: deckIndex, label: candidate.name, detail: `${candidate.cost} energy · ${candidate.element}` } : null).filter(Boolean);
    chooseEffect(owner, 'Runny: choose an Academy card', 'Choose an Academy card costing 4 or less from your deck to add to your hand.', choices, (deckIndex) => { const [chosen] = owner.deck.splice(deckIndex, 1); owner.hand.push(chosen); render(); announceEffect(`${chosen.name} drawn by Runny.`); });
  }
  if (card.id === 'frosty' && opponent.lanes[laneIndex]) { opponent.lanes[laneIndex].skipAttackNext = true; announceEffect('Frosty freezes the fighter opposite it for its next turn.'); render(); }
  if (card.id === 'berry') {
    const options = owner.lanes.map((unit, i) => unit && i !== laneIndex ? { value: i, label: unit.name, detail: `Lane ${i + 1}` } : null).filter(Boolean);
    chooseEffect(owner, 'Return a fighter', 'Berry can return one of your other fighters to your hand.', options, (targetLane) => returnFighterToHand(owner, targetLane));
  }
  if (card.id === 'den') {
    const options = owner.lanes.map((unit, i) => unit && !unit.ready ? { value: i, label: unit.name, detail: `Lane ${i + 1}` } : null).filter(Boolean);
    chooseEffect(owner, 'Ready a fighter', 'Choose a fighter that can attack this turn.', options, (targetLane) => { const target = owner.lanes[targetLane]; if (target) { target.ready = true; target.skipAttackThisTurn = false; announceEffect(`${target.name} can attack this turn.`); render(); } });
  }
  if (card.id === 'ryota' || card.id === 'zodiac-guardian-ryota') {
    const targets = opponent.lanes.map((unit, i) => unit && !isEffectProtected(unit) ? { value: i, label: unit.name, detail: `Enemy lane ${i + 1}` } : null).filter(Boolean);
    const discards = owner.hand.map((held, i) => ({ value: i, label: held.name, detail: `Discard ${held.title}` }));
    if (!targets.length) announceEffect('Ryota has no opposing fighter to destroy.');
    else if (!discards.length) announceEffect('Ryota needs a card in your hand to discard.');
    else chooseEffect(owner, 'Ryota: discard a card', 'Choose a card to discard, then destroy an enemy fighter in a Solar explosion.', discards, (discardIndex) => {
      const [discard] = owner.hand.splice(discardIndex, 1); owner.destroyed.push(discard);
      const liveTargets = opponent.lanes.map((unit, i) => unit && !isEffectProtected(unit) ? { value: i, label: unit.name, detail: `Enemy lane ${i + 1}` } : null).filter(Boolean);
      chooseEffect(owner, 'Choose an enemy fighter', 'Ryota unleashes a Solar explosion on the selected fighter.', liveTargets, (targetLane) => {
        if (!opponent.lanes[targetLane]) return;
        playSpecialFx(opponent, targetLane, 'solar-explosion', 'RYOTA · SOLAR EXPLOSION');
        if (destroyUnit(opponent, targetLane)) { render(); announceEffect('Ryota destroys an enemy fighter with a Solar explosion.'); }
      });
    });
  }
  if (card.id === 'ww-brian') {
    const choices = opponent.lanes.map((unit, i) => unit && !isEffectProtected(unit) ? { value: i, label: unit.name, detail: `Enemy lane ${i + 1}` } : null).filter(Boolean);
    chooseEffect(owner, 'Brian: return an enemy fighter', 'Choose an enemy fighter to return to its hand.', choices, (targetLane) => { if (opponent.lanes[targetLane]) returnFighterToHand(opponent, targetLane); });
  }
  if (card.id === 'ww-fritz') {
    const choices = owner.destroyed.map((unit, i) => unit.id === 'ww-eggscythe' ? { value: i, label: unit.name, detail: 'Return to your hand' } : null).filter(Boolean);
    chooseEffect(owner, 'Fritz: revive Eggscythe', 'Choose an Eggscythe from your destroyed zone to return to your hand.', choices, (destroyedIndex) => { const [returned] = owner.destroyed.splice(destroyedIndex, 1); owner.hand.push(returned); render(); announceEffect('Eggscythe returned to your hand.'); });
  }
  if (card.id === 'ww-wild-ox' && owner.lanes.some((unit) => unit?.name === 'Rick')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'lt-raterrot' && owner.lanes.some((unit) => unit?.name === 'Fritz')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'ww-bandito') { card.ready = match.turn > 1; render(); if (card.ready) announceEffect('Bandito can attack immediately.'); }
  if (card.id === 'ww-sangrizo') {
    if (match.energy < 1) announceEffect('Sangrizo needs 1 energy to use its effect.');
    else if (!opponent.hand.length) announceEffect('The rival has no card in hand for Sangrizo to destroy.');
    else { match.energy--; const randomIndex = Math.floor(Math.random() * opponent.hand.length); const [discarded] = opponent.hand.splice(randomIndex, 1); opponent.destroyed.push(discarded); render(); announceEffect(`Sangrizo destroyed a random card from the rival’s hand.`); }
  }
  if (card.role === 'Healer') {
    if (!owner.life.middle[laneIndex] && owner.deck.length) { playSpecialFx(owner, laneIndex, 'healer', 'LIFE RESTORED', { generatedOnly: true }); owner.life.middle[laneIndex] = owner.deck.shift(); render(); announceEffect(`${card.name} restored a life zone.`); }
  }
  if (card.id === 'ip-coyote') card.doubleAttackReady = false;
  if (card.id === 'ip-pinebeak') drawMatching(owner, (candidate) => candidate.title === 'Island Paradise' && candidate.type === 'Creature', 'Island Paradise Creature');
  if (card.role === 'Summoner') {
    if (!owner.life.middle[laneIndex] && !owner.life.familiars[laneIndex]) {
      const choices = owner.hand.flatMap((held, handIndex) => held.type === 'Creature' && held.element === card.element ? [{ value: String(handIndex), label: held.name, detail: `${held.element} · Familiar for ${card.name}` }] : []);
      chooseEffect(owner, 'Summoner: choose a Familiar', 'This lane’s Life Zone is empty. Choose a same-element Creature to become this fighter’s Familiar.', choices, (handIndex) => {
        const [familiar] = owner.hand.splice(Number(handIndex), 1); familiar.attachedTo = card.instance; familiar.familiarOwner = card.name; owner.life.familiars[laneIndex] = familiar; playSpecialFx(owner, laneIndex, 'summoner', 'FAMILIAR · BOND', { generatedOnly: true }); render(); announceEffect(`${familiar.name} became ${card.name}’s Familiar.`);
      });
    }
  }
  if (card.id === 'ip-natsuki') {
    const adjacent = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]);
    const targets = adjacent.map((slot) => ({ value: slot, label: owner.lanes[slot].name, detail: `Lane ${slot + 1} · cannot be attacked while protected` }));
    chooseEffect(owner, 'Natsuki: protect an ally', 'Choose an adjacent ally. It cannot be targeted by attacks while Natsuki remains on the field, and it cannot defend its lane’s Life Zone.', targets, (slot) => { owner.lanes[slot].protectedBy = card.instance; render(); announceEffect(`${owner.lanes[slot].name} is protected by Natsuki.`); });
  }
  if (card.id === 'gummy') { playSpecialFx(owner, laneIndex, 'gummy', 'GUMMY · SWEET RECIPE', { generatedOnly: true }); drawMatching(owner, (candidate) => candidate.id === 'cooking', 'Cooking action'); }
}
function activateCroaktail(owner, laneIndex) {
  const card = owner.lanes[laneIndex];
  if (card?.id !== 'ip-croaktail' || card.abilityUsedTurn === match.turn) return;
  const targets = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.role === 'Brawler').map((slot) => ({ value: slot, label: owner.lanes[slot].name, detail: `Lane ${slot + 1} · +1 attack` }));
  chooseEffect(owner, 'Croaktail: give up its life', 'Choose an adjacent Brawler. Croaktail will be destroyed to give it +1 attack.', targets, (slot) => {
    const ally = owner.lanes[slot]; ally.attackBonus = (ally.attackBonus || 0) + 1; ally.attackBonusModifiers = [...(ally.attackBonusModifiers || []), { amount: 1, source: card.name }]; ally.attackBonusSources = [...(ally.attackBonusSources || []), card.name]; card.abilityUsedTurn = match.turn; destroyUnit(owner, laneIndex); render(); announceEffect(`${ally.name} gained 1 attack from Croaktail.`);
  });
}
function resolveDharmaRevives(owner) {
  const pending = match.pendingDharmaRevives.filter((entry) => entry.owner === owner);
  match.pendingDharmaRevives = match.pendingDharmaRevives.filter((entry) => entry.owner !== owner);
  for (const entry of pending) {
    match.eventActor = owner;
    const dharmaPresent = owner.lanes.some((unit) => unit?.instance === entry.dharmaInstance && unit.id === 'dharma');
    const reviveIndex = owner.destroyed.findIndex((unit) => unit.instance === entry.revivedInstance && ['Fighter', 'Creature'].includes(unit.type));
    const openLane = owner.lanes.findIndex((unit) => !unit);
    if (!dharmaPresent || reviveIndex < 0 || openLane < 0) {
      if (dharmaPresent && reviveIndex >= 0 && openLane < 0) announceEffect('Dharma could not revive the chosen card because all Fighter Zones are occupied.');
      continue;
    }
    const [revived] = owner.destroyed.splice(reviveIndex, 1);
    revived.ready = false; revived.attacked = false; revived.attacksThisTurn = 0;
    owner.lanes[openLane] = revived;
    match.eventActor = owner; match.eventSource = 'Dharma';
    render();
    logBattleEvent(`${battleSideName(owner)} Dharma revived ${revived.name} from the Pandemonium Zone.`, owner === match.player ? 'player' : 'enemy');
    animateSummon(owner, openLane, revived).then(() => triggerOnSummon(revived, owner, openLane));
  }
}
function activateIslandTurnEffects(owner) {
  owner.lanes.forEach((card, laneIndex) => {
    if (!card) return;
    if (card.id === 'wb-rebeccah') {
      const targets = owner.lanes.flatMap((unit, from) => unit?.id === 'wb-dimitri' ? [from - 1, from + 1].filter((to) => to >= 0 && to < 3 && !owner.lanes[to]).map((to) => ({ value: `${from}:${to}`, label: `Dimitri · lane ${from + 1} → ${to + 1}`, detail: 'Move to an adjacent free zone' })) : []);
      if (targets.length && card.abilityUsedTurn !== match.turn) chooseEffect(owner, 'Rebeccah: guide Dimitri', 'Once per turn, move Dimitri to an adjacent free lane.', targets, (key) => { const [from, to] = key.split(':').map(Number); if (moveWinterCard(owner, from, to)) card.abilityUsedTurn = match.turn; });
    }
    if (card.id === 'ip-jet') { card.attackBonus = (card.attackBonus || 0) + 1; card.attackBonusModifiers = [...(card.attackBonusModifiers || []), { amount: 1, source: card.name }]; card.attackBonusSources = [...(card.attackBonusSources || []), card.name]; announceEffect('Jet gained 1 attack.'); }
    if (card.id === 'ip-chase') {
      const targets = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.role === 'Brawler').map((slot) => ({ value: slot, label: owner.lanes[slot].name, detail: `Lane ${slot + 1} · +1 attack` }));
      if (targets.length) {
        const apply = (slot) => { const ally = owner.lanes[slot]; if (!ally) return; ally.attackBonus = (ally.attackBonus || 0) + 1; ally.attackBonusModifiers = [...(ally.attackBonusModifiers || []), { amount: 1, source: card.name }]; ally.attackBonusSources = [...(ally.attackBonusSources || []), card.name]; render(); announceEffect(`${ally.name} gained 1 attack from Chase.`); };
        if (owner.isAI) apply(targets[0].value); else chooseEffect(owner, 'Chase: boost a Brawler', 'Choose an adjacent Brawler to gain +1 attack.', targets, apply);
      }
    }
  });
}
function activateZoya(owner, laneIndex) {
  const zoya = owner.lanes[laneIndex];
  if (!zoya || zoya.id !== 'zoya' || zoya.abilityUsedTurn === match.turn) return;
  let candidates = [match.player, match.opponent].flatMap((side) => side.lanes.map((card, index) => card?.title === 'Academy' && !isEffectProtected(card) && !(owner.isAI && side === owner && card.id === 'zoya') ? { value: `${side === match.player ? 'p' : 'o'}:${index}`, label: card.name, detail: `Return from ${side === match.player ? 'your' : 'rival'} lane ${index + 1}` } : null).filter(Boolean));
  const canPlayAfterReturn = owner.isAI && !owner.lanes.some((card) => !card) && owner.hand.some((card) => card.type !== 'Action' && card.cost <= match.energy);
  if (canPlayAfterReturn) {
    const ownTargets = candidates.filter((choice) => choice.value.startsWith('o:')).sort((a, b) => owner.lanes[Number(a.value.split(':')[1])].attack - owner.lanes[Number(b.value.split(':')[1])].attack);
    if (ownTargets.length) candidates = [ownTargets[0], ...candidates.filter((choice) => choice !== ownTargets[0])];
  }
  chooseEffect(owner, 'Zoya: return an Academy card', 'Choose an Academy fighter on either field to return to its owner’s hand.', candidates, (key) => {
    const [sideKey, position] = key.split(':'); const side = sideKey === 'p' ? match.player : match.opponent; const target = side.lanes[Number(position)];
    if (target && returnFighterToHand(side, Number(position))) { playSpecialFx(owner, laneIndex, 'zoya', 'RETURN TO HAND'); zoya.abilityUsedTurn = match.turn; render(); }
  });
}
function activateSteepod(owner, laneIndex) {
  const card = owner.lanes[laneIndex]; if (!card || card.id !== 'wb-steepod' || card.abilityUsedTurn === match.turn) return;
  const choices = [laneIndex - 1, laneIndex + 1].filter((to) => to >= 0 && to < 3 && !owner.lanes[to]).map((to) => ({ value: to, label: `Move to lane ${to + 1}`, detail: 'Adjacent free Fighter Zone' }));
  chooseEffect(owner, 'Steepod: slip away', 'Move Steepod to an adjacent free lane once per turn.', choices, (to) => { if (moveWinterCard(owner, laneIndex, Number(to))) card.abilityUsedTurn = match.turn; });
}
function activateTopazDiamond(owner, laneIndex) {
  const card = owner.lanes[laneIndex]; if (!card || card.id !== 'wb-topaz-diamond' || card.abilityUsedTurn === match.turn) return;
  const choices = owner.lanes.flatMap((unit, from) => unit ? owner.lanes.flatMap((slot, to) => !slot ? [{ value: `${from}:${to}`, label: `${unit.name} · lane ${from + 1} → ${to + 1}`, detail: 'Move to an empty Fighter Zone' }] : []) : []);
  chooseEffect(owner, 'Topaz & Diamond: glide across the floor', 'Once per turn, move one of your fighters to any empty Fighter Zone.', choices, (key) => { const [from, to] = key.split(':').map(Number); if (moveWinterCard(owner, from, to)) card.abilityUsedTurn = match.turn; });
}
function activateSageape(instance) {
  const cardIndex = match.player.hand.findIndex((card) => card.instance === instance); if (cardIndex < 0) return;
  const targets = [match.player, match.opponent].flatMap((side) => side.lanes.flatMap((unit, from) => unit?.element === 'Glacial' ? side.lanes.flatMap((slot, to) => !slot && to !== from ? [{ value: `${side === match.player ? 'p' : 'o'}:${from}:${to}`, label: `${unit.name} · lane ${from + 1} → ${to + 1}`, detail: side === match.player ? 'Move your Glacial fighter' : 'Move rival Glacial fighter' }] : []) : []));
  chooseEffect(match.player, 'Sageape: shift the ice', 'Discard Sageape to move a Glacial fighter to another free Fighter Zone.', targets, (key) => { const [sideKey, from, to] = key.split(':'); const [discarded] = match.player.hand.splice(cardIndex, 1); match.player.destroyed.push(discarded); moveWinterCard(sideKey === 'p' ? match.player : match.opponent, Number(from), Number(to)); render(); announceEffect('Sageape was discarded to move a Glacial fighter.'); });
}
function maybeUseZoya(owner) { owner.lanes.forEach((card, index) => { if (card?.id === 'zoya' && card.abilityUsedTurn !== match.turn) activateZoya(owner, index); }); }
function collectLifeCard(owner, laneIndex, main = false) {
  const card = main ? owner.life.main : owner.life.middle[laneIndex];
  if (!card) return false;
  animateLifeShatter(owner, laneIndex, main);
  if (main) owner.life.main = null;
  else owner.life.middle[laneIndex] = null;
  owner.hand.push(card);
  return true;
}
function dealLifeHit(defender, laneIndex) {
  if (defender.life.middle[laneIndex]) { collectLifeCard(defender, laneIndex); return; }
  if (!defender.life.main || !allMiddleLifeGone(defender)) return;
  collectLifeCard(defender, -1, true);
  endMatch(defender === match.opponent);
}
function battle(attacker, index, from, target = { type: 'lane', index }) {
  const defender = from === match.player ? match.opponent : match.player;
  if (target.type === 'lane' && !canTargetLane(attacker, index, defender, target.index)) return;
  target = resolveAttackTarget(defender, target, index);
  const targetLane = target.type === 'lane' ? target.index : -1;
  const possibleTarget = targetLane >= 0 ? defender.lanes[targetLane] : null;
  const natsukiProtected = possibleTarget?.protectedBy && defender.lanes.some((unit) => unit?.instance === possibleTarget.protectedBy);
  const islandProtected = match.fieldCard?.id === 'ip-field' && possibleTarget?.title === 'Island Paradise';
  const opposing = natsukiProtected || islandProtected ? null : possibleTarget;
  if (target.type === 'life' && target.main && !canAttackMainLife(attacker, index, defender)) return;
  if (target.type === 'life' && !target.main && (attacker.role !== 'Shooter' || target.index !== index || !defender.life.middle[target.index])) return;
  match.eventActor = from; match.eventSource = attacker.name;
  const targetName = target.type === 'life' ? `${battleSideName(defender)}'s ${target.main ? 'Main Life' : `Life Zone ${target.index + 1}`}` : defender.lanes[targetLane]?.name || `${battleSideName(defender)}'s lane ${targetLane + 1}`;
  logBattleEvent(`${battleSideName(from)} ${attacker.name} attacked ${targetName}.`, from === match.player ? 'player' : 'enemy');
  attacker.attacked = true;
  if (attacker.npcAttackReserved) delete attacker.npcAttackReserved;
  else attacker.attacksThisTurn = (attacker.attacksThisTurn || 0) + 1;
  const attackPower = effectiveAttack(attacker, from, { attacking: true, targetIndex: targetLane });
  attacker.attacking = false; attacker.attackTargetIndex = null;
  if (target.type === 'life') {
    if (target.main) { collectLifeCard(defender, -1, true); endMatch(defender === match.opponent); }
    else collectLifeCard(defender, target.index);
    return;
  }
  if (!opposing) { dealLifeHit(defender, targetLane); return; }
  const defensePower = effectiveAttack(opposing, defender, { defending: true });
  const tie = attackPower === defensePower;
  const loseDefender = attackPower > defensePower || tie;
  const loseAttacker = attackPower < defensePower || tie;
  if (opposing?.id === 'ip-octospray') { attacker.attackBonus = (attacker.attackBonus || 0) - 1; attacker.attackBonusModifiers = [...(attacker.attackBonusModifiers || []), { amount: -1, source: opposing.name }]; attacker.attackBonusSources = [...(attacker.attackBonusSources || []), opposing.name]; announceEffect(`${attacker.name} loses 1 attack to Octospray.`); }
  if (opposing?.id === 'ww-sunnythorn' && loseDefender) { attacker.attackBonus = (attacker.attackBonus || 0) - 1; attacker.attackBonusSources = [...(attacker.attackBonusSources || []), opposing.name]; attacker.attackBonusModifiers = [...(attacker.attackBonusModifiers || []), { amount: -1, source: opposing.name }]; announceEffect(`${attacker.name} loses 1 attack to Sunnythorn.`); }
  if (attacker.id === 'ww-sunnythorn' && loseAttacker && opposing) { opposing.attackBonus = (opposing.attackBonus || 0) - 1; opposing.attackBonusSources = [...(opposing.attackBonusSources || []), attacker.name]; opposing.attackBonusModifiers = [...(opposing.attackBonusModifiers || []), { amount: -1, source: attacker.name }]; announceEffect(`${opposing.name} loses 1 attack to Sunnythorn.`); }
  if (loseDefender) {
    destroyUnit(defender, targetLane, true);
    if (attacker.id === 'ip-brody') { attacker.attackBonus = (attacker.attackBonus || 0) + 1; attacker.attackBonusModifiers = [...(attacker.attackBonusModifiers || []), { amount: 1, source: attacker.name }]; attacker.attackBonusSources = [...(attacker.attackBonusSources || []), attacker.name]; announceEffect('Brody gained 1 attack for destroying a card.'); }
    if (attacker.id === 'ip-floatbite') { const owner = from; const targets = [index - 1, index + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.role === 'Brawler' && owner.lanes[slot]?.element === 'Aqua').map((slot) => ({ value: slot, label: owner.lanes[slot].name, detail: `Lane ${slot + 1} · +1 attack` })); if (targets.length) chooseEffect(owner, 'Floatbite: tide of strength', 'Choose an adjacent Aqua Brawler to gain +1 attack.', targets, (slot) => { const ally = owner.lanes[slot]; ally.attackBonus = (ally.attackBonus || 0) + 1; ally.attackBonusModifiers = [...(ally.attackBonusModifiers || []), { amount: 1, source: attacker.name }]; ally.attackBonusSources = [...(ally.attackBonusSources || []), attacker.name]; render(); }); }
  }
  if (loseAttacker) { match.eventActor = defender; match.eventSource = opposing.name; destroyUnit(from, index, true); }
  if (tie) announceEffect(`Both fighters were destroyed in the ${attackPower}–${defensePower} clash.`);
}
let soundContext;
function playActionSfx(action) {
  const profiles = {
    'avatar-gem': { element:'Dark', boom:88, shimmer:1480, noise:520 }, 'mana-potion': { element:'Aqua', boom:0, shimmer:1760, noise:1850 },
    'health-potion': { element:'Solar', boom:0, shimmer:1260, noise:1150 }, cooking: { element:'Ignis', boom:125, shimmer:480, noise:720 },
    'locker-room': { element:'Terra', boom:95, shimmer:620, noise:420 }, 'drinking-tea': { element:'Glacial', boom:0, shimmer:2250, noise:2800 },
    'ww-planting': { element:'Terra', boom:140, shimmer:720, noise:560 }, 'academy-grounds': { element:'Mind', boom:100, shimmer:1560, noise:1200 },
    'ip-field': { element:'Aqua', boom:95, shimmer:1540, noise:1350 }, 'toy-store': { element:'Mind', boom:110, shimmer:1840, noise:1020 },
    'christmas-mall': { element:'Glacial', boom:85, shimmer:2100, noise:2450 },
  };
  const profile = profiles[action.id] || { element:action.element, boom:110, shimmer:1200, noise:900 };
  playSfx('special', profile.element);
  try {
    soundContext ??= new (window.AudioContext || window.webkitAudioContext)();
    if (soundContext.state === 'suspended') soundContext.resume();
    const now = soundContext.currentTime;
    const makeSweep = (type, start, end, duration, volume, delay = 0) => {
      const osc = soundContext.createOscillator(); const gain = soundContext.createGain();
      osc.type = type; osc.frequency.setValueAtTime(start, now + delay); osc.frequency.exponentialRampToValueAtTime(Math.max(35, end), now + delay + duration);
      gain.gain.setValueAtTime(.0001, now + delay); gain.gain.exponentialRampToValueAtTime(volume, now + delay + .012); gain.gain.exponentialRampToValueAtTime(.0001, now + delay + duration);
      osc.connect(gain); gain.connect(soundContext.destination); osc.start(now + delay); osc.stop(now + delay + duration + .02);
    };
    if (profile.boom) makeSweep('triangle', profile.boom, 38, .22, .105);
    makeSweep('sine', profile.shimmer, profile.shimmer * 1.45, .2, .035, .025);
    const duration = .23; const buffer = soundContext.createBuffer(1, Math.floor(soundContext.sampleRate * duration), soundContext.sampleRate); const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
    const noise = soundContext.createBufferSource(); const filter = soundContext.createBiquadFilter(); const gain = soundContext.createGain();
    noise.buffer = buffer; filter.type = 'bandpass'; filter.frequency.value = profile.noise; filter.Q.value = 1.4;
    gain.gain.setValueAtTime(.0001, now); gain.gain.exponentialRampToValueAtTime(.052, now + .018); gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
    noise.connect(filter); filter.connect(gain); gain.connect(soundContext.destination); noise.start(now); noise.stop(now + duration + .02);
  } catch (_) { /* Sound remains optional when a browser blocks Web Audio. */ }
}
document.addEventListener('pointerdown', () => {
  try { soundContext ??= new (window.AudioContext || window.webkitAudioContext)(); if (soundContext.state === 'suspended') soundContext.resume(); } catch (_) { /* Audio remains optional. */ }
}, { once: true });
function playSfx(kind, element = 'Mind') {
  try {
    soundContext ??= new (window.AudioContext || window.webkitAudioContext)();
    if (soundContext.state === 'suspended') soundContext.resume();
    const now = soundContext.currentTime;
    const profiles = {
      Ignis: ['sawtooth', 260, 55, 520, 1250], Glacial: ['sine', 1180, 260, 1880, 3100], Terra: ['triangle', 150, 48, 290, 440], Aer: ['triangle', 760, 180, 1210, 1750],
      Aqua: ['sine', 490, 75, 820, 920], Mind: ['triangle', 490, 120, 820, 2100], Dark: ['sawtooth', 90, 28, 140, 220], Solar: ['sine', 1050, 310, 1740, 2800],
    };
    const [wave, start, end, overtone, noiseTone] = profiles[element] || profiles.Mind;
    const length = kind === 'attack' ? .34 : kind === 'summon' ? .38 : kind === 'special' ? .26 : .22;
    [[wave, start, end, .11], ['sine', overtone, Math.max(45, end * 1.7), .045]].forEach(([type, from, to, volume], index) => {
      const osc = soundContext.createOscillator(); const gain = soundContext.createGain();
      const filter = soundContext.createBiquadFilter(); filter.type = index ? 'highpass' : 'lowpass'; filter.frequency.value = index ? 260 : 2400;
      osc.connect(filter); filter.connect(gain); gain.connect(soundContext.destination); osc.type = type;
      const delay = index ? .035 : 0; const lift = kind === 'summon' ? 1.7 : 1;
      osc.frequency.setValueAtTime(from * lift, now + delay); osc.frequency.exponentialRampToValueAtTime(Math.max(30, to * lift), now + length);
      gain.gain.setValueAtTime(.0001, now + delay); gain.gain.exponentialRampToValueAtTime(volume * (kind === 'summon' ? .8 : 1), now + delay + .025); gain.gain.exponentialRampToValueAtTime(.0001, now + length + .04);
      osc.start(now + delay); osc.stop(now + length + .05);
    });
    const noiseBuffer = soundContext.createBuffer(1, Math.floor(soundContext.sampleRate * .26), soundContext.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) noiseData[i] = (Math.random() * 2 - 1) * (1 - i / noiseData.length);
    const noise = soundContext.createBufferSource(); const filter = soundContext.createBiquadFilter(); const noiseGain = soundContext.createGain();
    noise.buffer = noiseBuffer; filter.type = 'bandpass'; filter.frequency.value = noiseTone; filter.Q.value = element === 'Glacial' ? 7 : 1.1;
    noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(soundContext.destination);
    noiseGain.gain.setValueAtTime(.0001, now); noiseGain.gain.exponentialRampToValueAtTime(kind === 'attack' ? .055 : .035, now + .035); noiseGain.gain.exponentialRampToValueAtTime(.0001, now + .25);
    noise.start(now + .012); noise.stop(now + .27);
  } catch (_) { /* Audio stays optional when a browser blocks it. */ }
}
function animateSummon(owner, index, card) {
  const side = owner === match.player ? 'player' : 'opponent';
  const lane = document.querySelector(`[data-side="${side}"][data-lane="${index}"]`);
  lane?.querySelector('.battle-card')?.classList.add('summon-pop');
  const glyphs = { Ignis: '✹', Glacial: '❄', Terra: '✿', Aer: '〰', Aqua: '◉', Mind: '✧', Dark: '◐', Solar: '☼' };
  if (lane) { const burst = document.createElement('div'); burst.className = `element-burst summon-burst effect-${card.element.toLowerCase()}`; burst.innerHTML = `<span>${glyphs[card.element] || '✧'}</span><i></i><i></i><i></i><i></i>`; lane.appendChild(burst); window.setTimeout(() => burst.remove(), 1050); }
  playSfx('summon', card.element);
  return new Promise((resolve) => window.setTimeout(resolve, 850));
}
function lifeTargetElement(side, index, main = false) {
  const player = side === 'player' ? match.player : match.opponent;
  if (main) return player.life.main ? document.querySelector(`#${side}-life .main-life-back .life-card`) : null;
  if (player.life.middle[index]) return document.querySelector(`#${side}-life .life-middle .life-card:nth-child(${index + 1})`);
  return null;
}
function animateAttack(from, index, done, target = { type: 'lane', index }) {
  const sourceSide = from === match.player ? 'player' : 'opponent';
  const targetSide = from === match.player ? 'opponent' : 'player';
  const defender = from === match.player ? match.opponent : match.player;
  const finalTarget = resolveAttackTarget(defender, target, index);
  const attacker = from.lanes[index];
  if (finalTarget.redirected) playSpecialFx(defender, finalTarget.index, 'shielder', 'SHIELDER · INTERCEPT');
  if (attacker?.role === 'Shooter' && finalTarget.type === 'life') playSpecialFx(from, index, 'shooter', 'SHOOTER · DIRECT HIT');
  if (attacker) {
    const reasons = attackBreakdown(attacker, from, { attacking: true, targetIndex: finalTarget.type === 'lane' ? finalTarget.index : -1 }).reasons;
    if (reasons.some((reason) => reason.startsWith('Enchanter'))) playSpecialFx(from, index, 'enchanter', 'ENCHANTER AURA');
    if (reasons.some((reason) => reason.startsWith('Brawler'))) playSpecialFx(from, index, 'brawler', 'BRAWLER · OPEN LANE');
    if (reasons.some((reason) => reason.startsWith('Blader'))) playSpecialFx(from, index, 'blader', 'BLADER · STRIKE');
    if (reasons.some((reason) => reason.startsWith('Academy allies'))) playSpecialFx(from, index, 'peppermint', 'ACADEMY ALLIES');
    if (reasons.some((reason) => reason.startsWith('Trickster'))) playSpecialFx(defender, finalTarget.type === 'lane' ? finalTarget.index : index, 'trickster', 'TRICKSTER · WEAKEN');
  }
  if (attacker) { attacker.attacking = true; attacker.attackTargetIndex = finalTarget.type === 'lane' ? finalTarget.index : -1; }
  render();
  const sourceLane = document.querySelector(`[data-side="${sourceSide}"][data-lane="${index}"]`);
  const targetLane = finalTarget.type === 'lane' ? document.querySelector(`[data-side="${targetSide}"][data-lane="${finalTarget.index}"]`) : null;
  const sourceCard = sourceLane?.querySelector('.battle-card');
  const targetCard = targetLane?.querySelector('.battle-card');
  const element = attacker?.element || 'Mind';
  const glyphs = { Ignis: '✹', Glacial: '❄', Terra: '✿', Aer: '〰', Aqua: '◉', Mind: '✧', Dark: '◐', Solar: '☼' };
  sourceCard?.classList.add(from === match.player ? 'attack-lunge-up' : 'attack-lunge-down');
  targetCard?.classList.add('damage-shake');
  const impact = targetCard || lifeTargetElement(targetSide, finalTarget.index, !!finalTarget.main);
  impact?.classList.add(targetCard ? 'impact-glow' : 'life-hit');
  const effectHost = targetCard?.parentElement || impact;
  if (effectHost) { const burst = document.createElement('div'); burst.className = `element-burst effect-${element.toLowerCase()}`; burst.innerHTML = `<span>${glyphs[element] || '✧'}</span><i></i><i></i><i></i><i></i>`; effectHost.appendChild(burst); window.setTimeout(() => burst.remove(), 1050); }
  if (from === match.opponent) document.getElementById('phase-label').textContent = 'RIVAL ATTACK';
  playSfx('attack', element);
  window.setTimeout(() => {
    const hitPlayer = from === match.player ? match.opponent : match.player;
    const hadTarget = finalTarget.type === 'lane' && !!hitPlayer.lanes[finalTarget.index];
    done(target);
    playSfx(hadTarget ? 'impact' : 'life', element);
    render();
  }, 740);
}
function npcAttackTarget(card, index, defender) {
  if (canAttackMainLife(card, index, defender)) return { type: 'life', index, main: true };
  if (card.role === 'Shooter') {
    if (defender.life.middle[index]) return { type: 'life', index };
    const adjacent = [index - 1, index + 1].filter((lane) => lane >= 0 && lane < 3 && defender.lanes[lane]);
    const targetLane = adjacent.find((lane) => { const finalTarget = resolveAttackTarget(defender, { type: 'lane', index: lane }, index); const unit = defender.lanes[finalTarget.index]; const undefended = unit?.protectedBy && defender.lanes.some((ally) => ally?.instance === unit.protectedBy) || match.fieldCard?.id === 'ip-field' && unit?.title === 'Island Paradise'; return !unit || undefended || effectiveAttack(card, match.opponent, { attacking: true, targetIndex: finalTarget.index }) >= effectiveAttack(unit, defender, { defending: true }); });
    return targetLane === undefined ? null : { type: 'lane', index: targetLane };
  }
  if (!defender.lanes[index]) {
    if (hasLifeTarget(defender, index, card)) return { type: 'lane', index };
    return null;
  }
  const finalTarget = resolveAttackTarget(defender, { type: 'lane', index }, index); const unit = defender.lanes[finalTarget.index];
  const undefended = unit?.protectedBy && defender.lanes.some((ally) => ally?.instance === unit.protectedBy) || match.fieldCard?.id === 'ip-field' && unit?.title === 'Island Paradise';
  if (unit && !undefended && effectiveAttack(card, match.opponent, { attacking: true, targetIndex: finalTarget.index }) < effectiveAttack(unit, defender, { defending: true })) return null;
  return { type: 'lane', index };
}
function runNpcAttacks(index = 0) {
  if (match.over) return;
  let target = null;
  while (index < 3) {
    const card = match.opponent.lanes[index];
    if (!canCardAttack(card)) { index++; continue; }
    target = npcAttackTarget(card, index, match.player);
    if (!target) { index++; continue; }
    break;
  }
  if (index >= 3) { window.setTimeout(startPlayerTurn, 350); return; }
  const card = match.opponent.lanes[index];
  card.attacked = true;
  card.attacksThisTurn = (card.attacksThisTurn || 0) + 1;
  card.npcAttackReserved = true;
  animateAttack(match.opponent, index, (finalTarget) => battle(card, index, match.opponent, finalTarget), target);
  window.setTimeout(() => runNpcAttacks(card.id === 'ip-coyote' && (card.attacksThisTurn || 0) < 2 ? index : index + 1), 980);
}
function rivalTurn() {
  if (match.active !== 'transition' || match.over) return;
  logBattleEvent('Enemy turn began.', 'enemy');
  match.active = 'opponent'; match.drawn = false;
  if (match.secondPlayerBonusPending) { match.energy = match.maxEnergy + 1; match.secondPlayerBonusPending = false; }
  else match.energy = match.maxEnergy;
  match.turnEnergyCap = match.energy;
  drawCard(match.opponent);
  match.opponent.lanes.forEach((card) => { if (card) { card.skipAttackThisTurn = !!card.skipAttackNext; card.skipAttackNext = false; card.ready = true; card.attacked = false; card.attacksThisTurn = 0; } });
  resolveDharmaRevives(match.opponent);
  activateIslandTurnEffects(match.opponent);
  activateChristmasMall(match.opponent);
  maybeUseZoya(match.opponent);
  const open = match.opponent.lanes.map((card, i) => card ? -1 : i).filter((i) => i >= 0);
  let summoned = null; let summonedLane = -1;
  const toyStore = match.opponent.hand.find((card) => card.id === 'toy-store' && card.cost <= match.energy);
  const islandField = match.opponent.hand.find((card) => card.id === 'ip-field' && card.cost <= match.energy);
  const cotton = match.opponent.hand.find((card) => card.id === 'peppermint-ally');
  if (toyStore && match.fieldCard?.id !== 'toy-store') activateAction(match.opponent, toyStore.instance);
  else if (islandField && match.fieldCard?.id !== 'ip-field') activateAction(match.opponent, islandField.instance);
  else if (cotton && match.fieldCard?.id !== 'academy-grounds') useCotton(match.opponent, cotton.instance);
  const cooking = match.opponent.hand.find((card) => card.id === 'cooking' && card.cost <= match.energy && match.opponent.destroyed.some((held) => held.type === 'Fighter' || held.type === 'Creature'));
  if (cooking) useCooking(match.opponent, cooking.instance);
  const planting = match.opponent.hand.find((card) => card.id === 'ww-planting' && card.cost <= match.energy && match.opponent.lanes.some((unit) => !unit) && (match.opponent.deck.some((unit) => unit.title === 'Vegcritter') || match.opponent.destroyed.some((unit) => unit.title === 'Vegcritter')));
  if (planting) usePlanting(match.opponent, planting.instance);
  const avatarGem = match.opponent.hand.find((card) => card.id === 'avatar-gem' && card.cost <= match.energy && match.opponent.lanes.some((unit) => unit && match.opponent.transformationDeck.some((transform) => transform.name === unit.name)));
  if (avatarGem) useAvatarGem(match.opponent, avatarGem.instance);
  const medusaIndex = match.opponent.lanes.findIndex((unit) => unit?.id === 'ww-medusa' && unit.abilityUsedTurn !== match.turn);
  if (medusaIndex >= 0 && match.energy >= 1 && match.opponent.deck.length) activateMedusa(match.opponent, medusaIndex);
  const availableEnergy = match.energy;
  const unitPlayable = match.opponent.hand.filter((card) => card.type !== 'Action' && playCost(match.opponent, card) <= availableEnergy && canSummonCard(match.opponent, card)).sort((a, b) => playCost(match.opponent, a) - playCost(match.opponent, b));
  if (open.length && unitPlayable.length) { summoned = unitPlayable[unitPlayable.length - 1]; match.opponent.hand.splice(match.opponent.hand.indexOf(summoned), 1); match.energy -= playCost(match.opponent, summoned); summonedLane = open[Math.floor(Math.random() * open.length)]; match.opponent.lanes[summonedLane] = summoned; }
  render();
  if (summoned) animateSummon(match.opponent, summonedLane, summoned).then(() => triggerOnSummon(summoned, match.opponent, summonedLane));
  if (!match.over) window.setTimeout(() => runNpcAttacks(), summoned ? 1050 : 250);
}
function startPlayerTurn() {
  match.turn++;
  logBattleEvent('Your turn began.', 'player');
  match.active = 'player'; match.drawn = false; match.maxEnergy = Math.min(10, match.maxEnergy + 1); match.energy = match.maxEnergy; match.turnEnergyCap = match.maxEnergy;
  match.player.lanes.forEach((card) => { if (card) { card.skipAttackThisTurn = !!card.skipAttackNext; card.skipAttackNext = false; card.ready = true; card.attacked = false; card.attacksThisTurn = 0; } });
  resolveDharmaRevives(match.player);
  activateIslandTurnEffects(match.player);
  drawCard(match.player); match.drawn = true; render();
}
function endPlayerTurn() { if (match.active !== 'player' || match.over || match.attackResolving) return; match.active = 'transition'; match.attackMode = false; match.attackerLane = null; match.selected = null; render(); window.setTimeout(rivalTurn, 500); }
function endMatch(won) {
  match.over = true;
  document.getElementById('result-title').textContent = won ? 'Victory!' : 'The rival wins';
  document.getElementById('result-copy').textContent = won ? 'You broke through the rival’s last life card.' : 'Your main life was broken. Give it another try.';
  document.getElementById('result-dialog').showModal();
}
function giveUp() {
  if (!match.player || match.over || match.attackResolving) return;
  match.over = true;
  match.attackMode = false;
  match.attackerLane = null;
  document.getElementById('result-title').textContent = 'Battle abandoned';
  document.getElementById('result-copy').textContent = 'You gave up. Choose Play Again to start a fresh battle.';
  document.getElementById('result-dialog').showModal();
}
function launchPlayerAttack(target) {
  const sourceIndex = match.attackerLane; const attacker = match.player.lanes[sourceIndex];
  if (!canCardAttack(attacker) || match.attackResolving) return;
  match.attackResolving = true;
  attacker.attacked = true;
  match.attackMode = true;
  match.attackerLane = null;
  animateAttack(match.player, sourceIndex, (finalTarget) => {
    battle(attacker, sourceIndex, match.player, finalTarget);
    match.attackResolving = false;
    if (match.over || match.active !== 'player') { match.attackMode = false; match.attackerLane = null; }
    else {
      match.attackMode = true;
      const queued = match.attackerLane === null ? null : match.player.lanes[match.attackerLane];
      if (!canCardAttack(queued) || !canAttackLane(queued, match.attackerLane, match.opponent)) match.attackerLane = null;
    }
    render();
  }, target);
}
let pendingRedirectAttack = null;
function requestPlayerAttack(target) {
  const sourceIndex = match.attackerLane;
  if (sourceIndex === null) return;
  const intercepted = resolveAttackTarget(match.opponent, target, sourceIndex);
  if (!intercepted.redirected) { launchPlayerAttack(target); return; }
  const shield = match.opponent.lanes[intercepted.index];
  const originalTarget = intercepted.redirectedFrom;
  const intendedCard = originalTarget.type === 'lane' ? match.opponent.lanes[originalTarget.index] : null;
  const intendedLabel = originalTarget.type === 'life' ? (originalTarget.main ? 'Main Life' : `Life Zone ${originalTarget.index + 1}`) : intendedCard ? `${intendedCard.name} in lane ${originalTarget.index + 1}` : `the open lane ${originalTarget.index + 1}`;
  document.getElementById('redirect-copy').textContent = `${intendedLabel} is protected by ${shield?.name || 'the Shielder'} in lane ${intercepted.index + 1}. The attack will be redirected to the Shielder. Do you still want to attack?`;
  pendingRedirectAttack = target;
  document.getElementById('redirect-dialog').showModal();
}
document.getElementById('redirect-confirm').addEventListener('click', () => {
  const target = pendingRedirectAttack;
  pendingRedirectAttack = null;
  document.getElementById('redirect-dialog').close();
  if (target) launchPlayerAttack(target);
});
const cancelRedirect = () => {
  pendingRedirectAttack = null;
  document.getElementById('redirect-dialog').close();
};
document.getElementById('redirect-cancel').addEventListener('click', cancelRedirect);
document.getElementById('redirect-cancel-action').addEventListener('click', cancelRedirect);
function selectAttackerFromClick(index) {
  const card = match.player?.lanes[index];
  if (match.active !== 'player' || match.over || !canCardAttack(card) || !canAttackLane(card, index, match.opponent)) return false;
  match.attackMode = true;
  match.attackerLane = index;
  match.selected = null;
  render();
  return true;
}
document.addEventListener('click', (event) => {
  if (Date.now() < suppressHandClickUntil && event.target.closest('.hand-card, .lane, .battle-card')) { event.preventDefault(); return; }
  const tooltipUse = event.target.closest('[data-tooltip-use]');
  if (tooltipUse) { const id = tooltipUse.dataset.tooltipUse; hideCardTooltip(); match.attackMode = false; match.attackerLane = null; match.selected = null; activateAction(match.player, id); return; }
  const tooltipSummon = event.target.closest('[data-tooltip-summon]');
  if (tooltipSummon) { const id = tooltipSummon.dataset.tooltipSummon; const lane = Number(tooltipSummon.dataset.lane); hideCardTooltip(); playCard(id, lane); return; }
  if (event.target.closest('#card-tooltip') && !event.target.closest('.tooltip-dismiss')) return;
  if (isTouchInput()) {
    const tooltip = document.getElementById('card-tooltip');
    if (event.target.closest('.tooltip-dismiss')) { touchCardDetailsArmed = tooltip.dataset.previewCard || null; hideCardTooltip(); return; }
    if (event.target.closest('#card-tooltip')) return;
    const libraryCard = event.target.closest('.library-card');
    if (libraryCard) {
      document.querySelectorAll('.library-card.mobile-art-open').forEach((card) => { if (card !== libraryCard) card.classList.remove('mobile-art-open'); });
      libraryCard.classList.toggle('mobile-art-open');
      hideCardTooltip();
      return;
    }
    const preview = event.target.closest('[data-card-preview]');
    if (preview && !event.target.closest('button')) {
      if (touchCardDetailsArmed === preview.dataset.cardPreview) {
        touchCardDetailsArmed = null;
        hideCardTooltip();
      } else if (!tooltip.classList.contains('visible') || tooltip.dataset.previewCard !== preview.dataset.cardPreview) {
        touchCardDetailsArmed = null;
        const card = [match.player, match.opponent].filter(Boolean).flatMap((owner) => [...owner.hand, ...owner.lanes, ...owner.destroyed]).find((item) => item?.instance === preview.dataset.cardPreview);
        showCardTooltip(card, event);
        return;
      } else {
        touchCardDetailsArmed = null;
        hideCardTooltip();
      }
    } else if (tooltip.classList.contains('visible')) hideCardTooltip();
    document.querySelectorAll('.library-card.mobile-art-open').forEach((card) => card.classList.remove('mobile-art-open'));
  }
  const libraryTab = event.target.closest('[data-library-deck]');
  if (libraryTab) { renderCardLibrary(libraryTab.dataset.libraryDeck); return; }
  const inspectedZone = event.target.closest('.inspect-zone');
  if (inspectedZone) { showZoneCards(inspectedZone.dataset.zoneSide, inspectedZone.dataset.zoneKind); return; }
  const abilityButton = event.target.closest('.card-ability-trigger');
  if (abilityButton) { const lane = abilityButton.closest('.lane'); if (lane) { const index = Number(lane.dataset.lane); if (abilityButton.dataset.ability === 'ww-medusa') activateMedusa(match.player, index); else if (abilityButton.dataset.ability === 'ip-croaktail') activateCroaktail(match.player, index); else if (abilityButton.dataset.ability === 'wb-steepod') activateSteepod(match.player, index); else if (abilityButton.dataset.ability === 'wb-topaz-diamond') activateTopazDiamond(match.player, index); else activateZoya(match.player, index); } return; }
  const fieldAbilityButton = event.target.closest('[data-field-ability="christmas-mall"]');
  if (fieldAbilityButton) { activateChristmasMall(match.player); return; }
  const handAbility = event.target.closest('[data-hand-ability="wb-sageape"]');
  if (handAbility) { const card = handAbility.closest('.hand-card'); if (card) activateSageape(card.dataset.id); return; }
  const mainLife = event.target.closest('.life-card[data-life-side="opponent"][data-life-main="true"]');
  if (mainLife && match.active === 'player' && match.attackMode && !match.attackResolving && match.attackerLane !== null) {
    const attacker = match.player.lanes[match.attackerLane];
    if (canAttackMainLife(attacker, match.attackerLane, match.opponent)) requestPlayerAttack({ type: 'life', index: match.attackerLane, main: true });
    return;
  }
  const directLife = event.target.closest('.life-card[data-life-side="opponent"][data-life-index]');
  if (directLife && match.active === 'player' && match.attackMode && !match.attackResolving && match.attackerLane !== null) {
    const attacker = match.player.lanes[match.attackerLane];
    if (attacker?.role === 'Shooter' && Number(directLife.dataset.lifeIndex) === match.attackerLane && match.opponent.life.middle[Number(directLife.dataset.lifeIndex)]) {
      requestPlayerAttack({ type: 'life', index: Number(directLife.dataset.lifeIndex) });
    }
    return;
  }
  const fieldCard = event.target.closest('.battle-card');
  const fieldLane = fieldCard?.closest('.lane');
  if (fieldLane?.dataset.side === 'player') {
    selectAttackerFromClick(Number(fieldLane.dataset.lane));
    return;
  }
  const handCard = event.target.closest('.hand-card');
  if (handCard) { if (match.attackMode) { match.attackMode = false; match.attackerLane = null; } const card = match.player.hand.find((c) => c.instance === handCard.dataset.id); if (card && card.type !== 'Action' && !canSummonCard(match.player, card)) { announceEffect('Vishnu can only be summoned while Peppermint is in your Fighter Zone.'); return; } if (card?.type === 'Action') { activateAction(match.player, card.instance); return; } if (card?.id === 'peppermint-ally' && match.fieldCard?.id !== 'academy-grounds') { useCotton(match.player, card.instance); return; } if (card && playCost(match.player, card) <= match.energy) match.selected = match.selected === card.instance ? null : card.instance; render(); return; }
  const lane = event.target.closest('.lane');
  if (lane && match.attackMode && lane.dataset.side === 'player') {
    selectAttackerFromClick(Number(lane.dataset.lane));
    return;
  }
  if (lane && match.attackMode && !match.attackResolving && lane.dataset.side === 'opponent' && match.attackerLane !== null) {
    const index = Number(lane.dataset.lane); const sourceIndex = match.attackerLane; const attacker = match.player.lanes[sourceIndex];
    if (canTargetLane(attacker, sourceIndex, match.opponent, index)) requestPlayerAttack({ type: 'lane', index });
    return;
  }
  if (lane && lane.dataset.side === 'player' && match.selected) playCard(match.selected, Number(lane.dataset.lane));
});
document.getElementById('attack-button').addEventListener('click', () => { if (match.active !== 'player' || match.attackResolving) return; match.selected = null; match.attackMode = !match.attackMode; match.attackerLane = null; render(); });
document.getElementById('end-turn').addEventListener('click', endPlayerTurn);
document.getElementById('give-up').addEventListener('click', giveUp);
let handDragCandidate = null;
let activeCardDrag = null;
let attackDragCandidate = null;
let activeAttackDrag = null;
let suppressHandClickUntil = 0;
function clearCardDrag() {
  document.querySelectorAll('.drag-drop-target,.drag-action-target').forEach((node) => node.classList.remove('drag-drop-target', 'drag-action-target'));
  document.querySelectorAll('.hand-card.dragging').forEach((node) => node.classList.remove('dragging'));
  activeCardDrag?.ghost?.remove();
  document.body.classList.remove('card-dragging');
  activeCardDrag = null;
  handDragCandidate = null;
}
function getAttackDropAt(x, y, attacker, sourceIndex) {
  const under = document.elementFromPoint(x, y);
  const enemyLane = under?.closest('.lane[data-side="opponent"]');
  if (enemyLane) {
    const index = Number(enemyLane.dataset.lane);
    if (canTargetLane(attacker, sourceIndex, match.opponent, index)) return { target: { type: 'lane', index }, element: enemyLane, valid: true };
    return { element: enemyLane, valid: false };
  }
  const mainLife = under?.closest('.life-card[data-life-side="opponent"][data-life-main="true"]');
  if (mainLife) return canAttackMainLife(attacker, sourceIndex, match.opponent) ? { target: { type: 'life', index: sourceIndex, main: true }, element: mainLife, valid: true } : { element: mainLife, valid: false };
  const lifeCard = under?.closest('.life-card[data-life-side="opponent"][data-life-index]');
  if (lifeCard) {
    const index = Number(lifeCard.dataset.lifeIndex);
    const valid = attacker.role === 'Shooter' && index === sourceIndex && Boolean(match.opponent.life.middle[index]);
    return valid ? { target: { type: 'life', index }, element: lifeCard, valid: true } : { element: lifeCard, valid: false };
  }
  return null;
}
function clearAttackDrag() {
  document.querySelectorAll('.attack-drop-target,.attack-life-target').forEach((node) => node.classList.remove('attack-drop-target', 'attack-life-target'));
  document.querySelectorAll('.battle-card.dragging-attacker').forEach((node) => node.classList.remove('dragging-attacker'));
  activeAttackDrag?.ghost?.remove();
  document.body.classList.remove('card-dragging');
  activeAttackDrag = null;
  attackDragCandidate = null;
}
document.addEventListener('pointerdown', (event) => {
  const fieldCard = event.target.closest('.battle-card');
  const lane = fieldCard?.closest('.lane[data-side="player"]');
  if (!fieldCard || !lane || event.target.closest('button') || event.button === 2 || match.active !== 'player' || match.over || match.attackResolving) return;
  const index = Number(lane.dataset.lane);
  const card = match.player.lanes[index];
  if (!canCardAttack(card) || !canAttackLane(card, index, match.opponent)) return;
  hideCardTooltip();
  attackDragCandidate = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, card, index, element: fieldCard };
});
document.addEventListener('pointermove', (event) => {
  if (!attackDragCandidate || event.pointerId !== attackDragCandidate.pointerId) return;
  const dx = event.clientX - attackDragCandidate.x;
  const dy = event.clientY - attackDragCandidate.y;
  if (!activeAttackDrag) {
    if (Math.hypot(dx, dy) < 8) return;
    const ghost = attackDragCandidate.element.cloneNode(true);
    ghost.classList.add('attack-drag-ghost');
    document.body.append(ghost);
    attackDragCandidate.element.classList.add('dragging-attacker');
    document.body.classList.add('card-dragging');
    try { attackDragCandidate.element.setPointerCapture(event.pointerId); } catch {}
    activeAttackDrag = { ...attackDragCandidate, ghost, targetElement: null };
  }
  event.preventDefault();
  activeAttackDrag.ghost.style.left = `${event.clientX}px`;
  activeAttackDrag.ghost.style.top = `${event.clientY}px`;
  activeAttackDrag.targetElement?.classList.remove('attack-drop-target', 'attack-life-target');
  activeAttackDrag.targetElement = null;
  const drop = getAttackDropAt(event.clientX, event.clientY, activeAttackDrag.card, activeAttackDrag.index);
  if (drop?.element) {
    activeAttackDrag.targetElement = drop.element;
    drop.element.classList.add(drop.valid ? (drop.target.type === 'lane' ? 'attack-drop-target' : 'attack-life-target') : 'attack-life-target');
  }
}, { passive: false });
document.addEventListener('pointerup', (event) => {
  if (!attackDragCandidate || event.pointerId !== attackDragCandidate.pointerId) return;
  if (!activeAttackDrag) { attackDragCandidate = null; return; }
  const drag = activeAttackDrag;
  const drop = getAttackDropAt(event.clientX, event.clientY, drag.card, drag.index);
  suppressHandClickUntil = Date.now() + 450;
  clearAttackDrag();
  if (!drop?.valid || match.active !== 'player' || match.attackResolving || match.player.lanes[drag.index] !== drag.card || !canCardAttack(drag.card)) return;
  match.attackMode = true;
  match.attackerLane = drag.index;
  match.selected = null;
  requestPlayerAttack(drop.target);
});
document.addEventListener('pointercancel', (event) => { if (attackDragCandidate?.pointerId === event.pointerId) clearAttackDrag(); });
document.addEventListener('pointerdown', (event) => {
  const handCard = event.target.closest('.hand-card');
  if (!handCard || event.target.closest('button') || event.button === 2 || match.active !== 'player' || match.over) return;
  const card = match.player.hand.find((item) => item.instance === handCard.dataset.id);
  if (!card || card.cost > match.energy) return;
  hideCardTooltip();
  handDragCandidate = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, card, element: handCard };
});
document.addEventListener('pointermove', (event) => {
  if (!handDragCandidate || event.pointerId !== handDragCandidate.pointerId) return;
  const dx = event.clientX - handDragCandidate.x;
  const dy = event.clientY - handDragCandidate.y;
  if (!activeCardDrag) {
    if (Math.hypot(dx, dy) < 9) return;
    if (isTouchInput() && Math.abs(dx) > Math.abs(dy) * 1.15) { handDragCandidate = null; return; }
    const ghost = handDragCandidate.element.cloneNode(true);
    ghost.classList.add('drag-ghost');
    document.body.append(ghost);
    handDragCandidate.element.classList.add('dragging');
    document.body.classList.add('card-dragging');
    try { handDragCandidate.element.setPointerCapture(event.pointerId); } catch {}
    activeCardDrag = { ...handDragCandidate, ghost };
  }
  event.preventDefault();
  activeCardDrag.ghost.style.left = `${event.clientX}px`;
  activeCardDrag.ghost.style.top = `${event.clientY}px`;
  document.querySelectorAll('.drag-drop-target,.drag-action-target').forEach((node) => node.classList.remove('drag-drop-target', 'drag-action-target'));
  const under = document.elementFromPoint(event.clientX, event.clientY);
  if (activeCardDrag.card.type === 'Action') {
    const board = under?.closest('#player-board, .player-life, .player-field-zone, .battlefield');
    if (board) board.classList.add('drag-action-target');
  } else {
    const lane = under?.closest('.lane[data-side="player"]');
    const index = lane ? Number(lane.dataset.lane) : -1;
    if (lane && index >= 0 && !match.player.lanes[index] && canSummonCard(match.player, activeCardDrag.card)) lane.classList.add('drag-drop-target');
  }
}, { passive: false });
document.addEventListener('pointerup', (event) => {
  if (!handDragCandidate || event.pointerId !== handDragCandidate.pointerId) return;
  if (activeCardDrag) {
    const drag = activeCardDrag;
    const under = document.elementFromPoint(event.clientX, event.clientY);
    const lane = under?.closest('.lane[data-side="player"]');
    const laneIndex = lane ? Number(lane.dataset.lane) : -1;
    const overBoard = !!under?.closest('#player-board, .player-life, .player-field-zone, .battlefield, .lane');
    suppressHandClickUntil = Date.now() + 450;
    clearCardDrag();
    if (drag.card.type === 'Action' && overBoard) {
      match.attackMode = false; match.attackerLane = null; match.selected = null;
      activateAction(match.player, drag.card.instance);
    } else if (laneIndex >= 0 && !match.player.lanes[laneIndex]) playCard(drag.card.instance, laneIndex);
  } else handDragCandidate = null;
});
document.addEventListener('pointercancel', (event) => { if (handDragCandidate?.pointerId === event.pointerId) clearCardDrag(); });
document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.inspect-zone')) { event.preventDefault(); showZoneCards(event.target.dataset.zoneSide, event.target.dataset.zoneKind); }
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.battle-card[role="button"]')) { event.preventDefault(); selectAttackerFromClick(Number(event.target.dataset.lane)); }
});
document.getElementById('close-zone').addEventListener('click', () => document.getElementById('zone-dialog').close());
document.addEventListener('pointerover', (event) => {
  if (isTouchInput() || activeCardDrag || handDragCandidate || activeAttackDrag || attackDragCandidate) { if (activeCardDrag || activeAttackDrag) hideCardTooltip(); return; }
  const preview = event.target.closest('[data-card-preview]');
  if (!preview) return;
  if (event.relatedTarget?.closest?.('[data-card-preview]') === preview) return;
  const card = [match.player, match.opponent].flatMap((owner) => [...owner.hand, ...owner.lanes, ...owner.destroyed]).find((item) => item?.instance === preview.dataset.cardPreview);
  showCardTooltip(card, event);
});
document.addEventListener('pointermove', (event) => { if (activeCardDrag || activeAttackDrag) { hideCardTooltip(); return; } if (!isTouchInput() && !event.target.closest('#card-tooltip')) positionCardTooltip(event); });
document.addEventListener('pointerout', (event) => {
  if (isTouchInput()) return;
  const preview = event.target.closest('[data-card-preview]');
  const tooltip = document.getElementById('card-tooltip');
  const related = event.relatedTarget;
  if (event.target.closest('#card-tooltip')) {
    if (related?.closest?.('#card-tooltip')) return;
    if (related?.closest?.('[data-card-preview]')?.dataset.cardPreview === tooltip.dataset.previewCard) return;
    hideCardTooltip(); return;
  }
  if (preview && !related?.closest?.('[data-card-preview]') && !related?.closest?.('#card-tooltip')) hideCardTooltip();
});
document.getElementById('effect-options').addEventListener('click', (event) => {
  const button = event.target.closest('[data-choice]');
  if (!button || !pendingEffectChoice) return;
  const choice = chooseEffect.choices[Number(button.dataset.choice)]; const callback = pendingEffectChoice;
  pendingEffectChoice = null; document.getElementById('effect-dialog').close(); callback(choice.value);
});
document.getElementById('close-effect').addEventListener('click', () => { pendingEffectChoice = null; document.getElementById('effect-dialog').close(); });
document.getElementById('rules-button').addEventListener('click', () => document.getElementById('rules-dialog').showModal());
document.getElementById('card-library-button').addEventListener('click', () => showCardLibrary());
document.getElementById('close-card-library').addEventListener('click', () => document.getElementById('card-library-dialog').close());
document.getElementById('close-rules').addEventListener('click', () => document.getElementById('rules-dialog').close());
document.getElementById('element-guide-button').addEventListener('click', () => document.getElementById('element-guide-dialog').showModal());
document.getElementById('close-element-guide').addEventListener('click', () => document.getElementById('element-guide-dialog').close());
document.querySelectorAll('[data-player-deck]').forEach((button) => button.addEventListener('click', () => { selectedPlayerDeck = button.dataset.playerDeck; syncDeckPicker(); }));
document.querySelectorAll('[data-rival-deck]').forEach((button) => button.addEventListener('click', () => { selectedRivalDeck = button.dataset.rivalDeck; syncDeckPicker(); }));
document.getElementById('start-battle').addEventListener('click', () => { document.getElementById('deck-select-dialog').close(); beginMatch(selectedPlayerDeck, selectedRivalDeck); });
document.getElementById('deck-select-dialog').addEventListener('cancel', (event) => event.preventDefault());
document.getElementById('restart').addEventListener('click', () => { document.getElementById('result-dialog').close(); showDeckSelect(); });
function applyGameTerminology(root = document.body) {
  const update = (value) => String(value)
    .replace(/\bdestroyed cards zone\b/gi, 'Pandemonium Zone')
    .replace(/\bdestroyed zone\b/gi, 'Pandemonium Zone')
    .replace(/\bdestroyed cards\b/gi, 'Pandemonium Zone')
    .replace(/\btransformation deck\b/gi, 'Ascendance Deck')
    .replace(/\btransform deck\b/gi, 'Ascendance Deck')
    .replace(/\bspirit\b/gi, 'Dark')
    .replace(/\benergy\b/gi, 'Mana')
    .replace(/\bmana\b/gi, 'Mana');
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) { const node = walker.currentNode; const next = update(node.nodeValue); if (next !== node.nodeValue) node.nodeValue = next; }
  root.querySelectorAll?.('[title],[aria-label],[alt]').forEach((element) => ['title', 'aria-label', 'alt'].forEach((attribute) => {
    const current = element.getAttribute(attribute); if (current) { const next = update(current); if (next !== current) element.setAttribute(attribute, next); }
  }));
}
applyGameTerminology();
new MutationObserver(() => applyGameTerminology()).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['title', 'aria-label', 'alt'] });
showDeckSelect();
