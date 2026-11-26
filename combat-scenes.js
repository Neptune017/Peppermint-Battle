(() => {
  const path = (d, fill, stroke = 'none', w = 1) =>
    `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const oval = (x,y,rx,ry,fill,other='') => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" ${other}/>`;
  const group = (transform,content) => `<g transform="${transform}">${content}</g>`;
  const repeat = (n,draw) => Array.from({length:n},(_,i)=>draw(i)).join('');
  const fine = '#fff8e8bb';
  function flower() {
    return repeat(9,i=>group(`rotate(${i*40})`,oval(0,-10,3.5,8,i%2?'#fff3e1':'#fffaf3','stroke="#dbcdcb" stroke-width=".48"'))) +
      oval(0,0,6.5,6.2,'#bd7429')+oval(-1,-1,5.2,4.9,'#f3ba45')+
      [[-2,-2],[2,-1],[-3,2],[1,2],[0,0]].map(([x,y])=>oval(x,y,.8,.8,'#ffe6a0')).join('');
  }

  function vessel(fill, blue = '#3274c4') {
    return path('M-28-12C-65-34-66 29-36 22L-30 15C-58 24-52-25-30-4Z',fill('pearlCloth'),'#dda659',2.8)+
      path('M29-4Q47 3 50-19Q51-26 63-22L66-16Q58-17 57-10Q61 19 31 22Z',fill('pearlCloth'),'#dba459',2.1)+
      path('M-29-25C-34-17-46-7-44 13Q-34 46 0 44Q34 45 43 13C47-7 35-17 28-25Z',fill('pearlCloth'),'#d7a657',2)+
      path('M-38-18Q0-32 38-18Q38-26 26-31Q6-39-1-48Q-7-36-29-32Q-37-29-38-18Z',fill('gold'),'#6a472f',1.5)+
      oval(0,-47,6,7,fill('gold'))+
      path('M-30 32Q0 38 28 32M-27-23Q0-31 27-23','none','#faf0c777',1.8)+
      path('M-35 17Q-28-5-15 3Q-4 9-14 16Q-25 20-20 32M-8 34Q-14 21 9 7Q35-11 35 6Q33 12 26 12Q17 12 21 20M-7 2q9-16 14-6Q8 3 1 5', 'none',blue,3)+
      path('M-14 12q11 2 9 10Q-11 27-14 12ZM15 8q-10-10 1-13Q24-7 15 8ZM24 23q8-12 12-5Q36 25 24 23Z',blue,'#89aef3',.75)+
      oval(-27,1,3,9,'#fff9faba','transform="rotate(22 -27 1)"');
  }

  function toy(fill) {
    return path('M24 29Q56 29 52-3Q47-17 60-10Q74 16 54 37L23 43Z',fill('blueCloth'),'#211a36',2)+
      path('M-28 11Q-48 25-39 41Q-31 48-19 33M-13 42Q-27 56-18 65Q-3 70 1 47M12 45Q10 66 25 63Q38 63 29 38',fill('blueCloth'),'#322548',2)+
      path('M-30 25Q-19-1 11 4Q37 5 38 30Q32 54 0 52Q-29 48-30 25Z',fill('blueCloth'),'#29203e',2)+
      path('M-31-18L-46-65Q-24-61-12-42L14-41Q33-64 48-62L35-17Z',fill('blueCloth'),'#302545',2)+
      path('M-31-25L-39-54Q-22-45-21-36M28-35L41-54 35-28',fill('pearlCloth'),'#c1a1d3',1)+
      path('M-39-12Q-42-39-12-42Q22-49 36-30Q53-9 35 11Q9 26-21 15Q-35 8-39-12Z',fill('blueCloth'),'#241730',2.3)+
      oval(14,2,22,13,fill('pearlCloth'))+
      oval(-20,-19,10,10,fill('gold'))+oval(15,-23,8,8,fill('silver'))+
      path('M-26-24l12 10m-12 0 12-10M11-26l8 6m-8 0 8-6M10-7l6 2-3 5v6m0 0q8 5 13 0m-13 0q-6 4-10 1','none','#2c1844',2.3)+
      path('M-3-41l-3 6m5 1-2 6m5 2-1 6m5 33-4 5m10-2-3 5m-26 18-6 1m3 4-7 2m43 1 7 1','none','#efcf91',1.6)+
      path('M-21 16Q-7 18 4 15L24 9 19 27 6 22-11 30Z',fill('sweets'),'#dac3f1',1.25);
  }

  function tree() {
    const branches = repeat(6, i => {
      const w=15+i*10, y=-123+i*27;
      return path(`M-${w} ${y+24}Q-${w*.46} ${y+6} 0 ${y-28}Q${w*.51} ${y+4} ${w} ${y+24}Q${w*.46} ${y+18} 12 ${y+29}Q-11 ${y+18} -${w} ${y+24}Z`,
        ['#275e49','#327c58','#27694e'][i%3],'#1a4d42',1.2)+
        path(`M-${w*.84} ${y+23}Q-${w*.41} ${y+9} 0 ${y-11}Q${w*.41} ${y+9} ${w*.85} ${y+23}`,'none','#c8e7cd77',2.7);
    });
    return path('M-9 0H7L14 39H-14Z','#4c332c','#ad774e',2)+branches+
      path('M0-165L5-151 19-151 8-143 12-128 0-137-12-128-8-143-19-151-5-151Z','#ffdf83','#fff4bc',1.4)+
      path('M-27-81Q-7-58 27-72M-42-48Q-7-23 40-36M-53-16Q-10 8 54-4','none','#ffce6c',2.4)+
      repeat(19,i=>{const x=(i%4-1.5)*(9+Math.floor(i/4)*7),y=-114+Math.floor(i/4)*28+(i%4)*4;
        return oval(x,y,4.2,5,['#f75b76','#6edaf2','#eac376'][i%3])+oval(x-1.5,y-1.6,1.3,1.2,'#fffcee');});
  }

  function horseBody(fill) {
    return path('M-11 37Q-14 55-5 70Q-16 76-19 67Q-24 51-11 37Z',fill('wood'),'#4d2b23',1.45)+
      path('M-18 31Q-23 15-15 0L-11-23Q-19-39-10-52Q0-63 13-48Q21-34 12-22L16 2Q26 24 17 41Q0 56-18 31Z',fill('wood'),'#412527',1.65)+
      path('M-9-47L-11-66-2-55M7-55L15-66 13-45',fill('wood'),'#62372e',1.1)+
      path('M-8-49Q-2-34-8-17Q-13 2-2 26Q9 17 8-4Q3-17 9-36Z','#3a2224','#a8764b',.9)+
      path('M-17 4Q0 13 17 4L18 23Q-1 31-19 22Z',fill('leather'),'#d7aa68',1.05)+
      oval(0,17,9,9,fill('gold'))+oval(0,18,6,7,'#a44d32')+
      path('M-10-36Q0-30 12-36M-8-51Q0-58 9-50M-15 22Q-12 34-6 37M12 7L19 24','none','#f6cd8ca8',1.3);
  }

  function prop(name, fill, hot, color) {
    switch(name) {
      case 'flower': return flower();
      case 'teapot': return vessel(fill);
      case 'cup': return path('M23-12Q45-20 46-1Q44 15 21 17L20 10Q37 9 38-2Q38-8 24-5Z',fill('gold'),'#915833',1.55)+
        path('M-24-19H26L21 29Q0 38-20 28Z',fill('wood'),'#96613f',1.8)+
        path('M-25-14Q0-5 26-15L25-8Q1 0-23-7Z M-22 20Q0 28 23 20L21 27Q0 35-20 27Z',fill('gold'))+
        oval(1,-18,24,6,'#ffdaa8','stroke="#a9794b" stroke-width="1.5"');
      case 'toy': return toy(fill);
      case 'tree': return tree();
      case 'key': return path('M-25-19C-45-24-48 9-26 12L-8 10V26H8V10L25 12C48 9 45-23 25-19Q14-18 5-8H-5Q-14-18-25-19ZM-22-10Q-10-5-19 3Q-34 6-34-2Q-34-10-22-10ZM22-10Q34-10 34-2Q34 6 19 3Q10-5 22-10Z',fill('gold'),'#edc785',1.8)+
        path('M0 6V45M-5 22H5M-5 30H5','none','#f6dca0',3.6);
      case 'card': return path('M-21-28H19L23 27H-23Z',fill('blueCloth'),'#e5bf80',1.4)+path('M0-21L5-5 15 0 5 5 0 21-5 5-15 0-5-5Z',fill('gold'),hot,.75);
      case 'notice': return path('M-27-33Q-6-29 26-36L21 29Q-5 23-29 33Z','#eed4ab','#8e673e',1.5)+
        path('M-20-21Q0-16 18-23M-17 16L16 12M-13 21L12 20','none','#734b3e',2.4)+
        oval(0,-4,9,12,'#89644f')+path('M-15 12Q-10 4 0 5Q11 3 15 10Z','#89644f');
      case 'gift': return path('M-27-13L-1-28 26-14 23 20 0 33-27 19Z',fill('ruby'),'#efb565',1.55)+
        path('M-27-13L0 1 26-14M0 1V33M-13-20L12-7V27M-11-13Q-28-44-11-43Q-3-42 0-27Q17-49 24-37Q29-32 3-23','none','#ffd986',3.3);

      case 'boxyParcel': return path('M-28-16L3-27 30-15 26 20 0 32-28 21Z',fill('ruby'),'#d29373',1.4)+
        path('M-28-16L0-7 30-15 3-27Z','#bd4859','#f2968d',.85)+
        path('M0-7V32M-10-21L18-12 15 25M17-22L-9-11-8 27','none',fill('gold'),3)+
        path('M0-23Q-15-45-24-32Q-24-25 0-23Q18-43 25-34Q28-26 0-23M2-25Q14-37 19-47','none','#f2c388',2.2)+
        path('M-22-5l11 1-1 16-9-5Z M3 1l11-4-1 15-9 4Z','#351629')+
        oval(-16,5,2.15,2.9,'#ffdc92')+oval(8,5,2.1,2.85,'#ffcf7d');
      case 'cymbal': return path('M-46-26Q0-31 45-23Q58-8 48 27Q0 36-51 24Q-56 0-46-26Z',fill('gold'),'#643722',2.2)+
        oval(0,0,50,27,fill('gold'),'stroke="#f6be74" stroke-width="1.6"')+
        repeat(5,i=>oval(0,0,44-i*6.2,23-i*3.5,'none',`stroke="#f6d495" stroke-width=".71" opacity="${.28+i*.12}"`))+
        path('M-19 5Q-15-10 0-11Q16-10 20 5Q4 15-19 5Z',fill('gold'),'#a86b3c',1.35)+
        path('M-12 3Q-5-8 8-4Q16-1 10 8L6 9Q7 2 1 2Q-6 2-8 6Z','#81395c','#e29abc',1.05)+
        path('M-41 12Q-21 24 14 19M19-19Q34-16 43-9','none','#fff5ce',1.95);
      case 'healthBottle': return path('M-11-48H11L10-24C20-18 43-7 44 20Q45 45 0 48Q-43 45-44 20C-45 0-23-14-10-24Z',fill('glass'),'#ffe2d0',1.55)+
        path('M-37 15C-27 3-9 19 3 10Q20 3 37 14C48 36 23 45 0 45C-19 45-45 35-37 15Z',fill('ruby'),'#ff89a1',1.15)+
        path('M-15-52L-11-61 2-67 14-58 16-50 6-41H-7Z',fill('ruby'),'#ffd38f',1.35)+
        path('M-16-49H16L12-40H-12Z M-32 38Q0 43 32 38L22 49H-22Z',fill('gold'),'#bc774c',1.4)+
        path('M10-34Q22-53 32-41Q44-26 13-25M9-29Q46-41 45-16L28-16 20-7Q21-20 9-29Z',fill('ruby'),'#f6a19a',.98)+
        path('M-35 12Q-36 0-24-9M-26 33Q-17 41 5 41M-8-55L1-62 7-55','none','#fff1ddd0',1.7);
      case 'crystalHeart': return path('M0-27L-13-40-33-39-50-23-51-2-36 22 0 54 36 22 51-2 50-23 33-39 13-40Z',fill('ruby'),'#ffb2bb',1.7)+
        path('M0-27L-15-16-35-16-50-23-33-39-13-40Z M0-27L14-15 31-20 33-39 13-40Z','#ffbacb9c')+
        path('M0-27L-15-16-22 10 0 39 22 10 14-15Z','#ff415ec9','#ffb7c1',.92)+
        path('M-15-16L-35-16-51-2-36 22-22 10Z M14-15L31-20 51-2 36 22 22 10Z','#db245ce0','#ff7483',1)+
        path('M0 54L0 39 22 10 36 22Z M0 54L-36 22-22 10 0 39Z','#7d183d','#ff90a0',1)+
        path('M-32-33l13 1M-45-17l-2 12M2-19L14-10 19 4M-31 21L-9 42','none','#fff2ee',1.55)+
        oval(-12,-14,5,3,'#fff8f6bd');
      case 'cookpot': return path('M-42-11H41L31 26Q0 36-31 26Z',fill('silver'),'#71442d',1.95)+
        oval(0,-12,44,12,fill('gold'),'stroke="#b77b48" stroke-width="1.8"')+
        oval(0,-12,34,8,'#7d3c32')+path('M-43 0h-16m102 0h16M-21 18q23 8 42-1','none',fill('gold'),3.2);
      case 'bell': return path('M-25 17Q-16 7-15-8Q-13-28 0-30Q16-29 18-6Q20 11 26 17Q0 24-25 17Z',fill('gold'),'#ffe1a8',1.4)+oval(0,20,25,5,'#6a402c')+oval(0,25,5,6,fill('gold'));
      case 'egg': return path('M-23 13C-21-12-9-35 2-39Q20-28 25 10Q24 36 0 35Q-25 36-23 13Z',fill('pearlCloth'),hot,1.6)+
        path('M-23 6L-10-4-2 6 8-8 21-2','none','#d5ad6d',1.6);
      case 'feather': return path('M-26 23C-4 21 23 0 31-26C14-24-6-18-18-2Q-18 7-19 14Z',fill('pearlCloth'))+
        path('M-27 24Q-7 10 24-19M-15 13l3-12m5 5 4-12m3 8 15-4m-8-1 5-10','none',hot,1);
      case 'leaf': return path('M-19 18Q-34-24 26-26Q35 14-19 18Z',fill('leaf'),hot,1.35)+path('M-21 22L24-24M-7 9L-9-10M6-4L19 0','none','#fff0c0a8',.95);
      case 'hammer': return path('M-4 2H4L5 50H-5Z',fill('wood'),'#dfb474',1.2)+path('M-35-32H35L32 5H-32Z',fill('silver'),hot,1.8)+path('M-24-24H24M-26-4H25','none',fine,2.2);
      case 'shield': return path('M-42-32Q0-45 42-32L32 12Q21 37 0 50Q-23 36-33 12Z',fill('silver'),hot,2)+path('M-29-24Q0-33 29-24L20 9Q12 25 0 33Q-13 25-22 9Z',fill('core'),'#f1db93',1.8)+path('M0-24V27M-22-9L22-9','none',fine,1.5);
      case 'gear': return repeat(12,i=>group(`rotate(${i*30})`,path('M-7-35H7L9-23H-9Z',fill('gold'),'#ddb17a',.9)))+
        oval(0,0,27,27,fill('silver'),'stroke="#e4b571" stroke-width="2"')+oval(0,0,15,15,'#331c39')+oval(0,0,8,8,fill('gold'));
      case 'note': return path('M4 10V-31Q23-27 26-17Q19-21 10-21V10Q3 21-12 18Q-19 9-8 6Q-3 4 4 10Z',fill('core'),hot,1.3)+path('M-11 11q6-3 11 0','none',fine,1.4);
      case 'shard': return path('M-22 17L-9-29 14-37 30-5 10 32Z',fill('ice'),hot,1.15)+path('M-9-29L5-5 14-37 30-5 5-5 10 32-22 17Z',fine);
      case 'drop': return path('M-3-27C-1-12 24-2 21 13Q18 33 0 32Q-22 30-24 11Q-23-8-3-27Z',fill('liquid'),hot,1.6)+path('M-13 9Q-16 22-6 24','none',fine,2.8);
      case 'steam': return path('M-23 25Q-33 8-9-2Q13-12-5-32Q24-26 19-9Q16 3 4 12Q-3 20 9 27Q-6 35-23 25Z',fill('mist'),hot,1);
      case 'coin': return oval(0,0,28,22,fill('gold'),'stroke="#ffdc87" stroke-width="1.1"')+oval(0,0,20,15,'none','stroke="#9b6437" stroke-width="1.4"')+path('M0-12L4-3 15 0 4 3 0 12-4 3-15 0-4-3Z',fill('gold'),'#ffe6b3',.9);
      case 'arch': return path('M-40 36V-8Q-39-43 0-54Q39-44 40-8V36H25V-6Q25-31 0-38Q-25-31-25-6V36Z',fill('silver'),hot,1.6)+path('M-38 25H-26M26 25H38M-37 8H-26M25 8H36M-24-39L-18-28M23-38L17-27M0-53V-39','none',fine,1.6);
      case 'mask': return path('M-35-22L-14-20 0-29 14-20 35-22 28 3 9 18H-9L-28 2Z',fill('leather'),hot,1.7)+path('M-26-8Q-15-15-6-5Q-15 4-26-8ZM26-8Q15-15 6-5Q15 4 26-8Z',fill('ruby'),hot,.9);
      case 'cactus': return path('M-11 54V20Q-40 24-41-10V-22Q-36-31-30-22V-10Q-27 3-11 3V-42Q-2-58 9-43V-14Q29-12 28-31Q35-39 39-29V-19Q39 7 9 7V54Z',fill('leaf'),'#d4c18a',1.6)+
        path('M0 49V-44M-9 13h-14m36-13 14-4M-39-18l-8-5m50-10 8-5','none','#d2db9b',1.2);
      case 'keg': return path('M-32-43Q0-54 32-43Q47-5 34 37Q0 48-34 37Q-48-5-32-43Z',fill('wood'),'#c3956c',1.9)+
        path('M-35-29Q0-18 35-29L37-20Q0-9-37-20Z M-38 19Q0 31 38 19L36 29Q0 40-36 29Z',fill('silver'),'#e4ccae',1.4)+
        path('M-24-36Q-31-2-23 32M-7-44Q-10-3-6 40M13-45Q18-3 15 40M26-37Q32-2 25 32','none','#432424',1.1)+
        oval(1,14,7,6,fill('gold'))+path('M0 19V32H13V27H8V19Z',fill('gold'),'#ffe7ae',1.5);
      case 'wrap': return path('M-43-12L-24-6Q-8-16 4-9L22-11 39-16 36 19 19 18 7 13Q-9 21-26 15L-43 20Z',fill('sweets'),hot,1.7)+
        path('M-23-6L-28 14M18-10L23 18M-13 14Q-22 3-6-9M5 14Q16 1 6-9','none',fine,1.7);
      case 'tome': return path('M-47-29Q-24-42 0-27Q25-44 47-29L52 28Q24 16 0 36Q-24 17-52 28Z',fill('blueCloth'),'#d7b56d',1.8)+
        path('M-43-26Q-24-39 0-21Q24-39 43-26L47 22Q21 15 0 29Q-23 15-47 22Z','#e6cfa5','#fff2d9',1.2)+
        repeat(5,i=>path(`M-37 ${i*7-19}q13-2 28 5m18 0q13-8 28-5`,'none','#1176aa',.98))+
        path('M0-19V29M40 19q5-6 5-15','none','#906b4b',1.2);
      case 'lantern': return path('M-15-28Q-15-50 0-50Q14-50 15-29M-27-20H27L22 29H-22Z',fill('gold'),'#ffe0a8',1.5)+
        path('M-19-15H19L16 24H-16Z',fill('glass'),hot,1.3)+
        path('M0 22Q-14 14 0-12Q11 4 9 15Q4 24 0 22Z',fill('flame'),'#ffdda8',.95)+path('M-14-15L-9 23M14-15L9 23','none','#d6974f',1.7);
      case 'anvil': return path('M-49-19H43L31-6 14 0 9 19 31 27V38H-28V28L-10 17-14 0-33-6Z',fill('silver'),hot,1.55)+
        path('M-39-16L33-16M-17 4H11M-25 31H26','none',fine,2);
      case 'flatbread': return oval(0,0,45,27,'#a35622','stroke="#d58a43" stroke-width="3"')+
        oval(0,-4,41,25,'#e9ae63','stroke="#ffe2a0" stroke-width="1.4"')+
        repeat(6,i=>oval((i*27)%63-32,(i*9)%31-16,3+i%2,2,['#9a613d','#f7d5a0','#c27c46'][i%3]))+
        path('M12 5C-17 15-22-13 5-13Q29-17 29-1Q26 8 12 5Z','#ffedbc')+oval(11,-4,11,10,'#f4a832');
      case 'bag': return path('M-22-15L-29 33Q0 41 29 33L22-15Z',fill('pearlCloth'),'#cf9a6d',1.8)+
        path('M-11-13V-26Q-9-41 0-39Q11-39 11-24V-13','none','#c16c32',3)+path('M-23-9H24','none','#8f5269',2.4)+
        path('M-1-4L4 6 14 6 7 13 9 23 0 17-9 23-7 13-14 6-4 6Z',fill('gold'),hot,1);
      case 'dummy': return path('M-6 1H6V56H-6Z',fill('wood'),'#8d6546',1.4)+
        path('M-37 43L37 43 28 64H-27Z',fill('wood'),'#7f4b33',1.5)+
        oval(0,-19,39,34,fill('leather'),'stroke="#d4ab79" stroke-width="3"')+
        oval(0,-19,28,24,'#fff0d1','stroke="#ba783a" stroke-width="2"')+oval(0,-19,16,14,'#aa4854')+oval(0,-19,7,6,'#eac779');
      case 'salt': return path('M-18 29L-15-15Q0-22 15-15L18 29Z',fill('glass'),'#eee3e3',1.2)+
        path('M-18-19Q-18-36 0-34Q19-34 18-19Z',fill('silver'),hot,1.3)+
        repeat(4,i=>oval(i*7-11,-26,1.25,1.3,'#452d43'));
      case 'potion': return path('M-13-37H13V-12Q17-7 34 13Q46 35 0 38Q-44 35-34 13L-13-12Z',fill('glass'),'#eadde0',1.6)+
        path('M-29 16Q0 3 28 16Q28 34 0 36Q-28 32-29 16Z',fill('liquid'),hot,.9)+
        path('M-16-41H16V-30H-16Z',fill('wood'),'#e6ba7a',1.4)+path('M-31 17Q-37 27-22 30','none',fine,1.7);
      case 'iceWall': return repeat(5,i=>group(`translate(${(i-2)*19} 0) rotate(${(i-2)*7})`,path('M-13 55L-9-8 0-49 12-15 14 52Z',fill('ice'),hot,2)+path('M0-46L0 53-9-8Z',fine)));
      case 'stageDoll': return group('scale(.70)',toy(fill))+path('M-29-55L-45-81M27-53L47-81M-11 21L-62-79M18 28L64-79','none',hot,1.4);
      case 'seaGate': return repeat(5,i=>group(`translate(${(i-2)*20} ${i%2*16}) rotate(${(i-2)*13})`,path('M-31 26C-11-24 17-36 27-21Q3-26 4-4Q6 21 29 28Z',fill('liquid'),hot,1.7)));
      case 'rib': return path('M-51 14C-31-10-21 10 0-10Q23-30 50-12Q18-19 6 4Q-15 28-51 14Z',fill('flame'),hot,1)+path('M-34 12Q-12 18 8-4Q20-16 38-14','none',fine,1.2);
      case 'paper': return path('M-29-18L22-22 12 19-22 23Z',fill('pearlCloth'),hot,1.2);
      case 'slimeDrop': return path('M-2-30C8-21 21-5 18 10Q14 29-5 29Q-23 23-20 9Q-16-9-2-30Z',fill('slimeGreen'),'#cdf98a',.95)+path('M-13 3Q-17 11-10 20','none','#e6ffb4',1.5);
      case 'bubble': return oval(0,0,36,32,fill('liquid'),'stroke="#b2fbff" stroke-width="1.8"')+oval(-13,-15,8,4,fine);
      default: return oval(0,0,17,15,fill('core'));
    }
  }

  function mix(from, to, fraction) {
    return {x:from.x+(to.x-from.x)*fraction, y:from.y+(to.y-from.y)*fraction};
  }

  function productionTime(direction, attack, sharedField) {
    if (attack) return null;
    return { sendParcel: 1090, healing: 830, fujinWind: 880, buoyThrow: 935, kindle: 890, lullaby: 960, merryGoRound: 1060, prism: 960, mirrors: 850, horses: 1290, kettles: 1040, serving: 1010, windup: 1290, tree: 1080, forge: 920, gate: 880,
      brew: 950, hatch: 950, carnival: 970, carousel: 1050, panorama: 1020 }[direction?.move] || (sharedField ? 900 : 735);
  }

  // Attack delivery for ropes, light, water, sound and textiles. Each strand is built in stage space.
  function channel(ctx, from, target, style) {
    const {layer,svgNode,motion,palette,color,hot,hitAt,scale,seed} = ctx;
    const dx=target.x-from.x,dy=target.y-from.y,d=Math.hypot(dx,dy);
    if (d < 12) return;
    const ux=dx/d,uy=dy/d;
    const pairs = {
      beam:[2,4,.02,12], beams:[5,5,.10,7], chains:[4,6,.08,10], lash:[3,8,.20,6],
      roots:[6,6,.17,5], river:[5,4,.13,12], surf:[7,3,.22,13], gale:[6,4,.23,11],
      ink:[4,7,.24,12], ribbon:[5,7,.27,9], stitch:[4,9,.08,5], cross:[4,3,.26,7],
      score:[4,6,.10,6], crosswind:[3,4,.25,3],
    };
    const [lines,cruise,curve,width]=pairs[style]||pairs.beam;
    const hold = hitAt - 405 - (seed%57);
    const rgba = style==='ink'?'#582c88':style==='chains'?'#d9c3a4':style==='roots'?'#b7b767':color;
    const strokes = style==='stitch'?'.032 .072':style==='chains'?'.05 .05':style==='cross'?'.18 .12':'.5 .5';
    for(let i=0;i<lines;i++){
      const q=(i-(lines-1)/2)*14*scale;
      const s=(i%2?-1:1)*Math.min(100,d*curve)+q;
      const bend=`M${from.x+uy*q*.32} ${from.y-ux*q*.32}C${from.x+dx*.29+uy*s} ${from.y+dy*.29-ux*s} ${target.x-dx*.25-uy*s*.54} ${target.y-dy*.25+ux*s*.54} ${target.x+uy*q*.25} ${target.y-ux*q*.25}`;
      const core=svgNode('path',{d:bend,pathLength:1,fill:'none',stroke:i===0?rgba:hot,'stroke-width':Math.max(1.5,width*scale/(1+i*.72)),
        'stroke-linecap':'round','stroke-dasharray':strokes,class:i===0?'combat-channel-halo':'combat-channel-core'},layer);
      const start = hold + i * 33;
      const duration = 675 + cruise * 20;
      const contact = (hitAt - start) / duration;
      motion(core,[{opacity:0,strokeDashoffset:1},{opacity:.86,strokeDashoffset:.48,offset:contact*.55},
        {opacity:i===0?.67:.91,strokeDashoffset:0,offset:contact},{opacity:0,strokeDashoffset:-.34}],duration,start,'linear');
    }
    if(['chains','roots','stitch'].includes(style)){
      for(let i=0;i<6;i++){
        const p=mix(from,target,(i+1)/7);
        const art=style==='chains'?oval(0,0,10,6,'none',`stroke="${hot}" stroke-width="2.5"`):prop(style==='roots'?'leaf':'rib',palette.fill,hot,color);
        const link=ctx.art(art,p.x,p.y,Math.atan2(dy,dx)*180/Math.PI);
        motion(link,[{opacity:0,transform:'scale(.28)'},{opacity:.96,transform:`scale(${.42*scale})`},{opacity:0}],650,hold+i*57);
      }
    }
  }


  function discharge(ctx, from, to, start, {spread = 12, branches = 2, width = 2, tint = '#7fafff', time = 440, salt = 0} = {}) {
    const {layer, svgNode, motion, seed, reduced} = ctx;
    const dx = to.x - from.x, dy = to.y - from.y;
    const distance = Math.hypot(dx, dy);
    if (distance < 8) return;
    const nx = -dy / distance, ny = dx / distance;
    const jitter = (i) => (((Math.imul(seed ^ salt, 31 + i * 37) >>> 6) % 97) / 48 - 1);
    const spine = [from];
    const segments = Math.min(10, Math.max(4, Math.round(distance / 27)));
    for (let i = 1; i < segments; i++) {
      const at = mix(from, to, (i + jitter(i + 5) * .22) / segments);
      const bend = spread * (i % 2 ? -.42 : .42) + jitter(i) * spread * .7;
      spine.push({x: at.x + nx * bend, y: at.y + ny * bend});
    }
    spine.push(to);
    const trace = (points) => points.map(({x, y}, i) => `${i ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join('');
    const bolt = trace(spine);
    const forks = [];
    for (let i = 0; i < branches; i++) {
      const index = 1 + Math.floor(i * (segments - 1) / branches);
      const root = spine[index];
      const side = i % 2 ? -1 : 1;
      const branchSpread = spread * side * (1.4 + Math.abs(jitter(i + 23)));
      const at = (advance, bend) => ({x: root.x + dx * advance + nx * bend, y: root.y + dy * advance + ny * bend});
      const branch = [root, at(.115, branchSpread * .70), at(.185, branchSpread * .46), at(.26, branchSpread)];
      forks.push(trace(branch));
      if (width > 2) forks.push(trace([branch[2], at(.24, branchSpread * .31), at(.32, branchSpread * .43)]));
    }
    const draw = (d, color, weight, className) => svgNode('path', {
      d, pathLength: 1, fill: 'none', stroke: color, 'stroke-width': weight, 'stroke-linecap': 'round',
      'stroke-linejoin': 'round', class: className,
    }, layer);
    const halo = draw(bolt + forks.join(''), tint, width * 3.15, 'combat-lightning-halo');
    const core = draw(bolt, '#edfcff', width, 'combat-lightning-channel');
    const filament = draw(forks.join(''), tint, width * .59, 'combat-lightning-filament');
    const reveal = (node, opacity, delay) => motion(node, reduced
      ? [{opacity:0}, {opacity:opacity * .65}, {opacity:0}]
      : [{opacity:0, strokeDashoffset:1}, {opacity, strokeDashoffset:0, offset:.22},
        {opacity:opacity * .46, strokeDashoffset:0, offset:.56}, {opacity:0, strokeDashoffset:-.2}],
      time, start + delay, 'ease-out');
    reveal(halo, .47, 0);
    reveal(core, .96, 0);
    reveal(filament, .91, 29);
  }

  const electricalContacts = {
    forkPunch: {count:4, reach:107, spread:18, width:2.75, time:520, fan:1.16},
    tidalShock: {count:5, reach:122, spread:16, width:2.2, time:655, fan:.83, flatten:.43, tint:'#62ecf5'},
    tidalNet: {count:5, reach:93, spread:11, width:1.65, time:730, fan:2.7, flatten:.35, tint:'#77e4ef'},
    coronaPunch: {count:7, reach:123, spread:17, width:2.4, time:750, fan:2.9, tint:'#a0adff'},
    thunderPunch: {count:5, reach:142, spread:24, width:3.3, time:720, fan:1.15, vertical:true, tint:'#93b8ff'},
    grounding: {count:3, reach:101, spread:15, width:2.1, time:560, fan:1, flatten:.39, tint:'#9bbdff'},
    wireStrike: {count:3, reach:102, spread:15, width:1.95, time:440, fan:.64, tint:'#bca6ff'},
    sparkComb: {count:5, reach:80, spread:13, width:1.7, time:520, fan:1.19, tint:'#c6b2ff'},
    needleArc: {count:2, reach:101, spread:10, width:1.3, time:405, fan:.34, tint:'#9beaff'},
    floorArc: {count:4, reach:93, spread:12, width:2.15, time:520, fan:1.8, flatten:.32},
    staticWeave: {count:4, reach:67, spread:13, width:1.7, time:550, fan:2.1},
  };

  function electricalContact(ctx, mark, target, angle, scale) {
    const profile = electricalContacts[mark] || {count:2, reach:69, spread:12, width:1.5, time:440, fan:.86};
    const {count, reach, spread, width, time, fan, flatten = .79, vertical, tint} = profile;
    const attackWeight = 1 + Math.min(8, ctx.baseAttack) * .04;
    const initial = ctx.hitAt - 14;
    for (let i = 0; i < count; i++) {
      const direction = angle * Math.PI / 180 + (i / (count - 1) - .5) * 2 * fan;
      const length = reach * scale * (.66 + ((ctx.seed >>> (i * 3)) % 11) / 30);
      const from = {x:target.x, y:target.y + (flatten < .5 ? 23 * scale : 0)};
      const to = {x:from.x + Math.cos(direction) * length, y:from.y + Math.sin(direction) * length * flatten};
      discharge(ctx, from, to, initial + i * (mark === 'coronaPunch' ? 52 : 29), {
        spread:spread * scale, branches:i % 2 ? 1 : 2, width:width * attackWeight,
        tint, time:time + i * 22, salt:(i + 1) * 313,
      });
    }
    if (vertical) {
      discharge(ctx, {x:target.x + 33 * scale, y:Math.max(10, target.y - 154 * scale)}, target, initial - 25, {
        spread:19 * scale, branches:3, width:3.4 * attackWeight, tint, time, salt:733,
      });
    }
  }


  function placeSignature(ctx, name, variant, point, angle = 0) {
    const node = ctx.art(ctx.palette.signature(name, variant), point.x, point.y, angle);
    node.setAttribute('data-combat-prop', name);
    return node;
  }

  const beats = {
    raijin: [460, 312, 145],
    mirrors: [390, 190],
    slimeClaws: [115, 0],
    prism: [580, 380, 175, 0],
  };

  function stageRaijin(ctx, target, scale) {
    const {origin, viewport, reduced, impactAt, motion} = ctx;
    const pivot = mix(origin, target, .16);
    const height = Math.min(viewport.h-65, Math.max(75, pivot.y - 32 * scale));
    const width = Math.min(pivot.x, viewport.w - pivot.x);
    const spacing = Math.max(37, Math.min(77 * scale, width - 30 * scale));
    const center = Math.min(viewport.w-spacing-29, Math.max(spacing+29, pivot.x));
    const frame = placeSignature(ctx, 'raijinFrame', null, {x:center, y:height - 6*scale});
    motion(frame,[{opacity:0,transform:`scale(${scale*.83})`},{opacity:.98,offset:.26},{opacity:0}],1200,130);
    const drums = [-1,0,1].map((side)=>({x:center+side*spacing,y:height-(side===0?37:4)*scale}));
    const order = target.x >= origin.x ? [0,1,2] : [2,1,0];
    order.forEach((index,i)=>{
      const point = drums[index];
      const side = index - 1;
      const drum = placeSignature(ctx,'raijinDrum',side,point,side*13);
      const hit = impactAt - beats.raijin[i];
      const delay = 118 + i * 38, duration = impactAt + 580 - delay;
      const strike = (hit - delay) / duration;
      const s = scale * (side ? .86 : 1);
      drum.setAttribute('data-beat',hit);
      motion(drum,reduced ? [{opacity:0,transform:`scale(${s})`},{opacity:1,offset:strike},{opacity:.85,offset:.74},{opacity:0}]
        : [{opacity:0,transform:`translateY(19px) scale(${s*.49})`},
          {opacity:1,transform:`scale(${s})`,offset:strike*.64},
          {opacity:1,transform:`scale(${s*1.10},${s*.89})`,offset:strike},
          {opacity:1,transform:`scale(${s})`,offset:strike+.10},
          {opacity:.9,offset:.78},{opacity:0,transform:`translateY(-20px) scale(${s*.92})`}],duration,delay,'linear');
      if (!reduced) {
        const pulse = ctx.art(oval(0,0,35,36,'none','stroke="#fff0c2" stroke-width="1.25"'),point.x,point.y);
        motion(pulse,[{opacity:0,transform:`scale(${s*.90})`},{opacity:.84,offset:.12},
          {opacity:0,transform:`scale(${s*1.7})`}],385,hit);
        const next = i < 2 ? drums[order[i+1]] : target;
        discharge(ctx,point,next,hit,{
          width:(i===2?2.85:1.45)*scale,spread:(i===2?19:9)*scale,branches:i===2?5:2,
          tint:i===2?'#86caff':'#9ab1ff',time:i===2?650:365,salt:(i+3)*173,
        });
      }
    });
  }

  function luminousTrace(ctx, from, to, start, duration, tint, width, bend = 0) {
    const vx = to.x-from.x, vy = to.y-from.y;
    const span = Math.max(1, Math.hypot(vx,vy));
    const d = `M${from.x} ${from.y}Q${(from.x+to.x)/2-vy/span*bend} ${(from.y+to.y)/2+vx/span*bend} ${to.x} ${to.y}`;
    for (const [weight, color, css] of [[width*2.8,tint,'combat-channel-halo'],[width,'#fff5ff','combat-channel-core'],[width*.37,tint,'']]) {
      const ray=ctx.svgNode('path',{d,pathLength:1,fill:'none',stroke:color,'stroke-width':weight,class:css,
        'stroke-dasharray':'.59 .41','stroke-linecap':'round'},ctx.layer);
      ctx.motion(ray,[{opacity:0,strokeDashoffset:1},{opacity:.88,strokeDashoffset:0,offset:.35},
        {opacity:.73,strokeDashoffset:0,offset:.60},{opacity:0,strokeDashoffset:-.34}],duration,start,'linear');
    }
  }

  function stageMirrors(ctx, target, scale) {
    const {origin, viewport, motion, impactAt, reduced} = ctx;
    const dx=target.x-origin.x,dy=target.y-origin.y;
    const towardRight = target.x >= viewport.w*.5 ? -1 : 1;
    const near = Math.hypot(dx,dy) < 110;
    const clamp = (val, hi) => Math.max(26, Math.min(hi-26, val));
    const points = [.29,.64].map((step,i)=>{
      const center = mix(origin,target,step);
      return {x:clamp(center.x+(i ? -1 : 1)*towardRight*(near?49:63)*scale,viewport.w),
        y:clamp(center.y+(near?(i?-35:28)*scale:0),viewport.h)};
    });
    points.forEach((point,i)=>{
      const hit = impactAt-beats.mirrors[i];
      const mirror = placeSignature(ctx,'mirror',i?'blue':'violet',point,i?28:-25);
      mirror.setAttribute('data-beat',hit);
      const s=scale*(i?.93:1.03), duration=impactAt+820, delay=55+i*75;
      motion(mirror,reduced ? [{opacity:0,transform:`scale(${s})`},{opacity:1,offset:.36},{opacity:.9,offset:.74},{opacity:0}]
        : [{opacity:0,transform:`scale(.32,${s*.55}) rotate(-10deg)`},
          {opacity:1,transform:`scale(${s},${s})`,offset:.28},
          {opacity:.98,transform:`scale(${s*.79},${s*1.03}) rotate(${i?12:-12}deg)`,offset:(hit+155-delay)/duration},
          {opacity:.95,transform:`scale(${s},${s})`,offset:.71},
          {opacity:0,transform:`scale(.30,${s*.82}) rotate(16deg)`}],duration,delay,'ease-out');
      if (!reduced) {
        const reflection = ctx.art(path('M-17-21Q0-4 17 21','none',i?'#8ceaff':'#e6b6ff',3),point.x,point.y);
        motion(reflection,[{opacity:0,transform:`scale(${s*.4})`},{opacity:.88,offset:.27},{opacity:0,transform:`scale(${s*1.1})`}],430,hit);
      }
    });
    if (!reduced) {
      luminousTrace(ctx, origin, points[0], impactAt-565, 460, '#ae61e9', 2.5*scale, -9);
      luminousTrace(ctx, points[0], points[1], impactAt-beats.mirrors[0], 490, '#bc95ff', 2.7*scale);
      luminousTrace(ctx, points[1], target, impactAt-beats.mirrors[1], 520, '#80c7ff', 3.1*scale, 11);
    }
  }

  const prismColors=['#ff6374','#ffb254','#ffe784','#85f79a','#65e5ff','#80a5ff','#c87aff'];
  function stageAvatarGem(ctx, target, scale) {
    const {origin, viewport, motion, impactAt, reduced} = ctx;
    const point={x:Math.max(57,Math.min(viewport.w-57,target.x)), y:Math.max(62,target.y-35*scale)};
    const gem=placeSignature(ctx,'avatarGem',null,point);
    const position=mix(origin,point,.67);
    const dx=position.x-point.x,dy=Math.min(88,position.y-point.y);
    const s=scale*.89;
    motion(gem,reduced ? [{opacity:0,transform:`scale(${s})`},{opacity:1,offset:.40},{opacity:1,offset:.76},{opacity:0}]
      : [{opacity:0,transform:`translate(${dx}px,${dy}px) rotate(-17deg) scale(.38)`},
        {opacity:.95,transform:`translate(${dx*.40}px,${dy*.40}px) rotate(-8deg) scale(${s*.84})`,offset:.30},
        {opacity:1,transform:`translate(0,0) rotate(1deg) scale(${s})`,offset:.51},
        {opacity:1,transform:`rotate(9deg) scale(${s*1.11})`,offset:.65},
        {opacity:0,transform:`translateY(-31px) rotate(20deg) scale(${s*.94})`}],1540,impactAt-750,'linear');
    if (reduced) return;
    for (let i=0;i<prismColors.length;i++){
      const angle=(i/(prismColors.length-1)-.5)*2.32;
      const light = ctx.art(path(`M0 0Q${(i-3)*3} -51 0 -109`,'none',prismColors[i],1.85),point.x,point.y,angle*180/Math.PI);
      motion(light,[{opacity:0,transform:`scale(${s*.27})`},{opacity:.83,transform:`scale(${s})`,offset:.30},
        {opacity:.67,transform:`scale(${s*1.17})`,offset:.62},{opacity:0,transform:`scale(${s*1.30})`}],745,impactAt-185+i*21);
      const glaze=ctx.art(path('M-68 5C-18-38 47-32 72-2C54 25 6 45-41 30','none',prismColors[i],1.2),point.x,point.y);
      motion(glaze,[{opacity:0,transform:'rotate(-17deg) scale(.42)'},{opacity:.65,transform:`rotate(${i*9-29}deg) scale(${s})`,offset:.28},
        {opacity:0,transform:`rotate(${i*10+38}deg) scale(${s*1.24})`}],850,impactAt-480+i*48);
    }
  }

  function stageSlimeClaws(ctx,target,angle) {
    const {card,origin,motion,hitAt,reduced,scale,palette,hot} = ctx;
    const kind=card.id==='academy-coyote'?'academy':card.id==='ip-coyote'?'island':'zodiac';
    const a=angle*Math.PI/180, nx=-Math.sin(a), ny=Math.cos(a);
    for (let i=0;i<2;i++) {
      const side=i?1:-1, s=scale*(i?.76:.71);
      const from=mix(origin,target,.28+i*.11);
      const end={x:target.x+nx*side*20*scale,y:target.y+ny*side*20*scale};
      const distance=(1-i*.18)*Math.min(145,Math.hypot(end.x-from.x,end.y-from.y));
      const travelX=Math.cos(a)*distance,travelY=Math.sin(a)*distance;
      const hit=hitAt-beats.slimeClaws[i], windup=510-i*75;
      const claw=placeSignature(ctx,'slimeClaw',kind,end,angle+side*16);
      claw.setAttribute('data-beat',hit);
      const flip=i?1:-1;
      motion(claw,reduced ? [{opacity:0,transform:`scale(${s},${s*flip})`},{opacity:.96},{opacity:0}]
        : [{opacity:0,transform:`translate(${-travelX}px,${-travelY}px) scale(${s*.46},${s*flip*.64})`},
          {opacity:.91,transform:`translate(${-travelX*.54}px,${-travelY*.54}px) scale(${s},${s*flip})`,offset:.39},
          {opacity:1,transform:`translate(0,0) scale(${s*1.16},${s*flip*.69})`,offset:windup/850},
          {opacity:.68,transform:`translate(${nx*side*16}px,${ny*side*16}px) scale(${s*.91},${s*flip*1.06})`,offset:.79},
          {opacity:0,transform:`translateY(30px) scale(${s*.6},${s*flip*.62})`}],850,reduced?hit-145:hit-windup,'linear');
      if (reduced) continue;
      for(let n=0;n<6;n++){
        const drop=ctx.art(path('M0-8C3-5 9 2 6 6Q0 12-5 6Q-7 2 0-8Z',palette.fill('slimeGreen'),hot,.65),end.x,end.y);
        const aim=a+side*(.6+n*.19);
        const speed=(28+n*11)*s;
        motion(drop,[{opacity:0,transform:'scale(.30)'},{opacity:.88,offset:.24},
          {opacity:0,transform:`translate(${Math.cos(aim)*speed}px,${Math.sin(aim)*speed+29}px) rotate(27deg) scale(.48)`}],540,hit+n*19);
      }
    }
  }

  const fistStyles = {
    'academy-sabrina':'black', 'ip-sabrina':'bare', 'zodiac-guardian-sabrina':'gold',
    'valhalla-sabrina':'bronze', 'ip-jet':'bare',
  };

  function flashFist(ctx, target, angle) {
    const {fist, motion, hitAt, reduced, scale} = ctx;
    const a=angle*Math.PI/180;
    const dx=Math.cos(a)*56*scale,dy=Math.sin(a)*56*scale;
    const x=target.x-Math.cos(a)*20*scale, y=target.y-Math.sin(a)*20*scale;
    const s=scale*.76;
    const node=placeSignature(ctx,'fist',fist,{x,y},angle);
    motion(node,reduced ? [{opacity:0,transform:`scale(${s})`},{opacity:.94},{opacity:0}]
      : [{opacity:0,transform:`translate(${-dx}px,${-dy}px) scale(${s*.61})`},
        {opacity:.95,transform:`translate(0,0) scale(${s})`,offset:.33},
        {opacity:.9,transform:`translate(${dx*.15}px,${dy*.15}px) scale(${s*1.09},${s*.97})`,offset:.52},
        {opacity:0,transform:`translate(${-dx*.08}px,${-dy*.08}px) scale(${s*.79})`}],530,hitAt-175,'linear');
  }


  function stageParcel(ctx, target) {
    const {origin, impactAt, effectScale, reduced, motion, art, palette, hot, color} = ctx;
    const gift = art(prop('boxyParcel',palette.fill,hot,color),origin.x,origin.y);
    gift.setAttribute('data-combat-prop','boxyParcel');
    const dx=target.x-origin.x, dy=target.y-origin.y;
    const lift=Math.min(126,Math.hypot(dx,dy)*.23+30);
    const launch=150;
    const points=[0,.2,.45,.7,.88,1];
    const frames=points.map((offset,i)=>{
      const x=dx*offset,y=dy*offset-Math.sin(offset*Math.PI)*lift;
      const size=effectScale*(.78-offset*.72);
      return {offset,opacity:i===0?0:i===points.length-1?0:1,
        transform:`translate(${x}px,${y}px) rotate(${offset*205-14}deg) scale(${size})`};
    });
    if (reduced) {
      const arrive=art(prop('boxyParcel',palette.fill,hot,color),target.x,target.y);
      arrive.setAttribute('data-combat-prop','boxyParcelTarget');
      motion(arrive,[{opacity:0,transform:'scale(.49)'},{opacity:.9},{opacity:0,transform:'scale(.14)'}],390,impactAt-195);
      motion(gift,[{opacity:0},{opacity:.9,transform:'scale(.62)'},{opacity:0}],440,launch);
    } else motion(gift,frames,impactAt-launch,launch,'linear');
  }

  const cymbalLead=365;
  function stageCymbals(ctx, target) {
    const {origin, impactAt, effectScale, reduced, motion, art, palette, hot, color} = ctx;
    const sign=target.x>=origin.x?1:-1;
    const point=mix(origin,target,.15);
    const center={x:point.x,y:Math.max(58,point.y-29*effectScale)};
    const collision=impactAt-cymbalLead;
    const s=effectScale*.72;
    [-1,1].forEach((side)=>{
      const x=center.x+side*16*s;
      const cymbal=art(prop('cymbal',palette.fill,hot,color),x,center.y,side*28);
      cymbal.setAttribute('data-combat-prop','cymbal');
      cymbal.setAttribute('data-beat',collision);
      const move=(spread,turn,tilt)=>`translateX(${side*spread}px) rotate(${side*turn}deg) scale(${tilt*s},${s})`;
      motion(cymbal,reduced ? [{opacity:0,transform:move(0,0,.74)},{opacity:1},{opacity:0}]
        : [{opacity:0,transform:move(64,27,.82)},
          {opacity:1,transform:move(49,16,1),offset:.33},
          {opacity:1,transform:move(0,0,.63),offset:.50},
          {opacity:1,transform:move(16,7,.87),offset:.63},
          {opacity:.74,transform:move(14,-9,.78),offset:.77},
          {opacity:0,transform:move(36,-21,1)}],collision*2-220,110,'linear');
    });
    if(reduced)return;
    const dx=target.x-center.x,dy=target.y-center.y;
    const a=Math.atan2(dy,dx)*180/Math.PI;
    const soundWave=art(repeat(4,i=>path(`M${i*7-10} -49Q${i*11+20} 0 ${i*7-10} 49`,'none',i%2?'#ffd48b':'#d1adff',2.15-i*.35)),center.x,center.y,a);
    motion(soundWave,[{opacity:0,transform:'scale(.27)'},{opacity:.93,transform:`translate(${dx*.38}px,${dy*.38}px) scale(${s*.94})`,offset:.38},
      {opacity:.87,transform:`translate(${dx}px,${dy}px) scale(${s*1.22})`,offset:cymbalLead/(cymbalLead+175)},
      {opacity:0,transform:`translate(${dx+sign*17}px,${dy}px) scale(${s*1.64})`}],cymbalLead+175,collision,'linear');
  }

  function stageHealingBottle(ctx, target) {
    const {impactAt, effectScale, reduced, motion, art, palette, hot, color} = ctx;
    const point={x:target.x,y:Math.max(60,target.y-67*effectScale)};
    const bottle=art(prop('healthBottle',palette.fill,hot,color),point.x,point.y);
    bottle.setAttribute('data-combat-prop','healthBottle');
    const s=effectScale*.95;
    motion(bottle,reduced ? [{opacity:0,transform:`scale(${s})`},{opacity:1},{opacity:0}]
      : [{opacity:0,transform:`translateY(21px) scale(${s*.44})`},
        {opacity:1,transform:`scale(${s})`,offset:.31},
        {opacity:1,transform:`rotate(-6deg) scale(${s*1.04})`,offset:.57},
        {opacity:0,transform:`translateY(-21px) rotate(-9deg) scale(${s*.85})`}],impactAt+240,105);
  }

  const winterTeaCards = new Set(['drinking-tea','wb-topaz-diamond','wb-steepod']);


  function flameOutline(center, widths, expansion) {
    const edge = (side) => center.map(([x,y],i)=>[x,y+widths[i]*side*expansion]);
    const polygon=[...edge(-1), ...edge(1).reverse()];
    const trace=polygon.map(([x,y],i)=>{
      const [nx,ny]=polygon[(i+1)%polygon.length];
      return `Q${x} ${y} ${(x+nx)*.5} ${(y+ny)*.5}`;
    }).join('');
    const [x,y]=polygon[0];
    const [lx,ly]=polygon.at(-1);
    return `M${(x+lx)*.5} ${(y+ly)*.5}${trace}Z`;
  }

  function firePlume(palette, seed) {
    const {fill, softenFlame}=palette;
    const drift=(i)=>((seed >>> (i*3)) % 15)-7;
    const length=.82+(seed>>>24)%21/55;
    const curlSide=seed&1?1:-1;
    const center=[[-13,2],[1,0],[16,drift(1)*.54],[34,drift(2)+8*curlSide],[55,drift(3)-14*curlSide],
      [74,drift(4)-8*curlSide],[101,drift(5)-9]].map(([x,y])=>[x*length,y]);
    const curl=center.map(([x,y],i)=>[x*.76+3,y-3+i*1.28]);
    const lick=center.map(([x,y],i)=>[x*1.02+2,y+5+drift(i%6)*.91]);
    const skin=flameOutline(center,[2,11,20,16,12,6,0],1.15);
    const air=flameOutline(lick,[0,0,7,9,6,3,0],1.22);
    const melt=flameOutline(curl,[1,4,9,8,4,1,0],.96);
    const threads=flameOutline(lick,[.5,2,5,3,2,1,0],.63);
    return `<g filter="${softenFlame()}">${path(skin,fill('jetFire'))}${path(air,fill('jetFire'))}${path(melt,fill('jetCore'))}${path(threads,fill('jetCore'))}</g>`;
  }

  function renderFireAir(ctx, point, start, heading, count) {
    if (ctx.reduced) return;
    const {art,motion,palette,effectScale,seed}=ctx;
    const s=effectScale;
    for(let i=0;i<4;i++){
      const drift=(-37+((seed>>>(i*4))%67))*s;
      const cloud=art(`<g filter="${palette.softenFlame()}">${oval(-19,6,41,27,palette.fill('jetSmoke'))}${oval(14,-7,39,30,palette.fill('jetSmoke'))}${oval(35,7,26,21,palette.fill('jetSmoke'))}</g>`,
        point.x+(i-1.5)*13*s,point.y+(i%2)*9);
      cloud.setAttribute('data-combat-prop','fireSmoke');
      motion(cloud,[{opacity:0,transform:'scale(.38)'},{opacity:.65,transform:`translate(${drift*.27}px,-17px) scale(${s*.83})`,offset:.25},
        {opacity:.51,transform:`translate(${drift*.56}px,-49px) scale(${s*1.04})`,offset:.60},
        {opacity:0,transform:`translate(${drift}px,${-83-i*6}px) rotate(${i*13-18}deg) scale(${s*1.36})`}],994+i*62,start+85+i*50,'ease-out');
    }
    for(let i=0;i<count;i++){
      const direction=heading+((i*47)%173-86)*Math.PI/180;
      const speed=(27+(i*23)%82)*s;
      const vx=Math.cos(direction)*speed,vy=Math.sin(direction)*speed;
      const spark=art(oval(0,0,4,1.6,palette.fill('jetHeat'))+oval(0,0,1.75,.8,i%3?'#ffd687':'#ff7d34'),
        point.x+(i%3-1)*8*s,point.y+(i%5-2)*4*s,direction*180/Math.PI);
      spark.setAttribute('data-combat-prop','fireSpark');
      motion(spark,[{opacity:0,transform:'scale(.61)'},{opacity:.96,transform:`translate(${vx*.38}px,${vy*.37-6}px) scale(${.84+i%4*.13})`,offset:.17},
        {opacity:.51,transform:`translate(${vx*.87}px,${vy*.85-22}px) scale(.67)`,offset:.67},
        {opacity:0,transform:`translate(${vx}px,${vy-41-i%6*7}px) scale(.28)`}],560+(i*31)%295,start+(i*17)%109,'ease-out');
    }
  }

  function fujinBag(fill) {
    return path('M55-4Q62 4 58 17L47 26Q42 28 41 19Q42 11 39 7Z',fill('blueCloth'),'#28526e',1.45)+
      path('M-67 14C-79-6-59-22-40-32C-15-46 27-42 45-22C63-5 48 15 37 15C24 15 22-1 7-7C-11-14-27-10-33 4C-35 15-47 23-58 22Z',fill('fujinSilk'),'#3d779b',2.15)+
      path('M-68 8Q-62-13-44-22Q-7-43 21-30Q40-24 46-12M-43-2C-33-14-20-21-3-17Q22-16 33 5','none','#b8f3ffb4',2)+
      path('M-56-7C-63-14-54-22-43-17C-37-24-25-23-23-16Q-10-19-6-11C-8-4-17-4-23-6Q-33-2-42-8Q-53-3-56-7Z M0-28C4-37 17-35 21-29Q34-33 39-26Q42-18 27-18Q18-21 12-18Q0-17 0-28Z',
        '#f8d9eb','#9976ae',1.4)+
      path('M-50-13Q-42-17-37-12Q-32-9-34-6M4-29Q10-32 17-27L17-24M-61 12Q-59 19-54 22M43 13Q48 16 48 25','none','#e0b3d2',1.28)+
      path('M-64 14l13 13-5 3-10-11M37 15l10 14 7-7m-10 8-7 13m10-12 5 8M-57 29l-5 12m10-11 4 13',
        'none',fill('gold'),2.8)+oval(55,17,7,5,'#24415d','stroke="#deb8d8" stroke-width="1.4"');
  }

  function rescueBuoy(fill, zodiac) {
    const ring='M-61 0a61 41 0 1 1 122 0a61 41 0 1 1 -122 0ZM-30 0a30 20 0 1 0 60 0a30 20 0 1 0 -60 0Z';
    return `<g fill-rule="evenodd">${path(ring,fill(zodiac?'pearlCloth':'ruby'),zodiac?'#fff0d2':'#ffbd9f',2.05)}</g>`+
      path('M-58-10C-49-29-18-41 10-37M19 37Q47 30 55 17M-24 10Q-16 23 8 19','none','#ffbec8',2.4)+
      path('M-48-26Q-36-35-25-36L-11-19Q-22-16-27-10Z M35-33Q44-31 52-22L26-8Q24-15 16-17Z M51 25Q39 34 30 35L16 17Q24 15 27 8Z M-34 35Q-45 32-52 23L-27 8Q-24 15-16 17Z',fill(zodiac?'gold':'pearlCloth'),'#ffc97f',1.6)+
      path('M-59 5Q-51 12-60 19Q-48 32-37 35M35-35Q49-39 59-28Q65-21 59-12','none',fill('gold'),3.2)+
      path('M-16-26Q-3-30 13-27M9 30Q21 26 26 24','none','#fff3a4',1.42)+
      (zodiac ? path('M-45-24l19 13M39-28l-17 15M47 22L28 11M-48 25l21-14','none','#fff4c5',1.8) : '');
  }

  function carouselHorse(fill) {
    return path('M-38-5Q-44-5-53 8L-61 7Q-54-5-46-13L-38-10 M-31 5Q-14 13 5 6L21 20 35 19 37 24 16 27 0 15Q-11 15-18 17L-29 31-40 33-41 28-32 25-25 10Z',
      fill('gold'),'#765741',1.45)+
      path('M-36-6Q-34-16-21-15L3-14Q8-29 17-34L19-45 23-41 24-33 31-40 34-32 43-26 46-16 38-14 30-23Q24-22 19-13C17 5 3 13-12 11C-31 13-44 8-36-6Z',fill('pearlCloth'),'#725339',1.4)+
      path('M7-15Q4-32 17-35L15-23 28-33Q17-21 19-12L13-6Z',fill('gold'),'#9b613b',1.1)+
      path('M-28-14L2-14 5 1Q-8 8-24 3Z',fill('blueCloth'),'#f5cb82',1.9)+
      path('M-30-8Q-20 1-6-3M26-26L39-20M-18 12L-29 23','none','#e2bc81',1.25)+oval(32,-27,1.8,1.9,'#412a36');
  }

  function melodollHarp(fill) {
    return path('M-32 40Q-13 52 35 42L33 49Q-6 59-40 50Z',fill('gold'),'#6e4747',1.5)+
      path('M-33 38C-42 5-33-21-48-46Q-53-67-26-60Q-10-54-21-48C0-47 28-13 37 39L30 44Q22 7 3-18Q-8-34-22-36C-27-15-28 15-24 42Z',fill('wood'),'#896044',2.2)+
      path('M-34 40C-41 7-31-27-42-47Q-42-55-32-54C-26-54-17-42-12-42Q14-28 23-2','none',fill('gold'),2.7)+
      repeat(9,i=>path(`M${i*5.6-20} ${-37+i*4.5+i*i*.43}V${43-i*.13}`,'none',i%2?'#a9efaa':'#fce1a8',.77))+
      path('M-33 42Q-37-4-28-34M4-28Q19-13 25 5','none','#e6d598',1.22);
  }

  function fireBurstFromFist(ctx, target, angle) {
    const radians=angle*Math.PI/180, size=ctx.scale;
    const point={x:target.x+Math.cos(radians)*9*size,y:target.y+Math.sin(radians)*9*size};
    const flash=ctx.art(oval(0,0,44,29,ctx.palette.fill('jetHeat')),point.x,point.y,angle);
    flash.setAttribute('data-combat-prop','fireHeat');
    ctx.motion(flash,[{opacity:0,transform:`scale(${size*.48})`},
      {opacity:.91,transform:`scale(${size})`,offset:.18},{opacity:0,transform:`scale(${size*1.33})`}],
      395,ctx.hitAt-22);
    const directions=[-103,-59,-18,14,48,112];
    directions.forEach((turn,i)=>{
      const travelAngle=(angle+turn)*Math.PI/180;
      const seed=Math.imul(ctx.seed^(i+7),887);
      const plume=ctx.art(firePlume(ctx.palette,seed),point.x,point.y,angle+turn);
      plume.setAttribute('data-combat-prop','fistFlame');
      const s=size*[.40,.69,1.16,.91,.63,.47][i];
      const driftX=Math.cos(travelAngle)*(21+i%3*10)*s,driftY=Math.sin(travelAngle)*(21+i%3*10)*s;
      ctx.motion(plume, ctx.reduced
        ? [{opacity:0,transform:`scale(${s*.68})`},{opacity:.84,offset:.22},{opacity:0}]
        : [{opacity:0,transform:`scale(${s*.25},${s*.64}) rotate(${i%2?-7:9}deg)`},
          {opacity:.99,transform:`translate(${driftX*.10}px,${driftY*.10-3}px) scale(${s*.83},${s*.94})`,offset:.16},
          {opacity:.81,transform:`translate(${driftX*.53}px,${driftY*.54-8}px) scale(${s*1.12},${s*.77}) rotate(${i%2?9:-13}deg)`,offset:.43},
          {opacity:.41,transform:`translate(${driftX*.85}px,${driftY*.92-26}px) scale(${s*1.14},${s*.52}) rotate(${i%2?16:-17}deg)`,offset:.71},
          {opacity:0,transform:`translate(${driftX}px,${driftY-53}px) scale(${s*1.21},${s*.35}) rotate(${i%2?10:-21}deg)`}],
        685+i*37,ctx.hitAt+[0,35,8,23,56,84][i],'ease-out');
    });
    renderFireAir(ctx,point,ctx.hitAt,radians,14+ctx.baseAttack);
  }

  function stageKindle(ctx, target) {
    const {art,motion,palette,impactAt,effectScale,reduced,seed}=ctx;
    const root={x:target.x,y:target.y+45*effectScale};
    const bed=art(oval(0,0,54,20,palette.fill('jetHeat')),root.x,root.y);
    bed.setAttribute('data-combat-prop','fireHeat');
    motion(bed,[{opacity:0,transform:`scale(${effectScale*.39})`},
      {opacity:.77,transform:`scale(${effectScale})`,offset:.29},{opacity:.51,offset:.61},{opacity:0}],940,impactAt-430);
    const runs=[[-32,-105,.52],[-17,-97,.74],[4,-88,1.04],[17,-75,.69],[33,-65,.53]];
    runs.forEach(([x,angle,weight],i)=>{
      const plume=art(firePlume(palette,Math.imul(seed+i+13,991)),root.x+x*effectScale,root.y+(i%2)*6,angle);
      plume.setAttribute('data-combat-prop','kindleFlame');
      const s=effectScale*weight, drift=(i-2)*9;
      motion(plume,reduced?[{opacity:0,transform:`scale(${s})`},{opacity:.79},{opacity:0}]:[
        {opacity:0,transform:`scale(${s*.29},${s*.79}) rotate(-8deg)`},
        {opacity:.97,transform:`translate(${drift*.25}px,-11px) scale(${s},${s*.92})`,offset:.24},
        {opacity:.70,transform:`translate(${drift*.53}px,-28px) scale(${s*.87},${s*1.05}) rotate(${drift*.8}deg)`,offset:.55},
        {opacity:.43,transform:`translate(${drift*.78}px,-47px) scale(${s*1.14},${s*.71})`,offset:.76},
        {opacity:0,transform:`translate(${drift}px,-70px) scale(${s*.66},${s*.42})`}],
        1040+i*43,impactAt-525+[130,60,0,96,164][i],'ease-out');
    });
    renderFireAir(ctx,{x:target.x,y:target.y+12*effectScale},impactAt-235,-Math.PI/2,10+ctx.baseAttack);
  }

  function stageFujin(ctx, target) {
    const {origin, effectScale, impactAt, palette, art, motion, reduced}=ctx;
    const aim=Math.atan2(target.y-origin.y,target.x-origin.x);
    const angle=aim*180/Math.PI;
    const s=effectScale*.78;
    const position=mix(origin,target,.16);
    const body={x:position.x+Math.sin(aim)*12*s,y:position.y-Math.cos(aim)*12*s};
    const bag=art(fujinBag(palette.fill),body.x,body.y,angle);
    bag.setAttribute('data-combat-prop','fujinBag');
    motion(bag,reduced?[{opacity:0,transform:`scale(${s})`},{opacity:.95},{opacity:0}]:[
      {opacity:0,transform:`scale(${s*.58})`},{opacity:1,transform:`scale(${s},${s*1.15})`,offset:.31},
      {opacity:.99,transform:`scale(${s*.96},${s*.80})`,offset:.68},
      {opacity:0,transform:`scale(${s*.81},${s*.75})`}],impactAt+590,120,'ease-in-out');
    if (!reduced) {
      const spout={x:body.x+(54*Math.cos(aim)-15*Math.sin(aim))*s,y:body.y+(54*Math.sin(aim)+15*Math.cos(aim))*s};
      channel({...ctx,hitAt:impactAt,scale:s,color:'#91dfff',hot:'#f3fcff'},spout,target,'gale');
    }
  }

  function stageBuoyThrow(ctx, target) {
    const {origin, art, motion, palette, reduced, impactAt, effectScale, card, melee}=ctx;
    const zodiac=card.id==='ip-chase-zodiac';
    const span=Math.hypot(target.x-origin.x,target.y-origin.y);
    const launch=melee?mix(origin,target,Math.max(.52,1-105*effectScale/Math.max(1,span))):origin;
    const vx=target.x-launch.x,vy=target.y-launch.y;
    const dist=Math.hypot(vx,vy);
    const bend=Math.min(103,Math.max(7,dist*.27));
    const xs=dist>1?vx/dist:1,ys=dist>1?vy/dist:0;
    const ring=art(rescueBuoy(palette.fill,zodiac),launch.x,launch.y);
    ring.setAttribute('data-combat-prop','rescueBuoy');
    ring.setAttribute('data-buoy-trim',zodiac?'gold':'pearl');
    const release=melee?impactAt-270:Math.round(impactAt*.28);
    const s=effectScale*.80;
    const travel=impactAt-release;
    const duration=travel+270;
    const keyframes=[0,.22,.46,.73,1].map((t,i)=>{
      const offset=Math.sin(t*Math.PI)*bend;
      const x=vx*t-ys*offset,y=vy*t+xs*offset;
      return {offset:t*travel/duration,opacity:i===0?0:.98,
        transform:`translate(${x}px,${y}px) rotate(${185*t-24}deg) scale(${s*(.72+t*.24)},${s*(.67+.31*Math.abs(Math.cos(t*Math.PI)))})`};
    });
    if (reduced) {
      motion(ring,[{opacity:0,transform:`scale(${s*.73})`},{opacity:.94},{opacity:0}],540,release);
    } else {
      motion(ring,[...keyframes,{offset:1,opacity:0,transform:`translate(${vx}px,${vy+16}px) scale(${s*.24})`}],
        duration,release,'linear');
    }
  }

  function stageMerryGoRound(ctx, target) {
    const {origin, viewport, art, motion, palette, reduced, impactAt, effectScale}=ctx;
    const mid=mix(origin,target,.57);
    const point={x:Math.max(100,Math.min(viewport.w-100,mid.x)),y:Math.max(119,mid.y-28)};
    const {fill}=palette,s=Math.min(1.48,effectScale)*.97,show=130;
    const structure=(drawing,tag)=>{
      const node=art(drawing,point.x,point.y);
      node.setAttribute('data-combat-prop',tag);
      motion(node,[{opacity:0,transform:`scale(${s*.84})`},{opacity:1,transform:`scale(${s})`,offset:.20},
        {opacity:.97,offset:.78},{opacity:0}],impactAt+1000,show);
    };
    structure(path('M-92 49L-92 58Q0 105 92 58L92 49Z',fill('gold'),'#9d663c',1.4)+
      oval(0,48,92,29,fill('blueCloth'),'stroke="#f4cd86" stroke-width="2"')+
      oval(0,48,71,20,'none','stroke="#c2a07b" stroke-width="1.3"')+
      path('M-6-69H6V50Q0 54-6 50Z',fill('gold'),'#7c5162',1.5),'carouselBase');
    for(let i=0;i<4;i++){
      const horse=art(path('M-1-57H2V33H-1Z',fill('gold'))+carouselHorse(fill),point.x,point.y);
      horse.setAttribute('data-combat-prop','carouselHorse');
      const turns=32;
      const frames=Array.from({length:turns+1},(_,step)=>{
        const t=step/turns,phi=i*Math.PI/2+(reduced?0:t*2.45*Math.PI);
        const back=Math.sin(phi),x=Math.cos(phi)*62*s,y=(16*back+6+(reduced?0:Math.sin(t*5*Math.PI+i)*7))*s;
        const size=s*(.64+.13*back),side=Math.sin(phi+Math.PI/16)<0?-1:1;
        return {offset:t,opacity:Math.min(1,step/5,(turns-step)/7)*(.80+back*.17),
          transform:`translate(${x}px,${y}px) scale(${size*side},${size})`};
      });
      motion(horse,frames,impactAt+1000,show,'linear');
    }
    const roof=path('M-90-49Q-45-59-4-104L0-111 4-104Q48-58 90-49Q0-23-90-49Z',fill('blueCloth'),'#dbaa68',2)+
      path('M-67-43Q-32-63-4-103Q-22-56-36-38M-12-37Q0-69 0-110Q3-71 23-38M51-38Q34-63 7-102Q48-62 72-44Z',fill('pearlCloth'),'#ecbd77',1.7)+
      path('M-90-48Q0-15 90-48M-90-43Q-77-32-66-38Q-53-24-39-31Q-27-20-14-26Q2-17 17-26Q31-19 44-32Q58-26 69-38Q81-32 90-43','none',fill('gold'),3.25)+
      oval(0,-110,5.4,5.8,fill('gold'));
    structure(roof,'carouselCanopy');
  }

  function stageHarp(ctx,target) {
    const {origin, impactAt, art, motion, palette, reduced, effectScale}=ctx;
    const start=mix(origin,target,.27), point={x:start.x+30,y:Math.max(65,start.y-53)};
    const harp=art(melodollHarp(palette.fill),point.x,point.y,-9);
    harp.setAttribute('data-combat-prop','melodollHarp');
    const s=effectScale*.92;
    motion(harp,reduced?[{opacity:0,transform:`scale(${s})`},{opacity:.94},{opacity:0}]:[
      {opacity:0,transform:'translateY(19px) scale(.35)'},{opacity:1,transform:`scale(${s})`,offset:.33},
      {opacity:.94,transform:`rotate(7deg) scale(${s})`,offset:.70},{opacity:0,transform:`translateY(-14px) scale(${s*.86})`}],
    impactAt+660,123);
    if(!reduced) channel({...ctx,hitAt:impactAt,scale:s,color:'#b8ecac',hot:'#ecbaff'},point,target,'score');
  }

  function setPiece(ctx) {
    const {direction, origin, targets, palette, motion, hot, color, impactAt, reduced, effectScale, viewport} = ctx;
    const move=direction.move;
    const scale=Math.min(1.55,effectScale*.83);
    if (move==='sendParcel') { stageParcel(ctx, targets[0]); return true; }
    if (move==='fujinWind') { stageFujin(ctx, targets[0]); return true; }
    if (move==='buoyThrow') { stageBuoyThrow(ctx, targets[0]); return true; }
    if (move==='kindle') { stageKindle(ctx, targets[0]); return true; }
    if (move==='lullaby') { stageHarp(ctx, targets.at(-1)); return true; }
    if (move==='merryGoRound') { stageMerryGoRound(ctx, targets.at(-1)); return true; }
    if (move==='cymbals') { stageCymbals(ctx, targets[0]); return true; }
    if (move==='healing') { stageHealingBottle(ctx, targets[0]); return true; }
    if (move==='raijin' || move==='mirrors' || move==='prism') {
      if (move==='raijin') stageRaijin(ctx, targets[0], scale);
      if (move==='mirrors') stageMirrors(ctx, targets[0], scale);
      if (move==='prism') stageAvatarGem(ctx, targets[0], scale);
      return true;
    }
    if (!['horses','windup','tree','kettles','serving'].includes(move)) return false;
    const first=targets[0], last=targets.at(-1);
    const sign=last.x>=origin.x?1:-1;
    const bounds=(value,lo,hi)=>Math.max(lo,Math.min(hi,value));
    const s=Math.min(1.6,effectScale);
    const figure=(kind,x,y,angle=0)=>ctx.art(prop(kind,palette.fill,hot,color),x,y,angle);
    if (move==='horses') {
      const start=targets.length>1?first:origin;
      const finish=targets.length>1?last:{x:first.x,y: Math.max(80,first.y-190)};
      const dx=finish.x-start.x,dy=finish.y-start.y;
      const yaw=Math.atan2(dy,dx)*180/Math.PI+90;
      const width=Math.max(18,Math.min(100,first.w*.47));
      for(let i=0;i<4;i++){
        const flank=(i%2?1:-1)*width*(i<2?.35:.63);
        const position={x:start.x+flank-dx*.30,y:start.y-dy*.30};
        const stride=ctx.art(horseBody(palette.fill),position.x,position.y,yaw);
        const legPositions=[[-13,-28,1],[12,-26,-1],[-15,30,-1],[15,31,1]];
        legPositions.forEach(([x,y,side],j)=>{
          const leg=ctx.svgNode('g',{transform:`translate(${x} ${y})`},stride);
          const joint=ctx.svgNode('g',{class:'combat-scene-limb'},leg);
          joint.innerHTML=path(`M-3-4Q${side*11} 7 ${side*8} 17L${side*15} 31L${side*9} 36L${side*3} 24Q-5 14-3 4Z`,palette.fill('wood'),'#50302d',1.2)+
            path(`M${side*8} 28L${side*16} 31L${side*11} 38L${side*6} 35Z`,'#36202d');
          if(!reduced)joint.animate?.([{transform:`rotate(${32*side}deg)`},{transform:`rotate(${-30*side}deg)`},{transform:`rotate(${32*side}deg)`}],
            {delay:160+i*123+j*26,duration:225,iterations:7,easing:'ease-in-out',fill:'both'});
        });
        const flight=ctx.svgNode('g',{},ctx.layer);
        flight.appendChild(stride.parentNode);
        const horseScale=(.63+i%2*.09)*s;
        stride.setAttribute('transform', `scale(${horseScale})`);
        const delay=105+i*135;
        motion(flight,reduced?[{opacity:0},{opacity:.83},{opacity:0}]:[
          {opacity:0,transform:'translate(0, 0)'},{opacity:1,offset:.13},
          {opacity:.96,transform:`translate(${dx*.84}px,${dy*.84}px)`,offset:.55},
          {opacity:0,transform:`translate(${dx*1.51}px,${dy*1.51}px)`},
        ],1270,delay,'linear');
        if (!reduced) for(let j=0;j<5;j++){
          const p=mix(start,finish,j/4);
          const dust=ctx.art(palette.paint('earth','impact',ctx.seed+i+j,'mud'),p.x+flank,p.y,yaw);
          motion(dust,[{opacity:0,transform:'scale(.14)'},{opacity:.46,offset:.31},{opacity:0,transform:'scale(.64)'}],630,delay+212+j*177);
        }
      }
      return true;
    }
    if(move==='tree'){
      const x=bounds(first.x,viewport.w*.24,viewport.w*.76);
      const y=bounds(first.y,viewport.h*.48,viewport.h*.71);
      const pine=figure('tree',x,y);
      motion(pine,reduced?[{opacity:0},{opacity:1},{opacity:0}]:[
        {opacity:0,transform:'translateY(20px) scale(.12)'},{opacity:1,transform:`scale(${1.56*s})`,offset:.38},
        {opacity:1,transform:`scale(${1.50*s})`,offset:.76},{opacity:0,transform:`translateY(-12px) scale(${1.59*s})`}
      ],impactAt+1090);
      for(let i=0;i<5;i++){
        const entry=figure(i%2?'bell':'gift',x+(i-2)*43*s,y+39);
        motion(entry,[{opacity:0,transform:'translateY(-30px) scale(.2)'},{opacity:1,transform:`translateY(0) scale(${.64*s})`,offset:.4},{opacity:0}],1110,impactAt*.48+i*97);
      }
      if(!reduced)for(let i=0;i<26;i++){
        const xOffset=((i*41)%177-88)*s, yOffset=((i*23)%152-77)*s;
        const snow=ctx.art(prop('shard',palette.fill,'#fff8e7',color),x+xOffset,y+yOffset-70);
        motion(snow,[{opacity:0,transform:'translateY(-26px) scale(.055)'},{opacity:.82,offset:.23},
          {opacity:0,transform:`translate(${i%2?23:-20}px,115px) rotate(${i*23}deg) scale(.12)`}],1290,180+i*21);
      }
      return true;
    }
    if(move==='windup'){
      const x=bounds(first.x,viewport.w*.25,viewport.w*.75);
      const y=bounds(first.y-36,viewport.h*.30,viewport.h*.68);
      const body=figure('toy',x,y,-11);
      motion(body,[{opacity:0,transform:'translateY(26px) scale(.4)'},{opacity:1,transform:`translateY(2px) scale(${s})`,offset:.27},
        {opacity:1,transform:`translateY(0) rotate(-5deg) scale(${s})`,offset:.54},
        {opacity:1,transform:`translateY(-25px) rotate(7deg) scale(${s*1.04})`,offset:.77},
        {opacity:0,transform:`translateY(-55px) scale(${s*.72})`}],impactAt+1010);
      const key=figure('key',x+40*s,y+6*s,37);
      const turns=[0,29,102,120,181,199,291,318,388];
      const frames=turns.map((angle,i)=>({opacity:i===0||i===turns.length-1?0:1,transform:`rotate(${reduced?0:angle}deg) scale(${s*.67})`,offset:i/(turns.length-1)}));
      motion(key,frames,1470,140,'linear');
      for(let i=0;i<5;i++){
        const gear=figure('gear',x+(i-2)*43,y-59+i%2*89);
        motion(gear,[{opacity:0,transform:'scale(.13)'},{opacity:.8,transform:`scale(${s*.46})`,offset:.25},
          {opacity:0,transform:`rotate(${i%2?-165:180}deg) translateY(-50px) scale(.18)`}],670,880+i*75);
      }
      return true;
    }
    if (!winterTeaCards.has(ctx.card.id)) return false;
    const pots=move==='kettles'?3:1;
    const relevant=move==='serving'&&targets.length>1?last:first;
    const center=mix(origin,relevant,move==='kettles'?.47:.78);
    const y=bounds(center.y-70,117,viewport.h-145);
    for(let i=0;i<pots;i++){
      const offset=(i-(pots-1)/2)*73*s;
      const x=bounds(center.x+offset,48,viewport.w-48);
      const porcelain = prop('teapot',palette.fill,hot,color);
      const teapot = ctx.art(sign < 0 ? group('scale(-1 1)',porcelain) : porcelain,x,y-i%2*33);
      const tilt=sign>0?37:-39;
      motion(teapot,[
        {opacity:0,transform:'translateY(24px) scale(.24)'},{opacity:1,transform:`rotate(-8deg) scale(${s*.64})`,offset:.29},
        {opacity:1,transform:`rotate(${tilt}deg) scale(${s*.73})`,offset:.64},{opacity:0,transform:`translateY(-28px) rotate(${tilt}deg) scale(${s*.55})`},
      ],impactAt+725,130+i*138);
      if (!reduced) {
        const entry={x:x+36*sign*s,y:y+16-i%2*33}, tip={x:relevant.x+(i-1)*19,y:relevant.y+13};
        const scene = {...ctx, hitAt:impactAt + i * 90, scale:s};
        if (ctx.aer === 'electric' || (ctx.aer === 'mixed' && i === 1)) {
          discharge(scene, entry, tip, impactAt - 235 + i * 96, {
            spread:14 * s, branches:3, width:1.65 * s, tint:'#b8a8ff', time:570, salt:211 * (i + 1),
          });
        }
        if (ctx.aer === 'wind' || (ctx.aer === 'mixed' && i !== 1)) {
          channel({...scene, color:'#a8d6f5', hot:'#eef7fe'}, {x:entry.x, y:entry.y-14*s}, tip, 'crosswind');
        }
        const stream=ctx.svgNode('path',{d:`M${entry.x} ${entry.y}Q${entry.x+29*sign} ${entry.y-34} ${tip.x} ${tip.y}`,
          pathLength:1,fill:'none',stroke:i===1?'#ffc252':'#c78731','stroke-width':6*s,'stroke-linecap':'round','stroke-dasharray':'.63 .37',class:'combat-channel-core'},ctx.layer);
        motion(stream,[{opacity:0,strokeDashoffset:1},{opacity:.94,strokeDashoffset:0,offset:.67},{opacity:0,strokeDashoffset:-.28}],650,impactAt-400+i*105,'linear');
        for(let j=0;j<3;j++){
          const steam=figure('steam',x+j*15-13,y-47);
          motion(steam,[{opacity:0,transform:'scale(.19)'},{opacity:.63,offset:.31},{opacity:0,transform:'translateY(-54px) scale(.8)'}],770,210+i*105+j*115);
        }
      }
    }
    if(direction.contact==='chamomile'||ctx.card.id==='wb-steepod'){
      for(let i=0;i<9;i++){
        const chamomile=figure('flower',relevant.x,relevant.y);
        const a=i*Math.PI*2/9;
        motion(chamomile,[{opacity:0,transform:'scale(.2)'},{opacity:1,transform:`translate(${Math.cos(a)*45*s}px,${Math.sin(a)*34*s}px) scale(${.69*s})`,offset:.43},
          {opacity:0,transform:`translate(${Math.cos(a)*81*s}px,${Math.sin(a)*58*s+24}px) rotate(${i*48}deg) scale(.32)`}],1040,impactAt-32+i*23);
      }
    }
    return true;
  }

  const channelMoves = new Set(['beam','beams','chains','lash','roots','river','surf','gale','ink','ribbon','stitch','cross']);
  const groundSets = {
    gate:['arch','card',3], portal:['arch','mask',4], implosion:['shard','orb',5], trap:['shard','shield',6],
    armor:['shield','shard',3], bloom:['flower','leaf',7], fountain:['drop','shard',5], forge:['hammer','gear',4],
    panorama:['arch','leaf',5], carousel:['gift','gear',6], target:['notice','coin',3], stamp:['notice','coin',3],
    frost:['shard','steam',6], hatch:['egg','shard',5], escort:['leaf','rib',5], curtain:['rib','card',5],
    tavern:['cup','coin',4], brew:['potion','steam',6], orbit:['shard','coin',6],
  };

  const locationProps = {
    'academy-grounds':['tome','lantern'], cooking:['cookpot','salt'],
    'locker-room':['bag','rib'], 'mana-potion':['potion','drop'],
    'ww-wanted-poster':['notice','paper'], 'cactus-creek':['cactus','leaf'], 'ww-root':['leaf','shard'],
    'ww-planting':['leaf','flower'], 'ip-field':['seaGate','drop'], 'ip-swim-dont-sink':['bubble','drop'],
    'ip-no-pain-no-gain':['anvil','gear'], 'lt-toy-capsule':['egg','stageDoll'],
    'toy-store':['stageDoll','gear'], 'lt-doll-chorus':['stageDoll','note'], 'wb-shopping':['bag','gift'],
    'christmas-mall':['lantern','gift'], 'wb-wedding-proposal':['coin','flower'], 'valhalla-bar':['keg','bell'],
    'valkyries-mead':['keg','cup'], 'golden-egg-flatbread':['flatbread','egg'], training:['dummy','shard'],
    gummy:['wrap','steam'], brewy:['potion','drop'], dharma:['potion','leaf'],
    frosty:['iceWall','shard'], 'wb-sageape':['iceWall','steam'],
  };
  const processions = {
    swarm:[6,'missile'], pages:[4,'card'], score:[6,'note'], volley:[3,'missile'], twin:[2,'missile'], sling:[2,'missile'],
  };

  function choreograph(ctx, to, rotation, missile) {
    const {direction, origin, seed, scale, reduced, motion, palette, hot, color, hitAt, melee} = ctx;
    const move=direction.move;
    if (ctx.special) return true;
    if (move==='slimeClaws') {
      stageSlimeClaws(ctx,to,rotation);
      return true;
    }
    if (ctx.fist) flashFist(ctx,to,rotation);
    if (move==='fireFist') { fireBurstFromFist(ctx,to,rotation); return true; }
    const distance=Math.hypot(to.x-origin.x,to.y-origin.y);
    if (!reduced && ctx.aer === 'electric' && !melee && distance > 16 && !channelMoves.has(move)) {
      const charged = mix(origin, to, move === 'score' ? .53 : .23);
      discharge(ctx, origin, charged, hitAt - 520, {width:1.2*scale, spread:12*scale, tint:'#98c7ff', time:385});
    }
    if (!reduced && channelMoves.has(move) && distance>16 && !melee) {
      if (ctx.aer === 'electric') {
        discharge(ctx, origin, to, hitAt - 345, {width:2.1*scale, spread:18*scale, branches:4, time:620});
      } else {
        channel(ctx, origin, to, ctx.aer === 'wind' ? 'crosswind' : move);
      }
      if(ctx.attack && ctx.card.role==='Shooter'){
        const shot=ctx.art(missile,origin.x,origin.y,rotation);
        const dx=to.x-origin.x,dy=to.y-origin.y;
        motion(shot,[{opacity:0,transform:'scale(.31)'},{opacity:.89,transform:`translate(${dx*.39}px,${dy*.39}px) scale(${scale*.75})`,offset:.43},
          {opacity:0,transform:`translate(${dx}px,${dy}px) scale(${scale*.54})`}],hitAt-280,280,'linear');
      }
      if(move==='surf'||move==='river'){
        const wave=ctx.art(palette.paint('water','impact',seed,'wave'),to.x,to.y,rotation);
        motion(wave,[{opacity:0,transform:'scale(.25,.55)'},{opacity:.85,transform:`scale(${scale*.86},${scale*.65})`,offset:.4},
          {opacity:0,transform:`translateY(18px) scale(${scale*1.24},${scale*.42})`}],885,hitAt-255);
      }
      return true;
    }
    if(processions[move] && !melee && !reduced && distance>16){
      const [count,object]=processions[move];
      for(let i=0;i<count;i++){
        const o=i-(count-1)/2, delay=160+i*71;
        const travel=hitAt-delay-(count-1-i)*22;
        const body=object==='missile'?missile:prop(object,palette.fill,hot,color);
        const actor=ctx.art(body,origin.x,origin.y,rotation+(i%2?-15:8));
        const dx=to.x-origin.x,dy=to.y-origin.y;
        const offsetX=o*19-dy*.13*(i%2?1:-1);
        const offsetY=o*6+dx*.12*(i%2?1:-1);
        const ss=(object==='missile'?.75:.54)*scale;
        motion(actor,[
          {opacity:0,transform:`scale(${ss*.4})`},
          {opacity:.92,transform:`translate(${dx*.18+offsetX*.61}px,${dy*.18+offsetY*.61}px) scale(${ss})`,offset:.27},
          {opacity:1,transform:`translate(${dx*.51+offsetX}px,${dy*.51+offsetY}px) rotate(${o*7}deg) scale(${ss})`,offset:.61},
          {opacity:0,transform:`translate(${dx+o*8}px,${dy+o*6}px) scale(${ss*.65})`},
        ],travel,delay,'ease-in-out');
      }
      if(move==='score')channel(ctx,origin,to,'score');
      return true;
    }
    const stage=groundSets[move];
    if(!stage) return false;
    const [defaultPrimary, defaultSecondary, count] = stage;
    const fountain = move==='fountain' && ctx.card.element!=='Aqua'
      ? ['shard', 'orb'] : [defaultPrimary, defaultSecondary];
    const [primary, secondary] = !ctx.attack && locationProps[ctx.card.id] || fountain;
    const anchor=move==='panorama'||move==='carousel'?mix(origin,to,.68):to;
    const from=move==='escort'?origin:anchor;
    if (move==='escort' && !reduced && distance>16) channel(ctx,origin,to,'ribbon');
    const height=move==='gate'||move==='portal'?39:move==='forge'?61:17;
    const figure=ctx.art(prop(primary,palette.fill,hot,color),from.x,from.y-height);
    const settle=move==='forge'?'translateY(28px)':move==='implosion'?'translateY(-7px)':'translateY(0)';
    motion(figure,reduced?[{opacity:0},{opacity:.9},{opacity:0}]:[
      {opacity:0,transform:`translateY(30px) scale(${scale*.26})`},
      {opacity:.92,transform:`${settle} scale(${scale*(move==='panorama'?1.35:.91)})`,offset:.31},
      {opacity:.86,transform:`scale(${scale*1.05})`,offset:.67},
      {opacity:0,transform:`translateY(-17px) scale(${scale*1.24})`},
    ],1090,hitAt-520);
    if (!reduced) for(let i=0;i<count;i++){
      const a=(i/count)*Math.PI*2+(seed%33)/16, dist=(38+(i%4)*12)*scale;
      const at=ctx.art(prop(secondary,palette.fill,hot,color),anchor.x,anchor.y,i*27);
      const reverse=move==='implosion'||move==='trap';
      const translate=`translate(${Math.cos(a)*dist}px,${Math.sin(a)*dist*.61}px)`;
      motion(at,[
        {opacity:0,transform:reverse?`${translate} scale(.66)`:'scale(.20)'},
        {opacity:1,transform:reverse?`scale(${scale*.38})`:`${translate} scale(${scale*.44})`,offset:.61},
        {opacity:0,transform:`${translate} rotate(${i%2?44:-42}deg) scale(.17)`},
      ],835,hitAt-355+i*69);
    }
    return true;
  }

  const contactDetails = {
    cleave:['cut','shard',4], syrup:['fluid','drop',16], sugar:['fluid','orb',10], embers:['rays','orb',12],
    feathers:['spiral','leaf',7], mask:['inward','mask',4], roar:['fold','shard',8], sun:['rays','orb',12],
    rift:['crack','orb',5], folds:['spiral','rib',7], tide:['surf','drop',10], drops:['fluid','drop',9],
    sleet:['rain','shard',13], facets:['crystal','shard',9], whorl:['spiral','rib',5], fault:['crack','shard',10],
    circuit:['circuit','gear',7], bolts:['rays','shard',9], ripples:['echo','drop',5], notes:['echo','note',9],
    plates:['break','shield',7], vines:['briar','leaf',8], leaves:['spiral','leaf',10],
    threads:['threads','rib',6], cloth:['fold','rib',8], shell:['break','egg',8], splinters:['splinter','shard',11],
    marks:['seal','coin',5], mud:['fluid','orb',12], gashes:['cut','rib',4], petals:['spiral','flower',10],
    paper:['fold','card',7], ink:['fluid','drop',14], foam:['fluid','orb',14], porcelain:['splinter','shard',12],
    tea:['fluid','drop',14], chamomile:['fluid','flower',11], steam:['spiral','steam',7],
    ornaments:['rain','bell',11], coil:['echo','gear',8],
    prismBloom:['prism','shard',8], gelSnap:['fluid','slimeDrop',10],
    crystalRenewal:['heart','shard',11], parcelArrival:['parcel','orb',4], cymbalRings:['metalWave','shard',7],
    fistFire:['fireFan','orb',0], fireRise:['fireRise','orb',0], poolSplash:['splash','drop',12], zodiacSplash:['splash','drop',15],
    harpRestore:['harpWave','note',5], carouselTrails:['wind','shard',6],
    windShear:['wind','feather',5], drift:['wind','steam',5],
    forkPunch:['arc','shard',5], tidalShock:['arc','drop',7], tidalNet:['arc','steam',5], coronaPunch:['arc','shard',5],
    thunderPunch:['arc','shard',8], grounding:['arc','shard',5], wireStrike:['arc','shard',5],
    sparkComb:['arc','shard',5], needleArc:['arc','shard',4], floorArc:['arc','shard',5], staticWeave:['arc','shard',4],
  };
  const timeScale = { crack:.78, cut:.73, fluid:1.12, rain:1.24, spiral:1.18, echo:1.13, inward:.89 };


  function liquidImpact(mark, size, fluid, light, palette) {
    const ribbon = (d, width = 1.3) => path(d, 'none', light, width);
    switch (mark) {
      case 'gelSnap':
        return path('M-66 13C-44 15-44-13-33-12C-23-10-19 1-6-4Q3-9-3-28C-8-41 0-49 10-42C23-31 20-15 30-9C44 0 46-19 57-20C72-24 73-6 63 4Q51 18 70 24C46 50 11 42-18 42Q-52 41-66 13Z',fluid,'#a7ee5b',.72)+
          ribbon('M-63 14C-47 19-40 3-37-6M-12 32Q9 36 37 24M-3-35Q8-47 15-25M40 5Q54 1 60-11',1.7);
      case 'tea': case 'chamomile':
        return path('M-66 12C-38 12-33-5-29-20Q-24-37-14-24C-7-15-15 10 15 14Q45 17 67-1C49 29 17 36-27 27Z',fluid)+
          ribbon('M-62 13Q-35 19-25-12M-39 24C-8 35 39 25 58 13',1.6)+
          oval(7,24,43,10,palette.fill('liquid'),'opacity=".35"')+
          repeat(6,i=>path(`M${i*15-40} ${-8-i%3*9}q-6-10-1-15q7 3 4 11Z`,fluid,light,.45));
      case 'tide':
        return path('M-85 29C-56 25-40 31-25 16C-11 1-8-37 22-42Q55-55 69-26Q70-9 52-13Q47-16 53-24Q62-33 44-31C31-27 28-2 18 12Q5 29 83 27Q43 49-85 29Z',fluid)+
          ribbon('M-76 25Q-41 34-18 13C-5 0-6-32 23-41Q51-54 64-32M-60 37Q15 47 73 31M12 10Q29-9 30-22',2.15)+
          repeat(7,i=>oval(i*9+21,-25-(i%3)*8,1.9+i%3,1.4,light,'opacity=".73"'));
      case 'ink':
        return path('M-75 24C-48 27-32 10-42-5Q-64-28-51-35Q-37-38-27-14C-19-2-8-7-12-26Q-9-51 9-57C24-57-1-18 22-8C42 3 37-28 54-24Q70-19 46 4C32 18 66 11 77 23Q48 43-25 38Z',fluid)+
          path('M-75 24Q-44 45 39 36Q62 33 77 23',palette.fill('shade'))+
          ribbon('M-40 19Q-15 5-24-11M-9 23Q17 26 30 14M17 2Q27 12 42-3',1);
      case 'mud':
        return oval(3,26,63,21,palette.fill('mist'),'opacity=".55"')+
          repeat(7,i=>group(`translate(${i*18-53} ${(i%3)*9-5}) rotate(${i*31})`,
            path('M-11 2Q-15-8-4-13L11-9 17 3 7 13-8 10Z',fluid)+ribbon('M-10-5L-4-10 7-8',.9)))+
          ribbon('M-61 30q41 15 103 8m-63-3 47 9',.7);
      case 'foam':
        return oval(0,14,76,29,palette.fill('mist'))+repeat(12,i=>{
          const x=(i%6)*22-55+(i>5?9:0),y=i>5?13:-4-(i%3)*8,r=6+(i*5)%13;
          return oval(x,y,r,r*.81,palette.fill('liquid'),`stroke="${light}" stroke-width=".85" opacity=".64"`)+
            ribbon(`M${x-r*.7} ${y-1}q${r*.33} ${-r*.53} ${r*.83} ${-r*.56}`,1.2);
        });
      case 'sugar':
        return path('M-56 23C-30 23-24-18-2-25C19-31 31-10 48-17Q61-25 66-17Q44 16 61 23C29 47-24 43-56 23Z',fluid)+
          ribbon('M-47 24Q-24 15-16-5Q-5-20 14-17M4 24Q27 25 39 11',1.8)+
          repeat(7,i=>oval(i*15-44,10-(i%3)*10,3+i%3,2,light,'opacity=".64"'));
      default:
        return path(`M-${size} 28Q-12 24 5 6Q10-11 2-35Q-3-53 8-55C24-47 29-8 40 6Q53 20 ${size} 22C45 42-28 43-${size} 28Z`,fluid)+
          ribbon('M-46 29Q-16 29 1 14M11-43Q24-21 22-6M28 19Q48 28 59 23',1)+
          oval(5,29,52,8,palette.fill('mist'));
    }
  }

  function contactArt(ctx, mark, target, angle) {
    const {palette, effectScale, motion, hot, color, seed, baseAttack, impactMaterial, hitAt, reduced, art} = ctx;
    const [shape, object, density] = contactDetails[mark];
    const aw = Math.max(target.w, target.h);
    const scale = Math.min(1.43, Math.max(.78, aw / 125))*effectScale;
    if (ctx.aer === 'electric' || ctx.aer === 'mixed') electricalContact(ctx, mark, target, angle, scale);
    const size = 50 + seed % 31;
    const take = (n) => (seed >>> n) % 29;
    const isTea=mark==='tea'||mark==='chamomile';
    const fluid = mark==='gelSnap' ? palette.fill('slimeGreen') : isTea ? '#c77626' : mark==='ink' ? '#391c66' : mark==='mud' ? '#8d4b31' : palette.fill('liquid');
    const liquidLight = mark==='gelSnap' ? '#e0ff92' : isTea ? '#ffd780' : mark==='ink' ? '#db8ce0' : mark==='mud' ? '#eea978' : hot;
    let graphic = '';
    switch (shape) {
      case 'cut':
        graphic = mark === 'gashes'
          ? repeat(4,i=>group(`translate(${i*8-12} ${i*13-18}) rotate(${-8+i*5})`,
              path(`M-${size} 32Q-26 27 10 0L${size-4} -33Q29 5 11 16Q-24 43-${size} 32Z`,palette.fill('silver'))+
              path('M-47 31Q-2 26 47-28','none',hot,1.2)))
          : path(`M-${size+20} 36C-18 38 39 16 ${size} -42C44 10 26 35-25 47Q-49 49-${size+20} 36Z`,palette.fill('ice'))+
            path(`M-${size+15} 37C-19 40 34 19 ${size-5} -34M-40 51Q7 49 34 28`,'none',hot,1.65);
        break;
      case 'fluid': case 'surf':
        graphic = mark === 'syrup' ? palette.paint('candy','impact',seed,mark)
          : liquidImpact(mark, size, fluid, liquidLight, palette);
        break;
      case 'crack':
        graphic=oval(0,10,size,37,palette.fill('shade'))+repeat(5,i=>group(`rotate(${i*71+take(i)})`,
          path(`M0 2L13-7 26 2 36-16 ${size+i*2}-19M25 1L32 15 43 18M36-16l3-12 15-7`,
            'none',i%2?hot:color,1.4-i*.15)));
        break;
      case 'circuit':
        graphic=repeat(5,i=>group(`rotate(${i*71+take(i)})`,
          path(`M7 ${i*3}h22v-12h19v-10h${10+i*3}M29 ${i*3}v9h10`,'none',hot,1.22)+
          oval(60+i*3,-22+i*3,2.9,2.9,'none',`stroke="${color}" stroke-width="1.2"`)));
        break;
      case 'briar':
        graphic=repeat(5,i=>group(`rotate(${i*77+take(i)})`,
          path(`M-3 12C18 25 39 1 38-14Q36-35 ${size+3} -28M29 12l-9-11M39-7l14-3`,'none',hot,2.0)+
          path('M28 10q-17 0-17-13q16 1 17 13M39-4q13-13 24-8q-6 16-24 8',palette.fill('leaf'))));
        break;
      case 'threads':
        graphic=repeat(8,i=>group(`rotate(${i*23+take(i)})`,
          path(`M-${size} ${i*5-29}Q3 ${-43+i*11} ${size} ${21-i*4}`,'none',i%3?hot:color,i%2?.72:1.38)));
        break;
      case 'splinter':
        graphic=repeat(8,i=>group(`translate(${(i-3)*16} ${take(i)*1.5-24}) rotate(${i*27+take(i)})`,
          path(i%2?'M-4-14L4-22 9-7 3 17-3 23-6 9Z':'M-6-8L7-17 13-6 3 11-10 9Z',palette.fill(mark==='porcelain'?'pearlCloth':'wood'),hot,.8)+
          path('M-2 9L2-7 5-10','none',fine,.55)));
        break;
      case 'crystal':
        graphic=repeat(6,i=>group(`translate(${i*17-46} ${24-i%3*15}) rotate(${(i-2)*19+take(i)}) scale(${.52+take(i)/46})`,
          prop('shard',palette.fill,hot,color)))+path('M-62 30L-32 33-12 23 23 32 69 24','none',hot,1.25);
        break;
      case 'break':
        graphic=repeat(6,i=>group(`translate(${i*23-57} ${i%3*17-23}) rotate(${i*27+take(i)}) scale(${.53+take(i)/62})`,
          path(i%2?'M-28-8L-1-19 13-14 20 3 6 7-3 18-21 12Z':'M-25-13L-1-11 9-24 25-7 13 7 15 22-13 16-22 5Z',
            palette.fill(mark==='shell'?'pearlCloth':'silver'),hot,1.3)+path('M-20-7 L-2-3 7-12','none',fine,1.12)));
        break;
      case 'rain':
        graphic=repeat(8,i=>group(`translate(${i*19-65} ${-48+take(i)*2.55}) rotate(${-15+i*7}) scale(${.28+take(i)/72})`,
          prop(object,palette.fill,hot,color)+path('M-5-2L0-49','none',hot,.9)));
        break;
      case 'wind':
        graphic=repeat(mark==='drift'?4:3,i=>group(`translate(0 ${i*12-18})`,
          path(`M-${size+18} 32C-33-4 22-44 63-23Q83-12 61 2C73-12 65-21 43-20Q8-20-${size+18} 32Z`,palette.fill('mist'))+
          path('M-65 22Q17-42 61-21M-38 15Q18-23 46-17','none',i%2?color:hot,1.38-i*.22)));
        break;
      case 'fireFan':
        graphic=oval(-4-take(3)*.29,4,55+take(5)*.57,29,palette.fill('jetHeat'))+
          oval(19,10,28,19,palette.fill('jetHeat'),'opacity=".45"');
        break;
      case 'fireRise':
        graphic=oval(0,28,60+take(5)*.4,20,palette.fill('jetHeat'),'opacity=".71"')+
          oval(0,16-take(6)*.15,37,15,palette.fill('jetHeat'),'opacity=".42"');
        break;
      case 'splash':
        graphic=path('M-78 29Q-55 15-30 19C-37 4-53-8-56-33C-35-15-24 8-11 6C1-6-9-29-2-51C9-28 16-7 24-7C37-12 34-37 47-52C55-27 47-3 45 9C61 5 71 2 80-4C77 18 58 34 35 38Q-23 48-78 29Z',palette.fill('liquid'),'#a9faff',1.5)+
          path('M-68 29Q-21 42 50 33M-43-18Q-38 2-16 19M-3-41Q0-21 7-12M44-41Q42-17 28-3M40 23Q64 20 72 8','none','#e2fdff',2.4)+
          repeat(9,i=>oval(i*14-57,-30-(i*19)%33,1.6+i%4,1.3+i%3,'#cafbffb8'));
        break;
      case 'harpWave':
        graphic=repeat(5,i=>path(`M-70 ${i*11+15}C-38 ${-37+i*6} 14 ${i*16-60} 69 ${i*3-22}`,
          'none',i%2?'#bde8a1':'#dcaeff',1.8-i*.22))+
          repeat(3,i=>group(`translate(${i*38-32} ${11-i*13}) rotate(${i*11-13}) scale(.62)`,prop('note',palette.fill,hot,color)));
        break;
      case 'heart':
        graphic=prop('crystalHeart',palette.fill,hot,color)+
          oval(0,31,64,25,'none','stroke="#fd668d" stroke-width="1.55" opacity=".55"');
        break;
      case 'parcel':
        graphic=group('scale(.36)',oval(0,0,44,29,palette.fill('mist'))+
          path('M-32 7Q-20-20 8-14Q40-12 34 5Q21 22 1 9Q-12-3 10-6','none',hot,1.35));
        break;
      case 'metalWave':
        graphic=repeat(4,i=>oval(0,i*2,36+i*17,19+i*8,'none',`stroke="${i%2?'#d2a8ef':'#ffc878'}" stroke-width="${2.4-i*.40}" opacity="${.93-i*.14}"`))+
          path('M-31 2Q-24-20-6-10Q0-5 7-11Q21-19 32 2Q21 16 7 10Q0 7-7 10Q-21 18-31 2Z',palette.fill('mist'));
        break;
      case 'prism':
        graphic=oval(0,0,72,35,palette.fill('mist'),'opacity=".35"')+
          repeat(prismColors.length,i=>group(`rotate(${i*46+take(i)})`,
            path(`M6 0L${29+i*3} -6 ${43+i*5} -17 ${36+i*4} 1Z`,prismColors[i],'#fff5dc',.6)+
            path(`M6 0L${36+i*4} 1 ${43+i*5} -17Z`,'#fffaf978')));
        break;
      case 'arc':
        graphic=mark==='tidalShock'
          ? liquidImpact('tide',size,palette.fill('liquid'),'#9ee6f4',palette)
          : mark==='tidalNet'
            ? liquidImpact('foam',size,palette.fill('liquid'),'#93e8f4',palette)
            : oval((seed % 31)-15,8,40+baseAttack*3+take(3)*.5,mark==='coronaPunch'?42+take(6)*.12:18+take(7)*.25,palette.fill('mist'),'opacity=".55"');
        break;
      case 'spiral':
        graphic=repeat(4,i=>group(`rotate(${i*78+take(i)})`,
          path('M-64 27Q-41-39 9-30Q38-23 38 2C24-18 7-23-12-19Q-40-11-64 27Z',palette.fill('mist'))+
          path('M-55 15Q-28-30 4-26','none',hot,1.1)));
        break;
      case 'fold':
        graphic = mark === 'paper'
          ? repeat(4,i=>group(`translate(${i*30-58} ${-22+i*9}) rotate(${i*19-32}) scale(.74)`,prop('paper',palette.fill,hot,color)))
          : repeat(4,i=>group(`rotate(${i*74+take(i)})`,
              path('M-67 35Q-32-30 21-28Q57-23 62 0Q39-8 23-8C-1-11-15 1-39 16Z',palette.fill('shade'))+
              path('M-53 24Q-12-29 40-16','none',color,1.16)));
        break;
      case 'inward':
        graphic=repeat(5,i=>group(`rotate(${i*67+take(i)})`,
          path('M-69-17Q-24-50 15-21Q-17-32-26-9Q-28 6-10 19Q-51 18-69-17Z',palette.fill('shade'))+
          path('M-57-17Q-31-31-4-22','none',color,1.17)))+prop('mask',palette.fill,hot,color);
        break;
      case 'echo':
        if(mark==='notes'){
          graphic=repeat(5,i=>path(`M-70 ${i*8+3}q45-34 103-22l32-4`,'none',i%2?hot:color,1.12))+
            repeat(3,i=>group(`translate(${i*32-24} ${7-i*11}) scale(.52)`,prop('note',palette.fill,hot,color)));
        }else if(mark==='coil'){
          graphic=path('M-1-10C17-10 22 4 15 17C5 33-30 18-30-3C-31-31 15-48 39-20C69 16 31 50-17 46','none',hot,2.3)+
            path('M-4-15C19-17 33 9 15 26C-9 44-45 25-40-8','none',color,1.3);
        }else{
          graphic=repeat(4,i=>oval(0,i*3,19+i*17,8+i*5,'none',`stroke="${i%2?hot:color}" stroke-width="${2.1-i*.36}" opacity="${.75-i*.12}"`));
        }
        break;
      case 'seal':
        graphic=group('rotate(-12)',path('M-49 15Q-43-24-13-40L29-34 52-9 44 23 11 38-33 31Z',
          'none',color,1.9)+path('M-37 12L-29-12-14-23 29-23 42-7 28 20-12 28Z','none',hot,1.1))+
          prop('coin',palette.fill,hot,color);
        break;
      default:
        graphic = mark === 'sun'
          ? oval(0,0,36,31,palette.fill('core'))+repeat(5,i=>group(`rotate(${i*73+take(i)})`,
              path('M21 10Q36-6 71-3Q44 1 29 15Z',palette.fill('flame'))))
          : repeat(7,i=>group(`rotate(${i*49+take(i)})`,
              path(`M0 6Q19-26 ${size+i%3*8} -${10+i*3}Q32-16 14 14Z`,palette.fill('flame'))));
    }
    const variation = repeat(2+seed%4,i=>{
      const bend=(seed >>> (i*5))%29;
      const skew=((seed >>> (i*3+2))%83)-41;
      const top=-21+((seed >>> ((i+4)%18))%47);
      return group(`rotate(${skew})`,
        path(`M${-size*.44+i*5} ${top}q${12+bend} ${-8-bend*.47} ${30+bend} ${-12+i*5}`,'none',
          i%2?hot:fine,.68+i*.31));
    });
    const direction = ['wind','surf'].includes(shape) ? angle : ['cut','crystal','splinter','threads','fold'].includes(shape) ? angle*.52 : seed%17-8;
    const jetFire=shape==='fireFan'||shape==='fireRise';
    const main = art(graphic + (shape==='arc'||jetFire ? '' : `<g opacity=".44">${variation}</g>`),target.x,target.y,direction);
    main.setAttribute('data-contact',mark);
    const duration = reduced?420:Math.round((880+baseAttack*34)*(timeScale[shape]||1));
    const start=hitAt;
    const frames = reduced ? [{opacity:0,transform:`scale(${scale*.9})`},{opacity:.85},{opacity:0}]
      : shape==='wind' || shape==='surf' ? [
        {opacity:0,transform:`translateX(${-35*scale}px) scale(${scale*.68},${scale*.63})`},
        {opacity:.93,transform:`translateX(${6*scale}px) scale(${scale})`,offset:.31},
        {opacity:.57,transform:`translateX(${45*scale}px) scale(${scale*1.19},${scale*.78})`,offset:.63},
        {opacity:0,transform:`translateX(${79*scale}px) scale(${scale*1.31},${scale*.55})`},
      ] : shape==='arc' || shape==='crack' || shape==='circuit' ? [
        {opacity:0,transform:`scale(${scale*.56})`},{opacity:.84,transform:`scale(${scale})`,offset:.16},
        {opacity:.33,transform:`scale(${scale*1.07})`,offset:.63},{opacity:0,transform:`scale(${scale*1.08})`},
      ] : shape==='splash' ? [
        {opacity:0,transform:`scale(${scale*.70},${scale*.32})`},
        {opacity:1,transform:`translateY(-9px) scale(${scale*.97},${scale*1.06})`,offset:.21},
        {opacity:.83,transform:`translateY(12px) scale(${scale*1.25},${scale*.61})`,offset:.58},
        {opacity:0,transform:`translateY(26px) scale(${scale*1.42},${scale*.22})`},
      ] : mark==='foam' ? [
        {opacity:0,transform:`translateY(8px) scale(${scale*.49})`},
        {opacity:.91,transform:`scale(${scale})`,offset:.27},
        {opacity:.79,transform:`translateY(-9px) scale(${scale*1.1})`,offset:.59},
        {opacity:0,transform:`translateY(-24px) scale(${scale*1.15})`},
      ] : mark==='syrup' || isTea || shape==='fluid' ? [
        {opacity:0,transform:`scale(${scale*.14},${scale*.51})`},
        {opacity:1,transform:`scale(${scale*.99},${scale*.92})`,offset:.24},
        {opacity:.87,transform:`translateY(10px) scale(${scale*1.22},${scale*.64})`,offset:.56},
        {opacity:0,transform:`translateY(28px) scale(${scale*1.28},${scale*.31})`},
      ] : shape==='cut' ? [
        {opacity:0,transform:`translateX(${-32*scale}px) scale(.69)`},
        {opacity:1,transform:`translateX(${7*scale}px) scale(${scale})`,offset:.20},
        {opacity:.47,transform:`translateX(${27*scale}px) rotate(8deg) scale(${scale*1.21})`,offset:.59},
        {opacity:0,transform:`translateX(${38*scale}px) rotate(13deg) scale(${scale*1.39})`},
      ] : shape==='rain' ? [
        {opacity:0,transform:`translateY(${-60*scale}px) scale(${scale*.36})`},
        {opacity:1,transform:`translateY(${-22*scale}px) scale(${scale})`,offset:.31},
        {opacity:.85,transform:`translateY(${13*scale}px) scale(${scale*1.1})`,offset:.68},
        {opacity:0,transform:`translateY(${41*scale}px) scale(${scale*.71})`},
      ] : shape==='inward' ? [
        {opacity:0,transform:`scale(${scale*1.51})`},
        {opacity:.95,transform:`rotate(26deg) scale(${scale})`,offset:.26},
        {opacity:.89,transform:`rotate(57deg) scale(${scale*.56})`,offset:.72},
        {opacity:0,transform:'rotate(78deg) scale(.1)'},
      ] : [
        {opacity:0,transform:`rotate(-9deg) scale(${scale*.23})`},
        {opacity:1,transform:`scale(${scale})`,offset:.19},
        {opacity:.78,transform:`scale(${scale*1.12})`,offset:.57},
        {opacity:0,transform:`rotate(${seed%55-27}deg) scale(${scale*1.36})`},
      ];
    const openingOpacity = shape==='heart' ? .62 : shape==='parcel' ? .30 : .48;
    motion(main,[{...frames[0],offset:0},{...frames[0],offset:.012,opacity:openingOpacity},...frames.slice(1)],duration,start);
    if(reduced||jetFire)return;
    const glowSize=shape==='parcel'?22:45+baseAttack*6;
    const glint=art(oval(0,0,glowSize,glowSize*.57,palette.fill('mist')),target.x,target.y);
    motion(glint,[{opacity:0,transform:'scale(.48)'},{opacity:.40+baseAttack*.032,offset:.29},
      {opacity:0,transform:`scale(${scale*1.27})`}],500,start);
    const count=Math.round(density*.82+baseAttack*1.6);
    const fan = ['cut','wind','surf','splash'].includes(shape);
    const course = angle * Math.PI / 180;
    for(let i=0;i<count;i++){
      const heading = fan ? course + (i / count - .5) * 1.9 + take(i%20) * .008
        : i * Math.PI * 2 / count + take(i%20) * .22;
      const spread=(35+take(i%17)*2.9)*scale*(shape==='parcel'?.32:1);
      const xx=Math.cos(heading)*spread,yy=Math.sin(heading)*spread;
      const grav=mark==='foam'?-27:shape==='wind'?-14:['rain','fluid','splinter','break','surf','splash'].includes(shape)?45:6;
      const scaleFactor=(.18+take((i+13)%22)/83)*scale;
      const fragment = shape==='prism'
        ? path('M-15 1L-3-18 11-11 14-2 4 13-12 11Z',prismColors[i%prismColors.length],'#ffefda',.8)
        : shape==='heart' ? path('M-8 3L-3-12 12-7 10 10 1 17Z',palette.fill('ruby'),'#ffb5c1',.8)
        : object==='orb'||mark==='syrup'||(shape==='arc'&&!mark.startsWith('tidal'))
          ? palette.particle(impactMaterial,i):prop(object,palette.fill,hot,color);
      const piece=art(fragment,target.x,target.y,i*97);
      motion(piece,[
        {opacity:0,transform:'scale(.084)'},
        {opacity:mark==='syrup'?.97:.77,transform:`translate(${xx*.59}px,${yy*.65}px) scale(${scaleFactor})`,offset:.25},
        {opacity:0,transform:`translate(${xx}px,${yy+grav}px) rotate(${take(i%18)*6}deg) scale(${scaleFactor*.42})`},
      ],Math.min(duration+190,490+i*22+baseAttack*34),hitAt+i*8);
    }
  }

  window.peppermintCombatScenes = { productionTime, setPiece, choreograph, contactArt, contactDetails, beats, fistStyles, cymbalLead };
})();
