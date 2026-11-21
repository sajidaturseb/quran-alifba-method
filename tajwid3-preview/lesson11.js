const lessons11 = {
  ru: {
    kicker: 'УРОК 11 · МАДД И КАСР', title: 'Мадд и каср', arabic: 'الْمَدُّ وَالْقَصْرُ',
    subtitle: 'Как распознать букву удлинения и определить меру чтения',
    nav: 'В этом уроке', next: 'Дальше', prev: 'Назад', foot: 'Одиннадцатый урок завершён', previous: 'Десятый урок', top: 'К началу ↑',
    chapters: [
      {nav:'Основа', title:'Мадд и каср', description:'Два термина и одна естественная мера', blocks:[
        {type:'pair', items:[
          {title:'Мадд', term:'الْمَدُّ', text:'Протяжение звука буквы мадда. При наличии особой причины, хамзы или сукуна, естественная долгота может увеличиваться.', tone:'sea'},
          {title:'Каср', term:'الْقَصْرُ', text:'Сохранение естественной долготы: два хараката. Каср не означает чтение без удлинения.', tone:'sand'}]},
        {type:'example', title:'Естественная долгота', arabic:'قَالَ', text:'В слове Алиф следует за фатхой. Звук «а» длится два хараката.', measure:'٢ · 2 хараката', tone:'cream'}
      ]},
      {nav:'Буквы', title:'Три буквы мадда', description:'У каждой буквы своё условие', blocks:[
        {type:'triplet', items:[
          {letter:'ا', title:'Алиф после фатхи', arabic:'قَالَ', text:'Фатха перед Алифом: удлиняется «а».', tone:'sand'},
          {letter:'و', title:'Вав после даммы', arabic:'يَقُولُ', text:'Дамма перед Вав: удлиняется «у».', tone:'sea'},
          {letter:'ي', title:'Йа после касры', arabic:'قِيلَ', text:'Касра перед Йа: удлиняется «и».', tone:'lilac'}]},
        {type:'word', title:'Все три в одном слове', arabic:'نُوحِيهَا', parts:[['نُو','Вав после даммы'],['حِي','Йа после касры'],['هَا','Алиф после фатхи']], tone:'dark'}
      ]},
      {nav:'Мадд и лин', title:'Мадд или лин?', description:'Решает огласовка перед Вав и Йа', blocks:[
        {type:'pair', items:[
          {title:'Буквы мадда', term:'حُرُوفُ الْمَدِّ', arabic:'يَقُولُ · قِيلَ', text:'Перед Вав стоит дамма; перед Йа — касра.', tone:'sea'},
          {title:'Буквы лин', term:'حَرْفَا اللِّينِ', arabic:'قَوْلٌ · قُرَيْشٌ', text:'Вав или Йа с сукуном стоят после фатхи.', tone:'sand'}]},
        {type:'statement', title:'Мера связана с темпом чтения', text:'Харакат — мера времени, соотносимая со скоростью чтения. Два хараката естественного мадда сохраняются при тахкике, тадвире и хадре.', arabic:'الْمَدُّ الطَّبِيعِيُّ · الْمَدُّ الْأَصْلِيُّ', measure:'Естественный мадд · 2 хараката', tone:'lilac'}
      ]},
      {nav:'Виды', title:'Как различаются виды мадда?', description:'У каждого правила своё условие и своя мера', blocks:[
        {type:'map', rows:[
          {cause:'Нет дополнительной причины', name:'Таби‘и', term:'الْمَدُّ الطَّبِيعِيُّ', measure:'2 хараката', example:'قَالَ', tone:'sea'},
          {cause:'Хамза перед буквой мадда', name:'Бадаль', term:'مَدُّ الْبَدَلِ', measure:'2 хараката', example:'آمَنَ', tone:'cream'},
          {cause:'Хамза после буквы мадда в том же слове', name:'Муттасыль', term:'الْمَدُّ الْمُتَّصِلُ', measure:'4–5 харакатов', example:'جَاءَ', tone:'sand'},
          {cause:'Хамза в следующем слове', name:'Мунфасыль', term:'الْمَدُّ الْمُنْفَصِلُ', measure:'4–5 харакатов', example:'فِي أُمِّهَا', tone:'sea'},
          {cause:'Временный сукун при остановке', name:'Гарыз лис-сукун', term:'الْمَدُّ الْعَارِضُ لِلسُّكُونِ', measure:'2, 4 или 6 харакатов', example:'الْعَالَمِينْ', tone:'lilac'},
          {cause:'Постоянный сукун', name:'Лязим', term:'الْمَدُّ اللَّازِمُ', measure:'6 харакатов', example:'الضَّالِّينَ', tone:'sand'}]}
      ]},
      {nav:'Хамза', title:'Хамза: три положения', description:'Перед буквой мадда, после неё и на границе слов', blocks:[
        {type:'cases', items:[
          {name:'Бадаль', term:'مَدُّ الْبَدَلِ', arabic:'آمَنَ', text:'Хамза перед буквой мадда.', measure:'2 хараката', tone:'sea'},
          {name:'Муттасыль', term:'الْمَدُّ الْمُتَّصِلُ', arabic:'جَاءَ', text:'Хамза после буквы мадда в том же слове.', measure:'4–5 харакатов', tone:'sand'},
          {name:'Мунфасыль', term:'الْمَدُّ الْمُنْفَصِلُ', arabic:'فِي أُمِّهَا', text:'Буква мадда в первом слове; хамза начинает второе.', measure:'4–5 харакатов', tone:'lilac'}]},
        {type:'statement', title:'Мера зависит и от способа чтения', text:'При остановке на конечной хамзе в примере جَاءَ рассматривается удлинение до шести харакатов. Два хараката для мунфасыля относятся к отдельным путям чтения; выбранную меру сохраняют последовательно.', tone:'cream'}
      ]},
      {nav:'Сукун', title:'Сукун: временный и постоянный', description:'Два слова показывают различие правил', blocks:[
        {type:'cases', items:[
          {name:'Гарыз лис-сукун', term:'الْمَدُّ الْعَارِضُ لِلسُّكُونِ', arabic:'الْعَالَمِينَ ← الْعَالَمِينْ', text:'При остановке на Нун возникает временный сукун. Йа перед ним удлиняется.', measure:'2, 4 или 6 харакатов', tone:'sea'},
          {name:'Лязим', term:'الْمَدُّ اللَّازِمُ', arabic:'الضَّالِّينَ', text:'После Алифа — Лям с шаддой. В шадде есть постоянный сукун; он сохраняется и при продолжении чтения.', measure:'6 харакатов', tone:'sand'}]},
        {type:'summary', title:'Основа разбора', rows:[
          ['قَالَ','Фатха перед Алифом','Таби‘и · 2'],
          ['آمَنَ','Хамза перед буквой мадда','Бадаль · 2'],
          ['جَاءَ','Хамза после неё в одном слове','Муттасыль · 4–5'],
          ['فِي أُمِّهَا','Хамза в следующем слове','Мунфасыль · 4–5'],
          ['الْعَالَمِينْ','Сукун возникает при остановке','Гарыз · 2/4/6'],
          ['الضَّالِّينَ','Постоянный сукун после Алифа','Лязим · 6']]} 
      ]}
    ]
  },
  tt: {
    kicker:'11 НЧЕ ДӘРЕС · МӘДД ҺӘМ КАСР', title:'Мәдд һәм каср', arabic:'الْمَدُّ وَالْقَصْرُ',
    subtitle:'Сузу хәрефен тану һәм уку озынлыгын билгеләү',
    nav:'Бу дәрестә', next:'Алга', prev:'Артка', foot:'Унберенче дәрес тәмам', previous:'Унынчы дәрес', top:'Башына ↑',
    chapters:[
      {nav:'Нигез', title:'Мәдд һәм каср', description:'Ике төшенчә һәм табигый озынлык', blocks:[
        {type:'pair',items:[
          {title:'Мәдд',term:'الْمَدُّ',text:'Мәдд хәрефенең авазын сузу. Аерым сәбәп — һәмзә яки сукун — булганда табигый озынлык арта ала.',tone:'sea'},
          {title:'Каср',term:'الْقَصْرُ',text:'Табигый озынлыкны ике хәрәкә күләмендә саклау. Каср авазны бөтенләй сузмыйча уку түгел.',tone:'sand'}]},
        {type:'example',title:'Табигый озынлык',arabic:'قَالَ',text:'Бу сүздә Әлиф фәтхәдән соң килә. «А» авазы ике хәрәкә дәвам итә.',measure:'٢ · 2 хәрәкә',tone:'cream'}
      ]},
      {nav:'Хәрефләр',title:'Өч мәдд хәрефе',description:'Һәр хәрефнең үз шарты бар',blocks:[
        {type:'triplet',items:[
          {letter:'ا',title:'Фәтхәдән соң Әлиф',arabic:'قَالَ',text:'Әлиф алдыннан фәтхә: «а» авазы сузыла.',tone:'sand'},
          {letter:'و',title:'Даммәдән соң Вау',arabic:'يَقُولُ',text:'Вау алдыннан даммә: «у» авазы сузыла.',tone:'sea'},
          {letter:'ي',title:'Кәсрәдән соң Йә',arabic:'قِيلَ',text:'Йә алдыннан кәсрә: «и» авазы сузыла.',tone:'lilac'}]},
        {type:'word',title:'Өчесе дә бер сүздә',arabic:'نُوحِيهَا',parts:[['نُو','Даммәдән соң Вау'],['حِي','Кәсрәдән соң Йә'],['هَا','Фәтхәдән соң Әлиф']],tone:'dark'}
      ]},
      {nav:'Мәдд һәм лин',title:'Мәддме, әллә линмы?',description:'Вау һәм Йә алдындагы хәрәкә мөһим',blocks:[
        {type:'pair',items:[
          {title:'Мәдд хәрефләре',term:'حُرُوفُ الْمَدِّ',arabic:'يَقُولُ · قِيلَ',text:'Вау алдыннан даммә; Йә алдыннан кәсрә.',tone:'sea'},
          {title:'Лин хәрефләре',term:'حَرْفَا اللِّينِ',arabic:'قَوْلٌ · قُرَيْشٌ',text:'Сукунлы Вау яки Йә алдыннан фәтхә тора.',tone:'sand'}]},
        {type:'statement',title:'Озынлык уку тизлегенә бәйле',text:'Хәрәкә — уку тизлегенә бәйле вакыт үлчәме. Табигый мәдднең ике хәрәкәсе тәхкыйк, тәдвир һәм хәдрда саклана.',arabic:'الْمَدُّ الطَّبِيعِيُّ · الْمَدُّ الْأَصْلِيُّ',measure:'Табигый мәдд · 2 хәрәкә',tone:'lilac'}
      ]},
      {nav:'Төрләр',title:'Мәдд төрләренең аермасы нинди?',description:'Һәр кагыйдәнең үз шарты һәм озынлыгы бар',blocks:[
        {type:'map',rows:[
          {cause:'Өстәмә сәбәп юк',name:'Табигый мәдд',term:'الْمَدُّ الطَّبِيعِيُّ',measure:'2 хәрәкә',example:'قَالَ',tone:'sea'},
          {cause:'Һәмзә мәдд хәрефеннән алда',name:'Бәдәл',term:'مَدُّ الْبَدَلِ',measure:'2 хәрәкә',example:'آمَنَ',tone:'cream'},
          {cause:'Һәмзә шул ук сүздә мәдд хәрефеннән соң',name:'Муттасыйль',term:'الْمَدُّ الْمُتَّصِلُ',measure:'4–5 хәрәкә',example:'جَاءَ',tone:'sand'},
          {cause:'Һәмзә икенче сүздә',name:'Мүнфасыйль',term:'الْمَدُّ الْمُنْفَصِلُ',measure:'4–5 хәрәкә',example:'فِي أُمِّهَا',tone:'sea'},
          {cause:'Тукталышта вакытлы сукун',name:'Гарыз лис-сукун',term:'الْمَدُّ الْعَارِضُ لِلسُّكُونِ',measure:'2, 4 яки 6 хәрәкә',example:'الْعَالَمِينْ',tone:'lilac'},
          {cause:'Даими сукун',name:'Лязим',term:'الْمَدُّ اللَّازِمُ',measure:'6 хәрәкә',example:'الضَّالِّينَ',tone:'sand'}]}
      ]},
      {nav:'Һәмзә',title:'Һәмзәнең өч урыны',description:'Мәдд хәрефенә кадәр, аннан соң һәм сүзләр чигендә',blocks:[
        {type:'cases',items:[
          {name:'Бәдәл',term:'مَدُّ الْبَدَلِ',arabic:'آمَنَ',text:'Һәмзә мәдд хәрефеннән алда.',measure:'2 хәрәкә',tone:'sea'},
          {name:'Муттасыйль',term:'الْمَدُّ الْمُتَّصِلُ',arabic:'جَاءَ',text:'Һәмзә мәдд хәрефеннән соң шул ук сүздә.',measure:'4–5 хәрәкә',tone:'sand'},
          {name:'Мүнфасыйль',term:'الْمَدُّ الْمُنْفَصِلُ',arabic:'فِي أُمِّهَا',text:'Мәдд хәрефе беренче сүздә; икенче сүз һәмзәдән башлана.',measure:'4–5 хәрәкә',tone:'lilac'}]},
        {type:'statement',title:'Озынлык уку ысулына да бәйле',text:'جَاءَ сүзенең ахыргы һәмзәсендә тукталганда алты хәрәкәгә кадәр сузу карала. Мүнфасыйльнең ике хәрәкәле варианты аерым уку юлларына карый; сайланган үлчәм эзлекле саклана.',tone:'cream'}
      ]},
      {nav:'Сукун',title:'Вакытлы һәм даими сукун',description:'Ике сүз кагыйдәләрнең аермасын күрсәтә',blocks:[
        {type:'cases',items:[
          {name:'Гарыз лис-сукун',term:'الْمَدُّ الْعَارِضُ لِلسُّكُونِ',arabic:'الْعَالَمِينَ ← الْعَالَمِينْ',text:'Нунда тукталганда вакытлы сукун барлыкка килә. Аның алдындагы Йә сузыла.',measure:'2, 4 яки 6 хәрәкә',tone:'sea'},
          {name:'Лязим',term:'الْمَدُّ اللَّازِمُ',arabic:'الضَّالِّينَ',text:'Әлифтән соң шәддәле Ләм килә. Шәддәдәге даими сукун кушып укыганда да саклана.',measure:'6 хәрәкә',tone:'sand'}]},
        {type:'summary',title:'Анализ нигезе',rows:[
          ['قَالَ','Әлиф алдыннан фәтхә','Табигый · 2'],
          ['آمَنَ','Һәмзә мәдд хәрефеннән алда','Бәдәл · 2'],
          ['جَاءَ','Һәмзә аннан соң шул ук сүздә','Муттасыйль · 4–5'],
          ['فِي أُمِّهَا','Һәмзә икенче сүздә','Мүнфасыйль · 4–5'],
          ['الْعَالَمِينْ','Сукун тукталышта барлыкка килә','Гарыз · 2/4/6'],
          ['الضَّالِّينَ','Әлифтән соң даими сукун','Лязим · 6']]}
      ]}
    ]
  }
};

function lesson11Arabic(value, className) {
  return value ? '<div class="' + (className || 'madd-arabic') + '" lang="ar" dir="rtl">' + value + '</div>' : '';
}
function lesson11Block(block) {
  if (block.type === 'pair' || block.type === 'triplet' || block.type === 'cases') {
    return '<div class="madd-grid madd-grid--' + block.type + '">' + block.items.map(function(item){
      return '<article class="madd-panel madd-panel--' + item.tone + '">' +
        (item.letter ? lesson11Arabic(item.letter,'madd-letter') : '') + '<h3>' + (item.title || item.name) + '</h3>' +
        lesson11Arabic(item.term,'madd-term') + lesson11Arabic(item.arabic) +
        '<p>' + item.text + '</p>' + (item.measure ? '<div class="madd-measure">' + item.measure + '</div>' : '') + '</article>';
    }).join('') + '</div>';
  }
  if (block.type === 'example') return '<article class="madd-feature madd-feature--' + block.tone + '"><h3>' + block.title + '</h3>' + lesson11Arabic(block.arabic) + '<p>' + block.text + '</p><strong class="madd-measure">' + block.measure + '</strong></article>';
  if (block.type === 'word') return '<article class="madd-feature madd-feature--dark"><h3>' + block.title + '</h3>' + lesson11Arabic(block.arabic,'madd-arabic madd-arabic--hero') + '<div class="madd-syllables">' + block.parts.map(function(part){return '<div>' + lesson11Arabic(part[0]) + '<span>' + part[1] + '</span></div>';}).join('') + '</div></article>';
  if (block.type === 'statement') return '<article class="madd-statement madd-panel--' + block.tone + '"><h3>' + block.title + '</h3>' + lesson11Arabic(block.arabic) + '<p>' + block.text + '</p>' + (block.measure ? '<strong class="madd-measure">' + block.measure + '</strong>' : '') + '</article>';
  if (block.type === 'map') return '<div class="madd-map">' + block.rows.map(function(row){return '<article class="madd-map-row madd-panel--' + row.tone + '"><div class="madd-map-cause">' + row.cause + '</div><h3>' + row.name + '</h3>' + lesson11Arabic(row.term,'madd-term') + lesson11Arabic(row.example) + '<strong class="madd-measure">' + row.measure + '</strong></article>';}).join('') + '</div>';
  if (block.type === 'summary') return '<section class="madd-summary"><h3>' + block.title + '</h3>' + block.rows.map(function(row){return '<div class="madd-summary-row">' + lesson11Arabic(row[0]) + '<p>' + row[1] + '</p><strong>' + row[2] + '</strong></div>';}).join('') + '</section>';
  return '';
}
function lesson11Section(chapter,index,lang) {
  return '<section class="chapter" id="part-' + (index+1) + '"><div class="chapter__inner"><div class="chapter-head"><div class="chapter-kicker">' + (lang === 'tt' ? (index+1) + ' НЧЕ БҮЛЕК' : 'ЧАСТЬ ' + String(index+1).padStart(2,'0')) + '</div><h2>' + chapter.title + '</h2><p>' + chapter.description + '</p></div><div class="chapter-content madd-content">' + chapter.blocks.map(lesson11Block).join('') + '</div></div></section>';
}
function renderLesson11(lang) {
  const lesson = lessons11[lang];
  document.documentElement.lang = lang;
  document.title = 'Тәҗвид 3 · ' + lesson.title;
  const labels = {'lesson-kicker':lesson.kicker,'lesson-subtitle':lesson.subtitle,'nav-title':lesson.nav,'nav-next-label':lesson.next,'footer-text':lesson.foot,'previous-link':lesson.previous,'top-link':lesson.top};
  Object.entries(labels).forEach(function(entry){document.getElementById(entry[0]).textContent=entry[1];});
  document.getElementById('lesson-title').innerHTML = '<span class="title-main">' + lesson.title + '</span><span class="title-ar" lang="ar" dir="rtl">' + lesson.arabic + '</span>';
  document.getElementById('nav-prev').setAttribute('aria-label',lesson.prev);
  document.getElementById('nav-next').setAttribute('aria-label',lesson.next);
  const nav = document.getElementById('section-nav');
  nav.setAttribute('aria-label',lang === 'tt' ? 'Дәрес бүлекләре' : 'Разделы урока');
  nav.innerHTML = lesson.chapters.map(function(part,index){return '<a href="#part-' + (index+1) + '"><small>' + String(index+1).padStart(2,'0') + '</small><strong>' + part.nav + '</strong></a>';}).join('');
  document.getElementById('lesson-content').innerHTML = lesson.chapters.map(function(chapter,index){return lesson11Section(chapter,index,lang);}).join('');
  ['ru','tt'].forEach(function(code){const button=document.getElementById(code+'-button');button.classList.toggle('active',code===lang);button.setAttribute('aria-pressed',String(code===lang));});
  nav.scrollLeft=0;
  updateLesson11Nav();
  localStorage.setItem('tajwid3-language',lang);
}
function lesson11NavIndex(){const nav=document.getElementById('section-nav');const cards=[...nav.children];if(!cards.length)return 0;let best=0;for(let i=1;i<cards.length;i++){if(Math.abs(cards[i].offsetLeft-cards[0].offsetLeft-nav.scrollLeft)<Math.abs(cards[best].offsetLeft-cards[0].offsetLeft-nav.scrollLeft))best=i;}return best;}
function updateLesson11Nav(){const nav=document.getElementById('section-nav');const index=lesson11NavIndex();document.getElementById('nav-progress').textContent=String(index+1).padStart(2,'0')+' / '+String(nav.children.length).padStart(2,'0');document.getElementById('nav-prev').disabled=index===0;document.getElementById('nav-next').disabled=index===nav.children.length-1;}
function moveLesson11Nav(delta){const nav=document.getElementById('section-nav');const cards=[...nav.children];const index=Math.max(0,Math.min(cards.length-1,lesson11NavIndex()+delta));nav.scrollTo({left:cards[index].offsetLeft-cards[0].offsetLeft,behavior:'smooth'});}
document.getElementById('ru-button').addEventListener('click',function(){renderLesson11('ru');});
document.getElementById('tt-button').addEventListener('click',function(){renderLesson11('tt');});
document.getElementById('nav-prev').addEventListener('click',function(){moveLesson11Nav(-1);});
document.getElementById('nav-next').addEventListener('click',function(){moveLesson11Nav(1);});
document.getElementById('section-nav').addEventListener('scroll',updateLesson11Nav,{passive:true});
renderLesson11(localStorage.getItem('tajwid3-language')==='tt'?'tt':'ru');
