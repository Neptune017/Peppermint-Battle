const cardLibrary = [
  { id: 'academy-coyote', title: 'Academy', name: 'Coyote', cost: 3, attack: 3, element: 'Mind', role: 'Brawler', art: 'assets/cards/AcademyCoyote.webp', ability: 'On summon, draw an Academy Brawler from your deck.' },
  { id: 'peppermint', title: 'Academy', name: 'Peppermint', cost: 5, attack: 5, element: 'Mind', role: 'Trickster', art: 'assets/cards/AcademyPeppermint.webp?v=20261120bm', ability: '+1 attack for each adjacent ally Academy card.' },
  { id: 'aemi', title: 'Academy', name: 'Aemi', cost: 2, attack: 2, element: 'Ignis', role: 'Shooter', art: 'assets/cards/AcademyAemi.webp?v=20261127-aemi-details', webpCrops: true, ability: 'Draw an Academy card with a different element.' },
  { id: 'kage', title: 'Academy', name: 'Kage', cost: 3, attack: 3, element: 'Dark', role: 'Blader', art: 'assets/cards/AcademyKage.webp', ability: 'Draw a Zoya card when destroyed.' },
  { id: 'ryota', title: 'Academy', name: 'Ryota', cost: 3, attack: 2, element: 'Solar', role: 'Shooter', art: 'assets/cards/AcademyRyota.webp', ability: 'Discard a card to destroy a fighter.' },
  { id: 'zoya', title: 'Academy', name: 'Zoya', cost: 5, attack: 4, element: 'Dark', role: 'Summoner', art: 'assets/cards/AcademyZoya.webp', ability: 'Return an Academy card on the field to its owner’s hand.' },
  { id: 'berry', title: 'Candy Goblin', name: 'Berry', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Brawler', art: 'assets/cards/CandyGoblinBerry.webp', ability: 'Return one of your fighters to your hand.' },
  { id: 'frosty', title: 'Candy Goblin', name: 'Frosty', type: 'Creature', cost: 1, attack: 1, element: 'Glacial', role: 'Shielder', art: 'assets/cards/CandyGoblinFrosty.webp', ability: 'The opposing fighter cannot attack next turn.' },
  { id: 'gummy', title: 'Candy Goblin', name: 'Gummy', type: 'Creature', cost: 1, attack: 1, element: 'Ignis', role: 'Enchanter', art: 'assets/cards/CandyGoblinGummy.webp', ability: 'Draw a Cooking action card.' },
  { id: 'runny', title: 'Candy Goblin', name: 'Runny', type: 'Creature', cost: 1, attack: 1, element: 'Aer', role: 'Brawler', art: 'assets/cards/CandyGoblinRunny.webp', ability: 'Choose an Academy card costing 4 or less from your deck and add it to your hand.' },
  { id: 'amethyst', title: 'Academy', name: 'Amethyst', cost: 4, attack: 4, element: 'Dark', role: 'Shielder', art: 'assets/cards/AcademyAmethyst.webp', ability: 'Destroy the opposing fighter.' },
  { id: 'den', title: 'Academy', name: 'Den', cost: 2, attack: 2, element: 'Mind', role: 'Enchanter', art: 'assets/cards/AcademyDen.webp?v=20261120bm', ability: 'Let a fighter attack on its first turn.' },
  { id: 'peppermint-ally', title: 'Academy', name: 'Cotton', cost: 4, attack: 4, element: 'Mind', role: 'Blader', art: 'assets/cards/AcademyCotton.webp', ability: 'Discard this card to draw Academy Hall from your deck into your hand.' },
  { id: 'academy-grounds', title: 'Pocket World', name: 'Academy Hall', type: 'Action', deckCopies: 1, cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/AcademyHall.webp', ability: 'Academy cards gain +1 attack while at least one Academy card is on the field.' },
  { id: 'cooking', title: 'General', name: 'Cooking', type: 'Action', cost: 3, attack: 0, element: 'Ignis', role: 'Action', art: 'assets/cards/Cooking.webp', ability: 'Return a Fighter or Creature card from your Pandemonium Zone to your hand.' },
  { id: 'locker-room', title: 'General', name: 'Locker Room', type: 'Action', cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/LockerRoom.webp', ability: 'If a Fighter you control shares a name with a card in your hand or deck that has a different title, destroy your Fighter and summon that card in its lane.' },
  { id: 'avatar-gem', title: 'General', name: 'Avatar Gem', type: 'Action', deckCopies: 1, cost: 4, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/AvatarGem.webp', ability: 'Replace a card in a battle zone with a card from the Ascendance Deck that has the same name.' },
  { id: 'academy-fritz', title: 'Academy', name: 'Fritz', cost: 1, attack: 1, element: 'Dark', role: 'Summoner', art: 'assets/cards/AcademyFritz.webp?v=20261120a', ability: 'Draw an Academy card with a different element.' },
  { id: 'academy-lynda', title: 'Academy', name: 'Lynda', cost: 1, attack: 1, element: 'Solar', role: 'Trickster', art: 'assets/cards/AcademyLynda-WildWest.webp', ability: 'Draw an Academy card with a different element.' },
  { id: 'dharma', title: 'Academy', name: 'Dharma', cost: 5, attack: 4, element: 'Terra', role: 'Healer', art: 'assets/cards/AcademyDharma.webp?v=20261125dharma2', ability: 'On summon, choose a Fighter or Creature in your Pandemonium Zone. At the start of your next turn, summon it to an open Battle Zone if Dharma is still on the field.' },
  { id: 'horatio', title: 'Academy', name: 'Horatio', cost: 5, attack: 4, element: 'Terra', role: 'Enchanter', art: 'assets/cards/AcademyHoratio.webp?v=20261125horatio2', ability: 'On summon, draw a Terra Action card.' },
  { id: 'vishnu', title: 'Djinn', name: 'Vishnu', cost: 5, attack: 5, element: 'Dark', role: 'Shooter', art: 'assets/cards/DjinnVishnu.webp', ability: 'Can only be summoned if Peppermint is in one of your Battle Zones. On summon, draw Avatar Gem.' },
  { id: 'brewy', title: 'Candy Goblin', name: 'Brewy', type: 'Creature', cost: 1, attack: 1, element: 'Mind', role: 'Enchanter', art: 'assets/cards/CandyGoblinBrewy.webp', ability: 'On summon, draw a Potion card.' },
  { id: 'mana-potion', title: 'General', name: 'Mana Potion', type: 'Action', cost: 0, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/ManaPotion.webp', ability: 'Restore up to 2 spent Mana this turn.' },
  { id: 'health-potion', title: 'General', name: 'Health Potion', type: 'Action', cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/HealthPotion.webp', ability: 'Restore an empty Life Zone with the top card of your deck.' },
  { id: 'patchy', title: 'Candy Goblin', name: 'Patchy', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Healer', art: 'assets/cards/CandyGoblinPatchy.webp', ability: 'When destroyed, draw a Dharma card.' },
  { id: 'zesty', title: 'Candy Goblin', name: 'Zesty', type: 'Creature', cost: 1, attack: 1, element: 'Solar', role: 'Enchanter', art: 'assets/cards/CandyGoblinZesty.webp', ability: 'On summon, return an Action card from your Pandemonium Zone to your hand.' },
  { id: 'zomby', title: 'Candy Goblin', name: 'Zomby', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Trickster', art: 'assets/cards/CandyGoblinZomby.webp', ability: 'When destroyed, return this card to your hand and increase its cost by 1.' },
  { id: 'zodiac-guardian-rick', title: 'Zodiac Guardian', name: 'Rick', type: 'Transformation', cost: 0, attack: 6, element: 'Terra', role: 'Shielder', art: 'assets/cards/ZodiacGuardianRick.webp?v=rick-clean-finish', ability: '+1 attack for each Terra card in your Pandemonium Zone.' },
  { id: 'zodiac-guardian-kage', title: 'Zodiac Guardian', name: 'Kage', type: 'Transformation', cost: 0, attack: 5, element: 'Dark', role: 'Blader', art: 'assets/cards/ZodiacGuardianKage.webp', ability: '+1 attack for each Dark card in your Pandemonium Zone.' },
  { id: 'zodiac-guardian-ryota', title: 'Zodiac Guardian', name: 'Ryota', type: 'Transformation', cost: 0, attack: 5, element: 'Solar', role: 'Shooter', art: 'assets/cards/ZodiacGuardianRyota.webp', ability: 'Discard a card to destroy an opposing fighter in a Solar explosion.' },
  { id: 'zodiac-egg', title: 'Zodiac', name: 'Egg', type: 'Creature', maxCopies: 1, cost: 1, attack: 0, element: 'Solar', role: 'Enchanter', art: 'assets/cards/ZodiacEgg.webp', ability: 'On summon, choose a fighter whose Zodiac Guardian is in your Ascendance Deck. Send Egg to your Pandemonium Zone and replace it with a Zodiac creature from your deck or hand whose ability description mentions that fighter’s name.' },
];
const wildWestLibrary = [
  { id: 'ww-rick', title: 'Wild West', name: 'Rick', cost: 5, attack: 4, element: 'Terra', role: 'Shielder', art: 'assets/cards/WildWestRick.webp?v=rick-clean-finish', ability: 'While this is on the field, Wild West fighters gain +1 attack for each empty battle zone on both fields.' },
  { id: 'ww-wade', title: 'Wild West', name: 'Wade', cost: 5, attack: 4, element: 'Terra', role: 'Shooter', art: 'assets/cards/WildWestWade.webp?v=style-v1', ability: '+2 attack for each empty enemy battle zone.' },
  { id: 'ww-brian', title: 'Wild West', name: 'Brian', cost: 4, attack: 3, element: 'Terra', role: 'Brawler', art: 'assets/cards/WildWestBrian.png', ability: 'On summon, return an enemy fighter to its hand.' },
  { id: 'ww-academy-brian', title: 'Academy', name: 'Brian', type: 'Fighter', maxCopies: 1, cost: 3, attack: 3, element: 'Terra', role: 'Brawler', art: 'assets/cards/AcademyBrian.webp', ability: 'On summon, search your deck for an Academy Rick or Academy Lynda card and add it to your hand.' },
  { id: 'ww-zodiac-guardian-brian', title: 'Zodiac Guardian', name: 'Brian', type: 'Transformation', cost: 0, attack: 5, element: 'Terra', role: 'Brawler', art: 'assets/cards/ZodiacGuardianBrian.webp', ability: 'Gains +1 attack for each Terra card on your field or in your hand.' },
  { id: 'ww-zodiac-muddy-pig', title: 'Zodiac', name: 'Muddy Pig', type: 'Creature', maxCopies: 1, cost: 2, attack: 2, element: 'Terra', role: 'Brawler', art: 'assets/cards/ZodiacMuddyPig.webp', ability: 'If Brian is on the field, draw an Avatar Gem card from your deck.' },
  { id: 'ww-blake', title: 'Wild West', name: 'Blake', cost: 3, attack: 3, element: 'Terra', role: 'Shielder', art: 'assets/cards/WildWestBlake.webp?v=style-v1', ability: 'Activate on the field: return Blake and the opposing fighter in its lane to their owners’ hands.' },
  { id: 'ww-fritz', title: 'Wild West', name: 'Fritz', cost: 2, attack: 2, element: 'Dark', role: 'Trickster', art: 'assets/cards/WIldWestFritz.webp?v=20261125art5', ability: 'On summon, return an Eggscythe from your Pandemonium Zone to your hand.' },
  { id: 'ww-academy-rick', title: 'Academy', name: 'Rick', cost: 4, attack: 4, element: 'Terra', role: 'Shielder', art: 'assets/cards/AcademyRick.webp?v=rick-clean-finish', ability: 'Cannot be destroyed or returned by card effects, except Avatar Gem or Locker Room.' },
  { id: 'ww-academy-fritz', title: 'Academy', name: 'Fritz', cost: 1, attack: 1, element: 'Dark', role: 'Summoner', art: 'assets/cards/AcademyFritz.webp?v=20261120a', ability: 'Draw an Academy card with a different element.' },
  { id: 'ww-academy-lynda', title: 'Academy', name: 'Lynda', cost: 1, attack: 1, element: 'Solar', role: 'Trickster', art: 'assets/cards/AcademyLynda-WildWest.webp', ability: 'Draw an Academy card with a different element.' },
  { id: 'ww-medusa', title: 'Wild West', name: 'Medusa', cost: 2, attack: 2, element: 'Mind', role: 'Trickster', art: 'assets/cards/WildWestMedusa.webp', ability: 'Once per turn, spend 1 Mana to look at the top card of your deck.' },
  { id: 'ww-wild-ox', title: 'Zodiac', name: 'Wild Ox', type: 'Creature', cost: 2, attack: 2, element: 'Terra', role: 'Shielder', art: 'assets/cards/ZodiacWildOx.webp', ability: 'If Rick is on your field, draw an Avatar Gem.' },
  { id: 'ww-eggscythe', title: 'Vegcritter', name: 'Eggscythe', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Blader', art: 'assets/cards/VegcritterEggyscythe.webp', ability: 'When destroyed, return a different Dark card from your Pandemonium Zone to your hand.' },
  { id: 'ww-hopkin', title: 'Vegcritter', name: 'Hopkin', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Brawler', art: 'assets/cards/VegcritterHopkin.webp', ability: 'When an enemy targets your Life Zone, if your Battle Zones are empty, summon Hopkin from your hand.' },
  { id: 'ww-purrnip', title: 'Vegcritter', name: 'Purrnip', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Shooter', art: 'assets/cards/VegCritterPurrnip.webp', ability: 'When Purrnip destroys a Life Zone, draw a card.' },
  { id: 'ww-bandito', title: 'Wild West', name: 'Bandito', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Blader', art: 'assets/cards/WildWestBandito.webp', ability: 'Can attack on the turn it is summoned, except on the first turn.' },
  { id: 'ww-littlebeak', title: 'Wild West', name: 'Littlebeak', type: 'Creature', cost: 1, attack: 1, element: 'Aer', role: 'Shielder', art: 'assets/cards/WildWestLittlebeak.webp', ability: 'Gets +1 attack during the enemy turn.' },
  { id: 'ww-sunnythorn', title: 'Wild West', name: 'Sunnythorn', type: 'Creature', cost: 1, attack: 1, element: 'Terra', role: 'Enchanter', art: 'assets/cards/WildWestSunnythorn.webp', ability: 'A fighter that destroys this in battle loses 1 attack.' },
  { id: 'ww-galacta', title: 'Wild West', name: 'GaLacta', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Healer', art: 'assets/cards/WildWestGaLacta.webp', ability: 'Wild West cards costing 3 or less return to your hand instead of the Pandemonium Zone when defeated in battle. (Except self.)' },
  { id: 'ww-sangrizo', title: 'Wild West', name: 'Sangrizo', type: 'Creature', cost: 1, attack: 1, element: 'Ignis', role: 'Shooter', art: 'assets/cards/WildWestSangrizo.webp', ability: 'On summon, spend 1 Mana to destroy a random card in your opponent’s hand.' },
  { id: 'ww-rosaluna', title: 'Wild West', name: 'Rosaluna', type: 'Creature', cost: 1, attack: 1, element: 'Mind', role: 'Enchanter', art: 'assets/cards/WildWestRosaluna.webp', ability: 'When destroyed, draw a Mind Wild West card.' },
  { id: 'ww-quick-draw', title: 'Wild West', name: 'Quick Draw', type: 'Action', cost: 2, attack: 0, element: 'Action', role: 'Action', art: 'assets/cards/QuickDraw.webp', ability: 'Summon a Wild West fighter from your hand immediately.' },
  { id: 'ww-duelists-gambit', title: 'Wild West', name: "Duelist's Gambit", type: 'Action', cost: 3, attack: 0, element: 'Action', role: 'Action', art: 'assets/cards/DuelistsGambit.webp', ability: 'Destroy one friendly and one enemy fighter. A random Wild West fighter you control gains permanent +1 attack.' },
  { id: 'ww-bounty-raid', title: 'General', name: 'Bounty Raid', type: 'Action', cost: 3, attack: 0, element: 'Action', role: 'Action', art: 'assets/cards/BountyRaid.webp', ability: 'Destroy every fighter in the selected lane on both fields.' },
  { id: 'ww-root', title: 'General', name: 'Root', type: 'Action', cost: 2, attack: 0, element: 'Terra', role: 'Action', art: 'assets/cards/Root.webp', ability: 'Make an enemy fighter unable to move next turn.' },
  { id: 'ww-wanted-poster', title: 'General', name: 'Wanted Poster', type: 'Action', cost: 2, attack: 0, element: 'Action', role: 'Action', art: 'assets/cards/WantedPoster.webp', ability: 'Reduce an enemy fighter’s attack by 1 until your next turn.' },
  { id: 'ww-planting', title: 'General', name: 'Planting', type: 'Action', cost: 2, attack: 0, element: 'Terra', role: 'Action', art: 'assets/cards/Planting.webp', ability: 'Summon a Vegcritter from your deck or Pandemonium Zone.' },
  { id: 'cactus-creek', title: 'Pocket World', name: 'Cactus Creek', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 2, attack: 0, element: 'Terra', role: 'Action', art: 'assets/cards/PocketWorldCactusCreek.webp', ability: 'Wild West cards in Battle Zones gain +1 attack during the opponent’s turn.' },
  cardLibrary.find((card) => card.id === 'avatar-gem'),
  cardLibrary.find((card) => card.id === 'cooking'),
  { ...cardLibrary.find((card) => card.id === 'zodiac-egg'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
];
const islandParadiseLibrary = [
  { id: 'ip-brody', title: 'Island Paradise', name: 'Brody', cost: 5, attack: 4, element: 'Aqua', role: 'Brawler', art: 'assets/cards/IslandParadiseBrody.webp?v=style-v1', ability: 'Gain 1 attack after each card destroyed by this card.' },
  { id: 'ip-natsuki', title: 'Island Paradise', name: 'Natsuki', cost: 4, attack: 3, element: 'Aqua', role: 'Healer', art: 'assets/cards/IslandParadiseNatsuki.webp?v=one-piece-v1', ability: 'On summon, protect an adjacent ally from attacks. It cannot defend its lane’s Life Zone while protected.' },
  { id: 'ip-jet', title: 'Island Paradise', name: 'Jet', cost: 4, attack: 3, element: 'Ignis', role: 'Brawler', art: 'assets/cards/IslandParadiseJet.webp', ability: 'Gains 1 attack at the beginning of each of your turns while in the Battle Zone.' },
  { id: 'ip-sabrina', title: 'Island Paradise', name: 'Sabrina', cost: 5, attack: 5, element: 'Aer', role: 'Brawler', art: 'assets/cards/IslandParadiseSabrina.webp', ability: 'Gains 1 attack for each adjacent Brawler.' },
  { id: 'ip-coyote', title: 'Island Paradise', name: 'Coyote', cost: 5, attack: 4, element: 'Aqua', role: 'Brawler', art: 'assets/cards/IslandParadiseCoyote.webp', ability: 'Can make 2 attacks each turn, except the turn it is summoned.' },
  { id: 'ip-chase', title: 'Island Paradise', name: 'Chase', cost: 4, attack: 3, element: 'Aqua', role: 'Healer', art: 'assets/cards/IslandParadiseChase.webp', ability: 'Each turn, give 1 attack to an adjacent Brawler. Choose one if there are several.' },
  { id: 'ip-academy-chase', title: 'Academy', name: 'Chase', type: 'Fighter', maxCopies: 1, cost: 3, attack: 3, element: 'Aqua', role: 'Healer', art: 'assets/cards/AcademyChase.webp', ability: 'Adjacent Aqua cards get +1 attack.' },
  { id: 'ip-zodiac-aqua-kentaur', title: 'Zodiac', name: 'Aqua Kentaur', type: 'Creature', maxCopies: 1, cost: 2, attack: 2, element: 'Aqua', role: 'Shooter', art: 'assets/cards/ZodiacAquaKentaur.webp', ability: 'If Chase is on the field, draw an Avatar Gem card from your deck.' },
  { id: 'ip-zodiac-psycho-chicken', title: 'Zodiac', name: 'Psycho Chicken', type: 'Creature', maxCopies: 1, cost: 2, attack: 2, element: 'Mind', role: 'Shooter', art: 'assets/cards/ZodiacPsychoChicken.webp', ability: 'If Coyote is on the field, draw an Avatar Gem card from your deck.' },
  { ...cardLibrary.find((card) => card.id === 'academy-coyote') },
  { id: 'ip-banaphin', title: 'Island Paradise', name: 'Banaphin', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Enchanter', art: 'assets/cards/IslandParadiseBanaphin.webp', ability: 'When destroyed, draw an Island Paradise Creature.' },
  { id: 'ip-kokocrab', title: 'Island Paradise', name: 'Kokocrab', type: 'Creature', cost: 1, attack: 2, element: 'Aqua', role: 'Brawler', art: 'assets/cards/IslandParadiseKokocrab.webp', ability: 'Loses 1 attack while facing a Brawler.' },
  { id: 'ip-pinebeak', title: 'Island Paradise', name: 'Pinebeak', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Enchanter', art: 'assets/cards/IslandParadisePinebeak.webp', ability: 'On summon, draw an Island Paradise Creature.' },
  { id: 'ip-croaktail', title: 'Island Paradise', name: 'Croaktail', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Healer', art: 'assets/cards/IslandParadiseCroaktail.webp', ability: 'Destroy this card to give an adjacent Brawler +1 attack.' },
  { id: 'ip-floatbite', title: 'Island Paradise', name: 'Floatbite', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Blader', art: 'assets/cards/IslandParadiseFloatbite.webp', ability: 'When this destroys an opposing card, an adjacent Aqua Brawler may gain 1 attack.' },
  { id: 'ip-octospray', title: 'Island Paradise', name: 'Octospray', type: 'Creature', cost: 1, attack: 1, element: 'Aqua', role: 'Shooter', art: 'assets/cards/IslandParadiseOctospray.webp', ability: 'After this is attacked, the attacking enemy loses 1 attack.' },
  { id: 'ip-field', title: 'Pocket World', name: 'Island Paradise', type: 'Action', cost: 2, attack: 0, element: 'Aqua', role: 'Action', art: 'assets/cards/IslandParadiseField.webp', ability: 'Island Paradise fighters cannot be targeted by attacks, but do not defend their lane’s Life Zone.' },
  { id: 'ip-coyote-zodiac', title: 'Zodiac Guardian', name: 'Coyote', type: 'Transformation', cost: 0, attack: 5, element: 'Mind', role: 'Brawler', art: 'assets/cards/ZodiacGuardianCoyote.webp?v=20261120bm', ability: 'Gains 1 attack for each Brawler in your Pandemonium Zone.' },
  { id: 'ip-chase-zodiac', title: 'Zodiac Guardian', name: 'Chase', type: 'Transformation', cost: 0, attack: 5, element: 'Aqua', role: 'Brawler', art: 'assets/cards/ZodiacGuardianChase.webp?v=20261120bm', ability: 'Gains 1 attack for each Aqua card in your Pandemonium Zone.' },
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), maxCopies: 3, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'locker-room'), maxCopies: 3, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
  { id: 'ip-ride-the-wave', title: 'General', name: 'Ride the Wave', type: 'Action', maxCopies: 3, cost: 1, attack: 0, element: 'Aqua', role: 'Action', art: 'assets/cards/RideTheWave.webp', ability: 'Move one of your fighters to an adjacent empty Battle Zone.' },
  { id: 'ip-no-pain-no-gain', title: 'General', name: 'No Pain, No Gain', type: 'Action', maxCopies: 3, cost: 1, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/NoPainNoGain.webp', ability: 'Discard a card to give one of your fighters +1 attack.' },
  { id: 'ip-swim-dont-sink', title: 'General', name: "Swim, Don't Sink", type: 'Action', maxCopies: 3, cost: 1, attack: 0, element: 'Aqua', role: 'Action', art: 'assets/cards/SwimDontSink.webp?v=one-piece-v1', ability: 'Choose an Aqua Island Paradise fighter to become immune to Island Paradise field effects.' },
];
const livingToyLibrary = [
  { id: 'lt-scribble', title: 'Living Toy', name: 'Scribble', type: 'Creature', maxCopies: 1, cost: 2, attack: 1, element: 'Solar', role: 'Enchanter', art: 'assets/cards/LivingToyScribble.webp', ability: 'On summon, draw an Avatar Gem.' },
  { id: 'lt-clary', title: 'Dollmaster', name: 'Clary', cost: 3, attack: 3, element: 'Dark', role: 'Blader', art: 'assets/cards/DollmasterClary.webp', ability: 'Gains +1 attack for each adjacent Living Toy or Dollmaster card.' },
  { id: 'lt-fritz', title: 'Dollmaster', name: 'Fritz', cost: 2, attack: 2, element: 'Dark', role: 'Summoner', art: 'assets/cards/DollmasterFritz.webp', ability: 'Give 1 attack point to each 1-cost Dark card in the Battle Zone for each Living Toy card in your hand.' },
  { id: 'lt-rat-king', title: 'Dollmaster', name: 'Rat King', cost: 5, attack: 2, element: 'Dark', role: 'Summoner', art: 'assets/cards/DollmasterRatKing.webp?v=style-v1', ability: 'Gains +1 attack for each Dark card with a different name in your Pandemonium Zone.' },
  { id: 'lt-boxy', title: 'Tsukumogami', name: 'Boxy', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Enchanter', art: 'assets/cards/TsukumogamiBoxy.webp', ability: 'On summon, send a Dark card from your deck to the Pandemonium Zone.' },
  { id: 'lt-teddy', title: 'Tsukumogami', name: 'Teddy', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Blader', art: 'assets/cards/TsukumogamiTeddy.webp', ability: 'On summon, discard a card to gain 1 attack.' },
  { id: 'lt-broomy', title: 'Tsukumogami', name: 'Broomy', type: 'Creature', deckCopies: 1, cost: 1, attack: 1, element: 'Dark', role: 'Healer', art: 'assets/cards/TsukumogamiBroomy.webp', ability: 'On summon, return a card from your Battle Zone to your hand and gain Mana equal to its cost.' },
  { id: 'lt-melodoll', title: 'Living Toy', name: 'Melodoll', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Healer', art: 'assets/cards/LivingToyMelodoll.webp', ability: 'On summon, return a Dark card from your Pandemonium Zone to your hand.' },
  { id: 'lt-clapster', title: 'Living Toy', name: 'Clapster', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Shooter', art: 'assets/cards/LivingToyClapster.webp', ability: 'On summon, send the top card of your deck to the Pandemonium Zone to randomly discard a card from the enemy’s hand.' },
  { id: 'lt-beatcracker', title: 'Living Toy', name: 'Beatcracker', type: 'Creature', cost: 1, attack: 1, element: 'Dark', role: 'Brawler', art: 'assets/cards/LivingToyBeatCracker.webp', ability: 'If sent to the Pandemonium Zone from your hand or deck, summon this card.' },
  { id: 'lt-zodiac-fritz', title: 'Zodiac Guardian', name: 'Fritz', type: 'Transformation', cost: 0, attack: 3, element: 'Dark', role: 'Trickster', art: 'assets/cards/ZodiacGuardianFritz.webp', ability: 'Gains +1 attack for each Dark Fighter or Creature in your Pandemonium Zone.' },
  { ...cardLibrary.find((card) => card.id === 'academy-fritz'), maxCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), maxCopies: 3, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'zodiac-egg'), deckCopies: 1 },
  { id: 'lt-raterrot', title: 'Zodiac', name: 'Raterrot', type: 'Creature', maxCopies: 1, cost: 1, attack: 1, element: 'Dark', role: 'Summoner', art: 'assets/cards/ZodiacRaterrot.webp', ability: "On summon, if Fritz is on the field, draw an Avatar Gem." },
  { id: 'toy-store', title: 'Pocket World', name: 'Toy Store', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 2, attack: 0, element: 'Dark', role: 'Action', art: 'assets/cards/PocketWorldToyStore.webp', ability: 'While on the field, all 1-cost Fighters and Creatures gain +1 attack.' },
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
  { id: 'lt-doll-chorus', title: 'General', name: 'Doll Chorus', type: 'Action', maxCopies: 3, cost: 1, attack: 0, element: 'Dark', role: 'Action', art: 'assets/cards/DollChorus.webp', ability: 'If you control a Living Toy Creature, give a Living Toy fighter +1 attack.' },
  { id: 'lt-wind-up-toy', title: 'General', name: 'Wind-Up Toy', type: 'Action', maxCopies: 3, cost: 1, attack: 0, element: 'Dark', role: 'Action', art: 'assets/cards/WindUpToy.webp', ability: 'Return a Living Toy card from your Pandemonium Zone to your hand.' },
  { id: 'lt-toy-capsule', title: 'General', name: 'Toy Capsule', type: 'Action', maxCopies: 3, cost: 1, attack: 0, element: 'Dark', role: 'Action', art: 'assets/cards/ToyCapsule.webp', ability: 'Search your deck for a Living Toy card and add it to your hand.' },
];
const winterBallLibrary = [
  { id: 'drinking-tea', title: 'Winter Ball', name: 'Drinking Tea', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 1, attack: 0, element: 'Aqua', role: 'Action', art: 'assets/cards/DrinkingTea.webp', ability: 'Allow one of your Glacial cards to act on its first turn.' },
  { id: 'christmas-mall', title: 'Pocket World', name: 'Christmas Mall', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/PocketWorldChristmasMall.webp', ability: 'Once per turn, swap the position of two cards if at least one is Glacial.' },
  { id: 'academy-diamond', title: 'Academy', name: 'Diamond', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 3, attack: 3, element: 'Aer', role: 'Healer', art: 'assets/cards/AcademyDiamond.webp', ability: 'If Topaz is on the field, summon this card with no Mana cost.' },
  { id: 'academy-topaz', title: 'Academy', name: 'Topaz', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Aer', role: 'Enchanter', art: 'assets/cards/AcademyTopaz.webp', ability: 'If Diamond is on the field, summon this card with no Mana cost.' },
  { id: 'academy-dimitri', title: 'Academy', name: 'Dimitri', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 3, attack: 3, element: 'Glacial', role: 'Blader', art: 'assets/cards/AcademyDimitri.webp', ability: 'On summon, draw an Academy card that costs 3 or 4.' },
  { id: 'wb-topaz-diamond', title: 'Winter Ball', name: 'Topaz & Diamond', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Aer', role: 'Enchanter', art: 'assets/cards/WinterBallTopazDiamond.webp', ability: 'Once per turn, move one of your fighters to any empty Battle Zone. Counts as both Topaz and Diamond.' },
  { id: 'wb-bearnardo', title: 'Winter Ball', name: 'Bearnardo', type: 'Creature', maxCopies: 3, deckCopies: 2, cost: 1, attack: 1, element: 'Glacial', role: 'Brawler', art: 'assets/cards/WinterBallBearnardo.webp', ability: 'On summon, reduce the cost of a Glacial card in your hand by 1.' },
  { id: 'wb-dimitri', title: 'Winter Ball', name: 'Dimitri', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Glacial', role: 'Blader', art: 'assets/cards/WinterBallDimitri.webp', ability: 'Gains +1 attack whenever it moves to another lane.' },
  { id: 'wb-gillusion', title: 'Winter Ball', name: 'Gillusion', type: 'Creature', maxCopies: 3, deckCopies: 2, cost: 1, attack: 1, element: 'Aqua', role: 'Shielder', art: 'assets/cards/WinterBallGillusion.webp', ability: 'On summon, move a non-adjacent card to a free Battle Zone adjacent to its current lane.' },
  { id: 'wb-ladyfeather', title: 'Winter Ball', name: 'Ladyfeather', type: 'Creature', maxCopies: 3, deckCopies: 3, cost: 1, attack: 1, element: 'Aer', role: 'Shooter', art: 'assets/cards/WinterBallLeadyfeather.webp', ability: 'On summon, move the opposing card to a free adjacent Battle Zone.' },
  { id: 'wb-merryhound', title: 'Winter Ball', name: 'Merryhound', type: 'Creature', maxCopies: 3, deckCopies: 3, cost: 1, attack: 1, element: 'Glacial', role: 'Enchanter', art: 'assets/cards/WinterBallMerryhound.webp', ability: 'On summon, move an adjacent ally to another free Battle Zone.' },
  { id: 'wb-rebeccah', title: 'Winter Ball', name: 'Rebeccah', maxCopies: 1, deckCopies: 1, cost: 2, attack: 2, element: 'Glacial', role: 'Enchanter', art: 'assets/cards/WinterBallRebeccah.webp', ability: 'Once per turn, move Dimitri to a free adjacent Battle Zone.' },
  { id: 'wb-magnus', title: 'Winter Ball', name: 'Magnus', maxCopies: 1, deckCopies: 1, cost: 5, attack: 4, element: 'Glacial', role: 'Blader', art: 'assets/cards/WinterBallMagnus.webp', ability: 'Gains +1 attack whenever any card moves on the field.' },
  { id: 'wb-sageape', title: 'Winter Ball', name: 'Sageape', type: 'Creature', maxCopies: 3, deckCopies: 3, cost: 1, attack: 1, element: 'Glacial', role: 'Enchanter', art: 'assets/cards/WinterBallSageape.webp', ability: 'Discard this card from your hand to move a Glacial card to another Battle Zone.' },
  { id: 'wb-steepod', title: 'Winter Ball', name: 'Steepod', type: 'Creature', maxCopies: 3, deckCopies: 2, cost: 1, attack: 1, element: 'Glacial', role: 'Healer', art: 'assets/cards/WinterBallSteepod.webp', ability: 'Once per turn, move this card to an adjacent Battle Zone.' },
  { id: 'zodiac-swordtiger', title: 'Zodiac', name: 'Swordtiger', type: 'Creature', maxCopies: 1, deckCopies: 1, cost: 2, attack: 2, element: 'Glacial', role: 'Blader', art: 'assets/cards/ZodiacSwordtiger.webp', ability: 'On summon, if Dimitri is on the field, draw an Avatar Gem.' },
  { id: 'wb-zodiac-topaz', title: 'Zodiac Guardian', name: 'Topaz', type: 'Transformation', cost: 0, attack: 5, element: 'Aer', role: 'Enchanter', art: 'assets/cards/ZodiacGuardianTopaz.webp', ability: 'Gains +1 attack for each Aer card on the field or in your hand.' },
  { id: 'wb-zodiac-dimitri', title: 'Zodiac Guardian', name: 'Dimitri', type: 'Transformation', cost: 0, attack: 5, element: 'Glacial', role: 'Blader', art: 'assets/cards/ZodiacGuardianDimitri.webp', ability: 'Gains +1 attack for each Glacial card on the field or in your hand.' },
  { id: 'wb-zodiac-cloud-goat', title: 'Zodiac', name: 'Cloud Goat', type: 'Creature', maxCopies: 1, cost: 2, attack: 2, element: 'Aer', role: 'Enchanter', art: 'assets/cards/ZodiacCloudGoat.webp', ability: 'If Topaz is on the field, draw an Avatar Gem card from your deck.' },
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), maxCopies: 1, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'zodiac-egg'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'mana-potion'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'health-potion'), deckCopies: 1 },
  { id: 'wb-wedding-proposal', title: 'General', name: 'Wedding Proposal', type: 'Action', maxCopies: 3, cost: 3, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/WeddingProposal.webp', ability: 'If you control two adjacent Fighters or Transformation cards, give each +1 attack.' },
  { id: 'wb-shopping', title: 'General', name: 'Shopping', type: 'Action', maxCopies: 3, cost: 2, attack: 0, element: 'None', role: 'Action', art: 'assets/cards/Shopping.webp', ability: 'Draw 2 cards.' },
  { id: 'wb-merry-christmas', title: 'General', name: 'Merry Christmas!', type: 'Action', maxCopies: 3, cost: 1, attack: 0, element: 'Glacial', role: 'Action', art: 'assets/cards/MerryChristmas.webp', ability: 'Search your deck for a Glacial card and add it to your hand.' },
];
const valhallaLibrary = [
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), maxCopies: 3, deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'zodiac-egg'), deckCopies: 1 },
  { id: 'zodiac-valkyrie-chicken', title: 'Zodiac', name: 'Valkyrie Chicken', type: 'Creature', maxCopies: 1, cost: 2, attack: 2, element: 'Aer', role: 'Enchanter', art: 'assets/cards/ZodiacValkyrieChicken.webp', ability: 'If Sabrina is on the field, draw an Avatar Gem.' },
  { id: 'zodiac-guardian-sabrina', title: 'Zodiac Guardian', name: 'Sabrina', type: 'Transformation', cost: 0, attack: 5, element: 'Aer', role: 'Brawler', art: 'assets/cards/ZodiacGuardianSabrina.webp', ability: 'Gains +1 attack for each Aer card in your Pandemonium Zone.' },
  { id: 'valhalla-axir', title: 'Valhalla', name: 'Axir', type: 'Creature', maxCopies: 3, cost: 1, attack: 1, element: 'Neutral', role: 'Blader', art: 'assets/cards/ValhallaAxir.webp', ability: 'While another Valhalla Creature is on your field, Axir gains +1 attack.' },
  { id: 'valhalla-barfy', title: 'Valhalla', name: 'Barfy', type: 'Creature', maxCopies: 3, cost: 1, attack: 1, element: 'Aqua', role: 'Shooter', art: 'assets/cards/ValhallaBarfy.webp', ability: 'On summon, give Euphoria to adjacent allies until the start of your next turn. Their attack doubles, but they are destroyed after attacking.' },
  { id: 'valhalla-khendal', title: 'Valhalla', name: 'Khendal', maxCopies: 1, deckCopies: 1, cost: 5, attack: 5, element: 'Aer', role: 'Brawler', art: 'assets/cards/ValhallaKhendal.webp?v=style-v1', ability: 'Gains +1 attack for each card with Euphoria on the field.' },
  { id: 'valhalla-bar', title: '', name: 'Valhalla Bar', type: 'Action', maxCopies: 3, deckCopies: 1, cost: 2, attack: 0, element: 'Neutral', role: 'Action', art: 'assets/cards/ValhallaBar.webp', ability: 'Shared Field: when a Battle Card with Euphoria attacks, flip a coin. Heads: it is not destroyed by Euphoria.' },
  { id: 'valhalla-miss-ragna', title: 'Valhalla', name: 'Miss Ragna', type: 'Creature', maxCopies: 3, cost: 1, attack: 1, element: 'Terra', role: 'Trickster', art: 'assets/cards/ValhallaMissRagna.webp', ability: 'The first time an adjacent ally would be destroyed by an enemy card effect, destroy Miss Ragna instead.' },
  { id: 'valhalla-mjolknir', title: 'Valhalla', name: 'Mjölknir', type: 'Creature', maxCopies: 3, cost: 1, attack: 1, element: 'Aer', role: 'Shooter', art: 'assets/cards/ValhallaMjölknir.webp', ability: 'Can attack the opposing fighter directly across from it.' },
  { id: 'valhalla-morrikyn', title: 'Valhalla', name: 'Morrikyn', type: 'Creature', maxCopies: 3, cost: 1, attack: 1, element: 'Dark', role: 'Summoner', art: 'assets/cards/ValhallaMorrikyn.webp', ability: 'On summon, reveal the top card of the opposing deck.' },
  { id: 'valhalla-pryce', title: 'Valhalla', name: 'Pryce', maxCopies: 1, deckCopies: 1, cost: 5, attack: 5, element: 'Solar', role: 'Blader', art: 'assets/cards/ValhallaPryce.webp', ability: 'On summon, draw a Golden Egg Flatbread.' },
  { id: 'valhalla-ryota', title: 'Valhalla', name: 'Ryota', maxCopies: 1, deckCopies: 1, cost: 4, attack: 3, element: 'Solar', role: 'Shooter', art: 'assets/cards/ValhallaRyota.webp', ability: 'On summon, destroy an enemy fighter.' },
  { id: 'valhalla-sabrina', title: 'Valhalla', name: 'Sabrina', maxCopies: 1, deckCopies: 1, cost: 5, attack: 5, element: 'Aer', role: 'Brawler', art: 'assets/cards/ValhallaSabrina.webp', ability: 'Cannot be destroyed by card effects, including Euphoria.' },
  { id: 'valhalla-sloetunn', title: 'Valhalla', name: 'Sloetunn', type: 'Creature', maxCopies: 3, cost: 1, attack: 3, element: 'Ignis', role: 'Brawler', art: 'assets/cards/ValhallaSloetunn.webp', ability: 'Cannot attack on the turn it is summoned or its next turn.' },
  { id: 'valhalla-wendy', title: 'Valhalla', name: 'Wendy', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Dark', role: 'Trickster', art: 'assets/cards/ValhallaWendy.webp', ability: 'On summon, draw a Valkyrie’s Mead.' },
  { id: 'valhalla-meadsting', title: 'Valhalla', name: 'Meadsting', type: 'Creature', maxCopies: 3, cost: 1, attack: 1, element: 'Solar', role: 'Trickster', art: 'assets/cards/ValhallaMeadsting.webp', ability: 'On summon, give Euphoria to the opposing Battle Card in this lane until the start of your next turn. Its attack doubles, but it is destroyed after attacking.' },
  { id: 'valkyries-mead', title: 'General', name: "Valkyrie's Mead", type: 'Action', maxCopies: 3, cost: 3, attack: 0, element: 'Neutral', role: 'Action', art: 'assets/cards/ValkyriesMead.webp', ability: 'Give a Battle Card Euphoria until the start of your next turn. Its attack doubles, but it is destroyed after attacking.' },
  { id: 'golden-egg-flatbread', title: 'General', name: 'Golden Egg Flatbread', type: 'Action', maxCopies: 3, cost: 3, attack: 0, element: 'Neutral', role: 'Action', art: 'assets/cards/GoldenEggFlatbread.webp', ability: 'Choose a Battle Card with Euphoria. It will not be destroyed by Euphoria after attacking.' },
  { id: 'training', title: 'General', name: 'Training', type: 'Action', maxCopies: 3, cost: 2, attack: 0, element: 'Neutral', role: 'Action', art: 'assets/cards/Training.webp', ability: 'Give a Battle Card +1 attack.' },
];
cardLibrary.push({ id: 'academy-sabrina', title: 'Academy', name: 'Sabrina', type: 'Fighter', maxCopies: 1, deckCopies: 1, cost: 4, attack: 4, element: 'Aer', role: 'Brawler', art: 'assets/cards/AcademySabrina.webp', ability: 'On summon, stun the opposing fighter. It cannot attack during its next turn.' });
const toxicSewerLibrary = [
  { id: 'ts-big-troll', title: 'Toxic Sewer', name: 'Big Troll', cost: 2, attack: 2, element: 'Dark', role: 'Brawler', type: 'Creature', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ToxicSewerBigTroll.webp', webpCrops: true, ability: 'On summon, gain +1 attack for each Troll Boy and Troll Girl in a Battle Zone.' },
  { id: 'ts-frog', title: 'Toxic Sewer', name: 'Frog', cost: 1, attack: 1, element: 'Dark', role: 'Shooter', type: 'Creature', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ToxicSewerFrog.webp', webpCrops: true, ability: 'When you summon another Toxic Sewer card, summon Frog from your hand for free if an open Battle Zone is available.' },
  { id: 'ts-alligator', title: 'Toxic Sewer', name: 'Alligator', cost: 2, attack: 2, element: 'Dark', role: 'Shielder', type: 'Creature', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ToxicSewersAlligator.webp', webpCrops: true, ability: 'Gains +1 attack against poisoned enemies.' },
  { id: 'ts-spider', title: 'Toxic Sewer', name: 'Spider', cost: 2, attack: 1, element: 'Dark', role: 'Trickster', type: 'Creature', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ToxicSewerSpider.webp', webpCrops: true, ability: 'When destroyed in battle, poison the Battle Card that destroyed it.' },
  { id: 'ts-troll-girl', title: 'Toxic Sewer', name: 'Troll Girl', cost: 1, attack: 1, element: 'Ignis', role: 'Shooter', type: 'Creature', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ToxicSewersTrollgirl.webp', webpCrops: true, ability: 'On summon, spend 1 Mana to discard a random card from the rival’s hand.' },
  { id: 'ts-troll-boy', title: 'Toxic Sewer', name: 'Troll Boy', cost: 1, attack: 1, element: 'Dark', role: 'Blader', type: 'Creature', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ToxicSewerTroll.webp', webpCrops: true, ability: 'Can attack on the turn it is summoned.' },
  { id: 'ts-slime', title: 'Toxic Sewer', name: 'Slime', cost: 1, attack: 1, element: 'Dark', role: 'Brawler', type: 'Creature', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ToxicSewrSlime.webp', webpCrops: true, ability: 'When destroyed, draw a Toxic Sewer Slime from your deck.' },
  { id: 'ts-slime-snake', title: 'Zodiac', name: 'Slime Snake', cost: 2, attack: 2, element: 'Dark', role: 'Trickster', type: 'Creature', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ZodiacSlimeSnake.webp', webpCrops: true, ability: 'On summon, draw an Avatar Gem if Ryuu is on the field.' },
  { id: 'ts-hellfire-sheep', title: 'Zodiac', name: 'Hellfire Sheep', cost: 2, attack: 2, element: 'Ignis', role: 'Blader', type: 'Creature', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ZodiacDarkSheep.webp', webpCrops: true, ability: 'On summon, draw an Avatar Gem if Aemi is on the field.' },
  { id: 'ts-field', title: 'Pocket World', name: 'Toxic Sewers', cost: 2, attack: 0, element: 'Neutral', role: 'Action', type: 'Action', maxCopies: 3, deckCopies: 2, art: 'assets/cards/PocketWorldToxicSewers.webp', webpCrops: true, ability: 'After a Battle Card attacks, poison it.' },
  { id: 'ts-zodiac-aemi', title: 'Zodiac Guardian', name: 'Aemi', cost: 0, attack: 5, element: 'Ignis', role: 'Shooter', type: 'Transformation', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ZodiacGuardianAemi.webp?v=20261127-aemi-details', webpCrops: true, ability: 'Gains +1 attack for each Ignis card in your Pandemonium Zone.' },
  { id: 'ts-zodiac-ryuu', title: 'Zodiac Guardian', name: 'Ryuu', cost: 0, attack: 5, element: 'Aer', role: 'Healer', type: 'Transformation', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ZodiacGuardianRyuu.webp?v=20261127-ryuu-aer', webpCrops: true, ability: 'Gains +1 attack for each Fighter in the rival’s Pandemonium Zone.' },
  { id: 'academy-ryuu', title: 'Academy', name: 'Ryuu', cost: 4, attack: 4, element: 'Aer', role: 'Healer', type: 'Fighter', maxCopies: 1, deckCopies: 1, art: 'assets/cards/AcademyRyuu.webp?v=20261127-ryuu-aer', webpCrops: true, ability: 'On summon, draw a Poison or Shady Potion card.' },
  { id: 'ts-zenon', title: 'Toxic Sewer', name: 'Zenón', cost: 5, attack: 5, element: 'Dark', role: 'Trickster', type: 'Fighter', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ToxicSewerZenon.webp', webpCrops: true, ability: 'Gains +1 attack whenever a card on the field is poisoned.' },
  { id: 'ts-momozan', title: 'Toxic Sewer', name: 'Momozan', cost: 5, attack: 5, element: 'Ignis', role: 'Shielder', type: 'Fighter', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ToxicSewersMomozan.webp?v=20261127-details', webpCrops: true, ability: 'Gains +1 attack for each Toxic Sewer card on either field or in your hand.' },
  { id: 'ts-ryuu', title: 'Toxic Sewer', name: 'Ryuu', cost: 4, attack: 4, element: 'Aer', role: 'Healer', type: 'Fighter', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ToxicSewerRyuu.webp?v=20261127-ryuu-aer', webpCrops: true, ability: 'On summon, poison one of the rival’s three side Life Cards.' },
  { id: 'ts-aemi', title: 'Toxic Sewer', name: 'Aemi', cost: 3, attack: 3, element: 'Ignis', role: 'Shooter', type: 'Fighter', maxCopies: 1, deckCopies: 1, art: 'assets/cards/ToxicSewerAemi.webp?v=20261127-aemi-details', webpCrops: true, ability: 'Gains +1 attack for each Voodoo Witch or Ryuu on the field or in either Pandemonium Zone.' },
  { id: 'ts-elyza', title: 'Voodoo Witch', name: 'Maman Elyza', cost: 3, attack: 3, element: 'Dark', role: 'Healer', type: 'Fighter', maxCopies: 1, deckCopies: 1, art: 'assets/cards/VoodooWitchMamanElyza.webp', webpCrops: true, ability: 'On summon, draw an Aemi or Ryuu card.' },
  { id: 'ts-lorette', title: 'Voodoo Witch', name: 'Lorette', cost: 3, attack: 3, element: 'Dark', role: 'Enchanter', type: 'Fighter', maxCopies: 1, deckCopies: 1, art: 'assets/cards/VoodooWitchLorette.webp', webpCrops: true, ability: 'When destroyed, draw a Maman Elyza card from your deck, then return Lorette to your hand. Whenever she returns from the field to your hand, her Mana cost increases by 1.' },
  { id: 'ts-poison', title: 'General', name: 'Poison', cost: 2, attack: 0, element: 'Dark', role: 'Action', type: 'Action', maxCopies: 3, deckCopies: 3, art: 'assets/cards/Poison.webp', webpCrops: true, ability: 'Poison a Battle Card. It is destroyed at the start of its owner’s second turn after being poisoned.' },
  { id: 'ts-shady-potion', title: 'General', name: 'Shady Potion', cost: 2, attack: 0, element: 'Dark', role: 'Action', type: 'Action', maxCopies: 3, deckCopies: 3, art: 'assets/cards/ShadyPotion.webp', webpCrops: true, ability: 'Summon a card from your Pandemonium Zone into an empty Battle Zone and poison it.' },
  { ...cardLibrary.find((card) => card.id === 'aemi'), deckCopies: 1 },
  { ...cardLibrary.find((card) => card.id === 'avatar-gem'), deckCopies: 1 },
];
const deckNames = { academy: 'Academy', 'wild-west': 'Wild West', 'island-paradise': 'Island Paradise', 'living-toy': 'Living Toy', 'winter-ball': 'Winter Ball', valhalla: 'Valhalla', 'toxic-sewer': 'Toxic Sewer', fun: 'Fun Deck', mixed: 'Mixed', collection: 'My Collection' };
const isSewerAvatar = (id) => id === 'academy-ryuu' || id.startsWith('ts-');
const aemiArtworkIds = new Set(['aemi', 'ts-aemi', 'ts-zodiac-aemi']);
const avatarPortrait = (id) => `assets/avatar-headshots/${id}.webp?v=${aemiArtworkIds.has(id) ? '20261127-aemi-details' : '20261127-square-portraits'}`;
const isFighterCard = (card) => (card.type || 'Fighter') === 'Fighter' && Boolean(card.role) && displayedCardType(card) === 'Fighter';
const avatarLabel = (card) => `${card.title ? card.title + ' ' : ''}${card.name}`;
const playerProfileName = (user) => user?.nickname || user?.email?.split('@')[0] || '';
function allCardCatalog() { return [...new Map([...toxicSewerLibrary, ...cardLibrary, ...wildWestLibrary, ...islandParadiseLibrary, ...livingToyLibrary, ...winterBallLibrary, ...valhallaLibrary].map((card) => [card.id, card])).values()]; }
window.peppermintFighterAvatars = () => allCardCatalog()
  .filter((card) => card.title === 'Zodiac Guardian' || isFighterCard(card))
  .map(({ id, name, title }) => ({ id, name, title, art: avatarPortrait(id) }));
window.peppermintOwnsAvatar = (id) => Boolean(id && window.peppermintCurrentUser && window.peppermintCollection?.count(id) > 0);
function ownedProfileAvatar(user) {
  return window.peppermintOwnsAvatar(user?.avatarCardId)
    ? window.peppermintFighterAvatars().find((card) => card.id === user.avatarCardId)
    : null;
}
window.peppermintSyncPlayerIdentity = (user = window.peppermintCurrentUser) => {
  const avatar = ownedProfileAvatar(user);
  const updatePortrait = (image, card) => {
    image.src = card ? avatarPortrait(card.id) : 'assets/ui-icons/player.svg';
    image.alt = card ? `${card.name} profile portrait` : '';
    image.classList.toggle('profile-avatar-image', Boolean(card));
  };
  const playerName = playerProfileName(user) || (user ? 'Player' : 'YOU');
  const playerNameElement = document.getElementById('player-name');
  if (playerNameElement) playerNameElement.textContent = match.player ? match.playerProfileName : playerName;
  const battleImage = document.querySelector('.avatar-player .player-icon');
  if (battleImage) updatePortrait(battleImage, match.player ? match.playerProfileAvatar : avatar);
  const menuImage = document.getElementById('main-menu-profile-image');
  if (menuImage) updatePortrait(menuImage, avatar);
  const profile = document.getElementById('main-menu-profile');
  const profileName = document.getElementById('main-menu-profile-name');
  if (profile) profile.classList.toggle('hidden', !user);
  if (profileName) profileName.textContent = user ? playerName : '';
};
window.addEventListener('peppermint-auth-state', (event) => window.peppermintSyncPlayerIdentity(event.detail?.user));
document.addEventListener('DOMContentLoaded', () => window.peppermintSyncPlayerIdentity());
window.addEventListener('peppermint-collection-change', () => window.peppermintSyncPlayerIdentity());
function transformationsForDeck(deckId) {
  if (deckId === 'toxic-sewer') return toxicSewerLibrary.filter((card) => card.type === 'Transformation');
  const ids = { academy:['zodiac-guardian-kage','zodiac-guardian-ryota'], 'wild-west':['zodiac-guardian-rick','ww-zodiac-guardian-brian'], 'island-paradise':['ip-coyote-zodiac','ip-chase-zodiac'], 'living-toy':['lt-zodiac-fritz'], 'winter-ball':['wb-zodiac-topaz','wb-zodiac-dimitri'], valhalla:['zodiac-guardian-sabrina','zodiac-guardian-ryota'], fun:allCardCatalog().filter((card) => card.type === 'Transformation').map((card) => card.id) }[deckId] || [];
  return allCardCatalog().filter((card) => card.type === 'Transformation' && ids.includes(card.id));
}
let selectedPlayerDeck = 'academy';
let selectedRivalDeck = 'wild-west';
let selectedBattleMode = 'collection';
let tutorialLessonIndex = 0;
let pendingDrawAnimations = [];
const animatingDrawInstances = new Set();
const match = { turn: 1, turnSerial: 0, active: 'player', energy: 1, maxEnergy: 1, turnEnergyCap: 1, secondPlayerBonusPending: true, player: null, opponent: null, playerDeckId: 'academy', opponentDeckId: 'wild-west', fieldCard: null, pendingDharmaRevives: [], selected: null, attackerLane: null, attackMode: false, attackResolving: false, firstPlayer: 'player', over: false, battleDestroyedCards: 0 };
let mainLifeChainState = { player: null, opponent: null };
const battleHistory = [];
let activeCombatCue = null;
let resolvingStrike = false;

let rivalAnimations = null;

function currentRivalAnimations() {
  return rivalAnimations?.opponent === match.opponent &&
    rivalAnimations?.turnSerial === match.turnSerial && match.active === 'opponent' ? rivalAnimations : null;
}

function queueRivalAnimation(play) {
  const queue = currentRivalAnimations();
  if (!queue) return play();
  const finished = queue.tail.then(() => {
    if (currentRivalAnimations() !== queue) return;
    const duration = play();
    if (typeof duration === 'number' && duration > 0) {
      return new Promise((resolve) => window.setTimeout(resolve, duration));
    }
    return duration;
  });
  queue.tail = finished.catch((error) => console.error('Rival animation failed:', error));
  return queue.tail;
}

async function finishRivalAnimations(queue) {
  while (currentRivalAnimations() === queue) {
    const tail = queue.tail;
    await tail;
    if (queue.tail === tail) return;
  }
}

function playCombatCue(options) {
  const effects = window.peppermintCombatEffects;
  const present = (cue) => {
    const duration = effects?.play(cue) || false;
    if (!duration) cue.onImpact?.();
    return duration;
  };
  if (!currentRivalAnimations()) return present(options);
  // A previous animation may outlast the DOM nodes describing a card that just left play.
  const capture = (element) => {
    const rect = element?.getBoundingClientRect?.() ?? element;
    return () => element?.isConnected ? element : rect;
  };
  const source = capture(options.source);
  const targets = options.targets.map(capture);
  queueRivalAnimation(() => present({ ...options, source: source(), targets: targets.map((target) => target()) }));
  return true;
}


function combatSide(owner) { return owner === match.player ? 'player' : 'opponent'; }
function combatLane(owner, lane) {
  const zone = document.querySelector(`[data-side="${combatSide(owner)}"][data-lane="${lane}"]`);
  return zone?.querySelector('.battle-card') || zone;
}
function combatSource(card, owner, lane) {
  if (lane >= 0) return combatLane(owner, lane);
  if (owner === match.player) {
    const hand = [...document.querySelectorAll('#hand .hand-card')].find((element) => element.dataset.id === card.instance);
    if (hand) return hand;
  }
  return document.getElementById(`${combatSide(owner)}-board`);
}
function showCombatCue(card, owner, lane, targets = [], kind = 'skill') {
  if (!card || !owner) return false;
  return playCombatCue({ card, kind, source: combatSource(card, owner, lane), targets, audio: soundContext });
}
function combatCardStamp(card) {
  if (!card) return '';
  return [
    card.instance, card.cost, card.ready, card.attackBonus, card.euphoria, card.euphoriaProtected,
    card.protectedBy, card.ignoresIslandField, card.skipAttackThisTurn, card.skipAttackNext,
    card.cannotMoveUntilTurn, card.abilityUsedTurn, card.usedIntercept, card.poisonTurns,
  ].join('/');
}
function combatSnapshot() {
  return {
    lanes: [match.player, match.opponent].flatMap((owner) => owner.lanes.map(combatCardStamp)),
    life: [match.player, match.opponent].flatMap((owner) => owner.life.middle.map(combatCardStamp)),
    field: JSON.stringify([match.fieldCard?.id, match.fieldCard?.usedTurnKeys]),
    piles: [match.player, match.opponent].flatMap((owner) => [
      owner.hand.map(combatCardStamp).join(','),
      owner.deck.map((card) => card.instance).join(','),
      owner.destroyed.map((card) => card.instance).join(','),
      owner.transformationDeck.length,
    ]).join('|'),
    pending: match.pendingDharmaRevives.length,
    energy: match.energy,
  };
}
function followCombatCue(cue, perform) {
  if (activeCombatCue === cue || cue.owner !== match.player && cue.owner !== match.opponent) return perform();
  const previous = activeCombatCue;
  const before = combatSnapshot();
  const source = combatSource(cue.card, cue.owner, cue.lane)?.getBoundingClientRect?.();
  activeCombatCue = cue;
  try {
    return perform();
  } finally {
    activeCombatCue = previous;
    if (!cue.shown && !cue.waitingForChoice) {
      const after = combatSnapshot();
      const teams = [match.player, match.opponent];
      const targets = after.lanes.flatMap((stamp, index) => stamp !== before.lanes[index]
        ? [combatLane(teams[Math.floor(index / 3)], index % 3)] : []);
      for (const [index, stamp] of after.life.entries()) {
        if (stamp !== before.life[index]) targets.push(lifeTargetElement(combatSide(teams[Math.floor(index / 3)]), index % 3));
      }
      if (before.field !== after.field) targets.push(document.getElementById('field-zone'));
      if (cue.card.id === 'mana-potion' && before.energy !== after.energy) targets.push(document.querySelector('.energy'));
      const sceneTargets = cue.sceneTargets || targets.filter(Boolean);
      if (sceneTargets.length || cue.shatters?.length || before.piles !== after.piles || before.pending !== after.pending || before.energy !== after.energy || cue.reveal) {
        cue.shown = true;
        playCombatCue({
          card: cue.card, source, kind: cue.kind, targets: sceneTargets, audio: soundContext,
          onImpact: cue.shatters?.length ? () => {
            if (cue.owner === match.player || cue.owner === match.opponent) cue.shatters.forEach((shatter) => shatter());
          } : undefined,
        });
      }
    }
  }
}
function trackCombatCue(card, owner, lane, perform, { kind = 'skill', reveal = false } = {}) {
  if (!card || !window.peppermintCombatEffects || !match.player || !match.opponent || activeCombatCue?.card === card) return perform();
  return followCombatCue({ card, owner, lane, kind, reveal, shown: false }, perform);
}
function cardCombatStatus(card, owner) {
  if (!window.peppermintCombatEffects) return '';
  const statuses = [];
  if (card.skipAttackThisTurn || card.skipAttackNext) statuses.push(card.skipAttackReason === 'stun' ? 'stun' : 'freeze');
  if (card.cannotMoveUntilTurn > match.turn) statuses.push('root');
  if ((card.protectedBy && owner?.lanes.some((unit) => unit?.instance === card.protectedBy)) ||
      (match.fieldCard?.id === 'ip-field' && card.title === 'Island Paradise' && !card.ignoresIslandField) ||
      isEffectProtected(card)) statuses.push('guard');
  if (match.pendingDharmaRevives.some((pending) => pending.dharmaInstance === card.instance)) statuses.push('revive');
  return window.peppermintCombatEffects.status(statuses);
}
function battleSideName(owner) { return owner === match.player ? 'You' : 'Enemy'; }
const battleHistoryPanel = document.getElementById('battle-history');
const battleHistoryToggle = document.getElementById('battle-history-toggle');
const narrowBattleHistory = window.matchMedia('(max-width: 780px)');
function setBattleHistoryExpanded(expanded) {
  battleHistoryPanel.classList.toggle('expanded', expanded);
  battleHistoryToggle.setAttribute('aria-expanded', String(expanded));
}
setBattleHistoryExpanded(!narrowBattleHistory.matches);
narrowBattleHistory.addEventListener('change', (event) => setBattleHistoryExpanded(!event.matches));
battleHistoryToggle.addEventListener('click', () => setBattleHistoryExpanded(!battleHistoryPanel.classList.contains('expanded')));
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
const classAbilities = { Shielder: 'Redirect enemy attacks from adjacent lanes to this card.', Shooter: 'Can attack an adjacent Fighter or the opposite Life Zone directly.', Summoner: 'If this lane’s Life Zone is empty, summon a same-element Creature there as a Familiar.', Enchanter: 'Adjacent allies gain +1 attack.', Trickster: 'The opposing fighter loses 1 attack.', Healer: 'On summon, add the top card of your deck to this lane’s Life Zone.', Blader: '+1 attack during its owner’s turn; −1 attack during the rival’s turn.', Brawler: '+1 attack while an adjacent lane is empty.' };
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
function matchesTransformation(fighter, transformation) {
  if (!fighter) return false;
  return fighter.name === transformation.name || (fighter.id === 'wb-topaz-diamond' && transformation.id === 'wb-zodiac-topaz');
}
const rivalZodiacFighters = Object.freeze({
  'zodiac-guardian-rick': 'ww-rick',
  'ww-zodiac-guardian-brian': 'ww-brian',
  'ip-coyote-zodiac': 'ip-coyote',
  'ip-chase-zodiac': 'ip-chase',
  'lt-zodiac-fritz': 'lt-fritz',
  'wb-zodiac-topaz': 'wb-topaz-diamond',
  'wb-zodiac-dimitri': 'wb-dimitri',
  'zodiac-guardian-sabrina': 'valhalla-sabrina',
  'zodiac-guardian-ryota': 'valhalla-ryota',
  'ts-zodiac-aemi': 'ts-aemi',
  'ts-zodiac-ryuu': 'ts-ryuu',
});
function draftRivalAvatar(deck, transformations) {
  const fighters = new Map(deck.filter(isFighterCard).map((card) => [card.id, card]));
  const candidates = Array.from(fighters.values(), (card) => ({ card, openingIds: [card.id] }));
  if (deck.some((card) => card.id === 'avatar-gem')) {
    for (const card of transformations) {
      const fighterId = rivalZodiacFighters[card.id];
      if (fighters.has(fighterId)) candidates.push({ card, openingIds: [fighterId, 'avatar-gem'] });
    }
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function newPlayer(isAI, deckId, savedDeck = null, randomizeAvatar = false) {
  const sourceCards = ['fun', 'mixed'].includes(deckId) ? allCardCatalog() : deckId === 'wild-west' ? wildWestLibrary : deckId === 'island-paradise' ? islandParadiseLibrary : deckId === 'living-toy' ? livingToyLibrary : deckId === 'winter-ball' ? winterBallLibrary : deckId === 'valhalla' ? valhallaLibrary : deckId === 'toxic-sewer' ? toxicSewerLibrary : cardLibrary.filter((card) => !['locker-room', 'zodiac-egg'].includes(card.id));
  const baseCards = sourceCards.filter((card) => card.type !== 'Transformation');
  let deckPool;
  if (savedDeck) {
    const catalog = new Map(allCardCatalog().map((card) => [card.id, card]));
    deckPool = savedDeck.cards.map((id) => catalog.get(id)).filter(Boolean).map(cloneCard);
  } else if (['fun', 'mixed'].includes(deckId)) deckPool = baseCards.map(cloneCard);
  else {
    const copyCounts = new Map();
    deckPool = baseCards.flatMap((card) => {
      const copies = Math.max(1, card.deckCopies ?? 1);
      copyCounts.set(card.id, copies);
      return Array.from({ length: copies }, () => cloneCard(card));
    });
    const targetSize = Math.max(24, deckPool.length);
    while (deckPool.length < targetSize) {
      const repeatable = baseCards.filter((card) => {
        if (card.deckCopies != null) return false;
        const copyLimit = card.maxCopies ?? (card.type === 'Creature' || card.type === 'Action' ? 3 : 1);
        return (copyCounts.get(card.id) || 0) < copyLimit;
      });
      if (!repeatable.length) break;
      const card = repeatable[Math.floor(Math.random() * repeatable.length)];
      deckPool.push(cloneCard(card));
      copyCounts.set(card.id, (copyCounts.get(card.id) || 0) + 1);
    }
  }
  const deck = shuffleDeck(deckPool);
  const ascendanceCards = savedDeck
    ? allCardCatalog().filter((card) => card.type === 'Transformation' && savedDeck.ascendance.includes(card.id))
    : transformationsForDeck(deckId === 'mixed' ? 'fun' : deckId);
  const transformationDeck = ascendanceCards.map(cloneCard);
  const rival = randomizeAvatar ? draftRivalAvatar(deck, transformationDeck) : null;
  const opening = (rival?.openingIds || []).map((id) => deck.splice(deck.findIndex((card) => card.id === id), 1)[0]);
  const lifeCards = deck.splice(0, 4);
  const hand = shuffleDeck([...opening, ...deck.splice(0, 5 - opening.length)]);
  return { avatar: rival?.card || null, hand, deck, transformationDeck, life: { middle: lifeCards.slice(0, 3), main: lifeCards[3], familiars: [null, null, null] }, lanes: [null, null, null], destroyed: [], isAI };
}
function beginMatch({ playerDeckId, opponentDeckId, collectionOnly, tutorialMode, playerAvatar, opponent }, savedDeck) {
  rivalAnimations = null;
  pendingAiSummons.clear();
  aiSummonAnimationTail = Promise.resolve();
  window.peppermintCombatEffects?.clear();
  document.querySelectorAll('.shatter-overlay').forEach((overlay) => overlay.remove());
  mainLifeChainState = { player: null, opponent: null };
  handOverflowOpen = false;
  pendingEndTurnAfterDiscard = false;
  battleHistory.length = 0;
  const historyList = document.getElementById('battle-history-list'); if (historyList) historyList.replaceChildren();
  const historyCount = document.getElementById('history-count'); if (historyCount) historyCount.textContent = '0';
  match.turn = 1; match.turnSerial = 0; match.active = 'player'; match.energy = 1; match.maxEnergy = 1; match.turnEnergyCap = 1; match.secondPlayerBonusPending = true; match.fieldCard = null; match.pendingDharmaRevives = []; match.selected = null; match.attackerLane = null; match.attackMode = false; match.attackResolving = false; match.drawn = false; match.over = false; match.collectionOnly = collectionOnly; match.tutorialMode = tutorialMode; match.avatarGemUses = 0; match.battleDestroyedCards = 0;
  match.playerDeckId = collectionOnly ? 'collection' : playerDeckId; match.opponentDeckId = opponentDeckId; document.getElementById('tutorial-bubble').classList.add('hidden'); document.getElementById('tutorial-reopen').classList.add('hidden');
  match.player = newPlayer(false, playerDeckId, savedDeck);
  match.opponent = opponent;
  match.playerDeckName = savedDeck?.name;
  match.playerProfileAvatar = playerAvatar;
  match.playerProfileName = playerProfileName(window.peppermintCurrentUser) || 'YOU';
  match.profileId = window.peppermintCurrentUser?.id || null;
  window.peppermintSyncPlayerIdentity();
  if (tutorialMode) setupTutorialScene(0); else match.player.hand.forEach((card) => queueDrawAnimation(match.player, card));
  render();
  logBattleEvent(`Battle started · You: ${savedDeck?.name || deckNames[playerDeckId]} · Enemy: ${deckNames[opponentDeckId]}${collectionOnly ? ' · Standard' : ''}.`);
}
const tutorialRoles = ['Shielder','Shooter','Summoner','Enchanter','Trickster','Healer','Blader','Brawler'];
const tutorialLessons = [
  { title:'Summon a Fighter or Creature', copy:'Click a card to inspect it. To play one, drag Hopkin from your hand into Lane 1. He costs 1 Mana, and you have 1 Mana.' },
  { title:'Wait a turn before attacking', copy:'Click DO THE ACTION to hide this message. End Turn is highlighted; click it to continue. Newly summoned fighters cannot attack on their first turn.' },
  { title:'Destroy an enemy fighter', copy:'Fighters usually attack forward into the opposing lane. Ready fighters pulse softly. Drag Hopkin onto the enemy fighter.' },
  { title:'Use element advantages', copy:'Croaktail and Gummy each have 1 ATK. Drag Croaktail from your hand into Lane 1. Croaktail will be ready to attack immediately. Aqua beats Ignis, so Croaktail gets +1 ATK for this attack.' },
  { title:'Break a Life Zone', copy:'The fighters are cleared. Drag Aemi in Lane 1 onto the rival Life Zone in Lane 1.' },
  { title:'Use a special card effect', copy:'Drag Ryota into Lane 1. Discard the extra card from your hand, then choose the rival fighter in Lane 1 for Ryota’s Solar explosion.' },
  { title:'Play an Action card', copy:'Drag Shopping from your hand onto the battlefield. It costs 2 Mana, draws two cards, then goes to the Pandemonium Zone.' },
  { title:'Play a Field card', copy:'Drag Academy Hall from your hand onto the battlefield. It becomes the shared Field and boosts Academy cards while one is present.' },
  { title:'Shielder class ability', role:'Shielder', situation:'Your Shielder is in the center lane; the rival will attack the neighboring Life Zone. The Shielder redirects the attack.' },
  { title:'Shooter class ability', role:'Shooter', situation:'Your Shooter is in Lane 1 and an enemy Fighter is in the adjacent Lane 2. Attack that adjacent fighter.' },
  { title:'Summoner class ability', role:'Summoner', situation:'Your Summoner’s Life Zone is empty. Summon it in Lane 1, then choose the matching-element Creature to become its Familiar.' },
  { title:'Enchanter class ability', role:'Enchanter', situation:'An ally is already in Lane 1. Summon the Enchanter beside it in Lane 2; the ally gains +1 ATK.' },
  { title:'Trickster class ability', role:'Trickster', situation:'An enemy Fighter faces your Trickster in Lane 1. Summon the Trickster there; the enemy loses 1 ATK.' },
  { title:'Healer class ability', role:'Healer', situation:'Your Lane 1 Life Zone is empty. Summon the Healer there; its class ability restores that Life Zone.' },
  { title:'Blader class ability', role:'Blader', situation:'Your Blader gains +1 ATK throughout your turn and −1 ATK throughout the rival’s turn.' },
  { title:'Brawler class ability', role:'Brawler', situation:'Your Brawler is ready in Lane 1 and the adjacent lanes are empty. Attack the opposing Fighter with its +1 ATK bonus.' },
  { title:'Destroy the Main Life', copy:'All three middle Life Zones are empty. Drag your center-lane Shooter onto the rival Main Life to finish the tutorial.' }
];
let tutorialPromptCopy = '';
let tutorialPhase = '';
let tutorialBubbleDismissed = false;
function tutorialCard(id) { const source=allCardCatalog().find((card)=>card.id===id); return source ? cloneCard(source) : null; }
function tutorialCardForRole(role) { const source=allCardCatalog().find((card)=>card.role===role && card.type!=='Transformation' && card.type!=='Action'); return source ? cloneCard(source) : null; }
function tutorialPracticeFighter({role='Trickster',element='Terra',attack=1}={}) { const card=tutorialCardForRole(role) || tutorialCard('ww-bandito'); card.attack=attack; card.element=element; card.role=role; card.ability='Tutorial practice card.'; card.ready=true; return card; }
function setupTutorialScene(stage) {
  tutorialLessonIndex=stage; tutorialPhase=stage===3?'summon':stage===7?'field-play':''; tutorialBubbleDismissed=false; match.selected=null; match.attackMode=false; match.attackerLane=null; match.attackResolving=false; match.active='player'; match.turn=Math.max(1,match.turn); match.maxEnergy=10; match.energy=10; match.turnEnergyCap=10; match.secondPlayerBonusPending=false; match.fieldCard=null;
  const p=match.player, e=match.opponent; p.lanes=[null,null,null]; e.lanes=[null,null,null]; p.life.familiars=[null,null,null]; e.life.familiars=[null,null,null]; p.life.middle=[0,1,2].map(()=>tutorialCard('academy-fritz')); e.life.middle=[0,1,2].map(()=>tutorialCard('ww-bandito')); p.life.main=tutorialCard('academy-coyote'); e.life.main=tutorialCard('ww-rick'); p.destroyed=[]; e.destroyed=[]; p.hand=[]; e.hand=[tutorialCard('ww-bandito'),tutorialCard('ww-sunnythorn')].filter(Boolean); p.deck=p.deck.filter(Boolean);
  const place=(owner,lane,card,ready=true)=>{ if(card){ card.ready=ready; card.attacked=false; owner.lanes[lane]=card; } };
  const cardByRole=(role)=>tutorialCardForRole(role);
  if(stage===0){ match.maxEnergy=match.energy=match.turnEnergyCap=1; p.hand=[tutorialCard('ww-hopkin')].filter(Boolean); }
  else if(stage===1){ match.maxEnergy=match.energy=match.turnEnergyCap=0; if(!p.lanes[0]) place(p,0,tutorialCard('ww-hopkin'),false); }
  else if(stage===2){ place(p,0,tutorialCard('ww-hopkin'),true); place(e,0,tutorialCard('gummy'),true); }
  else if(stage===3){ p.hand=[tutorialCard('ip-croaktail')].filter(Boolean); place(e,0,tutorialCard('gummy'),true); }
  else if(stage===4){ place(p,0,tutorialCard('aemi'),true); }
  else if(stage===5){ p.hand=[tutorialCard('ryota'),tutorialCard('academy-fritz')].filter(Boolean); place(e,0,tutorialPracticeFighter({role:'Enchanter',element:'Terra',attack:1}),true); match.maxEnergy=match.energy=match.turnEnergyCap=3; }
  else if(stage===6){ p.hand=[tutorialCard('wb-shopping')].filter(Boolean); match.maxEnergy=match.energy=match.turnEnergyCap=4; }
  else if(stage===7){ p.hand=[tutorialCard('academy-grounds')].filter(Boolean); place(p,0,tutorialCard('academy-fritz'),true); place(e,0,tutorialCard('ww-bandito'),true); match.maxEnergy=match.energy=match.turnEnergyCap=4; }
  else if(stage===8){ place(p,0,tutorialCard('academy-fritz'),true); place(p,1,cardByRole('Shielder'),true); place(e,0,tutorialPracticeFighter({role:'Brawler',element:'Terra',attack:1}),true); }
  else if(stage===9){ place(p,0,cardByRole('Shooter'),true); place(e,1,tutorialPracticeFighter({role:'Enchanter',element:'Terra',attack:0}),true); }
  else if(stage===10){ const unit=cardByRole('Summoner'); if(unit){ p.life.middle[0]=null; p.hand=[unit]; const familiar=allCardCatalog().find((card)=>card.type==='Creature' && card.element===unit.element && card.id!==unit.id); if(familiar)p.hand.push(cloneCard(familiar)); } }
  else if(stage===11){ place(p,0,tutorialPracticeFighter({role:'Summoner',element:'Terra',attack:1}),true); const unit=cardByRole('Enchanter'); if(unit)p.hand=[unit]; }
  else if(stage===12){ place(e,0,tutorialPracticeFighter({role:'Brawler',element:'Terra',attack:1}),true); const unit=cardByRole('Trickster'); if(unit)p.hand=[unit]; }
  else if(stage===13){ p.life.middle[0]=null; const unit=cardByRole('Healer'); if(unit)p.hand=[unit]; }
  else if(stage===14){ place(p,0,cardByRole('Blader'),true); place(e,0,tutorialPracticeFighter({role:'Enchanter',element:'Terra',attack:0,name:'Practice Target'}),true); }
  else if(stage===15){ place(p,0,tutorialCard('academy-coyote'),true); place(e,0,tutorialPracticeFighter({role:'Enchanter',element:'Terra',attack:0,name:'Practice Target'}),true); }
  else if(stage===16){ place(p,1,tutorialPracticeFighter({role:'Shooter',element:'Aer',attack:2}),true); e.life.middle=[null,null,null]; }
  const lesson=tutorialLessons[stage]; tutorialPromptCopy=lesson?.copy || ''; if(stage===8)tutorialPromptCopy='Click DO THE ACTION, then End Turn. Watch the rival attack your Fritz in Lane 1; your Shielder in Lane 2 intercepts and takes the attack.';
  if(lesson?.role){ const card=allCardCatalog().find((entry)=>entry.role===lesson.role && entry.type!=='Transformation'); let situation=lesson.situation || ''; const enemyName=e.lanes.find(Boolean)?.name || ''; const allyName=p.lanes.find(Boolean)?.name || ''; if(lesson.role==='Shooter'&&enemyName)situation=`Your Shooter is in Lane 1 and ${enemyName} is in the adjacent Lane 2. Drag it onto ${enemyName}.`; if(lesson.role==='Enchanter'&&allyName)situation=`${allyName} is already in Lane 1. Drag the Enchanter into Lane 2; ${allyName} gains +1 ATK.`; if(lesson.role==='Trickster'&&enemyName)situation=`${enemyName} faces your Trickster in Lane 1. Drag the Trickster into that lane; ${enemyName} loses 1 ATK.`; if(lesson.role==='Blader'&&enemyName)situation=`Your Blader is ready in Lane 1 and has +1 ATK throughout your turn. Its modifier becomes −1 ATK during the rival’s turn.`; if(lesson.role==='Brawler'&&enemyName)situation=`Your Brawler is ready in Lane 1 and the adjacent lanes are empty. Drag it onto ${enemyName} to attack with its +1 ATK bonus.`; const action=({Shielder:'End your turn now to trigger the interception.',Shooter:'Drag the Shooter from Lane 1 onto the target in Lane 2.',Summoner:'Drag the Summoner into Lane 1, then choose the matching Creature.',Enchanter:'Drag the Enchanter into Lane 2.',Trickster:'Drag the Trickster into Lane 1.',Healer:'Drag the Healer into Lane 1.',Blader:'Drag the Blader in Lane 1 onto the target in Lane 1.',Brawler:'Drag the Brawler in Lane 1 onto the target in Lane 1.'})[lesson.role]; tutorialPromptCopy=`${action} ${classAbilities[lesson.role]} ${situation} ${card ? `Example card: ${card.name}.` : ''}`; }
  if(stage===5&&e.lanes[0])tutorialPromptCopy=`Drag Ryota into Lane 1. Discard the extra card from your hand, then choose ${e.lanes[0].name} in Lane 1 for Ryota’s Solar explosion.`;
  if(stage===8)tutorialPromptCopy='Click DO THE ACTION, then End Turn. Watch the rival attack your Fritz in Lane 1; your Shielder in Lane 2 intercepts and takes the attack.';
  if(stage===15)tutorialPromptCopy='Brawlers gain attack when they have empty lane besides them. Coyote here gains one attack for the empty lane 2. Attack with him to continue.';
  render(); renderTutorialLesson();
}
function completeTutorialObjective() { if(!match.tutorialMode || match.over)return; const next=tutorialLessonIndex+1; if(next>=tutorialLessons.length)return; setupTutorialScene(next); }
function tutorialCompleteAfterEffect(stage,delay=1600) { tutorialBubbleDismissed=true; renderTutorialLesson(); window.setTimeout(()=>{if(match.tutorialMode&&!match.over&&tutorialLessonIndex===stage)completeTutorialObjective();},delay); }
function renderTutorialLesson() {
  if(!match.tutorialMode || match.over)return;
  const lesson=tutorialLessons[tutorialLessonIndex]; if(!lesson)return;
  const bubble=document.getElementById('tutorial-bubble'); bubble.classList.toggle('hidden',tutorialBubbleDismissed); const reopen=document.getElementById('tutorial-reopen'); reopen.textContent='VIEW TUTORIAL'; reopen.classList.toggle('hidden',!tutorialBubbleDismissed);
  document.body.classList.toggle('tutorial-end-turn-focus',tutorialLessonIndex===1);
  const focus=document.getElementById('tutorial-focus-overlay'); if(tutorialLessonIndex===1){ const button=document.getElementById('end-turn'); const rect=button.getBoundingClientRect(); focus.style.setProperty('--spot-x',String(rect.left+rect.width/2)+'px'); focus.style.setProperty('--spot-y',String(rect.top+rect.height/2)+'px'); focus.style.setProperty('--spot-rx',String(Math.max(72,rect.width*.88))+'px'); focus.style.setProperty('--spot-ry',String(Math.max(40,rect.height*1.8))+'px'); focus.classList.remove('hidden'); } else { focus.classList.add('hidden'); }
  document.getElementById('tutorial-progress').textContent=`TUTORIAL FIGHT · LESSON ${tutorialLessonIndex+1} / ${tutorialLessons.length}`;
  document.getElementById('tutorial-title').textContent=lesson.title;
  document.getElementById('tutorial-copy').textContent=tutorialPromptCopy || lesson.copy || lesson.situation || '';
  const example=document.getElementById('tutorial-example');
  if(lesson.role){ const card=allCardCatalog().find((entry)=>entry.role===lesson.role && entry.type!=='Transformation'); if(card){example.classList.remove('hidden');document.getElementById('tutorial-card-art').src=card.art;document.getElementById('tutorial-card-art').alt=`${card.name} card art`;document.getElementById('tutorial-card-kicker').textContent=`${card.title} · ${card.role}`;document.getElementById('tutorial-card-name').textContent=card.name;document.getElementById('tutorial-card-ability').textContent=classAbilities[lesson.role];document.getElementById('tutorial-situation').textContent=lesson.situation||'';} }
  else example.classList.add('hidden');
  document.getElementById('tutorial-prev').classList.add('hidden');
  const next=document.getElementById('tutorial-next'); next.disabled=false; next.textContent='DO THE ACTION'; next.setAttribute('aria-label','Hide tutorial message and do the required action');
  document.getElementById('tutorial-hide').classList.add('hidden');
  document.getElementById('tutorial-reopen').classList.toggle('hidden',!tutorialBubbleDismissed);
}
function tutorialWrongAction(message='Follow the instruction in the center bubble to continue.') { announceEffect(message); }
function tutorialCanSummon(card,lane) {
  if(!match.tutorialMode)return true;
  const stage=tutorialLessonIndex;
  if(stage===0)return card.id==='ww-hopkin'&&lane===0;
  if(stage===3&&tutorialPhase==='summon')return card.id==='ip-croaktail'&&lane===0;
  if(stage===5)return card.id==='ryota'&&lane===0;
  if(stage===10)return card.role==='Summoner'&&lane===0;
  if(stage===11)return card.role==='Enchanter'&&lane===1;
  if(stage===12)return card.role==='Trickster'&&lane===0;
  if(stage===13)return card.role==='Healer'&&lane===0;
  return false;
}
function tutorialCanUseAction(action) { if(!match.tutorialMode)return true; return tutorialLessonIndex===6 ? action.id==='wb-shopping' : tutorialLessonIndex===7 ? action.id==='academy-grounds' : false; }
function tutorialCanAttack(attacker,lane,target) {
  if(!match.tutorialMode)return true;
  const stage=tutorialLessonIndex;
  if(stage===2)return lane===0&&target.type==='lane'&&target.index===0;
  if(stage===3)return tutorialPhase==='attack'&&lane===0&&target.type==='lane'&&target.index===0;
  if(stage===7)return tutorialPhase==='attack'&&lane===0&&target.type==='lane'&&target.index===0;
  if(stage===4)return lane===0&&target.type==='life'&&!target.main&&target.index===0;
  if(stage===9)return lane===0&&target.type==='lane'&&target.index===1;
  if(stage===14||stage===15)return lane===0&&target.type==='lane'&&target.index===0;
  if(stage===16)return lane===1&&target.type==='life'&&target.main===true;
  return false;
}
function tutorialAdvanceAfterSummon(card,lane) {
  if(!match.tutorialMode)return;
  const stage=tutorialLessonIndex;
  if(stage===3&&tutorialPhase==='summon'&&card.id==='ip-croaktail'&&lane===0){ tutorialPhase='attack'; card.ready=true; tutorialPromptCopy='Croaktail and Gummy each have 1 ATK. Croaktail is ready to attack now. Aqua beats Ignis, so Croaktail gets +1 ATK for this attack. Drag Croaktail onto Gummy in Lane 1.'; render(); renderTutorialLesson(); return; }
  if(stage===0&&card.id==='ww-hopkin'&&lane===0) completeTutorialObjective();
  if((stage===11&&card.role==='Enchanter'&&lane===1)||(stage===12&&card.role==='Trickster'&&lane===0)||(stage===13&&card.role==='Healer'&&lane===0)) tutorialCompleteAfterEffect(stage);
}
function tutorialEndTurn() {
  const stage=tutorialLessonIndex;
  match.active='transition'; match.attackMode=false; match.attackerLane=null; match.selected=null; render();
  if(stage===3&&tutorialPhase==='wait'){ window.setTimeout(()=>{ startPlayerTurn(); if(match.player.lanes[0])match.player.lanes[0].ready=true; tutorialPhase='attack'; tutorialPromptCopy='Croaktail is ready and softly pulsing. Drag it onto Gummy in the opposing Lane 1. Both started at 1 ATK; Aqua beats Ignis, giving Croaktail +1 ATK for this attack.'; render(); renderTutorialLesson(); },350); return true; }
  if(stage===1){ const foe=tutorialCard('gummy'); foe.ready=false; match.opponent.lanes[0]=foe; window.setTimeout(()=>{startPlayerTurn(); setupTutorialScene(2);},450); return true; }
  if(stage===8){ const attacker=match.opponent.lanes[0]; if(attacker){attacker.ready=true; tutorialBubbleDismissed=true; renderTutorialLesson(); animateAttack(match.opponent,0,(target)=>battle(attacker,0,match.opponent,target),{type:'lane',index:0}); window.setTimeout(()=>setupTutorialScene(9),1450);} return true; }
  match.active='player'; render(); tutorialWrongAction('End your turn only when the tutorial asks you to.'); return true;
}
document.getElementById('tutorial-hide').addEventListener('click',()=>{ tutorialBubbleDismissed=true; document.getElementById('tutorial-bubble').classList.add('hidden'); document.getElementById('tutorial-reopen').classList.remove('hidden'); });
document.getElementById('tutorial-reopen').addEventListener('click',()=>{tutorialBubbleDismissed=false;renderTutorialLesson();});
document.getElementById('tutorial-next').addEventListener('keydown',()=>{});
window.addEventListener('resize',()=>{if(match.tutorialMode&&!match.over&&tutorialLessonIndex===1&&!tutorialBubbleDismissed)renderTutorialLesson();});
document.getElementById('tutorial-prev').addEventListener('click',()=>{});
document.getElementById('tutorial-next').addEventListener('click',()=>{ if(!match.tutorialMode||match.over)return; tutorialBubbleDismissed=true; document.getElementById('tutorial-bubble').classList.add('hidden'); document.getElementById('tutorial-reopen').classList.remove('hidden'); });
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
function showDeckSelect() {
  selectedBattleMode = 'collection';
  document.querySelectorAll('[data-battle-mode]').forEach((option) => {
    const selected = option.dataset.battleMode === selectedBattleMode;
    option.classList.toggle('selected', selected);
    option.setAttribute('aria-pressed', String(selected));
  });
  syncDeckPicker();
  document.getElementById('player-deck-picker-group').classList.add('hidden');
  document.getElementById('rival-deck-picker-group').classList.remove('hidden');
  document.getElementById('tutorial-bubble').classList.add('hidden');
  document.getElementById('tutorial-reopen').classList.add('hidden');
  document.getElementById('deck-select-dialog').showModal();
}
function escapeHTML(value = '') { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }
function displayedCardType(card) { return ['academy-grounds', 'toy-store', 'ip-field', 'christmas-mall', 'cactus-creek', 'valhalla-bar', 'ts-field'].includes(card.id) ? 'Field' : card.type || 'Fighter'; }
// Cards in a Battle Zone are battle cards regardless of their printed subtype.
// Treat the zones as the source of truth so Creature/Fighter and older cards
// without a type field all remain valid targets for Battle Card effects.
function isBattleCard(card) { return Boolean(card && !['Action', 'Field'].includes(card.type)); }
function displayedCardName(card) { return card.name || (displayedCardType(card) === 'Field' ? 'Field' : card.title); }
function cardTypeIcon(card, extraClass = '') { return displayedCardType(card) === 'Field' ? `<svg class="field-type-icon ${extraClass}" viewBox="0 0 48 48" role="img" aria-label="Field card"><circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c6 5 9 11 9 18s-3 13-9 18M24 6c-6 5-9 11-9 18s3 13 9 18M9 15h30M9 33h30"/></svg>` : ''; }
function hasCardClass(card) { return !!card.role && card.role !== 'Action' && card.type !== 'Action'; }
function libraryCardMarkup(card) {
  const displayName = displayedCardName(card);
  const element = card.element || 'None';
  const art = card.art ? `<img src="${escapeHTML(card.art)}" alt="${escapeHTML(displayName)} card art" loading="lazy" />` : `<div class="library-art-fallback">${escapeHTML(displayName)}</div>`;
  const typeLabel = displayedCardType(card);
  const classIcon = hasCardClass(card) ? classIconMarkup(card.role, element, 'library-class-icon') : '';
  const elementIcon = elementIcons[element] ? `<img class="library-element-icon" src="assets/icons/${elementIcons[element]}.webp" alt="${escapeHTML(element)}" title="${escapeHTML(element)}" />` : '';
  const elementLabel = element === 'None' ? 'Neutral' : escapeHTML(element);
  const attackText = card.type === 'Action' ? 'No attack' : `${Number(card.attack) || 0} ATK`;
  const copies = card.maxCopies ?? (card.type === 'Transformation' || !card.type ? 1 : card.type === 'Creature' || card.type === 'Action' ? 3 : 1);
  const classEffect = !hasCardClass(card) ? '' : classAbilities[card.role] ? `<div class="library-effect library-class-effect"><b>${escapeHTML(card.role)} CLASS</b><span>${escapeHTML(classAbilities[card.role])}</span></div>` : '';
  const typeLine = `<div class="library-type-line">${cardTypeIcon(card, 'library-field-type-icon')}<span>${escapeHTML(typeLabel)}</span></div>`;
  const classLine = `<div class="library-icon-row">${hasCardClass(card) ? `<span>${classIcon}${escapeHTML(card.role)}</span>` : ''}<span>${elementIcon}${elementLabel}</span></div>`;
  return `<article class="library-card element-${element.toLowerCase()}"><div class="library-card-art">${art}<span class="library-cost">${card.cost}</span></div><div class="library-card-info"><span class="library-card-title">${escapeHTML(card.title)}</span><h4>${escapeHTML(displayName)}</h4>${typeLine}${classLine}<div class="library-card-meta"><span>${attackText} · ${card.cost} Mana</span><span>Max ${copies} in deck</span></div>${classEffect}<div class="library-effect"><b>CARD EFFECT</b><span>${escapeHTML(card.ability)}</span></div></div></article>`;
}
const cardLibraryState = { deck: 'all', element: 'all', role: 'all', type: 'all', sort: 'name-asc' };
function renderCardLibrary(deckId = cardLibraryState.deck) {
  cardLibraryState.deck = deckId;
  const unique = (cards) => [...new Map(cards.map((card) => [`${card.title}|${card.name}`, card])).values()];
  const deckSources = { academy: cardLibrary.filter((card) => card.type !== 'Transformation' && !['locker-room', 'zodiac-egg'].includes(card.id)), 'wild-west': wildWestLibrary.filter((card) => card.type !== 'Transformation'), 'island-paradise': islandParadiseLibrary.filter((card) => card.type !== 'Transformation'), 'living-toy': livingToyLibrary.filter((card) => card.type !== 'Transformation'), 'winter-ball': winterBallLibrary.filter((card) => card.type !== 'Transformation'), valhalla: valhallaLibrary.filter((card) => card.type !== 'Transformation') };
  deckSources['toxic-sewer'] = toxicSewerLibrary.filter((card) => card.type !== 'Transformation');
  const allMain = unique(Object.values(deckSources).flat());
  const mainSource = deckId === 'all' ? allMain : deckSources[deckId] || deckSources.academy;
  const transformSource = unique(allCardCatalog().filter((card) => card.type === 'Transformation'));
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
  const section = (title, cards) => '<section class="library-section"><div class="library-section-heading"><h3>' + title + '</h3><span>' + cards.length + ' cards</span></div>' + (cards.length ? '<div class="library-card-grid">' + cards.map(libraryCardMarkup).join('') + '</div>' : '<p class="library-empty">No cards match these filters.</p>') + '</section>';
  const ascendanceDecks = ['academy','wild-west','island-paradise','living-toy','winter-ball','valhalla','toxic-sewer'];
  const ascendanceGroups = (deckId === 'all' || deckId === 'fun') ? ascendanceDecks.map((key) => ({ name: deckNames[key], cards: sortCards(filterCards(transformationsForDeck(key))) })) : [{ name: deckNames[deckId] || 'Academy', cards: deckId === 'toxic-sewer' ? sortCards(filterCards(transformationsForDeck(deckId))) : transforms }];
  const content = document.getElementById('card-library-content');
  content.innerHTML = '<div class="library-filters"><label>ELEMENT<select data-library-filter="element">' + options(elements, cardLibraryState.element, 'All elements') + '</select></label><label>CLASS<select data-library-filter="role">' + options(roles, cardLibraryState.role, 'All classes') + '</select></label><label>TYPE<select data-library-filter="type">' + options(types, cardLibraryState.type, 'All types') + '</select></label><label>SORT BY<select data-library-filter="sort"><option value="name-asc">Name · A–Z</option><option value="atk-desc">ATK · high to low</option><option value="atk-asc">ATK · low to high</option><option value="cost-desc">Cost · high to low</option><option value="cost-asc">Cost · low to high</option></select></label></div>' + section(heading + ' · MAIN DECK', mainCards) + ascendanceGroups.map((group) => section(escapeHTML(group.name) + ' · ASCENDANCE DECK', group.cards)).join('');
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
  const frozen = compact && Boolean(card.skipAttackThisTurn || card.skipAttackNext);
  const stunned = frozen && card.skipAttackReason === 'stun';
  const rooted = compact && Boolean(card.cannotMoveUntilTurn && match.turn < card.cannotMoveUntilTurn);
  const euphoric = compact && Boolean(card.euphoria);
  const statusClass = `${frozen ? (stunned ? ' status-stunned' : ' status-frozen') : ''}${rooted ? ' status-rooted' : ''}${euphoric ? ' status-euphoria' : ''}`;
  const freezeBadge = frozen ? `<span class="freeze-mark ${stunned ? 'stun-mark' : ''}" title="${stunned ? 'Stunned: cannot attack next turn' : card.skipAttackNext && !card.skipAttackThisTurn ? 'Cannot attack next turn' : 'Cannot attack this turn'}">${stunned ? '✦' : '❄'}</span>` : '';
  const euphoriaBubbles = euphoric ? `<span class="euphoria-bubbles${card.euphoriaProtected ? ' is-protected' : ''}" aria-hidden="true">${'<i></i>'.repeat(8)}</span>` : '';
  const handArtClass = !compact && ['ww-academy-rick'].includes(card.id) ? ' hand-art-rick' : !compact && ['academy-lynda', 'ww-academy-lynda'].includes(card.id) ? ' hand-art-lynda' : '';
  const art = card.art ? (() => {
    const cleanArt = card.art.split('?')[0];
    const filename = cleanArt.split('/').pop();
    const naturalArtClass = { 'zodiac-guardian-rick': 'natural-art-zodiac-rick', 'ww-rick': 'natural-art-western-rick', 'lt-rat-king': 'natural-art-rat-king', 'valhalla-khendal': 'natural-art-khendal', 'ip-brody': 'natural-art-brody', 'ww-wade': 'natural-art-wade', 'ip-natsuki': 'natural-art-natsuki', 'ip-swim-dont-sink': 'natural-art-swim', 'ww-academy-rick': 'natural-art-rick', 'ww-hopkin': 'natural-art-hopkin', 'ww-blake': 'natural-art-blake', 'ww-purrnip': 'natural-art-purrnip' }[card.id];
    if (naturalArtClass) {
      const imageUrl = card.art.includes('?') ? card.art : cleanArt + '?v=20261122-natural-card-art';
      return `<img class="card-art ${naturalArtClass}${handArtClass}" src="${imageUrl}" alt="${card.name}" />`;
    }
    const refreshedCrop = card.webpCrops || ['horatio', 'dharma', 'aemi', 'ww-fritz'].includes(card.id);
    const cropExtension = refreshedCrop ? '.webp' : '.jpg';
    const cropVersion = card.webpCrops && card.art.includes('?v=')
      ? card.art.split('?v=')[1]
      : refreshedCrop ? '20261125-updated-cuts' : '20261124-face-crops';
    const crop = (variant) => `assets/cards/crops/${variant}/${filename.replace(/\.[^.]+$/, cropExtension)}?v=${cropVersion}`;
    const size = compact ? 'battle' : 'hand';
    const mobileArt = window.matchMedia?.('(max-width: 520px)').matches || false;
    const mobileCrop = crop(`${size}-mobile`);
    const desktopCrop = crop(size);
    return `<img class="card-art${handArtClass}" src="${mobileArt ? mobileCrop : desktopCrop}" data-mobile-art="${mobileArt ? '1' : '0'}" data-desktop-art="${desktopCrop}" data-original-art="${escapeHTML(card.art)}" onerror="if(this.dataset.mobileArt==='1'){this.dataset.mobileArt='0';this.src=this.dataset.desktopArt;}else if(this.dataset.originalArt){this.onerror=null;this.src=this.dataset.originalArt;}" alt="${card.name}" />`;
  })() : `<div class="card-art-fallback">${card.name}</div>`;
  const elementIcon = elementIcons[card.element] ? `<img class="element-icon card-element-icon" src="assets/icons/${elementIcons[card.element]}.webp" alt="${escapeHTML(card.element)}" title="${escapeHTML(card.element)}" />` : '';
  const attackValueClass = attackInfo.change > 0 ? 'attack-value-raised' : attackInfo.change < 0 ? 'attack-value-lowered' : '';
  const attackValueStyle = attackInfo.change > 0 ? 'color:#ffdf70!important;text-shadow:0 0 8px #ffc64777' : attackInfo.change < 0 ? 'color:#ff817d!important;text-shadow:0 0 8px #f04d5c66' : '';
  const attackValueMarkup = `<strong class="${attackValueClass}" style="${attackValueStyle}">${attackInfo.total}</strong>`;
  const classIcon = classIconMarkup(card.type === 'Action' ? 'Action' : card.role, card.element, 'card-class-icon');
  const details = compact ? `<div class="card-bottom"><span class="card-element"></span><span class="card-stats" title="Base ${card.attack}${attackInfo.sources.length ? ` · ${attackInfo.sources.join(' · ')}` : ''}">${attackValueMarkup}${attackBadge} ATK</span></div>` : card.type === 'Action' ? `<div class="card-bottom"><span class="card-icons"></span><span class="card-stats">${card.cost} MANA</span></div>` : `<div class="card-bottom"><span class="card-icons"></span><span class="card-stats">${attackValueMarkup}${attackBadge} ATK</span></div>`;
  const summonLocked = !compact && card.id === 'vishnu' && !owner?.lanes.some((unit) => unit?.name === 'Peppermint');
  const displayName = displayedCardName(card);
  return `<div class="${compact ? 'battle-card' : 'hand-card'} ${sideClass} ${elementClass}${statusClass}${summonLocked ? ' disabled' : ''}" data-card-preview="${card.instance}" ${compact ? `role="button" tabindex="0" aria-label="${displayName}, drag to attack" data-lane="${laneIndex}"` : `data-id="${card.instance}" role="button" tabindex="0" title="${summonLocked ? 'Requires Peppermint in your Battle Zone' : ''}"`}>
    ${art}<span class="art-shade"></span>${compact ? cardCombatStatus(card, owner) : ''}${compact ? '' : `<span class="card-cost">${card.cost}</span>`}${elementIcon}${classIcon}<div class="card-heading"><div class="card-topline">${card.title}</div><div class="card-name">${displayName}</div></div>
    ${freezeBadge}${euphoriaBubbles}${compact ? poisonBadge(card) : ''}${details}</div>`;
}
function lifeCount(player) { return player.life.middle.filter(Boolean).length + (player.life.main ? 1 : 0); }
function familiarAtLane(player, laneIndex) {
  const fighter = player?.lanes?.[laneIndex];
  if (!fighter) return null;
  return (player.life.familiars || []).find((familiar) => familiar?.attachedTo === fighter.instance) || null;
}
function lifeMarkup(player, side) {
  const attacker = match.player?.lanes[match.attackerLane];
  const middle = player.life.middle.map((card, index) => {
    const direct = side === 'opponent' && match.attackMode && match.attackerLane === index && Boolean(card) && canTargetLifeZone(attacker, index, player, index);
    const familiar = familiarAtLane(player, index);
    return `<div class="life-card ${card ? '' : 'broken'} ${familiar ? 'has-familiar' : ''} ${direct ? 'direct-life-target' : ''}" data-life-side="${side}" data-life-index="${index}" aria-label="Life zone ${index + 1}"><span class="target-mark" aria-hidden="true">⌖</span>${card ? '<img class="life-heart" src="assets/ui-icons/crystal-heart.webp" alt="" aria-hidden="true" />' : ''}${familiar ? `<img class="life-familiar" src="${familiar.art}" alt="${familiar.name} Familiar" title="${familiar.name} · Familiar" />` : ''}${poisonBadge(card)}</div>`;
  }).join('');
  const mainDirect = side === 'opponent' && match.attackMode && match.attackerLane !== null && canAttackMainLife(attacker, match.attackerLane, player);
  const mainGuarded = player.life.middle.some(Boolean);
  const main = `<div class="life-card main-life ${player.life.main ? '' : 'broken'} ${mainDirect ? 'direct-life-target' : ''}" data-life-side="${side}" data-life-main="true" aria-label="Main life zone"><span class="target-mark" aria-hidden="true">⌖</span>${player.life.main ? '<img class="life-heart main-life-heart" src="assets/ui-icons/' + (mainGuarded ? 'crystal-heart-chained.png?v=2' : 'crystal-heart.webp') + '" alt="" aria-hidden="true" />' : ''}</div>`;
  return `<div class="life-middle">${middle}</div><div class="main-life-back">${main}</div>`;
}
function allMiddleLifeGone(player) { return player.life.middle.every((card) => !card); }
function islandParadiseBypassesLane(defender, laneIndex) {
  const blocker = defender?.lanes[laneIndex];
  return Boolean(match.fieldCard?.id === 'ip-field' && blocker?.title === 'Island Paradise' && !blocker?.ignoresIslandField);
}
function canAttackMainLife(attacker, laneIndex, defender) {
  const shooterHasCenterAccess = attacker?.role === 'Shooter' && (laneIndex === 1 || !defender.lanes[1] || islandParadiseBypassesLane(defender, 1));
  const ordinaryLaneIsOpen = attacker?.role !== 'Shooter' && (!defender.lanes[laneIndex] || islandParadiseBypassesLane(defender, laneIndex));
  return Boolean(attacker && defender.life.main && allMiddleLifeGone(defender) && (shooterHasCenterAccess || ordinaryLaneIsOpen));
}
function hasLifeTarget(player, laneIndex, attacker = null) { return Boolean(player.life.middle[laneIndex] || canAttackMainLife(attacker, laneIndex, player)); }
function shielderLane(defender) { return defender.lanes.findIndex((card) => card?.role === 'Shielder'); }
function canAttackLane(attacker, laneIndex, defender) {
  if (!attacker) return false;
  if (attacker.role === 'Shooter') return Boolean((attacker.id === 'valhalla-mjolknir' && defender.lanes[laneIndex]) || defender.lanes[laneIndex - 1] || defender.lanes[laneIndex + 1] || hasLifeTarget(defender, laneIndex, attacker));
  return Boolean(defender.lanes[laneIndex] || hasLifeTarget(defender, laneIndex, attacker));
}
function canCardAttack(card) { return Boolean(card?.ready && !card.skipAttackThisTurn && (card.id === 'ip-coyote' ? (card.attacksThisTurn || 0) < 2 : !card.attacked)); }
function canTargetLifeZone(attacker, sourceIndex, defender, targetIndex) {
  if (!attacker || sourceIndex !== targetIndex || !defender.life.middle[targetIndex]) return false;
  return attacker.role === 'Shooter' || !defender.lanes[targetIndex] || islandParadiseBypassesLane(defender, targetIndex);
}
function canTargetLane(attacker, sourceIndex, defender, targetIndex) {
  if (!attacker || targetIndex < 0 || targetIndex > 2) return false;
  if (attacker.role === 'Shooter') return (Math.abs(sourceIndex - targetIndex) === 1 || attacker.id === 'valhalla-mjolknir' && sourceIndex === targetIndex) && Boolean(defender.lanes[targetIndex]);
  return sourceIndex === targetIndex && Boolean(defender.lanes[targetIndex]);
}
function resolveAttackTarget(defender, target, sourceIndex = -1) {
  const protectedLane = target.type === 'life' ? (target.main ? sourceIndex : target.index) : target.index;
  const interceptors = defender.lanes.flatMap((card, lane) => {
    if (card?.role !== 'Shielder') return [];
    const centerIntercepts = lane === 1 && (target.type !== 'lane' || target.index !== lane);
    const sideInterceptsAdjacent = lane !== 1 && Math.abs(lane - protectedLane) === 1 && (target.type === 'lane' || target.type === 'life');
    return centerIntercepts || sideInterceptsAdjacent ? [{ lane, card }] : [];
  });
  if (!interceptors.length) return target;
  interceptors.sort((a, b) => effectiveAttack(b.card, defender, { defending: true }) - effectiveAttack(a.card, defender, { defending: true }));
  const shield = interceptors[0].lane; return { type: 'lane', index: shield, redirected: true, redirectedFrom: target, sourceIndex };
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
  if (card.role === 'Brawler' && adjacent.some((n) => !owner.lanes[n])) { attack++; reasons.push('Brawler +1'); addModifier(1, 'Brawler'); }
  if (card.id === 'ip-sabrina') { const bonus = adjacent.filter((n) => owner.lanes[n]?.role === 'Brawler').length; if (bonus) { attack += bonus; reasons.push(`Adjacent Brawlers +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'ww-zodiac-guardian-brian') { const bonus=[...owner.hand,...owner.lanes.filter(Boolean)].filter((unit)=>unit.element==='Terra').length;if(bonus){attack+=bonus;reasons.push(`Terra cards on field or in hand +${bonus}`);addModifier(bonus,card.name);} }
  if (card.id === 'ip-academy-chase') { const bonus=adjacent.filter((n)=>owner.lanes[n]?.element==='Aqua').length;if(bonus){attack+=bonus;reasons.push(`Adjacent Aqua cards +${bonus}`);addModifier(bonus,card.name);} }
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
  if (match.fieldCard?.id === 'cactus-creek' && index >= 0 && card.title === 'Wild West' && match.active === (owner === match.player ? 'opponent' : 'player')) { attack++; reasons.push('Cactus Creek +1'); addModifier(1, 'Cactus Creek'); }
  if (match.fieldCard?.id === 'academy-grounds' && index >= 0 && card.title === 'Academy') {
    const academyCount = [...(match.player?.lanes || []), ...(match.opponent?.lanes || [])].filter((unit) => unit?.title === 'Academy').length;
    if (academyCount) { attack += 1; reasons.push('Academy Hall +1'); addModifier(1, 'Academy Hall'); }
  }
  if (card.id === 'zodiac-guardian-rick') { const bonus = owner.destroyed.filter((unit) => unit.element === 'Terra').length; if (bonus) { attack += bonus; reasons.push(`Terra cards destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'zodiac-guardian-sabrina') { const bonus = owner.destroyed.filter((unit) => unit.element === 'Aer').length; if (bonus) { attack += bonus; reasons.push(`Aer cards in Pandemonium Zone +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'wb-zodiac-topaz' || card.id === 'wb-zodiac-dimitri') { const element = card.id === 'wb-zodiac-topaz' ? 'Aer' : 'Glacial'; const bonus = [...owner.hand, ...owner.lanes.filter(Boolean)].filter((unit) => unit.element === element).length; if (bonus) { attack += bonus; reasons.push(`${element} cards in hand or on field +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'zodiac-guardian-kage') { const bonus = owner.destroyed.filter((unit) => unit.element === 'Dark').length; if (bonus) { attack += bonus; reasons.push(`Dark cards destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'ip-coyote-zodiac') { const bonus = owner.destroyed.filter((unit) => unit.role === 'Brawler').length; if (bonus) { attack += bonus; reasons.push(`Brawlers destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'ip-chase-zodiac') { const bonus = owner.destroyed.filter((unit) => unit.element === 'Aqua').length; if (bonus) { attack += bonus; reasons.push(`Aqua cards destroyed +${bonus}`); addModifier(bonus, card.name); } }
  if (card.id === 'valhalla-axir' && owner.lanes.some((unit) => unit?.id !== card.id && unit?.title === 'Valhalla' && unit?.type === 'Creature')) { attack++; reasons.push('Valhalla Creature ally +1'); addModifier(1, card.name); }
  if (card.id === 'valhalla-khendal') { const count = [...(match.player?.lanes || []), ...(match.opponent?.lanes || [])].filter((unit) => unit?.euphoria).length; if (count) { attack += count; reasons.push(`Euphoria on field +${count}`); addModifier(count, card.name); } }
  if (card.role === 'Blader') {
    const ownerTurn = owner === match.player ? 'player' : 'opponent';
    if (match.active === ownerTurn) { attack++; reasons.push('Blader own turn +1'); addModifier(1, card.name); }
    else if (match.active === (ownerTurn === 'player' ? 'opponent' : 'player')) { attack--; reasons.push('Blader rival turn −1'); addModifier(-1, card.name); }
  }
  const opponent = owner === match.player ? match.opponent : match.player;
  const sewerBonus = card.id === 'ts-alligator' ? Number(Boolean(opponent?.lanes[preferredTarget ?? enemyIndex]?.poisonTurns))
    : card.id === 'ts-momozan' ? [...owner.hand, ...owner.lanes, ...opponent.lanes].filter((unit) => unit?.title === 'Toxic Sewer').length
    : card.id === 'ts-aemi' ? [...owner.lanes, ...opponent.lanes, ...owner.destroyed, ...opponent.destroyed].filter((unit) => unit?.title === 'Voodoo Witch' || unit?.name === 'Ryuu').length
    : card.id === 'ts-zodiac-aemi' ? owner.destroyed.filter((unit) => unit.element === 'Ignis').length
    : card.id === 'ts-zodiac-ryuu' ? opponent.destroyed.filter(isFighterCard).length
    : 0;
  if (sewerBonus) { attack += sewerBonus; reasons.push(`${card.name} +${sewerBonus}`); addModifier(sewerBonus, card.name); }
  const facingTrickster = index >= 0 ? opponent?.lanes[index] : null;
  if (facingTrickster?.role === 'Trickster') { attack--; reasons.push('Trickster −1'); addModifier(-1, facingTrickster.name); }
  if (card.id === 'ip-kokocrab' && opponent?.lanes[enemyIndex]?.role === 'Brawler') { attack--; reasons.push('Kokocrab vs Brawler −1'); addModifier(-1, card.name); }
  // During an attack, check the defender in the lane being targeted. Otherwise,
  // preview the matchup against the fighter directly across from this one.
  const matchupIndex = attacking ? enemyIndex : index;
  const facingOpponent = matchupIndex >= 0 ? opponent?.lanes[matchupIndex] : null;
  if (facingOpponent && elementBeats[card.element] === facingOpponent.element) { attack++; reasons.push('Element advantage +1'); addModifier(1, 'Element Advantage'); }
  if (card.euphoria) { const bonus = Math.max(0, Number(card.euphoriaAttackBonus ?? (card.attack + (card.attackBonus || 0)))); attack += bonus; reasons.push('Euphoria ×2'); addModifier(bonus, 'Euphoria'); }
  return { total: Math.max(0, attack), change: attack - card.attack, reasons, sources: [...new Set(sources)], modifiers };
}
function effectiveAttack(card, owner, context) { return attackBreakdown(card, owner, context).total; }
function laneMarkup(card, index, side, isActive) {
  const laneClasses = ['lane'];
  if (card) laneClasses.push('has-card');
  if (side === 'opponent' && card && pendingAiSummons.has(card.instance)) laneClasses.push('ai-summon-pending');
  if (side === 'player' && match.selected && isActive && !card) laneClasses.push('lane-target');
  if (side === 'player' && isActive && canCardAttack(card) && canAttackLane(card, index, match.opponent)) laneClasses.push('attack-click-ready');
  if (side === 'player' && match.attackMode && canCardAttack(card)) laneClasses.push('attack-source');
  if (side === 'player' && match.attackMode && match.attackerLane === index) laneClasses.push('attack-source-selected');
  if (side === 'opponent' && match.attackMode && match.attackerLane !== null && canTargetLane(match.player.lanes[match.attackerLane], match.attackerLane, match.opponent, index)) laneClasses.push('attack-target');
  const contents = card ? cardMarkup(card, side === 'opponent', true) : '<span class="empty-mark">＋</span>';
  const targetMark = '<span class="target-mark" aria-hidden="true">⌖</span>';
  return `<div class="${laneClasses.join(' ')}" data-side="${side}" data-lane="${index}"><span class="lane-label">LANE 0${index + 1}</span>${targetMark}${contents}</div>`;
}
const sewerMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncFieldBackground() {
  const fieldTheme = match.fieldCard?.id || 'city-night';
  document.body.dataset.fieldTheme = fieldTheme;
  for (const video of document.querySelectorAll('video[data-field-video]')) {
    const active = video.dataset.fieldVideo === fieldTheme;
    const animate = active && !document.hidden && (fieldTheme !== 'ts-field' || !sewerMotionPreference.matches);
    if (animate) {
      if (video.paused) video.play().catch(() => {});
    } else {
      if (!video.paused) video.pause();
      if (!active && video.currentTime) video.currentTime = 0;
    }
  }
}
sewerMotionPreference.addEventListener('change', syncFieldBackground);
document.addEventListener('visibilitychange', syncFieldBackground);

function render() {
  if (!match.player || !match.opponent) return;
  hideCardTooltip();
  syncFieldBackground();
  document.getElementById('player-board').innerHTML = match.player.lanes.map((card, i) => laneMarkup(card, i, 'player', match.active === 'player')).join('');
  document.getElementById('opponent-board').innerHTML = match.opponent.lanes.map((card, i) => laneMarkup(card, i, 'opponent', false)).join('');
  document.getElementById('hand').innerHTML = match.player.hand.map((card) => cardMarkup(card)).join('') || '<div class="lane-hint">Your hand is empty</div>';
  animatingDrawInstances.forEach((instance)=>document.querySelector('#hand .hand-card[data-id="'+instance+'"]')?.classList.add('draw-arriving'));
  document.getElementById('hand-count').textContent = `${match.player.hand.length} card${match.player.hand.length === 1 ? '' : 's'}`;
  document.getElementById('energy-value').textContent = match.energy;
  document.getElementById('max-energy').textContent = match.turnEnergyCap;
  document.getElementById('turn-label').textContent = `TURN ${match.turn}`;
  document.getElementById('phase-label').textContent = match.active === 'player' ? 'YOUR TURN' : 'RIVAL TURN';
  document.getElementById('player-deck').textContent = match.player.deck.length;
  document.getElementById('opponent-deck').textContent = match.opponent.deck.length;
  document.getElementById('player-status').textContent = match.playerDeckName || `${deckNames[match.playerDeckId]} Deck`;
  document.getElementById('opponent-status').textContent = `${deckNames[match.opponentDeckId] || 'Mixed'} Deck`;
  const opponentAvatar = match.opponent.avatar;
  document.getElementById('opponent-name').textContent = avatarLabel(opponentAvatar);
  const opponentAvatarImage = document.querySelector('.avatar-opponent .player-icon');
  if (opponentAvatarImage) {
    opponentAvatarImage.src = avatarPortrait(opponentAvatar.id);
    opponentAvatarImage.alt = `${avatarLabel(opponentAvatar)} profile portrait`;
  }
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
  const fieldNames = { 'academy-grounds': 'Academy Hall', 'ip-field': 'Island Paradise', 'toy-store': 'Toy Store', 'christmas-mall': 'Christmas Mall', 'cactus-creek': 'Cactus Creek', 'valhalla-bar': 'Valhalla Bar', 'ts-field': 'Toxic Sewers' };
  const fieldBackgrounds = { 'academy-grounds': 'field-academy-hall', 'ip-field': 'field-island-paradise', 'toy-store': 'field-toy-store', 'christmas-mall': 'field-christmas-mall', 'cactus-creek': 'field-cactus-creek', 'valhalla-bar': 'field-valhalla-bar', 'ts-field': 'field-toxic-sewers' };
  const fieldName = match.fieldCard ? fieldNames[match.fieldCard.id] || 'Grass Plain' : '';
  if (match.fieldCard) {
    if (match.fieldCard.card?.instance) {
      fieldZone.dataset.cardPreview = match.fieldCard.card.instance;
      fieldZone.tabIndex = 0;
      fieldZone.setAttribute('role', 'button');
    } else delete fieldZone.dataset.cardPreview;
    const background = fieldBackgrounds[match.fieldCard.id] || 'field-grass-plain';
    const activeCardArt = match.fieldCard.card?.art ? `<img class="field-zone-card-art" src="${match.fieldCard.card.art}" alt=""/>` : '';
    fieldZone.innerHTML = `<div class="field-zone-art" style="--field-zone-image:url('assets/backgrounds/${background}.webp')"></div><span class="field-zone-eyebrow">FIELD ZONE</span>${activeCardArt}<strong>${fieldName}</strong>`;
  } else {
    fieldZone.innerHTML = '';
    delete fieldZone.dataset.cardPreview;
  }
  if (!fieldZone.dataset.cardPreview) {
    fieldZone.removeAttribute('tabindex');
    fieldZone.removeAttribute('role');
  }
  fieldZone.classList.toggle('hidden', !match.fieldCard);
  document.getElementById('player-life-count').textContent = lifeCount(match.player);
  document.getElementById('opponent-life-count').textContent = lifeCount(match.opponent);
  document.getElementById('opponent-hand-count').textContent = match.opponent.hand.length;
  document.getElementById('player-life').innerHTML = lifeMarkup(match.player, 'player');
  document.getElementById('opponent-life').innerHTML = lifeMarkup(match.opponent, 'opponent');
  for (const side of ['player', 'opponent']) {
    const owner = match[side];
    const chained = Boolean(owner.life.main && owner.life.middle.some(Boolean));
    const previous = mainLifeChainState[side];
    if (previous !== null && previous !== chained) playMainLifeChainFx(side, chained ? 'restore' : 'break');
    mainLifeChainState[side] = chained;
  }
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
  document.getElementById('board-message').textContent = match.attackResolving ? 'Attack resolving · drag another ready fighter to queue an attack' : match.attackMode ? (match.attackerLane === null ? 'Drag a ready fighter onto an attack target' : selectedAttacker?.role === 'Shooter' ? allMiddleLifeGone(match.opponent) ? 'Drag onto an adjacent enemy, Life Zone, or Main Life' : 'Drag onto an adjacent enemy or opposite Life Zone' : 'Drag onto the opposing lane or exposed Main Life') : (match.selected ? `Place ${getSelected().name} in an open lane` : 'Drag cards to play · drag Battle Cards to attack');
  playPendingDrawAnimations();
}
function getSelected() { return match.player.hand.find((c) => c.instance === match.selected); }
function cardOwner(card) {
  for (const owner of [match.player, match.opponent]) if (owner && (owner.hand.includes(card) || owner.lanes.includes(card) || owner.destroyed.includes(card))) return owner;
  if (match.fieldCard?.card === card) return match.fieldCard.owner === 'player' ? match.player : match.opponent;
  return null;
}
function isTouchInput() { return window.matchMedia('(hover: none) and (pointer: coarse)').matches; }
let touchCardDetailsArmed = null;
function findCardPreview(instance) {
  const battleCard = [match.player, match.opponent].filter(Boolean).flatMap((owner) => [...owner.hand, ...owner.lanes, ...owner.destroyed]).concat(match.fieldCard?.card || []).find((item) => item?.instance === instance);
  return battleCard || window.PB_CARD_PREVIEW_REGISTRY?.get(instance) || null;
}
function canActivateCardAbility(card, owner, laneIndex) {
  if (owner !== match.player || laneIndex < 0 || match.active !== 'player' || match.over || match.attackResolving || card.abilityUsedTurn === match.turn) return false;
  if (card.id === 'ww-medusa') return match.energy >= 1 && owner.deck.length > 0;
  if (card.id === 'ww-blake') return Boolean(match.opponent.lanes[laneIndex]);
  if (card.id === 'ip-croaktail') return [laneIndex - 1,laneIndex + 1].some((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.role === 'Brawler');
  if (card.id === 'wb-steepod') return [laneIndex - 1,laneIndex + 1].some((slot) => slot >= 0 && slot < 3 && !owner.lanes[slot]);
  if (card.id === 'wb-topaz-diamond') return owner.lanes.some(Boolean) && owner.lanes.some((unit) => !unit);
  if (card.id === 'zoya') return [match.player,match.opponent].some((side) => side.lanes.some((unit) => unit?.title === 'Academy' && !isEffectProtected(unit)));
  return false;
}
function showCardTooltip(card, event) {
  if (!card || handOverflowOpen || document.getElementById('hand-limit-dialog')?.open) return;
  const tooltip = document.getElementById('card-tooltip'); const owner = cardOwner(card);
  for (const className of [...tooltip.classList]) if (className.startsWith('element-')) tooltip.classList.remove(className);
  tooltip.classList.add(`element-${(card.element || 'None').toLowerCase()}`);
  const laneIndex = owner?.lanes.indexOf(card) ?? -1;
  const typeLabel = displayedCardType(card);
  const details = card.type === 'Action' ? `<div class="tooltip-action-note">${escapeHTML(typeLabel)} card · ${card.cost} Mana · no attack points</div>` : (() => {
    const breakdown = owner
      ? attackBreakdown(card, owner, { attacking: !!card.attacking, targetIndex: card.attackTargetIndex ?? null })
      : { total: (card.attack || 0) + (card.attackBonus || 0), modifiers: [] };
    const totals = new Map();
    for (const { amount, source } of breakdown.modifiers) totals.set(source, (totals.get(source) || 0) + amount);
    const badges = [...totals].filter(([, amount]) => amount).map(([source, amount]) =>
      `<span class="tooltip-modifier ${amount > 0 ? 'modifier-up' : 'modifier-down'}">${escapeHTML(source)} ${amount > 0 ? '+' : '−'}${Math.abs(amount)}</span>`).join('');
    const modifier = badges ? `<div class="tooltip-modifier-list">${badges}</div>` : '';
    return `<div class="tooltip-stats"><span>⚔ <b>${breakdown.total}</b> attack</span><span>✧ <b>${card.cost}</b> energy</span></div>${modifier}`;
  })();
  const inPlayerHand = owner === match.player && Boolean(match.player?.hand.includes(card));
  const canUseFromHand = inPlayerHand && match.active === 'player' && !match.over && playCost(match.player, card) <= match.energy;
  const cottonAbility = inPlayerHand && match.active === 'player' && !match.over && card.id === 'peppermint-ally' && match.fieldCard?.id !== 'academy-grounds';
  const canSummonFromHand = canUseFromHand && card.type !== 'Action' && canSummonCard(match.player, card) && match.player.lanes.some((unit) => !unit);
  const sageapeAbility = canUseSageape(card);
  const mallAbility = canUseChristmasMall(card);
  const canAttackFromField = owner === match.player && laneIndex >= 0 && match.active === 'player' && !match.over && !match.attackResolving && canCardAttack(card) && canAttackLane(card,laneIndex,match.opponent);
  const canUseFieldAbility = canActivateCardAbility(card,owner,laneIndex);
  const controlButtons = [
    canSummonFromHand ? `<button type="button" data-tooltip-summon="${card.instance}">SUMMON</button>` : '',
    card.type === 'Action' && canUseFromHand ? `<button type="button" data-tooltip-use="${card.instance}">USE</button>` : '',
    cottonAbility ? `<button type="button" data-tooltip-special="cotton" data-card-instance="${card.instance}">USE</button>` : '',
    sageapeAbility ? `<button type="button" data-tooltip-special="sageape" data-card-instance="${card.instance}">USE</button>` : '',
    mallAbility ? `<button type="button" data-tooltip-special="christmas-mall" data-card-instance="${card.instance}">USE</button>` : '',
    canAttackFromField ? `<button type="button" data-tooltip-attack="${laneIndex}">ATTACK</button>` : '',
    canUseFieldAbility ? `<button type="button" data-tooltip-ability="${card.id}" data-lane="${laneIndex}">USE</button>` : '',
  ].filter(Boolean);
  const controls = controlButtons.length ? `<div class="tooltip-card-controls">${controlButtons.join('')}</div>` : '';
  const artwork = card.art ? '<img src="' + card.art + '" alt="" />' : '<div class="tooltip-art-fallback">✦</div>';
  const classAbility = hasCardClass(card) && classAbilities[card.role] ? `<div class="tooltip-class-ability"><b>${card.role} class ability</b><span>${classAbilities[card.role]}</span></div>` : '';
  const tooltipIcon = elementIcons[card.element] ? `<img class="element-icon" src="assets/icons/${elementIcons[card.element]}.webp" alt="" />` : '';
  const elementLabel = card.element === 'None' ? 'Neutral' : card.element;
  const typeIcon = cardTypeIcon(card, 'tooltip-field-type-icon');
  const tooltipClass = hasCardClass(card) ? `<span class="tooltip-class-chip">${classIconMarkup(card.role, card.element, 'tooltip-class-icon')}<span>${escapeHTML(card.role)}</span></span>` : '';
  tooltip.innerHTML = `<button class="tooltip-dismiss" type="button" aria-label="Close card details">×</button><div class="tooltip-art">${artwork}</div><div class="tooltip-body"><div class="tooltip-kicker"><span>${card.title}</span><span class="tooltip-element-chip">${tooltipIcon}${escapeHTML(elementLabel)}</span>${tooltipClass}</div><strong class="tooltip-name">${card.name}</strong><div class="tooltip-type-row">${typeIcon}<span>${escapeHTML(typeLabel)}</span></div>${details}${classAbility}<div class="tooltip-card-ability"><b>CARD EFFECT</b><span>${card.ability}</span></div>${controls}${card.skipAttackThisTurn ? '<div class="tooltip-modifier frozen-note">Frozen: cannot attack this turn</div>' : ''}${laneIndex >= 0 ? `<div class="tooltip-status">FIELD · LANE ${laneIndex + 1}</div>` : ''}</div>`;
  tooltip.classList.toggle('has-controls', Boolean(controls));
  if (typeof tooltip.showPopover === 'function' && !tooltip.matches(':popover-open')) tooltip.showPopover();   tooltip.dataset.previewCard = card.instance; tooltip._anchorElement = event?.target?.closest?.('[data-card-preview]') || document.querySelector(`[data-card-preview="${CSS.escape(card.instance)}"]`); tooltip.classList.toggle('mobile-open', isTouchInput());
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
function hideCardTooltip() { const tooltip = document.getElementById('card-tooltip'); if (tooltip) { tooltip.classList.remove('visible', 'mobile-open', 'pinned'); delete tooltip.dataset.previewCard; tooltip.setAttribute('aria-hidden', 'true'); if (typeof tooltip.hidePopover === 'function' && tooltip.matches(':popover-open')) tooltip.hidePopover(); } }
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
  if (match.tutorialMode && !tutorialCanSummon(card,laneIndex)) { tutorialWrongAction('Summon only the highlighted card into the lane named in the message.'); return; }
  if (!canSummonCard(match.player, card)) { announceEffect('Vishnu can only be summoned while Peppermint is in your Battle Zone.'); return; }
  match.attackMode = false; match.attackerLane = null;
  match.energy -= cost; match.player.hand.splice(match.player.hand.indexOf(card), 1); card.ready = false; match.player.lanes[laneIndex] = card; match.selected = null; render(); animateSummon(match.player, laneIndex, card).then(() => { triggerOnSummon(card, match.player, laneIndex); tutorialAdvanceAfterSummon(card,laneIndex); });
}
function playCost(owner, card) { if (!card) return Infinity; const fieldLanes = [...(owner?.lanes || []), ...((owner === match?.player ? match?.opponent : match?.player)?.lanes || [])]; if (card.id === 'academy-diamond' && fieldLanes.some((unit) => ['academy-topaz','wb-topaz-diamond'].includes(unit?.id))) return 0; if (card.id === 'academy-topaz' && fieldLanes.some((unit) => ['academy-diamond','wb-topaz-diamond'].includes(unit?.id))) return 0; return card.cost; }
function canSummonCard(owner, card) { return card?.id !== 'vishnu' || Boolean(owner?.lanes.some((unit) => unit?.name === 'Peppermint')); }
function queueDrawAnimation(owner, card) { if(owner&&card) pendingDrawAnimations.push({side:owner===match.player?'player':'opponent',instance:card.instance}); }
function drawCard(player, count = 1) {
  for (let i = 0; i < count; i++) { if (player.deck.length) { const card=player.deck.shift(); player.hand.push(card); queueDrawAnimation(player,card); if (player.isAI && player.hand.length > MAX_HAND_SIZE) player.destroyed.push(player.hand.pop()); } }
}
const MAX_HAND_SIZE = Infinity; // Hand size is currently unlimited for both sides.
let handOverflowOpen = false;
let pendingEndTurnAfterDiscard = false;
function enforceHandLimit() {
  if (!match.player || !match.opponent) return;
  for (const owner of [match.player, match.opponent]) {
    while (owner.isAI && owner.hand.length > MAX_HAND_SIZE) owner.destroyed.push(owner.hand.pop());
  }
  if (match.player.hand.length <= MAX_HAND_SIZE || handOverflowOpen) return;
  handOverflowOpen = true;
  const discardCount = match.player.hand.length - MAX_HAND_SIZE;
  const dialog = document.getElementById('hand-limit-dialog');
  document.getElementById('hand-limit-title').textContent = discardCount === 1 ? 'Choose a card to discard' : 'Choose cards to discard';
  handLimitSelection.clear();
  const handLimitCopy = document.getElementById('hand-limit-copy');
  if (window.peppermintLanguage?.get() === 'hu') {
    handLimitCopy.textContent = discardCount === 1
      ? `A kezedben ${match.player.hand.length} kártya van. Válassz ki egy kártyát, amelyet a Pandémonium zónába küldesz.`
      : `A kezedben ${match.player.hand.length} kártya van. Válaszd ki az eldobandó kártyákat, amelyeket a Pandémonium zónába küldesz.`;
  } else {
    handLimitCopy.textContent = `Your hand has ${match.player.hand.length} cards. Choose ${discardCount} ${discardCount === 1 ? 'card' : 'cards'} to send to the Pandemonium Zone.`;
  }
  document.getElementById('hand-limit-selection').textContent = `0 / ${discardCount} selected`;
  document.getElementById('hand-limit-confirm').disabled = true;
  document.getElementById('hand-limit-cards').innerHTML = match.player.hand.map(card => `<div class="hand-limit-card" role="checkbox" aria-checked="false" tabindex="0" data-hand-discard="${escapeHTML(card.instance)}">${cardMarkup(card)}<span class="hand-limit-check" aria-hidden="true">✓</span></div>`).join('');
  dialog.showModal();
}
function playPendingDrawAnimations() {
  const pending=pendingDrawAnimations.splice(0);
  pending.forEach((draw)=>{if(draw.side==='player'){animatingDrawInstances.add(draw.instance);document.querySelector(`#hand .hand-card[data-id="${draw.instance}"]`)?.classList.add('draw-arriving');}});
  const startAnimation = (draw) => {
    const target=draw.side==='player'?document.querySelector(`#hand .hand-card[data-id="${draw.instance}"]`):null;
    if(!target){animatingDrawInstances.delete(draw.instance);return;}
    animatingDrawInstances.add(draw.instance);
    const to=target.getBoundingClientRect();
    const flight=target.cloneNode(true); flight.classList.remove('draw-arriving'); flight.classList.add('draw-flight'); flight.setAttribute('aria-hidden','true'); flight.removeAttribute('data-id'); flight.removeAttribute('data-card-preview');
    flight.style.left=`${to.left}px`; flight.style.top=`${to.top}px`; flight.style.width=`${to.width}px`; flight.style.height=`${to.height}px`;
    flight.style.transform=`translate(${window.innerWidth-to.left+24}px,0) scale(.36)`;
    target.classList.add('draw-arriving'); document.body.appendChild(flight);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{flight.style.transform='translate(0,0) scale(1)';}));
    window.setTimeout(()=>{
      animatingDrawInstances.delete(draw.instance);
      document.querySelector(`#hand .hand-card[data-id="${draw.instance}"]`)?.classList.remove('draw-arriving');
      flight.remove();
    },620);
    return 620;
  };
  if (currentRivalAnimations()) {
    pending.filter((draw) => draw.side === 'player').forEach((draw) => queueRivalAnimation(() => startAnimation(draw)));
    return;
  }
  pending.forEach((draw,index)=>{
    if (index === 0) startAnimation(draw);
    else window.setTimeout(()=>startAnimation(draw),index*180);
  });
}
let pendingEffectChoice = null;
const specialSprites = { aemi:'30FPS_FA01_06_Shimmer.webp',runny:'30FPS_FA02_04_Impulse.webp',berry:'30FPS_FA01_09_Barrier.webp',frosty:'30FPS_FA01_08_Shield.webp',den:'30FPS_FA01_04_Buff.webp',ryota:'30FPS_FA01_01_Slash.webp',healer:'30FPS_FA01_07_Cure.webp',summoner:'30FPS_FA02_01_EnergyBurst.webp',gummy:'30FPS_FA02_03_CrystalBlossom.webp',zoya:'30FPS_FA02_02_Smokescreen.webp',cooking:'30FPS_FA02_03_CrystalBlossom.webp',cotton:'30FPS_FA02_03_CrystalBlossom.webp',kage:'30FPS_FA02_02_Smokescreen.webp',amethyst:'30FPS_FA01_10_Burst.webp',shielder:'30FPS_FA01_08_Shield.webp',shooter:'30FPS_FA01_02_Thrust.webp',enchanter:'30FPS_FA01_04_Buff.webp',trickster:'30FPS_FA01_05_Debuff.webp',blader:'30FPS_FA01_01_Slash.webp',brawler:'30FPS_FA01_03_Punch.webp',peppermint:'30FPS_FA01_04_Buff.webp','avatar-gem':'30FPS_FA02_07_HyperCharge.webp','dharma-revival':'30FPS_FA02_03_CrystalBlossom.webp' };
function playSpecialFx(owner, laneIndex, key, label, { generatedOnly = false, silent = false } = {}) {
  if (activeCombatCue) return;
  const side = owner === match.player ? 'player' : 'opponent';
  const play = () => {
    const host = laneIndex >= 0 ? document.querySelector(`[data-side="${side}"][data-lane="${laneIndex}"]`) : document.getElementById(`${side}-board`);
    if (!host) return;
    const fx = document.createElement('div'); fx.className = `special-fx special-${key}`; fx.innerHTML = `<span>${({ aemi:'⌕',runny:'⌖',berry:'↩',frosty:'❄',den:'✦',ryota:'⚔',healer:'✚',summoner:'✧',gummy:'✹',zoya:'⟲',cooking:'↶',cotton:'⌘',kage:'◐',amethyst:'◆',shielder:'⬟',shooter:'➶',enchanter:'✺',trickster:'♟',blader:'✦',brawler:'✹',peppermint:'✿','avatar-gem':'◇','dharma-revival':'✚','solar-explosion':'☼' })[key] || '✧'}</span><b>${label}</b>`;
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
    const abilityElements = { aemi:'Ignis',runny:'Aer',berry:'Aqua',frosty:'Glacial',den:'Mind',ryota:'Solar',healer:'Terra',summoner:'Dark',gummy:'Ignis',zoya:'Dark',cooking:'Dark',cotton:'Mind',kage:'Dark',amethyst:'Dark',shielder:'Terra',shooter:'Aer',enchanter:'Mind',trickster:'Dark',blader:'Solar',brawler:'Ignis',peppermint:'Mind','avatar-gem':'Dark','dharma-revival':'Terra','solar-explosion':'Solar' };
    if (!silent) playSfx('special', abilityElements[key] || 'Mind');
    if (!spriteFile) return 1250;
    window.setTimeout(() => fx.remove(), 1600);
    return 1600;
  };
  if (currentRivalAnimations()) queueRivalAnimation(play);
  else window.setTimeout(play, 0);
}
let fieldFxSequence = 0;
function playFieldActivationFx(fieldId) {
  if (activeCombatCue) return;
  queueRivalAnimation(() => animateFieldActivation(fieldId));
}
function animateFieldActivation(fieldId) {
  const host = document.body;
  const names = { 'ip-field':'ISLAND PARADISE', 'toy-store':'TOY STORE', 'christmas-mall':'CHRISTMAS MALL', 'academy-grounds':'ACADEMY HALL', 'cactus-creek':'CACTUS CREEK', 'valhalla-bar':'VALHALLA BAR' };
  const id = `field-flow-${++fieldFxSequence}`;
  const fx = document.createElement('div');
  fx.className = `field-activation-fx field-activation-${fieldId}`;
  fx.innerHTML = `<svg viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#ff657a"/><stop offset=".17" stop-color="#ffbd67"/><stop offset=".34" stop-color="#fff283"/><stop offset=".5" stop-color="#7dffca"/><stop offset=".67" stop-color="#68ddff"/><stop offset=".84" stop-color="#a78bff"/><stop offset="1" stop-color="#ff8de1"/></linearGradient><filter id="${id}-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g class="field-flow-lines" stroke="url(#${id})" filter="url(#${id}-glow)"><path id="${id}-a" d="M600 350 C480 290 250 200 0 150"/><path id="${id}-b" d="M600 350 C420 350 190 350 0 350"/><path id="${id}-c" d="M600 350 C480 410 250 500 0 550"/><path id="${id}-d" d="M600 350 C720 290 950 200 1200 150"/><path id="${id}-e" d="M600 350 C780 350 1010 350 1200 350"/><path id="${id}-f" d="M600 350 C720 410 950 500 1200 550"/></g><g class="field-flow-particles" fill="url(#${id})"><circle r="6"><animateMotion dur="1.05s" repeatCount="1"><mpath href="#${id}-a"/></animateMotion></circle><circle r="4"><animateMotion dur=".92s" begin=".12s" repeatCount="1"><mpath href="#${id}-b"/></animateMotion></circle><circle r="5"><animateMotion dur="1.15s" begin=".04s" repeatCount="1"><mpath href="#${id}-c"/></animateMotion></circle><circle r="5"><animateMotion dur="1.08s" begin=".08s" repeatCount="1"><mpath href="#${id}-d"/></animateMotion></circle><circle r="6"><animateMotion dur=".95s" begin=".16s" repeatCount="1"><mpath href="#${id}-e"/></animateMotion></circle><circle r="4"><animateMotion dur="1.12s" begin=".05s" repeatCount="1"><mpath href="#${id}-f"/></animateMotion></circle></g><circle class="field-flow-core" cx="600" cy="350" r="20"/><circle class="field-flow-ring" cx="600" cy="350" r="40"/></svg><b>${names[fieldId] || 'FIELD SHIFT'}</b>`;
  host.appendChild(fx);
  window.setTimeout(() => fx.remove(), 1750);
  return 1750;
}
function playHealthPotionFx(owner, index) {
  if (activeCombatCue) return;
  const side = owner === match.player ? 'player' : 'opponent';
  const host = document.querySelector(`#${side}-life .life-middle .life-card:nth-child(${index + 1})`);
  if (!host) return;
  const fx = document.createElement('span'); fx.className = 'health-crystal-fx'; fx.innerHTML = '<svg viewBox="0 0 100 100" aria-hidden="true"><path class="crystal-heart" d="M50 86 15 51C-6 24 18 4 39 18l11 11 11-11c21-14 45 6 24 33Z"/><path class="crystal-facet" d="m50 29-13 20 13 37 13-37Z M15 51h70 M37 49l13-20 13 20"/><circle class="crystal-orbit" cx="50" cy="50" r="43"/><path class="crystal-spark" d="M50 1v14M50 85v14M1 50h14M85 50h14M16 16l10 10M74 74l10 10M84 16 74 26M26 74 16 84"/></svg>';
  host.appendChild(fx);
  window.setTimeout(() => fx.remove(), 1300);
}
function playMainLifeChainFx(side, mode) {
  return queueRivalAnimation(() => animateMainLifeChain(side, mode));
}
function animateMainLifeChain(side, mode) {
  const host = document.querySelector(`#${side}-life .main-life-back .main-life`);
  if (!host) return;
  const fx = document.createElement('span');
  fx.className = `main-life-chain-fx chain-${mode}`;
  fx.setAttribute('aria-hidden', 'true');
  fx.innerHTML = '<svg viewBox="0 0 200 60" preserveAspectRatio="none"><defs><linearGradient id="chain-metal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff7ff"/><stop offset=".34" stop-color="#d9c9e4"/><stop offset=".62" stop-color="#777181"/><stop offset="1" stop-color="#f7ecff"/></linearGradient><filter id="chain-glow"><feGaussianBlur stdDeviation="2.4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g class="chain-lines" fill="none" stroke="url(#chain-metal)" stroke-width="5" stroke-linecap="round" filter="url(#chain-glow)"><path d="M4 18 C34 5 66 40 99 30 S162 7 196 18"/><path d="M4 42 C37 54 65 19 99 30 S165 53 196 42"/></g><g class="chain-links" fill="none" stroke="#fff4ff" stroke-width="1.3" opacity=".8"><path d="M10 16 C40 8 66 37 99 30 S161 11 190 17"/><path d="M10 42 C39 50 68 22 99 30 S160 48 190 42"/></g><g class="chain-lock" filter="url(#chain-glow)"><path d="M92 29v-5a8 8 0 0 1 16 0v5" fill="none" stroke="#fff0ff" stroke-width="3"/><rect x="88" y="28" width="24" height="20" rx="4" fill="#c9b6d8" stroke="#fff4ff" stroke-width="2"/><circle cx="100" cy="37" r="2.4" fill="#402b48"/><path d="M100 39v4" stroke="#402b48" stroke-width="2"/></g><g class="chain-sparks" fill="#fff5ff"><path d="M30 7v8M26 11h8M169 46v8M165 50h8M100 2v6M97 5h6"/></g></svg>';
  host.appendChild(fx);
  playChainTransitionSound(mode);
  window.setTimeout(() => fx.remove(), 1000);
  return 1000;
}
function playChainTransitionSound(mode) {
  try {
    soundContext ??= new (window.AudioContext || window.webkitAudioContext)();
    if (soundContext.state === 'suspended') soundContext.resume();
    const now = soundContext.currentTime;
    const notes = mode === 'restore' ? [370, 560, 840] : [980, 620, 290];
    notes.forEach((frequency, index) => {
      const osc = soundContext.createOscillator(); const gain = soundContext.createGain(); const filter = soundContext.createBiquadFilter();
      const at = now + index * .055; const end = mode === 'restore' ? frequency * 1.18 : frequency * .58;
      osc.type = index === 2 ? 'triangle' : 'sine'; osc.frequency.setValueAtTime(frequency, at); osc.frequency.exponentialRampToValueAtTime(Math.max(45, end), at + .2);
      filter.type = 'bandpass'; filter.frequency.value = 1800 - index * 280; filter.Q.value = 2.2;
      gain.gain.setValueAtTime(.0001, at); gain.gain.exponentialRampToValueAtTime(.055, at + .012); gain.gain.exponentialRampToValueAtTime(.0001, at + .23);
      osc.connect(filter); filter.connect(gain); gain.connect(soundContext.destination); osc.start(at); osc.stop(at + .25);
    });
  } catch (_) { /* The visual chain effect still plays if audio is unavailable. */ }
}
function playManaPotionFx() {
  if (activeCombatCue) return;
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
    const card = cardForEffectChoice(choice, owner, `${title} ${copy}`);
    const art = card?.art ? `<span class="effect-option-art"><img src="${escapeHTML(card.art)}" alt=""/><b>${card.cost}</b></span>` : '<span class="effect-option-art effect-option-art-fallback">✦</span>';
    const stats = card ? `<span class="effect-option-stats">${card.type === 'Action' ? `${escapeHTML(displayedCardType(card))} · ${card.cost} Mana` : `${card.attack} ATK · ${card.cost} Mana`}</span>` : '';
    return `<button class="effect-option" data-choice="${index}">${art}<span class="effect-option-copy"><strong>${escapeHTML(choice.label)}</strong><small>${escapeHTML(choice.detail || '')}</small></span>${stats}</button>`;
  }).join('');
  const cue = activeCombatCue;
  if (cue) cue.waitingForChoice = true;
  pendingEffectChoice = cue ? (value) => {
    cue.waitingForChoice = false;
    return followCombatCue(cue, () => callback(value));
  } : callback;
  chooseEffect.choices = choices; document.getElementById('effect-dialog').showModal();
}
function cardForEffectChoice(choice, owner = null, context = '') {
  if (!choice) return null;
  const sides = [match.player, match.opponent].filter(Boolean);
  const activeCards = sides.flatMap((side) => [
    ...side.hand, ...side.deck, ...side.destroyed, ...side.transformationDeck,
    ...side.lanes.filter(Boolean), ...side.life.middle.filter(Boolean), side.life.main,
    ...(side.life.familiars || []).filter(Boolean),
  ]).filter(Boolean);
  const activeMatch = activeCards.find((card) => card.instance === choice.value);
  if (activeMatch) return activeMatch;
  const label = String(choice.label || '').trim();
  const name = label.split(' · ')[0].trim();
  const detail = String(choice.detail || '');
  const hint = `${context} ${detail}`;
  const matchesLabel = (card) => card && (card.name === name || `${card.title} ${card.name}` === name);
  const numericValue = Number(choice.value);
  if (Number.isInteger(numericValue) && numericValue >= 0) {
    const preferredSources = /discard|from your hand|in your hand/i.test(hint) ? ['hand']
      : /pandemonium|destroyed zone/i.test(hint) ? ['destroyed']
      : /from your deck|your deck|deck/i.test(hint) ? ['deck', 'transformationDeck']
      : /lane/i.test(detail) ? ['lanes']
      : ['hand', 'destroyed', 'deck', 'transformationDeck', 'lanes', 'life.middle'];
    for (const key of preferredSources) {
      const sourceSides = /enemy|rival/i.test(detail) ? sides.filter((side) => side !== owner) : [owner, ...sides.filter((side) => side !== owner)].filter(Boolean);
      for (const side of sourceSides) {
        const list = key === 'life.middle' ? side.life.middle : side[key];
        if (Array.isArray(list) && matchesLabel(list[numericValue])) return list[numericValue];
      }
    }
  }
  const laneMatch = label.match(/lane\s+(\d+)/i) || detail.match(/lane\s+(\d+)/i);
  if (laneMatch) {
    const lane = Number(laneMatch[1]) - 1;
    const targetSide = /enemy|rival/i.test(detail) ? sides.find((side) => side !== owner) : owner;
    const laneCard = targetSide?.lanes[lane];
    if (matchesLabel(laneCard)) return laneCard;
  }
  const candidates = [...activeCards, ...allCardCatalog()].filter((card) => card.name === name || `${card.title} ${card.name}` === name);
  return candidates.find((card) => detail.includes(card.title) && detail.includes(card.element))
    || candidates.find((card) => detail.includes(card.title))
    || candidates.find((card) => detail.includes(`${card.cost} Mana`))
    || candidates[0] || null;
}
function drawMatching(owner, predicate, label) {
  const index = owner.deck.findIndex(predicate);
  if (index < 0) { announceEffect(`No ${label} remains in the deck.`); return false; }
  const [card] = owner.deck.splice(index, 1); owner.hand.push(card); queueDrawAnimation(owner,card); render(); announceEffect(`${card.name} drawn by effect.`); return true;
}
function summonBeatcracker(owner, card) {
  return trackCombatCue(card?.id === 'lt-beatcracker' ? card : null, owner, -1, () => resolveSummonBeatcracker(owner, card));
}
function resolveSummonBeatcracker(owner, card) {
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
  return trackCombatCue(owner.hand.find((card) => card.instance === actionInstance), owner, -1, () => resolveUseCooking(owner, actionInstance));
}
function resolveUseCooking(owner, actionInstance) {
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
  return trackCombatCue(owner.hand.find((card) => card.instance === actionInstance), owner, -1, () => resolveUsePlanting(owner, actionInstance));
}
function resolveUsePlanting(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (!action || match.energy < action.cost) { announceEffect('Planting needs 2 energy.'); return; }
  const openLanes = owner.lanes.map((unit, index) => unit ? -1 : index).filter((index) => index >= 0);
  const targets = [
    ...owner.deck.flatMap((card) => card.title === 'Vegcritter' ? openLanes.map((lane) => ({ value: `deck:${card.instance}:${lane}`, label: `${card.name} · lane ${lane + 1}`, detail: 'From your deck' })) : []),
    ...owner.destroyed.flatMap((card) => card.title === 'Vegcritter' ? openLanes.map((lane) => ({ value: `destroyed:${card.instance}:${lane}`, label: `${card.name} · lane ${lane + 1}`, detail: 'From your destroyed zone' })) : []),
  ];
  if (!openLanes.length) { announceEffect('Planting needs an open battle zone.'); return; }
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
  return trackCombatCue(owner.lanes[laneIndex], owner, laneIndex, () => resolveActivateMedusa(owner, laneIndex));
}
function resolveActivateMedusa(owner, laneIndex) {
  const medusa = owner.lanes[laneIndex];
  if (!medusa || medusa.id !== 'ww-medusa' || medusa.abilityUsedTurn === match.turn) return;
  if (match.energy < 1) { announceEffect('Medusa needs 1 energy.'); return; }
  if (!owner.deck.length) { announceEffect('There is no card left in the deck to reveal.'); return; }
  match.energy--; medusa.abilityUsedTurn = match.turn;
  const top = owner.deck[0]; render();
  chooseEffect(owner, 'Medusa · top card', 'The top card of your deck is revealed.', [{ value: true, label: top.name, detail: `${top.title} · ${top.element === 'None' ? 'Neutral' : top.element}` }], () => {
    if (activeCombatCue?.card === medusa) activeCombatCue.reveal = true;
    announceEffect(`Medusa revealed ${top.name}.`);
  });
}
function activateBlake(owner, laneIndex) {
  return trackCombatCue(owner.lanes[laneIndex], owner, laneIndex, () => resolveActivateBlake(owner, laneIndex));
}
function resolveActivateBlake(owner, laneIndex) {
  const blake = owner.lanes[laneIndex], enemy = owner === match.player ? match.opponent : match.player;
  if (!blake || blake.id !== 'ww-blake' || blake.abilityUsedTurn === match.turn) return;
  if (!enemy.lanes[laneIndex]) { announceEffect('Blake needs an opposing fighter in the same lane.'); return; }
  blake.abilityUsedTurn = match.turn;
  const returnedLanes = [];
  for (const side of [owner, enemy]) {
    const position = combatLane(side, laneIndex)?.getBoundingClientRect();
    if (returnFighterToHand(side, laneIndex) && position) returnedLanes.push(position);
  }
  if (activeCombatCue?.card === blake) activeCombatCue.sceneTargets = returnedLanes;
  render();
  announceEffect('Blake and the opposing fighter returned to their owners’ hands.');
}
function useAvatarGem(owner, actionInstance) {
  return trackCombatCue(owner.hand.find((card) => card.instance === actionInstance), owner, -1, () => resolveUseAvatarGem(owner, actionInstance));
}
function resolveUseAvatarGem(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (!action || match.energy < action.cost) { announceEffect('Avatar Gem needs 4 energy.'); return; }
  const choices = owner.lanes.map((card, laneIndex) => card && owner.transformationDeck.some((transform) => matchesTransformation(card, transform))
    ? { value: laneIndex, label: card.name, detail: `Transform into Zodiac Guardian · lane ${laneIndex + 1}` }
    : null).filter(Boolean);
  chooseEffect(owner, 'Avatar Gem', 'Choose one of your fighters. Replace it with a same-named Zodiac Guardian from your Transformation Deck.', choices, (laneIndex) => {
    const target = owner.lanes[laneIndex]; const transformIndex = owner.transformationDeck.findIndex((card) => matchesTransformation(target, card));
    if (!target || transformIndex < 0 || !owner.hand.includes(action) || match.energy < action.cost) return;
    const [transformed] = owner.transformationDeck.splice(transformIndex, 1);
    owner.life.familiars?.forEach((familiar) => { if (familiar?.attachedTo === target.instance) familiar.attachedTo = transformed.instance; });
    transformed.ready = target.ready; transformed.attacked = target.attacked; transformed.skipAttackThisTurn = target.skipAttackThisTurn; transformed.skipAttackNext = target.skipAttackNext;
    if (target.poisonTurns) { transformed.poisonTurns = target.poisonTurns; delete target.poisonTurns; }
    owner.destroyed.push(target); owner.lanes[laneIndex] = transformed;
    owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost;
    if (match.collectionOnly && owner === match.player) match.avatarGemUses = (match.avatarGemUses || 0) + 1;
    match.eventActor = owner; match.eventSource = action.name;
    render(); playSpecialFx(owner, laneIndex, 'avatar-gem', 'AVATAR GEM · TRANSFORM', { silent: true }); animateSummon(owner, laneIndex, transformed).then(() => triggerOnSummon(transformed, owner, laneIndex));
    announceEffect(`${target.name} transformed into a Zodiac Guardian.`);
  });
}
function setSharedField(owner, id, card = null) {
  const oldField = match.fieldCard;
  if (oldField?.card) {
    const oldOwner = oldField.owner === 'player' ? match.player : match.opponent;
    if (oldOwner && !oldOwner.destroyed.includes(oldField.card)) oldOwner.destroyed.push(oldField.card);
  }
  match.fieldCard = { id, owner: owner === match.player ? 'player' : 'opponent', card };
}
function applyEuphoria(card, owner = cardOwner(card)) { if (!card) return; const currentAttack = owner ? effectiveAttack(card, owner, {}) : Math.max(0, card.attack + (card.attackBonus || 0)); card.euphoriaAttackBonus = currentAttack; card.euphoria = true; card.euphoriaProtected = false; card.euphoriaExpiresAt = (match.turnSerial || 0) + 2; render(); }
function canPoison(card) {
  return Boolean(card && !card.poisonTurns);
}
function poisonBadge(card) {
  if (!card?.poisonTurns) return '';
  const label = `Poison · ${card.poisonTurns} turns remaining`;
  return `<span class="freeze-mark poison-mark" title="${label}" aria-label="${label}">☠${card.poisonTurns}</span>`;
}
function applyPoison(card, label = card?.name) {
  if (!canPoison(card)) return false;
  card.poisonTurns = 2;
  for (const side of [match.player, match.opponent]) {
    side.lanes.forEach((unit, lane) => {
      if (unit?.id !== 'ts-zenon') return;
      addPermanentAttack(unit, 1, 'Poison');
      showCombatCue(unit, side, lane);
    });
  }
  announceEffect(`${label} was poisoned.`);
  return true;
}
function resolvePoisonAtTurnStart(owner) {
  let changed = false;
  const tick = (card) => {
    if (!card?.poisonTurns) return false;
    changed = true;
    return --card.poisonTurns === 0;
  };
  owner.lanes.forEach((card, lane) => {
    if (!tick(card)) return;
    match.eventActor = null;
    match.eventSource = 'Poison';
    destroyUnit(owner, lane);
  });
  owner.life.middle.forEach((card, lane) => {
    if (!tick(card)) return;
    animateLifeShatter(owner, lane);
    owner.life.middle[lane] = null;
    owner.destroyed.push(card);
  });
  if (changed) render();
}
function poisonBattleChoices(owner, enemyOnly = false) {
  const enemy = owner === match.player ? match.opponent : match.player;
  return (enemyOnly ? [enemy] : [enemy, owner]).flatMap((side) => side.lanes.flatMap((card, lane) =>
    isBattleCard(card) && canPoison(card) ? [{ value: card.instance, label: card.name, detail: `${side === owner ? 'Your' : 'Enemy'} Battle Zone · Lane ${lane + 1}` }] : []
  ));
}
function consumeSewerAction(owner, action) {
  if (!owner.hand.includes(action) || match.energy < action.cost) return false;
  owner.hand.splice(owner.hand.indexOf(action), 1);
  owner.destroyed.push(action);
  match.energy -= action.cost;
  return true;
}
function activateSewerAction(owner, action) {
  if (action.id === 'ts-field') {
    if (!owner.hand.includes(action) || match.energy < action.cost) return;
    owner.hand.splice(owner.hand.indexOf(action), 1);
    match.energy -= action.cost;
    setSharedField(owner, 'ts-field', action);
    render();
    playFieldActivationFx('ts-field');
    announceEffect('Toxic Sewers is now the shared field.');
  } else if (action.id === 'ts-poison') {
    chooseEffect(owner, 'Poison · choose a Battle Card', 'The card is destroyed after two of its owner’s turns begin.', poisonBattleChoices(owner), (instance) => {
      const target = [match.player, match.opponent].flatMap((side) => side.lanes).find((card) => card?.instance === instance);
      if (!canPoison(target) || !consumeSewerAction(owner, action)) return;
      applyPoison(target);
      render();
    });
  } else {
    const lane = owner.lanes.findIndex((unit, index) => !unit && !familiarAtLane(owner, index));
    const choices = lane < 0 ? [] : owner.destroyed.filter((card) => isBattleCard(card) && card.type !== 'Transformation' && canSummonCard(owner, card))
      .map((card) => ({ value: card.instance, label: card.name, detail: card.title }));
    chooseEffect(owner, 'Shady Potion · choose a card to summon', 'Summon it into an open Battle Zone and apply Poison.', choices, (instance) => {
      const index = owner.destroyed.findIndex((card) => card.instance === instance);
      if (index < 0 || owner.lanes[lane] || familiarAtLane(owner, lane) || !consumeSewerAction(owner, action)) return;
      const [revived] = owner.destroyed.splice(index, 1);
      delete revived.poisonTurns;
      revived.ready = revived.attacked = false;
      owner.lanes[lane] = revived;
      applyPoison(revived);
      render();
      animateSummon(owner, lane, revived).then(() => triggerOnSummon(revived, owner, lane));
    });
  }
}
function expireEuphoriaAtTurnStart() {
  [match.player, match.opponent].forEach((owner) => owner?.lanes.forEach((card) => {
    if (!card?.euphoria || (card.euphoriaExpiresAt ?? 0) > match.turnSerial) return;
    card.euphoria = false; card.euphoriaProtected = false; card.euphoriaAttackBonus = 0; delete card.euphoriaExpiresAt;
  }));
}
function refreshAttackStatuses(owner) {
  owner.lanes.forEach((card) => {
    if (!card) return;
    if ((card.skipAttackTurns || 0) > 0) { card.skipAttackTurns--; card.skipAttackThisTurn = true; card.skipAttackNext = false; card.skipAttackReason = 'stun'; }
    else { card.skipAttackThisTurn = Boolean(card.skipAttackNext); card.skipAttackNext = false; if (!card.skipAttackThisTurn) card.skipAttackReason = ''; }
    card.ready = true; card.attacked = false; card.attacksThisTurn = 0;
  });
}
function playCoinFlipFx(heads) {
  return queueRivalAnimation(() => animateCoinFlip(heads));
}
function animateCoinFlip(heads) {
  const host = document.querySelector('.battlefield');
  if (!host) return;
  const fx = document.createElement('div');
  fx.className = 'coin-flip-fx';
  fx.setAttribute('aria-hidden', 'true');
  fx.innerHTML = `<span class="coin-flip-disc ${heads ? 'coin-heads' : 'coin-tails'}"><i class="coin-flip-face coin-front"><em>VALHALLA</em><b>HEADS</b></i><i class="coin-flip-face coin-back"><em>VALHALLA</em><b>TAILS</b></i></span>`;
  host.appendChild(fx);
  window.setTimeout(() => fx.remove(), 1500);
  return 1500;
}
function resolveEuphoriaAfterAttack(owner, laneIndex) {
  const card = owner?.lanes[laneIndex];
  if (!card?.euphoria) return;
  const protectedByCard = Boolean(card.euphoriaProtected || isEffectProtected(card));
  const hasValhallaBar = match.fieldCard?.id === 'valhalla-bar';
  const survivesCoin = hasValhallaBar && Math.random() < 0.5;
  if (hasValhallaBar && !protectedByCard) {
    playCoinFlipFx(survivesCoin);
    showCombatCue(match.fieldCard.card, match[match.fieldCard.owner], -1, [combatLane(owner, laneIndex)]);
  }
  if (isEffectProtected(card)) showCombatCue(card, owner, laneIndex);
  card.euphoria = false; card.euphoriaProtected = false; card.euphoriaAttackBonus = 0;
  if (protectedByCard || survivesCoin) {
    render();
    announceEffect(protectedByCard ? `${card.name} survived Euphoria’s destruction effect.` : `Valhalla Bar coin flip: heads. ${card.name} survived Euphoria.`);
    return;
  }
  if (hasValhallaBar) announceEffect(`Valhalla Bar coin flip: tails. ${card.name} is destroyed by Euphoria.`);
  match.eventActor = owner; match.eventSource = 'Euphoria'; destroyUnit(owner, laneIndex); render();
}
function activateAction(owner, actionInstance) {
  return trackCombatCue(owner.hand.find((card) => card.instance === actionInstance), owner, -1, () => resolveActivateAction(owner, actionInstance));
}
function resolveActivateAction(owner, actionInstance) {
  const action = owner.hand.find((card) => card.instance === actionInstance);
  if (match.tutorialMode && owner===match.player && action && !tutorialCanUseAction(action)) { tutorialWrongAction('Play the Action or Field card named in the lesson.'); return; }
  if (action?.type === 'Action' && match.energy < action.cost) { announceEffect(`${action.name || action.title} needs ${action.cost} Mana.`); return; }
  if (['valkyries-mead', 'training'].includes(action?.id) && !owner.lanes.some(isBattleCard)) { announceEffect(`${action.name} needs one of your Battle Cards in a Battle Zone.`); return; }
  if (action) { match.eventActor = owner; match.eventSource = action.name || action.title; logBattleEvent(`${battleSideName(owner)} activated ${action.name || action.title}.`, owner === match.player ? 'player' : 'enemy'); }
  if (!window.peppermintCombatEffects && action?.type === 'Action' && match.energy >= action.cost) playActionSfx(action);
  if (['ts-poison', 'ts-shady-potion', 'ts-field'].includes(action?.id)) activateSewerAction(owner, action);
  else if (action?.id === 'avatar-gem') useAvatarGem(owner, actionInstance);
  else if (action?.id === 'mana-potion' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy = Math.min(match.turnEnergyCap, match.energy - action.cost + 2); render(); playManaPotionFx(); announceEffect('Mana Potion restored up to 2 Mana, without exceeding this turn’s maximum.'); }
  else if (action?.id === 'health-potion' && match.energy >= action.cost) { const openLifeIndex = owner.life.middle.findIndex((lifeCard, index) => !lifeCard && !familiarAtLane(owner, index)); if (openLifeIndex < 0 || !owner.deck.length) { announceEffect('Health Potion needs an empty Life Zone without a Familiar and a card in your deck.'); return; } owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); owner.life.middle[openLifeIndex] = owner.deck.shift(); match.energy -= action.cost; render(); playHealthPotionFx(owner, openLifeIndex); announceEffect('Health Potion restored a Life Zone.'); }
  else if (action?.id === 'cooking') useCooking(owner, actionInstance);
  else if (action?.id === 'locker-room') useLockerRoom(owner, actionInstance);
  else if (action?.id === 'valkyries-mead' && match.energy >= action.cost) {
    const targets = [
      ...owner.lanes.flatMap((unit, lane) => isBattleCard(unit) ? [{ value: `own:${lane}`, label: unit.name, detail: `Your Battle Zone · Lane ${lane + 1} · double attack, then destroy after attacking` }] : []),
      ...match.opponent.lanes.flatMap((unit, lane) => isBattleCard(unit) ? [{ value: `enemy:${lane}`, label: unit.name, detail: `Opponent’s Battle Zone · Lane ${lane + 1} · double attack, then destroy after attacking` }] : []),
    ];
    chooseEffect(owner, "Valkyrie's Mead · choose a Battle Card", 'Give any Battle Card Euphoria until the start of its owner’s next turn.', targets, (key) => {
      const [side, laneText] = String(key).split(':'); const lane = Number(laneText); const targetOwner = side === 'own' ? owner : match.opponent; const target = targetOwner.lanes[lane];
      if (!isBattleCard(target)) { announceEffect('That Battle Card is no longer in its Battle Zone.'); return; }
      if (!owner.hand.includes(action)) { announceEffect("Valkyrie's Mead is no longer in your hand."); return; }
      if (match.energy < action.cost) { announceEffect("You no longer have enough Mana for Valkyrie's Mead."); return; }
      owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; applyEuphoria(target, targetOwner); playSpecialFx(targetOwner, lane, 'euphoria', 'EUPHORIA', { generatedOnly: true, silent: true }); announceEffect(`${target.name} gained Euphoria.`);
    });
  }
  else if (action?.id === 'golden-egg-flatbread' && match.energy >= action.cost) {
    const targets = owner.lanes.flatMap((unit, lane) => unit?.euphoria ? [{ value: lane, label: unit.name, detail: `Lane ${lane + 1} · protected from Euphoria` }] : []);
    chooseEffect(owner, 'Golden Egg Flatbread · protect a Battle Card', 'Choose a Battle Card with Euphoria. It will survive Euphoria after attacking.', targets, (lane) => { const target = owner.lanes[Number(lane)]; if (!isBattleCard(target) || !target.euphoria || !owner.hand.includes(action) || match.energy < action.cost) return; owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; target.euphoriaProtected = true; render(); announceEffect(`${target.name} is protected from Euphoria’s destruction.`); });
  }
  else if (action?.id === 'training' && match.energy >= action.cost) {
    const targets = owner.lanes.flatMap((unit, lane) => isBattleCard(unit) ? [{ value: unit.instance, label: unit.name, detail: `Your Battle Zone · Lane ${lane + 1} · permanent +1 attack` }] : []);
    chooseEffect(owner, 'Training · choose a Battle Card', 'Give one of your Battle Cards +1 attack.', targets, (instance) => {
      const lane = owner.lanes.findIndex((unit) => unit?.instance === instance); const target = owner.lanes[lane];
      if (!isBattleCard(target)) { announceEffect('That Battle Card is no longer in your Battle Zone.'); return; }
      if (!owner.hand.includes(action)) { announceEffect('Training is no longer in your hand.'); return; }
      if (match.energy < action.cost) { announceEffect('You no longer have enough Mana for Training.'); return; }
      owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; addPermanentAttack(target, 1, 'Training'); render(); announceEffect(`${target.name} gained +1 attack from Training.`);
    });
  }
  else if (action?.id === 'drinking-tea' && match.energy >= action.cost) {
    const choices = owner.lanes.flatMap((unit, lane) => unit?.element === 'Glacial' && !unit.ready ? [{ value: lane, label: unit.name, detail: `Lane ${lane + 1} · may act this turn` }] : []);
    chooseEffect(owner, 'Drinking Tea: quicken a Glacial ally', 'Choose a Glacial fighter to attack on the turn it was summoned.', choices, (lane) => { const target = owner.lanes[Number(lane)]; if (!target || !owner.hand.includes(action) || match.energy < action.cost) return; owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; target.ready = true; target.skipAttackThisTurn = false; render(); playSpecialFx(owner, Number(lane), 'frosty', 'DRINKING TEA · QUICKEN', { generatedOnly: true, silent: true }); announceEffect(`${target.name} can act on its first turn.`); });
  }
  else if (action?.id === 'wb-shopping' && match.energy >= action.cost) {
    owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; drawCard(owner, 2); render(); playSpecialFx(owner, -1, 'shopping', 'SHOPPING · TWO FINDS', { generatedOnly: true, silent: true }); announceEffect('Shopping drew 2 cards.'); if (match.tutorialMode && owner===match.player && tutorialLessonIndex===6) { tutorialBubbleDismissed=true; renderTutorialLesson(); window.setTimeout(()=>{ if(match.tutorialMode&&tutorialLessonIndex===6){ tutorialPromptCopy='The two drawn cards have arrived in your hand. Shopping sends itself to the Pandemonium Zone.'; tutorialBubbleDismissed=false; renderTutorialLesson(); window.setTimeout(()=>{if(match.tutorialMode&&tutorialLessonIndex===6)completeTutorialObjective();},1200); } },1100); }
  }
  else if (action?.id === 'wb-merry-christmas' && match.energy >= action.cost) {
    const choices = owner.deck.filter((card) => card.element === 'Glacial').map((card) => ({ value: card.instance, label: card.name, detail: `${card.title} · Glacial` }));
    chooseEffect(owner, 'Merry Christmas! · choose a Glacial card', 'Search your deck for a Glacial card to add to your hand.', choices, (instance) => { const index = owner.deck.findIndex((card) => card.instance === instance); if (index < 0 || !owner.hand.includes(action) || match.energy < action.cost) return; const [card] = owner.deck.splice(index, 1); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); owner.hand.push(card); queueDrawAnimation(owner,card); match.energy -= action.cost; render(); playSpecialFx(owner, -1, 'merry-christmas', 'MERRY CHRISTMAS · GIFT FOUND', { generatedOnly: true, silent: true }); announceEffect(`${card.name} was added to your hand.`); });
  }
  else if (action?.id === 'wb-wedding-proposal' && match.energy >= action.cost) {
    const pairs = [[0,1],[1,2]].filter(([a,b]) => ['Fighter','Transformation'].includes(owner.lanes[a]?.type) && ['Fighter','Transformation'].includes(owner.lanes[b]?.type));
    chooseEffect(owner, 'Wedding Proposal · choose a pair', 'Choose two adjacent Fighters or Transformation cards to each gain +1 attack.', pairs.map(([a,b]) => ({ value: `${a}:${b}`, label: `${owner.lanes[a].name} + ${owner.lanes[b].name}`, detail: `Adjacent lanes ${a + 1} and ${b + 1}` })), (value) => { const [a,b] = String(value).split(':').map(Number); if (!['Fighter','Transformation'].includes(owner.lanes[a]?.type) || !['Fighter','Transformation'].includes(owner.lanes[b]?.type) || !owner.hand.includes(action) || match.energy < action.cost) return; addPermanentAttack(owner.lanes[a], 1, 'Wedding Proposal'); addPermanentAttack(owner.lanes[b], 1, 'Wedding Proposal'); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; render(); playSpecialFx(owner, -1, 'wedding-proposal', 'WEDDING PROPOSAL · DOUBLE BLESSING', { generatedOnly: true, silent: true }); announceEffect(`${owner.lanes[a].name} and ${owner.lanes[b].name} gained 1 attack.`); });
  }
  else if (action?.id === 'ip-ride-the-wave' && match.energy >= action.cost) {
    if (owner.isAI) {
      const plan = findAiBestMove(owner, { adjacentOnly: true });
      if (!plan) { announceEffect('The rival held Ride the Wave because no adjacent move would improve its formation.'); return; }
      if (!moveWinterCard(owner, plan.from, plan.to)) return;
      owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; render(); announceEffect(`The rival rode the wave to move ${plan.card.name} into a stronger lane.`); return;
    }
    const origins = owner.lanes.flatMap((unit, lane) => unit && [lane - 1, lane + 1].some((to) => to >= 0 && to < 3 && !owner.lanes[to]) ? [{ value: lane, label: unit.name, detail: `Move from lane ${lane + 1}` }] : []);
    chooseEffect(owner, 'Ride the Wave · choose a fighter', 'Move one of your fighters into an adjacent empty zone.', origins, (from) => { const unit = owner.lanes[Number(from)]; const destinations = [Number(from) - 1, Number(from) + 1].filter((to) => to >= 0 && to < 3 && !owner.lanes[to]); chooseEffect(owner, 'Ride the Wave · choose a lane', `Choose an adjacent empty lane for ${unit?.name}.`, destinations.map((to) => ({ value: to, label: `Lane ${to + 1}`, detail: 'Adjacent and empty' })), (to) => { if (!owner.hand.includes(action) || match.energy < action.cost || !moveWinterCard(owner, Number(from), Number(to))) return; owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; render(); playSpecialFx(owner, Number(to), 'ride-the-wave', 'RIDE THE WAVE · LANE SHIFT', { generatedOnly: true, silent: true }); announceEffect(`${unit.name} rode the wave to lane ${Number(to) + 1}.`); }); });
  }
  else if (action?.id === 'ip-no-pain-no-gain' && match.energy >= action.cost) {
    const discards = owner.hand.filter((card) => card !== action).map((card) => ({ value: card.instance, label: card.name, detail: `${card.title} · discard` }));
    chooseEffect(owner, 'No Pain, No Gain · discard a card', 'Discard one card from your hand, then choose a fighter to gain +1 attack.', discards, (instance) => chooseEffect(owner, 'No Pain, No Gain · choose a fighter', 'Choose one of your fighters to gain +1 attack.', owner.lanes.flatMap((unit, lane) => unit ? [{ value: lane, label: unit.name, detail: `Lane ${lane + 1}` }] : []), (lane) => { const discardedIndex = owner.hand.findIndex((card) => card.instance === instance); const target = owner.lanes[Number(lane)]; if (discardedIndex < 0 || !target || !owner.hand.includes(action) || match.energy < action.cost) return; const [discarded] = owner.hand.splice(discardedIndex, 1); owner.destroyed.push(discarded); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; addPermanentAttack(target, 1, 'No Pain, No Gain'); render(); playSpecialFx(owner, Number(lane), 'no-pain-no-gain', 'NO PAIN · NO GAIN', { generatedOnly: true, silent: true }); announceEffect(`${target.name} gained 1 attack.`); }));
  }
  else if (action?.id === 'ip-swim-dont-sink' && match.energy >= action.cost) {
    const choices = owner.lanes.flatMap((unit, lane) => unit?.title === 'Island Paradise' && unit.element === 'Aqua' ? [{ value: lane, label: unit.name, detail: `Lane ${lane + 1} · ignore Island Paradise field effect` }] : []);
    chooseEffect(owner, "Swim, Don't Sink · choose an Aqua ally", 'Choose an Aqua Island Paradise fighter to ignore the Island Paradise field effect.', choices, (lane) => { const target = owner.lanes[Number(lane)]; if (!target || !owner.hand.includes(action) || match.energy < action.cost) return; target.ignoresIslandField = true; owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; render(); playSpecialFx(owner, Number(lane), 'swim-dont-sink', 'SWIM · DON’T SINK', { generatedOnly: true, silent: true }); announceEffect(`${target.name} now ignores the Island Paradise field effect.`); });
  }
  else if (action?.id === 'lt-doll-chorus' && match.energy >= action.cost) {
    const hasLivingToyCreature = owner.lanes.some((unit) => unit?.title === 'Living Toy' && unit.type === 'Creature');
    if (!hasLivingToyCreature) { announceEffect('Doll Chorus needs a Living Toy Creature in your Battle Zones.'); return; }
    const targets = owner.lanes.flatMap((unit, lane) => unit?.title === 'Living Toy' ? [{ value: lane, label: unit.name, detail: `Lane ${lane + 1} · gain +1 attack` }] : []);
    chooseEffect(owner, 'Doll Chorus · choose a Living Toy', 'Give a Living Toy fighter +1 attack.', targets, (lane) => { const target = owner.lanes[Number(lane)]; if (!target || !owner.hand.includes(action) || match.energy < action.cost) return; addPermanentAttack(target, 1, 'Doll Chorus'); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; render(); playSpecialFx(owner, Number(lane), 'doll-chorus', 'DOLL CHORUS · AWAKEN', { generatedOnly: true, silent: true }); announceEffect(`${target.name} gained 1 attack.`); });
  }
  else if (action?.id === 'lt-wind-up-toy' && match.energy >= action.cost) {
    const choices = owner.destroyed.filter((card) => card.title === 'Living Toy' && !owner.hand.some((held) => held.instance === card.instance)).map((card) => ({ value: card.instance, label: card.name, detail: 'Living Toy · return to hand' }));
    chooseEffect(owner, 'Wind-Up Toy · choose a Living Toy', 'Return a Living Toy card from your Pandemonium Zone to your hand.', choices, (instance) => {
      const destroyedIndex = owner.destroyed.findIndex((held) => held.instance === instance && held.title === 'Living Toy');
      const actionIndex = owner.hand.findIndex((held) => held.instance === action?.instance && held.id === 'lt-wind-up-toy');
      if (destroyedIndex < 0 || actionIndex < 0 || match.energy < action.cost) return;
      const [returned] = owner.destroyed.splice(destroyedIndex, 1);
      owner.hand.splice(actionIndex, 1);
      owner.destroyed.push(action);
      owner.hand.push(returned);
      match.energy -= action.cost;
      render();
      playSpecialFx(owner, -1, 'wind-up-toy', 'WIND-UP TOY · REWOUND', { generatedOnly: true, silent: true });
      announceEffect(`${returned.name} returned from the Pandemonium Zone to your hand.`);
    });
  }  else if (action?.id === 'lt-toy-capsule' && match.energy >= action.cost) {
    const choices = owner.deck.filter((card) => card.title === 'Living Toy').map((card) => ({ value: card.instance, label: card.name, detail: `${card.title} · ${card.element}` }));
    chooseEffect(owner, 'Toy Capsule · choose a Living Toy', 'Search your deck for a Living Toy card to add to your hand.', choices, (instance) => { const index = owner.deck.findIndex((card) => card.instance === instance && card.title === 'Living Toy'); if (index < 0 || !owner.hand.includes(action) || match.energy < action.cost) return; const [card] = owner.deck.splice(index, 1); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); owner.hand.push(card); queueDrawAnimation(owner,card); match.energy -= action.cost; render(); playSpecialFx(owner, -1, 'toy-capsule', 'TOY CAPSULE · PRIZE FOUND', { generatedOnly: true, silent: true }); announceEffect(`${card.name} was added to your hand.`); });
  }
  else if (action?.id === 'ww-planting') usePlanting(owner, actionInstance);
  else if (action?.id === 'ww-quick-draw' && match.energy >= action.cost) {
    const cards = owner.hand.filter((card) => card !== action && card.title === 'Wild West' && card.type !== 'Action' && canSummonCard(owner, card));
    chooseEffect(owner, 'Quick Draw · choose a fighter', 'Summon a Wild West fighter from your hand without paying its Mana cost.', cards.map((card) => ({ value: card.instance, label: card.name, detail: `${card.cost} Mana · ${card.role}` })), (instance) => {
      const card = owner.hand.find((unit) => unit.instance === instance); const lane = owner.lanes.findIndex((unit) => !unit);
      if (!card || lane < 0 || !owner.hand.includes(action) || match.energy < action.cost) { announceEffect('Quick Draw needs an open Battle Zone and a Wild West fighter in hand.'); return; }
      owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); owner.hand.splice(owner.hand.indexOf(card), 1); match.energy -= action.cost; card.ready = false; owner.lanes[lane] = card; render(); animateSummon(owner, lane, card).then(() => triggerOnSummon(card, owner, lane)); announceEffect(`${card.name} was summoned by Quick Draw.`);
    });
  }
  else if (action?.id === 'ww-duelists-gambit' && match.energy >= action.cost) {
    const allies = owner.lanes.map((card, lane) => card ? { value: lane, label: card.name, detail: `Your lane ${lane + 1}` } : null).filter(Boolean);
    const foes = (owner === match.player ? match.opponent : match.player).lanes.map((card, lane) => card ? { value: lane, label: card.name, detail: `Enemy lane ${lane + 1}` } : null).filter(Boolean);
    chooseEffect(owner, "Duelist's Gambit · sacrifice", 'Choose one of your fighters to destroy.', allies, (allyLane) => chooseEffect(owner, "Duelist's Gambit · rival", 'Choose an enemy fighter to destroy.', foes, (foeLane) => {
      const enemy = owner === match.player ? match.opponent : match.player; if (!owner.lanes[allyLane] || !enemy.lanes[foeLane] || !owner.hand.includes(action) || match.energy < action.cost) return;
      destroyUnit(owner, Number(allyLane)); destroyUnit(enemy, Number(foeLane)); owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost;
      const bonusTargets = owner.lanes.filter((card) => card?.title === 'Wild West'); const chosen = bonusTargets[Math.floor(Math.random() * bonusTargets.length)]; if (chosen) addPermanentAttack(chosen, 1, "Duelist's Gambit");
      render(); announceEffect(chosen ? `${chosen.name} gained permanent +1 attack.` : "Duelist's Gambit resolved, but no Wild West fighter remained to gain attack.");
    }));
  }
  else if (action?.id === 'ww-bounty-raid' && match.energy >= action.cost) {
    chooseEffect(owner, 'Bounty Raid · choose a lane', 'Destroy fighters in the same lane on both fields.', [0,1,2].map((lane) => ({ value: lane, label: `Lane ${lane + 1}`, detail: 'Destroy both fighters in this lane, if present' })), (lane) => {
      const enemy = owner === match.player ? match.opponent : match.player; if (!owner.hand.includes(action) || match.energy < action.cost) return;
      const index = Number(lane);
      if (activeCombatCue?.card === action) {
        activeCombatCue.sceneTargets = [owner, enemy].map((side) => combatLane(side, index)?.getBoundingClientRect()).filter(Boolean);
      }
      if (owner.lanes[index]) destroyUnit(owner, index);
      if (enemy.lanes[index]) destroyUnit(enemy, index);
      owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost;
      render(); announceEffect(`Bounty Raid cleared lane ${index + 1}.`);
    });
  }
  else if (action?.id === 'ww-root' && match.energy >= action.cost) {
    const enemy = owner === match.player ? match.opponent : match.player; const targets = enemy.lanes.map((card, lane) => card ? { value: lane, label: card.name, detail: `Enemy lane ${lane + 1} · cannot move next turn` } : null).filter(Boolean);
    chooseEffect(owner, 'Root · pin an enemy', 'Choose an enemy fighter that cannot move next turn.', targets, (lane) => { const target = enemy.lanes[lane]; if (!target || !owner.hand.includes(action) || match.energy < action.cost) return; target.cannotMoveUntilTurn = match.turn + 1; owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; render(); announceEffect(`${target.name} is rooted and cannot move next turn.`); });
  }
  else if (action?.id === 'ww-wanted-poster' && match.energy >= action.cost) {
    const enemy = owner === match.player ? match.opponent : match.player; const targets = enemy.lanes.map((card, lane) => card ? { value: lane, label: card.name, detail: `Enemy lane ${lane + 1} · −1 attack until your next turn` } : null).filter(Boolean);
    chooseEffect(owner, 'Wanted Poster · mark a target', 'Choose an enemy fighter to lose 1 attack until your next turn.', targets, (lane) => { const target = enemy.lanes[lane]; if (!target || !owner.hand.includes(action) || match.energy < action.cost) return; target.attackBonus = (target.attackBonus || 0) - 1; target.attackBonusSources = [...(target.attackBonusSources || []), 'Wanted Poster']; target.attackBonusModifiers = [...(target.attackBonusModifiers || []), { amount: -1, source: 'Wanted Poster', expiresTurn: match.turn + 1 }]; owner.hand.splice(owner.hand.indexOf(action), 1); owner.destroyed.push(action); match.energy -= action.cost; render(); announceEffect(`${target.name} lost 1 attack until your next turn.`); });
  }
  else if (action?.id === 'academy-grounds' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'academy-grounds', action); render(); playFieldActivationFx('academy-grounds'); announceEffect('Academy Hall is now the shared field. Academy cards gain +1 attack while at least one Academy card is on the field.'); if (match.tutorialMode && owner===match.player && tutorialLessonIndex===7) { tutorialPhase='field-reveal'; tutorialBubbleDismissed=true; renderTutorialLesson(); window.setTimeout(()=>{ if(match.tutorialMode&&tutorialLessonIndex===7){ tutorialPhase='attack'; tutorialPromptCopy='Academy Hall is active. Fritz and Bandito each started at 1 ATK; the field raises Academy Fritz to 2 ATK. Drag Fritz onto Bandito in Lane 1.'; tutorialBubbleDismissed=false; render(); renderTutorialLesson(); } },1600); } }
  else if (action?.id === 'ip-field' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'ip-field', action); render(); playFieldActivationFx('ip-field'); announceEffect('Island Paradise is now the shared field. Its fighters on both sides cannot be targeted, but do not defend their Life Zones.'); }
  else if (action?.id === 'toy-store' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'toy-store', action); render(); playFieldActivationFx('toy-store'); announceEffect('Toy Store is now the shared field. All 1-cost Fighters and Creatures on both sides gain +1 attack.'); }
  else if (action?.id === 'cactus-creek' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'cactus-creek', action); render(); playFieldActivationFx('cactus-creek'); announceEffect('Cactus Creek is now the shared field. Wild West cards in Battle Zones gain +1 attack during the opponent’s turn.'); }
  else if (action?.id === 'christmas-mall' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'christmas-mall', action); match.fieldCard.usedTurnKeys = []; render(); playFieldActivationFx('christmas-mall'); announceEffect('Christmas Mall is now the shared field. Swap two fighters once per turn if one is Glacial.'); }
  else if (action?.id === 'valhalla-bar' && match.energy >= action.cost) { owner.hand.splice(owner.hand.indexOf(action), 1); match.energy -= action.cost; setSharedField(owner, 'valhalla-bar', action); render(); playFieldActivationFx('valhalla-bar'); announceEffect('Valhalla Bar is now the shared field. Euphoria coin flips can save attacking Battle Cards.'); }
}
function useLockerRoom(owner, actionInstance) {
  return trackCombatCue(owner.hand.find((card) => card.instance === actionInstance), owner, -1, () => resolveUseLockerRoom(owner, actionInstance));
}
function resolveUseLockerRoom(owner, actionInstance) {
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
      replacement.ready = true; replacement.attacked = false; replacement.skipAttackThisTurn = false; replacement.skipAttackNext = false; owner.lanes[lane] = replacement;
      render(); playSpecialFx(owner, lane, 'avatar-gem', 'LOCKER ROOM · REPLACEMENT', { generatedOnly: true, silent: true });
      animateSummon(owner, lane, replacement).then(() => triggerOnSummon(replacement, owner, lane));
      announceEffect(`${replacement.title} ${replacement.name} entered the field through Locker Room.`);
    });
  });
}
function useCotton(owner, cardInstance) {
  return trackCombatCue(owner.hand.find((card) => card.id === 'peppermint-ally' && card.instance === cardInstance), owner, -1, () => resolveUseCotton(owner, cardInstance));
}
function resolveUseCotton(owner, cardInstance) {
  const cotton = owner.hand.find((card) => card.id === 'peppermint-ally' && card.instance === cardInstance);
  if (!cotton) return;
  const hallIndex = owner.deck.findIndex((card) => card.id === 'academy-grounds');
  if (hallIndex < 0) { announceEffect('Cotton could not find Academy Hall in your deck.'); return; }
  const [hall] = owner.deck.splice(hallIndex, 1);
  owner.hand.splice(owner.hand.indexOf(cotton), 1); owner.destroyed.push(cotton); owner.hand.push(hall); queueDrawAnimation(owner,hall);
  render(); playSpecialFx(owner, -1, 'cotton', 'COTTON · FIELD FOUND', { generatedOnly: true }); announceEffect('Cotton added Academy Hall to your hand.');
}
function isEffectProtected(card) { return card?.id === 'ww-academy-rick' || card?.id === 'valhalla-sabrina'; }
function animateShatter(source, element, variant = '') {
  if (!source) return;
  const bounds = source.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const overlay = document.createElement('div');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.className = `shatter-overlay ${variant} element-${(element || 'None').toLowerCase()}`;
  overlay.style.left = `${bounds.left}px`;
  overlay.style.top = `${bounds.top}px`;
  overlay.style.width = `${bounds.width}px`;
  overlay.style.height = `${bounds.height}px`;
  const shatterDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 450 : 1020;
  overlay.style.setProperty('--shatter-duration', `${shatterDuration}ms`);
  const pieces = [
    ['0 0, 50% 0, 50% 50%', -34, -43, -18], ['50% 0, 100% 0, 50% 50%', 0, -54, 14],
    ['100% 0, 100% 50%, 50% 50%', 36, -35, 22], ['100% 50%, 100% 100%, 50% 50%', 47, 1, 18],
    ['100% 100%, 50% 100%, 50% 50%', 31, 41, 13], ['50% 100%, 0 100%, 50% 50%', 0, 53, -18],
    ['0 100%, 0 50%, 50% 50%', -36, 38, -24], ['0 50%, 0 0, 50% 50%', -48, 0, 12],
  ];
  pieces.forEach(([clip, x, y, rotation], index) => {
    const shard = source.cloneNode(true);
    shard.classList.add('shatter-fragment');
    shard.removeAttribute('tabindex');
    shard.inert = true;
    if (variant === 'life-shatter-overlay') shard.querySelector('.life-familiar')?.remove();
    shard.style.clipPath = `polygon(${clip})`;
    shard.style.setProperty('--shard-x', `${x}px`);
    shard.style.setProperty('--shard-y', `${y}px`);
    shard.style.setProperty('--shard-rotation', `${rotation}deg`);
    shard.style.animationDelay = `${index * 14}ms`;
    overlay.appendChild(shard);
  });
  const animate = () => {
    overlay.querySelector('.shatter-hold')?.remove();
    overlay.classList.remove('shatter-hold-overlay');
    if (!overlay.isConnected) document.body.appendChild(overlay);
    const duration = shatterDuration + 115;
    window.setTimeout(() => overlay.remove(), duration);
    return duration;
  };
  if (activeCombatCue && !activeCombatCue.shown) {
    const heldCard = source.cloneNode(true);
    heldCard.classList.add('shatter-hold');
    heldCard.inert = true;
    overlay.classList.add('shatter-hold-overlay');
    overlay.appendChild(heldCard);
    document.body.appendChild(overlay);
    (activeCombatCue.shatters ??= []).push(animate);
  } else if (resolvingStrike) animate();
  else queueRivalAnimation(animate);
  return shatterDuration - 90;
}
function animateCardShatter(owner, laneIndex, card) {
  const side = owner === match.player ? 'player' : 'opponent';
  animateShatter(document.querySelector(`[data-side="${side}"][data-lane="${laneIndex}"] .battle-card`), card.element);
}
function animateLifeShatter(owner, laneIndex, main = false) {
  const side = owner === match.player ? 'player' : 'opponent';
  const selector = main ? `#${side}-life .main-life-back .life-card` : `#${side}-life .life-middle .life-card:nth-child(${laneIndex + 1})`;
  return animateShatter(document.querySelector(selector), 'Solar', 'life-shatter-overlay');
}
function sendFieldCardToHand(owner, card) {
  if (card.id === 'ts-lorette') card.cost += 1;
  owner.hand.push(card);
}
function returnFighterToHand(owner, laneIndex) {
  const target = owner.lanes[laneIndex];
  if (!target) return;
  if (isEffectProtected(target)) { showCombatCue(target, owner, laneIndex); announceEffect('Academy Rick is protected from card effects.'); return null; }
  delete target.poisonTurns;
  owner.lanes[laneIndex] = null; sendFieldCardToHand(owner, target);
  const familiarIndex = owner.life.familiars?.findIndex((familiar) => familiar?.attachedTo === target.instance) ?? -1;
  if (familiarIndex >= 0) { const familiar = owner.life.familiars[familiarIndex]; owner.life.familiars[familiarIndex] = null; owner.destroyed.push(familiar); announceEffect(`${target.name}’s Familiar was destroyed with its owner.`); }
  if (target.id === 'ip-natsuki') [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.protectedBy === target.instance) delete unit.protectedBy; }));
  render(); announceEffect(`${target.name} returned to hand.`);
  return target;
}
function destroyUnit(owner, laneIndex, inBattle = false, destroyedBy = null) {
  const card = owner.lanes[laneIndex];
  if (!card) return null;
  const actor = match.eventActor || (inBattle ? (owner === match.player ? match.opponent : match.player) : null);
  if (!inBattle && isEffectProtected(card)) { showCombatCue(card, owner, laneIndex); announceEffect(card.id === 'valhalla-sabrina' ? 'Valhalla Sabrina is immune to destruction by card effects.' : 'Academy Rick is protected from card effects.'); return null; }
  if (!inBattle && card.id !== 'valhalla-miss-ragna' && actor && actor !== owner) {
    const protectorLane = [laneIndex - 1, laneIndex + 1].find((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.id === 'valhalla-miss-ragna' && !owner.lanes[slot].usedIntercept);
    if (protectorLane !== undefined) { const protector = owner.lanes[protectorLane]; protector.usedIntercept = true; showCombatCue(protector, owner, protectorLane, [combatLane(owner, laneIndex)]); announceEffect(`Miss Ragna intercepted the effect and protected ${card.name}.`); destroyUnit(owner, protectorLane); return null; }
  }
  const actorText = actor ? battleSideName(actor) : 'An effect';
  const cause = inBattle ? ' in battle' : match.eventSource ? ` ${match.eventSource}'s effect` : '';
  logBattleEvent(`${actorText}${cause} destroyed ${card.name}.`, actor === match.player ? 'player' : actor === match.opponent ? 'enemy' : 'system');
  animateCardShatter(owner, laneIndex, card);
  delete card.poisonTurns;
  const galactaSaves = inBattle && card.id !== 'ww-galacta' && card.title === 'Wild West' && card.cost <= 3 && owner.lanes.some((unit) => unit?.id === 'ww-galacta');
  const zombyReturns = card.id === 'zomby';
  owner.lanes[laneIndex] = null;
  const familiarIndex = owner.life.familiars?.findIndex((familiar) => familiar?.attachedTo === card.instance) ?? -1;
  if (familiarIndex >= 0) { owner.destroyed.push(owner.life.familiars[familiarIndex]); owner.life.familiars[familiarIndex] = null; announceEffect(`${card.name}’s Familiar was destroyed with its owner.`); }
  if (card.id === 'ts-lorette') {
    drawMatching(owner, (unit) => unit.id === 'ts-elyza', 'Maman Elyza');
    sendFieldCardToHand(owner, card);
    showCombatCue(card, owner, laneIndex);
    announceEffect('Lorette returned to hand and now costs ' + card.cost + ' Mana.');
  }
  else if (zombyReturns) { card.cost += 1; owner.hand.push(card); showCombatCue(card, owner, laneIndex); announceEffect(`Zomby returned to its owner’s hand and its cost increased to ${card.cost} Mana.`); }
  else if (galactaSaves) { owner.hand.push(card); const sourceLane = owner.lanes.findIndex((unit) => unit?.id === 'ww-galacta'); showCombatCue(owner.lanes[sourceLane], owner, sourceLane, [combatLane(owner, laneIndex)]); announceEffect(`${card.name} returned to your hand through GaLacta.`); }
  else { owner.destroyed.push(card); if (inBattle) match.battleDestroyedCards = (match.battleDestroyedCards || 0) + 1; }
  if (card.id === 'ts-slime') {
    drawMatching(owner, (unit) => unit.id === 'ts-slime', 'Toxic Sewer Slime');
    showCombatCue(card, owner, laneIndex);
  }
  if (card.id === 'ts-spider' && inBattle && destroyedBy) {
    const enemy = owner === match.player ? match.opponent : match.player;
    const targetLane = enemy.lanes.indexOf(destroyedBy);
    if (targetLane >= 0 && applyPoison(destroyedBy)) {
      showCombatCue(card, owner, laneIndex, [combatLane(enemy, targetLane)]);
    }
  }
  const hasDeathCue = ['kage', 'amethyst', 'patchy', 'ww-eggscythe', 'ww-rosaluna', 'ip-banaphin'].includes(card.id);
  if (hasDeathCue) trackCombatCue(card, owner, laneIndex, () => {
    if (!galactaSaves && card.id === 'kage') { playSpecialFx(owner, laneIndex, 'kage', 'KAGE · LAST VEIL'); drawMatching(owner, (candidate) => candidate.name === 'Zoya', 'Zoya'); }
    if (card.id === 'amethyst') {
      const opponent = owner === match.player ? match.opponent : match.player;
      if (opponent.lanes[laneIndex]) {
        const targetBox = combatLane(opponent, laneIndex)?.getBoundingClientRect();
        if (activeCombatCue?.card === card && targetBox) activeCombatCue.sceneTargets = [targetBox];
        playSpecialFx(owner, laneIndex, 'amethyst', 'AMETHYST · SHATTER');
        if (destroyUnit(opponent, laneIndex)) announceEffect('Amethyst destroys the fighter opposite it.');
      }
    }
    if (!galactaSaves && card.id === 'ww-eggscythe') {
      const candidates = owner.destroyed.filter((unit) => unit.instance !== card.instance && unit.element === 'Dark').map((unit) => ({ value: unit.instance, label: unit.name, detail: `${unit.title} · Dark` }));
      chooseEffect(owner, 'Eggscythe: return a Dark card', 'Choose a different Dark card from your destroyed zone to return to your hand.', candidates, (instance) => { const i = owner.destroyed.findIndex((unit) => unit.instance === instance); if (i >= 0) { const [returned] = owner.destroyed.splice(i, 1); owner.hand.push(returned); render(); announceEffect(`${returned.name} returned to your hand.`); } });
    }
    if (!galactaSaves && card.id === 'ww-rosaluna') drawMatching(owner, (candidate) => candidate.title === 'Wild West' && candidate.element === 'Mind', 'Mind Wild West card');
    if (!galactaSaves && card.id === 'ip-banaphin') drawMatching(owner, (candidate) => candidate.title === 'Island Paradise' && candidate.type === 'Creature', 'Island Paradise Creature');
    if (card.id === 'patchy') drawMatching(owner, (candidate) => candidate.id === 'dharma', 'Dharma');
  });
  if (card.id === 'ip-natsuki') [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.protectedBy === card.instance) delete unit.protectedBy; }));
  return card;
}
function moveWinterCard(owner, from, to) {
  const card = owner.lanes[from]; if (!card || owner.lanes[to] || to < 0 || to > 2 || from === to) return false;
  if (familiarAtLane(owner, to)) return false;
  if (card.cannotMoveUntilTurn && match.turn < card.cannotMoveUntilTurn) { announceEffect(`${card.name} is rooted and cannot move yet.`); return false; }
  if (['wb-steepod', 'wb-topaz-diamond', 'ip-ride-the-wave', 'wb-merryhound'].includes(activeCombatCue?.card.id)) {
    activeCombatCue.sceneTargets = [from, to].map((lane) => combatLane(owner, lane)?.getBoundingClientRect()).filter(Boolean);
  }
  owner.lanes[to] = card; owner.lanes[from] = null;
  const familiar = owner.life.familiars?.find((item) => item?.attachedTo === card.instance);
  if (familiar) { owner.life.familiars = owner.life.familiars.map((item) => item === familiar ? null : item); owner.life.familiars[to] = familiar; }
  if (card.id === 'wb-dimitri') {
    addPermanentAttack(card, 1, 'Dimitri moved');
    showCombatCue(card, owner, to);
  }
  [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.id === 'wb-magnus') {
    addPermanentAttack(unit, 1, 'Magnus witnessed a move');
    showCombatCue(unit, side, side.lanes.indexOf(unit));
  } }));
  logBattleEvent(`${card.name} moved from lane ${from + 1} to lane ${to + 1}.`);
  render();
  if (['wb-gillusion', 'wb-ladyfeather', 'wb-rebeccah'].includes(activeCombatCue?.card.id)) {
    const destination = combatLane(owner, to)?.getBoundingClientRect();
    if (destination) activeCombatCue.sceneTargets = [destination];
  }
  return true;
}
function swapChristmasMallFighters(owner, first, second) {
  const a = owner.lanes[first], b = owner.lanes[second]; if (!a || !b || first === second) return false;
  owner.lanes[first] = b; owner.lanes[second] = a;
  const familiars = owner.life.familiars || [];
  [familiars[first], familiars[second]] = [familiars[second], familiars[first]];
  if (a.id === 'wb-dimitri') addPermanentAttack(a, 1, 'Dimitri moved');
  if (b.id === 'wb-dimitri') addPermanentAttack(b, 1, 'Dimitri moved');
  [match.player, match.opponent].forEach((side) => side.lanes.forEach((unit) => { if (unit?.id === 'wb-magnus') {
    addPermanentAttack(unit, 2, 'Christmas Mall swapped two fighters');
    showCombatCue(unit, side, side.lanes.indexOf(unit));
  } }));
  logBattleEvent(`${a.name} and ${b.name} swapped lanes ${first + 1} and ${second + 1}.`); render(); return true;
}
function aiPositionScore(owner) {
  const rival = owner === match.player ? match.opponent : match.player;
  if (!rival) return 0;
  let score = 0;
  owner.lanes.forEach((card, lane) => {
    if (!card) return;
    const attack = effectiveAttack(card, owner, { attacking: true, targetIndex: lane });
    const defense = effectiveAttack(card, owner, { defending: true });
    score += attack * 0.78 + defense * 0.22;
    const target = resolveAttackTarget(rival, { type: 'lane', index: lane }, lane);
    const blocking = target.type === 'lane' ? rival.lanes[target.index] : null;
    const bypassed = blocking?.protectedBy && rival.lanes.some((unit) => unit?.instance === blocking.protectedBy) || match.fieldCard?.id === 'ip-field' && blocking?.title === 'Island Paradise' && !blocking?.ignoresIslandField;
    if (blocking && !bypassed) {
      const targetAttack = effectiveAttack(card, owner, { attacking: true, targetIndex: target.index });
      const targetDefense = effectiveAttack(blocking, rival, { defending: true });
      score += targetAttack >= targetDefense ? 1.3 + Math.min(3, targetAttack - targetDefense) * 0.28 : Math.max(-1.5, targetAttack - targetDefense) * 0.18;
    } else if (hasLifeTarget(rival, lane, card)) score += 1.1;
  });
  const shield = shielderLane(owner);
  if (shield >= 0) {
    for (let lane = 0; lane < 3; lane++) {
      if (lane !== shield && owner.lanes[lane] && resolveAttackTarget(owner, { type: 'lane', index: lane }, lane).index === shield) score += 0.35;
    }
  }
  return score;
}
function aiMoveRuleBonus(owner, movedCards, moveCount = 1) {
  const rival = owner === match.player ? match.opponent : match.player;
  const ownMagnus = owner.lanes.filter((card) => card?.id === 'wb-magnus').length;
  const rivalMagnus = rival?.lanes.filter((card) => card?.id === 'wb-magnus').length || 0;
  const movedDimitri = movedCards.filter((card) => card?.id === 'wb-dimitri').length;
  return moveCount * (ownMagnus - rivalMagnus * 0.72) + movedDimitri * 1.2;
}
function findAiBestMove(owner, { canMove = () => true, adjacentOnly = false } = {}) {
  const baseline = aiPositionScore(owner); let best = null;
  owner.lanes.forEach((card, from) => {
    if (!card || !canMove(card, from)) return;
    owner.lanes.forEach((occupant, to) => {
      if (occupant || from === to || (adjacentOnly && Math.abs(from - to) !== 1) || (card.cannotMoveUntilTurn && match.turn < card.cannotMoveUntilTurn)) return;
      owner.lanes[from] = null; owner.lanes[to] = card;
      const value = aiPositionScore(owner) - baseline + aiMoveRuleBonus(owner, [card]);
      owner.lanes[to] = null; owner.lanes[from] = card;
      if (value > 0.15 && (!best || value > best.value)) best = { from, to, value, card };
    });
  });
  return best;
}
function aiMoveUtility(owner, movingSide, from, to) {
  const rival = owner === match.player ? match.opponent : match.player;
  const card = movingSide.lanes[from]; if (!card || movingSide.lanes[to]) return -Infinity;
  const ownBefore = aiPositionScore(owner), rivalBefore = aiPositionScore(rival);
  movingSide.lanes[from] = null; movingSide.lanes[to] = card;
  const ownAfter = aiPositionScore(owner), rivalAfter = aiPositionScore(rival);
  movingSide.lanes[to] = null; movingSide.lanes[from] = card;
  let value = (ownAfter - ownBefore) - (rivalAfter - rivalBefore) * 0.8;
  if (movingSide === owner) value += aiMoveRuleBonus(owner, [card]);
  return value;
}
function rankAiMoveChoices(owner, choices) {
  return choices.map((choice) => {
    const [sideKey, from, to] = String(choice.value).split(':');
    const side = sideKey === 'p' ? match.player : sideKey === 'o' ? match.opponent : owner;
    return { choice, value: to == null ? -Infinity : aiMoveUtility(owner, side, Number(from), Number(to)) };
  }).sort((a, b) => b.value - a.value).map((item) => item.choice);
}
function findAiBestMallSwap(owner) {
  const baseline = aiPositionScore(owner); let best = null;
  owner.lanes.forEach((firstCard, first) => owner.lanes.forEach((secondCard, second) => {
    if (second <= first || !firstCard || !secondCard || (firstCard.element !== 'Glacial' && secondCard.element !== 'Glacial')) return;
    owner.lanes[first] = secondCard; owner.lanes[second] = firstCard;
    const value = aiPositionScore(owner) - baseline + aiMoveRuleBonus(owner, [firstCard, secondCard], 2);
    owner.lanes[first] = firstCard; owner.lanes[second] = secondCard;
    if (value > 0.15 && (!best || value > best.value)) best = { first, second, value };
  }));
  return best;
}
function christmasMallSwapChoices(owner) {
  const sideKey = owner === match.player ? 'p' : 'o';
  return owner.lanes.flatMap((firstCard, first) => firstCard ? owner.lanes.flatMap((secondCard, second) => second > first && secondCard && (firstCard.element === 'Glacial' || secondCard.element === 'Glacial') ? [{ value: `${first}:${second}`, label: `${firstCard.name} ↔ ${secondCard.name}`, detail: `Your lanes ${first + 1} and ${second + 1}` }] : []) : []);
}
function canUseChristmasMall(card) {
  const field = match.fieldCard;
  return Boolean(card && field?.id === 'christmas-mall' && field.card === card &&
    match.active === 'player' && !match.over && !match.attackResolving &&
    !field.usedTurnKeys?.includes(`${match.turn}-player`) && christmasMallSwapChoices(match.player).length);
}
function activateChristmasMall(owner) {
  return trackCombatCue(match.fieldCard?.card, owner, -1, () => resolveActivateChristmasMall(owner));
}
function resolveActivateChristmasMall(owner) {
  const field = match.fieldCard; if (field?.id !== 'christmas-mall') return;
  const turnKey = `${match.turn}-${owner === match.player ? 'player' : 'opponent'}`;
  if (field.usedTurnKeys?.includes(turnKey)) return;
  if (owner.isAI) {
    const plan = findAiBestMallSwap(owner);
    if (!plan) return;
    field.usedTurnKeys ||= []; field.usedTurnKeys.push(turnKey);
    swapChristmasMallFighters(owner, plan.first, plan.second);
    announceEffect(`Christmas Mall repositioned ${owner.lanes[plan.first].name} and ${owner.lanes[plan.second].name} for a stronger formation.`);
    return;
  }
  const choices = christmasMallSwapChoices(owner);
  chooseEffect(owner, 'Christmas Mall: switch partners', 'Swap two of your fighters. At least one must be Glacial.', choices, (key) => { if (match.fieldCard !== field) return; const [first, second] = key.split(':'); field.usedTurnKeys ||= []; field.usedTurnKeys.push(turnKey); swapChristmasMallFighters(sideKey === 'p' ? match.player : match.opponent, Number(first), Number(second)); });
}
function addPermanentAttack(card, amount, source) { card.attackBonus = (card.attackBonus || 0) + amount; card.attackBonusModifiers = [...(card.attackBonusModifiers || []), { amount, source }]; card.attackBonusSources = [...(card.attackBonusSources || []), source]; }
function clearTemporaryAttackModifiers(owner) {
  owner.lanes.forEach((card) => {
    if (!card?.attackBonusModifiers?.some((modifier) => modifier.expiresTurn && modifier.expiresTurn <= match.turn)) return;
    const expired = card.attackBonusModifiers.filter((modifier) => modifier.expiresTurn && modifier.expiresTurn <= match.turn);
    card.attackBonus = (card.attackBonus || 0) - expired.reduce((total, modifier) => total + modifier.amount, 0);
    card.attackBonusModifiers = card.attackBonusModifiers.filter((modifier) => !expired.includes(modifier));
    card.attackBonusSources = card.attackBonusModifiers.map((modifier) => modifier.source);
  });
}
function triggerOnSummon(card, owner, laneIndex) {
  if (owner !== match.player && owner !== match.opponent) return;
  // Spider's poison is a death-in-battle trigger. Do not infer a Spider skill
  // cue from unrelated summon changes (for example, the free Sewer Frog).
  if (card.id === 'ts-spider') return resolveTriggerOnSummon(card, owner, laneIndex);
  return trackCombatCue(card, owner, laneIndex, () => resolveTriggerOnSummon(card, owner, laneIndex), { reveal: card.id === 'valhalla-morrikyn' && Boolean((owner === match.player ? match.opponent : match.player).deck.length) });
}
function resolveSewerSummon(card, owner, opponent) {
  if (card.id === 'ts-big-troll') {
    const trolls = [...owner.lanes, ...opponent.lanes].filter((unit) => ['ts-troll-boy', 'ts-troll-girl'].includes(unit?.id)).length;
    if (trolls) { addPermanentAttack(card, trolls, card.name); render(); }
  } else if (card.id === 'ts-troll-boy') {
    card.ready = true;
    render();
  } else if (card.id === 'ts-troll-girl' && match.energy >= 1 && opponent.hand.length) {
    const [discarded] = opponent.hand.splice(Math.floor(Math.random() * opponent.hand.length), 1);
    opponent.destroyed.push(discarded);
    match.energy--;
    render();
    announceEffect('Troll Girl discarded a random card from the rival’s hand.');
  } else if (card.id === 'academy-ryuu') {
    drawMatching(owner, (unit) => ['ts-poison', 'ts-shady-potion'].includes(unit.id), 'Poison or Shady Potion');
  } else if (card.id === 'ts-elyza') {
    drawMatching(owner, (unit) => ['Aemi', 'Ryuu'].includes(unit.name), 'Aemi or Ryuu');
  } else if (card.id === 'ts-slime-snake' || card.id === 'ts-hellfire-sheep') {
    const guardian = card.id === 'ts-slime-snake' ? 'Ryuu' : 'Aemi';
    if ([...owner.lanes, ...opponent.lanes].some((unit) => unit?.name === guardian)) {
      drawMatching(owner, (unit) => unit.id === 'avatar-gem', 'Avatar Gem');
    }
  } else if (card.id === 'ts-ryuu') {
    const targets = opponent.life.middle.flatMap((unit, lane) => canPoison(unit) ? [
      { value: lane, label: `Rival Life Zone ${lane + 1}`, detail: 'Apply Poison' },
    ] : []);
    if (!targets.length) announceEffect('Ryuu needs an unpoisoned enemy side Life Card.');
    else chooseEffect(owner, 'Ryuu · poison a Life Card', 'Choose one of the rival’s three side Life Cards.', targets, (lane) => {
      if (!applyPoison(opponent.life.middle[lane], `Rival Life Zone ${lane + 1}`)) return;
      const element = lifeTargetElement(combatSide(opponent), lane);
      if (activeCombatCue?.card === card && element) activeCombatCue.sceneTargets = [element.getBoundingClientRect()];
      render();
    });
  }
  if (card.title !== 'Toxic Sewer' || card.id === 'ts-frog') return;
  const frog = owner.hand.find((unit) => unit.id === 'ts-frog');
  const openLane = owner.lanes.findIndex((unit, lane) => !unit && !familiarAtLane(owner, lane));
  if (!frog || openLane < 0) return;
  owner.hand.splice(owner.hand.indexOf(frog), 1);
  owner.lanes[openLane] = frog;
  render();
  showCombatCue(frog, owner, openLane);
  animateSummon(owner, openLane, frog).then(() => triggerOnSummon(frog, owner, openLane));
  announceEffect('Frog joined the field for free.');
}
function resolveTriggerOnSummon(card, owner, laneIndex) {
  const opponent = owner === match.player ? match.opponent : match.player;
  match.eventActor = owner; match.eventSource = card.name;
  logBattleEvent(`${battleSideName(owner)} summoned ${card.name}.`, owner === match.player ? 'player' : 'enemy');
  resolveSewerSummon(card, owner, opponent);
  const fxKeys = { aemi:'aemi',runny:'runny',berry:'berry',frosty:'frosty',den:'den',ryota:'ryota',gummy:'gummy',dharma:'healer','zodiac-guardian-ryota':'ryota','academy-fritz':'summoner','ww-academy-fritz':'summoner','academy-lynda':'trickster','ww-academy-lynda':'trickster','lt-fritz':'summoner','lt-raterrot':'summoner','lt-boxy':'enchanter','lt-clapster':'shooter','lt-scribble':'summoner','lt-melodoll':'healer','vishnu':'shooter' };
  if (['aemi','runny','berry','frosty','den','ryota','gummy','brewy','dharma','zodiac-guardian-ryota','academy-fritz','ww-academy-fritz','academy-lynda','ww-academy-lynda','ww-brian','ww-academy-brian','ww-zodiac-muddy-pig','zodiac-valkyrie-chicken','ip-zodiac-aqua-kentaur','ip-zodiac-psycho-chicken','wb-zodiac-cloud-goat','ww-fritz','ww-wild-ox','ww-bandito','ww-sangrizo','ip-natsuki','ip-pinebeak','lt-scribble','lt-fritz','lt-raterrot','lt-boxy','lt-teddy','lt-broomy','lt-melodoll','lt-clapster','vishnu'].includes(card.id)) logBattleEvent(`${battleSideName(owner)} activated ${card.name}'s effect.`, owner === match.player ? 'player' : 'enemy');
  if (fxKeys[card.id]) playSpecialFx(owner, laneIndex, fxKeys[card.id], `${card.name.toUpperCase()} · ABILITY`, { generatedOnly: true });
  if (card.id === 'wb-bearnardo') {
    const choices = owner.hand.filter((unit) => unit.element === 'Glacial' && unit.cost > 0).map((unit) => ({ value: unit.instance, label: unit.name, detail: `Reduce cost ${unit.cost} → ${unit.cost - 1}` }));
    chooseEffect(owner, 'Bearnardo: chill the cost', 'Choose a Glacial card in your hand to cost 1 less.', choices, (instance) => {
      const target = owner.hand.find((unit) => unit.instance === instance);
      if (!target) return;
      target.cost--;
      render();
      const cueTarget = combatSource(target, owner, -1)?.getBoundingClientRect();
      if (cueTarget && activeCombatCue?.card === card) activeCombatCue.sceneTargets = [cueTarget];
      announceEffect(`${target.name} now costs ${target.cost} Mana.`);
    });
  }
  if (['wb-gillusion','wb-ladyfeather','wb-merryhound'].includes(card.id)) {
    const adjacent = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3);
    let choices = [];
    if (card.id === 'wb-gillusion') choices = [match.player, match.opponent].flatMap((side) => side.lanes.flatMap((unit, from) => unit && Math.abs(from - laneIndex) > 1 ? adjacent.filter((to) => !side.lanes[to]).map((to) => ({ value: `${side === match.player ? 'p' : 'o'}:${from}:${to}`, label: `${unit.name} · lane ${from + 1} → ${to + 1}`, detail: side === owner ? 'Your fighter' : 'Rival fighter' })) : []));
    if (card.id === 'wb-ladyfeather') {
      const foe = opponent.lanes[laneIndex];
      const opponentKey = opponent === match.player ? 'p' : 'o';
      choices = foe ? adjacent.filter((to) => !opponent.lanes[to]).map((to) => ({ value: `${opponentKey}:${laneIndex}:${to}`, label: `${foe.name} · lane ${laneIndex + 1} → ${to + 1}`, detail: 'Move the opposing fighter' })) : [];
    }
    if (card.id === 'wb-merryhound') choices = adjacent.flatMap((from) => owner.lanes[from] ? owner.lanes.flatMap((unit, to) => !unit && Math.abs(to - from) > 1 ? [{ value: `${combatSide(owner) === 'player' ? 'p' : 'o'}:${from}:${to}`, label: `${owner.lanes[from].name} · lane ${from + 1} → ${to + 1}`, detail: 'Move an adjacent ally' }] : []) : []);
    if (owner.isAI) choices = rankAiMoveChoices(owner, choices);
    chooseEffect(owner, `${card.name}: reposition`, 'Choose a legal lane move.', choices, (key) => { const [sideKey, from, to] = key.split(':'); moveWinterCard(sideKey === 'p' ? match.player : match.opponent, Number(from), Number(to)); });
  }
  if (card.id === 'academy-dimitri') {
    const choices = owner.deck.flatMap((unit, index) => unit.title === 'Academy' && [3, 4].includes(unit.cost) ? [{ value: index, label: unit.name, detail: `${unit.cost} Mana · ${unit.element}` }] : []);
    chooseEffect(owner, 'Dimitri: draw an Academy card', 'Choose an Academy card that costs 3 or 4 from your deck.', choices, (index) => { const [drawn] = owner.deck.splice(Number(index), 1); if (drawn) { owner.hand.push(drawn); queueDrawAnimation(owner,drawn); render(); announceEffect(`${drawn.name} drawn by Dimitri.`); } });
  }
  if (card.id === 'zodiac-egg') {
    const eggIsStillInLane=owner.lanes[laneIndex]===card;
    const canFindMatch=(guide)=>[...owner.hand,...owner.deck].some(x=>x.title==='Zodiac'&&x.id!=='zodiac-egg'&&String(x.ability||'').toLowerCase().includes(guide.name.toLowerCase()));
    const choices=eggIsStillInLane?owner.lanes.flatMap((unit,lane)=>unit&&lane!==laneIndex&&owner.transformationDeck.some(x=>x.title==='Zodiac Guardian'&&x.name===unit.name)&&canFindMatch(unit)?[{value:lane,label:unit.name,detail:'A matching Zodiac creature is available in your deck or hand.'}]:[]):[];
    chooseEffect(owner,'Zodiac Egg · awaken a creature','Choose a fighter whose Zodiac Guardian is in your Ascendance Deck. Then choose a Zodiac creature whose ability mentions that fighter by name.',choices,(lane)=>{
      const guide=owner.lanes[Number(lane)],guardian=owner.transformationDeck.find(x=>x.title==='Zodiac Guardian'&&x.name===guide?.name);
      const matches=[...owner.hand,...owner.deck].filter(x=>x.title==='Zodiac'&&x.id!=='zodiac-egg'&&String(x.ability||'').toLowerCase().includes(guide?.name?.toLowerCase()||'\u0000'));
      if(!guide||!guardian||!matches.length||owner.lanes[laneIndex]!==card)return;
      const summon=(instance)=>{const hi=owner.hand.findIndex(x=>x.instance===instance),di=owner.deck.findIndex(x=>x.instance===instance),creature=hi>=0?owner.hand.splice(hi,1)[0]:di>=0?owner.deck.splice(di,1)[0]:null;if(!creature)return;owner.destroyed.push(card);owner.lanes[laneIndex]=creature;creature.ready=false;render();playSpecialFx(owner,laneIndex,'avatar-gem','ZODIAC EGG · AWAKEN',{generatedOnly:true,silent:true});animateSummon(owner,laneIndex,creature).then(()=>triggerOnSummon(creature,owner,laneIndex));announceEffect(`Zodiac Egg transformed into ${creature.name}; ${guide.name} remains in play.`);};
      if(matches.length===1)summon(matches[0].instance);else chooseEffect(owner,'Zodiac Egg · choose a Zodiac creature','Choose the creature whose ability mentions your fighter.',matches.map(x=>({value:x.instance,label:x.name,detail:String(x.ability).slice(0,110)})),summon);
    });
  }  if (card.id === 'zodiac-swordtiger' && [...match.player.lanes, ...match.opponent.lanes].some((unit) => unit?.name === 'Dimitri')) drawMatching(owner, (unit) => unit.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'dharma') {
    const choices = owner.destroyed.map((held) => ['Fighter', 'Creature'].includes(held.type) ? { value: held.instance, label: held.name, detail: `${held.title} · ${held.element} · returns next turn` } : null).filter(Boolean);
    chooseEffect(owner, 'Dharma: choose a card to revive', 'Choose a Fighter or Creature in your Pandemonium Zone. At the start of your next turn, it returns to an open Battle Zone if Dharma is still on the field.', choices, (instance) => {
      if (!owner.destroyed.some((held) => held.instance === instance)) return;
      match.pendingDharmaRevives.push({ owner, dharmaInstance: card.instance, revivedInstance: instance });
      render();
      announceEffect(`${owner.destroyed.find((held) => held.instance === instance)?.name || 'The card'} will return next turn if Dharma remains on the field and a lane is open.`);
    });
  }
  if (card.id === 'aemi' || card.id === 'academy-fritz' || card.id === 'ww-academy-fritz' || card.id === 'academy-lynda' || card.id === 'ww-academy-lynda') drawMatching(owner, (candidate) => candidate.title === 'Academy' && candidate.element !== card.element, 'Academy card with another element');
  if (card.id === 'lt-scribble' || card.id === 'vishnu') drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'brewy') drawMatching(owner, (candidate) => candidate.id === 'mana-potion' || candidate.id === 'health-potion', 'Potion card');
  if (card.id === 'zesty') {
    const options = owner.destroyed.filter((unit) => unit.type === 'Action').map((unit) => ({
      value: unit.instance, label: unit.name, detail: 'Return from the Pandemonium Zone',
    }));
    chooseEffect(owner, 'Zesty: return an Action', 'Choose an Action card from your Pandemonium Zone to return to your hand.', options, (instance) => {
      const index = owner.destroyed.findIndex((unit) => unit.instance === instance && unit.type === 'Action');
      if (index < 0) return;
      const [returned] = owner.destroyed.splice(index, 1);
      owner.hand.push(returned);
      render();
      announceEffect(`${returned.name} returned to your hand.`);
    });
  }
  if (card.id === 'horatio') drawMatching(owner, (candidate) => candidate.type === 'Action' && candidate.element === 'Terra', 'Terra Action card');
  if (card.id === 'lt-boxy') {
    const index = owner.deck.findIndex((candidate) => candidate.element === 'Dark');
    if (index >= 0) {
      const [sent] = owner.deck.splice(index, 1);
      const portal = document.querySelector(`[data-zone-kind="destroyed"][data-zone-side="${combatSide(owner)}"] .discard-icon`)?.getBoundingClientRect();
      if (portal && activeCombatCue?.card === card) activeCombatCue.sceneTargets = [portal];
      owner.destroyed.push(sent);
      render();
      announceEffect(`Boxy sent ${sent.name} from the deck to the Pandemonium Zone.`);
      summonBeatcracker(owner, sent);
    }
  }
  if (card.id === 'lt-melodoll') { const choices = owner.destroyed.map((held, i) => held.element === 'Dark' ? { value: i, label: held.name, detail: `${held.title} · Dark` } : null).filter(Boolean); chooseEffect(owner, 'Melodoll: return a Dark card', 'Choose a Dark card in your Pandemonium Zone to return to your hand.', choices, (index) => { const [returned] = owner.destroyed.splice(index, 1); owner.hand.push(returned); render(); announceEffect(`${returned.name} returned to your hand.`); }); }
  if (card.id === 'lt-clapster') { let milled = null; if (owner.deck.length) { [milled] = owner.deck.splice(0, 1); owner.destroyed.push(milled); } if (opponent.hand.length) { const [discarded] = opponent.hand.splice(Math.floor(Math.random() * opponent.hand.length), 1); opponent.destroyed.push(discarded); announceEffect(`Clapster sent a card to the Pandemonium Zone and discarded ${discarded.name} from the enemy’s hand.`); } else announceEffect('Clapster sent the top card of your deck to the Pandemonium Zone; the enemy had no cards to discard.'); render(); if (milled) summonBeatcracker(owner, milled); }
  if (card.id === 'lt-teddy') { const choices = owner.hand.map((held, i) => ({ value: i, label: held.name, detail: `Discard ${held.title} · gain +1 attack` })); chooseEffect(owner, 'Teddy: discard a card', 'Discard a card from your hand to give Teddy +1 attack.', choices, (index) => { const [discarded] = owner.hand.splice(index, 1); owner.destroyed.push(discarded); if (discarded.id !== 'lt-beatcracker') { card.attackBonus = (card.attackBonus || 0) + 1; card.attackBonusModifiers = [...(card.attackBonusModifiers || []), { amount: 1, source: card.name }]; card.attackBonusSources = [...(card.attackBonusSources || []), card.name]; } render(); announceEffect(`Teddy discarded ${discarded.name} and gained 1 attack.`); summonBeatcracker(owner, discarded); }); }
  if (card.id === 'lt-broomy') { let choices=owner.lanes.map((unit,i)=>unit&&i!==laneIndex?{value:i,label:unit.name,detail:'Return to hand · gain '+unit.cost+' Mana'}:null).filter(Boolean); if(owner.isAI){choices=choices.filter((choice)=>{const target=owner.lanes[choice.value],gain=target?.cost||0;return Boolean(findAiReplacementCard(owner,target,choice.value,Math.min(match.turnEnergyCap,match.energy+gain)));}).sort((a,b)=>aiCardStrength(owner.lanes[a.value])-aiCardStrength(owner.lanes[b.value]));if(!choices.length)return;} chooseEffect(owner,'Broomy: return a fighter','Choose another one of your fighters to return to your hand. Gain Mana equal to its cost.',choices,(index)=>{const target=owner.lanes[index],gain=target?.cost||0;if(target&&!returnFighterToHand(owner,index))return;match.energy=Math.min(match.turnEnergyCap,match.energy+gain);render();announceEffect('Broomy returned a fighter and restored '+gain+' Mana.');if(owner.isAI&&target)summonAiReplacement(owner,index,target);}); }
  if (card.id === 'lt-fritz') {
    const toyCount = owner.hand.filter((held) => held.title === 'Living Toy').length;
    const affectedLanes = owner.lanes.flatMap((unit, index) => unit?.cost === 1 && unit.element === 'Dark' ? [index] : []);
    if (!toyCount || !affectedLanes.length) {
      announceEffect(`${card.name} found no 1-cost Dark fighters to empower or Living Toy cards in hand.`);
    } else {
      for (const index of affectedLanes) addPermanentAttack(owner.lanes[index], toyCount, card.name);
      render();
      const targets = affectedLanes.map((index) => combatLane(owner, index)).filter(Boolean);
      if (targets.length) {
        if (activeCombatCue?.card === card) activeCombatCue.shown = true;
        showCombatCue(card, owner, laneIndex, targets);
      }
      announceEffect(`${card.name} gave ${toyCount} attack to each 1-cost Dark fighter.`);
    }
  }
  if (card.id === 'runny') {
    const choices = owner.deck.map((candidate, deckIndex) => candidate.title === 'Academy' && candidate.cost <= 4 ? { value: deckIndex, label: candidate.name, detail: `${candidate.cost} energy · ${candidate.element}` } : null).filter(Boolean);
    chooseEffect(owner, 'Runny: choose an Academy card', 'Choose an Academy card costing 4 or less from your deck to add to your hand.', choices, (deckIndex) => { const [chosen] = owner.deck.splice(deckIndex, 1); owner.hand.push(chosen); queueDrawAnimation(owner,chosen); render(); announceEffect(`${chosen.name} drawn by Runny.`); });
  }
  if (card.id === 'frosty' && opponent.lanes[laneIndex]) { opponent.lanes[laneIndex].skipAttackNext = true; opponent.lanes[laneIndex].skipAttackReason = 'freeze'; announceEffect('Frosty freezes the fighter opposite it for its next turn.'); render(); }
  if (card.id === 'academy-sabrina' && opponent.lanes[laneIndex]) { opponent.lanes[laneIndex].skipAttackNext = true; opponent.lanes[laneIndex].skipAttackReason = 'stun'; playSpecialFx(opponent, laneIndex, 'stun', 'STUN', { generatedOnly: true, silent: true }); announceEffect(`${opponent.lanes[laneIndex].name} was stunned and cannot attack next turn.`); render(); }
  if (card.id === 'zodiac-valkyrie-chicken' && owner.lanes.some((unit) => unit?.name === 'Sabrina')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'valhalla-barfy') { const adjacent = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]); adjacent.forEach((slot) => applyEuphoria(owner.lanes[slot], owner)); if (adjacent.length) announceEffect(`Barfy gave Euphoria to ${adjacent.map((slot) => owner.lanes[slot].name).join(' and ')}.`); }
  if (card.id === 'valhalla-meadsting' && opponent.lanes[laneIndex]) { applyEuphoria(opponent.lanes[laneIndex], opponent); announceEffect(`${opponent.lanes[laneIndex].name} gained Euphoria from Meadsting.`); }
  if (card.id === 'valhalla-pryce') drawMatching(owner, (candidate) => candidate.id === 'golden-egg-flatbread', 'Golden Egg Flatbread');
  if (card.id === 'valhalla-morrikyn') { const top = opponent.deck[0]; announceEffect(top ? `Morrikyn revealed ${opponent.isAI ? 'the rival’s' : 'your'} top card: ${top.title} · ${top.name || top.title}.` : 'Morrikyn checked the opposing deck; it is empty.'); }
  if (card.id === 'valhalla-ryota') { const targets = opponent.lanes.flatMap((unit, lane) => unit && !isEffectProtected(unit) ? [{ value: lane, label: unit.name, detail: `Enemy lane ${lane + 1}` }] : []); if (targets.length) chooseEffect(owner, 'Valhalla Ryota · destroy an enemy', 'Choose an enemy fighter to destroy.', targets, (lane) => { playSpecialFx(opponent, Number(lane), 'solar-explosion', 'RYOTA · SOLAR EXPLOSION'); if (destroyUnit(opponent, Number(lane))) render(); }); else announceEffect('Valhalla Ryota has no enemy fighter to destroy.'); }
  if (card.id === 'valhalla-wendy') drawMatching(owner, (candidate) => candidate.id === 'valkyries-mead', "Valkyrie's Mead");
  if (card.id === 'valhalla-sloetunn') card.skipAttackTurns = 1;
  if (card.id === 'berry') {
    let options=owner.lanes.map((unit,i)=>unit&&i!==laneIndex?{value:i,label:unit.name,detail:'Lane '+(i+1)}:null).filter(Boolean);
    if(owner.isAI){options=options.filter((choice)=>Boolean(findAiReplacementCard(owner,owner.lanes[choice.value],choice.value,match.energy))).sort((a,b)=>aiCardStrength(owner.lanes[a.value])-aiCardStrength(owner.lanes[b.value]));if(!options.length)return;}
    chooseEffect(owner, 'Return a fighter', 'Berry can return one of your other fighters to your hand.', options, (targetLane) => {
      const position = combatLane(owner, targetLane)?.getBoundingClientRect();
      const target = returnFighterToHand(owner, targetLane);
      if (!target) return;
      if (position && activeCombatCue?.card === card) activeCombatCue.sceneTargets = [position];
      if (owner.isAI) summonAiReplacement(owner, targetLane, target);
    });
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
        const impact = combatLane(opponent, targetLane)?.getBoundingClientRect();
        if (impact && activeCombatCue?.card === card) activeCombatCue.sceneTargets = [impact];
        playSpecialFx(opponent, targetLane, 'solar-explosion', 'RYOTA · SOLAR EXPLOSION');
        if (destroyUnit(opponent, targetLane)) { render(); announceEffect('Ryota destroys an enemy fighter with a Solar explosion.'); if(match.tutorialMode&&owner===match.player&&tutorialLessonIndex===5)tutorialCompleteAfterEffect(5,1700); }
      });
    });
  }
  if (card.id === 'ww-academy-brian') {
    const choices=owner.deck.map((x,i)=>['ww-academy-rick','ww-academy-lynda'].includes(x.id)?{value:i,label:x.name,detail:x.title+' · add to your hand'}:null).filter(Boolean);
    chooseEffect(owner,'Academy Brian · choose a card','Choose Academy Rick or Academy Lynda from your deck to add to your hand.',choices,(i)=>{const [found]=owner.deck.splice(i,1);if(found){owner.hand.push(found);render();announceEffect('Academy Brian added '+found.name+' to your hand.');}});
  }
  if (card.id === 'ww-brian') {
    const choices = opponent.lanes.map((unit, i) => unit && !isEffectProtected(unit) ? { value: i, label: unit.name, detail: `Enemy lane ${i + 1}` } : null).filter(Boolean);
    chooseEffect(owner, 'Brian: return an enemy fighter', 'Choose an enemy fighter to return to its hand.', choices, (targetLane) => {
      const cueTarget = combatLane(opponent, targetLane)?.getBoundingClientRect();
      if (returnFighterToHand(opponent, targetLane) && cueTarget && activeCombatCue?.card === card) {
        activeCombatCue.sceneTargets = [cueTarget];
      }
    });
  }
  if (card.id === 'ww-fritz') {
    const choices = owner.destroyed.map((unit, i) => unit.id === 'ww-eggscythe' ? { value: i, label: unit.name, detail: 'Return to your hand' } : null).filter(Boolean);
    chooseEffect(owner, 'Fritz: revive Eggscythe', 'Choose an Eggscythe from your destroyed zone to return to your hand.', choices, (destroyedIndex) => { const [returned] = owner.destroyed.splice(destroyedIndex, 1); owner.hand.push(returned); render(); announceEffect('Eggscythe returned to your hand.'); });
  }
  if (card.id === 'ww-wild-ox' && owner.lanes.some((unit) => unit?.name === 'Rick')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'ww-zodiac-muddy-pig' && owner.lanes.some((unit) => unit?.name === 'Brian')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'ip-zodiac-aqua-kentaur' && owner.lanes.some((unit) => unit?.name === 'Chase')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'ip-zodiac-psycho-chicken' && owner.lanes.some((unit) => unit?.name === 'Coyote')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'wb-zodiac-cloud-goat' && owner.lanes.some((unit) => ['Topaz','Topaz & Diamond'].includes(unit?.name))) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'lt-raterrot' && owner.lanes.some((unit) => unit?.name === 'Fritz')) drawMatching(owner, (candidate) => candidate.id === 'avatar-gem', 'Avatar Gem');
  if (card.id === 'ww-bandito') { card.ready = match.turn > 1; render(); if (card.ready) announceEffect('Bandito can attack immediately.'); }
  if (card.id === 'ww-sangrizo') {
    if (match.energy < 1) announceEffect('Sangrizo needs 1 energy to use its effect.');
    else if (!opponent.hand.length) announceEffect('The rival has no card in hand for Sangrizo to destroy.');
    else { match.energy--; const randomIndex = Math.floor(Math.random() * opponent.hand.length); const [discarded] = opponent.hand.splice(randomIndex, 1); opponent.destroyed.push(discarded); render(); announceEffect(`Sangrizo destroyed a random card from the rival’s hand.`); }
  }
  if (card.role === 'Healer' && !owner.life.middle[laneIndex] && owner.deck.length) {
    playSpecialFx(owner, laneIndex, 'healer', 'LIFE RESTORED', { generatedOnly: true });
    owner.life.middle[laneIndex] = owner.deck.shift();
    render();
    if (card.id === 'lt-melodoll' && activeCombatCue?.card === card) {
      const restored = lifeTargetElement(combatSide(owner), laneIndex);
      if (restored) activeCombatCue.sceneTargets = [restored.getBoundingClientRect()];
    }
    announceEffect(`${card.name} restored a life zone.`);
  }
  if (card.id === 'ip-coyote') card.doubleAttackReady = false;
  if (card.id === 'ip-pinebeak') drawMatching(owner, (candidate) => candidate.title === 'Island Paradise' && candidate.type === 'Creature', 'Island Paradise Creature');
  if (card.role === 'Summoner') {
    if (!owner.life.middle[laneIndex] && !familiarAtLane(owner, laneIndex)) {
      const choices = owner.hand.flatMap((held, handIndex) => held.type === 'Creature' && held.element === card.element ? [{ value: String(handIndex), label: held.name, detail: `${held.element} · Familiar for ${card.name}` }] : []);
      chooseEffect(owner, 'Summoner: choose a Familiar', 'This lane’s Life Zone is empty. Choose a same-element Creature to become this fighter’s Familiar.', choices, (handIndex) => {
        const [familiar] = owner.hand.splice(Number(handIndex), 1); familiar.attachedTo = card.instance; familiar.familiarOwner = card.name; owner.life.familiars[laneIndex] = familiar; playSpecialFx(owner, laneIndex, 'summoner', 'FAMILIAR · BOND', { generatedOnly: true }); render(); announceEffect(`${familiar.name} became ${card.name}’s Familiar.`); if(match.tutorialMode&&owner===match.player&&tutorialLessonIndex===10)tutorialCompleteAfterEffect(10);
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
  return trackCombatCue(owner.lanes[laneIndex], owner, laneIndex, () => resolveActivateCroaktail(owner, laneIndex));
}
function resolveActivateCroaktail(owner, laneIndex) {
  const card = owner.lanes[laneIndex];
  if (card?.id !== 'ip-croaktail' || card.abilityUsedTurn === match.turn) return;
  const targets = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.role === 'Brawler').map((slot) => ({ value: slot, label: owner.lanes[slot].name, detail: `Lane ${slot + 1} · +1 attack` }));
  chooseEffect(owner, 'Croaktail: give up its life', 'Choose an adjacent Brawler. Croaktail will be destroyed to give it +1 attack.', targets, (slot) => {
    const ally = owner.lanes[slot]; ally.attackBonus = (ally.attackBonus || 0) + 1; ally.attackBonusModifiers = [...(ally.attackBonusModifiers || []), { amount: 1, source: card.name }]; ally.attackBonusSources = [...(ally.attackBonusSources || []), card.name]; card.abilityUsedTurn = match.turn; destroyUnit(owner, laneIndex); render(); announceEffect(`${ally.name} gained 1 attack from Croaktail.`);
    const cueTarget = combatLane(owner, slot)?.getBoundingClientRect();
    if (cueTarget && activeCombatCue?.card === card) activeCombatCue.sceneTargets = [cueTarget];
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
      if (dharmaPresent && reviveIndex >= 0 && openLane < 0) announceEffect('Dharma could not revive the chosen card because all Battle Zones are occupied.');
      continue;
    }
    const [revived] = owner.destroyed.splice(reviveIndex, 1);
    revived.ready = false; revived.attacked = false; revived.attacksThisTurn = 0;
    owner.lanes[openLane] = revived;
    match.eventActor = owner; match.eventSource = 'Dharma';
    render();
    logBattleEvent(`${battleSideName(owner)} Dharma revived ${revived.name} from the Pandemonium Zone.`, owner === match.player ? 'player' : 'enemy');
    const dharmaLane = owner.lanes.findIndex((unit) => unit?.instance === entry.dharmaInstance);
    if (!showCombatCue(owner.lanes[dharmaLane], owner, dharmaLane, [combatLane(owner, openLane)])) {
      playSpecialFx(owner, openLane, 'dharma-revival', 'DHARMA · REVIVAL');
    }
    animateSummon(owner, openLane, revived).then(() => triggerOnSummon(revived, owner, openLane));
  }
}
function activateIslandTurnEffects(owner) {
  owner.lanes.forEach((card, laneIndex) => trackCombatCue(card, owner, laneIndex, () => {
    if (!card) return;
    if (card.id === 'wb-rebeccah') {
      const targets = owner.lanes.flatMap((unit, from) => unit?.id === 'wb-dimitri' ? [from - 1, from + 1].filter((to) => to >= 0 && to < 3 && !owner.lanes[to]).map((to) => ({ value: `${from}:${to}`, label: `Dimitri · lane ${from + 1} → ${to + 1}`, detail: 'Move to an adjacent free zone' })) : []);
      if (targets.length && card.abilityUsedTurn !== match.turn) {
        if (owner.isAI) activateAiRebeccah(owner, card);
        else chooseEffect(owner, 'Rebeccah: guide Dimitri', 'Once per turn, move Dimitri to an adjacent free lane.', targets, (key) => { const [from, to] = key.split(':').map(Number); if (moveWinterCard(owner, from, to)) card.abilityUsedTurn = match.turn; });
      }
    }
    if (card.id === 'ip-jet') { card.attackBonus = (card.attackBonus || 0) + 1; card.attackBonusModifiers = [...(card.attackBonusModifiers || []), { amount: 1, source: card.name }]; card.attackBonusSources = [...(card.attackBonusSources || []), card.name]; announceEffect('Jet gained 1 attack.'); }
    if (owner.isAI && card.id === 'wb-steepod' && card.abilityUsedTurn !== match.turn) activateSteepod(owner, owner.lanes.indexOf(card));
    if (owner.isAI && card.id === 'wb-topaz-diamond' && card.abilityUsedTurn !== match.turn) activateTopazDiamond(owner, owner.lanes.indexOf(card));
    if (card.id === 'ip-chase') {
      const targets = [laneIndex - 1, laneIndex + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.role === 'Brawler').map((slot) => ({ value: slot, label: owner.lanes[slot].name, detail: `Lane ${slot + 1} · +1 attack` }));
      if (targets.length) {
        const apply = (slot) => { const ally = owner.lanes[slot]; if (!ally) return; ally.attackBonus = (ally.attackBonus || 0) + 1; ally.attackBonusModifiers = [...(ally.attackBonusModifiers || []), { amount: 1, source: card.name }]; ally.attackBonusSources = [...(ally.attackBonusSources || []), card.name]; render(); announceEffect(`${ally.name} gained 1 attack from Chase.`); };
        if (owner.isAI) apply(targets[0].value); else chooseEffect(owner, 'Chase: boost a Brawler', 'Choose an adjacent Brawler to gain +1 attack.', targets, apply);
      }
    }
  }));
}
function aiCardStrength(card) { return (card?.attack || 0) + (card?.attackBonus || 0); }
function findAiReplacementCard(owner, returnedCard, laneIndex, energy = match.energy) {
  if (!owner?.isAI || !returnedCard || laneIndex < 0 || (owner.lanes[laneIndex] && owner.lanes[laneIndex] !== returnedCard)) return null;
  const current=owner.lanes[laneIndex]; owner.lanes[laneIndex]=null; let candidates=[];
  try { candidates=owner.hand.filter((candidate)=>candidate!==returnedCard&&['Fighter','Creature'].includes(candidate.type)&&aiCardStrength(candidate)>aiCardStrength(returnedCard)&&canSummonCard(owner,candidate)&&playCost(owner,candidate)<=energy); candidates.sort((a,b)=>aiCardStrength(b)-aiCardStrength(a)||playCost(owner,a)-playCost(owner,b)); }
  finally { owner.lanes[laneIndex]=current; }
  return candidates[0]||null;
}
function summonAiReplacement(owner, laneIndex, returnedCard) {
  const candidate=findAiReplacementCard(owner,returnedCard,laneIndex,match.energy); if(!candidate||owner.lanes[laneIndex])return false;
  const cost=playCost(owner,candidate), handIndex=owner.hand.indexOf(candidate); if(handIndex<0||cost>match.energy||!canSummonCard(owner,candidate))return false;
  owner.hand.splice(handIndex,1); match.energy-=cost; candidate.ready=false; owner.lanes[laneIndex]=candidate; render();
  animateSummon(owner,laneIndex,candidate).then(()=>triggerOnSummon(candidate,owner,laneIndex)); return true;
}
function activateZoya(owner, laneIndex) {
  return trackCombatCue(owner.lanes[laneIndex], owner, laneIndex, () => resolveActivateZoya(owner, laneIndex));
}
function resolveActivateZoya(owner, laneIndex) {
  const zoya=owner.lanes[laneIndex];
  if(!zoya||zoya.id!=='zoya'||zoya.abilityUsedTurn===match.turn||(owner.isAI&&owner.aiReplacementPlan))return;
  let candidates=[match.player,match.opponent].flatMap((side)=>side.lanes.map((unit,index)=>unit?.title==='Academy'&&!isEffectProtected(unit)&&!(owner.isAI&&side===owner&&unit.id==='zoya')?{value:(side===match.player?'p':'o')+':'+index,label:unit.name,detail:'Return from '+(side===match.player?'your':'rival')+' lane '+(index+1)}:null).filter(Boolean));
  const replacementByTarget=new Map();
  if(owner.isAI){candidates=candidates.filter((choice)=>{const parts=choice.value.split(':'),sideKey=parts[0],lane=Number(parts[1]);if(sideKey!=='o')return false;const replacement=findAiReplacementCard(owner,owner.lanes[lane],lane,match.energy);if(!replacement)return false;replacementByTarget.set(choice.value,replacement);return true;});candidates.sort((a,b)=>aiCardStrength(owner.lanes[Number(a.value.split(':')[1])])-aiCardStrength(owner.lanes[Number(b.value.split(':')[1])]));if(!candidates.length)return;}
  chooseEffect(owner,'Zoya: return an Academy card','Choose an Academy fighter on either field to return to its owner’s hand.',candidates,(key)=>{const parts=key.split(':'),side=parts[0]==='p'?match.player:match.opponent,position=Number(parts[1]),target=side.lanes[position];if(target&&returnFighterToHand(side,position)){playSpecialFx(owner,laneIndex,'zoya','RETURN TO HAND');zoya.abilityUsedTurn=match.turn;render();if(owner.isAI){const replacement=replacementByTarget.get(key);if(replacement)owner.aiReplacementPlan={lane:position,instance:replacement.instance,strength:aiCardStrength(replacement)};}}});
}
function activateSteepod(owner, laneIndex) {
  return trackCombatCue(owner.lanes[laneIndex], owner, laneIndex, () => resolveActivateSteepod(owner, laneIndex));
}
function resolveActivateSteepod(owner, laneIndex) {
  const card = owner.lanes[laneIndex]; if (!card || card.id !== 'wb-steepod' || card.abilityUsedTurn === match.turn) return;
  if (owner.isAI) { const plan = findAiBestMove(owner, { canMove: (unit) => unit.id === 'wb-steepod', adjacentOnly: true }); if (plan && moveWinterCard(owner, plan.from, plan.to)) card.abilityUsedTurn = match.turn; return; }
  const choices = [laneIndex - 1, laneIndex + 1].filter((to) => to >= 0 && to < 3 && !owner.lanes[to]).map((to) => ({ value: to, label: `Move to lane ${to + 1}`, detail: 'Adjacent free Battle Zone' }));
  chooseEffect(owner, 'Steepod: slip away', 'Move Steepod to an adjacent free lane once per turn.', choices, (to) => { if (moveWinterCard(owner, laneIndex, Number(to))) card.abilityUsedTurn = match.turn; });
}
function activateTopazDiamond(owner, laneIndex) {
  return trackCombatCue(owner.lanes[laneIndex], owner, laneIndex, () => resolveActivateTopazDiamond(owner, laneIndex));
}
function resolveActivateTopazDiamond(owner, laneIndex) {
  const card = owner.lanes[laneIndex]; if (!card || card.id !== 'wb-topaz-diamond' || card.abilityUsedTurn === match.turn) return;
  if (owner.isAI) { const plan = findAiBestMove(owner); if (plan && moveWinterCard(owner, plan.from, plan.to)) card.abilityUsedTurn = match.turn; return; }
  const choices = owner.lanes.flatMap((unit, from) => unit ? owner.lanes.flatMap((slot, to) => !slot ? [{ value: `${from}:${to}`, label: `${unit.name} · lane ${from + 1} → ${to + 1}`, detail: 'Move to an empty Battle Zone' }] : []) : []);
  chooseEffect(owner, 'Topaz & Diamond: glide across the floor', 'Once per turn, move one of your fighters to any empty Battle Zone.', choices, (key) => { const [from, to] = key.split(':').map(Number); if (moveWinterCard(owner, from, to)) card.abilityUsedTurn = match.turn; });
}
function sageapeMoveChoices() {
  return [match.player, match.opponent].flatMap((side) => side.lanes.flatMap((unit, from) => unit?.element === 'Glacial' && !(unit.cannotMoveUntilTurn > match.turn) ? side.lanes.flatMap((slot, to) => !slot && to !== from ? [{ value: `${side === match.player ? 'p' : 'o'}:${from}:${to}`, label: `${unit.name} · lane ${from + 1} → ${to + 1}`, detail: side === match.player ? 'Move your Glacial fighter' : 'Move rival Glacial fighter' }] : []) : []));
}
function canUseSageape(card) {
  return Boolean(card?.id === 'wb-sageape' && match.player?.hand.includes(card) &&
    match.active === 'player' && !match.over && !match.attackResolving && sageapeMoveChoices().length);
}
function activateSageape(instance) {
  return trackCombatCue(match.player.hand.find((card) => card.id === 'wb-sageape' && card.instance === instance), match.player, -1, () => resolveActivateSageape(instance));
}
function resolveActivateSageape(instance) {
  const cardIndex = match.player.hand.findIndex((card) => card.instance === instance); if (cardIndex < 0) return;
  const targets = sageapeMoveChoices();
  chooseEffect(match.player, 'Sageape: shift the ice', 'Discard Sageape to move a Glacial fighter to another free Battle Zone.', targets, (key) => { const [sideKey, from, to] = key.split(':'); const [discarded] = match.player.hand.splice(cardIndex, 1); match.player.destroyed.push(discarded); moveWinterCard(sideKey === 'p' ? match.player : match.opponent, Number(from), Number(to)); render(); announceEffect('Sageape was discarded to move a Glacial fighter.'); });
}
function activateAiSageape(owner) {
  return trackCombatCue(owner.hand.find((card) => card.id === 'wb-sageape'), owner, -1, () => resolveActivateAiSageape(owner));
}
function resolveActivateAiSageape(owner) {
  const sageape = owner.hand.find((card) => card.id === 'wb-sageape');
  if (!sageape) return false;
  const plan = findAiBestMove(owner, { canMove: (card) => card.element === 'Glacial' });
  if (!plan) return false;
  owner.hand.splice(owner.hand.indexOf(sageape), 1); owner.destroyed.push(sageape);
  if (!moveWinterCard(owner, plan.from, plan.to)) { owner.destroyed.pop(); owner.hand.push(sageape); return false; }
  announceEffect(`The rival discarded Sageape to move ${plan.card.name} into a stronger lane.`); return true;
}
function activateAiRebeccah(owner, card) {
  return trackCombatCue(card, owner, owner.lanes.indexOf(card), () => resolveActivateAiRebeccah(owner, card));
}
function resolveActivateAiRebeccah(owner, card) {
  if (!card || card.id !== 'wb-rebeccah' || card.abilityUsedTurn === match.turn) return false;
  const plan = findAiBestMove(owner, { canMove: (unit) => unit.id === 'wb-dimitri', adjacentOnly: true });
  if (!plan || !moveWinterCard(owner, plan.from, plan.to)) return false;
  card.abilityUsedTurn = match.turn; return true;
}
function runNpcRepositioning(owner) {
  if (!owner?.isAI) return;
  activateChristmasMall(owner);
  owner.lanes.forEach((card) => {
    if (!card) return;
    if (card.id === 'wb-rebeccah') activateAiRebeccah(owner, card);
    else if (card.id === 'wb-steepod' && card.abilityUsedTurn !== match.turn) activateSteepod(owner, owner.lanes.indexOf(card));
    else if (card.id === 'wb-topaz-diamond' && card.abilityUsedTurn !== match.turn) activateTopazDiamond(owner, owner.lanes.indexOf(card));
  });
  activateAiSageape(owner);
}
function maybeUseZoya(owner) { owner.lanes.forEach((card, index) => { if (card?.id === 'zoya' && card.abilityUsedTurn !== match.turn) activateZoya(owner, index); }); }
function collectLifeCard(owner, laneIndex, main = false) {
  const card = main ? owner.life.main : owner.life.middle[laneIndex];
  if (!card) return false;
  const breaksMainChain = !main && Boolean(owner.life.main) && owner.life.middle.filter(Boolean).length === 1;
  const side = owner === match.player ? 'player' : 'opponent';
  const revealDelay = animateLifeShatter(owner, laneIndex, main);
  if (main) owner.life.main = null;
  else owner.life.middle[laneIndex] = null;
  if (breaksMainChain) {
    // The render that follows replaces the life-zone DOM, so play the effect
    // on the freshly rendered main-life element and prevent a duplicate render-triggered effect.
    mainLifeChainState[side] = false;
    if (currentRivalAnimations()) playMainLifeChainFx(side, 'break');
    else window.requestAnimationFrame(() => window.requestAnimationFrame(() => playMainLifeChainFx(side, 'break')));
  }
  delete card.poisonTurns;
  owner.hand.push(card);
  queueDrawAnimation(owner, card);
  return revealDelay;
}
function resolvePurrnipLifeDraw(attacker, owner) {
  if (attacker?.id !== 'ww-purrnip' || !owner.deck.length) return false;
  drawCard(owner);
  render();
  showCombatCue(attacker, owner, owner.lanes.indexOf(attacker));
  announceEffect('Purrnip destroyed a Life Zone and drew a card.');
  return true;
}
function dealLifeHit(defender, laneIndex) {
  if (defender.life.middle[laneIndex]) { collectLifeCard(defender, laneIndex); return; }
  if (!defender.life.main || !allMiddleLifeGone(defender)) return;
  const revealDelay = collectLifeCard(defender, -1, true);
  endMatch(defender === match.opponent, revealDelay);
}
function battle(attacker, index, from, target = { type: 'lane', index }) {
  const defender = from === match.player ? match.opponent : match.player;
  if (target.type === 'lane' && !canTargetLane(attacker, index, defender, target.index)) return;
  target = resolveAttackTarget(defender, target, index);
  if (target.type === 'life' && defender.lanes.every((unit) => !unit)) {
    const hopkinIndex = defender.hand.findIndex((card) => card.id === 'ww-hopkin'); const lane = target.main ? index : target.index;
    if (hopkinIndex >= 0 && lane >= 0 && lane < 3 && !defender.lanes[lane]) {
      const [hopkin] = defender.hand.splice(hopkinIndex, 1); hopkin.ready = false; defender.lanes[lane] = hopkin; target = { type: 'lane', index: lane };
      render(); showCombatCue(hopkin, defender, lane); animateSummon(defender, lane, hopkin).then(() => triggerOnSummon(hopkin, defender, lane)); announceEffect('Hopkin jumped in to defend the Life Zone.');
    }
  }
  const targetLane = target.type === 'lane' ? target.index : -1;
  const possibleTarget = targetLane >= 0 ? defender.lanes[targetLane] : null;
  const natsukiProtected = possibleTarget?.protectedBy && defender.lanes.some((unit) => unit?.instance === possibleTarget.protectedBy);
  const islandProtected = match.fieldCard?.id === 'ip-field' && possibleTarget?.title === 'Island Paradise' && !possibleTarget?.ignoresIslandField;
  const opposing = natsukiProtected || islandProtected ? null : possibleTarget;
  if (target.type === 'life' && target.main && !canAttackMainLife(attacker, index, defender)) return;
  if (target.type === 'life' && !target.main && !canTargetLifeZone(attacker, index, defender, target.index)) return;
  match.eventActor = from; match.eventSource = attacker.name;
  const targetName = target.type === 'life' ? `${battleSideName(defender)}'s ${target.main ? 'Main Life' : `Life Zone ${target.index + 1}`}` : defender.lanes[targetLane]?.name || `${battleSideName(defender)}'s lane ${targetLane + 1}`;
  logBattleEvent(`${battleSideName(from)} ${attacker.name} attacked ${targetName}.`, from === match.player ? 'player' : 'enemy');
  attacker.attacked = true;
  if (match.fieldCard?.id === 'ts-field') applyPoison(attacker);
  if (attacker.npcAttackReserved) delete attacker.npcAttackReserved;
  else attacker.attacksThisTurn = (attacker.attacksThisTurn || 0) + 1;
  const attackPower = effectiveAttack(attacker, from, { attacking: true, targetIndex: targetLane });
  attacker.attacking = false; attacker.attackTargetIndex = null;
  if (target.type === 'life') {
    if (from===match.player && match.tutorialMode && tutorialLessonIndex===4) window.setTimeout(completeTutorialObjective,120);
    if (target.main) {
      const revealDelay = collectLifeCard(defender, -1, true);
      resolveEuphoriaAfterAttack(from, index);
      resolvePurrnipLifeDraw(attacker, from);
      endMatch(defender === match.opponent, revealDelay);
    }
    else { collectLifeCard(defender, target.index); resolveEuphoriaAfterAttack(from, index); resolvePurrnipLifeDraw(attacker, from); }
    return;
  }
  if (!opposing) { const hadLife = Boolean(defender.life.middle[targetLane] || (!defender.life.main && allMiddleLifeGone(defender))); dealLifeHit(defender, targetLane); resolveEuphoriaAfterAttack(from, index); if (hadLife) resolvePurrnipLifeDraw(attacker, from); return; }
  const defensePower = effectiveAttack(opposing, defender, { defending: true, targetIndex: index });
  const tie = attackPower === defensePower;
  const loseDefender = attackPower > defensePower || tie;
  const loseAttacker = attackPower < defensePower || tie;
  if (opposing?.id === 'ip-octospray') { attacker.attackBonus = (attacker.attackBonus || 0) - 1; attacker.attackBonusModifiers = [...(attacker.attackBonusModifiers || []), { amount: -1, source: opposing.name }]; attacker.attackBonusSources = [...(attacker.attackBonusSources || []), opposing.name]; showCombatCue(opposing, defender, targetLane, [combatLane(from, index)]); announceEffect(`${attacker.name} loses 1 attack to Octospray.`); }
  if (opposing?.id === 'ww-sunnythorn' && loseDefender) { attacker.attackBonus = (attacker.attackBonus || 0) - 1; attacker.attackBonusSources = [...(attacker.attackBonusSources || []), opposing.name]; attacker.attackBonusModifiers = [...(attacker.attackBonusModifiers || []), { amount: -1, source: opposing.name }]; showCombatCue(opposing, defender, targetLane, [combatLane(from, index)]); announceEffect(`${attacker.name} loses 1 attack to Sunnythorn.`); }
  if (attacker.id === 'ww-sunnythorn' && loseAttacker && opposing) { opposing.attackBonus = (opposing.attackBonus || 0) - 1; opposing.attackBonusSources = [...(opposing.attackBonusSources || []), attacker.name]; opposing.attackBonusModifiers = [...(opposing.attackBonusModifiers || []), { amount: -1, source: attacker.name }]; showCombatCue(attacker, from, index, [combatLane(defender, targetLane)]); announceEffect(`${opposing.name} loses 1 attack to Sunnythorn.`); }
  if (loseDefender) {
    destroyUnit(defender, targetLane, true, attacker);
    if (from===match.player && match.tutorialMode && ((tutorialLessonIndex===2)||(tutorialLessonIndex===3)||(tutorialLessonIndex===7)||(tutorialLessonIndex===9)||(tutorialLessonIndex===14)||(tutorialLessonIndex===15))) window.setTimeout(completeTutorialObjective,120);
    if (attacker.id === 'ip-brody') { attacker.attackBonus = (attacker.attackBonus || 0) + 1; attacker.attackBonusModifiers = [...(attacker.attackBonusModifiers || []), { amount: 1, source: attacker.name }]; attacker.attackBonusSources = [...(attacker.attackBonusSources || []), attacker.name]; showCombatCue(attacker, from, index); announceEffect('Brody gained 1 attack for destroying a card.'); }
    if (attacker.id === 'ip-floatbite') { const owner = from; const targets = [index - 1, index + 1].filter((slot) => slot >= 0 && slot < 3 && owner.lanes[slot]?.role === 'Brawler' && owner.lanes[slot]?.element === 'Aqua').map((slot) => ({ value: slot, label: owner.lanes[slot].name, detail: `Lane ${slot + 1} · +1 attack` })); if (targets.length) trackCombatCue(attacker, owner, index, () => chooseEffect(owner, 'Floatbite: tide of strength', 'Choose an adjacent Aqua Brawler to gain +1 attack.', targets, (slot) => { const ally = owner.lanes[slot]; ally.attackBonus = (ally.attackBonus || 0) + 1; ally.attackBonusModifiers = [...(ally.attackBonusModifiers || []), { amount: 1, source: attacker.name }]; ally.attackBonusSources = [...(ally.attackBonusSources || []), attacker.name]; render(); })); }
  }
  if (loseAttacker) { match.eventActor = defender; match.eventSource = opposing.name; destroyUnit(from, index, true, opposing); }
  if (tie) announceEffect(`Both fighters were destroyed in the ${attackPower}–${defensePower} clash.`);
  resolveEuphoriaAfterAttack(from, index);
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
    'wb-wedding-proposal': { element:'Solar', boom:35, shimmer:2100, noise:1100 }, 'wb-shopping': { element:'Mind', boom:50, shimmer:1350, noise:900 }, 'wb-merry-christmas': { element:'Glacial', boom:45, shimmer:1950, noise:1700 },
    'ip-ride-the-wave': { element:'Aqua', boom:75, shimmer:1500, noise:2350 }, 'ip-no-pain-no-gain': { element:'Ignis', boom:165, shimmer:720, noise:600 }, 'ip-swim-dont-sink': { element:'Aqua', boom:25, shimmer:1850, noise:2200 },
    'lt-doll-chorus': { element:'Dark', boom:80, shimmer:760, noise:570 }, 'lt-wind-up-toy': { element:'Dark', boom:55, shimmer:980, noise:1250 }, 'lt-toy-capsule': { element:'Dark', boom:95, shimmer:1120, noise:900 },
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
const pendingAiSummons = new Set();
let aiSummonAnimationTail = Promise.resolve();
function waitForAiSummonAnimations() {
  const current = aiSummonAnimationTail;
  return current.then(() => current === aiSummonAnimationTail ? undefined : waitForAiSummonAnimations());
}
function animateSummon(owner, index, card) {
  const beginAnimation = () => {
    if (owner !== match.player && owner !== match.opponent) return;
    const side = owner === match.player ? 'player' : 'opponent';
    const lane = document.querySelector(`[data-side="${side}"][data-lane="${index}"]`);
    lane?.classList.remove('ai-summon-pending');
    const summoned = lane?.querySelector('.battle-card');
    summoned?.classList.add('summon-pop');
    const played = summoned && window.peppermintSummonEffects?.play(lane, summoned, card.element);
    const glyphs = { Ignis: '✹', Glacial: '❄', Terra: '✿', Aer: '〰', Aqua: '◉', Mind: '✧', Dark: '◐', Solar: '☼' };
    if (lane && !played) { const burst = document.createElement('div'); burst.className = `element-burst summon-burst effect-${card.element.toLowerCase()}`; burst.innerHTML = `<span>${glyphs[card.element] || '✧'}</span><i></i><i></i><i></i><i></i>`; lane.appendChild(burst); window.setTimeout(() => burst.remove(), owner.isAI ? 1500 : 1050); }
    playSfx('summon', card.element);
    return new Promise((resolve) => window.setTimeout(resolve, currentRivalAnimations() ? (owner.isAI ? 1500 : 1050) : owner.isAI ? 1250 : 850));
  };
  if (currentRivalAnimations()) {
    if (owner.isAI) {
      pendingAiSummons.add(card.instance);
      document.querySelector(`[data-side="opponent"][data-lane="${index}"]`)?.classList.add('ai-summon-pending');
    }
    return queueRivalAnimation(() => {
      pendingAiSummons.delete(card.instance);
      return beginAnimation();
    });
  }
  if (!owner.isAI) return beginAnimation();
  pendingAiSummons.add(card.instance);
  document.querySelector(`[data-side="opponent"][data-lane="${index}"]`)?.classList.add('ai-summon-pending');
  const animation = aiSummonAnimationTail.then(() => {
    pendingAiSummons.delete(card.instance);
    return beginAnimation();
  });
  aiSummonAnimationTail = animation.catch(() => {});
  return animation;
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
  if (finalTarget.redirected) {
    const shield = defender.lanes[finalTarget.index];
    if (!showCombatCue(shield, defender, finalTarget.index)) playSpecialFx(defender, finalTarget.index, 'shielder', 'SHIELDER · INTERCEPT');
  }
  const attackingPlayer = match.player;
  return queueRivalAnimation(() => {
    if (attacker) { attacker.attacking = true; attacker.attackTargetIndex = finalTarget.type === 'lane' ? finalTarget.index : -1; }
    render();
    const sourceLane = document.querySelector(`[data-side="${sourceSide}"][data-lane="${index}"]`);
    const targetLane = finalTarget.type === 'lane' ? document.querySelector(`[data-side="${targetSide}"][data-lane="${finalTarget.index}"]`) : null;
    const sourceCard = sourceLane?.querySelector('.battle-card');
    const targetCard = targetLane?.querySelector('.battle-card');
    const element = attacker?.element || 'Mind';
    const impact = targetCard || lifeTargetElement(targetSide, finalTarget.index, !!finalTarget.main) || targetLane;
    const combatEffects = window.peppermintCombatEffects;
    let vectorStrike = false;
    const resolveImpact = () => {
      if (match.player !== attackingPlayer || match.over) return;
      const hitPlayer = from === match.player ? match.opponent : match.player;
      const hadTarget = finalTarget.type === 'lane' && !!hitPlayer.lanes[finalTarget.index];
      resolvingStrike = true;
      try {
        done(target);
      } finally {
        resolvingStrike = false;
      }
      if (!vectorStrike) playSfx(hadTarget ? 'impact' : 'life', element);
      render();
    };
    vectorStrike = combatEffects?.play({
      card: attacker, kind: 'strike', source: sourceCard || sourceLane, targets: [impact], audio: soundContext, onImpact: resolveImpact,
    });
    const ranged = vectorStrike && combatEffects.isRanged(attacker);
    sourceCard?.classList.add(ranged ? 'combat-ranged-release' : from === match.player ? 'attack-lunge-up' : 'attack-lunge-down');
    if (vectorStrike) {
      impact?.style.setProperty('--combat-impact-delay', `${combatEffects.attackImpactTime}ms`);
      impact?.classList.add('combat-impact');
    } else {
      targetCard?.classList.add('damage-shake');
      impact?.classList.add(targetCard ? 'impact-glow' : 'life-hit');
    }
    if (from === match.opponent) document.getElementById('phase-label').textContent = 'RIVAL ATTACK';
    if (vectorStrike) return vectorStrike;
    playSfx('attack', element);
    window.setTimeout(resolveImpact, 740);
    return 1000;
  });
}
function npcAttackValue(card, sourceLane, defender, target) {
  const finalTarget = resolveAttackTarget(defender, target, sourceLane);
  const blocking = finalTarget.type === 'lane' ? defender.lanes[finalTarget.index] : null;
  const bypasses = blocking?.protectedBy && defender.lanes.some((ally) => ally?.instance === blocking.protectedBy) || match.fieldCard?.id === 'ip-field' && blocking?.title === 'Island Paradise' && !blocking?.ignoresIslandField;
  if (blocking && !bypasses) {
    const attack = effectiveAttack(card, match.opponent, { attacking: true, targetIndex: finalTarget.index });
    const defense = effectiveAttack(blocking, defender, { defending: true });
    if (attack < defense) return -Infinity;
    return attack === defense ? 3.5 : 4 + Math.min(4, attack - defense) * 0.25;
  }
  if (finalTarget.type === 'life') {
    const lifeExists = finalTarget.main ? defender.life.main : defender.life.middle[finalTarget.index];
    return lifeExists ? 5.5 : -Infinity;
  }
  return hasLifeTarget(defender, finalTarget.index, card) ? 5 : -Infinity;
}
function npcAttackTarget(card, index, defender) {
  const candidates = [];
  if (canAttackMainLife(card, index, defender)) candidates.push({ type: 'life', index, main: true });
  if (card.role === 'Shooter') {
    if (card.id === 'valhalla-mjolknir' && defender.lanes[index]) candidates.push({ type: 'lane', index });
    if (defender.life.middle[index]) candidates.push({ type: 'life', index });
    [index - 1, index + 1].filter((lane) => lane >= 0 && lane < 3 && defender.lanes[lane]).forEach((lane) => candidates.push({ type: 'lane', index: lane }));
    if (!defender.lanes[index] && hasLifeTarget(defender, index, card)) candidates.push({ type: 'life', index, main: canAttackMainLife(card, index, defender) });
  } else if (defender.lanes[index]) candidates.push({ type: 'lane', index });
  else if (hasLifeTarget(defender, index, card)) candidates.push({ type: 'life', index, main: canAttackMainLife(card, index, defender) });
  let best = null; let bestValue = -Infinity;
  candidates.forEach((target) => {
    const value = npcAttackValue(card, index, defender, target);
    if (value > bestValue) { best = target; bestValue = value; }
  });
  return best;
}
async function runNpcAttacks(queue) {
  let index = 0;
  while (index < 3 && currentRivalAnimations() === queue && !match.over) {
    const card = queue.opponent.lanes[index];
    const target = canCardAttack(card) ? npcAttackTarget(card, index, match.player) : null;
    if (!target) { index++; continue; }
    card.attacked = true;
    card.attacksThisTurn = (card.attacksThisTurn || 0) + 1;
    card.npcAttackReserved = true;
    animateAttack(queue.opponent, index, (finalTarget) => battle(card, index, queue.opponent, finalTarget), target);
    await finishRivalAnimations(queue);
    if (card.id !== 'ip-coyote' || card.attacksThisTurn >= 2) index++;
  }
}
async function rivalTurn() {
  if (match.active !== 'transition' || match.over) return;
  if (match.tutorialMode) { tutorialWrongAction('The tutorial is arranging the next practice move.'); return; }
  logBattleEvent('Enemy turn began.', 'enemy');
  match.active = 'opponent'; match.drawn = false; match.turnSerial = (match.turnSerial || 0) + 1;
  const queue = { opponent: match.opponent, turnSerial: match.turnSerial, tail: Promise.resolve() };
  rivalAnimations = queue;
  const canContinue = () => currentRivalAnimations() === queue && !match.over;
  const step = async (action) => {
    if (!canContinue()) return false;
    action();
    await finishRivalAnimations(queue);
    return canContinue();
  };
  expireEuphoriaAtTurnStart();
  if (match.secondPlayerBonusPending) { match.energy = match.maxEnergy + 1; match.secondPlayerBonusPending = false; }
  else match.energy = match.maxEnergy;
  match.turnEnergyCap = match.energy;
  if (!await step(() => resolvePoisonAtTurnStart(match.opponent))) return;
  drawCard(match.opponent);
  refreshAttackStatuses(match.opponent);
  await waitForAiSummonAnimations();
  if (!await step(() => resolveDharmaRevives(match.opponent))) return;
  if (!await step(() => activateIslandTurnEffects(match.opponent))) return;
  if (!await step(() => runNpcRepositioning(match.opponent))) return;
  match.opponent.aiReplacementPlan=null;
  let summoned = null; let summonedLane = -1;
  const toyStore = match.opponent.hand.find((card) => card.id === 'toy-store' && card.cost <= match.energy);
  const islandField = match.opponent.hand.find((card) => card.id === 'ip-field' && card.cost <= match.energy);
  const cactusField = match.opponent.hand.find((card) => card.id === 'cactus-creek' && card.cost <= match.energy);
  const cotton = match.opponent.hand.find((card) => card.id === 'peppermint-ally');
  if (!await step(() => {
    if (toyStore && match.fieldCard?.id !== 'toy-store') activateAction(match.opponent, toyStore.instance);
    else if (islandField && match.fieldCard?.id !== 'ip-field') activateAction(match.opponent, islandField.instance);
    else if (cactusField && match.fieldCard?.id !== 'cactus-creek') activateAction(match.opponent, cactusField.instance);
    else if (cotton && match.fieldCard?.id !== 'academy-grounds') useCotton(match.opponent, cotton.instance);
  })) return;
  for (const id of ['ts-field', 'ts-poison', 'ts-shady-potion']) {
    const owner = match.opponent;
    const action = owner.hand.find((card) => card.id === id && card.cost <= match.energy);
    if (!action || id === 'ts-field' && match.fieldCard?.id === id ||
        id === 'ts-poison' && !poisonBattleChoices(owner, true).length ||
        id === 'ts-shady-potion' && (!owner.lanes.some((unit, lane) => !unit && !familiarAtLane(owner, lane)) || !owner.destroyed.some((unit) => isBattleCard(unit) && unit.type !== 'Transformation' && canSummonCard(owner, unit)))) continue;
    if (!await step(() => activateAction(owner, action.instance))) return;
  }
  const rideWave = match.opponent.hand.find((card) => card.id === 'ip-ride-the-wave' && card.cost <= match.energy);
  if (rideWave && !await step(() => activateAction(match.opponent, rideWave.instance))) return;
  if (!await step(() => activateAiSageape(match.opponent))) return;
  const cooking = match.opponent.hand.find((card) => card.id === 'cooking' && card.cost <= match.energy && match.opponent.destroyed.some((held) => held.type === 'Fighter' || held.type === 'Creature'));
  if (cooking && !await step(() => useCooking(match.opponent, cooking.instance))) return;
  const planting = match.opponent.hand.find((card) => card.id === 'ww-planting' && card.cost <= match.energy && match.opponent.lanes.some((unit) => !unit) && (match.opponent.deck.some((unit) => unit.title === 'Vegcritter') || match.opponent.destroyed.some((unit) => unit.title === 'Vegcritter')));
  if (planting && !await step(() => usePlanting(match.opponent, planting.instance))) return;
  const avatarGem = match.opponent.hand.find((card) => card.id === 'avatar-gem' && card.cost <= match.energy && match.opponent.lanes.some((unit) => unit && match.opponent.transformationDeck.some((transform) => matchesTransformation(unit, transform))));
  if (avatarGem && !await step(() => useAvatarGem(match.opponent, avatarGem.instance))) return;
  const medusaIndex = match.opponent.lanes.findIndex((unit) => unit?.id === 'ww-medusa' && unit.abilityUsedTurn !== match.turn);
  if (medusaIndex >= 0 && match.energy >= 1 && match.opponent.deck.length && !await step(() => activateMedusa(match.opponent, medusaIndex))) return;
  if (!await step(() => maybeUseZoya(match.opponent))) return;
  const availableEnergy = match.energy;
  const unitPlayable = match.opponent.hand.filter((card) => card.type !== 'Action' && playCost(match.opponent, card) <= availableEnergy && canSummonCard(match.opponent, card)).sort((a, b) => playCost(match.opponent, a) - playCost(match.opponent, b));
  const openLanes = match.opponent.lanes.map((card, lane) => card ? -1 : lane).filter((lane) => lane >= 0);
  if (openLanes.length && unitPlayable.length) {
    const replacementPlan=match.opponent.aiReplacementPlan;
    if(replacementPlan){const planned=unitPlayable.find((unit)=>unit.instance===replacementPlan.instance&&aiCardStrength(unit)>replacementPlan.strength);if(planned&&openLanes.includes(replacementPlan.lane)){summoned=planned;summonedLane=replacementPlan.lane;}match.opponent.aiReplacementPlan=null;}
    if(!summoned){summoned=unitPlayable[unitPlayable.length-1];summonedLane=openLanes[Math.floor(Math.random()*openLanes.length)];}
    const handIndex = match.opponent.hand.indexOf(summoned);
    const cost = playCost(match.opponent, summoned);
    if (handIndex >= 0 && !match.opponent.lanes[summonedLane] && match.energy >= cost) {
      match.opponent.hand.splice(handIndex, 1);
      match.energy -= cost;
      match.opponent.lanes[summonedLane] = summoned;
    } else { summoned = null; summonedLane = -1; }
  }
  render();
  if (summoned && !await step(() => {
    animateSummon(queue.opponent, summonedLane, summoned).then(() => triggerOnSummon(summoned, queue.opponent, summonedLane));
  })) return;
  if (!await step(() => runNpcRepositioning(queue.opponent))) return;
  await runNpcAttacks(queue);
  if (!canContinue()) return;
  rivalAnimations = null;
  startPlayerTurn();
}
function startPlayerTurn() {
  match.turn++;
  clearTemporaryAttackModifiers(match.player); clearTemporaryAttackModifiers(match.opponent);
  logBattleEvent('Your turn began.', 'player');
  match.active = 'player'; match.drawn = false; match.turnSerial = (match.turnSerial || 0) + 1; match.maxEnergy = Math.min(10, match.maxEnergy + 1); match.energy = match.maxEnergy; match.turnEnergyCap = match.maxEnergy;
  expireEuphoriaAtTurnStart();
  resolvePoisonAtTurnStart(match.player);
  if (match.over) return;
  refreshAttackStatuses(match.player);
  resolveDharmaRevives(match.player);
  activateIslandTurnEffects(match.player);
  drawCard(match.player); match.drawn = true; render(); enforceHandLimit();
}
function endPlayerTurn() { if (match.active !== 'player' || match.over || match.attackResolving) return; if (match.tutorialMode) { if ([1,8].includes(tutorialLessonIndex) || (tutorialLessonIndex===3&&tutorialPhase==='wait')) tutorialEndTurn(); else tutorialWrongAction('Do the action shown in the center message before ending your turn.'); return; } if (match.player.hand.length > MAX_HAND_SIZE) { pendingEndTurnAfterDiscard = true; enforceHandLimit(); return; } clearTemporaryAttackModifiers(match.player); match.active = 'transition'; match.attackMode = false; match.attackerLane = null; match.selected = null; render(); window.setTimeout(rivalTurn, 500); }
function endMatch(won, revealDelay = 0) {
  match.over = true;
  if (match.tutorialMode) { document.getElementById('tutorial-bubble').classList.add('hidden'); document.getElementById('tutorial-reopen').classList.add('hidden'); }
  const sameProfile = match.profileId === (window.peppermintCurrentUser?.id || null);
  const tutorialReward = match.tutorialMode && won && sameProfile ? window.peppermintCollection?.claimTutorialReward?.() : null;
  setResultCharacterArt(won);
  document.getElementById('result-title').textContent = match.tutorialMode&&won ? 'Tutorial complete!' : won ? 'Victory!' : 'The rival wins';
  document.getElementById('result-copy').textContent = match.tutorialMode&&won ? (tutorialReward?.total ? 'You earned 100 Diamonds for completing the tutorial.' : 'Tutorial complete. Your one-time 100 Diamond reward was already claimed.') : won ? 'You broke through the rival’s last life card.' : 'Your main life was broken. Give it another try.';
  renderBattleRewards(tutorialReward || settleCollectionBattle(won));
  const result = document.getElementById('result-dialog');
  const finishedPlayer = match.player;
  const reveal = () => {
    if (match.over && match.player === finishedPlayer && !document.querySelector('dialog[open]')) result.showModal();
  };
  const queue = currentRivalAnimations();
  if (queue) finishRivalAnimations(queue).then(reveal);
  else if (revealDelay) window.setTimeout(reveal, revealDelay);
  else result.showModal();
}
function setResultCharacterArt(playerWon) {
  const playerCard = match.playerProfileAvatar || profileResultCharacter('peppermint');
  const opponentCard = match.opponent.avatar;
  setResultCharacterImage('result-player-character-art', playerCard, playerWon ? 'victory' : 'loss');
  setResultCharacterImage('result-opponent-character-art', opponentCard, playerWon ? 'loss' : 'victory');
}
const poseArtVersion = (id, fallback) => ['ts-aemi', 'ts-zodiac-aemi'].includes(id)
  ? '20261127-aemi-sprites-clean'
  : id === 'ts-zenon'
  ? '20261127-zenon-sprites-v4'
  : id === 'ts-elyza'
  ? '20261127-elyza-clean'
  : aemiArtworkIds.has(id)
  ? '20261127-aemi-details'
  : ['ts-momozan', 'ts-lorette'].includes(id) ? '20261127-clean-sprites'
  : ['ts-zenon', 'ts-momozan'].includes(id)
  ? '20261127-pose-details'
  : isSewerAvatar(id) ? 'toxic-sewer-v2' : fallback;
const characterArtAliases = Object.freeze({
  'ww-academy-fritz': 'academy-fritz',
  'ww-academy-lynda': 'academy-lynda',
  'ww-rick': 'wild-west-rick',
  'ip-chase': 'island-paradise-chase',
  'lt-fritz': 'dollmaster-fritz',
  'wb-dimitri': 'winter-ball-dimitri',
});

function profileResultCharacter(avatarId) {
  const catalog = allCardCatalog();
  return catalog.find((card) => card.id === avatarId) || catalog.find((card) => card.id === 'peppermint');
}

function resultCharacterPath(card, outcome) {
  const assetId = characterArtAliases[card.id] || card.id;
  return `assets/result-characters/${assetId}-${outcome}.webp?v=${poseArtVersion(assetId, 'variants-v6')}`;
}

function setResultCharacterImage(elementId, card, outcome) {
  const image = document.getElementById(elementId);
  if (!image || !card) return;
  image.src = resultCharacterPath(card, outcome);
  image.alt = `${card.title ? card.title + ' ' : ''}${card.name} ${outcome === 'victory' ? 'celebrating' : 'defeated'}`;
}

function settleCollectionBattle(won) {
  if (!match.collectionOnly || match.profileId !== window.peppermintCurrentUser?.id || !window.peppermintCollection) return null;
  const remainingLifeCards = match.player.life.middle.filter(Boolean).length + Number(Boolean(match.player.life.main));
  return { ...window.peppermintCollection.awardBattle({ won, opponentDeckId: match.opponentDeckId, remainingLifeCards, avatarGemUses: match.avatarGemUses || 0, turnsElapsed: match.turn, battleDestroyedCards: match.battleDestroyedCards || 0 }), won, remainingLifeCards, turnsElapsed: match.turn, battleDestroyedCards: match.battleDestroyedCards || 0 };
}
function renderBattleRewards(reward) {
  const list = document.getElementById('result-rewards');
  const note = document.getElementById('result-unlock-note');
  if (!list || !note) return;
  const rows = reward ? [
    { label: reward.tutorialBonus ? 'Tutorial completion' : reward.won ? 'Victory' : 'Loss', value: reward.base },
    { label: 'Avatar Gem used', value: reward.avatarGem },
    { label: `Life cards remaining (${reward.remainingLifeCards})`, value: reward.life },
    { label: `Turns elapsed (${reward.turnsElapsed})`, value: reward.turns },
    { label: `Cards destroyed in battle (${reward.battleDestroyedCards})`, value: reward.destroyed },
  ].filter((row) => row.value > 0) : [];
  const total = rows.reduce((sum, row) => sum + row.value, 0);
  const totalPanel = document.getElementById('result-diamond-total');
  const totalAmount = document.getElementById('result-diamond-amount');
  if (totalPanel && totalAmount) {
    totalAmount.textContent = `+${total.toLocaleString()}`;
    totalPanel.classList.toggle('hidden', total <= 0);
  }
  list.innerHTML = rows.map((row) => `<li><img src="assets/ui-icons/diamond-currency.webp" alt=""/><span>${row.label}</span><strong>+${row.value}</strong></li>`).join('');
  list.classList.toggle('hidden', !rows.length);
  note.textContent = reward?.unlocked ? `${deckNames[match.opponentDeckId]} booster display unlocked!` : '';
  note.classList.toggle('hidden', !note.textContent);
}
function giveUp() {
  if (!match.player || match.over || match.attackResolving) return;
  match.over = true;
  match.attackMode = false;
  match.attackerLane = null;
  const remainingLifeCards = match.player.life.middle.filter(Boolean).length + Number(Boolean(match.player.life.main));
  const reward = match.collectionOnly ? { total:0, base:0, avatarGem:0, life:0, turns:0, destroyed:0, unlocked:false, won:false, remainingLifeCards, turnsElapsed:match.turn, battleDestroyedCards:match.battleDestroyedCards||0 } : null;
  setResultCharacterArt(false);
  document.getElementById('result-title').textContent = 'Battle abandoned';
  document.getElementById('result-copy').textContent = 'You gave up. Choose Play Again to start a fresh battle.';
  renderBattleRewards(reward);
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
  if (match.tutorialMode && !tutorialCanAttack(match.player.lanes[sourceIndex],sourceIndex,target)) { tutorialWrongAction('Choose the highlighted target in the lane named in the message.'); return; }
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
  if (match.tutorialMode && ![2,3,4,7,9,14,15,16].includes(tutorialLessonIndex)) { tutorialWrongAction('Wait for the tutorial to ask you to attack.'); return false; }
  if (match.active !== 'player' || match.over || !canCardAttack(card) || !canAttackLane(card, index, match.opponent)) return false;
  match.attackMode = true;
  match.attackerLane = index;
  match.selected = null;
  render();
  return true;
}
document.addEventListener('click', (event) => {
  if (Date.now() < suppressHandClickUntil && event.target.closest('.hand-card, .lane, .battle-card')) { event.preventDefault(); return; }
  const tooltip = document.getElementById('card-tooltip');
  const tooltipSummon = event.target.closest('[data-tooltip-summon]');
  if (tooltipSummon) {
    const card = match.player.hand.find((item) => item.instance === tooltipSummon.dataset.tooltipSummon);
    hideCardTooltip();
    if (card && canSummonCard(match.player, card) && playCost(match.player, card) <= match.energy) {
      match.attackMode = false; match.attackerLane = null; match.selected = card.instance; render();
    }
    return;
  }
  const tooltipUse = event.target.closest('[data-tooltip-use]');
  if (tooltipUse) { const id = tooltipUse.dataset.tooltipUse; hideCardTooltip(); match.attackMode = false; match.attackerLane = null; match.selected = null; activateAction(match.player, id); return; }
  const tooltipAttack = event.target.closest('[data-tooltip-attack]');
  if (tooltipAttack) { const lane = Number(tooltipAttack.dataset.tooltipAttack); hideCardTooltip(); selectAttackerFromClick(lane); return; }
  const tooltipAbility = event.target.closest('[data-tooltip-ability]');
  if (tooltipAbility) { const lane = Number(tooltipAbility.dataset.lane), card = match.player.lanes[lane]; hideCardTooltip(); if (card?.id === tooltipAbility.dataset.tooltipAbility && canActivateCardAbility(card,match.player,lane)) activateCardAbilityById(card.id,lane); return; }
  const tooltipSpecial = event.target.closest('[data-tooltip-special]');
  if (tooltipSpecial) {
    const id = tooltipSpecial.dataset.cardInstance, kind = tooltipSpecial.dataset.tooltipSpecial;
    hideCardTooltip(); match.selected = null;
    if (kind === 'cotton' && match.active === 'player' && !match.over && match.fieldCard?.id !== 'academy-grounds') useCotton(match.player, id);
    else if (kind === 'sageape' && canUseSageape(match.player.hand.find((card) => card.instance === id))) activateSageape(id);
    else if (kind === 'christmas-mall' && match.fieldCard?.card?.instance === id && canUseChristmasMall(match.fieldCard.card)) activateChristmasMall(match.player);
    return;
  }
  if (!isTouchInput()) {
    if (event.target.closest('.tooltip-dismiss') && tooltip.classList.contains('pinned')) { hideCardTooltip(); return; }
    const preview = event.target.closest('[data-card-preview]');
    const reviewCard = preview?.classList.contains('card-review-button') || preview?.matches('.editor-card, .editor-deck-row, .ascendance-editor-card, .display-card, .collection-card, .booster-pull, .booster-reveal-card');
    if (reviewCard && (!event.target.closest('button') || event.target.closest('.card-review-button'))) {
      if (tooltip.classList.contains('pinned') && tooltip.dataset.previewCard === preview.dataset.cardPreview) hideCardTooltip();
      else {
        const card = findCardPreview(preview.dataset.cardPreview);
        if (card) { showCardTooltip(card, event); tooltip.classList.add('pinned'); }
      }
      return;
    }
    if (tooltip.classList.contains('pinned') && !event.target.closest('#card-tooltip') && !event.target.closest('.hand-card[data-card-preview], .battle-card[data-card-preview], .field-card[data-card-preview], .field-zone[data-card-preview]')) hideCardTooltip();
  }
  if (event.target.closest('#card-tooltip') && !event.target.closest('.tooltip-dismiss')) return;
  if (!event.target.closest('#card-tooltip')) {
    const battlePreview = event.target.closest('.hand-card[data-card-preview], .battle-card[data-card-preview], .field-card[data-card-preview], .field-zone[data-card-preview]');
    if (battlePreview) {
      const enemyLane = battlePreview.matches('.battle-card') ? battlePreview.closest('.lane[data-side="opponent"]') : null;
      if (enemyLane && match.active === 'player' && match.attackMode && !match.attackResolving && match.attackerLane !== null) {
        const index = Number(enemyLane.dataset.lane), attacker = match.player.lanes[match.attackerLane];
        if (canTargetLane(attacker,match.attackerLane,match.opponent,index)) requestPlayerAttack({type:'lane',index});
        return;
      }
      if (tooltip.classList.contains('pinned') && tooltip.dataset.previewCard === battlePreview.dataset.cardPreview) hideCardTooltip();
      else { const card = findCardPreview(battlePreview.dataset.cardPreview); if (card) { showCardTooltip(card, event); tooltip.classList.add('pinned'); } }
      return;
    }
  }
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
    if (preview && (!event.target.closest('button') || event.target.closest('.card-review-button'))) {
      if (touchCardDetailsArmed === preview.dataset.cardPreview) {
        touchCardDetailsArmed = null;
        hideCardTooltip();
      } else if (!tooltip.classList.contains('visible') || tooltip.dataset.previewCard !== preview.dataset.cardPreview) {
        touchCardDetailsArmed = null;
        const card = findCardPreview(preview.dataset.cardPreview);
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
  const mainLife = event.target.closest('.life-card[data-life-side="opponent"][data-life-main="true"]');
  if (mainLife && match.active === 'player' && match.attackMode && !match.attackResolving && match.attackerLane !== null) {
    const attacker = match.player.lanes[match.attackerLane];
    if (canAttackMainLife(attacker, match.attackerLane, match.opponent)) requestPlayerAttack({ type: 'life', index: match.attackerLane, main: true });
    return;
  }
  const directLife = event.target.closest('.life-card[data-life-side="opponent"][data-life-index]');
  if (directLife && match.active === 'player' && match.attackMode && !match.attackResolving && match.attackerLane !== null) {
    const attacker = match.player.lanes[match.attackerLane];
    const index = Number(directLife.dataset.lifeIndex);
    if (canTargetLifeZone(attacker, match.attackerLane, match.opponent, index)) {
      requestPlayerAttack({ type: 'life', index });
    }
    return;
  }
  const fieldCard = event.target.closest('.battle-card');
  const fieldLane = fieldCard?.closest('.lane');
  if (fieldLane?.dataset.side === 'player') return;
  const handCard = event.target.closest('.hand-card');
  if (handCard) return;
  const lane = event.target.closest('.lane');
  if (lane && match.attackMode && lane.dataset.side === 'player') return;
  if (lane && match.attackMode && !match.attackResolving && lane.dataset.side === 'opponent' && match.attackerLane !== null) {
    const index = Number(lane.dataset.lane); const sourceIndex = match.attackerLane; const attacker = match.player.lanes[sourceIndex];
    if (canTargetLane(attacker, sourceIndex, match.opponent, index)) requestPlayerAttack({ type: 'lane', index });
    return;
  }
  if (lane && lane.dataset.side === 'player' && match.selected) playCard(match.selected, Number(lane.dataset.lane));
});
document.getElementById('attack-button').addEventListener('click', () => { if (match.active === 'player' && !match.attackResolving) announceEffect('Drag a ready Battle Card onto an enemy or Life Zone to attack.'); });
document.getElementById('end-turn').addEventListener('click', endPlayerTurn);
document.getElementById('give-up').addEventListener('click', giveUp);
let handDragCandidate = null;
let activeCardDrag = null;
let attackDragCandidate = null;
let activeAttackDrag = null;
let suppressHandClickUntil = 0;
function activateCardAbilityById(ability,index) {
  if (ability === 'ww-medusa') activateMedusa(match.player,index);
  else if (ability === 'ww-blake') activateBlake(match.player,index);
  else if (ability === 'ip-croaktail') activateCroaktail(match.player,index);
  else if (ability === 'wb-steepod') activateSteepod(match.player,index);
  else if (ability === 'wb-topaz-diamond') activateTopazDiamond(match.player,index);
  else if (ability === 'zoya') activateZoya(match.player,index);
}
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
    if (!match.opponent.lanes[index] && index === sourceIndex) {
      if (canTargetLifeZone(attacker, sourceIndex, match.opponent, index)) return { target: { type: 'life', index }, element: enemyLane, valid: true };
      if (canAttackMainLife(attacker, sourceIndex, match.opponent)) return { target: { type: 'life', index: sourceIndex, main: true }, element: enemyLane, valid: true };
    }
    return { element: enemyLane, valid: false };
  }
  const mainLife = under?.closest('.life-card[data-life-side="opponent"][data-life-main="true"]');
  if (mainLife) return canAttackMainLife(attacker, sourceIndex, match.opponent) ? { target: { type: 'life', index: sourceIndex, main: true }, element: mainLife, valid: true } : { element: mainLife, valid: false };
  const lifeCard = under?.closest('.life-card[data-life-side="opponent"][data-life-index]');
  if (lifeCard) {
    const index = Number(lifeCard.dataset.lifeIndex);
    const valid = canTargetLifeZone(attacker, sourceIndex, match.opponent, index);
    return valid ? { target: { type: 'life', index }, element: lifeCard, valid: true } : { element: lifeCard, valid: false };
  }
  return null;
}
function showAttackTargetHints(attacker, sourceIndex) {
  document.querySelectorAll('.attack-target-hint').forEach((node) => node.classList.remove('attack-target-hint'));
  match.opponent.lanes.forEach((_, index) => {
    if (canTargetLane(attacker, sourceIndex, match.opponent, index)) document.querySelector(`.lane[data-side="opponent"][data-lane="${index}"]`)?.classList.add('attack-target-hint');
  });
  if (canTargetLifeZone(attacker, sourceIndex, match.opponent, sourceIndex)) {
    document.querySelector(`.life-card[data-life-side="opponent"][data-life-index="${sourceIndex}"]`)?.classList.add('attack-target-hint');
  }
  if (canAttackMainLife(attacker, sourceIndex, match.opponent)) {
    document.querySelector('.life-card[data-life-side="opponent"][data-life-main="true"]')?.classList.add('attack-target-hint');
  }
}
function clearAttackDrag() {
  document.querySelectorAll('.attack-drop-target,.attack-life-target,.attack-target-hint').forEach((node) => node.classList.remove('attack-drop-target', 'attack-life-target', 'attack-target-hint'));
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
    showAttackTargetHints(activeAttackDrag.card, activeAttackDrag.index);
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
    if (lane && index >= 0 && !match.player.lanes[index] && canSummonCard(match.player, activeCardDrag.card) && playCost(match.player, activeCardDrag.card) <= match.energy) lane.classList.add('drag-drop-target');
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
    } else if (laneIndex >= 0 && !match.player.lanes[laneIndex]) {
      playCard(drag.card.instance, laneIndex);
    }
  } else handDragCandidate = null;
});
document.addEventListener('pointercancel', (event) => { if (handDragCandidate?.pointerId === event.pointerId) clearCardDrag(); });
document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.inspect-zone')) { event.preventDefault(); showZoneCards(event.target.dataset.zoneSide, event.target.dataset.zoneKind); }
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.battle-card[role="button"], .hand-card[role="button"], .field-zone[data-card-preview][role="button"]')) { event.preventDefault(); const card=findCardPreview(event.target.dataset.cardPreview); const tooltip=document.getElementById('card-tooltip'); if(card){showCardTooltip(card,{target:event.target,clientX:window.innerWidth/2,clientY:window.innerHeight/2});tooltip.classList.add('pinned');} }
});
document.querySelectorAll('dialog').forEach((dialog) => dialog.addEventListener('close', hideCardTooltip)); document.getElementById('close-zone').addEventListener('click', () => document.getElementById('zone-dialog').close());
document.addEventListener('pointerover', (event) => {
  if (isTouchInput() || activeCardDrag || handDragCandidate || activeAttackDrag || attackDragCandidate || document.getElementById('card-tooltip')?.classList.contains('pinned')) { if (activeCardDrag || activeAttackDrag) hideCardTooltip(); return; }
  const preview = event.target.closest('[data-card-preview]');
  if (!preview) return;
  if (preview.matches('.hand-card, .battle-card, .field-card') || preview.matches('.field-zone')) return;
  if (event.relatedTarget?.closest?.('[data-card-preview]') === preview) return;
  const card = findCardPreview(preview.dataset.cardPreview);
  showCardTooltip(card, event);
});
document.addEventListener('pointermove', (event) => { if (activeCardDrag || activeAttackDrag) { hideCardTooltip(); return; } if (!isTouchInput() && !document.getElementById('card-tooltip')?.classList.contains('pinned') && !event.target.closest('#card-tooltip')) positionCardTooltip(event); });
document.addEventListener('pointerout', (event) => {
  if (isTouchInput()) return;
  const preview = event.target.closest('[data-card-preview]');
  if (preview?.matches('.hand-card, .battle-card, .field-card') || preview?.matches('.field-zone')) return;
  const tooltip = document.getElementById('card-tooltip');
  if (tooltip.classList.contains('pinned')) return;
  const related = event.relatedTarget;
  if (event.target.closest('#card-tooltip')) {
    if (related?.closest?.('#card-tooltip')) return;
    if (related?.closest?.('[data-card-preview]')?.dataset.cardPreview === tooltip.dataset.previewCard) return;
    hideCardTooltip(); return;
  }
  if (preview && !related?.closest?.('[data-card-preview]') && !related?.closest?.('#card-tooltip')) hideCardTooltip();
});
const handLimitSelection = new Set();
document.getElementById('hand-limit-cards').addEventListener('click', (event) => {
  const card = event.target.closest('[data-hand-discard]');
  if (!card || !handOverflowOpen) return;
  const id = card.dataset.handDiscard;
  if (handLimitSelection.has(id)) handLimitSelection.delete(id);
  else handLimitSelection.add(id);
  card.classList.toggle('selected', handLimitSelection.has(id));
  card.setAttribute('aria-checked', String(handLimitSelection.has(id)));
  const discardCount = match.player.hand.length - MAX_HAND_SIZE;
  document.getElementById('hand-limit-selection').textContent = `${handLimitSelection.size} / ${discardCount} selected`;
  document.getElementById('hand-limit-confirm').disabled = handLimitSelection.size !== discardCount;
});
document.getElementById('hand-limit-cards').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') { const card = event.target.closest('[data-hand-discard]'); if (card) { event.preventDefault(); card.click(); } }
});
document.getElementById('hand-limit-confirm').addEventListener('click', () => {
  if (!handOverflowOpen || !match.player) return;
  const required = match.player.hand.length - MAX_HAND_SIZE;
  if (handLimitSelection.size !== required) return;
  const discarded = match.player.hand.filter(card => handLimitSelection.has(card.instance));
  match.player.hand = match.player.hand.filter(card => !handLimitSelection.has(card.instance));
  match.player.destroyed.push(...discarded);
  handLimitSelection.clear(); handOverflowOpen = false;
  document.getElementById('hand-limit-dialog').close();
  render();
  if (discarded.length) logBattleEvent(`You sent ${discarded.map(card => card.name).join(', ')} to the Pandemonium Zone to meet the hand limit.`, 'player');
  if (pendingEndTurnAfterDiscard) { pendingEndTurnAfterDiscard = false; endPlayerTurn(); }
});
document.getElementById('hand-limit-dialog').addEventListener('cancel', event => { if (handOverflowOpen) event.preventDefault(); });
document.getElementById('effect-options').addEventListener('click', (event) => {
  const button = event.target.closest('[data-choice]');
  if (!button || !pendingEffectChoice) return;
  const choice = chooseEffect.choices[Number(button.dataset.choice)]; const callback = pendingEffectChoice;
  pendingEffectChoice = null; document.getElementById('effect-dialog').close(); callback(choice.value);
});
document.getElementById('close-effect').addEventListener('click', () => { pendingEffectChoice = null; document.getElementById('effect-dialog').close(); });
document.getElementById('rules-button').addEventListener('click', () => document.getElementById('rules-dialog').showModal());
document.getElementById('mobile-rules-button').addEventListener('click', () => document.getElementById('rules-dialog').showModal());
document.getElementById('card-library-button').addEventListener('click', () => showCardLibrary());
document.getElementById('close-card-library').addEventListener('click', () => document.getElementById('card-library-dialog').close());
document.getElementById('close-rules').addEventListener('click', () => document.getElementById('rules-dialog').close());
document.getElementById('element-guide-button').addEventListener('click', () => document.getElementById('element-guide-dialog').showModal());
document.getElementById('close-element-guide').addEventListener('click', () => document.getElementById('element-guide-dialog').close());
document.querySelectorAll('[data-player-deck]').forEach((button) => button.addEventListener('click', () => { selectedPlayerDeck = button.dataset.playerDeck; syncDeckPicker(); }));
document.querySelectorAll('[data-rival-deck]').forEach((button) => button.addEventListener('click', () => { selectedRivalDeck = button.dataset.rivalDeck; syncDeckPicker(); }));
document.querySelectorAll('[data-battle-mode]').forEach((button) => button.addEventListener('click', () => {
  selectedBattleMode = button.dataset.battleMode;
  document.querySelectorAll('[data-battle-mode]').forEach((option) => { const selected = option === button; option.classList.toggle('selected', selected); option.setAttribute('aria-pressed', String(selected)); });
  document.getElementById('player-deck-picker-group').classList.toggle('hidden', selectedBattleMode !== 'standard'); document.getElementById('rival-deck-picker-group').classList.toggle('hidden', selectedBattleMode === 'tutorial');
}));
// Relative to the visible silhouette, so transparent image margins do not shrink the pose.
const versusStanceFrames = new Map([
  ['academy-diamond', [1, 0, 1.7]],
  ['academy-dimitri', [1, 0, 1.7]],
  ['academy-topaz', [1, 0, 1.7]],
  ['ip-coyote-zodiac', [1, 0, 1.7]],
  ['ip-chase-zodiac', [1, 0, 1.7]],
  ['ip-jet', [1, 0, 1.7]],
  ['ip-academy-chase', [1, 0, 1.7]],
  ['lt-clary', [1, 0, 1.7]],
  ['valhalla-wendy', [1, 0, 1.7]],
  ['valhalla-khendal', [1, 0, 1.7]],
  ['valhalla-pryce', [1, 0, 1.7]],
  ['valhalla-ryota', [1, 0, 1.7]],
  ['lt-rat-king', [1, 0, 1.7]],
  ['zodiac-guardian-sabrina', [1, 0, 1.7]],
  ['wb-magnus', [1, 0, 1.7]],
  ['wb-rebeccah', [1, 0, 1.7]],
  ['wb-zodiac-dimitri', [1, 0, 1.7]],
  ['wb-zodiac-topaz', [1, 0, 1.7]],
  ['academy-ryuu', [1.0381, -.019, 1.7]],
  ['ts-zenon', [1.0436, -.0218, 1.7]],
  ['ts-momozan', [1, 0, 1.7]],
  ['ts-ryuu', [1.0364, -.0182, 1.7]],
  ['ts-aemi', [1.0451, -.0225, 1.7]],
  ['ts-elyza', [1.0377, -.0189, 1.7]],
  ['ts-lorette', [1, 0, 1.7]],
  ['ts-zodiac-aemi', [1.0427, -.0213, 1.7]],
  ['ts-zodiac-ryuu', [1.0374, -.0187, 1.7]],
  ['academy-coyote', [1.0302, -0.0181, 9.7005]],
  ['academy-fritz', [1.0107, -0.0046, 3.8558]],
  ['academy-lynda', [1.018, -0.0102, 4.1425]],
  ['academy-sabrina', [1.0075, 0, 8.4255]],
  ['aemi', [1.0169, -.0028, 3.5383]],
  ['amethyst', [1.0213, -0.0009, 1.753]],
  ['den', [1.0135, -0.0059, 7.3933]],
  ['dharma', [1.0077, -0.0054, 0.5838]],
  ['horatio', [1.0291, -0.0131, 2.0182]],
  ['ip-brody', [1.0199, -0.009, 13.8672]],
  ['ip-coyote', [1.0255, -0.017, 7.942]],
  ['ip-natsuki', [1.0102, -0.0055, 2.8712]],
  ['ip-sabrina', [1.0149, -0.0054, 12.4164]],
  ['island-paradise-chase', [1.0008, 0, 0.0844]],
  ['kage', [1.0172, -0.0115, 9.9775]],
  ['peppermint-ally', [1.0179, -0.007, 0.9766]],
  ['peppermint', [1.0302, -0.0101, 15.4297]],
  ['ryota', [1.0194, -0.0078, 1.6681]],
  ['vishnu', [1.0045, 0, 2.4014]],
  ['wild-west-rick', [1.0152, -0.0053, 2.0508]],
  ['ww-academy-brian', [1.0146, -0.0061, 7.9698]],
  ['ww-academy-rick', [1.0186, -0.0093, 2.0508]],
  ['ww-blake', [1.0149, -0.0079, 0.7161]],
  ['ww-brian', [1.0047, -0.0031, 0.9024]],
  ['ww-fritz', [1.0116, -0.0031, 6.7613]],
  ['ww-medusa', [1.0181, -0.0073, 2.4251]],
  ['ww-wade', [1.0147, -0.0093, 1.3344]],
  ['ww-zodiac-guardian-brian', [1.0078, -0.0014, 0.6352]],
  ['zodiac-guardian-kage', [1.1353, -0.0931, 3.0599]],
  ['zodiac-guardian-rick', [1.0789, -0.0395, 2.2519]],
  ['zodiac-guardian-ryota', [1.0526, -0.0295, 1.1594]],
  ['zoya', [1.0165, -0.0066, 2.2461]],
]);

function setVersusCharacterImage(elementId, card) {
  const image = document.getElementById(elementId);
  const assetId = characterArtAliases[card.id] || card.id;
  const frame = versusStanceFrames.get(assetId);
  const fallback = resultCharacterPath(card, 'victory');
  const url = frame ? `assets/versus-characters/${assetId}.webp?v=${poseArtVersion(assetId, 'stances-v5')}` : fallback;
  if (image.dataset.versusArt !== url) {
    image.dataset.versusArt = url;
    if (frame) {
      const [imageHeightScale, offsetTop, offsetInner] = frame;
      image.dataset.versusStance = assetId;
      image.style.setProperty('--stance-height-scale', imageHeightScale);
      image.style.setProperty('--stance-offset-bottom', 1 - imageHeightScale - offsetTop);
      image.style.setProperty('--stance-offset-inner', `${offsetInner}%`);
    } else {
      delete image.dataset.versusStance;
    }
    image.onerror = frame ? () => {
      image.onerror = null;
      delete image.dataset.versusStance;
      image.src = fallback;
    } : null;
    image.src = url;
  }
  image.alt = avatarLabel(card);
}

const versusDialog = document.getElementById('versus-dialog');
const versusDeck = document.getElementById('versus-saved-deck');
const versusStart = document.getElementById('versus-start');
let pendingBattle = null;

function updateVersusPlayer() {
  const { collectionOnly, playerDeckId } = pendingBattle;
  const user = window.peppermintCurrentUser;
  pendingBattle.playerAvatar = ownedProfileAvatar(user);
  const playerCard = pendingBattle.playerAvatar || profileResultCharacter('peppermint');
  setVersusCharacterImage('versus-player-art', playerCard);
  document.getElementById('versus-player-name').textContent = playerProfileName(user) || 'YOU';
  document.getElementById('versus-player-character').textContent = avatarLabel(playerCard);
  document.getElementById('versus-saved-deck-group').classList.toggle('hidden', !collectionOnly);
  const playerDeckLabel = document.getElementById('versus-player-deck-name');
  playerDeckLabel.classList.toggle('hidden', collectionOnly);
  playerDeckLabel.textContent = deckNames[playerDeckId];
  if (!collectionOnly) {
    updateVersusStart();
    return;
  }

  const previous = versusDeck.value;
  const slots = window.peppermintCollection?.battleDeckSlots() || [];
  const options = slots.map((slot) => {
    const option = new Option(slot.name + ' · ' + slot.count, slot.id);
    option.disabled = slot.count < 20 || slot.count > 40;
    return option;
  });
  const selectable = options.filter((option) => !option.disabled);
  const preferred = selectable.find((option) => option.value === previous)
    || selectable.find((option) => option.value === slots.find((slot) => slot.active)?.id)
    || selectable[0];
  versusDeck.replaceChildren(...options);
  versusDeck.value = preferred?.value || '';
  versusDeck.disabled = !selectable.length;
  updateVersusStart();
}

function updateVersusStart() {
  const savedDeck = window.peppermintCollection?.battleDeck(versusDeck.value);
  const deckAvailable = Boolean(window.peppermintCurrentUser && savedDeck);
  versusStart.disabled = pendingBattle.collectionOnly && !deckAvailable;
  document.getElementById('versus-deck-hint').classList.toggle('hidden', !versusStart.disabled);
}

function showVersus() {
  const collectionOnly = selectedBattleMode === 'collection';
  if (collectionOnly && !window.peppermintCurrentUser) {
    window.requirePeppermintSignIn?.();
    return;
  }
  const tutorialMode = selectedBattleMode === 'tutorial';
  const playerDeckId = tutorialMode ? 'academy' : selectedPlayerDeck;
  const opponentDeckId = tutorialMode ? 'wild-west' : selectedRivalDeck;
  const opponent = newPlayer(true, opponentDeckId, null, !tutorialMode);
  if (!opponent.avatar) opponent.avatar = profileResultCharacter(tutorialMode ? 'ww-rick' : 'peppermint');
  pendingBattle = { collectionOnly, tutorialMode, playerDeckId, opponentDeckId, opponent };
  versusDeck.replaceChildren();
  updateVersusPlayer();
  setVersusCharacterImage('versus-rival-art', opponent.avatar);
  document.getElementById('versus-rival-name').textContent = avatarLabel(opponent.avatar);
  document.getElementById('versus-rival-deck-name').textContent = deckNames[opponentDeckId];
  document.getElementById('deck-select-dialog').close('versus');
  versusDialog.showModal();
}

function backFromVersus() {
  versusDialog.close();
  pendingBattle = null;
  document.getElementById('deck-select-dialog').showModal();
}

document.getElementById('start-battle').addEventListener('click', showVersus);
document.getElementById('versus-back').addEventListener('click', backFromVersus);
versusDialog.addEventListener('cancel', (event) => { event.preventDefault(); backFromVersus(); });
versusDeck.addEventListener('change', updateVersusStart);
window.addEventListener('peppermint-collection-change', () => {
  if (versusDialog.open && pendingBattle) updateVersusPlayer();
});
versusStart.addEventListener('click', () => {
  if (!pendingBattle) return;
  const savedDeck = pendingBattle.collectionOnly ? window.peppermintCollection?.battleDeck(versusDeck.value) : null;
  if (pendingBattle.collectionOnly && (!window.peppermintCurrentUser || !savedDeck)) {
    updateVersusStart();
    return;
  }
  const battle = pendingBattle;
  pendingBattle = null;
  versusDialog.close();
  beginMatch(battle, savedDeck);
});
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

