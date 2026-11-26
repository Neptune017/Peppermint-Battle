(() => {
  const noiseBuffers = new WeakMap();
  const bands = {
    paper:[3400,5100,.135,1.5], rustle:[1550,2650,.30,1.8], air:[670,2200,.38,2.4], water:[630,1700,.31,2.5],
    splash:[2300,650,.31,1.3], syrup:[720,300,.27,3], boil:[730,2000,.43,4], pour:[1200,3400,.45,3],
    bow:[1900,4700,.12,2.8], steel:[2900,5200,.22,6], claws:[2850,1360,.18,4.2], shot:[1520,480,.12,1.3],
    metal:[5100,3400,.16,8], wood:[820,290,.13,3.4], clay:[1800,1100,.13,5], mud:[320,155,.28,2],
    ice:[4650,1810,.21,4.5], glass:[6430,5700,.16,7], crystal:[5950,2600,.23,8], ceramic:[2700,1350,.17,7],
    chain:[4680,2050,.17,4.6], gears:[3900,2300,.17,5.3], motor:[780,2120,.43,3], roots:[860,1420,.4,2.7],
    fabric:[880,2210,.29,1.3], cloth:[1720,740,.20,1.2], shadow:[250,960,.37,2.1], pulse:[250,910,.28,3],
    fire:[610,2400,.36,1.8], solar:[400,1700,.34,2],
    brass:[920,1810,.24,2.1], chime:[4650,2500,.14,5], flute:[2700,1600,.17,4], whistle:[2400,3150,.2,4],
    string:[2700,2100,.146,5], harp:[2500,1770,.17,4], drum:[230,1100,.23,1.7], hall:[810,1370,.31,3.7],
  };
  const tonal = {
    bell:[1,2.17,2.93,4.16], glass:[1,1.48,2.23,3.04], wood:[1,1.73,2.46],
    hollow:[1,1.23,1.77,2.36], buzz:[1,1.5,2], reed:[1,2,3.03,4],
  };
  const note = (midi) => 440 * 2 ** ((midi-69)/12);
  function play({audio, mode, seed, strike, release, impact, baseAttack, aer, fist, finish, count = 1}) {
    if (!audio || audio.state!=='running') return;
    const start=audio.currentTime+.015;
    const gain=audio.createGain();
    gain.gain.value=.40+baseAttack*.017;
    gain.connect(audio.destination);
    const r = release / 1000;
    const t = impact / 1000;
    const root=note(48+seed%12);
    const weight=1+baseAttack*.044;
    function sweep(at,len,from,to,level,wave='sine'){
      const oscillator=audio.createOscillator(), volume=audio.createGain(), time=start+Math.max(0,at);
      oscillator.type=wave;
      oscillator.frequency.setValueAtTime(Math.max(25,from),time);
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(25,to),time+len);
      volume.gain.setValueAtTime(.0001,time);
      volume.gain.exponentialRampToValueAtTime(level,time+.009);
      volume.gain.exponentialRampToValueAtTime(.0001,time+len);
      oscillator.connect(volume).connect(gain);
      oscillator.start(time);oscillator.stop(time+len+.025);
    }
    function resonator(at,hz,len,level,shape='bell') {
      tonal[shape].forEach((ratio,i)=>sweep(at+i*.004,len/(1+i*.2),hz*ratio,hz*ratio*(i===0?.999:.984),level/(1+i*1.9),i===0&&shape==='buzz'?'triangle':'sine'));
    }
    function texture(at,len,from,to,level,q=2){
      let buffer=noiseBuffers.get(audio);
      if(!buffer){
        buffer=audio.createBuffer(1,Math.ceil(audio.sampleRate*.85),audio.sampleRate);
        const pcm=buffer.getChannelData(0);
        for(let i=0;i<pcm.length;i++)pcm[i]=Math.random()*2-1;
        noiseBuffers.set(audio,buffer);
      }
      const source=audio.createBufferSource(), filter=audio.createBiquadFilter(), volume=audio.createGain();
      const time=start+Math.max(0,at);
      source.buffer=buffer;
      filter.type='bandpass';filter.Q.value=q;
      filter.frequency.setValueAtTime(from,time);filter.frequency.exponentialRampToValueAtTime(to,time+len);
      volume.gain.setValueAtTime(.0001,time);
      volume.gain.exponentialRampToValueAtTime(level,time+.015);
      volume.gain.exponentialRampToValueAtTime(level*.44,time+len*.38);
      volume.gain.exponentialRampToValueAtTime(.0001,time+len);
      source.connect(filter).connect(volume).connect(gain);
      source.start(time,(seed%13)*.008); source.stop(time+len+.02);
    }

    function discharge(at, length, strength) {
      const spark = at + .026;
      texture(at, .102, 6190, 2770, .17 * strength, 2.8);
      texture(spark, length, 2200, 530, .088 * strength, 1.4);
      sweep(spark, .088, 183 + seed % 57, 81, .082 * strength, 'triangle');
    }

    if (fist) {
      sweep(t - .018, .23, 132, 39, .17 * weight, 'triangle');
      texture(t - .007, .13, 1790, 460, .14 * weight, 1.15);
    }

    const beats = window.peppermintCombatScenes.beats[mode];
    if (mode === 'raijin') {
      beats.forEach((before, i) => {
        const at = t - before / 1000, skin = [114, 147, 86][i] - baseAttack * 1.35;
        sweep(at, .35 + i * .05, skin * 1.75, skin * .48, (.16 + i * .04) * weight, 'triangle');
        resonator(at + .009, skin * 1.35, .38, .13 * weight, 'hollow');
        texture(at, .13, 1840, 380, .153, 1.67);
        texture(at + .017, .18, 720, 350, .082, 2.10);
        discharge(at + .067, .19, i===2 ? .93 : .43);
      });
      discharge(t + .014,.34,.74 * weight);
      texture(t + .085,.41,426,174,.15 * weight,1.42);
    } else if (mode === 'mirrors') {
      texture(t - .53, .43, 1180, 3740, .055, 4.2);
      beats.forEach((before,i)=>{
        const at = t - before / 1000;
        resonator(at,i ? 1269 : 896,.46,.13,'glass');
        sweep(at + .046,.24,i ? 1540 : 1132,i ? 2330 : 1770,.047);
      });
      texture(t, .29, 6500, 2820, .16 * weight, 5.7);
      for (let i=0; i<4; i++) {
        resonator(t + .043 * i, 790 + ((seed >>> (i * 5)) % 450) + i * 197, .23, .067 / (1 + i*.27), 'glass');
      }
    } else if (mode === 'slimeClaws') {
      texture(t - .48, .48, 1410, 368, .085, 3.4);
      beats.forEach((before,i)=>{
        const at = t - before / 1000;
        texture(at - .021,.16,1310+i*270,479,.13 * weight,3.2);
        sweep(at,.16,255+i*68,71+i*14,.15 * weight,'triangle');
        texture(at+.019,.195,780,279,.10,2.45);
        for(let n=0;n<4;n++) {
          const bubble = 358 + ((seed >>> (n*5)) % 229) + i*72;
          sweep(at+.063+n*.058,.105,bubble,bubble*.42,.042/(1+n*.24));
        }
      });
    } else if (mode === 'prism') {
      beats.forEach((before,i)=>{
        const at = t - before / 1000;
        const hz = note([69,74,78,81][i]);
        resonator(at,hz,.59,.105,i<2?'glass':'bell');
        sweep(at+.07,.21,hz*3,hz*3.045,.041);
      });
      resonator(t+.04,note(90),.62,.074,'glass');
      resonator(t+.055,note(86),.58,.065,'bell');
      texture(t+.045,.36,7430,3400,.059,5.3);
    } else if(mode==='hooves'){
      for(let horse=0;horse<4;horse++){
        const entry=.16+horse*.135;
        for(let n=0;n<4;n++){
          const at=entry+n*.228+(n%2)*.031;
          sweep(at,.11,103+horse*9,39,.19,'triangle');
          resonator(at+.019,165+horse*17+(n%2)*42,.106,.071,'wood');
          texture(at,.098,1420+n*210,420,.092,2.1);
        }
      }
      texture(t-.08,.48,360,140,.15,1.8);
    } else if(mode==='windup') {
      for(let i=0;i<8;i++){
        const at=.22+i*.11+(i%2)*.015;
        texture(at,.095,2380+i*130,900,.10,4.7);
        resonator(at,315+i*15,.098,.079,'wood');
        sweep(at+.033,.092,440+i*46,190+i*30,.035,'triangle');
      }
      resonator(t,root*3,.42,.14,'glass');
      resonator(t+.18,root*4,.55,.085);
    } else if(mode==='bells'){
      const phrase=[77,81,84,81,86,84,77];
      phrase.forEach((key,i)=>{
        const at=.29+i*.168+(i>4?.08:0);
        resonator(at,note(key),.65,.126/(1+i*.05));
        resonator(at+.037,note(key+12),.21,.045);
        texture(at,.09,6200,4000,.032,6.3);
      });
      resonator(t,note(65),.77,.14);
    } else if(mode==='tea'){
      const cups=count>=2?3:1;
      for(let i=0;i<cups;i++){
        resonator(.20+i*.138,1035+i*176,.34,.089,'glass');
        texture(t-.36+i*.096,.43,850+i*350,300,.095,2.1);
      }
      for(let i=0;i<7;i++){
        const at=t-.13+i*.077;
        sweep(at,.12,540+(seed+i*211)%391,148+i*24,.069);
        if(i%2===0)texture(at,.085,2300,670,.062,3.4);
      }
      resonator(t+.13,940+seed%170,.35,.068,'glass');
      if (aer === 'mixed' || aer === 'electric') discharge(t - .04,.21,.59 * weight);
    } else if (['electric','static','surge','storm','thunder'].includes(mode)) {
      const [charge, strength, sparks, tail] = {
        electric:[.20,.65,3,.24], static:[.16,.91,4,.16], surge:[.14,.76,4,.31],
        storm:[.29,.74,6,.39], thunder:[.25,1.06,5,.52],
      }[mode];
      texture(r - .04, charge, 1300, 5050, .065, 3.2);
      if (strike) sweep(t - .025, .17, 147, 48, .152 * weight, 'triangle');
      if (mode === 'surge') texture(t + .09, .41, 1030, 570, .13 * weight, 2.6);
      if (mode === 'thunder') {
        sweep(t + .034, .48, 98, 30, .163 * weight, 'triangle');
        texture(t + .081, .57, 540, 170, .13 * weight, 1.3);
      }
      for (let i = 0; i < sparks; i++) {
        const at = t + i * (mode === 'storm' ? .061 : .035) + (seed >>> (i * 2)) % 19 / 1000;
        discharge(at, tail / (1 + i * .16), strength * weight / (1 + i * .42));
      }
    } else {
      const [lo,hi,len,q]=bands[mode]||bands.hall;
      const voice = ['ice','glass','crystal','ceramic'].includes(mode)?'glass':
        ['wood','clay','roots','paper','drum','claws','steel','shot','chain','gears','metal'].includes(mode)?'wood':
        ['flute','whistle','string','harp','chime','hall'].includes(mode)?'reed':
        ['pulse','motor','brass','fire','solar'].includes(mode)?'buzz':'hollow';
      const hard=['claws','steel','shot','wood','gears','metal','crystal','ice','ceramic'].includes(mode);
      const soft=['water','splash','syrup','boil','pour','fabric','paper','air','rustle'].includes(mode);
      texture(r-.13,Math.min(.54,len+.09),lo,hi,.060,Math.max(1.1,q-1));
      sweep(r-.10,.14+(seed%8)*.019,root*(soft?2.4:1.4),root*(strike?.71:2.13),.062,voice==='buzz'?'triangle':'sine');
      resonator(t-.005,root*(hard?.78:1.19),hard?.24:.44,.129*weight,voice);
      texture(t-.016,Math.min(.65,len+.09),hi,lo,.129*weight,q);
      const taps=3+seed%4;
      for(let i=0;i<taps;i++){
        const at=t+.072+i*(hard?.048:.085);
        const hz=root*(1.14+(seed>>>(i+1)%19)%18/10);
        if(soft) sweep(at,.10+(seed+i)%5*.012,hz*1.85,hz*.74,.050);
        else if(i<3||['facets','circuit','notes'].includes(finish)) resonator(at,hz,.24,.048/(1+i*.15),voice);
      }
      if(finish==='fault'||finish==='mud'||finish==='roar') sweep(t,.38,141,42,.153*weight,'triangle');
      if(finish==='bolts'||finish==='circuit') texture(t+.15,.25,5100,1580,.10,6);
      if(aer==='electric') discharge(t + .09,.18,.57 * weight);
    }
    window.setTimeout(()=>gain.disconnect(),(t+2.14)*1000);
  }
  window.peppermintCombatSound = {play};
})();
