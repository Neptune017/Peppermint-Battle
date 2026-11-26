(() => {
  let sequence = 0;
  const path = (d, fill, stroke = 'none', width = 1) =>
    `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ellipse = (x, y, rx, ry, fill, extra = '') =>
    `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" ${extra}/>`;
  const group = (transform, contents) => `<g transform="${transform}">${contents}</g>`;
  const repeat = (count, draw) => Array.from({ length: count }, (_, index) => draw(index)).join('');

  const weaponByCard = {
    peppermint: 'candyStaff', horatio: 'vineStaff', zoya: 'zoyaStaff', dharma: 'gauntlet',
    'peppermint-ally': 'crystalAxe', kage: 'emberScythe', 'zodiac-guardian-kage': 'emberScythe',
    'ww-rick': 'vineShield', 'ww-academy-rick': 'vineShield', 'zodiac-guardian-rick': 'vineShield',
    'ww-wade': 'blaster', 'ww-brian': 'maul', 'ww-academy-brian': 'maul', 'ww-zodiac-guardian-brian': 'maul',
    aemi: 'bow', 'ip-zodiac-aqua-kentaur': 'bow',
    'academy-dimitri': 'inkUmbrella', 'wb-dimitri': 'royalUmbrella', 'wb-zodiac-dimitri': 'iceUmbrella',
    'academy-lynda': 'spellbook', 'ww-academy-lynda': 'spellbook', 'lt-clary': 'rapier',
    'wb-magnus': 'longsword', 'valhalla-pryce': 'longsword', 'valhalla-mjolknir': 'runeHammer',
    'wb-bearnardo': 'frostHammer', 'valhalla-sloetunn': 'runeHammer', 'valhalla-axir': 'axe',
    'ww-eggscythe': 'scythe', 'valhalla-wendy': 'scythe', 'lt-scribble': 'quill', 'lt-broomy': 'broom',
    'lt-beatcracker': 'drum',
  };
  const weaponMotifs = {
    staff: 'vineStaff', book: 'spellbook', hammer: 'maul', scythe: 'scythe', axe: 'axe',
    rapier: 'rapier', sword: 'longsword', umbrella: 'royalUmbrella', pen: 'quill', pistol: 'blaster',
    shield: 'roundShield', bow: 'bow', flask: 'flask', drum: 'drum', cup: 'cup', pot: 'pot',
  };

  function mount(layer, svgNode, color, dark, hot) {
    const id = `pb-fx-${++sequence}`;
    const gradients = {
      core: ['r', ['#fffaf3', 0], [hot, .24], [color, .57], [dark, 1]],
      liquid: ['r', ['#fef8ff', 0, .93], [hot, .18, .88], [color, .44, .9], [dark, .81, .94], [color, 1, .56]],
      shade: ['r', [color, 0, .54], [dark, .51, .85], ['#080516', .78, .78], ['#090214', 1, 0]],
      mist: ['r', [hot, 0, .86], [color, .31, .55], [dark, .69, .31], [color, 1, 0]],
      flame: ['l', [color, 0, .66], [dark, .24], [color, .57], [hot, .83], ['#fff5c9', 1]],
      jetFire: ['h', ['#ffca61', 0, .52], ['#ff9a2a', .18, .89], ['#ff5b10', .39, .94], ['#de2c12', .65, .86], ['#a32023', .88, .49], ['#501621', 1, 0]],
      jetCore: ['h', ['#fffbed', 0, .87], ['#fff5ae', .25, .99], ['#ffda4a', .49, .94], ['#ff901b', .68, .79], ['#fd5214', .90, .36], ['#ed400c', 1, 0]],
      jetFlash: ['h', ['#fffdf0', 0, .71], ['#fffadc', .27, 1], ['#ffe56c', .64, .88], ['#ffc03a', 1, 0]],
      jetSmoke: ['r', ['#877477', 0, .51], ['#655459', .44, .46], ['#4e414a', .71, .26], ['#261e2a', 1, 0]],
      jetHeat: ['r', ['#fff4cb', 0, .96], ['#ffc34a', .24, .85], ['#ff641e', .47, .66], ['#c42a0e', .70, .25], ['#b13114', 1, 0]],
      ice: ['l', ['#f2ffff', 0, .95], [hot, .21, .83], [color, .43, .74], [dark, .72, .92], ['#effbff', 1, .96]],
      silver: ['h', ['#24182b', 0], ['#948594', .19], ['#f7eeeb', .38], ['#a494af', .53], ['#4c3759', .77], ['#191627', 1]],
      gold: ['h', ['#412122', 0], ['#a5652c', .2], ['#ffe6a2', .39], ['#d9a74a', .53], ['#603414', .79], ['#f3bf75', 1]],
      wood: ['h', ['#2c171c', 0], ['#885031', .21], ['#c28958', .38], ['#724125', .7], ['#48251b', .88], ['#a9724c', 1]],
      leaf: ['l', ['#e7e895', 0], ['#a5b548', .28], [color, .44], ['#436427', .57], ['#1b321b', 1]],
      leather: ['h', ['#100d19', 0], ['#4e2934', .28], ['#99634c', .44], ['#462430', .67], ['#221623', 1]],
      sweets: ['r', ['#fff6fb', 0], ['#ff9fd4', .23], ['#f450a3', .48], ['#ae125c', .78], ['#f470b4', 1]],
      syrup: ['r', ['#ffebf9', 0], ['#ff93cb', .17], ['#ee318c', .51], ['#8b104c', .76], ['#fa62b0', .91], ['#611338', 1]],
      glass: ['r', ['#fff7ff', 0, .38], ['#e3c6ff', .22, .09], ['#a281c5', .56, .23], ['#987ed7', .82, .43], ['#ffceee', .95, .76], ['#fff1dc', 1, .73]],
      blueCloth: ['h', ['#102647', 0], ['#3974a8', .21], ['#356bc4', .39], ['#143455', .59], ['#4e9adb', .81], ['#112b56', 1]],
      pearlCloth: ['h', ['#81739b', 0], ['#cfc5e0', .2], ['#fff3ef', .42], ['#c19fb9', .61], ['#e6dcec', .82], ['#7f7297', 1]],
      ruby: ['r', ['#fff1d8', 0], ['#ffb3bb', .25], ['#eb3657', .42], ['#640b2c', .79], ['#210d26', 1]],
      drumHide: ['r', ['#fffaf2', 0], ['#f9e0d3', .32], ['#d8b5ae', .81], ['#9e726d', 1]],
      mirrorViolet: ['l', ['#160a33', 0], ['#71549e', .26], ['#321750', .48], ['#d784ff', .86], ['#241331', 1]],
      mirrorBlue: ['l', ['#151b38', 0], ['#4b8ad4', .29], ['#223659', .52], ['#69dbfd', .85], ['#182945', 1]],
      slimeGreen: ['r', ['#eeffab', 0], ['#a8f535', .27, .87], ['#4ba90b', .54, .84], ['#246516', .77, .84], ['#bbff3e', 1, .87]],
      slimeSpring: ['l', ['#98fdc4', 0], ['#43d985', .29, .8], ['#17844e', .56, .9], ['#c9fd3e', .82, .8], ['#f1ff9e', 1]],
      slimeCoral: ['l', ['#ffe9ab', 0], ['#ff86d2', .28, .78], ['#8556b4', .54, .65], ['#22d498', .81, .88], ['#c4ff56', 1]],
      slimePink: ['l', ['#ffde9b', 0], ['#ff88de', .19], ['#be367d', .54, .82], ['#4f2066', .72, .64], ['#fa8bda', 1]],
      fujinSilk: ['h', ['#22517b',0], ['#3d96bd',.25], ['#96e8ef',.44], ['#74c8df',.58], ['#2b86a8',.82], ['#204869',1]],
      skin: ['l', ['#fff1d9', 0], ['#eeb793', .22], ['#c98873', .53], ['#8b5357', .81], ['#d08b76', 1]],
    };
    const defs = svgNode('defs', {}, layer);
    const mountedGradients = new Set();
    const fill = (key) => {
      const reference = `url(#${id}-${key})`;
      if (mountedGradients.has(key)) return reference;
      mountedGradients.add(key);
      const [axis, ...stops] = gradients[key];
      const radial = axis === 'r';
      const points = radial ? { cx: '48%', cy: '45%', fx: '30%', fy: '20%', r: '63%' }
        : { x1: '0%', y1: '0%', x2: axis === 'h' ? '100%' : '10%', y2: axis === 'h' ? '5%' : '100%' };
      const gradient = svgNode(radial ? 'radialGradient' : 'linearGradient', { id: `${id}-${key}`, ...points }, defs);
      for (const [stopColor, offset, opacity = 1] of stops) svgNode('stop', { offset, 'stop-color': stopColor, 'stop-opacity': opacity }, gradient);
      return reference;
    };

    let flameFilter;
    function softenFlame() {
      if (flameFilter) return flameFilter;
      const filterId = `${id}-flame-turbulence`;
      const filter = svgNode('filter', {
        id: filterId, x: '-16%', y: '-35%', width: '132%', height: '170%', 'color-interpolation-filters': 'sRGB',
      }, defs);
      svgNode('feTurbulence', {type:'fractalNoise', baseFrequency:'.043 .070', numOctaves:2, seed:8, result:'air'}, filter);
      svgNode('feDisplacementMap', {in:'SourceGraphic', in2:'air', scale:9, xChannelSelector:'R', yChannelSelector:'G'}, filter);
      svgNode('feGaussianBlur', {stdDeviation:.80}, filter);
      flameFilter = `url(#${filterId})`;
      return flameFilter;
    }

    function candyStaff() {
      const glass = ellipse(0, -49, 27, 27, fill('glass'), 'stroke="#eec7ec" stroke-width="1.15"');
      const sweets = [[-15,-42],[-7,-43],[1,-44],[8,-41],[17,-42],[-17,-48],[-10,-51],[0,-52],[10,-49],[19,-49],[-10,-36],[-1,-36],[8,-34],[15,-38]];
      return [
        path('M-5-25H5L4 64H-4Z', fill('silver'), '#271534'),
        repeat(9, (i) => path(`M-5 ${i*9-18}q3-4 10-7l-.2 2q-7 3-9.6 8Z`, '#943898', '#eac3ea', .48)),
        path('M-6 60Q0 57 6 60L7 66Q2 73 0 73Q-3 72-7 66Z', fill('gold'), '#492b33'),
        path('M-16-27Q0-30 16-27L13-20 7-14 5-8H-5L-7-14-13-20Z', fill('gold'), '#613626'),
        ellipse(0, -22, 4.8, 5.2, fill('ruby'), 'stroke="#ffe3a0" stroke-width="1.35"'),
        glass,
        sweets.map(([x, y], i) => ellipse(x, y, 5 + i % 2 * .8, 5.5, fill('sweets'), 'stroke="#ffb2de" stroke-width=".45"')).join(''),
        path('M-22-55Q-18-67-9-70L-7-66Q-17-61-19-53Z M7-69l4 1 3 7-4-1Z M13-66l4 2 3 6-4-1Z M18-63l4 3 2 6-4-2Z', '#fff1f5aa'),
        path('M-25-42Q-17-28-7-28M15-29Q25-35 26-47', 'none', '#fff4cdad', 1.4),
        path('M-16-73Q-15-79-5-80L-4-84H4L5-80Q15-79 16-73Q0-76-16-73Z', fill('gold'), '#462a28'),
        ellipse(0, -86, 5.7, 5.5, fill('silver'), 'stroke="#eac4ab" stroke-width=".6"'),
      ].join('');
    }
    function vineStaff() {
      const shape = 'M-1 71C-7 42-5 13-7-11C-8-30-1-38 4-46C11-58 6-72-6-72C-24-72-23-54-15-48C-10-44-7-50-8-53C2-48-3-37-13-38C-27-40-34-59-25-72C-14-89 14-83 17-63C21-44 1-34 1-12L6 71Z';
      return path(shape, fill('wood'), '#35211b', 2) +
        path('M0 63C-2 27-7-5-2-21C2-37 16-47 12-62C10-74 0-79-11-77M-16-42C-24-49-28-60-21-70M-2 45L3 64', 'none', '#e8b5818c', 1.4) +
        path('M0 60C-23 46 20 19-5 6C-21-4 11-22 6-36C1-46-20-54-4-68C3-73 12-74 16-78', 'none', '#223b1f', 5.8) +
        path('M0 60C-23 46 20 19-5 6C-21-4 11-22 6-36C1-46-20-54-4-68C3-73 12-74 16-78', 'none', '#9db455', 2.9) +
        [[-2,44,100],[6,25,-35],[-11,9,83],[5,-19,-45],[-8,-48,76],[8,-67,-20]].map(([x,y,r]) =>
          group(`translate(${x} ${y}) rotate(${r})`, path('M0 0Q-9-12 2-23Q13-11 0 0Z', fill('leaf'), '#334f21', .8) + path('M0 0L2-18','none','#e4d48a',.55))).join('');
    }
    function zoyaStaff() {
      return path('M-4-33L5-33 4 61 7 64 4 74 0 80-5 72-8 64-3 61Z', fill('silver'), '#22152d') +
        path('M-2-33H4L3 61H-3Z', '#120c19') +
        path('M-6-42L-9-35-6-30V-15L-8-10Q0-14 8-10L6-15V-30L9-35 6-42ZM-8 62H8L6 68H-6Z', fill('gold'), '#50323a') +
        path('M-6-29L6-20M6-29L-6-20', 'none', '#ffde9a', 1.3) +
        path('M-16-66Q0-72 16-66L12-45Q0-38-12-45Z', fill('silver'), '#291a2d', 1.5) +
        ellipse(0,-57,5,5.3,fill('ruby'),'stroke="#efb7ab" stroke-width="1"') +
        ellipse(0,-46,4,4.2,fill('ruby'),'stroke="#efb7ab" stroke-width="1"') +
        ellipse(0,-77,18,17,fill('shade')) + ellipse(0,-77,12,12,fill('ruby'),'stroke="#ffa9a6" stroke-width="1.25"') +
        path('M0-88L6-68-10-81H10L-6-68Z', 'none', '#ffe1db', .75);
    }
    function umbrella(style) {
      const winter = style === 'royalUmbrella';
      const fabric = winter ? fill('pearlCloth') : fill('blueCloth');
      return path('M-2-54H2L3 63C4 71-3 77-11 73C-16 70-16 62-12 59L-9 61Q-14 69-8 70Q-1 72-2 63Z', fill('blueCloth'), '#adcfed', 1) +
        path('M0-81L5-55 4-48Q15-15 19 15Q13 17 9 12Q5 19 0 15Q-6 20-11 13Q-19 18-20 13Q-15-15-4-48L-6-55Z', fabric, '#c6dcf8', 1.6) +
        path('M0-54Q4-17 12 13M0-54Q-6-19-14 14M0-56V15M-3-45Q-8-15-10 14M3-48Q9-16 17 14', 'none', winter ? '#8d7198' : '#9ee9ff', .77) +
        path('M-12 7Q-9-5-2-8Q-9-10-5-16Q-1-20 0-8Q5-22 7-12Q9-8 2-7Q11-9 13 5Q5-4 2 3L1 10-1 9-2 3Q-6-2-12 7Z', winter ? '#3167aa' : '#a5e8ff') +
        path('M0-84L7-57L4-49H-4L-7-57Z', fill('ice'), '#cdecff', 1.1) +
        path('M-5-50L5-50M-12 18Q0 22 12 18M-9 21Q0 26 9 21M-4 52H4', 'none', '#e9c68e', 2.9) +
        (style === 'iceUmbrella' ? path('M0-83L2-49-4-56ZM-17 13L-1-46-8 14Z', '#a8ecff88') : '');
    }
    function vineShield() {
      const silhouette = 'M-43-42L-34-20-27-34-9-48Q0-55 10-46L27-34 34-19 43-42Q47-18 37-6L35 29Q29 43 0 59Q-28 44-35 29L-37-6Q-47-18-43-42Z';
      return path(silhouette, fill('wood'), '#3f251b', 2.5) +
        path('M-36-31Q-29-13-30-2L-27 26Q-21 39 0 51Q22 39 28 25L31-1Q29-13 37-29M-29-24L-9-41Q0-47 8-41L28-25', 'none', '#e3a46c', 2) +
        repeat(6, (i) => path(`M${-25+i*10} ${-25-Math.min(i,5-i)*5}Q${-29+i*10} 4 ${-23+i*9} ${31+Math.min(i,5-i)*7}`, 'none', '#422516', i%2 ? 1.2 : .7)) +
        ellipse(-8,10,4,9,'none','stroke="#4b2a24" stroke-width=".8"') +
        path('M-34 34C-10 30-27 10-11 0S26 2 19-15C14-23 17-29 28-36M33 34Q13 30 20 13Q27 5 38 3M-40-22Q-34-29-26-27', 'none', '#263b17', 6) +
        path('M-34 34C-10 30-27 10-11 0S26 2 19-15C14-23 17-29 28-36M33 34Q13 30 20 13Q27 5 38 3M-40-22Q-34-29-26-27', 'none', '#9fa83c', 3.2) +
        path('M-19 24l8-1-7-8m23-15 4-9 5 7m5-23 8-4-1 8m-7 41-8-2 4-5', '#b2ba52', '#425324', .8);
    }

    function polearm(key) {
      const axe = key === 'axe' || key === 'crystalAxe';
      const crystal = key === 'crystalAxe';
      const red = key === 'emberScythe';
      const haft = path('M-4-52H4L4 67 6 71 0 77-6 71-4 67Z', crystal ? fill('silver') : fill('wood'), '#351e20',1.35) +
        repeat(11,(i)=>path(`M-4 ${i*8-19}l8-4v2l-8 4Z`,red?'#af3048':'#67403c',crystal?'#fff4ee':'none',.45));
      const blade = axe ? 'M0-53Q12-58 20-73Q45-68 55-47Q33-47 18-36Q35-23 55-26Q44-4 19 0Q12-20 0-21Q-12-20-19 0Q-44-4-55-26Q-35-23-18-36Q-33-47-55-47Q-45-68-20-73Q-12-58 0-53Z'
        : 'M2-55Q-15-78-46-67Q-65-60-72-40Q-56-50-41-50Q-54-44-56-27Q-35-46-18-37Q-41-30-39-19Q-16-25 0-24Q13-33 10-43Z';
      return haft + path(blade, crystal ? fill('sweets') : red ? fill('ruby') : fill('silver'), crystal ? '#ffb7f0' : red ? '#ff797a' : '#d7d5de', 1.6) +
        path(axe ? 'M0-37L20-73 25-51 55-47 22-39 55-26 24-19 19 0 0-37-19 0-24-19-55-26-22-39-55-47-25-51-20-73Z' : 'M-70-41Q-48-67-17-54Q-32-54-44-47Q-19-55-7-38Q-22-45-43-38L-25-41-11-28', 'none', crystal ? '#fff4ff' : red ? '#ffb4a7' : '#f1ebec', 1.1) +
        ellipse(0,-38,9,9,fill(crystal?'sweets':red?'ruby':'silver'),`stroke="${crystal?'#ffdc95':'#8f6f70'}" stroke-width="2"`) +
        path('M-4-39L1-43 5-39 1-34Z','#fff1e894');
    }

    function hammer(key) {
      const wood = key === 'maul';
      const ice = key === 'frostHammer';
      return path('M-5-31H5L6 60 4 71H-4L-6 60Z', wood ? fill('wood') : fill('leather'), '#31202a',1.5) +
        repeat(7,i=>path(`M-5 ${i*5+27}l10-4`,'none','#ede0ca8c',.7)) +
        path('M-42-63Q0-74 42-63L45-21Q0-11-45-21Z', fill(wood?'wood':ice?'ice':'silver'), '#3c281f',1.4) +
        path('M-45-64L-38-69-34-67-34-20-39-17-46-20ZM46-64L38-69 34-67 34-20 39-17 46-20Z', fill('silver'), '#472d35',1.3) +
        path('M-33-52Q0-60 34-50M-31-38Q0-47 30-41M-27-24Q2-31 29-27', 'none', wood?'#422714':ice?'#f5ffff':'#aa8a64', 1.4) +
        ellipse(0,-42,9,10,fill(wood?'silver':ice?'ice':'gold'),'stroke="#f3dca6" stroke-width=".9"') +
        (wood ? path('M-23-62l5 14-2 12 7-4m31-23-5 15 4 14-5 7','none','#47251e',1.5) : path('M-4-35V-49l8 6-8 2 6 7','none',ice?'#f5ffff':'#d6dfff',1.4));
    }

    function weapon(key) {
      if (key === 'candyStaff') return candyStaff();
      if (key === 'zoyaStaff') return zoyaStaff();
      if (key === 'vineStaff') return vineStaff();
      if (key.endsWith('Umbrella')) return umbrella(key);
      if (key === 'vineShield') return vineShield();
      if (['emberScythe','crystalAxe','scythe','axe'].includes(key)) return polearm(key);
      if (['maul','runeHammer','frostHammer'].includes(key)) return hammer(key);
      if (key === 'rapier' || key === 'longsword') {
        const width = key === 'rapier' ? 4 : 11;
        return path(`M0-77L${width}-55 ${width} 36H${-width}V-55Z`,fill('silver'),'#dedbe9',1.1) +
          path('M0-72V34M-19 39Q0 23 19 39L17 43Q0 34-17 43Z','none','#e4b978',3.5) +
          path('M-5 39H5L4 63 8 67 3 74-3 74-8 67-4 63Z',fill('leather'),'#b59166',1.7) +
          repeat(5,i=>path(`M-4 ${45+i*4}l8 2`,'none','#ebd3b4',.75));
      }
      if (key === 'blaster') {
        return group('rotate(90)', path('M-48-11Q-32-15-10-13L0-18H36L45-14V14L35 19H-4L-19 14-28 16-32 33-48 31-45 10Z', '#697343','#292a20',1.5) +
          path('M-43 13L-30 17-34 32-48 30Z',fill('leather'),'#dfbe80',1) +
          path('M-18 11Q-12 22-27 24L-31 21M-47-9H-12M-36 0H-14M-16-7H12','none','#cab775',1.7) +
          path('M23-18H35V18H23Z',fill('silver'),'#e5c280',.8) + path('M33-19H44L47-13V13L44 19H33Z',fill('gold'),'#e8cf98',1) +
          ellipse(46,0,4,11,'#140d18','stroke="#d99e4a" stroke-width="2"') +
          [-42,-29,-16,5,31].map(x=>ellipse(x,-5,1.8,1.8,fill('gold'))).join(''));
      }
      if (key === 'bow') {
        return path('M5-76L8-56Q-23-43-20-9L-14 5Q-23 27-17 44L8 64 5 76-4 68-25 50Q-38 28-26 6L-29-6Q-35-38-16-52L-4-61Z',fill('gold'),'#56271d',1.6) +
          path('M6-70L-7 6 6 68','none','#fff4cf',1.35) +
          path('M-21-13Q-17-28-14-43M-22 19Q-25 34-15 48','none','#fff0a6',1.2) +
          path('M-31-10H-19V14H-28Z',fill('leather'),'#e3a964') + ellipse(-24,2,3,5,fill('ruby'));
      }
      if (key === 'gauntlet') {
        return path('M-23 64L-30 24-32 3-27-22-22-28-19-39-8-44-1-40 8-45 17-37 26-38 31-28 34-15 27-8 32 5 26 21 23 62Z',fill('wood'),'#33222e',1.8) +
          path('M-30 3H29L26 17H-29ZM-24 46H24V58H-25Z',fill('silver'),'#ac8163',1) +
          path('M-23-12L-18-33-8-38-5-19-13-8ZM-1-19L0-35 9-40 14-25 8-14ZM15-25L20-34 28-30 29-16 24-10Z',fill('gold'),'#6f4b35') +
          repeat(5,i=>ellipse(-20+i*10,9,2.6,2.3,fill('gold'))) +
          path('M-18 20L-14 46M-2 19V44M15 19L12 45','none','#f1bf8a',.9);
      }
      if (key === 'spellbook') {
        return path('M-49-32Q-24-46 0-30Q25-49 49-32L53 30Q28 21 0 40Q-26 22-53 30Z',fill('blueCloth'),'#c6a473',2) +
          path('M-45-29Q-23-40 0-23Q25-41 45-29L47 24Q24 16 0 34Q-25 15-47 25Z','#e6cda2','#fdf1d5',1) +
          path('M0-24V34','none','#887052',1.7) +
          repeat(5,i=>path(`M-38 ${i*8-24}q15-1 30 7m16 0q15-9 30-7`,'none','#997458',.75)) +
          path('M12 5q13-11 21-3l-3 12-11 4Z','none','#8c759b',.85);
      }
      if (key === 'roundShield') {
        return ellipse(0,0,45,53,fill('silver'),'stroke="#e0be87" stroke-width="3"') +
          ellipse(0,0,36,44,fill('wood'),'stroke="#564133" stroke-width="2"') +
          repeat(10,i=>{ const angle=i*Math.PI/5; return ellipse(Math.sin(angle)*40,Math.cos(angle)*47,2.1,2.1,fill('gold')); }) +
          ellipse(0,0,13,15,fill('gold'),'stroke="#593d42" stroke-width="1.8"');
      }
      if (key === 'flask' || key === 'cup' || key === 'pot') {
        return path(key==='flask'?'M-10-40H10V-18Q10-12 27 10Q43 36 0 39Q-43 36-27 10Q-10-12-10-18Z':'M-36-17H33L31 13Q28 33 0 34Q-25 31-29 14Z',fill(key==='flask'?'glass':'gold'),'#ffe0c8',1.55) +
          path('M-26 12Q0 1 26 12Q24 31 0 33Q-23 30-26 12Z',fill('liquid'),'#f6efe2',.6) +
          path('M-21 9Q-30 17-22 25M-9 28Q6 32 14 27','none','#fff5edaa',1.2) +
          (key==='flask'?path('M-13-43H13L12-33H-12Z',fill('wood'),'#e2bc87',1):path('M30-12Q54-18 49-1Q46 11 29 12','none','#eed29d',3));
      }
      if (key === 'quill') return path('M-4 54L-9 17Q-26-26 20-62Q37-31 17-3L3 26Z',fill('core'),'#f8e8cf',1.4) +
        path('M-4 54L18-54M2 16L-13-10M7 1L25-15M10-12L-6-26M14-30L30-38','none','#efd9bd',.85);
      if (key === 'broom') return path('M-4-54H4L5 28H-5Z',fill('wood'),'#b48569',1.3) +
        path('M-10 12Q-26 39-25 61Q0 69 25 60Q24 31 10 12Z',fill('gold'),'#583c31',1.4) +
        repeat(9,i=>path(`M${(i-4)*2} 20L${(i-4)*5} 60`,'none','#694b34',.9)) + path('M-11 18H11M-13 23H13','none','#7f343b',2);
      if (key === 'drum') return path('M-34-22Q0-38 34-22L31 26Q0 43-31 26Z',fill('wood'),'#613c33',1.7) +
        ellipse(0,-20,34,13,fill('gold'),'stroke="#ffd49f" stroke-width="2"') +
        path('M-33-11L-23 27-12-8 0 32 12-8 23 27 33-11','none','#ffe1af',1.7) +
        path('M-27 36L32-43M33 36L-30-47','none','#cf9a77',3);
      return '';
    }

    function paint(material, stage, seed, detail) {
      const projectile = stage === 'projectile';
      const scale = projectile ? .48 : 1;
      const pose = (contents) => group(`scale(${scale})`, contents);
      switch (material) {
        case 'candy':
          if (projectile) return ellipse(0,0,20,18,fill('sweets'),'stroke="#ffd0ec" stroke-width="1.35"') +
            path('M-12-5Q-9-13 1-13Q7-12 3-9Q-6-9-9-4Z','#fff7fd') +
            path('M-38 1Q-22-10-14-7L-16 7Q-28 6-38 1Z',fill('liquid'),'#ff9bd9',.6);
          return group('rotate(-6)', path('M-5-14C-16-28-20-49-30-42C-40-34-12-19-24-15C-36-15-64-21-63-10C-63 0-38-4-28 6C-18 16-56 27-48 36C-41 46-25 20-13 22C-3 24-6 51 4 54C16 53 2 26 16 18C24 14 22 41 29 42C39 42 26 21 33 12C44 5 72 23 69 9C65-1 44 2 34-4C18-15 54-29 46-38C38-49 22-18 10-16C-1-13 20-42 8-47C-5-51 0-25-5-14Z',fill('syrup'),'#ffc1e6',1.4) +
            path('M-19-9C-12-11-6-20-3-18C3-11-15-6-17-1C-13 2-4-1-7 4C-15 9-26 1-19-9ZM11 9C22 2 29 8 36 6Q40 13 32 13Q19 11 13 15Z','#ffe8fb9c') +
            path('M-35-7Q-50-13-57-10M40-29Q31-16 25-14M0 34Q4 39 4 46M32 25Q33 31 31 35','none','#ffe3f0ca',1.6) +
            ellipse(-13,8,5,4,fill('sweets'),'opacity=".75"') + ellipse(15,-10,3,2,'#fff0f7bd') +
            ellipse(8,17,2.6,3.2,'#ffcadca4'));
        case 'fire':
          return pose(path(projectile ? 'M61 1Q44-31 11-22C-11-46-31-27-63-43Q-50-22-64-12Q-46-21-39-3Q-53 11-76 18Q-48 24-33 18Q-32 26-44 30Q22 48 61 1Z' : 'M-55 37Q-56 13-76 2Q-45-5-47-47Q-29-24-21-18Q-11-36 11-67Q1-34 27-19Q33-37 53-45Q48-19 66 2Q73 14 49 42Q-2 60-55 37Z',fill('flame')) +
            path(projectile ? 'M51 2Q24-21-16-5Q-32 1-47-2Q-22 16 1 12Q-8 22-19 24Q31 30 51 2Z' : 'M-39 35Q-43 14-24 1Q-18 15-5 8Q-7-11 15-30Q11-4 30 4Q31-9 40-15Q54 17 35 36Q-2 51-39 35Z', '#fff0a0d0') +
            path('M-36 24Q-14 33 4 23T42 18','none','#fffde3e0',2.2));
        case 'water':
          return pose(path(projectile ? 'M54-1C52-22 29-32 4-21C-13-13-28-5-69-16Q-51 2-30 4Q-43 14-57 12C-19 42 41 30 54-1Z' : 'M-69 30C-37 25-49-32-8-40Q40-49 54-17C38-27 14-24 9-8C-1 24 35 33 71 12Q49 54 5 47Q-20 43-31 25Q-46 46-69 30Z', fill('liquid'), hot, 1.1) +
            path('M-55 16C-24 13-33-29 4-30Q42-39 49-21C23-29 13-13 9-5C0 16 34 34 60 21Q43 41 13 39Q-14 39-27 18Q-42 31-55 16Z','#d6fbff7a') +
            path('M-51 17Q-34 17-29-4Q-19-42 18-32Q33-32 43-23M7 15Q30 35 62 23','none','#f1fcffe0',2) +
            ellipse(26,25,4,2.8,'#e9fcffab') + ellipse(-41,35,5,2.5,'#c9fcff91'));
        case 'ice': {
          const count = projectile ? 5 : 9;
          return pose(ellipse(0,16,62,36,fill('mist')) + repeat(count, i => {
            const angle = (i - (count-1)/2) * (projectile ? 19 : 17) + (seed % 13 - 6);
            const h = 38 + ((seed >>> (i % 12)) + i * 23) % 36;
            return group(`translate(${(i - (count-1)/2) * 7} 14) rotate(${angle})`,
              path(`M-13 16L-11-18L0-${h}L11-17 12 12 2 22Z`, fill('ice'), '#e0f9ff', 1) +
              path(`M0-${h}L2 22 11-17Z`,color+'94') + path(`M0-${h}L2 22-11-18Z`,'#effbff77') +
              path('M-6-9L0-22 7-11M-6 8L1 0 8 11','none','#d7f3ffd0',.7));
          }));
        }
        case 'wind':
          return pose(repeat(5,i=>group(`translate(${i*12-22} ${i*8-12}) rotate(${i*12-24})`,
            path('M-72 14C-41-14-7-36 29-28C55-23 62-10 44 4C29 16 8 8-5 8C17 5 36 4 42-9C49-26-2-29-72 14Z', fill('ice')) +
            path('M-50 0C-24-20 12-31 32-23Q56-15 39-4','none','#edf7ffe0',1.2))));
        case 'dark':
          return pose(ellipse(0,0,72,51,fill('shade')) + repeat(5,i=>group(`rotate(${(i*59+seed%21)%360})`,
            path('M-64 22C-56-8-25-23 7-15C29-12 38-2 55-18Q39 13 18 7C-14-1-34 0-64 22Z', fill('mist')) +
            path('M-31 3Q-9-9 9-6Q25 1 35-5','none',hot,.8))));
        case 'solar':
        case 'magic':
          return pose(ellipse(0,0,65,53,fill('mist')) +
            repeat(material==='solar'?11:7,i=>group(`rotate(${i*(material==='solar'?32.73:51.4) + seed%33})`,
              path(`M5 7Q28 1 ${47+(i%4)*9} 0Q33-4 13-7L-2-2Z`,fill('flame')) +
              path('M12 0Q28-2 47 0','none','#fff5e6a0',.9))) +
            ellipse(0,0,22,18,fill('core')) + ellipse(-6,-4,7,4,'#fffff3bb'));
        case 'electric': {
          const strands = repeat(4,i=>group(`rotate(${i*83+seed%39})`,
            path(`M-4 5L7 0 19 3 27-8 39-7 ${49+i*4}-16`,'none',hot,1.25-i*.15) +
            path(`M19 3L25 9 35 8 46 18M27-8L26-17 36-26M35 8l5 9 9 3`,'none','#83b8ff',.72)));
          return pose(ellipse(0,0,68,45,fill('mist'),'opacity=".47"') + strands);
        }
        case 'growth':
          return pose(ellipse(0,23,59,27,fill('mist')) + repeat(8,i=>{
            const x=(i-3.5)*8, y=8+(i*17+(seed%19))%31;
            const side=i%2?-1:1;
            return group(`translate(${x} ${y}) rotate(${(i-3.5)*9})`,
              path(`M1 11Q${-side*6}-10 ${side*13} -${26+i%4*8}`,'none','#493828',5) +
              path(`M1 11Q${-side*6}-10 ${side*13} -${26+i%4*8}`,'none','#a4ab50',2.15) +
              group(`translate(${side*8} -${18+i%4*7}) rotate(${side*32})`,path('M0 0C-13-2-13-14 0-25C10-19 14-5 0 0Z',fill('leaf'),'#d8cf8e',.7) +
              path('M0 0L0-19M0-7L-6-12M0-11L5-15','none','#e1dca4',.55)));
          }));
        case 'earth':
          return pose(ellipse(0,18,62,35,fill('mist')) + repeat(8,i=>{
            const angle=i*45+(seed%17), size=.35+((seed >>> i)%73)/100;
            return group(`rotate(${angle}) translate(${26+(i%4)*8} 0) scale(${size})`,
              path('M-25 10L-20-9-6-15 1-23 17-10 25 4 11 18-11 21Z',fill(detail==='mud'?'wood':'silver'),'#d3a575',.85) +
              path('M-20-9L-7-5 1-23 17-10 11 2-7-5-11 21Z','#d2ab816e') +
              path('M-6-15L-7-5 11 2 11 18','none','#543226',.8));
          }));
        case 'ink':
          return pose(path('M-51 20C-62 3-36-3-33-14C-33-23-53-40-43-45C-36-49-25-21-16-23C-8-32-15-48-4-52C8-53 8-27 21-19C33-16 40-45 50-36C57-27 36-17 34-8C31 7 67 0 70 12C70 24 39 6 27 20C14 31 41 46 32 53C23 60 13 26 0 29C-13 31-11 50-22 48C-28 47-12 26-25 23C-37 18-45 28-51 20Z',fill('shade'),color,1.15)+
            path('M-31 6Q-15-10-5-5Q-10 0-17 3L-4 8Q-20 12-31 6Z',hot+'bb') + ellipse(17,-7,5,3,hot+'88'));
        case 'steel':
          return pose(path('M-60 31C-21 36 32 10 64-49C58-4 18 39-25 42Q-43 43-60 31Z',fill('ice'),hot,1.1) +
            path('M-58 32Q16 38 61-44Q24 26-49 36Z','#fff4e8aa') +
            path('M-32 32Q5 24 32 0M29 13L43-3','none','#ffffefe0',1.25));
        default:
          return pose(ellipse(0,0,55,38,fill('mist')) +
            repeat(7,i=>group(`rotate(${i*51+seed%30})`,path('M8-6Q18-11 52-9Q34-4 18 8L6 10Z',fill('flame')))) +
            ellipse(0,0,25,13,fill('core')));
      }
    }

    function particle(material, index) {
      if (material==='candy' || material==='water' || material==='ink') {
        const palette = material==='candy'?'syrup':material==='water'?'liquid':'shade';
        return path('M-4 9Q-10 3-7-2Q-5-8 0-17C2-9 12 0 8 6Q5 13-4 9Z',fill(palette),material==='ink'?color:hot,.8) +
          path('M-4-3Q-7 2-3 5','none','#fff3e5c0',1);
      }
      if (material==='ice' || material==='steel' || material==='earth') {
        const key=material==='ice'?'ice':material==='earth'?'wood':'silver';
        return path('M-10 6L-7-9 4-14 10-3 4 9Z',fill(key),hot,.72) + path('M4-14L0 0 4 9-10 6 0 0Z','#fff1e3a6');
      }
      if (material==='growth') return path('M-10 8Q-13-6 11-11Q13 5-10 8Z',fill('leaf'), '#b1bf7b',.8) +
        path('M-10 8L8-7','none','#fff0b2',.65);
      return path('M-2 5C-8 3-4-5 3-10Q2-6 7-4Q10 6-2 5Z',fill(index%3?'core':'flame'));
    }

    function raijinDrum(profile) {
      // The frame and hoops are separate from the hide, so the three drums can face different angles.
      const side = profile > 0 ? -1 : 1;
      const shell = group(`scale(${side} 1)`,
        path('M-32-30C-21-39 7-43 24-28C38-14 39 12 29 27C21 39-5 43-31 30Q-12 9-32-30Z',fill('wood'),'#341b28',2)+
        path('M-12-36Q8-41 22-28Q35-13 32 7Q30 25 16 34L7 38Q25 19 22-8Q20-27-12-36Z',fill('gold'),'#663624',1.45)+
        path('M4-30Q17-25 23-16M12 31Q29 21 32 12M17-15l10 4m-8 22 10-3','none','#ffe5b9b3',1.35));
      const face = ellipse(0,0,35,36,fill('gold'),'stroke="#512f2a" stroke-width="1.8"')+
        ellipse(0,0,30.5,31.5,fill('drumHide'),'stroke="#b57e58" stroke-width="1.25"')+
        repeat(3,i=>group(`rotate(${17+profile*18+i*120})`,
          path('M5-24C14-25 22-19 24-11C26-6 26-1 23 3C23-5 19-11 14-13C14-10 10-7 6-8C0-8-4-12-3-17C-2-21 1-23 5-24Z',
            '#211c2a')))+
        repeat(14,i=>group(`rotate(${i*360/14})`,ellipse(0,-33.5,1.45,1.3,fill('gold'),'stroke="#784831" stroke-width=".55"')))+
        path('M-24-18Q-15-29-1-28M12 28Q22 22 25 12','none','#fff8e294',1.45);
      return shell+group(`translate(${-side*8} 0) scale(${profile ? .88 : 1} 1)`, face);
    }

    function raijinFrame() {
      const arch='M-91 17C-72 25-67-27-38-22C-18-22-15-45 0-43C17-45 16-22 38-22C63-28 75 25 91 17';
      const cloud='M0 4C-11 0-16-7-12-12C-6-19 5-12 3-7C1-3-5-4-5-7M-10-3C-24-6-26 9-17 10Q-8 10-10 5M4-5C12-11 22-10 25-2C28 8 17 13 12 5';
      return path(arch,'none','#603624',10)+path(arch,'none',fill('gold'),6)+path(arch,'none','#fff0b2a3',1.4)+
        group('translate(-51 -12) rotate(-18)',path(cloud,'none',fill('gold'),4))+
        group('translate(51 -12) scale(-1 1) rotate(-18)',path(cloud,'none',fill('gold'),4));
    }

    function amethystMirror(blue) {
      const glass = blue ? 'mirrorBlue' : 'mirrorViolet';
      const light = blue ? '#b7f6ff' : '#f3c3ff';
      const darkRim = blue ? '#273159' : '#4c2559';
      const carving='M-16-42Q-19-51-10-51Q-2-50-7-44M9-44Q5-51 12-51Q20-51 18-43M-27-18q-12 9-7 22q6 10 10 4';
      return ellipse(4,2,30,46,'#271a39',`stroke="${darkRim}" stroke-width="2.7"`)+
        ellipse(0,0,29.5,46,fill('silver'),`stroke="${light}" stroke-width="1.6"`)+
        ellipse(0,0,25.5,41.5,fill(glass),`stroke="${darkRim}" stroke-width="2"`)+
        path('M-23-8C-17-27-4-34 13-36L17-29Q-8-27-23 1Z','#e0f8ff5a')+
        path('M-16 22Q3 8 19 3L21 11Q3 17-12 29Z','#dce9ff4c')+
        path('M11-35Q28-10 19 17M-19 22Q-13 33 1 38','none',light,1)+
        path(carving,'none',fill('gold'),1.9)+group('rotate(180)',path(carving,'none',fill('gold'),1.9))+
        repeat(4,i=>group(`rotate(${i*90})`,path('M0-46l3-4 4 5-4 4Z',fill(glass),light,.9)));
    }

    function coyoteClaw(accent) {
      const lower = accent === 'academy' ? 'slimeGreen' : 'slimeSpring';
      const upper = accent === 'academy' ? lower : accent === 'island' ? 'slimeCoral' : 'slimePink';
      return path('M-53-23C-47-39-34-44-21-40C-31-29-14-21-2-28C8-36 19-27 29-35C39-42 48-59 51-61C64-39 54-16 37-7C25-2 17-9 14 1C12 9 38 19 53 16C62 15 68 10 71 5C67 27 54 39 34 43C12 49 3 35-9 34C-24 36-33 19-44 16C-60 9-61-10-53-23Z',fill(lower),'#cffa9b',1.15)+
        path('M-49-18C-45-32-37-35-30-36C-29-22-13-18-2-24C11-32 20-23 34-37Q46-48 51-57C64-26 34-6 18-9C13-8 7-3 10 8C-4 18-28 18-41 7C-49 2-52-10-49-18Z',fill(upper),'#f1ffe2',.65)+
        path('M-48-24Q-58-8-45 6M-30-32Q-24-22-14-21M38-32Q51-48 52-55M23 34Q41 44 62 22','none','#f7ffbe',2.0)+
        path('M-24 18Q-18 13-8 17C-1 21-3 39 4 43C10 47 11 31 10 27Q18 20 26 25Q32 34 42 31M-45 5Q-35 5-30 14','none','#a9fa4e',1.75)+
        repeat(7,i=>{
          const x=-37+(i*19)%79, y=-24+(i*13)%54, size=1.9+i%3;
          return ellipse(x,y,size,size*.84,fill('glass'),'stroke="#e5ffaa" stroke-width=".55"')+
            ellipse(x-.52,y-.56,.7,.52,'#f8ffe0');
        });
    }

    function avatarGem() {
      const colors=['#fe4654','#ff962e','#ffdc48','#d7fa51','#62e93e','#23dc95',
        '#0ed2f7','#28a5fd','#5960ff','#9a3bfa','#e14eec','#ff62b3'];
      const point=(angle, radius)=>[Math.cos(angle)*radius, Math.sin(angle)*radius].map((n)=>n.toFixed(2)).join(' ');
      const facets=colors.map((color,i)=>{
        const start=i*Math.PI/6+Math.PI*.73, end=start+Math.PI/6, mid=(start+end)*.5;
        const a=point(start,42), b=point(end,42), outer=point(mid,44), inner=point(mid,23);
        return path(`M0 0L${a}L${outer}L${b}Z`,color,'#fffbeca0',.6)+
          path(`M${a}L${outer}L${b}L${inner}Z`,'#1c10356a')+
          path(`M0 0L${inner}L${b}Z`,i%3?'#efffff39':'#fff6b658')+
          path(`M${a}L${inner}L${outer}`,'none','#fbffff66',.78);
      }).join('');
      return ellipse(0,0,61,61,fill('gold'),'stroke="#7c4028" stroke-width="2.1"')+
        ellipse(0,0,55.5,55.5,fill('gold'),'stroke="#ffe9a9" stroke-width="2.4"')+
        ellipse(0,0,47,47,'#3b231b','stroke="#b77836" stroke-width="3.1"')+facets+
        ellipse(0,0,44.8,44.8,'none','stroke="#fff2b7" stroke-width="1.6"')+
        repeat(8,i=>group(`rotate(${i*45})`,
          path('M0-61L4-55 11-53 4-51 0-45-4-51-11-53-4-55Z',fill('gold'),'#ffda90',.82)+
          path('M-8-53L0-56 6-53M12-53q8 1 13 5','none','#fff8cb',.78)))+
        ellipse(0,0,8,8,'#fffad978')+path('M-15 0L15 0M0-15V15M-8-7L8 8M-8 8L8-7','none','#fffceb',.9);
    }

    function impactFist(style) {
      const cuff = style === 'gold' || style === 'bronze' ? fill('gold') : style === 'black' ? fill('leather') : fill('silver');
      const wrist = style === 'bare' ? '' :
        path('M-47-22Q-33-24-18-18L-20 23Q-36 28-47 23Q-51 0-47-22Z',cuff,'#43364a',1.25)+
        path('M-43-19Q-35-14-21-14M-43 21Q-34 23-23 19','none',style==='black'?'#b5d4db':'#fff1ca',1.65)+
        (style==='gold'
          ? path('M-38-16Q-42 2-38 21M-30-16Q-34 1-30 21M-23-15Q-27 2-23 19','none','#fff4c1',1.5)
          : style==='bronze'
            ? path('M-36-14L-25-5-29 13-38 17-42-2ZM-37-8l8 14m-9 3 9-10','none','#ba6c3a',1.6)
            : ellipse(-33,3,4,6,cuff,'stroke="#a1c2cb" stroke-width=".75"'));
      return path('M-58-16Q-44-20-25-17Q-16-19-5-28Q4-33 12-27Q22-33 28-24Q40-29 45-18Q55-18 55-5Q61 3 53 12Q52 23 42 26C32 32 19 27 9 30Q-10 33-23 24L-57 23Z',
        fill('skin'),'#693d43',1.35)+
        path('M-22 10Q-10-10 2-9L15-14Q22-18 29-13Q32-6 20 0L11 5L25 7Q33 9 30 15C24 25 11 23 4 18Q-3 21-7 25Z',
          fill('skin'),'#93575a',1.12)+
        path('M11-26Q14-23 14-15M28-23Q32-19 30-13M44-17Q47-13 43-6M54-4Q52 0 49 2M37 17q5-5 11-4','none','#905867',1.3)+
        path('M-15-16Q-5-28 6-29M19-28q7-2 10 3m7-2q7 0 9 7m4 4q4 2 4 6','none','#ffdfbf',1.7)+wrist;
    }

    function signature(name, variant) {
      switch (name) {
        case 'raijinDrum': return raijinDrum(variant);
        case 'raijinFrame': return raijinFrame();
        case 'mirror': return amethystMirror(variant === 'blue');
        case 'slimeClaw': return coyoteClaw(variant);
        case 'avatarGem': return avatarGem();
        case 'fist': return impactFist(variant);
        default: return '';
      }
    }

    function missile(spec, material) {
      return window.peppermintProjectiles.drawing(spec, material, { fill, accent: color, highlight: hot });
    }
    return { weapon, paint, particle, missile, fill, signature, softenFlame };
  }

  const elementMaterial = {Ignis:'fire',Glacial:'ice',Terra:'earth',Aer:'electric',Aqua:'water',Mind:'magic',Dark:'dark',Solar:'solar'};
  const motifMaterial = {
    flame:'fire',ice:'ice',icicle:'ice',wave:'water',drop:'water',fin:'water',steam:'wind',whirl:'wind',
    feather:'wind',root:'growth',leaf:'growth',thorn:'growth',petal:'growth',wood:'earth',mud:'earth',
    veil:'dark',portal:'dark',eye:'dark',moon:'dark',mask:'dark',ink:'ink',bolt:'electric',
    gem:'magic',orbit:'magic',heart:'magic',sun:'solar',lion:'solar',wing:'solar',
    slash:'steel',sword:'steel',rapier:'steel',umbrella:'ice',scythe:'steel',axe:'steel',claw:'steel',
  };
  const tones = {
    fire:['#8e241a','#ffae56'], ice:['#2052b5','#c6f8ff'], water:['#154391','#c4f8fa'],
    wind:['#5267a7','#eaf8ff'], growth:['#31452b','#d9ec86'], earth:['#714436','#edbc8d'],
    dark:['#240e37','#ebb6ff'], solar:['#ab4e17','#fff4b4'], magic:['#6a28a2','#f7d9ff'],
    electric:['#4661b7','#ddffff'], steel:['#594651','#fff7dc'], ink:['#1b132f','#d3c7f5'],
    impact:['#6e4134','#ffdcab'], candy:['#90184e','#ffc2e6'],
  };
  const windAerCards = new Set(['academy-diamond', 'wb-ladyfeather']);

  function describe(card, kind, lead, mark) {
    const attack = kind === 'strike';
    const key = weaponByCard[card.id] || weaponMotifs[lead] || null;
    const source = elementMaterial[card.element] || 'magic';
    const matter = (motif) => motifMaterial[motif] || source;
    let flight = attack ? source : matter(lead);
    if (['arrow','shot','bolt','wave','drop','ink','whirl','ice','icicle'].includes(lead)) flight = matter(lead);
    let impact = matter(mark);
    if (mark==='shatter' || mark==='kick' || mark==='clap') impact = card.element === 'Terra' ? 'earth' : source;
    if (attack && card.id==='peppermint') flight = impact = 'candy';
    if (card.id==='zoya') flight = impact = 'dark';
    if (attack && card.id==='ip-natsuki') flight = impact = 'water';
    if (card.id==='ip-jet') flight = impact = 'fire';
    if (card.id==='ip-chase' || card.id==='ip-chase-zodiac') flight = impact = 'water';
    if (attack && key?.endsWith('Umbrella')) impact = 'ice';
    let aer = null;
    if (card.element === 'Aer') {
      aer = card.id === 'wb-topaz-diamond' ? 'mixed' : windAerCards.has(card.id) ? 'wind' : 'electric';
      flight = impact = aer === 'wind' ? 'wind' : 'electric';
    }
    const [dark, hot] = tones[impact] || tones.impact;
    return { key, flight, impact, dark, hot, aer };
  }
  window.peppermintCombatArt = { mount, describe };
})();
