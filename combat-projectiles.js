(() => {
  const attacks = {
    aemi: 'emberArrow', peppermint: 'bonbon', horatio: 'butterflies', zoya: 'rift',
    ryota: 'solarDisc', 'valhalla-ryota': 'lion', 'zodiac-guardian-ryota': 'phoenix',
    vishnu: 'veil', 'ww-wade': 'slug', 'ww-purrnip': 'seed', 'ww-sangrizo': 'ember',
    'ip-zodiac-aqua-kentaur': 'tidalArrow', 'ip-zodiac-psycho-chicken': 'plumes',
    'ip-octospray': 'ink', 'lt-clapster': 'spring', 'wb-ladyfeather': 'quills',
    'valhalla-barfy': 'foam', 'valhalla-mjolknir': 'thunderHammer',
    'ip-chase': 'surf', 'ip-chase-zodiac': 'current', 'ip-natsuki': 'bubble',
    'ip-coyote': 'crescent', 'ip-coyote-zodiac': 'twinBlades', 'academy-coyote': 'twinBlades',
    'academy-fritz': 'notes', 'ww-fritz': 'strings', 'lt-fritz': 'spools',
    'ww-academy-fritz': 'harp', 'lt-zodiac-fritz': 'mask',
    'academy-lynda': 'page', 'ww-academy-lynda': 'letters',
    'academy-sabrina': 'circuit', 'zodiac-guardian-sabrina': 'arc', 'valhalla-sabrina': 'plumes',
    den: 'rabbit', brewy: 'ampoule', amethyst: 'facets', 'lt-scribble': 'brush',
    'lt-melodoll': 'harp', 'ip-banaphin': 'tideFins', 'wb-steepod': 'steam', 'wb-rebeccah': 'petals',
  };
  const abilities = {
    peppermint: 'sugarDrops', aemi: 'page', horatio: 'leaves', zoya: 'chain',
    'ww-wade': 'spinningCase', 'ip-octospray': 'ink', 'valhalla-barfy': 'bubbles',
    'valkyries-mead': 'foam', 'valhalla-bar': 'foam', 'health-potion': 'drop',
    'mana-potion': 'ampoule', 'academy-grounds': 'letters', 'christmas-mall': 'ribbon',
    'wb-shopping': 'ribbon', 'wb-merry-christmas': 'snow', 'zodiac-egg': 'comet',
    'avatar-gem': 'facets', 'ww-root': 'roots', 'ww-planting': 'seed',
    'ip-swim-dont-sink': 'bubble', 'ww-duelists-gambit': 'spinningCase',
    'ww-quick-draw': 'slug', 'ww-bounty-raid': 'coin', 'ww-wanted-poster': 'page',
    'ip-ride-the-wave': 'surf', 'golden-egg-flatbread': 'coin', 'valhalla-mjolknir': 'arc',
    'lt-scribble': 'brush', 'lt-doll-chorus': 'strings', 'lt-wind-up-toy': 'spring',
    'lt-toy-capsule': 'capsule', 'lt-clapster': 'spools',
    'academy-dimitri': 'snow', 'wb-dimitri': 'icicles', 'wb-zodiac-dimitri': 'facets',
  };
  const byMotif = {
    bolt:'arc', wave:'surf', ring:'bubble', note:'notes', echo:'strings', veil:'veil', pen:'brush', book:'page',
    heart:'bubbles', drop:'drop', flame:'ember', feather:'plumes', staff:'comet', flask:'ampoule',
    gem:'facets', sun:'solarDisc', star:'comet', orbit:'bubbles', shatter:'facets', shield:'facets', pot:'steam',
    leaf:'leaves', root:'roots', thorn:'seed', petal:'petals', whirl:'ribbon', steam:'steam', leap:'ribbon',
    coil:'current', fin:'tideFins', wing:'plumes', chain:'chain', portal:'rift', eye:'rift', moon:'crescent',
    ink:'ink', ice:'snow', icicle:'icicles', mask:'mask', sword:'twinBlades', scythe:'crescent', rapier:'quills',
    clap:'spring', piston:'spring', spring:'spring', box:'capsule', egg:'capsule', candy:'sugarDrops',
    cup:'foam', crown:'letters', lion:'lion', rabbit:'rabbit', gift:'ribbon', stitch:'spools', target:'coin',
    shot:'slug', hammer:'thunderHammer', stamp:'coin', arch:'letters', mud:'seed', crescent:'crescent',
  };
  const flightPaths = {
    emberArrow:[0,4,'ember'], tidalArrow:[0,8,'water'], slug:[0,23,'smoke'], spinningCase:[.22,125,'sparks'],
    bonbon:[.31,36,'drops'], sugarDrops:[.32,26,'drops'], surf:[.31,13,'water'], current:[.38,47,'water'],
    foam:[.30,36,'drops'], drop:[.26,26,'drops'], bubbles:[.34,22,'drops'], bubble:[.31,17,'drops'],
    seed:[.37,94,'leaves'], leaves:[.36,69,'leaves'], petals:[.42,81,'leaves'], roots:[.27,55,'leaves'],
    ribbon:[.35,65,'silk'], veil:[.32,52,'smoke'], rift:[.20,46,'smoke'], ink:[.26,59,'drops'],
    arc:[.055,7,'charge'], circuit:[.11,30,'charge'], thunderHammer:[.14,230,'charge'],
    icicles:[.08,15,'frost'], snow:[.25,83,'frost'], facets:[.25,74,'frost'],
    butterflies:[.43,31,'silk'], quills:[.11,36,'silk'],
    rabbit:[.26,46,'silk'], solarDisc:[.22,72,'ember'], lion:[.18,12,'ember'],
    notes:[.41,72,'silk'], harp:[.28,52,'silk'], strings:[.24,16,'silk'],
  };

  function profile(card, kind, lead, mark, seed) {
    const custom = kind === 'strike' ? attacks[card.id] : abilities[card.id];
    const form = custom || (kind === 'strike' ? byMotif[lead] || byMotif[mark] : byMotif[mark] || byMotif[lead]) || 'comet';
    const [curve, rotation, wake] = flightPaths[form] || [.20,53,'sparks'];
    return { form, curve, swing: rotation * (seed & 1 ? -1 : 1), wake, seed };
  }

  // The base silhouette is authored per form. Proportions, cut lines and satellites make each card/cue
  // recognisable in motion even where two cards share a material or type of weapon.
  function drawing(spec, material, colors) {
    const {fill,accent,highlight}=colors;
    const path = (d, color, rim = 'none', weight = 1) =>
      `<path d="${d}" fill="${color}" stroke="${rim}" stroke-width="${weight}" stroke-linecap="round" stroke-linejoin="round"/>`;
    const orb = (cx,cy,rx,ry,palette) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${palette}"/>`;
    const group = (transform, contents) => `<g transform="${transform}">${contents}</g>`;
    const collect = (n, fn) => Array.from({ length:n },(_,i)=>fn(i)).join('');
    const {form,seed}=spec;
    const face=fill(material==='candy'?'sweets':material==='ink'||material==='dark'?'shade':
      material==='water'?'liquid':material==='ice'?'ice':material==='growth'?'leaf':
      material==='steel'?'silver':material==='earth'?'wood':'core');
    const light=material==='candy'?'#ffe1f5':highlight;
    const hi='#fff9f0d9';
    const rim=form==='ink'?accent:light;
    const index=seed%13;
    const spans=10+((seed>>>5)%10);
    const facet = (x,y,r,s) => group(`translate(${x} ${y}) rotate(${r}) scale(${s})`,
      path('M-14 0L-3-12 9-7 13 2 2 12Z',face,rim,.8)+path('M-3-12L1 1 13 2 2 12 1 1-14 0Z',hi));
    const curl=(label)=>{
      if(label==='surf')return 'M-53 17C-26 18-27-20-2-29C15-35 38-31 45-13C35-22 16-23 10-8C5 13 37 22 53 8C46 25 26 33 5 29C-7 27-17 18-21 13C-28 22-42 26-53 17Z';
      if(label==='current')return 'M-54 8C-9-27 17-30 34-16C52 0 32 24 7 22C25 13 31 0 21-7C13-13-6-7-23 5C-38 20-44 24-54 8Z';
      if(label==='tideFins')return 'M-50 16Q-21 8-14-27Q-8-37 3-35C7-16 28 1 48 11Q26 27 6 11Q-19 39-50 16Z';
      if(label==='ribbon'||label==='steam')return 'M-57 1C-31 18-32-22-8-20C9-15 18 18 42 8C24 32-4 19-16 1C-25-10-32 33-57 1Z';
      return 'M-54 14C-13 27 19 1 47-28C33 21 3 39-54 14Z';
    };
    let body='';
    switch(form) {
      case 'emberArrow':
        body=path('M-58 3L19-2 17-12 56-1 18 12 20 3-58 7Z',fill('gold'),rim,1.2)+
          path('M-57 1L-66-13-45-6-35 1M-62 7L-68 18-43 12-34 5',fill('flame'),'#ffe0a0',.85)+
          path('M18 1L49-2M-53 4L4 2','none',hi,1);
        break;
      case 'tidalArrow':
        body=path('M-55 2Q-15-3 23-3L31-16 29-5 49-12 42-2 58 0 42 3 49 12 29 7 31 17 21 4Q-16 6-55 5Z',fill('ice'),rim,.95)+
          path('M-53 4Q-36-27-21-10Q-31-7-40 0Q-34 9-14 10Q-41 20-53 4Z',fill('liquid'),light,.9)+
          path('M-44 2L43 0','none',hi,1.5);
        break;
      case 'bonbon':
        body=orb(-2,0,22,20,fill('sweets'))+path('M-17-5C-19-13-10-16-5-15Q3-13-1-11Q-10-14-14-5Z',hi)+
          path('M-49 2Q-34-11-19-8L-20 10Q-32 9-49 2Z',fill('syrup'),'#ffc9ee',.8)+
          path('M14-10Q26 2 10 15','none','#ffdeef99',2.2);
        break;
      case 'slug': case 'spinningCase':
        body=path('M-31-11H12Q31-11 42 0Q32 12 10 12H-31L-40 7V-6Z',fill('gold'),rim,1.2)+
          path('M-35-10H-24V11H-35L-39 6V-6Z',fill('leather'),hi,.74)+
          path('M-13-8L-12 9M4-7Q22-8 31-2','none',hi,1.8)+
          (form==='spinningCase'?orb(-39,1,6,8,fill('shade')):'');
        break;
      case 'surf': case 'current': case 'tideFins': case 'ribbon': case 'steam': case 'crescent': case 'twinBlades':
        body=path(curl(form),form==='surf'||form==='current'?fill('liquid'):face,rim,1.2)+
          path('M-47 14Q-29 22-8 8T32-12M-22 23Q-8 19 0 18','none',hi,1.7)+
          (form==='twinBlades'?group('translate(-12 -12) rotate(-30) scale(.69)',path(curl('crescent'),face,rim,1.2)):'');
        break;
      case 'snow': case 'icicles': case 'facets':
        body=collect(form==='snow'?6:form==='facets'?5:3,i=>facet((i-2)*16,(i%2?-1:1)*(spans+i*2),
          form==='icicles'?12+i*5:17+(index*i)%60, .57+i*.13))+
          group(form==='icicles'?'scale(2.1 .8)':'scale(1.54 1.45)',facet(3,0,index,1));
        break;
      case 'arc': case 'circuit':
        body=path(`M-59 6L-37-4-28 1-16-${spans} 0-6 9-${spans+8} 13-5 45-10 51 0 25 1 20 14 12 5 3 15-9 3-26 10-33 4Z`,fill('ice'),rim,1.1)+
          path('M-46 2L-33-13-22-15M6-5L-3-19 8-25M32 1L31 11 38 17M-30 6L-22 17-10 15','none',hi,1.35)+
          (form==='circuit'?collect(4,i=>orb(i*19-28,i%2?13:-14,2.5,2.5,fill('core'))):'');
        break;
      case 'thunderHammer':
        body=path('M-53-5H18L15 5H-53Z',fill('wood'),rim,1)+
          path('M10-27L19-33 48-31 56-21 54 23 46 31 18 29 10 21Z',fill('silver'),rim,1.3)+
          path('M15-23L48-24M18 22L48 23M27-13L36-17 32-3 42-5 28 15 32 3 23 3Z','none',hi,2.1)+
          path('M-46 17L-26 6-10 15 7 5M-34-14L-23-5-5-16 14-12','none',rim,1.6);
        break;
      case 'butterflies': case 'plumes': case 'quills':
        body=collect(form==='butterflies'?3:4,i=>group(`translate(${i*17-26} ${(i%2?-1:1)*spans}) rotate(${i*16-20}) scale(${.78+i*.08})`,
          form==='butterflies'?path('M0 2Q-32-17-18-26Q-10-30 0-6Q13-29 24-26Q39-20 3 4Q13 10 10 17Q5 22 0 7Q-6 24-13 14Q-16 8 0 2Z',fill('core'),rim,1.1)+
          path('M0 4L10-17M0 4L-10-14M-1 3L2-3','none',hi,.8)
          :path(form==='quills'?'M-34 8Q-9 20 32-11L21-12 32-17L12-21Q-8-18-18-4L-24-1Z':'M-27 10Q-15 0-6-16Q14-26 26-15Q16 10-4 9L-21 15Z',face,rim,.9)+
          path('M-23 12L21-15M-8 3L-8-7M1-2L9 0M8-7L6-14','none',hi,.95)));
        break;
      case 'leaves': case 'petals': case 'seed': case 'roots':
        body=collect(form==='seed'?4:5,i=>group(`translate(${i*15-34} ${(i%2?-1:1)*spans*.68}) rotate(${i*22-43})`,
          path(form==='petals'?'M-22 3Q-25-19 4-18Q25-7 18 13Q-2 21-22 3Z':'M-26 7Q-24-15 23-17Q19 12-9 16Z',form==='petals'?face:fill('leaf'),rim,1.1)+
          path('M-19 9L17-12M-8 3L-10-7M1-2L7 5','none',hi,.9)))+
          (form==='roots'?path('M-52 25Q-47-7-18 17T44-3M-32 8L-30-15M10 17L21 24','none',fill('wood'),4.5):'');
        break;
      case 'ink': case 'veil': case 'rift':
        body=path(`M-55 2C-35-${spans+9}-25-3-20-15C-17-36 15-27 19-${spans}C49-23 53 3 31 10C34 29 7 28-5 16C-29 36-62 20-44 9Z`,fill('shade'),rim,1.25)+
          path(form==='rift'?'M-30 14C-4-5 4-33 31-15C41-3 15 17-17 16Q8 7 22-10':'M-37 7Q-23-7-9-12Q0-7-15 1Q-12 9-22 11Z','none',light,2.2)+
          orb(13,-5,6,4,fill('mist'));
        break;
      case 'notes': case 'strings': case 'harp':
        body=collect(form==='strings'?5:4,i=>group(`translate(${i*19-31} ${(i%2?1:-1)*(spans+i*2)/2}) rotate(${i*18-22})`,
          path(form==='notes'?'M0 5V-17Q12-16 19-9L18-5Q12-10 4-10V7Q1 16-10 13Q-20 7-10 4Z':'M-13 14C4 5-11-12 7-25C4-13 16-4 18-3C-1-7 14 15-13 14Z',face,rim,1.15)+
          path('M-6 9Q-1 8 0 3','none',hi,1.25)));
        break;
      case 'spools': case 'spring': case 'chain': case 'capsule': case 'ampoule':
        body=form==='capsule'||form==='ampoule'?
          path('M-35-13H21Q43-10 43 0T21 16H-35L-44 8V-7Z',fill('glass'),rim,1.25)+
          path('M-34-11V12H-43V-11ZM-27 8Q-1-10 36 5Q30 14-1 14Z',fill(form==='ampoule'?'liquid':'gold'),rim,1.2)+
          path('M-25-6H18','none',hi,1.9)
          :collect(4,i=>group(`translate(${i*20-31} ${i%2?-5:5}) rotate(${i%2?31:-24})`,
            path('M-15 3C-17-8-8-14 5-12Q19-10 17 0Q15 12 2 10Q-12 11-15 3ZM-9 0Q-6 6 5 5Q14 3 10-3Q7-8-3-7Q-7-6-9 0Z',fill(form==='spools'?'sweets':'silver'),rim,1.2)+
            path('M-10-6Q-1-12 11-7','none',hi,1)));
        break;
      case 'page': case 'letters': case 'brush':
        body=form==='brush'?path('M-56 18C-28-21-13-5 11-22Q30-37 50-11Q41-4 20-5Q4 11-17 11L-11 17Z',fill('flame'),rim,1.2)+
          path('M-41 12Q-16-5 10-12M-14 5Q12-10 34-14','none',hi,1.25):
          collect(form==='page'?3:4,i=>group(`translate(${i*19-28} ${i%2?11:-12}) rotate(${i*21-12})`,
            path('M-16 10Q-11-9-14-19Q7-14 15-19Q11-4 14 12Q-4 17-16 10Z',fill('pearlCloth'),rim,.85)+
            path('M-9-10L9-8M-9-4L7-2M-9 3L8 4','none',accent,1)));
        break;
      case 'solarDisc': case 'coin':
        body=orb(3,0,27,form==='coin'?16:24,fill(form==='coin'?'gold':'core'))+
          orb(3,0,20,form==='coin'?10:17,face)+path('M-18-8Q0-22 18-11M-17 3Q-9 14 8 14','none',hi,2.3)+
          collect(6,i=>group(`rotate(${i*60+index})`,path('M27 3Q43-1 49-8Q49 8 28 7Z',fill('flame'))));
        break;
      case 'rabbit': case 'lion': case 'phoenix': case 'mask':
        body=path(form==='rabbit'?'M-25 2Q-35-23-25-29Q-18-35-12-5Q-11-35-2-30Q6-26 4-8Q27-13 37 1Q48 16 23 23H-14Q-28 19-25 2Z':
          form==='phoenix'?'M-55 20Q-37-1-33-24Q-16 5-5-8L9-22 29-14 44-19 37-5 53 0 35 6 32 17 13 12-6 22-14 11Z':
          form==='lion'?'M-56 22Q-31 7-30-15L-37-31-20-23-11-35 4-23 18-29 19-17 40-8 51 6 39 14 25 11 11 24-8 17-25 29Z':
          'M-46 5L-29-19-7-15 11-24 39-9 51 4 29 17 9 22-14 18Z',face,rim,1.25)+
          path('M7-9L21-6 12-1ZM33 6L46 5 37 10Z',hi)+path('M-32 16Q-7 3-12-18M-18 15Q3 4 8-14','none',light,1.5);
        break;
      case 'bubbles': case 'bubble': case 'drop': case 'foam': case 'sugarDrops':
        body=collect(form==='foam'?9:form==='bubbles'?7:form==='bubble'?3:5,i=>group(`translate(${i*82/(form==='foam'?9:6)-36} ${(i%2?1:-1)*(spans/2+i%3*5)}) scale(${.55+((seed>>>(i%13))%66)/100})`,
          orb(0,0,form==='bubble'?20:15,form==='foam'?12:13,fill(form==='sugarDrops'?'sweets':'liquid'))+
          path('M-10-3Q-7-12 5-9Q2-6-4-6Z',hi)+path('M9 2Q8 9 0 9','none',light,1.1)));
        break;
      case 'ember':
        body=path('M-63 12C-35 11-32-4-44-10C-29-6-17 0-11-15C-13-17-18-27-25-31C-8-30 2-17 14-20C32-25 52-14 55 1C52 12 30 28 8 18C-12 30-44 26-63 12Z',fill('flame'),rim,1.3)+
          path('M-26 15Q-8 12 3-7C9 1 25-10 41-2Q30 14 10 11Q-9 25-26 15Z',hi);
        break;
      case 'comet':
        body=path('M-61-12Q-27 2-13-13L10-24 38-9 42 8 19 23-14 13Q-31 28-58 13Q-35 10-38 6Z',fill('core'),rim,1.4)+
          path('M-12-12L9-1 10-24 38-9 9-1 19 23-14 13Z',hi)+
          path('M-51-5Q-29 6-14-4M-44 15Q-28 11-14 9','none',light,1.7);
        break;
      default:
        body=path(`M-65 6Q-37-6-35-${spans}Q-14-13-8-20Q9-30 22-16Q37-21 53-4Q45 11 24 14Q19 26 0 17Q-19 20-30 11Q-52 19-65 6Z`,material==='fire'?fill('flame'):face,rim,1.2)+
          path('M-37 11Q-12 1-19-6Q2 8 23-7Q35-11 42-5Q15 15-37 11Z',hi);
    }
    const scaleX=.89+(seed%21)*.015;
    const scaleY=.83+((seed>>>12)%26)*.017;
    const fragments=collect(2+((seed>>>9)%4),i=>{
      const x=-49+i*19+(seed>>>(i*3))%13;
      const y=(i%2?-1:1)*(11+((seed>>>(i*5))%13));
      const size = .19 + ((seed >>> (i * 4)) % 31) / 100;
      if (spec.wake === 'frost') return facet(x,y,index*(i+1),size);
      if (spec.wake === 'leaves' || spec.wake === 'silk') {
        return group(`translate(${x} ${y}) rotate(${index*(i+1)}) scale(${size})`,
          path('M-15 7Q-11-10 17-8Q10 10-15 7Z',spec.wake==='leaves'?fill('leaf'):face,rim,.9));
      }
      if (spec.wake === 'drops' || spec.wake === 'water') {
        return orb(x,y,size*11,size*8,material==='candy'?fill('sweets'):fill('liquid'))+
          orb(x-1,y-1,size*3,size*2,hi);
      }
      return path(`M${x-size*15} ${y+size*4}Q${x} ${y-size*5} ${x+size*12} ${y-size*7}Q${x+size*6} ${y+size*5} ${x-size*15} ${y+size*4}Z`,fill('flame'));
    });
    return group(`scale(${scaleX} ${scaleY})`, body)+fragments;
  }

  window.peppermintProjectiles = { profile, drawing };
})();
