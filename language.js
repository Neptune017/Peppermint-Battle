(() => {
  const translations = {
    'PEPPERMINT BATTLE':'PEPPERMINT BATTLE','THE ACADEMY IS OPEN':'AZ AKADÉMIA MEGNYÍLT','Choose your next move':'Válaszd ki a következő lépésed','Build your deck, explore the collection, and enter the arena.':'Építs paklit, fedezd fel a gyűjteményt, és lépj az arénába.',
    'PLAY BATTLE':'JÁTÉK INDÍTÁSA','Standard or Test Battle':'Normál vagy próbaharc','DECK EDITOR':'PAKLI SZERKESZTŐ','Sort and build your collection deck':'Rendezd és építsd a gyűjteményi paklidat','CARD SHOP':'KÁRTYABOLT','Open packs and collect cards':'Nyiss csomagokat és gyűjts kártyákat','CARD LIBRARY':'KÁRTYATÁR','Browse every card':'Böngéssz az összes kártya között','NEWEST FEATURED BOOSTER':'LEGÚJABB KIEMELT CSOMAG','Step into a glittering winter gala and discover the cards inside.':'Lépj be a csillogó téli bálba, és fedezd fel a benne rejlő kártyákat.','VIEW WINTER BALL':'TÉLI BÁL MEGTEKINTÉSE','HOW TO PLAY':'HOGYAN JÁTSSZ?','ACCOUNT SETTINGS':'FIÓKBEÁLLÍTÁSOK','LOG OUT':'KIJELENTKEZÉS','Academy is your starter deck. Other booster displays unlock by defeating each deck in Standard.':'Az Akadémia az induló paklid. A többi kártyacsomag a hozzá tartozó pakli Normál módban való legyőzésével nyílik meg.','If you like the characters, wishlist my Visual Novel with hand-made art,':'Ha tetszenek a szereplők, tedd kívánságlistára a kézzel rajzolt illusztrációkkal készült vizuális regényemet:','WISHLIST ON STEAM ↗':'KÍVÁNSÁGLISTÁRA A STEAMEN ↗',
    'YOUR TURN':'TE KÖVETKEZEL','RIVAL FIELD':'ELLENFÉL MEZŐJE','THE RIVAL':'AZ ELLENFÉL','RIVAL LIFE':'ELLENFÉL ÉLETE','YOUR LIFE':'ÉLETED','YOUR FIELD':'MEZŐD','SWAP FIGHTERS':'HARCOSOK CSERÉJE','YOUR HAND':'KEZED','BATTLE HISTORY':'HARC NAPLÓJA','DECK':'PAKLI','ASCENDANCE DECK':'FELEMELKEDÉS PAKLI','PANDEMONIUM ZONE':'PANDÉMONIUM ZÓNA','MAIN MENU':'FŐMENÜ','SIGN IN':'BEJELENTKEZÉS','ELEMENTS':'ELEMEK','GIVE UP':'FELADOM','ATTACK':'TÁMADÁS','END TURN':'KÖR VÉGE','MANA':'MANA','Choose a card, then choose an open lane':'Válassz egy kártyát, majd egy szabad sávot','Three lanes · attacks face forward':'Három sáv · a támadások előre irányulnak','Element matchups can turn the tide. Hover over a card to see its details.':'Az elemi előnyök megfordíthatják a harc menetét. Mutass egy kártyára a részletekért.',
    'CARD COLLECTION':'KÁRTYAGYŰJTEMÉNY','Browse booster displays, open packs, and collect cards.':'Böngészd a csomagokat, nyiss csomagokat, és gyűjts kártyákat.','YOUR DIAMONDS':'GYÉMÁNTJAID','Choose a booster display':'Válassz kártyacsomagot','Opening pack…':'Csomag megnyitása…','NEXT PACK':'KÖVETKEZŐ CSOMAG','SKIP ANIMATION':'ANIMÁCIÓ KIHAGYÁSA','MY GAINED CARDS':'MEGSZERZETT KÁRTYÁIM','BACK TO MAIN MENU':'VISSZA A FŐMENÜBE','YOUR COLLECTION':'GYŰJTEMÉNYED','Gained Cards':'Megszerzett kártyák','BACK TO BOOSTERS':'VISSZA A CSOMAGOKHOZ',
    'STANDARD':'NORMÁL','Deck Editor':'Pakliszerkesztő','Build a 20–40 card Standard deck from cards you own. Your Academy starter deck is ready to edit.':'Építs 20–40 kártyás Normál paklit a saját kártyáidból. Az Akadémia kezdőpaklid már szerkeszthető.','Saved deck':'Mentett pakli','NEW DECK':'ÚJ PAKLI','RENAME':'ÁTNEVEZÉS','DELETE DECK':'PAKLI TÖRLÉSE','Delete the active deck? This cannot be undone.':'Törlöd az aktív paklit? A művelet nem vonható vissza.','Card type':'Kártyatípus','All types':'Minden típus','Fighter':'Harcos','Creature':'Lény','Action':'Akció','Field':'Mező','Element':'Elem','All elements':'Minden elem','Class':'Szerep','All classes':'Minden szerep','Booster pack':'Kártyacsomag','All packs':'Minden csomag','Sort by':'Rendezés','Name':'Név','Cost':'Költség','Attack':'Támadás','Rarity':'Ritkaság','Search':'Keresés','Find a card':'Kártya keresése','Hide unowned':'Nem birtokoltak elrejtése','YOUR CARDS':'KÁRTYÁID','BUILT DECK':'ÖSSZEÁLLÍTOTT PAKLI','ASCENDANCE DECK':'FELEMELKEDÉS PAKLI','Choose up to 12 owned Zodiac Guardians for this saved deck.':'Válassz legfeljebb 12 birtokolt Zodiákus Őrzőt ehhez a mentett paklihoz.',
    'QUICK GUIDE':'GYORSTALPALÓ','How to play':'Hogyan játssz?','Build your field, protect your life, and break through the rival’s lanes.':'Építsd fel a meződet, védd az Életzónáidat, és törj át az ellenfél sávjain.','01 · PLAY A FIGHTER':'01 · JÁTSSZ KI EGY HARCOST','02 · ATTACK':'02 · TÁMADÁS','03 · BREAK LIFE':'03 · ÉLETZÓNA ROMBOLÁSA','04 · BUILD ENERGY':'04 · MANA GYŰJTÉSE','Choose a card in your hand, then place it in an open lane. Pay its energy cost. Newly summoned cards cannot attack during their first turn. Action cards have no element and cannot be summoned.':'Válassz egy kártyát a kezedből, majd helyezd egy szabad sávba. Fizesd ki a Mana-költségét. A kijátszott kártyák az első körükben nem támadhatnak. Az Akció kártyáknak nincs elemük, és nem idézhetők meg.','Attacks are manual. Most fighters attack the lane directly in front. Shooters can attack a Fighter in either adjacent lane or the Life Zone opposite them directly.':'A támadásokat te indítod. A legtöbb Harcos a közvetlenül előtte lévő sávba támad. A Lövészek bármelyik szomszédos sáv Harcosát vagy a velük szemben lévő Életzónát is támadhatják.','Attack the Life Zone in front of your fighter. When all three middle Life Zones are empty, the Main Life can be attacked from any lane with no opposing fighter in that lane. A Shooter in the middle lane can attack Main Life past the opposing center fighter.':'Támadd meg a Harcosod előtti Életzónát. Ha mindhárom középső Életzóna üres, a Fő Élet bármelyik olyan sávból támadható, ahol nincs ellenséges Harcos. A középső sávban álló Lövész az ellenfél középső Harcosa mögött is megtámadhatja a Fő Életet.','Energy refills each turn and its maximum grows by one. Draw one card each turn.':'A Mana minden körben újratöltődik, a maximuma pedig eggyel nő. Minden körben húzz egy kártyát.','Familiar:':'Familiáris:',
    'Victory!':'Győzelem!','MATCH COMPLETE':'A HARC VÉGET ÉRT','DIAMONDS EARNED':'SZERZETT GYÉMÁNTOK','PLAY AGAIN':'ÚJRAJÁTSZÁS','CARD EFFECT':'KÁRTYA KÉPESSÉG','Choose a target':'Válassz célpontot','PLAYER ACCOUNT':'JÁTÉKOSFIÓK','Sign in':'Bejelentkezés','Sign in to keep your player profile and save data attached to your account.':'Jelentkezz be, hogy játékosprofilod és mentéseid a fiókodhoz kapcsolódjanak.','Sign in to use this feature.':'Jelentkezz be a funkció használatához.','Nickname':'Becenév','Choose a player name':'Válassz játékosnevet','Email':'E-mail-cím','Password':'Jelszó','SAVE PROFILE':'PROFIL MENTÉSE','SIGN OUT':'KIJELENTKEZÉS','Create a new account':'Új fiók létrehozása','Close card details':'Kártyaadatok bezárása','CLOSE':'BEZÁRÁS',
        'Summon a Fighter or Creature':'Harcos vagy Lény megidézése','Summon Hopkin. Click his card in your hand, then click Lane 1, or drag him into Lane 1. He costs 1 Mana, and you have 1 Mana.':'Idézd meg Hopkint. Kattints a kezedben lévő kártyájára, majd az 1. sávra, vagy húzd oda. 1 Manába kerül, és 1 Manád van.','Wait a turn before attacking':'Várj egy kört a támadással','Click DO THE ACTION to hide this message. End Turn is highlighted; click it to continue. Newly summoned fighters cannot attack on their first turn.':'Kattints a CSELEKEDJ gombra az üzenet elrejtéséhez. A KÖR VÉGE gomb ki van emelve; kattints rá a folytatáshoz. Az újonnan megidézett Harcosok az első körükben nem támadhatnak.','Destroy an enemy fighter':'Pusztítsd el az ellenséges Harcost','Fighters usually attack forward into the opposing lane. Ready fighters pulse softly. Click Hopkin, then click the enemy fighter, or drag Hopkin onto it.':'A Harcosok általában előre, a szemben lévő sávba támadnak. A támadásra kész Harcosok finoman pulzálnak. Kattints Hopkinra, majd az ellenséges Harcosra, vagy húzd rá Hopkint.','Use element advantages':'Használd ki az elemi előnyt','Break a Life Zone':'Rombolj le egy Életzónát','Use a special card effect':'Használd egy kártya különleges képességét','Play an Action card':'Játssz ki egy Akció kártyát','Play a Field card':'Játssz ki egy Mező kártyát','Destroy the Main Life':'Rombold le a Fő Életet','Shielder class ability':'Védelmező szerepképessége','Shooter class ability':'Lövész szerepképessége','Summoner class ability':'Idéző szerepképessége','Enchanter class ability':'Támogató szerepképessége','Trickster class ability':'Megtévesztő szerepképessége','Healer class ability':'Gyógyító szerepképessége','Blader class ability':'Pengeforgató szerepképessége','Brawler class ability':'Ökölharcos szerepképessége',
    'Redirect enemy attacks from adjacent lanes to this card.':'A szomszédos sávokból érkező ellenséges támadásokat erre a kártyára irányítja.','Can attack an adjacent Fighter or the opposite Life Zone directly.':'Megtámadhatja a szomszédos sáv Harcosát vagy közvetlenül a szemközti Életzónát.','If this lane’s Life Zone is empty, summon a same-element Creature there as a Familiar.':'Ha ennek a sávnak az Életzónája üres, egy azonos elemű Lényt idézhetsz meg oda Familiárisként.','Adjacent allies gain +1 attack.':'A szomszédos szövetségesek +1 támadást kapnak.','The opposing fighter loses 1 attack.':'A szemben álló Harcos 1 támadást veszít.','On summon, add the top card of your deck to this lane’s Life Zone.':'Megidézéskor a paklid felső kártyája ennek a sávnak az Életzónájába kerül.','+1 attack when attacking; −1 attack when attacked.':'Támadáskor +1 támadás; megtámadásakor −1 támadás.','+1 attack while an adjacent lane is empty.':'+1 támadás, amíg egy szomszédos sáv üres.',
    'You have 1 Mana.':'1 Manád van.','Choose decks':'Paklik kiválasztása','BEFORE BATTLE':'HARC ELŐTT','Choose a battle mode and set up your decks if that mode allows it.':'Válassz játékmódot, és állítsd be a paklikat, ha a mód ezt engedi.','BATTLE MODE':'JÁTÉKMÓD','Build a deck only from cards you have collected. Wins unlock the rival deck booster and earn Diamonds.':'Csak a már összegyűjtött kártyáidból építs paklit. A győzelmek feloldják az ellenfél paklijának csomagját, és gyémántot adnak.','Use one of the pre-built decks.':'Használd az egyik előre összeállított paklit.','Learn summoning, attacks, card effects, and all eight classes in a guided battle.':'Ismerd meg az idézést, a támadást, a kártya képességeket és mind a nyolc szerepet egy vezetett harcban.','YOUR DECK':'PAKLID','RIVAL DECK':'ELLENFÉL PAKLIJA','START BATTLE':'HARC INDÍTÁSA','Choose up to 12 owned Zodiac Guardians for this saved deck.':'Válassz legfeljebb 12 birtokolt Zodiákus Őrzőt ehhez a mentett paklihoz.',
    'Aer':'Levegő','Aqua':'Víz','Dark':'Sötétség','Glacial':'Jég','Ignis':'Tűz','Mind':'Elme','Solar':'Szoláris','Terra':'Föld','Shielder':'Védelmező','Shooter':'Lövész','Summoner':'Idéző','Enchanter':'Támogató','Trickster':'Megtévesztő','Healer':'Gyógyító','Blader':'Pengeforgató','Brawler':'Ökölharcos','Fighter Zone':'Harcos zóna','Life Zone':'Életzóna','Main Life':'Fő Élet','Pandemonium':'Pandémonium','Transformation':'Átváltozás','Zodiac Guardian':'Zodiákus Őrző','Academy':'Akadémia','Wild West':'Vadnyugat','Island Paradise':'Szigeti Paradicsom','Living Toy':'Élő Játék','Winter Ball':'Téli Bál','Pocket World':'Zsebvilág','Candy Goblin':'Cukor Kobold','General':'Általános','Fun Deck':'Vegyes pakli','Test Battle':'Próbaharc','Tutorial Fight':'Oktatóharc','Standard':'Normál','Academy fighters, Candy Goblins, and Familiar support cards.':'Akadémiai Harcosok, Cukor Koboldok és Familiárisokat támogató kártyák.','Frontier fighters, Vegcritters, and Zodiac support.':'Határvidéki Harcosok, Zöldségszerzetek és Zodiákus támogatás.','Island fighters and aquatic Creatures, with Zodiac transformations.':'Szigeti Harcosok és vízi Lények, Zodiákus Átváltozásokkal.','Dark toy creatures, Dollmasters, and Tsukumogami.':'Sötét játékszerek, Bábmesterek és Cukumogamik.','Glacial dancers, icy duelists, and holiday creatures.':'Jégtáncosok, jeges párbajhősök és ünnepi lények.','One of every unique card across all decks. No copy limits!':'Minden pakliból egy-egy egyedi kártya. Nincs másolati korlát!','START BATTLE':'HARC INDÍTÁSA','Tutorial Fight':'Oktatóharc','Learn summoning, attacks, card effects, and all eight classes in a guided battle.':'Ismerd meg az idézést, a támadást, a kártya képességeket és mind a nyolc szerepet egy vezetett harcban.'
  };
  const fragments = [
    ['Fighter','Harcos'],['Creature','Lény'],['Action','Akció'],['Field','Mező'],['Shielder','Védelmező'],['Shooter','Lövész'],['Summoner','Idéző'],['Enchanter','Támogató'],['Trickster','Megtévesztő'],['Healer','Gyógyító'],['Blader','Pengeforgató'],['Brawler','Ökölharcos'],['Aer','Levegő'],['Aqua','Víz'],['Dark','Sötétség'],['Glacial','Jég'],['Ignis','Tűz'],['Mind','Elme'],['Solar','Szoláris'],['Terra','Föld'],['Academy','Akadémia'],['Wild West','Vadnyugat'],['Island Paradise','Szigeti Paradicsom'],['Living Toy','Élő Játék'],['Winter Ball','Téli Bál'],['Zodiac Guardian','Zodiákus Őrző'],['Transformation','Átváltozás'],['Main Life','Fő Élet'],['Life Zone','Életzóna'],['Pandemonium Zone','Pandémonium zóna'],['cards','kártya'],['card','kártya'],['Lane','Sáv'],['lane','sáv'],['Mana','Mana'],['mana cost','Mana-költség'],['attack','támadás'],['Attack','Támadás'],['summon','megidéz'],['Summon','Megidéz'],['summoned','megidézett'],['opponent','ellenfél'],['opposing','szemben álló'],['enemy','ellenséges'],['deck','pakli'],['Deck','Pakli'],['hand','kéz'],['Hand','Kéz'],['life','élet'],['Life','Élet'],['draw','húz'],['draws','húz'],['discard','eldob'],['destroy','elpusztít'],['destroyed','elpusztított'],['adjacent','szomszédos'],['empty','üres'],['empty lane','üres sáv'],['Familiar','Familiáris'],['Element','Elem'],['Rival','Ellenfél'],['Your','Saját'],['Select','Válassz'],['Choose','Válassz'],['Discard','Eldobás'],['discard','eldobás'],['points','pont'],['attack points','támadási pont'],['intercept','közbelép'],['redirected','átterelődik'],['protected','védi'],['remaining','megmaradt'],['rival','ellenfél'],['Rival','Ellenfél'],['play','játssz ki'],['Play','Játssz ki'],['turn','kör'],['Turn','Kör']
  ];
  const glossary = new Map(Object.entries(translations));
  glossary.set('Academy Deck','Akadémiai pakli'); glossary.set('My Collection Deck','Gyűjteményi paklim'); glossary.set('YOUR TURN','TE KÖVETKEZEL'); glossary.set('RIVAL FIELD','ELLENFÉL MEZŐJE'); glossary.set('YOUR FIELD','MEZŐD'); glossary.set('YOUR LIFE','ÉLETED'); glossary.set('RIVAL LIFE','ELLENFÉL ÉLETE'); glossary.set('YOUR HAND','KEZED'); glossary.set('BATTLE HISTORY','HARC NAPLÓJA'); glossary.set('Discard a card to destroy a fighter.','Dobj el egy kártyát egy Harcos elpusztításához.'); glossary.set('CARD EFFECT','KÁRTYA KÉPESSÉG'); glossary.set('Frozen: cannot attack this turn','Megfagyott: ebben a körben nem támadhat');
  glossary.set('Cannot be destroyed or returned by card effects, except Avatar Gem or Locker Room.','Kártya képességek nem pusztíthatják el és nem juttathatják vissza a kezedbe, kivéve az Avatar Gemet és a Locker Roomot.'); glossary.set('YOU','TE'); glossary.set('THE RIVAL','AZ ELLENFÉL'); glossary.set('TURN 1','1. KÖR'); glossary.set('RIVAL LIFE','ELLENFÉL ÉLETE'); glossary.set('YOUR LIFE','ÉLETED'); glossary.set('YOUR HAND','KEZED'); glossary.set('YOUR FIELD','MEZŐD'); glossary.set('ATTACK','TÁMADÁS'); glossary.set('GIVE UP','FELADOM'); glossary.set('END TURN','KÖR VÉGE');
  glossary.set('On summon, if Fritz is on the field, draw an Avatar Gem.','Megidézéskor, ha Fritz a mezőn van, húzz egy Avatar Kristály kártyát.');
  const cardAbilityTranslations={
    'On summon, draw an Academy Brawler from your deck.':'Megidézéskor húzz egy Akadémiai Verekedőt a paklidból.',
    '+1 attack for each adjacent ally Academy card.':'Minden szomszédos Akadémiai szövetséges kártyáért +1 támadást kap.',
    'Draw an Academy card with a different element.':'Húzz egy másik elemű Akadémia kártyát.',
    'Draw a Zoya card when destroyed.':'Elpusztításakor húzz egy Zoya kártyát.',
    'Discard a card to destroy a fighter.':'Dobj el egy kártyát egy Harcos elpusztításához.',
    'Return an Academy card on the field to its owner’s hand.':'Juttass vissza a mezőről egy Akadémia kártyát a tulajdonosa kezébe.',
    'Return one of your fighters to your hand.':'Juttasd vissza egy Harcosodat a kezedbe.',
    'The opposing fighter cannot attack next turn.':'A szemben álló Harcos a következő körben nem támadhat.',
    'Draw a Cooking action card.':'Húzz egy Főzés akciókártyát.',
    'Choose an Academy card costing 4 or less from your deck and add it to your hand.':'Válassz ki a paklidból egy legfeljebb 4 Manába kerülő Akadémia kártyát, és vedd a kezedbe.',
    'Destroy the opposing fighter.':'Pusztítsd el a szemben álló Harcost.',
    'Let a fighter attack on its first turn.':'Egy Harcos már a megidézése körében is támadhat.',
    'Discard this card to draw Academy Hall from your deck into your hand.':'Dobd el ezt a kártyát, hogy az Akadémia Csarnokot a paklidból a kezedbe húzd.',
    'Academy cards gain +1 attack while at least one Academy card is on the field.':'Az Akadémia kártyák +1 támadást kapnak, amíg legalább egy Akadémia kártya van a mezőn.',
    'Return a Fighter or Creature card from your Pandemonium Zone to your hand.':'Juttass vissza egy Harcos vagy Lény kártyát a Pandémonium zónádból a kezedbe.',
    'If a Fighter you control shares a name with a card in your hand or deck that has a different title, destroy your Fighter and summon that card in its lane.':'Ha az irányításod alatt álló Harcos neve megegyezik egy kezedben vagy paklidban lévő, más című kártya nevével, pusztítsd el a Harcosodat, majd idézd meg azt a kártyát a sávjába.',
    'Replace a card in a fighter zone with a card from the Ascendance Deck that has the same name.':'Cserélj ki egy kártyát egy Harcos zónában a Felemelkedés pakli azonos nevű kártyájára.',
    'On summon, choose a Fighter or Creature in your Pandemonium Zone. At the start of your next turn, summon it to an open Fighter Zone if Dharma is still on the field.':'Megidézéskor válassz ki egy Harcost vagy Lényt a Pandémonium zónádból. A következő köröd kezdetén idézd meg egy szabad Harcos zónába, ha Dharma még a mezőn van.',
    'On summon, draw a Terra Action card.':'Megidézéskor húzz egy Föld elemű Akció kártyát.',
    'Can only be summoned if Peppermint is in one of your Fighter Zones. On summon, draw Avatar Gem.':'Csak akkor idézhető meg, ha Peppermint az egyik Harcos zónádban van. Megidézéskor húzz egy Avatar Gem kártyát.',
    'On summon, draw a Potion card.':'Megidézéskor húzz egy Ital kártyát.',
    'Restore up to 2 spent Mana this turn.':'Ebben a körben legfeljebb 2 elköltött Manát tölts vissza.',
    'Restore an empty Life Zone with the top card of your deck.':'Tölts fel egy üres Életzónát a paklid legfelső kártyájával.',
    'When destroyed, draw a Dharma card.':'Elpusztításakor húzz egy Dharma kártyát.',
    'On summon, return an Action card from your Pandemonium Zone to your hand.':'Megidézéskor juttass vissza egy Akció kártyát a Pandémonium zónádból a kezedbe.',
    'When destroyed, return this card to your hand and increase its cost by 1.':'Elpusztításakor vedd vissza ezt a kártyát a kezedbe, és növeld a költségét 1-gyel.',
    '+1 attack for each Terra card in your Pandemonium Zone.':'Minden Föld kártyáért a Pandémonium zónádban +1 támadást kap.',
    '+1 attack for each Dark card in your Pandemonium Zone.':'Minden Sötétség kártyáért a Pandémonium zónádban +1 támadást kap.',
    'Discard a card to destroy an opposing fighter in a Solar explosion.':'Dobj el egy kártyát, hogy Naprobbanással elpusztíts egy ellenséges Harcost.',
    'On summon, choose a fighter whose Zodiac Guardian is in your Ascendance Deck. Send Egg to your Pandemonium Zone and replace Egg with a Zodiac creature from your deck matching that fighter’s element.':'Megidézéskor válassz egy Harcost, akinek Zodiákus Őrzője a Felemelkedés paklidban van. Küldd a Tojást a Pandémonium zónádba, majd cseréld le a paklidból egy azonos elemű Zodiákus Lényre.',
    'While this is on the field, Wild West fighters gain +1 attack for each empty fighter zone on both fields.':'Amíg ez a kártya a mezőn van, a Vadnyugat Harcosai mindkét mezőn minden üres Harcos zónáért +1 támadást kapnak.',
    '+2 attack for each empty enemy fighter zone.':'Minden üres ellenséges Harcos zónáért +2 támadást kap.',
    'On summon, return an enemy fighter to its hand.':'Megidézéskor juttass vissza egy ellenséges Harcost a tulajdonosa kezébe.',
    'Activate on the field: return Blake and the opposing fighter in its lane to their owners’ hands.':'Aktiváld a mezőn: juttasd vissza Blake-et és a sávjában álló ellenséges Harcost a tulajdonosaik kezébe.',
    'On summon, return an Eggscythe from your Pandemonium Zone to your hand.':'Megidézéskor juttass vissza egy Eggscythe kártyát a Pandémonium zónádból a kezedbe.',
    'Cannot be destroyed or returned by card effects, except Avatar Gem or Locker Room.':'Kártya képességek nem pusztíthatják el, és nem juttathatják vissza a kezedbe; kivétel az Avatar Gem és a Locker Room.',
    'Once per turn, spend 1 Mana to look at the top card of your deck.':'Körönként egyszer költs el 1 Manát, hogy megnézd a paklid legfelső kártyáját.',
    'If Rick is on your field, draw an Avatar Gem.':'Ha Rick a meződön van, húzz egy Avatar Gem kártyát.',
    'When destroyed, return a different Dark card from your Pandemonium Zone to your hand.':'Elpusztításakor juttass vissza egy másik Sötétség kártyát a Pandémonium zónádból a kezedbe.',
    'When an enemy targets your Life Zone, if your Fighter Zones are empty, summon Hopkin from your hand.':'Ha egy ellenség megcélozza az Életzónádat, és a Harcos zónáid üresek, idézd meg Hopkint a kezedből.',
    'When Purrnip destroys a Life Zone, draw a card.':'Amikor Purrnip elpusztít egy Életzónát, húzz egy kártyát.',
    'Can attack on the turn it is summoned, except on the first turn.':'A megidézése körében is támadhat, kivéve a játék első körét.',
    'Gets +1 attack during the enemy turn.':'Az ellenfél körében +1 támadást kap.',
    'A fighter that destroys this in battle loses 1 attack.':'Az a Harcos, amely harcban elpusztítja ezt a kártyát, 1 támadást veszít.',
    'Wild West cards costing 3 or less return to your hand instead of the Pandemonium Zone when defeated in battle. (Except self.)':'A legfeljebb 3 Manába kerülő Vadnyugat kártyák harci vereségük után a Pandémonium zóna helyett a kezedbe kerülnek. (Saját magára nem vonatkozik.)',
    'On summon, spend 1 Mana to destroy a random card in your opponent’s hand.':'Megidézéskor költs el 1 Manát, hogy elpusztíts egy véletlenszerű kártyát az ellenfeled kezéből.',
    'When destroyed, draw a Mind Wild West card.':'Elpusztításakor húzz egy Elme elemű Vadnyugat kártyát.',
    'Summon a Wild West fighter from your hand immediately.':'Azonnal idézz meg egy Vadnyugat Harcost a kezedből.',
    'Destroy one friendly and one enemy fighter. A random Wild West fighter you control gains permanent +1 attack.':'Pusztíts el egy szövetséges és egy ellenséges Harcost. Egy véletlenszerű, irányításod alatt álló Vadnyugat Harcos véglegesen +1 támadást kap.',
    'Destroy every fighter in the selected lane on both fields.':'Pusztítsd el a kiválasztott sáv összes Harcosát mindkét mezőn.',
    'Make an enemy fighter unable to move next turn.':'A következő körben egy ellenséges Harcos nem mozdulhat.',
    'Reduce an enemy fighter’s attack by 1 until your next turn.':'Csökkentsd egy ellenséges Harcos támadását 1-gyel a következő köröd kezdetéig.',
    'Summon a Vegcritter from your deck or Pandemonium Zone.':'Idézz meg egy Zöldségszerzetet a paklidból vagy a Pandémonium zónádból.',
    'Wild West cards in Fighter Zones gain +1 attack during the opponent’s turn.':'A Harcos zónákban lévő Vadnyugat kártyák +1 támadást kapnak az ellenfél körében.',
    'Gain 1 attack after each card destroyed by this card.':'Minden kártya elpusztítása után kapj +1 támadást.',
    'On summon, protect an adjacent ally from attacks. It cannot defend its lane’s Life Zone while protected.':'Megidézéskor védd meg az egyik szomszédos szövetségest a támadásoktól. Védelem alatt nem védheti a sávja Életzónáját.',
    'Gains 1 attack at the beginning of each of your turns while in the Fighter Zone.':'A Harcos zónában állva minden köröd kezdetén +1 támadást kap.',
    'Gains 1 attack for each adjacent Brawler.':'Minden szomszédos Verekedőért +1 támadást kap.',
    'Can make 2 attacks each turn, except the turn it is summoned.':'Minden körben kétszer támadhat, kivéve a megidézése körét.',
    'Each turn, give 1 attack to an adjacent Brawler. Choose one if there are several.':'Minden körben adj +1 támadást egy szomszédos Verekedőnek. Ha több is van, válassz közülük.',
    'When destroyed, draw an Island Paradise Creature.':'Elpusztításakor húzz egy Szigeti Paradicsom Lényt.',
    'Loses 1 attack while facing a Brawler.':'1 támadást veszít, ha Verekedővel néz szembe.',
    'On summon, draw an Island Paradise Creature.':'Megidézéskor húzz egy Szigeti Paradicsom Lényt.',
    'Destroy this card to give an adjacent Brawler +1 attack.':'Pusztítsd el ezt a kártyát, hogy egy szomszédos Verekedő +1 támadást kapjon.',
    'When this destroys an opposing card, an adjacent Aqua Brawler may gain 1 attack.':'Ha ez a kártya elpusztít egy ellenséges kártyát, egy szomszédos Víz elemű Verekedő +1 támadást kaphat.',
    'After this is attacked, the attacking enemy loses 1 attack.':'Miután ezt megtámadták, a támadó ellenség 1 támadást veszít.',
    'Island Paradise fighters cannot be targeted by attacks, but do not defend their lane’s Life Zone.':'A Szigeti Paradicsom Harcosai nem jelölhetők ki támadás célpontjaként, de nem védik a sávjuk Életzónáját.',
    'Gains 1 attack for each Brawler in your Pandemonium Zone.':'Minden Verekedőért a Pandémonium zónádban +1 támadást kap.',
    'Gains 1 attack for each Aqua card in your Pandemonium Zone.':'Minden Víz kártyáért a Pandémonium zónádban +1 támadást kap.',
    'Move one of your fighters to an adjacent empty Fighter Zone.':'Mozgasd egy Harcosodat egy szomszédos, üres Harcos zónába.',
    'Discard a card to give one of your fighters +1 attack.':'Dobj el egy kártyát, hogy az egyik Harcosod +1 támadást kapjon.',
    'Choose an Aqua Island Paradise fighter to become immune to Island Paradise field effects.':'Válassz ki egy Víz elemű Szigeti Paradicsom Harcost, amely immunissá válik a Szigeti Paradicsom mezőhatásaira.',
    'On summon, draw an Avatar Gem.':'Megidézéskor húzz egy Avatar Gem kártyát.',
    'Gains +1 attack for each adjacent Living Toy or Dollmaster card.':'Minden szomszédos Élő Játék vagy Bábmester kártyáért +1 támadást kap.',
    'Give 1 attack point to each 1-cost Dark card in the Fighter Zone for each Living Toy card in your hand.':'A Harcos zónában lévő minden 1 Manás Sötétség kártya +1 támadást kap a kezedben lévő minden Élő Játék kártyáért.',
    'Gains +1 attack for each Dark card with a different name in your Pandemonium Zone.':'Minden különböző nevű Sötétség kártyáért a Pandémonium zónádban +1 támadást kap.',
    'On summon, send a Dark card from your deck to the Pandemonium Zone.':'Megidézéskor küldj egy Sötétség kártyát a paklidból a Pandémonium zónába.',
    'On summon, discard a card to gain 1 attack.':'Megidézéskor dobj el egy kártyát, hogy +1 támadást kapjon.',
    'On summon, return a card from your Fighter Zone to your hand and gain Mana equal to its cost.':'Megidézéskor juttass vissza egy kártyát a Harcos zónádból a kezedbe, és kapj annyi Manát, amennyi a költsége.',
    'On summon, return a Dark card from your Pandemonium Zone to your hand.':'Megidézéskor juttass vissza egy Sötétség kártyát a Pandémonium zónádból a kezedbe.',
    'On summon, send the top card of your deck to the Pandemonium Zone to randomly discard a card from the enemy’s hand.':'Megidézéskor küldd a paklid legfelső kártyáját a Pandémonium zónába, hogy véletlenszerűen eldobj egy kártyát az ellenfél kezéből.',
    'If sent to the Pandemonium Zone from your hand or deck, summon this card.':'Ha a kezedből vagy a paklidból a Pandémonium zónába kerül, idézd meg ezt a kártyát.',
    'Gains +1 attack for each Dark Fighter or Creature in your Pandemonium Zone.':'Minden Sötétség Harcosért vagy Lényért a Pandémonium zónádban +1 támadást kap.',
    'While on the field, all 1-cost Fighters and Creatures gain +1 attack.':'Amíg a mezőn van, minden 1 Manás Harcos és Lény +1 támadást kap.',
    'If you control a Living Toy Creature, give a Living Toy fighter +1 attack.':'Ha irányítasz egy Élő Játék Lényt, adj +1 támadást egy Élő Játék Harcosnak.',
    'Return a Living Toy card from your Pandemonium Zone to your hand.':'Juttass vissza egy Élő Játék kártyát a Pandémonium zónádból a kezedbe.',
    'Search your deck for a Living Toy card and add it to your hand.':'Keress ki egy Élő Játék kártyát a paklidból, és vedd a kezedbe.',
    'Allow one of your Glacial cards to act on its first turn.':'Engedd meg, hogy az egyik Jég kártyád már az első körében cselekedjen.',
    'Once per turn, swap the position of two cards if at least one is Glacial.':'Körönként egyszer cseréld fel két kártya helyét, ha legalább az egyik Jég elemű.',
    'If Topaz is on the field, summon this card with no Mana cost.':'Ha Topaz a mezőn van, ezt a kártyát Mana-költség nélkül idézheted meg.',
    'If Diamond is on the field, summon this card with no Mana cost.':'Ha Diamond a mezőn van, ezt a kártyát Mana-költség nélkül idézheted meg.',
    'On summon, draw an Academy card that costs 3 or 4.':'Megidézéskor húzz egy 3 vagy 4 Manába kerülő Akadémia kártyát.',
    'Once per turn, move one of your fighters to any empty Fighter Zone. Counts as both Topaz and Diamond.':'Körönként egyszer mozgass egy Harcosodat bármelyik üres Harcos zónába. Topaznak és Diamondnak is számít.',
    'On summon, reduce the cost of a Glacial card in your hand by 1.':'Megidézéskor csökkentsd 1-gyel egy kezedben lévő Jég kártya költségét.',
    'Gains +1 attack whenever it moves to another lane.':'Valahányszor másik sávba mozog, +1 támadást kap.',
    'On summon, move a non-adjacent card to a free Fighter Zone adjacent to its current lane.':'Megidézéskor mozgass egy nem szomszédos kártyát egy jelenlegi sávjával szomszédos, szabad Harcos zónába.',
    'On summon, move the opposing card to a free adjacent Fighter Zone.':'Megidézéskor mozgasd át a szemben álló kártyát egy szabad, szomszédos Harcos zónába.',
    'On summon, move an adjacent ally to another free Fighter Zone.':'Megidézéskor mozgasd át az egyik szomszédos szövetségest egy másik szabad Harcos zónába.',
    'Once per turn, move Dimitri to a free adjacent Fighter Zone.':'Körönként egyszer mozgasd Dimitrit egy szabad, szomszédos Harcos zónába.',
    'Gains +1 attack whenever any card moves on the field.':'Valahányszor egy kártya mozog a mezőn, +1 támadást kap.',
    'Discard this card from your hand to move a Glacial card to another Fighter Zone.':'Dobd el ezt a kártyát a kezedből, hogy egy Jég kártyát egy másik Harcos zónába mozgass.',
    'Once per turn, move this card to an adjacent Fighter Zone.':'Körönként egyszer mozgasd ezt a kártyát egy szomszédos Harcos zónába.',
    'On summon, if Fritz is on the field, draw an Avatar Gem.':'Megidézéskor, ha Fritz a mezőn van, húzz egy Avatar Gem kártyát.',
    'On summon, if Dimitri is on the field, draw an Avatar Gem.':'Megidézéskor, ha Dimitri a mezőn van, húzz egy Avatar Kristály kártyát.',
    'Gains +1 attack for each Aer card on the field or in your hand.':'Minden mezőn vagy a kezedben lévő Szél kártyáért +1 támadást kap.',
    'Gains +1 attack for each Glacial card on the field or in your hand.':'Minden mezőn vagy a kezedben lévő Jég kártyáért +1 támadást kap.',
    'If you control two adjacent Fighters or Transformation cards, give each +1 attack.':'Ha két szomszédos Harcost vagy Átváltozás kártyát irányítasz, mindegyik +1 támadást kap.',
    'Draw 2 cards.':'Húzz 2 kártyát.',
    'Search your deck for a Glacial card and add it to your hand.':'Keress ki egy Jég kártyát a paklidból, és vedd a kezedbe.'
  };
  const revisedTerms=[
    ['Zodiac Egg','Zodiákus Tojás'],['Zodiac','Zodiákus'],['None','Semleges'],['Neutral','Semleges'],['Verekedő','Ökölharcos'],['Bűbájos','Támogató'],['Tréfamester','Megtévesztő'],['Cukorkamanók','Cukor Koboldok'],['Cukorkamanó','Cukor Kobold'],['Babamesterek','Bábmesterek'],['Babamester','Bábmester'],['Növénylények','Zöldségszerzetek'],['Növénylény','Zöldségszerzet'],['Szél','Levegő'],['Naprobbanás','Szoláris robbanás'],['Nap elemű','Szoláris elemű'],['Nap kártya','Szoláris kártya'],['Akadémiai Verekedő','Akadémiai Ökölharcos'],
    ['Mana Potion','Manaital'],['Health Potion','Gyógyital'],['Avatar Gemet','Avatar Kristályt'],['Locker Roomot','Öltözőt'],['Avatar Gem','Avatar Kristály'],['Academy Hall','Akadémia Csarnok'],['Locker Room','Öltöző'],['Quick Draw','Gyorshúzás'],["Duelist's Gambit",'Párbajhős csele'],['Bounty Raid','Fejvadászroham'],['Wanted Poster','Körözési plakát'],['No Pain, No Gain','Nincs fájdalom, nincs nyereség'],["Swim, Don't Sink",'Ússz, ne süllyedj!'],['Ride the Wave','Lovagold meg a hullámot'],['Doll Chorus','Babakórus'],['Wind-Up Toy','Felhúzható játék'],['Toy Capsule','Játékkapszula'],['Christmas Mall','Karácsonyi bevásárlóközpont'],['Toy Store','Játékbolt'],['Shopping','Bevásárlás'],['Drinking Tea','Teázás'],['Merry Christmas!','Boldog karácsonyt!'],['Wedding Proposal','Házassági ajánlat'],['Planting','Ültetés'],['Root','Gyökér'],['Cooking','Főzés'],['Island Paradise','Szigeti Paradicsom']
  ];
  function reviseHungarian(text){let result=text;for(const [from,to] of revisedTerms)result=result.replaceAll(from,to);return result.replace(/\bEgg\b/g,'Tojás');}
  for (const [english,hungarian] of Object.entries(cardAbilityTranslations)) glossary.set(english,reviseHungarian(hungarian));
  Object.assign(translations,{'None':'Semleges','Neutral':'Semleges','Dollmaster':'Bábmester','Vegcritter':'Zöldségszerzet','Zodiac':'Zodiákus','Egg':'Tojás','Avatar Gem':'Avatar Kristály','Avatar Gemet':'Avatar Kristályt','Avatar Gem':'Avatar Kristály','Mana Potion':'Manaital','Health Potion':'Gyógyital','Academy Hall':'Akadémia Csarnok','Cooking':'Főzés','Locker Room':'Öltöző','Avatar Gem':'Avatar Kristály','Quick Draw':'Gyorshúzás',"Duelist's Gambit":'Párbajhős csele','Bounty Raid':'Fejvadászroham','Root':'Gyökér','Wanted Poster':'Körözési plakát','Planting':'Ültetés','Cactus Creek':'Kaktuszpatak','Ride the Wave':'Lovagold meg a hullámot','No Pain, No Gain':'Nincs fájdalom, nincs nyereség',"Swim, Don't Sink":'Ússz, ne süllyedj!','Shopping':'Bevásárlás','Merry Christmas!':'Boldog karácsonyt!','Wedding Proposal':'Házassági ajánlat','Drinking Tea':'Teázás','Island Paradise':'Szigeti Paradicsom','Toy Store':'Játékbolt','Christmas Mall':'Karácsonyi bevásárlóközpont','Doll Chorus':'Babakórus','Wind-Up Toy':'Felhúzható játék','Toy Capsule':'Játékkapszula'});
  Object.assign(translations,{
    "Summon a Fighter or Creature":"Harcos vagy lény megidézése",
    "Wait a turn before attacking":"Várj egy kört a támadás előtt",
    "Destroy an enemy fighter":"Ellenséges harcos elpusztítása",
    "Use element advantages":"Elemi előny kihasználása",
    "Break a Life Zone":"Életzóna áttörése",
    "Use a special card effect":"Kártya képesség használata",
    "Play an Action card":"Akciókártya kijátszása",
    "Play a Field card":"Mezőkártya kijátszása",
    "Shielder class ability":"A Védelmező szerepképessége",
    "Shooter class ability":"A Lövész szerepképessége",
    "Summoner class ability":"Az Idéző szerepképessége",
    "Enchanter class ability":"A Támogató szerepképessége",
    "Trickster class ability":"A Megtévesztő szerepképessége",
    "Healer class ability":"A Gyógyító szerepképessége",
    "Blader class ability":"A Pengeforgató szerepképessége",
    "Brawler class ability":"Az Ökölharcos szerepképessége",
    "Destroy the Main Life":"Fő Élet elpusztítása",
    "Redirect enemy attacks from adjacent lanes to this card.":"A szomszédos sávokból érkező ellenséges támadásokat ez a kártya kapja meg.",
    "Can attack an adjacent Fighter or the opposite Life Zone directly.":"Megtámadhatja a szomszédos sávban álló Harcost vagy a vele szemben lévő Életzónát.",
    "If this lane’s Life Zone is empty, summon a same-element Creature there as a Familiar.":"Ha a sávhoz tartozó Életzóna üres, idézz meg oda egy azonos elemű Lényt Familiárisként.",
    "Adjacent allies gain +1 attack.":"A szomszédos szövetségesek +1 támadást kapnak.",
    "The opposing fighter loses 1 attack.":"A szemben álló Harcos 1 támadást veszít.",
    "On summon, add the top card of your deck to this lane’s Life Zone.":"Megidézésekor tedd a paklid legfelső kártyáját ehhez a sávhoz tartozó Életzónába.",
    "+1 attack when attacking; −1 attack when attacked.":"Támadáskor +1, megtámadásakor −1 támadást kap.",
    "+1 attack while an adjacent lane is empty.":"+1 támadást kap, ha egy szomszédos sáv üres.",
    "End your turn now to trigger the interception.":"Fejezd be a körödet, hogy a Védelmező közbelépjen.",
    "Select the Shooter in Lane 1, start an attack, then target Lane 2.":"Válaszd ki az 1. sávban álló Lövészt, indíts támadást, majd célozd meg a 2. sávot.",
    "Summon the Summoner into Lane 1, then choose the matching Creature.":"Idézd meg az Idézőt az 1. sávba, majd válaszd ki az azonos elemű Lényt.",
    "Summon the Enchanter into Lane 2.":"Idézd meg a Támogatót a 2. sávba.",
    "Summon the Trickster into Lane 1.":"Idézd meg a Megtévesztőt az 1. sávba.",
    "Summon the Healer into Lane 1.":"Idézd meg a Gyógyítót az 1. sávba.",
    "Select the Blader in Lane 1, attack, then target Lane 1.":"Válaszd ki az 1. sávban álló Pengeforgatót, indíts támadást, majd célozd meg az 1. sávot.",
    "Select the Brawler in Lane 1, attack, then target Lane 1.":"Válaszd ki az 1. sávban álló Ökölharcost, indíts támadást, majd célozd meg az 1. sávot.",
    "Your Shielder is in the center lane; the rival will attack the neighboring Life Zone. The Shielder redirects the attack.":"A Védelmeződ a középső sávban áll; az ellenfél a szomszédos Életzónát támadja. A Védelmező átirányítja rá a támadást.",
    "Your Shooter is in Lane 1 and an enemy Fighter is in the adjacent Lane 2. Attack that adjacent fighter.":"A Lövészed az 1. sávban áll, az ellenséges Harcos pedig a szomszédos 2. sávban. Támadd meg a szomszédos Harcost.",
    "Your Summoner’s Life Zone is empty. Summon it in Lane 1, then choose the matching-element Creature to become its Familiar.":"Az Idéződ Életzónája üres. Idézd meg az 1. sávba, majd válaszd ki az azonos elemű Lényt Familiárisként.",
    "An ally is already in Lane 1. Summon the Enchanter beside it in Lane 2; the ally gains +1 ATK.":"Egy szövetséges már az 1. sávban áll. Idézd meg mellé a Támogatót a 2. sávba; a szövetséges +1 támadást kap.",
    "An enemy Fighter faces your Trickster in Lane 1. Summon the Trickster there; the enemy loses 1 ATK.":"Az 1. sávban egy ellenséges Harcos áll a Megtévesztőddel szemben. Idézd meg oda a Megtévesztőt; az ellenséges Harcos 1 támadást veszít.",
    "Your Lane 1 Life Zone is empty. Summon the Healer there; its class ability restores that Life Zone.":"Az 1. sávod Életzónája üres. Idézd meg oda a Gyógyítót; szerepképessége feltölti az Életzónát.",
    "Your Blader is ready in Lane 1. Attack the opposing Fighter to see its +1 ATK while attacking.":"Az 1. sávban álló Pengeforgatód támadásra kész. Támadd meg a szemben álló Harcost, hogy lásd a támadáskor kapott +1 támadást.",
    "Your Brawler is ready in Lane 1 and the adjacent lanes are empty. Attack the opposing Fighter with its +1 ATK bonus.":"Az 1. sávban álló Ökölharcosod támadásra kész, a szomszédos sávok pedig üresek. Támadd meg a szemben álló Harcost a +1 támadás bónusszal.",
    "Click DO THE ACTION, then End Turn. Watch the rival attack your Fritz in Lane 1; your Shielder in Lane 2 intercepts and takes the attack.":"Kattints a HAJTSD VÉGRE gombra, majd a KÖR VÉGE gombra. Figyeld meg, ahogy az ellenfél megtámadja az 1. sávban álló Fritz-et; a 2. sávban lévő Védelmeződ átveszi a támadást.",
    "Standard decks must contain 20–40 gained cards.":"A Normál pakliknak 20–40 megszerzett kártyát kell tartalmazniuk.",
    "Vishnu can only be summoned while Peppermint is in your Fighter Zone.":"Vishnu csak akkor idézhető meg, ha Peppermint a Harcos zónádban van.",
    "Cooking needs 3 energy.":"A Főzéshez 3 Mana szükséges.",
    "Planting needs 2 energy.":"Az Ültetéshez 2 Mana szükséges.",
    "Planting needs an open fighter zone.":"Az Ültetéshez egy üres Harcos zóna szükséges.",
    "Medusa needs 1 energy.":"Medusának 1 Mana szükséges.",
    "There is no card left in the deck to reveal.":"Nincs több felfedhető kártya a pakliban.",
    "Academy Hall is now the shared field. Academy cards gain +1 attack while at least one Academy card is on the field.":"Az Akadémia Csarnoka közös Mezővé vált. Amíg legalább egy Akadémia kártya van a mezőn, az Akadémia kártyák +1 támadást kapnak.",
    "Island Paradise is now the shared field. Its fighters on both sides cannot be targeted, but do not defend their Life Zones.":"A Szigeti Paradicsom közös Mezővé vált. A két oldalon álló Harcosai nem jelölhetők ki célpontként, de nem védik az Életzónáikat.",
    "Toy Store is now the shared field. All 1-cost Fighters and Creatures on both sides gain +1 attack.":"A Játékbolt közös Mezővé vált. Mindkét oldalon az 1 Manába kerülő Harcosok és Lények +1 támadást kapnak.",
    "Cactus Creek is now the shared field. Wild West cards in Fighter Zones gain +1 attack during the opponent’s turn.":"A Kaktuszpatak közös Mezővé vált. Az ellenfél körében a Harcos zónákban álló Vadnyugat kártyák +1 támadást kapnak.",
    "Christmas Mall is now the shared field. Swap two fighters once per turn if one is Glacial.":"A Karácsonyi Bevásárlóközpont közös Mezővé vált. Körönként egyszer helyet cserélhetsz két Harcossal, ha egyikük Jég elemű.",
    "Blake needs an opposing fighter in the same lane.":"Blake képességéhez egy vele szemben álló ellenséges Harcos szükséges.",
    "Blake and the opposing fighter returned to their owners’ hands.":"Blake és a vele szemben álló Harcos visszakerült a tulajdonosaik kezébe.",
    "Avatar Gem needs 4 energy.":"Az Avatar Kristályhoz 4 Mana szükséges.",
    "Mana Potion restored up to 2 Mana, without exceeding this turn’s maximum.":"A Manaital legfeljebb 2 Manát töltött vissza, az erre a körre érvényes maximum túllépése nélkül.",
    "Health Potion needs an empty Life Zone and a card in your deck.":"A Gyógyitalhoz egy üres Életzóna és egy kártya szükséges a paklidban.",
    "Health Potion restored a Life Zone.":"A Gyógyital feltöltött egy Életzónát.",
    "Doll Chorus needs a Living Toy Creature in your Fighter Zones.":"A Babakórushoz egy Élő Játék lény szükséges a Harcos zónáid egyikében.",
    "Quick Draw needs an open Fighter Zone and a Wild West fighter in hand.":"A Gyorshúzáshoz egy üres Harcos zóna és egy Vadnyugat-harcos szükséges a kezedben.",
    "Locker Room needs 2 energy.":"Az Öltözőhöz 2 Mana szükséges.",
    "Clapster sent the top card of your deck to the Pandemonium Zone; the enemy had no cards to discard.":"Clapster a paklid legfelső kártyáját a Pandémonium zónába küldte; az ellenfélnek nem volt eldobható kártyája.",
    "Eggscythe returned to your hand.":"Eggscythe visszakerült a kezedbe.",
    "The rival has no card in hand for Sangrizo to destroy.":"Az ellenfél kezében nincs kártya, amelyet Sangrizo elpusztíthatna.",
    "Hopkin jumped in to defend the Life Zone.":"Hopkin közbelépett, hogy megvédje az Életzónát.",
    "The rival held Ride the Wave because no adjacent move would improve its formation.":"Az ellenfél megtartotta a Lovagold meg a hullámot kártyát, mert egy szomszédos áthelyezés sem javított volna a felállásán.",
    "Academy Hall is now the shared field.":"Az Akadémia Csarnoka lett a közös mező.",
    "Academy cards gain +1 attack while at least one Academy card is on the field.":"Az Akadémia kártyák +1 támadást kapnak, amíg legalább egy Akadémia kártya van a mezőn.",
    "Island Paradise is now the shared field.":"A Szigeti Paradicsom lett a közös mező.",
    "Its fighters on both sides cannot be targeted, but do not defend their Life Zones.":"A két oldalon álló harcosok nem célozhatók meg, de nem védik az Életzónáikat.",
    "Toy Store is now the shared field.":"A Játékbolt lett a közös mező.",
    "All 1-cost Fighters and Creatures on both sides gain +1 attack.":"Mindkét oldalon az 1 Manába kerülő Harcosok és Lények +1 támadást kapnak.",
    "Cactus Creek is now the shared field.":"A Kaktuszpatak lett a közös mező.",
    "Wild West cards in Fighter Zones gain +1 attack during the opponent’s turn.":"Az ellenfél körében a Harcos zónákban álló Vadnyugat-kártyák +1 támadást kapnak.",
    "Christmas Mall is now the shared field.":"A Karácsonyi bevásárlóközpont lett a közös mező.",
    "Swap two fighters once per turn if one is Glacial.":"Körönként egyszer helyet cserélhetsz két Harcossal, ha egyikük Jég elemű.",
    "No valid target for this effect.":"Ehhez a kártya képességhez nincs érvényes célpont.",
    "Academy Rick is protected from card effects.":"Academy Rick védett a kártya képességekkel szemben.",
    "Rick was summoned by Quick Draw.":"A Gyorshúzás megidézte Ricket.",
    "Cotton added Academy Hall to your hand.":"Cotton a kezedbe tette az Akadémia Csarnokát.",
    "Cotton could not find Academy Hall in your deck.":"Cotton nem találta az Akadémia Csarnokát a paklidban.",
    "Amethyst destroys the fighter opposite it.":"Amethyst elpusztítja a vele szemben álló Harcost.",
    "Frosty freezes the fighter opposite it for its next turn.":"Frosty a következő körére lefagyasztja a vele szemben álló Harcost.",
    "Ryota has no opposing fighter to destroy.":"Nincs ellenfél Harcos, akit Ryota elpusztíthatna.",
    "Ryota needs a card in your hand to discard.":"Ryotának szüksége van egy eldobható kártyára a kezedből.",
    "Ryota destroys an enemy fighter with a Solar explosion.":"Ryota Szoláris robbanással elpusztít egy ellenséges Harcost.",
    "Bandito can attack immediately.":"Bandito azonnal támadhat.",
    "Sangrizo needs 1 energy to use its effect.":"Sangrizo képességéhez 1 Mana szükséges.",
    "The rival has no card in hand for Sangrizo to destroy.":"Az ellenfél kezében nincs kártya, amelyet Sangrizo elpusztíthatna.",
    "Sangrizo destroyed a random card from the rival’s hand.":"Sangrizo elpusztított egy véletlenszerű kártyát az ellenfél kezéből.",
    "Dharma could not revive the chosen card because all Fighter Zones are occupied.":"Dharma nem tudta visszahozni a kiválasztott kártyát, mert minden Harcos zóna foglalt.",
    "Jet gained 1 attack.":"Jet +1 támadást kapott.",
    "Sageape was discarded to move a Glacial fighter.":"Sageape-et eldobtad, hogy elmozdíts egy Jég elemű Harcost.",
    "Purrnip destroyed a Life Zone and drew a card.":"Purrnip elpusztított egy Életzónát, és húzott egy kártyát.",
    "Hopkin jumped in to defend the Life Zone.":"Hopkin közbelépett, hogy megvédje az Életzónát.",
    "Brody gained 1 attack for destroying a card.":"Brody +1 támadást kapott egy kártya elpusztításáért.",
    "The rival held Ride the Wave because no adjacent move would improve its formation.":"Az ellenfél megtartotta a Lovagold meg a hullámot kártyát, mert egy szomszédos áthelyezés sem javítana a felállásán.",
    "Croaktail and Gummy each have 1 ATK. Summon Croaktail into Lane 1 by clicking its card and then the lane, or dragging it there. Croaktail will be ready to attack immediately. Aqua beats Ignis, so Croaktail gets +1 ATK for this attack.":"Croaktail és Gummy támadóereje egyaránt 1. Idézd meg Croaktailt az 1. sávba: kattints a kártyájára, majd a sávra, vagy húzd oda. Croaktail azonnal támadásra kész lesz. A Víz elem legyőzi a Tűz elemet, ezért Croaktail +1 támadást kap ehhez a támadáshoz.",
    "Croaktail and Gummy each have 1 ATK. Croaktail is ready to attack now. Aqua beats Ignis, so Croaktail gets +1 ATK for this attack. Click Croaktail, then Gummy in Lane 1 (or drag Croaktail onto Gummy).":"Croaktail és Gummy támadóereje egyaránt 1. Croaktail már támadhat. A Víz elem legyőzi a Tűz elemet, ezért Croaktail ehhez a támadáshoz +1 támadást kap. Kattints Croaktailra, majd az 1. sávban Gummyra, vagy húzd rá Croaktailt Gummyra.",
    "Croaktail is ready and softly pulsing. Click it, then click Gummy in the opposing Lane 1, or drag Croaktail onto Gummy. Both started at 1 ATK; Aqua beats Ignis, giving Croaktail +1 ATK for this attack.":"Croaktail támadásra kész, és finoman pulzál. Kattints rá, majd az ellenfél 1. sávjában Gummyra, vagy húzd rá Croaktailt Gummyra. Mindkét kártya 1-es támadóerővel kezdett; a Víz elem legyőzi a Tűz elemet, így Croaktail ehhez a támadáshoz +1 támadást kap.",
    "The fighters are cleared. Attack the rival Life Zone in Lane 1 with Aemi in your Lane 1.":"A Harcosok lekerültek a mezőről. A saját 1. sávodban álló Aemivel támadd meg az ellenfél 1. sávjának Életzónáját.",
    "Summon Ryota into Lane 1. Discard the extra card from your hand, then choose the rival fighter in Lane 1 for Ryota’s Solar explosion.":"Idézd meg Ryotát az 1. sávba. Dobj el egy másik kártyát a kezedből, majd válaszd ki az ellenfél 1. sávjában álló Harcosát Ryota Szoláris robbanásának célpontjául.",
    "Play Shopping from your hand. It costs 2 Mana, draws two cards, then goes to the Pandemonium Zone.":"Játssz ki egy Bevásárlás kártyát a kezedből. 2 Manába kerül, két kártyát húz, majd a Pandémonium zónába kerül.",
    "Play Academy Hall from your hand. It becomes the shared Field and boosts Academy cards while one is present.":"Játssz ki egy Akadémia Csarnoka kártyát a kezedből. Közös mezőkártyává válik, és erősíti az Akadémia kártyákat, amíg a mezőn van.",
    "All three middle Life Zones are empty. Attack the rival Main Life from your center-lane Shooter to finish the tutorial.":"Mindhárom középső Életzóna üres. A középső sávban álló Lövészeddel támadd meg az ellenfél Fő Életét az oktatóharc befejezéséhez.",
    "Academy Hall is active. Fritz and Bandito each started at 1 ATK; the field raises Academy Fritz to 2 ATK. Click Fritz, then attack Bandito in Lane 1 (or drag Fritz onto it).":"Az Akadémia Csarnoka aktív. Fritz és Bandito is 1-es támadóerővel kezdett; a mezőn lévő Akadémia Fritz támadóereje 2-re nőtt. Kattints Fritzre, majd támadd meg az 1. sávban álló Banditót, vagy húzd rá Fritzre.",
    "Brawlers gain attack when they have empty lane besides them. Coyote here gains one attack for the empty lane 2. Attack with him to continue.":"Az Ökölharcosok támadóereje nő, ha mellettük üres egy sáv. Coyote az üres 2. sáv miatt +1 támadást kap. Támadj vele a folytatáshoz.",
    "End your turn now to trigger the interception.":"Fejezd be a körödet, hogy a Védelmező közbelépjen.",
    "Select the Shooter in Lane 1, start an attack, then target Lane 2.":"Válaszd ki az 1. sávban álló Lövészt, indíts támadást, majd jelöld ki a 2. sávot.",
    "Summon the Summoner into Lane 1, then choose the matching Creature.":"Idézd meg az Idézőt az 1. sávba, majd válaszd ki az azonos elemű Lényt.",
    "Summon the Enchanter into Lane 2.":"Idézd meg a Támogatót a 2. sávba.",
    "Summon the Trickster into Lane 1.":"Idézd meg a Megtévesztőt az 1. sávba.",
    "Summon the Healer into Lane 1.":"Idézd meg a Gyógyítót az 1. sávba.",
    "Select the Blader in Lane 1, attack, then target Lane 1.":"Válaszd ki az 1. sávban álló Pengeforgatót, indíts támadást, majd jelöld ki az 1. sávot.",
    "Select the Brawler in Lane 1, attack, then target Lane 1.":"Válaszd ki az 1. sávban álló Ökölharcost, indíts támadást, majd jelöld ki az 1. sávot.",
    "Your Shielder is in the center lane; the rival will attack the neighboring Life Zone. The Shielder redirects the attack.":"A Védelmeződ a középső sávban áll; az ellenfél a szomszédos Életzónát fogja támadni. A Védelmező átirányítja rá a támadást.",
    "Your Shooter is in Lane 1 and an enemy Fighter is in the adjacent Lane 2. Attack that adjacent fighter.":"A Lövészed az 1. sávban áll, az ellenséges Harcos pedig a szomszédos 2. sávban. Támadd meg a szomszédos Harcost.",
    "Your Summoner’s Life Zone is empty. Summon it in Lane 1, then choose the matching-element Creature to become its Familiar.":"Az Idéződ Életzónája üres. Idézd meg az 1. sávba, majd válaszd ki az azonos elemű Lényt, hogy a Familiárisa legyen.",
    "An ally is already in Lane 1. Summon the Enchanter beside it in Lane 2; the ally gains +1 ATK.":"Egy szövetséges már az 1. sávban áll. Idézd meg mellé a Támogatót a 2. sávba; a szövetséges +1 támadást kap.",
    "An enemy Fighter faces your Trickster in Lane 1. Summon the Trickster there; the enemy loses 1 ATK.":"Az 1. sávban egy ellenséges Harcos áll a Megtévesztőddel szemben. Idézd meg oda a Megtévesztőt; az ellenséges Harcos 1 támadást veszít.",
    "Your Lane 1 Life Zone is empty. Summon the Healer there; its class ability restores that Life Zone.":"Az 1. sávod Életzónája üres. Idézd meg oda a Gyógyítót; a szerepképessége feltölti az Életzónát.",
    "Your Blader is ready in Lane 1. Attack the opposing Fighter to see its +1 ATK while attacking.":"Az 1. sávban álló Pengeforgatód támadásra kész. Támadd meg a szemben álló Harcost, hogy lásd a támadáskor kapott +1 támadást.",
    "Your Brawler is ready in Lane 1 and the adjacent lanes are empty. Attack the opposing Fighter with its +1 ATK bonus.":"Az 1. sávban álló Ökölharcosod támadásra kész, a szomszédos sávok pedig üresek. Támadd meg a szemben álló Harcost a +1 támadás bónusszal.",
    "Example card:":"Példakártya:",
    "Academy Hall is now the shared field. Academy cards gain +1 attack while at least one Academy card is on the field.":"Az Akadémia Csarnoka lett a közös mező. Az Akadémia kártyák +1 támadást kapnak, amíg legalább egy Akadémia kártya van a mezőn.",
    "Shopping drew 2 cards.":"A Bevásárlás 2 kártyát húzott.",
    "Play the Action or Field card named in the lesson.":"A leckében megnevezett Akció- vagy Mezőkártyát játszd ki.",
    "Summon only the highlighted card into the lane named in the message.":"Csak a kiemelt kártyát idézd meg az üzenetben megnevezett sávba.",
    "Choose the highlighted target in the lane named in the message.":"Az üzenetben megnevezett sávban válaszd ki a kiemelt célpontot.",
    "Wait for the tutorial to ask you to attack.":"Várd meg, amíg az oktatóharc támadásra kér.",
    "The tutorial is arranging the next practice move.":"Az oktatóharc előkészíti a következő gyakorlatot.",
    "Do the action shown in the center message before ending your turn.":"A köröd befejezése előtt hajtsd végre a középső üzenetben kért lépést.",
    "End your turn only when the tutorial asks you to.":"Csak akkor fejezd be a körödet, amikor az oktatóharc erre kér.",
    "Follow the instruction in the center bubble to continue.":"A folytatáshoz kövesd a középső üzenet utasítását.",
    "The two drawn cards have arrived in your hand. Shopping sends itself to the Pandemonium Zone.":"A két felhúzott kártya a kezedbe került. A Bevásárlás a Pandémonium zónába kerül.",
    'Deck library':'Paklik gyűjteménye','Card Shop':'Kártyabolt','Browse every card in each deck, including its transformation cards.':'Nézd végig az egyes paklik összes kártyáját, az átváltozáskártyákkal együtt.','All':'Összes','ALL DECKS':'ÖSSZES PAKLI','MAIN DECK':'FŐ PAKLI','ASCENDANCE DECK':'FELEMELKEDÉS PAKLI','ELEMENT':'ELEM','CLASS':'SZEREP','TYPE':'TÍPUS','SORT BY':'RENDEZÉS','Name · A–Z':'Név · A–Z','ATK · high to low':'Támadás · csökkenő','ATK · low to high':'Támadás · növekvő','Cost · high to low':'Mana · csökkenő','Cost · low to high':'Mana · növekvő','No cards match these filters.':'Nincs a szűrésnek megfelelő kártya.','No attack':'Nincs támadóereje','CARD SHOP · BOOSTER DISPLAY':'KÁRTYABOLT · KÁRTYACSOMAG','BOOSTER DISPLAY':'KÁRTYACSOMAG','OPEN 1 PACK':'1 CSOMAG NYITÁSA','OPEN 3 PACKS':'3 CSOMAG NYITÁSA','GUARANTEED SUPER RARE+':'LEGALÁBB SZUPER RITKA KÁRTYA GARANTÁLT','All available copies collected':'Minden elérhető példányt megszereztél','This display is empty.':'Ez a csomagkínálat kiürült.','DO THE ACTION':'HAJTSD VÉGRE','START TUTORIAL FIGHT':'OKTATÓHARC INDÍTÁSA','TUTORIAL FIGHT':'OKTATÓHARC','NEXT LESSON →':'KÖVETKEZŐ LECKE →','← BACK':'← VISSZA','VIEW TUTORIAL':'ÜZENET MEGTEKINTÉSE','Practice Fighter':'Gummy','Tutorial complete!':'Oktatóharc teljesítve!','Tutorial completion':'Oktatóharc teljesítése','Lesson':'Lecke','Diamonds':'Gyémánt','FAMILIAR:':'FAMILIÁRIS:','BATTLE RULE:':'HARC KÖZBEN:','ELEMENT ADVANTAGE':'ELEMI ELŐNY','ELEMENT MATCHUPS':'ELEMI PÁROSÍTÁSOK','ELEMENT CYCLE':'ELEMI KÖR','ARCANE CYCLE':'MÁGIKUS KÖR','ELEMENT ADVANTAGE · +1 ATK WHEN ATTACKING A WEAKER ELEMENT':'ELEMI ELŐNY · +1 TÁMADÁS GYENGÉBB ELEMŰ ELLENFÉL TÁMADÁSAKOR','Compare elements with the Fighter being attacked. Shooters use their target lane. Attacks on Life Zones do not receive this bonus.':'A támadás célpontjául választott Harcos eleme határozza meg az előnyt. A Lövészeknél a célpont sávjában álló Harcos elemét kell figyelembe venni. Az Életzónák elleni támadásért nem jár ez a bónusz.','Only the Life Zone your attack is allowed to reach is damaged. Shooter attacks can bypass fighters to reach the Life Zone directly opposite them.':'Csak az az Életzóna sérül, amelyet az adott támadással elérhetsz. A Lövészek a velük szemben lévő Életzónát akkor is támadhatják, ha Harcos áll előtte.','Tutorial practice card.':'Oktatókártya.','The two drawn cards have arrived in your hand. Shopping sends itself to the Pandemonium Zone.':'A két felhúzott kártya a kezedbe került. A Bevásárlás a Pandémonium zónába kerül.','Click DO THE ACTION, then End Turn. Watch the rival attack your Fritz in Lane 1; your Shielder in Lane 2 intercepts and takes the attack.':'Kattints a HAJTSD VÉGRE gombra, majd a KÖR VÉGE gombra. Figyeld meg, ahogy az ellenfél megtámadja az 1. sávban álló Fritz-et; a 2. sávban lévő Védelmeződ átveszi a támadást.'
  });
  Object.assign(translations,{
    "Tutorial complete!":"Az oktatóharc teljesítve!",
    "You earned 100 Diamonds for completing the tutorial.":"Az oktatóharc teljesítéséért 100 gyémántot kaptál.",
    "Tutorial complete. Your one-time 100 Diamond reward was already claimed.":"Az oktatóharc teljesítve. Az egyszeri 100 gyémántos jutalmat már korábban megszerezted.",
    "Owned":"Birtokolt",
    "Next Pack":"Következő csomag",
    "NEXT PACK":"KÖVETKEZŐ CSOMAG",
    "VIEW ALL PULLS":"ÖSSZES KÁRTYA MEGTEKINTÉSE",
    "cards revealed":"felfedett kártya",
    "BOOSTER PACK OPENED":"KÁRTYACSOMAG FELBONTVA",
    "3-PACK DISPLAY OPENED":"3 CSOMAG FELBONTVA",
    "Duplicate":"Duplikátum",
    "Collected":"Megszerzett",
    "NEW":"ÚJ",
    "All 3 packs are open. The bundle included a guaranteed Super Rare or Ultra Rare card.":"Mindhárom csomag felbontva. A csomag garantáltan tartalmazott legalább egy Szuperritka vagy Ultraritka kártyát.",
    "Cards were pulled from this display and will not be replaced.":"A kártyákat ebből a csomagkínálatból húztad, és nem kerülnek vissza.",
    "Familiar":"Familiáris",
    "Familiar for":"Familiárisa",
    "Zomby became Zoya’s Familiar.":"Zoya Familiárisa lett Zomby.",
    "Zomby became Zoya's Familiar.":"Zoya Familiárisa lett Zomby."
  });
  Object.assign(translations,{
    "no attack points":"nincs támadóereje",
    "No attack points":"Nincs támadóereje",
    "Action card":"Akciókártya",
    "Field card":"Mezőkártya",
    "SHIELDER INTERCEPT":"VÉDELMEZŐ KÖZBELÉPÉSE",
    "Attack is being redirected":"A támadás más célpontra terelődik",
    "The Shielder will intercept this attack. Do you still want to attack?":"A Védelmező átveszi ezt a támadást. Így is támadni szeretnél?",
    "CANCEL":"MÉGSE",
    "ATTACK ANYWAY":"TÁMADÁS MÉGIS",
    "Victory!":"Győzelem!",
    "The rival wins":"Az ellenfél győzött",
    "Loss":"Vereség",
    "DIAMONDS EARNED":"SZERZETT GYÉMÁNTOK",
    "You broke through the rival’s last life card.":"Áttörtél az ellenfél utolsó Életkártyáján.",
    "Your main life was broken. Give it another try.":"Elpusztították a Fő Életedet. Próbáld meg újra!",
    "You gave up. Choose Play Again to start a fresh battle.":"Feladtad a harcot. Válaszd az Újra lehetőséget egy új harchoz.",
    "Avatar Gem used":"Felhasznált Avatar Kristály",
    "Victory":"Győzelem",
    "Turns elapsed":"Eltelt körök",
    "Cards destroyed in battle":"A harcban elpusztított kártyák",
    "Life cards remaining":"Megmaradt Életkártyák",
    "Choose an enemy fighter":"Válassz egy ellenséges Harcost",
    "Choose one of your fighters":"Válassz egy saját Harcost",
    "Choose a card to discard":"Válassz ki egy eldobandó kártyát",
    "Discard a card":"Dobj el egy kártyát",
    "Discard one card from your hand, then choose a fighter to gain +1 attack.":"Dobj el egy kártyát a kezedből, majd válassz egy Harcost, amely +1 támadást kap.",
    "Choose one of your fighters to gain +1 attack.":"Válassz egy saját Harcost, amely +1 támadást kap.",
    "Choose a card to discard, then destroy an enemy fighter in a Solar explosion.":"Válassz ki egy eldobandó kártyát, majd pusztíts el egy ellenséges Harcost Szoláris robbanással.",
    "Choose one of your fighters. Replace it with a same-named Zodiac Guardian from your Transformation Deck.":"Válassz egy saját Harcost. Cseréld le az Átváltozás paklid azonos nevű Zodiákus Őrzőjére.",
    "Choose a Fighter or Creature in your Pandemonium Zone. At the start of your next turn, it returns to an open Fighter Zone if Dharma is still on the field.":"Válassz egy Harcost vagy Lényt a Pandémonium zónádból. A következő köröd kezdetén, ha Dharma még a mezőn van, visszatér egy üres Harcos zónába.",
    "Choose an adjacent ally. It cannot be targeted by attacks while Natsuki remains on the field, and it cannot defend its lane’s Life Zone.":"Válassz egy szomszédos szövetségest. Amíg Natsuki a mezőn van, az adott kártya nem támadható, de nem védi a sávjához tartozó Életzónát.",
    "Choose an adjacent Brawler. Croaktail will be destroyed to give it +1 attack.":"Válassz egy szomszédos Ökölharcost. Croaktail elpusztul, hogy +1 támadást adjon neki.",
    "Choose one of your fighters to destroy.":"Válassz egy saját Harcost, akit feláldozol.",
    "Choose an enemy fighter to destroy.":"Válassz egy ellenséges Harcost, akit elpusztítasz.",
    "Choose an enemy fighter that cannot move next turn.":"Válassz egy ellenséges Harcost, amely a következő körben nem mozoghat.",
    "Choose an enemy fighter to lose 1 attack until your next turn.":"Válassz egy ellenséges Harcost, amely 1 támadást veszít a következő körödig.",
    "Choose a Glacial fighter to attack on the turn it was summoned.":"Válassz egy Jég elemű Harcost, amely már a megidézése körében is támadhat.",
    "Choose a Glacial card in your hand to cost 1 less.":"Válassz egy Jég elemű kártyát a kezedből, amelynek költsége 1 Manával csökken.",
    "Choose an Academy card that costs 3 or 4 from your deck.":"Válassz egy 3 vagy 4 Manába kerülő Akadémia-kártyát a paklidból.",
    "Choose an Academy card costing 4 or less from your deck to add to your hand.":"Válassz egy legfeljebb 4 Manába kerülő Akadémia-kártyát a paklidból, és vedd a kezedbe.",
    "Choose a legal lane move.":"Válassz egy megengedett sávváltást.",
    "Choose a same-element Creature to become this fighter’s Familiar.":"Válassz egy azonos elemű Lényt, amely ennek a Harcosnak a Familiárisa lesz.",
    "Choose one of your fighters to return to your hand. Gain Mana equal to its cost.":"Válassz egy saját Harcost, és vedd vissza a kezedbe. A költségével megegyező mennyiségű Manát kapsz.",
    "Choose a Fighter that has a same-named card with a different title in your hand or deck.":"Válassz egy Harcost, amelynek azonos nevű, de más című kártyája a kezedben vagy a paklidban van.",
    "Choose an enemy fighter to return to its hand.":"Válassz egy ellenséges Harcost, amely visszakerül a tulajdonosa kezébe."
  });
  Object.assign(translations,{
    "Cooking":"Főzés",
    "Return a Fighter or Creature from your destroyed zone to your hand.":"Vedd vissza egy Harcosodat vagy Lényedet a Pandémonium zónádból a kezedbe.",
    "Planting: summon a Vegcritter":"Ültetés: Zöldségszerzet megidézése",
    "Choose a Vegcritter from your deck or destroyed zone and an open lane.":"Válassz egy Zöldségszerzetet a paklidból vagy a Pandémonium zónádból, majd egy üres sávot.",
    "Medusa · top card":"Medusa · pakli felső lapja",
    "The top card of your deck is revealed.":"Felfedjük a paklid legfelső kártyáját.",
    "Avatar Gem":"Avatar Kristály",
    "Choose a fighter whose Zodiac Guardian is in your Ascendance Deck. Egg will transform into a Zodiac creature matching that fighter’s element.":"Válassz egy Harcost, akinek Zodiákus Őrzője a Felemelkedés paklidban van. A Tojás a Harcos elemével egyező Zodiákus lénnyé alakul.",
    "Drinking Tea: quicken a Glacial ally":"Teázás: Jég elemű szövetséges felgyorsítása",
    "Choose a Glacial fighter to attack on the turn it was summoned.":"Válassz egy Jég elemű Harcost, amely már a megidézése körében támadhat.",
    "Merry Christmas! · choose a Glacial card":"Boldog karácsonyt! · Jég elemű kártya választása",
    "Search your deck for a Glacial card to add to your hand.":"Keress egy Jég elemű kártyát a paklidban, és vedd a kezedbe.",
    "Wedding Proposal · choose a pair":"Házassági ajánlat · pár választása",
    "Choose two adjacent Fighters or Transformation cards to each gain +1 attack.":"Válassz két szomszédos Harcost vagy Átváltozás-kártyát, amelyek mindegyike +1 támadást kap.",
    "Ride the Wave · choose a fighter":"Lovagold meg a hullámot · Harcos választása",
    "Move one of your fighters into an adjacent empty zone.":"Mozgasd az egyik Harcosodat egy szomszédos üres zónába.",
    "Ride the Wave · choose a lane":"Lovagold meg a hullámot · sáv választása",
    "Adjacent and empty":"Szomszédos és üres",
    "No Pain, No Gain · discard a card":"Nincs fájdalom, nincs nyereség · kártya eldobása",
    "No Pain, No Gain · choose a fighter":"Nincs fájdalom, nincs nyereség · Harcos választása",
    "Swim, Don’t Sink · choose an Aqua ally":"Ússz, ne süllyedj! · Víz elemű szövetséges választása",
    "Choose an Aqua Island Paradise fighter to ignore the Island Paradise field effect.":"Válassz egy Víz elemű Szigeti Paradicsom-harcost, aki figyelmen kívül hagyja a Szigeti Paradicsom mező képességét.",
    "Doll Chorus · choose a Living Toy":"Babakórus · Élő Játék-kártya választása",
    "Give a Living Toy fighter +1 attack.":"Adj +1 támadást egy Élő Játék-harcosnak.",
    "Wind-Up Toy · choose a Living Toy":"Felhúzható játék · Élő Játék-kártya választása",
    "Toy Capsule · choose a Living Toy":"Játékkapszula · Élő Játék-kártya választása",
    "Quick Draw · choose a fighter":"Gyorshúzás · Harcos választása",
    "Duelist’s Gambit · sacrifice":"Párbajhős csele · áldozat választása",
    "Duelist’s Gambit · rival":"Párbajhős csele · ellenfél választása",
    "Bounty Raid · choose a lane":"Fejvadászroham · sáv választása",
    "Destroy both fighters in this lane, if present":"Pusztítsd el az ebben a sávban álló mindkét Harcost, ha vannak ott.",
    "Root · pin an enemy":"Gyökér · ellenség mozgásképtelenné tétele",
    "Wanted Poster · mark a target":"Körözési plakát · célpont megjelölése",
    "Locker Room · choose a Fighter":"Öltöző · Harcos választása",
    "Locker Room · choose a card":"Öltöző · kártya választása",
    "Eggscythe: return a Dark card":"Eggscythe: Sötétség kártya visszavétele",
    "Christmas Mall: switch partners":"Karácsonyi bevásárlóközpont: Harcosok helycseréje",
    "Bearnardo: chill the cost":"Bearnardo: költség csökkentése",
    "Dimitri: draw an Academy card":"Dimitri: Akadémia-kártya húzása",
    "Zodiac Egg · awaken a creature":"Zodiákus Tojás · lény felébresztése",
    "Dharma: choose a card to revive":"Dharma: visszahozandó kártya választása",
    "Melodoll: return a Dark card":"Melodoll: Sötétség kártya visszavétele",
    "Teddy: discard a card":"Teddy: kártya eldobása",
    "Broomy: return a fighter":"Broomy: Harcos visszavétele",
    "Runny: choose an Academy card":"Runny: Akadémia-kártya választása",
    "Ready a fighter":"Harcos felkészítése",
    "Ryota: discard a card":"Ryota: kártya eldobása",
    "Choose an enemy fighter":"Ellenséges Harcos választása",
    "Brian: return an enemy fighter":"Brian: ellenséges Harcos visszavétele",
    "Fritz: revive Eggscythe":"Fritz: Eggscythe visszahozása",
    "Summoner: choose a Familiar":"Idéző: Familiáris választása",
    "Natsuki: protect an ally":"Natsuki: szövetséges védelme",
    "Croaktail: give up its life":"Croaktail: élet feláldozása",
    "Rebeccah: guide Dimitri":"Rebeccah: Dimitri irányítása",
    "Chase: boost a Brawler":"Chase: Ökölharcos megerősítése",
    "Zoya: return an Academy card":"Zoya: Akadémia-kártya visszavétele",
    "Steepod: slip away":"Steepod: kitérés",
    "Topaz & Diamond: glide across the floor":"Topaz és Diamond: átsiklás a mezőn",
    "Sageape: shift the ice":"Sageape: jégmozgatás",
    "Floatbite: tide of strength":"Floatbite: erőhullám",
    "Choose an adjacent Brawler to gain +1 attack.":"Válassz egy szomszédos Ökölharcost, amely +1 támadást kap.",
    "Choose a fighter that can attack this turn.":"Válassz egy Harcost, amely ebben a körben támadhat.",
    "Berry can return one of your other fighters to your hand.":"Berry visszaveheti egy másik Harcosodat a kezedbe.",
    "The Shielder will intercept this attack. Do you still want to attack?":"A Védelmező átveszi ezt a támadást. Így is támadni szeretnél?",
    "Choose a target":"Válassz célpontot",
    "Adjacent lanes":"Szomszédos sávok",
    "Lane":"Sáv",
    "Deck":"Pakli",
    "Hand":"Kéz",
    "Field":"Mező",
    "Life Zone":"Életzóna",
    "Pandemonium Zone":"Pandémonium zóna"
  });
  Object.assign(translations,{
    "Cooking needs 3 energy.":"A Főzéshez 3 Mana szükséges.",
    "Planting needs 2 energy.":"Az Ültetéshez 2 Mana szükséges.",
    "Planting needs an open fighter zone.":"Az Ültetéshez egy üres Harcos zóna szükséges.",
    "Medusa needs 1 energy.":"Medusának 1 Mana szükséges.",
    "There is no card left in the deck to reveal.":"Nincs több felfedhető kártya a pakliban.",
    "Blake needs an opposing fighter in the same lane.":"Blake képességéhez egy vele szemben álló ellenséges Harcos szükséges.",
    "Blake and the opposing fighter returned to their owners’ hands.":"Blake és a vele szemben álló Harcos visszakerült a tulajdonosaik kezébe.",
    "Avatar Gem needs 4 energy.":"Az Avatar Kristályhoz 4 Mana szükséges.",
    "Doll Chorus needs a Living Toy Creature in your Fighter Zones.":"A Babakórushoz egy Élő Játék-lény szükséges valamelyik Harcos zónádban.",
    "Quick Draw needs an open Fighter Zone and a Wild West fighter in hand.":"A Gyorshúzáshoz egy üres Harcos zóna és egy Vadnyugat-harcos szükséges a kezedben.",
    "Locker Room needs 2 energy.":"Az Öltözőhöz 2 Mana szükséges.",
    "The rival held Ride the Wave because no adjacent move would improve its formation.":"Az ellenfél megtartotta a Lovagold meg a hullámot kártyát, mert egyik szomszédos áthelyezés sem javított volna a felállásán.",
    "Choose a card in your hand to discard.":"Válassz ki egy kártyát a kezedből, amelyet eldobhatsz.",
    "Return a fighter":"Harcos visszavétele",
    "Choose another one of your fighters to return to your hand. Gain Mana equal to its cost.":"Válassz egy másik saját Harcost, és vedd vissza a kezedbe. A költségével megegyező mennyiségű Manát kapsz.",
    "Choose a Dark card in your Pandemonium Zone to return to your hand.":"Válassz egy Sötétség-kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Choose a different Dark card from your destroyed zone to return to your hand.":"Válassz egy másik Sötétség-kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Choose a card from your hand to discard.":"Válassz ki egy kártyát a kezedből, amelyet eldobhatsz.",
    "Choose a different-title card with the same name from your hand or deck.":"Válassz egy azonos nevű, de más című kártyát a kezedből vagy a paklidból.",
    "Choose an adjacent empty lane.":"Válassz egy szomszédos, üres sávot.",
    "Choose an adjacent ally to protect.":"Válassz egy szomszédos szövetségest, akit megvédesz.",
    "Once per turn, move one of your fighters to any empty Fighter Zone.":"Körönként egyszer mozgass egy saját Harcost bármelyik üres Harcos zónába.",
    "Once per turn, move Dimitri to an adjacent free lane.":"Körönként egyszer mozgasd Dimitrit egy szomszédos, üres sávba.",
    "The attack will be redirected to the Shielder.":"A támadás a Védelmezőre terelődik.",
    "Do you still want to attack?":"Így is támadni szeretnél?",
    "The Shielder will intercept this attack.":"A Védelmező átveszi ezt a támadást.",
    "Play Again":"Újra",
    "remaining":"megmaradt",
    "remaining cards":"megmaradt kártya",
    "No attack":"Nincs támadóereje",
    "cards revealed":"felfedett kártya",
    "Reveal":"Felfedés"
  });
  Object.assign(translations,{
    "Duelist's Gambit · sacrifice":"Párbajhős csele · áldozat választása",
    "Duelist's Gambit · rival":"Párbajhős csele · ellenfél választása",
    "Swim, Don't Sink · choose an Aqua ally":"Ússz, ne süllyedj! · Víz elemű szövetséges választása",
    "Swim, Don't Sink":"Ússz, ne süllyedj!",
    "Duelist's Gambit":"Párbajhős csele",
    "one of your own":"egy saját",
    "your own":"saját"
  });
  Object.assign(translations,{
    "Ryota unleashes a Solar explosion on the selected fighter.":"Ryota Szoláris robbanással támadja meg a kiválasztott Harcost.",
    "Both fighters were destroyed in the clash.":"Mindkét Harcos elpusztult az összecsapásban."
  });
  Object.assign(translations,{
    "Academy fighters, Candy Goblins, and familiar support cards.":"Akadémiai Harcosok, Cukor Koboldok és Familiárisokat támogató kártyák.",
    "One of every unique card across all decks. No copy limits!":"Minden pakli kártyájából egy-egy darab. Nincs korlát darabszámra!"
  });
  Object.assign(translations,{
    "Cooking":"Főzés",
    "Return a Fighter or Creature from your destroyed zone to your hand.":"Vedd vissza a Pandémonium zónádból egy Harcosodat vagy Lényedet a kezedbe.",
    "Planting: summon a Vegcritter":"Ültetés: Zöldségszerzet megidézése",
    "Choose a Vegcritter from your deck or destroyed zone and an open lane.":"Válassz egy Zöldségszerzetet a paklidból vagy a Pandémonium zónádból, majd jelölj ki egy üres sávot.",
    "Medusa · top card":"Medusa · pakli felső lapja",
    "The top card of your deck is revealed.":"Felfedjük a paklid legfelső kártyáját.",
    "Avatar Gem":"Avatar Kristály",
    "Choose one of your fighters. Replace it with a same-named Zodiac Guardian from your Transformation Deck.":"Válassz egy saját Harcost, és cseréld le az Átváltozás paklidban lévő, azonos nevű Zodiákus Őrzőre.",
    "Drinking Tea: quicken a Glacial ally":"Teázás: Jég elemű szövetséges felgyorsítása",
    "Choose a Glacial fighter to attack on the turn it was summoned.":"Válassz egy Jég elemű Harcost, amely már a megidézése körében is támadhat.",
    "Merry Christmas! · choose a Glacial card":"Boldog karácsonyt! · Jég elemű kártya választása",
    "Search your deck for a Glacial card to add to your hand.":"Keress egy Jég elemű kártyát a paklidban, és vedd a kezedbe.",
    "Wedding Proposal · choose a pair":"Házassági ajánlat · pár választása",
    "Choose two adjacent Fighters or Transformation cards to each gain +1 attack.":"Válassz két szomszédos Harcost vagy Átváltozás-kártyát; mindkettő +1 támadást kap.",
    "Ride the Wave · choose a fighter":"Lovagold meg a hullámot · Harcos választása",
    "Move one of your fighters into an adjacent empty zone.":"Mozgasd az egyik Harcosodat egy szomszédos, üres zónába.",
    "Ride the Wave · choose a lane":"Lovagold meg a hullámot · sáv választása",
    "No Pain, No Gain · discard a card":"Nincs fájdalom, nincs nyereség · kártya eldobása",
    "Discard one card from your hand, then choose a fighter to gain +1 attack.":"Dobj el egy kártyát a kezedből, majd válassz egy Harcost, amely +1 támadást kap.",
    "No Pain, No Gain · choose a fighter":"Nincs fájdalom, nincs nyereség · Harcos választása",
    "Choose one of your fighters to gain +1 attack.":"Válassz egy saját Harcost, amely +1 támadást kap.",
    "Swim, Don't Sink · choose an Aqua ally":"Ússz, ne süllyedj! · Víz elemű szövetséges választása",
    "Choose an Aqua Island Paradise fighter to ignore the Island Paradise field effect.":"Válassz egy Víz elemű Szigeti Paradicsom-harcost, aki figyelmen kívül hagyja a mező képességét.",
    "Doll Chorus · choose a Living Toy":"Babakórus · Élő Játék-kártya választása",
    "Give a Living Toy fighter +1 attack.":"Adj +1 támadást egy Élő Játék-harcosnak.",
    "Wind-Up Toy · choose a Living Toy":"Felhúzható játék · Élő Játék-kártya választása",
    "Return a Living Toy card from your Pandemonium Zone to your hand.":"Válassz egy Élő Játék-kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Toy Capsule · choose a Living Toy":"Játékkapszula · Élő Játék-kártya választása",
    "Search your deck for a Living Toy card to add to your hand.":"Keress egy Élő Játék-kártyát a paklidban, és vedd a kezedbe.",
    "Quick Draw · choose a fighter":"Gyorshúzás · Harcos választása",
    "Summon a Wild West fighter from your hand without paying its Mana cost.":"Idézz meg egy Vadnyugat-harcost a kezedből Mana-költség fizetése nélkül.",
    "Duelist's Gambit · sacrifice":"Párbajhős csele · áldozat választása",
    "Choose one of your fighters to destroy.":"Válassz egy saját Harcost, akit feláldozol.",
    "Duelist's Gambit · rival":"Párbajhős csele · ellenfél választása",
    "Choose an enemy fighter to destroy.":"Válassz egy ellenséges Harcost, akit elpusztítasz.",
    "Bounty Raid · choose a lane":"Fejvadászroham · sáv választása",
    "Destroy fighters in the same lane on both fields.":"Pusztítsd el mindkét mezőn az azonos sávban álló Harcosokat.",
    "Root · pin an enemy":"Gyökér · ellenséges Harcos lekötése",
    "Choose an enemy fighter that cannot move next turn.":"Válassz egy ellenséges Harcost, amely a következő körben nem mozoghat.",
    "Wanted Poster · mark a target":"Körözési plakát · célpont megjelölése",
    "Choose an enemy fighter to lose 1 attack until your next turn.":"Válassz egy ellenséges Harcost, amely 1 támadást veszít a következő köröd kezdetéig.",
    "Locker Room · choose a Fighter":"Öltöző · Harcos választása",
    "Choose a Fighter that has a same-named card with a different title in your hand or deck.":"Válassz egy Harcost, amelynek azonos nevű, de más című kártyája a kezedben vagy a paklidban van.",
    "Locker Room · choose a card":"Öltöző · kártya választása",
    "Eggscythe: return a Dark card":"Eggscythe: Sötétség-kártya visszavétele",
    "Choose a different Dark card from your destroyed zone to return to your hand.":"Válassz egy másik Sötétség-kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Christmas Mall: switch partners":"Karácsonyi bevásárlóközpont: Harcosok cseréje",
    "Swap two of your fighters. At least one must be Glacial.":"Cseréld fel két saját Harcosod helyét. Legalább egyikük Jég elemű legyen.",
    "Bearnardo: chill the cost":"Bearnardo: költségcsökkentés",
    "Choose a Glacial card in your hand to cost 1 less.":"Válassz egy Jég elemű kártyát a kezedből, amelynek költsége 1 Manával csökken.",
    "Dimitri: draw an Academy card":"Dimitri: Akadémia-kártya húzása",
    "Choose an Academy card that costs 3 or 4 from your deck.":"Válassz egy 3 vagy 4 Manába kerülő Akadémia-kártyát a paklidból.",
    "Zodiac Egg · awaken a creature":"Zodiákus Tojás · lény felébresztése",
    "Choose a fighter whose Zodiac Guardian is in your Ascendance Deck. Egg will transform into a Zodiac creature matching that fighter’s element.":"Válassz egy Harcost, akinek Zodiákus Őrzője a Felemelkedés paklidban van. A Zodiákus Tojás a Harcos elemével egyező Zodiákus lénnyé alakul.",
    "Dharma: choose a card to revive":"Dharma: visszahozandó kártya választása",
    "Choose a Fighter or Creature in your Pandemonium Zone. At the start of your next turn, it returns to an open Fighter Zone if Dharma is still on the field.":"Válassz egy Harcost vagy Lényt a Pandémonium zónádból. A következő köröd kezdetén, ha Dharma még a mezőn van, a kártya visszatér egy üres Harcos zónába.",
    "Melodoll: return a Dark card":"Melodoll: Sötétség-kártya visszavétele",
    "Choose a Dark card in your Pandemonium Zone to return to your hand.":"Válassz egy Sötétség-kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Teddy: discard a card":"Teddy: kártya eldobása",
    "Discard a card from your hand to give Teddy +1 attack.":"Dobj el egy kártyát a kezedből, hogy Teddy +1 támadást kapjon.",
    "Broomy: return a fighter":"Broomy: Harcos visszavétele",
    "Choose another one of your fighters to return to your hand. Gain Mana equal to its cost.":"Válassz egy másik saját Harcost, és vedd vissza a kezedbe. A költségével megegyező Manát kapsz.",
    "Runny: choose an Academy card":"Runny: Akadémia-kártya választása",
    "Choose an Academy card costing 4 or less from your deck to add to your hand.":"Válassz egy legfeljebb 4 Manába kerülő Akadémia-kártyát a paklidból, és vedd a kezedbe.",
    "Return a fighter":"Harcos visszavétele",
    "Berry can return one of your other fighters to your hand.":"Berry visszaveheti egy másik Harcosodat a kezedbe.",
    "Ready a fighter":"Harcos felkészítése",
    "Choose a fighter that can attack this turn.":"Válassz egy Harcost, amely ebben a körben támadhat.",
    "Ryota: discard a card":"Ryota: kártya eldobása",
    "Choose a card to discard, then destroy an enemy fighter in a Solar explosion.":"Válassz egy eldobandó kártyát, majd pusztíts el egy ellenséges Harcost Szoláris robbanással.",
    "Choose an enemy fighter":"Ellenséges Harcos választása",
    "Ryota unleashes a Solar explosion on the selected fighter.":"Ryota Szoláris robbanással támadja meg a kiválasztott Harcost.",
    "Brian: return an enemy fighter":"Brian: ellenséges Harcos visszavétele",
    "Choose an enemy fighter to return to its hand.":"Válassz egy ellenséges Harcost, amely visszakerül a tulajdonosa kezébe.",
    "Fritz: revive Eggscythe":"Fritz: Eggscythe visszahozása",
    "Choose an Eggscythe from your destroyed zone to return to your hand.":"Válassz ki egy Eggscythe kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Summoner: choose a Familiar":"Idéző: Familiáris választása",
    "This lane’s Life Zone is empty. Choose a same-element Creature to become this fighter’s Familiar.":"Ennek a sávnak az Életzónája üres. Válassz egy azonos elemű Lényt, hogy ennek a Harcosnak a Familiárisa legyen.",
    "Natsuki: protect an ally":"Natsuki: szövetséges védelme",
    "Choose an adjacent ally. It cannot be targeted by attacks while Natsuki remains on the field, and it cannot defend its lane’s Life Zone.":"Válassz egy szomszédos szövetségest. Amíg Natsuki a mezőn van, a kártya nem támadható, viszont nem védi a sávjához tartozó Életzónát.",
    "Croaktail: give up its life":"Croaktail: élet feláldozása",
    "Choose an adjacent Brawler. Croaktail will be destroyed to give it +1 attack.":"Válassz egy szomszédos Ökölharcost. Croaktail elpusztul, hogy +1 támadást adjon neki.",
    "Rebeccah: guide Dimitri":"Rebeccah: Dimitri irányítása",
    "Once per turn, move Dimitri to an adjacent free lane.":"Körönként egyszer mozgasd Dimitrit egy szomszédos üres sávba.",
    "Chase: boost a Brawler":"Chase: Ökölharcos megerősítése",
    "Choose an adjacent Brawler to gain +1 attack.":"Válassz egy szomszédos Ökölharcost, amely +1 támadást kap.",
    "Zoya: return an Academy card":"Zoya: Akadémia-kártya visszavétele",
    "Choose an Academy fighter on either field to return to its owner’s hand.":"Válassz egy Akadémia-harcost bármelyik mezőről, hogy visszakerüljön a tulajdonosa kezébe.",
    "Steepod: slip away":"Steepod: kitérés",
    "Move Steepod to an adjacent free lane once per turn.":"Körönként egyszer mozgasd Steepodot egy szomszédos üres sávba.",
    "Topaz & Diamond: glide across the floor":"Topaz és Diamond: átsiklás a mezőn",
    "Once per turn, move one of your fighters to any empty Fighter Zone.":"Körönként egyszer mozgasd az egyik Harcosodat bármelyik üres Harcos zónába.",
    "Sageape: shift the ice":"Sageape: jégmozgatás",
    "Discard Sageape to move a Glacial fighter to another free Fighter Zone.":"Dobd el Sageape-et, hogy egy Jég elemű Harcost egy másik üres Harcos zónába mozgass.",
    "Floatbite: tide of strength":"Floatbite: erőhullám",
    "Choose an adjacent Aqua Brawler to gain +1 attack.":"Válassz egy szomszédos Víz elemű Ökölharcost, amely +1 támadást kap."
  });
  Object.assign(translations,{
    "Blake needs an opposing fighter in the same lane.":"Blake csak olyan sávban használható, ahol vele szemben ellenséges Harcos áll.",
    "There is no card left in the deck to reveal.":"Nincs felfedhető kártya a paklidban.",
    "Cooking needs 3 energy.":"A Főzéshez 3 Mana szükséges.",
    "Planting needs 2 energy.":"Az Ültetéshez 2 Mana szükséges.",
    "Planting needs an open fighter zone.":"Az Ültetéshez szükség van egy szabad Harcos zónára.",
    "Medusa needs 1 energy.":"Medusának 1 Manára van szüksége.",
    "Avatar Gem needs 4 energy.":"Az Avatar Kristály használatához 4 Mana szükséges.",
    "Shopping drew 2 cards.":"A Bevásárlás 2 kártyát húzott.",
    "Doll Chorus needs a Living Toy Creature in your Fighter Zones.":"A Babakórushoz szükség van egy Élő Játék Lényre a Harcos zónáid egyikében.",
    "Quick Draw needs an open Fighter Zone and a Wild West fighter in hand.":"A Gyorshúzáshoz szükség van egy szabad Harcos zónára és egy Vadnyugat Harcosra a kezedben.",
    "The rival held Ride the Wave because no adjacent move would improve its formation.":"Az ellenfél megtartotta a Lovagold meg a hullámot kártyát, mert egyik szomszédos sávba sem érte volna meg áthelyezni a Harcosát.",
    "Sageape was discarded to move a Glacial fighter.":"Sageape-et eldobta, hogy áthelyezzen egy Jég elemű Harcost.",
    "Duelist's Gambit resolved, but no Wild West fighter remained to gain attack.":"A Párbajhős csele aktiválódott, de nem maradt Vadnyugat Harcos, amely támadást kaphatott volna.",
    "Amethyst destroys the fighter opposite it.":"Amethyst elpusztította a vele szemben álló Harcost.",
    "Ryota has no opposing fighter to destroy.":"Nincs ellenséges Harcos, akit Ryota elpusztíthatna.",
    "Ryota needs a card in your hand to discard.":"Ryotának szüksége van egy eldobható kártyára a kezedből.",
    "The rival has no card in hand for Sangrizo to destroy.":"Az ellenfélnek nincs kártya a kezében, amelyet Sangrizo elpusztíthatna.",
    "Frosty freezes the fighter opposite it for its next turn.":"Frosty lefagyasztja a vele szemben álló Harcost, aki a következő körében nem támadhat.",
    "Hopkin jumped in to defend the Life Zone.":"Hopkin közbelépett, hogy megvédje az Életzónát.",
    "Dharma could not revive the chosen card because all Fighter Zones are occupied.":"Dharma nem tudta visszahozni a kiválasztott kártyát, mert minden Harcos zóna foglalt.",
    "The top card of your deck is revealed.":"Felfedjük a paklid legfelső kártyáját.",
    "Choose a card to discard, then destroy an enemy fighter in a Solar explosion.":"Válassz egy kártyát, amit eldobsz, majd pusztíts el egy ellenséges Harcost Szoláris robbanással.",
    "Choose an enemy fighter to return to its hand.":"Válassz egy ellenséges Harcost, amely visszakerül a tulajdonosa kezébe.",
    "Choose an Academy fighter on either field to return to its owner’s hand.":"Válassz egy Akadémia Harcost bármelyik mezőről, és juttasd vissza a tulajdonosa kezébe.",
    "Choose a Dark card in your Pandemonium Zone to return to your hand.":"Válassz egy Sötétség elemű kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Choose a different Dark card from your destroyed zone to return to your hand.":"Válassz egy másik Sötétség elemű kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Choose another one of your fighters to return to your hand. Gain Mana equal to its cost.":"Válassz ki egy másik saját Harcost, vedd vissza a kezedbe, és kapj a költségével megegyező Manát.",
    "Choose an adjacent ally. It cannot be targeted by attacks while Natsuki remains on the field, and it cannot defend its lane’s Life Zone.":"Válassz egy szomszédos szövetségest. Amíg Natsuki a mezőn van, ezt a Harcost nem lehet támadással célba venni, de nem védi a sávja Életzónáját.",
    "Choose an adjacent Brawler. Croaktail will be destroyed to give it +1 attack.":"Válassz egy szomszédos Ökölharcost. Croaktail elpusztul, és a kiválasztott Harcos +1 támadást kap.",
    "Choose an adjacent Aqua Brawler to gain +1 attack.":"Válassz egy szomszédos Víz elemű Ökölharcost, amely +1 támadást kap.",
    "Choose an Aqua Island Paradise fighter to ignore the Island Paradise field effect.":"Válassz egy Víz elemű Szigeti Paradicsom Harcost, amely figyelmen kívül hagyja a mező képességét.",
    "Choose a Living Toy fighter to gain +1 attack.":"Válassz egy Élő Játék Harcost, amely +1 támadást kap.",
    "Return a Living Toy card from your Pandemonium Zone to your hand.":"Válassz egy Élő Játék kártyát a Pandémonium zónádból, és vedd vissza a kezedbe.",
    "Search your deck for a Living Toy card to add to your hand.":"Keress egy Élő Játék kártyát a paklidban, és vedd a kezedbe.",
    "Choose a Wild West fighter from your hand to summon without paying its Mana cost.":"Válassz egy Vadnyugat Harcost a kezedből, és idézd meg Mana-költség kifizetése nélkül.",
    "Choose an Academy card that costs 3 or 4 from your deck.":"Válassz egy 3 vagy 4 Manába kerülő Akadémia-kártyát a paklidból.",
    "Choose an Academy card costing 4 or less from your deck to add to your hand.":"Válassz egy legfeljebb 4 Manába kerülő Akadémia-kártyát a paklidból, és vedd a kezedbe.",
    "Choose a same-element Creature to become this fighter’s Familiar.":"Válassz egy azonos elemű Lényt, amely ennek a Harcosnak a Familiárisa lesz.",
    "Once per turn, move Dimitri to an adjacent free lane.":"Körönként egyszer mozgasd Dimitrit egy szomszédos, üres sávba.",
    "Move Steepod to an adjacent free lane once per turn.":"Körönként egyszer mozgasd Steepodot egy szomszédos, üres sávba.",
    "Once per turn, move one of your fighters to any empty Fighter Zone.":"Körönként egyszer mozgasd az egyik Harcosodat bármelyik üres Harcos zónába.",
    "Choose two adjacent fighters to swap. At least one must be Glacial.":"Válassz ki két szomszédos Harcost a helycseréhez. Legalább egyikük Jég elemű legyen.",
    "Choose a Glacial card in your hand to cost 1 less.":"Válassz egy Jég elemű kártyát a kezedből, amelynek költsége 1 Manával csökken.",
    "Discard Sageape to move a Glacial fighter to another free Fighter Zone.":"Dobd el Sageape-et, hogy egy Jég elemű Harcost egy másik szabad Harcos zónába mozgass.",
    "Choose an enemy fighter that cannot move next turn.":"Válassz egy ellenséges Harcost, aki a következő körben nem mozoghat.",
    "Choose an enemy fighter to lose 1 attack until your next turn.":"Válassz egy ellenséges Harcost, amely a következő köröd kezdetéig 1 támadást veszít.",
    "Choose an Academy card that costs 3 or 4 from your deck.":"Válassz egy 3 vagy 4 Manába kerülő Akadémia-kártyát a paklidból."
  });
  for(const [english,hungarian] of Object.entries(translations))glossary.set(english,hungarian);
  const originalText = new WeakMap();
  const lastTranslatedText = new WeakMap();
  const originalAttrs = new WeakMap();
  const lastTranslatedAttrs = new WeakMap();
  let language = localStorage.getItem('peppermint-battle-language') || 'en';
  function translateHistoryLine(text){
    const name=(value)=>reviseHungarian(glossary.get(value)||value);
    let m=text.match(/^Battle started · You: (.+?) · Enemy: (.+?)( · Standard)?\.$/);
    if(m)return 'Elkezdődött a harc. A te paklid: '+name(m[1])+'; az ellenfélé: '+name(m[2])+'.'+(m[3]?' Játékmód: Normál.':'');
    m=text.match(/^(You|Enemy): (?:Your )?turn began\.$/);
    if(m)return m[1]==='You'?'Elkezdődött a te köröd.':'Elkezdődött az ellenfél köre.';
    m=text.match(/^(You|Enemy): summoned (.+?)( from the Pandemonium Zone)?\.$/);
    if(m)return m[1]==='You'?(m[3]?'A Pandémonium zónából visszakerült és megidéződött: ':'Megidézted: ')+name(m[2])+'.':'Az ellenfél megidézte: '+name(m[2])+'.';
    m=text.match(/^(You|Enemy): activated (.+?)'s effect\.$/);
    if(m)return (m[1]==='You'?'Aktiváltad ':'Az ellenfél aktiválta ')+name(m[2])+' képességét.';
    m=text.match(/^(You|Enemy): activated (.+)\.$/);
    if(m)return (m[1]==='You'?'Kijátszottad: ':'Az ellenfél kijátszotta: ')+name(m[2])+'.';
    m=text.match(/^(You|Enemy): (.+?) attacked (.+)\.$/);
    if(m){let target=m[3].replace(/^Enemy's Main Life$/,'az ellenfél Fő Élete').replace(/^Your Main Life$/,'a te Fő Életed').replace(/^Enemy's Life Zone (\d+)$/,'az ellenfél $1. Életzónája').replace(/^Your Life Zone (\d+)$/,'a te $1. Életzónád').replace(/^Enemy's lane (\d+)$/,'az ellenfél $1. sávja').replace(/^Your lane (\d+)$/,'a te $1. sávod');if(target===m[3])target=name(target);return (m[1]==='You'?'Megtámadtad ':'Az ellenfél megtámadta ')+name(m[2])+' kártyával: '+target+'.';}
    m=text.match(/^(You|Enemy): in battle destroyed (.+)\.$/);
    if(m)return (m[1]==='You'?'Harcban elpusztítottad: ':'Az ellenfél harcban elpusztította: ')+name(m[2])+'.';
    m=text.match(/^(You|Enemy): (.+?)'s effect destroyed (.+)\.$/);
    if(m)return (m[1]==='You'?'Elpusztítottad ':'Az ellenfél elpusztította ')+name(m[3])+' kártyát '+name(m[2])+' képességével.';
    m=text.match(/^An effect destroyed (.+)\.$/);
    if(m)return 'Egy kártya képessége elpusztította: '+name(m[1])+'.';
    m=text.match(/^(.+) moved from lane (\d+) to lane (\d+)\.$/);
    if(m)return name(m[1])+' a '+m[2]+'. sávról a '+m[3]+'. sávra lépett.';
    m=text.match(/^(.+) and (.+) swapped lanes (\d+) and (\d+)\.$/);
    if(m)return name(m[1])+' és '+name(m[2])+' helyet cserélt a '+m[3]+'. és a '+m[4]+'. sávban.';
    m=text.match(/^(You|Enemy): Dharma revived (.+) from the Pandemonium Zone\.$/);
    if(m)return (m[1]==='You'?'Dharma visszahozta a mezőre: ':'Az ellenfél Dharmája visszahozta a mezőre: ')+name(m[2])+' (Pandémonium zóna).';
    return null;
  }
  function translateDynamic(text){
    const hname=(value)=>reviseHungarian(glossary.get(value)||value);
    let m=text.match(/^Choose one of your fighters\. Replace it with a same-named Zodiac Guardian from your (?:Transformation|Ascendance) Deck\.$/); if(m)return 'Válassz egy saját Harcost, majd cseréld le a Felemelkedés paklidban lévő, azonos nevű Zodiákus Őrzőre.';
    m=text.match(/^Choose a fighter that can attack this turn\.$/); if(m)return 'Válassz egy Harcost, aki ebben a körben támadhat.';
    const actor=text.match(/^(You|Enemy): (.+)$/);
    if(actor){const translated=translateDynamic(actor[2]);if(translated!==null)return (actor[1]==='You'?'Te: ':'Ellenfél: ')+translated;}
    m=text.match(/^Clapster sent a card to the Pandemonium Zone and discarded (.+) from the enemy’s hand\.$/); if(m)return 'Clapster a paklid legfelső kártyáját a Pandémonium zónába küldte, az ellenfél pedig eldobta a kezéből ezt a kártyát: '+hname(m[1])+'.';
    m=text.match(/^Clapster sent the top card of your deck to the Pandemonium Zone; the enemy had no cards to discard\.$/); if(m)return 'Clapster a paklid legfelső kártyáját a Pandémonium zónába küldte, de az ellenfélnek nem volt kártya a kezében, amit eldobhatott volna.';
    m=text.match(/^Teddy discarded (.+) and gained 1 attack\.$/); if(m)return 'Teddy eldobta ezt a kártyát: '+hname(m[1])+', és +1 támadást kapott.';
    m=text.match(/^(.+) discarded (.+) and gained 1 attack\.$/); if(m)return hname(m[1])+' eldobta ezt a kártyát: '+hname(m[2])+', és +1 támadást kapott.';
    m=text.match(/^No (.+) remains in the deck\.$/); if(m){const labels={'Cooking action':'Főzés nevű akciókártya','Potion card':'italkártya','Avatar Gem':'Avatar Kristály kártya','Zoya':'Zoya','Mind Wild West card':'Elme elemű Vadnyugat kártya','Island Paradise Creature':'Szigeti Paradicsom Lénykártya','Academy card with another element':'más elemű Akadémia-kártya'};return 'Nincs több '+(labels[m[1]]||hname(m[1]))+' a paklidban.';}
    m=text.match(/^(.+) drawn by effect\.$/); if(m)return 'Kártya képessége húzta: '+hname(m[1])+'.';
    m=text.match(/^(.+) drawn by Runny\.$/); if(m)return 'Runny felhúzta ezt a kártyát: '+hname(m[1])+'.';
    m=text.match(/^(.+) returned from the destroyed zone\.$/); if(m)return hname(m[1])+' visszakerült a Pandémonium zónából.';
    m=text.match(/^Broomy returned a fighter and restored (\d+) Mana\.$/); if(m)return 'Broomy visszavett egy Harcost a kézbe, és '+m[1]+' Manát adott vissza.';
    m=text.match(/^(.+) found no 1-cost Dark fighters to empower or Living Toy cards in hand\.$/); if(m)return m[1]+' nem talált 1 Manába kerülő Sötét Harcost, akit megerősíthetett volna, vagy Élő Játék kártyát a kézben.';
    m=text.match(/^The rival discarded Sageape to move (.+) into a stronger lane\.$/); if(m)return 'Az ellenfél eldobta Sageape-et, hogy erősebb sávba helyezze át: '+m[1]+'.';
    m=text.match(/^(.+) gained 1 attack from (.+)\.$/); if(m)return hname(m[1])+' +1 támadást kapott '+hname(m[2])+' képessége miatt.';
    m=text.match(/^(.+) loses 1 attack to (.+)\.$/); if(m)return hname(m[1])+' 1 támadást veszít '+hname(m[2])+' képessége miatt.';
    m=text.match(/^(.+) and the opposing fighter returned to their owners’ hands\.$/); if(m)return m[1]+' és az ellenfél Harcosa visszakerült a tulajdonosa kezébe.';
    m=text.match(/^(.+) and (.+) gained 1 attack\.$/); if(m)return m[1]+' és '+m[2]+' egyaránt +1 támadást kapott.';
    m=text.match(/^(.+) lost 1 attack until your next turn\.$/); if(m)return m[1]+' 1 támadást veszített a következő köröd kezdetéig.';
    m=text.match(/^(.+) now ignores the Island Paradise field effect\.$/); if(m)return m[1]+' figyelmen kívül hagyja a Szigeti Paradicsom mező képességét.';
    m=text.match(/^(.+) is rooted and cannot move next turn\.$/); if(m)return m[1]+' gyökérhez kötött, ezért a következő körben nem mozoghat.';
    m=text.match(/^(.+) lost 1 attack until your next turn\.$/); if(m)return m[1]+' 1 támadást veszített a következő köröd kezdetéig.';
    m=text.match(/^(.+) gained 1 attack for destroying a card\.$/); if(m)return m[1]+' +1 támadást kapott egy kártya elpusztításáért.';
    m=text.match(/^(.+) returned to its owner’s hand and its cost increased to (\d+) Mana\.$/); if(m)return m[1]+' visszakerült a tulajdonosa kezébe, a költsége pedig '+m[2]+' Manára nőtt.';
    m=text.match(/^(.+) is protected by (.+) in lane (\d+)\. The attack will be redirected to the Shielder\. Do you still want to attack\?$/); if(m){let target=m[1].replace(/^Main Life$/,'a Fő Életet').replace(/^Life Zone (\d+)$/,'az $1. Életzónát').replace(/ in lane (\d+)$/,' kártyát a $1. sávban');return target+' '+m[2]+' védi a '+m[3]+'. sávban. A támadás a Védelmezőre terelődik. Így is támadni szeretnél?';}
    m=text.match(/^(.+): reposition$/i); if(m)return m[1]+': áthelyezés';
    m=text.match(/^Both fighters were destroyed in the (.+) clash\.$/); if(m)return 'Mindkét Harcos elpusztult a '+m[1]+' összecsapásban.';
    m=text.match(/^Discard (.+) · gain \+1 attack$/i); if(m)return 'Eldobandó kártya: '+m[1]+' · Teddy +1 támadást kap';
    m=text.match(/^Adjacent lanes (\d+) and (\d+)$/i); if(m)return 'Szomszédos sávok: '+m[1]+' és '+m[2];
    m=text.match(/^Lane (\d+) · \+1 attack$/i); if(m)return m[1]+'. sáv · +1 támadás';
    m=text.match(/^Return to hand · gain (\d+) Mana$/i); if(m)return 'Vedd vissza a kezedbe · +'+m[1]+' Mana';
    m=text.match(/^Adjacent empty lane for (.+)$/i); if(m)return 'Szomszédos üres sáv ehhez: '+m[1];
    m=text.match(/^Choose an adjacent empty lane for (.+)\.$/i); if(m)return 'Válassz egy szomszédos, üres sávot '+m[1]+' számára.';
    m=text.match(/^Choose a different-title (.+) from your hand or deck to summon in lane (\d+)\.$/i); if(m)return 'Válaszd ki '+m[1]+' más című kártyáját a kezedből vagy a paklidból, és idézd meg a '+m[2]+'. sávba.';
    m=text.match(/^(.+) · Familiar for (.+)$/i); if(m)return 'Familiáris: '+m[1]+' ('+m[2]+')';
    m=text.match(/^Life cards remaining \((\d+)\)$/i); if(m)return 'Megmaradt Életkártyák ('+m[1]+')';
    m=text.match(/^Turns elapsed \((\d+)\)$/i); if(m)return 'Eltelt körök ('+m[1]+')';
    m=text.match(/^Cards destroyed in battle \((\d+)\)$/i); if(m)return 'A harcban elpusztított kártyák ('+m[1]+')';
    m=text.match(/^(.+) booster display unlocked!$/i); if(m)return (glossary.get(m[1])||m[1])+' kártyacsomag feloldva!';
    m=text.match(/^Pack (\d+) of (\d+) · Card (\d+) of (\d+)$/i); if(m)return m[1]+'. csomag / '+m[2]+' · '+m[3]+'. kártya / '+m[4];
    m=text.match(/^Opening booster pack · Card (\d+) of (\d+)$/i); if(m)return 'Csomagbontás · '+m[1]+'. kártya / '+m[2];
    m=text.match(/^Card (\d+) of (\d+)$/i); if(m)return m[1]+'. kártya / '+m[2];
    m=text.match(/^NEXT PACK · (\d+) OF (\d+)$/i); if(m)return 'KÖVETKEZŐ CSOMAG · '+m[1]+' / '+m[2];
    m=text.match(/^(\d+) cards revealed$/i); if(m)return m[1]+' felfedett kártya';
    m=text.match(/^(\d+) duplicates converted$/i); if(m)return m[1]+' duplikátum átváltva';
    m=text.match(/^Owned (\d+) · In deck (\d+) \/ (\d+)$/i); if(m)return 'Birtokolt: '+m[1]+' · Pakliban: '+m[2]+' / '+m[3];
    m=text.match(/^(.+) became (.+)[’']s Familiar\.$/); if(m)return hname(m[1])+' '+hname(m[2])+' Familiárisa lett.';
    m=text.match(/^Summon Ryota into Lane 1\. Discard the extra card from your hand, then choose (.+) in Lane 1 for Ryota’s Solar explosion\.$/); if(m)return 'Idézd meg Ryotát az 1. sávba. Dobj el egy másik kártyát a kezedből, majd válaszd ki Ryota Szoláris robbanásának célpontjául az 1. sávban álló '+m[1]+'-t.';

    m=text.match(/^(.+)[’']s Familiar was destroyed with its owner\.$/); if(m)return hname(m[1])+' Familiárisa is elpusztult a tulajdonosával együtt.';
    m=text.match(/^Christmas Mall repositioned (.+) and (.+) for a stronger formation\.$/); if(m)return 'A Karácsonyi Bevásárlóközpont átrendezte '+hname(m[1])+' és '+hname(m[2])+' helyét, hogy erősebb alakzatot hozzon létre.';
    m=text.match(/^(.+) was destroyed with its owner’s? Familiar\.$/); if(m)return m[1]+' Familiárisa is megsemmisült a tulajdonosával együtt.';
    m=text.match(/^(.+) earned 100 Diamonds for completing the tutorial\.$/); if(m)return 'Az oktatóharc teljesítéséért 100 gyémántot kaptál.';
    m=text.match(/^Tutorial complete\. Your one-time 100 Diamond reward was already claimed\.$/); if(m)return 'Az oktatóharc teljesítve. Az egyszeri 100 gyémántos jutalmat már korábban megszerezted.';
    m=text.match(/^(\d+) cards?$/i); if(m)return m[1]+' kártya';
    m=text.match(/^(\d+) cards? per pack · ([\d, .]+) cards? remain in this display$/i); if(m)return m[1]+' kártya csomagonként · '+m[2]+' kártya maradt ebben a csomagkínálatban';
    m=text.match(/^(\d+) copies remain in this display$/i); if(m)return 'Még '+m[1]+' példány van ebből a kártyából';
    m=text.match(/^(\d+) left · collected$/i); if(m)return m[1]+' példány van még · már megszerezted';
    m=text.match(/^(\d+) left$/i); if(m)return m[1]+' példány van még';
    m=text.match(/^Max (\d+) in deck$/i); if(m)return 'Legfeljebb '+m[1]+' példány a pakliban';
    m=text.match(/^TUTORIAL FIGHT · LESSON (\d+) \/ (\d+)$/i); if(m)return 'OKTATÓHARC · '+m[1]+'. LECKE / '+m[2];
    m=text.match(/^Defeat the (.+) deck in Standard to unlock this display\.$/); if(m)return 'Győzd le a(z) '+(glossary.get(m[1])||m[1])+' paklit Normál módban a csomag feloldásához.';
    m=text.match(/^(.+) gained 1 attack\.$/); if(m)return m[1]+' +1 támadást kapott.';
    m=text.match(/^(.+) can attack this turn\.$/); if(m)return m[1]+' ebben a körben támadhat.';
    m=text.match(/^(.+) can act on its first turn\.$/); if(m)return m[1]+' már az első körében cselekedhet.';
    m=text.match(/^(.+) was added to your hand\.$/); if(m)return hname(m[1])+' a kezedbe került.';
    m=text.match(/^(.+) drawn by (.+)\.$/); if(m)return hname(m[2])+' felhúzta: '+hname(m[1])+'.';
    m=text.match(/^(.+) returned to your hand\.$/); if(m)return hname(m[1])+' visszakerült a kezedbe.';
    m=text.match(/^(.+) transformed into a Zodiac Guardian\.$/); if(m)return m[1]+' Zodiákus Őrzővé alakult.';
    m=text.match(/^Zodiac Egg transformed into (.+); (.+) remains in play\.$/); if(m)return 'A Zodiákus Tojás átalakult: '+hname(m[1])+'. '+hname(m[2])+' a mezőn marad.';
    m=text.match(/^(.+) was summoned by (Planting|Quick Draw)\.$/); if(m)return m[2]==='Planting'?hname(m[1])+' megidéződött az Ültetés képességgel.':hname(m[1])+' megidéződött a Gyorshúzás képességgel.';
    m=text.match(/^(.+) is protected by Natsuki\.$/); if(m)return 'Natsuki megvédi ezt a Harcost: '+hname(m[1])+'.';
    m=text.match(/^(.+) gained permanent \+1 attack\.$/); if(m)return m[1]+' végleg +1 támadást kapott.';
    m=text.match(/^(.+) restored a life zone\.$/); if(m)return hname(m[1])+' feltöltött egy Életzónát.';
    m=text.match(/^(.+) returned to hand\.$/); if(m)return hname(m[1])+' visszakerült a kezedbe.';
    m=text.match(/^(.+) is rooted and cannot move yet\.$/); if(m)return m[1]+' gyökérhez kötött, ezért még nem mozoghat.';
    m=text.match(/^(.+) now costs (\d+) Mana\.$/); if(m)return m[1]+' mostantól '+m[2]+' Manába kerül.';
    m=text.match(/^(.+) returned to your hand through (.+)\.$/); if(m)return hname(m[2])+' visszajuttatta a kezedbe: '+hname(m[1])+'.';
    m=text.match(/^(.+) gained 1 attack from (.+)\.$/); if(m)return m[1]+' +1 támadást kapott '+m[2]+' képességétől.';
    m=text.match(/^(.+) gained permanent \+1 attack from (.+)\.$/); if(m)return m[1]+' végleg +1 támadást kapott '+m[2]+' képességétől.';
    m=text.match(/^(.+) loses 1 attack to (.+)\.$/); if(m)return m[1]+' 1 támadást veszít '+m[2]+' miatt.';
    m=text.match(/^(.+) sent (.+) from the deck to the Pandemonium Zone\.$/); if(m)return hname(m[1])+' a pakliból a Pandémonium zónába küldte: '+hname(m[2])+'.';
    m=text.match(/^(.+) destroyed a random card from the rival’s hand\.$/); if(m)return hname(m[1])+' elpusztított egy véletlenszerű kártyát az ellenfél kezéből.';
    m=text.match(/^(.+) destroyed a Life Zone and drew a card\.$/); if(m)return hname(m[1])+' elpusztított egy Életzónát, és húzott egy kártyát.';
    m=text.match(/^(.+) will return next turn if Dharma remains on the field and a lane is open\.$/); if(m)return hname(m[1])+' a következő körben visszatér, ha Dharma még a mezőn van, és van szabad Harcos zóna.';
    m=text.match(/^(.+) was summoned by Planting\.$/); if(m)return hname(m[1])+' megidéződött az Ültetés képességgel.';
    m=text.match(/^Medusa revealed (.+)\.$/); if(m)return 'Medusa felfedte a pakli legfelső kártyáját: '+hname(m[1])+'.';
    m=text.match(/^The rival rode the wave to move (.+) into a stronger lane\.$/); if(m)return 'Az ellenfél a Lovagold meg a hullámot képességgel erősebb sávba helyezte: '+hname(m[1])+'.';
    m=text.match(/^(.+) rode the wave to lane (\d+)\.$/); if(m)return hname(m[1])+' a Lovagold meg a hullámot képességgel a '+m[2]+'. sávba lépett.';
    m=text.match(/^(.+) was added to your hand\.$/); if(m)return hname(m[1])+' a kezedbe került.';
    m=text.match(/^(.+) returned from the Pandemonium Zone to your hand\.$/); if(m)return hname(m[1])+' visszakerült a Pandémonium zónából a kezedbe.';
    m=text.match(/^(.+) was summoned by Quick Draw\.$/); if(m)return 'A Gyorshúzás megidézte: '+hname(m[1])+'.';
    m=text.match(/^Bounty Raid cleared lane (\d+)\.$/); if(m)return 'A Fejvadászroham megtisztította a '+m[1]+'. sávot.';
    m=text.match(/^(.+) (.+) entered the field through Locker Room\.$/); if(m)return 'Az Öltöző képességével a mezőre került: '+hname(m[1])+' – '+hname(m[2])+'.';
    m=text.match(/^Cotton could not find Academy Hall in your deck\.$/); if(m)return 'Cotton nem talált Akadémia Csarnoka kártyát a paklidban.';
    m=text.match(/^Cotton added Academy Hall to your hand\.$/); if(m)return 'Cotton a kezedbe tette az Akadémia Csarnoka kártyát.';
    m=text.match(/^(.+) returned to hand\.$/); if(m)return hname(m[1])+' visszakerült a kezedbe.';
    m=text.match(/^(.+) returned to your hand through GaLacta\.$/); if(m)return 'GaLacta visszajuttatta a kezedbe: '+hname(m[1])+'.';
    m=text.match(/^(.+) Familiar was destroyed with its owner\.$/); if(m)return hname(m[1])+' Familiárisa is elpusztult a tulajdonosával együtt.';
    m=text.match(/^(.+) became (.+)[’']s Familiar\.$/); if(m)return hname(m[1])+' '+hname(m[2])+' Familiárisa lett.';
    m=text.match(/^(.+) restored a Life Zone\.$/); if(m)return hname(m[1])+' feltöltött egy Életzónát.';
    m=text.match(/^(.+) can attack immediately\.$/); if(m)return hname(m[1])+' azonnal támadhat.';
    m=text.match(/^(.+) jumped in to defend the Life Zone\.$/); if(m)return hname(m[1])+' közbelépett, és megvédte az Életzónát.';
    m=text.match(/^(.+) destroys a random card from the rival’s hand\.$/); if(m)return hname(m[1])+' elpusztított egy véletlenszerű kártyát az ellenfél kezéből.';
    m=text.match(/^(.+) returned from the destroyed zone to your hand\.$/); if(m)return hname(m[1])+' visszakerült a Pandémonium zónából a kezedbe.';
    m=text.match(/^(.+) sent (.+) from the deck to the Pandemonium Zone\.$/); if(m)return hname(m[1])+' a pakliból a Pandémonium zónába küldte: '+hname(m[2])+'.';
    return null;
  }
  function translate(value) {
    const trimmed=value.trim();
    if(language==='hu'){const history=translateHistoryLine(trimmed);if(history!==null)return value.replace(trimmed,history);}
    if (glossary.has(trimmed)) return value.replace(trimmed,language==='hu'?reviseHungarian(glossary.get(trimmed)):glossary.get(trimmed));
    if(language==='hu'){const dynamic=translateDynamic(trimmed);if(dynamic!==null)return value.replace(trimmed,dynamic);}
    let result=value;
    if(language==='hu'){
      result=result.replace(/Your Shooter is in Lane 1 and (.+) is in the adjacent Lane 2\. Attack \1\./g,(_,name)=>'A Lövészed az 1. sávban áll, '+name+' pedig a szomszédos 2. sávban. Támadd meg '+name+' kártyát.');
      result=result.replace(/(.+) is already in Lane 1\. Summon the Enchanter beside \1 in Lane 2; \1 gains \+1 ATK\./g,(_,name)=>name+' már az 1. sávban áll. Idézd meg mellé a Támogatót a 2. sávba; '+name+' +1 támadást kap.');
      result=result.replace(/(.+) faces your Trickster in Lane 1\. Summon the Trickster there; \1 loses 1 ATK\./g,(_,name)=>name+' a Megtévesztőddel áll szemben az 1. sávban. Idézd meg oda a Megtévesztőt; '+name+' 1 támadást veszít.');
      result=result.replace(/Your Blader is ready in Lane 1\. Attack (.+) to see its \+1 ATK while attacking\./g,(_,name)=>'Az 1. sávban álló Pengeforgatód támadásra kész. Támadd meg '+name+' kártyát, hogy lásd a támadáskor kapott +1 támadást.');
      result=result.replace(/Your Brawler is ready in Lane 1 and the adjacent lanes are empty\. Attack (.+) with its \+1 ATK bonus\./g,(_,name)=>'Az 1. sávban álló Ökölharcosod támadásra kész, a szomszédos sávok pedig üresek. Támadd meg '+name+' kártyát a +1 támadás bónusszal.');
    }
    if(language==='hu'){const phrases=[...glossary.entries()].filter(([en])=>en.length>10&&en.includes(' ')).sort((a,b)=>b[0].length-a[0].length);for(const [en,hu] of phrases)result=result.replaceAll(en,hu);}
    for (const [en,hu] of fragments) result=result.replace(new RegExp('\\b'+en+'\\b','gi'),hu);
    return language==='hu'?reviseHungarian(result):result;
  }
  function apply(root=document) {
    if(root.nodeType===Node.TEXT_NODE){if(!originalText.has(root)||(lastTranslatedText.has(root)&&root.nodeValue!==lastTranslatedText.get(root)))originalText.set(root,root.nodeValue);const translated=language==='hu'?translate(originalText.get(root)):originalText.get(root);if(root.nodeValue!==translated)root.nodeValue=translated;lastTranslatedText.set(root,translated);return;}
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()) { const n=walker.currentNode; if(!originalText.has(n)||(lastTranslatedText.has(n)&&n.nodeValue!==lastTranslatedText.get(n))) originalText.set(n,n.nodeValue); const translated=language==='hu'?translate(originalText.get(n)):originalText.get(n);if(n.nodeValue!==translated)n.nodeValue=translated;lastTranslatedText.set(n,translated); }
    const elements=root.nodeType===Node.ELEMENT_NODE?[root,...root.querySelectorAll('*')]:[...root.querySelectorAll('*')];
    for(const el of elements){for(const attr of ['aria-label','title','placeholder','alt'])if(el.hasAttribute(attr)){let saved=originalAttrs.get(el);if(!saved){saved={};originalAttrs.set(el,saved)}if(!(attr in saved))saved[attr]=el.getAttribute(attr);if(lastTranslatedAttrs.get(el)?.[attr]!==undefined&&el.getAttribute(attr)!==lastTranslatedAttrs.get(el)[attr])saved[attr]=el.getAttribute(attr);const translated=language==='hu'?translate(saved[attr]):saved[attr];if(el.getAttribute(attr)!==translated)el.setAttribute(attr,translated);const last=lastTranslatedAttrs.get(el)||{};last[attr]=translated;lastTranslatedAttrs.set(el,last);}}
  }
  function setLanguage(next){language=next==='hu'?'hu':'en';localStorage.setItem('peppermint-battle-language',language);document.documentElement.lang=language;const select=document.getElementById('language-select');if(select)select.value=language;apply();}
  window.peppermintLanguage={set:setLanguage,get:()=>language,translate};
  document.addEventListener('DOMContentLoaded',()=>{const header=document.querySelector('.main-menu-header>div');if(header&&!document.getElementById('language-select')){const label=document.createElement('label');label.className='menu-language-selector';label.innerHTML='<span>LANGUAGE / NYELV</span><select id="language-select" aria-label="Language / Nyelv"><option value="en">English</option><option value="hu">Magyar</option></select>';header.append(label);label.querySelector('select').addEventListener('change',e=>setLanguage(e.target.value));} setLanguage(language);});
  new MutationObserver(records=>{if(language!=='hu')return;for(const r of records){if(r.type==='characterData')apply(r.target);for(const node of r.addedNodes)if(node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE)apply(node);}}).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
})();














