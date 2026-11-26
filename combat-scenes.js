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
      case 'cup': return group('scale(.68)',vessel(fill,'#b98b2c'));
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
      case 'bell': return path('M-25 17Q-16 7-15-8Q-13-28 0-30Q16-29 18-6Q20 11 26 17Q0 24-25 17Z',fill('gold'),'#ffe1a8',1.4)+oval(0,20,25,5,'#6a402c')+oval(0,25,5,6,fill('gold'));
      case 'egg': return path('M-23 13C-21-12-9-35 2-39Q20-28 25 10Q24 36 0 35Q-25 36-23 13Z',fill('pearlCloth'),hot,1.6)+
        path('M-23 6L-10-4-2 6 8-8 21-2','none','#d5ad6d',1.6);
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
      case 'bubble': return oval(0,0,36,32,fill('liquid'),'stroke="#b2fbff" stroke-width="1.8"')+oval(-13,-15,8,4,fine);
      default: return oval(0,0,17,15,fill('core'));
    }
  }

  function mix(from, to, fraction) {
    return {x:from.x+(to.x-from.x)*fraction, y:from.y+(to.y-from.y)*fraction};
  }

  function productionTime(direction, attack, sharedField) {
    if (attack) return null;
    return { horses: 1290, kettles: 1040, serving: 1010, windup: 1290, tree: 1080, forge: 920, gate: 880,
      brew: 950, hatch: 950, carnival: 970, carousel: 1050, panorama: 1020 }[direction.move] || (sharedField ? 900 : 735);
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
      score:[4,6,.10,6],
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
      motion(core,[{opacity:0,strokeDashoffset:1},{opacity:.91,strokeDashoffset:.48,offset:.31},
        {opacity:i===0?.67:.91,strokeDashoffset:0,offset:.66},{opacity:0,strokeDashoffset:-.34}],675+cruise*20,hold+i*33,'ease-in-out');
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

  function setPiece(ctx) {
    const {direction, origin, targets, palette, motion, hot, color, impactAt, reduced, effectScale, viewport} = ctx;
    const move=direction.move;
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
    tavern:['cup','coin',4], brew:['teapot','steam',6], orbit:['shard','coin',6],
  };

  const locationProps = {
    'academy-grounds':['tome','lantern'], 'avatar-gem':['potion','shard'], cooking:['teapot','salt'],
    'locker-room':['bag','rib'], 'mana-potion':['potion','drop'], 'health-potion':['potion','flower'],
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
    const distance=Math.hypot(to.x-origin.x,to.y-origin.y);
    if (!reduced && channelMoves.has(move) && distance>16 && !melee) {
      channel(ctx,origin,to,move);
      if(ctx.attack && ctx.card.role==='Shooter'){
        const shot=ctx.art(missile,origin.x,origin.y,rotation);
        const dx=to.x-origin.x,dy=to.y-origin.y;
        motion(shot,[{opacity:0,transform:'scale(.31)'},{opacity:.89,transform:`translate(${dx*.39}px,${dy*.39}px) scale(${scale*.75})`,offset:.43},
          {opacity:0,transform:`translate(${dx}px,${dy}px) scale(${scale*.54})`}],Math.max(430,hitAt-330),280,'linear');
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
      const travel=hitAt-270;
      for(let i=0;i<count;i++){
        const o=i-(count-1)/2, delay=160+i*71;
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
        ],Math.max(240,travel-i*41),delay,'ease-in-out');
      }
      if(move==='score')channel(ctx,origin,to,'score');
      return true;
    }
    const stage=groundSets[move];
    if(!stage) return false;
    const [defaultPrimary, defaultSecondary, count] = stage;
    const [primary, secondary] = !ctx.attack && locationProps[ctx.card.id] || [defaultPrimary, defaultSecondary];
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
  };
  const timeScale = { crack:.78, cut:.73, fluid:1.12, rain:1.24, spiral:1.18, echo:1.13, inward:.89 };

  function contactArt(ctx, mark, target, angle) {
    const {palette, effectScale, motion, hot, color, seed, baseAttack, impactMaterial, hitAt, reduced, art} = ctx;
    const [shape, object, density] = contactDetails[mark];
    const aw = Math.max(target.w, target.h);
    const scale = Math.min(1.43, Math.max(.78, aw / 125))*effectScale;
    const size = 50 + seed % 31;
    const take = (n) => (seed >>> n) % 29;
    const isTea=mark==='tea'||mark==='chamomile';
    const fluid = isTea ? '#c77626' : mark==='ink' ? '#391c66' : mark==='mud' ? '#8d4b31' : palette.fill('liquid');
    const liquidLight = isTea ? '#ffd780' : mark==='ink' ? '#db8ce0' : mark==='mud' ? '#eea978' : hot;
    let graphic = '';
    switch (shape) {
      case 'cut':
        graphic=repeat(mark==='gashes'?4:2,i=>group(`translate(${i*12-17} ${i*16-22}) rotate(${(i-1)*13})`,
          path(`M-${size} 34Q-13 31 ${size} -41Q37 20-4 37Q-33 50-${size} 34Z`,palette.fill('ice'),hot,1.28)+
          path('M-53 34Q-4 40 56-31','none',fine,2.1)));
        break;
      case 'fluid':
      case 'surf':
        if(mark==='syrup') graphic=palette.paint('candy','impact',seed,mark);
        else graphic=path(`M-${size+8} 23C-37 18-40-14-57-20C-57-30-25-18-23-23C-26-40-11-49-7-35Q0-2 17-26C28-46 42-45 37-30C25-6 45 3 ${size} -8C${size+17} 1 ${size-6} 25 35 31Q-1 46-39 35Z`,fluid,liquidLight,1.5)+
          path('M-47 20C-28 18-35-11-23-10M-21 22Q5 33 36 17M22-12q14-15 24-9','none',liquidLight,2.55)+
          oval(12,23,32,7,fluid, 'opacity=".59"')+oval(-18,28,6,2,fine);
        break;
      case 'crack': case 'circuit': case 'briar': case 'threads': case 'splinter':
        graphic=repeat(4+seed%3,i=>group(`rotate(${i*61+take(i)})`,
          path(`M-5 2L13-${3+i}L29 4L${size+i*2} -${6+i*4}L37 0L27 13L14 8ZM26 3L35-17L45-20`,
            shape==='briar'?palette.fill('leaf'):palette.fill(shape==='splinter'?'wood':'ice'),hot,shape==='threads'?1.01:1.65)+
          path('M-4 1L16 5 29 6M27 9L41 18M16 2L19-12','none',fine,.95)));
        if(shape==='crack')graphic=oval(0,0,63,39,palette.fill('shade'))+graphic;
        break;
      case 'crystal': case 'break': case 'rain':
        graphic=repeat(5+seed%3,i=>group(`translate(${(i-3)*14} ${i%2?15:-8}) rotate(${(i-3)*25+take(i)}) scale(${.51+take(i)/45})`,
          prop(object,palette.fill,hot,color)));
        break;
      case 'spiral': case 'fold': case 'inward':
        graphic=repeat(3+seed%3,i=>group(`rotate(${i*71+(seed%44)})`,
          path(`M-${size+5} 14C-32-${33+i*2}-2-${44+i} 30-29Q57-11 41 14C31 25 14 21 2 10Q24 13 32 0Q39-17 16-20C-7-24-33-8-${size+5} 14Z`,
            palette.fill(shape==='inward'?'shade':'mist'),hot,1.23)+path('M-40 2Q-3-25 23-14','none',fine,1.27)));
        if(object==='mask')graphic+=prop('mask',palette.fill,hot,color);
        break;
      case 'echo': case 'seal':
        graphic=repeat(4,i=>oval(0,i*3,22+i*14,13+i*8,'none',`stroke="${i%2?hot:color}" stroke-width="${2.8-i*.4}" opacity="${.97-i*.16}"`));
        if(shape==='seal')graphic+=prop('coin',palette.fill,hot,color);
        break;
      default:
        graphic=repeat(9+seed%3,i=>group(`rotate(${i*37+take(i)})`,
          path(`M-7 9Q11-15 ${size+i%3*9} -${9+i*2}Q28 3 19 15Z`,palette.fill('flame'),hot,1.0)))+
          oval(-4,0,22,18,palette.fill('core'));
    }
    const variation = repeat(2+seed%4,i=>{
      const bend=(seed >>> (i*5))%29;
      const skew=((seed >>> (i*3+2))%83)-41;
      const top=-21+((seed >>> ((i+4)%18))%47);
      return group(`rotate(${skew})`,
        path(`M${-size*.44+i*5} ${top}q${12+bend} ${-8-bend*.47} ${30+bend} ${-12+i*5}`,'none',
          i%2?hot:fine,.68+i*.31));
    });
    const direction = ['cut','crystal','splinter','threads','fold'].includes(shape) ? angle*.52 : seed%17-8;
    const main = art(graphic+variation,target.x,target.y,direction);
    main.setAttribute('data-contact',mark);
    const duration = reduced?420:Math.round((880+baseAttack*34)*(timeScale[shape]||1));
    const start=hitAt-30;
    const frames = reduced ? [{opacity:0,transform:`scale(${scale*.9})`},{opacity:.85},{opacity:0}]
      : mark==='syrup' || isTea || shape==='surf' || shape==='fluid' ? [
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
    motion(main,frames,duration,start);
    if(reduced)return;
    const glint=art(oval(0,0,45+baseAttack*6,26+baseAttack*3,palette.fill('mist')),target.x,target.y);
    motion(glint,[{opacity:0,transform:'scale(.48)'},{opacity:.65+baseAttack*.032,offset:.29},
      {opacity:0,transform:`scale(${scale*1.27})`}],500,start-35);
    const count=density+Math.round(baseAttack*1.7);
    for(let i=0;i<count;i++){
      const angle=i*Math.PI*2/count+(take(i%20)*.22);
      const spread=(35+take(i%17)*2.9)*scale;
      const xx=Math.cos(angle)*spread,yy=Math.sin(angle)*spread;
      const grav=['rain','fluid','splinter','break','surf'].includes(shape)?45:6;
      const scaleFactor=(.18+take((i+13)%22)/83)*scale;
      const fragment = object==='orb'||mark==='syrup'?palette.particle(impactMaterial,i):prop(object,palette.fill,hot,color);
      const piece=art(fragment,target.x,target.y,i*97);
      motion(piece,[
        {opacity:0,transform:'scale(.084)'},
        {opacity:.97,transform:`translate(${xx*.59}px,${yy*.65}px) scale(${scaleFactor})`,offset:.25},
        {opacity:0,transform:`translate(${xx}px,${yy+grav}px) rotate(${take(i%18)*6}deg) scale(${scaleFactor*.42})`},
      ],Math.min(duration+190,490+i*22+baseAttack*34),hitAt+i*8);
    }
  }

  window.peppermintCombatScenes = { productionTime, setPiece, choreograph, contactArt, contactDetails };
})();
