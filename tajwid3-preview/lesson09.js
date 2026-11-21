const arabic = value => `<span class="large-ar" lang="ar" dir="rtl">${value}</span>`;
const card = (title, text, sample = '', tone = '') => {
  const [main, term] = title.split(' · ');
  const heading = term && /[\u0600-\u06ff]/.test(term) ? `${main}<span class="card-title-ar" lang="ar" dir="rtl">${term}</span>` : title;
  return `<article class="lesson-card ${tone}"><h4>${heading}</h4><p>${text}</p>${sample ? `<div class="sample-ar">${arabic(sample)}</div>` : ''}</article>`;
};
const pair = (...items) => `<div class="lesson-pair">${items.join('')}</div>`;
const note = (title, text, tone = 'violet') => `<div class="note ${tone}"><strong>${title}</strong><p>${text}</p></div>`;
const ranks = {
  ru: [
    ['1 · Наиболее полная', 'Акмалу ма такун', 'أَكْمَلُ مَا تَكُونُ', 'Шадда и слияние с гунной.'],
    ['2 · Полная', 'Гунна камила', 'غُنَّةٌ كَامِلَةٌ', 'Скрытые Нун и Мим.'],
    ['3 · Неполная', 'Гунна накыса', 'غُنَّةٌ نَاقِصَةٌ', 'Ясные Нун и Мим с сукуном.'],
    ['4 · Наименьшая', 'Анкасу ма такун', 'أَنْقَصُ مَا تَكُونُ', 'Нун и Мим с огласовкой.']
  ],
  tt: [
    ['1 · Иң тулы', 'Әкмәлу мә тәкүн', 'أَكْمَلُ مَا تَكُونُ', 'Шәддә һәм гуннәле кушылу.'],
    ['2 · Тулы', 'Гуннә кәмилә', 'غُنَّةٌ كَامِلَةٌ', 'Яшереп укылган Нун һәм Мим.'],
    ['3 · Тулы булмаган', 'Гуннә накыйса', 'غُنَّةٌ نَاقِصَةٌ', 'Сукунлы Нун белән Мим ачык укыла.'],
    ['4 · Иң аз', 'Әнкасу мә тәкүн', 'أَنْقَصُ مَا تَكُونُ', 'Хәрәкәле Нун һәм Мим.']
  ]
};
const rankCards = lang => `<div class="rank-grid">${ranks[lang].map(([title, name, ar, text], i) => `<article class="rank-card rank-card--${i + 1}"><b>${title}</b><span>${name}</span>${arabic(ar)}<p>${text}</p></article>`).join('')}</div>`;
const highlight = (sample, focus) => sample.replace(focus, '<span class="target-ar">' + focus + '</span>');
const degreeRows = [
  {sample:'فِي الْيَمِّ',focus:'مِّ',
   condition:{ru:'Мим с шаддой',tt:'Шәддәле Мим'},
   rank:{ru:'Наиболее полная гунна',tt:'Иң тулы гуннә'},
   name:{ru:'Акмалу ма такун',tt:'Әкмәлу мә тәкүн',ar:'أَكْمَلُ مَا تَكُونُ'},
   why:{ru:'Шадда показывает удвоение Мим.',tt:'Шәддә Мимның икеләнүен күрсәтә.'},
   length:{ru:'Гунна — две харакаты.',tt:'Гуннә — ике хәрәкә.'}},
  {sample:'الْإِنْسَانُ',focus:'نْ',
   condition:{ru:'Нун перед Син',tt:'Син алдыннан Нун'},
   rank:{ru:'Полная гунна',tt:'Тулы гуннә'},
   name:{ru:'Гунна камила',tt:'Гуннә кәмилә',ar:'غُنَّةٌ كَامِلَةٌ'},
   why:{ru:'Нун с сукуном скрывается перед Син.',tt:'Сукунлы Нун Син алдыннан яшереп укыла.'},
   length:{ru:'Гунна — две харакаты.',tt:'Гуннә — ике хәрәкә.'}},
  {sample:'أَنْعَمْتَ',focus:'نْ',
   condition:{ru:'Нун перед Айн',tt:'Айн алдыннан Нун'},
   rank:{ru:'Неполная гунна',tt:'Тулы булмаган гуннә'},
   name:{ru:'Гунна накыса',tt:'Гуннә накыйса',ar:'غُنَّةٌ نَاقِصَةٌ'},
   why:{ru:'Нун с сукуном произносится ясно перед Айн.',tt:'Сукунлы Нун Айн алдыннан ачык укыла.'},
   length:{ru:'Естественный призвук без отдельного удлинения.',tt:'Табигый яңгыраш аерым сузылмый.'}},
  {sample:'بِئْسَمَا',focus:'مَ',
   condition:{ru:'Мим с фатхой',tt:'Фәтхәле Мим'},
   rank:{ru:'Наименьшая гунна',tt:'Иң аз гуннә'},
   name:{ru:'Анкасу ма такун',tt:'Әнкасу мә тәкүн',ar:'أَنْقَصُ مَا تَكُونُ'},
   why:{ru:'Мим огласована, шадды нет.',tt:'Мим хәрәкәле, шәддә юк.'},
   length:{ru:'Произносим естественно, без задержки.',tt:'Табигый әйтелә, тоткарлык юк.'}}
];
const degreeExamples = lang => '<div class="degree-grid">' + degreeRows.map((row,i) =>
  '<article class="degree-example degree-example--' + (i+1) + '">' +
  '<div class="degree-example__eyebrow"><span>' + String(i+1).padStart(2,'0') + '</span><b>' + row.condition[lang] + '</b></div>' +
  '<div class="degree-example__sample" lang="ar" dir="rtl">' + highlight(row.sample,row.focus) + '</div>' +
  '<div class="degree-example__focus"><span lang="ar" dir="rtl">' + row.focus + '</span><p>' + row.why[lang] + '</p></div>' +
  '<div class="degree-example__answer"><strong>' + row.rank[lang] + '</strong>' +
  '<span>' + row.name[lang] + '</span><b lang="ar" dir="rtl">' + row.name.ar + '</b>' +
  '<p>' + row.length[lang] + '</p></div></article>'
).join('') + '</div>';
const mimMerge = lang => '<section class="mim-merge">' +
  '<div class="mim-merge__heading"><h3>' + (lang === 'tt' ? 'Ике Мимның кушылуы' : 'Слияние двух Мим') +
  '</h3><span lang="ar" dir="rtl">إِدْغَامُ الْمِيمِ فِي الْمِيمِ</span></div>' +
  '<p>' + (lang === 'tt' ? 'Сәкенле Мим артыннан кәсрәле Мим килә. Кушып укыганда алар бер шәддәле Мим булып әйтелә.' :
  'За Мим с сукуном следует Мим с касрой. При слитном чтении они дают одну Мим с шаддой.') + '</p>' +
  '<div class="mim-merge__verse" lang="ar" dir="rtl">' + highlight('مَا هُمْ مِنَ اللَّهِ','هُمْ مِنَ') + '</div>' +
  '<div class="mim-merge__formula"><b lang="ar" dir="rtl">مْ</b><span>+</span><b lang="ar" dir="rtl">مِ</b><span>=</span><b class="mim-merge__result" lang="ar" dir="rtl">مِّ</b></div>' +
  '<p class="mim-merge__foot">' + (lang === 'tt' ? 'Нәтиҗә: шәддәле Мим. Гуннә ике хәрәкә дәвам итә.' :
  'Результат: Мим с шаддой. Гунна длится две харакаты.') + '</p></section>';
const finalSummary = lang => {
  const rows = lang === 'tt' ? [
    ['01','Шәддә яки гуннәле идгам','Иң тулы гуннә','أَكْمَلُ مَا تَكُونُ','2 хәрәкә','فِي الْيَمِّ'],
    ['02','Ихфа яки икляб','Тулы гуннә','غُنَّةٌ كَامِلَةٌ','2 хәрәкә','الْإِنْسَانُ'],
    ['03','Сукунлы хәреф ачык укыла','Тулы булмаган гуннә','غُنَّةٌ نَاقِصَةٌ','Аерым сузу юк','أَنْعَمْتَ'],
    ['04','Хәрәкәле хәреф, шәддә юк','Иң аз гуннә','أَنْقَصُ مَا تَكُونُ','Табигый әйтелеш','بِئْسَمَا']
  ] : [
    ['01','Шадда или идгам с гунной','Наиболее полная гунна','أَكْمَلُ مَا تَكُونُ','2 харакаты','فِي الْيَمِّ'],
    ['02','Ихфа или икляб','Полная гунна','غُنَّةٌ كَامِلَةٌ','2 харакаты','الْإِنْسَانُ'],
    ['03','Ясное чтение буквы с сукуном','Неполная гунна','غُنَّةٌ نَاقِصَةٌ','Без отдельного удлинения','أَنْعَمْتَ'],
    ['04','Огласованная буква без шадды','Наименьшая гунна','أَنْقَصُ مَا تَكُونُ','Естественное произнесение','بِئْسَمَا']
  ];
  return '<section class="degree-outcome"><h3>' + (lang === 'tt' ? 'Дүрт дәрәҗәне ничек аерабыз?' : 'Как различить четыре степени?') +
    '</h3><div class="degree-outcome__list">' + rows.map(row =>
    '<article><span class="degree-outcome__number">' + row[0] + '</span><div><p>' + row[1] +
    '</p><strong>' + row[2] + '</strong><b lang="ar" dir="rtl">' + row[3] + '</b>' +
    '<small>' + row[4] + '</small></div><span class="degree-outcome__arabic" lang="ar" dir="rtl">' + row[5] +
    '</span></article>').join('') + '</div></section>';
};
const qa = lang => {
  const rows = lang === 'tt' ? [
    ['Гуннә кайда яңгырый?', 'Әл-хәйшүмдә, ягъни борын куышлыгында.'],
    ['Кайсы хәрефләргә гуннә хас?', 'Нун һәм Мим хәрефләренә. Тәнвин дә кушып укыганда Нун авазын бирә.'],
    ['Кайчан гуннә ике хәрәкә дәвам итә?', 'Шәддәдә, гуннәле идгамда, ихфада һәм иклябта.'],
    ['Сукунлы ачык Нунны ике хәрәкәгә сузабызмы?', 'Юк. Табигый борын яңгырашы саклана, әмма аерым сузылмый.']
  ] : [
    ['Где звучит гунна?', 'В аль-хайшум, то есть в носовой полости.'],
    ['Каким буквам присуща гунна?', 'Нун и Мим. Танвин при слитном чтении тоже даёт звук Нун.'],
    ['Когда гунну выдерживают две харакаты?', 'При шадде, идгаме с гунной, ихфа и иклябе.'],
    ['Нужно ли тянуть две харакаты ясную Нун с сукуном?', 'Нет. Естественный носовой призвук сохраняется без отдельного удлинения.']
  ];
  return `<div class="quiz">${rows.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
};
const lesson = {
  ru: {
    kicker: 'УРОК 09 · ГУННА', title: 'Гунна (الْغُنَّةُ)', subtitle: 'Носовое звучание Нун и Мим', nav: 'В этом уроке', next: 'Дальше', prev: 'Назад', foot: 'Девятый урок завершён', previous: 'Восьмой урок', top: 'К началу ↑',
    chapters: [
      { nav: 'Основа', title: 'Что такое гунна?', kicker: 'ЧАСТЬ 01', description: 'Звук, место образования и буквы', lead: 'Гунна — носовое звучание, присущее буквам Нун и Мим.', body: `${pair(card('Место образования', 'Махрадж гунны — аль-хайшум, носовая полость. Язык образует Нун, губы образуют Мим; носовая полость придаёт этим буквам носовой резонанс.', 'الْخَيْشُومُ', 'mist'), card('Буквы гунны', 'Гунна присуща Нун и Мим. Танвин при слитном чтении даёт звук Нун. Степень гунны определяем для конкретной буквы в её состоянии.', 'نْ   مْ   ـً   ـٍ   ـٌ', 'gold'))}${note('Различаем', 'Место образования самой буквы и место носового резонанса — разные вещи.')}` },
      { nav: 'Степени', title: 'Четыре степени гунны', kicker: 'ЧАСТЬ 02', description: 'Как состояние буквы меняет звучание', lead: 'Чем сильнее слияние или скрытие, тем заметнее носовой резонанс.', body: `${rankCards('ru')}${note('Длительность · две харакаты', 'Харакат связан с темпом чтения. При шадде, идгаме с гунной, ихфа и иклябе гунну выдерживают две харакаты. При ясном сукуне и огласовке сохраняют естественный призвук без отдельного удлинения.', 'gold')}` },
      { nav: 'Наиболее полная', title: 'Шадда и слияние', kicker: 'ЧАСТЬ 03', description: 'Первая степень гунны', lead: 'Шадда и слияние показывают наиболее полное носовое звучание.', body: pair(card('Нун и Мим с шаддой · أَكْمَلُ مَا تَكُونُ', 'Шадда обозначает удвоение буквы. На نّ и مّ гунна выдерживается две харакаты.', 'إِنَّ   فِي الْيَمِّ   النَّاسِ', 'mist'), card('Идгам с гунной · الْإِدْغَامُ بِغُنَّةٍ', 'Нун с сукуном или танвин сливается с Йа, Нун, Мим или Вау. Гунна сохраняется две харакаты.', 'ي ن م و   إِنْ نَفَعَتْ   وَمَنْ يَعْمَلْ', 'gold')) + mimMerge('ru') },
      { nav: 'Полная', title: 'Скрытие и замена', kicker: 'ЧАСТЬ 04', description: 'Вторая степень гунны', lead: 'Полная гунна проявляется при скрытом произнесении Нун или Мим.', body: `${pair(card('Ихфа хакики · الْإِخْفَاءُ الْحَقِيقِيُّ', 'Нун с сукуном или танвин скрывается перед буквами ихфа. Гунна продолжается две харакаты. В примере Нун стоит перед Син.', 'الْإِنْسَانُ', 'mist'), card('Ихфа шафави · الْإِخْفَاءُ الشَّفَوِيُّ', 'Мим с сукуном скрывается перед Ба с гунной на две харакаты. «Шафави» означает «губной».', 'تَرْمِيهِمْ بِحِجَارَةٍ', 'gold'))}${card('Икляб · الْإِقْلَابُ', 'Перед Ба Нун с сукуном или танвин переходит в скрытую Мим. Гунна сохраняется две харакаты.', 'مِنْ بَعْدِ', 'violet')}` },
      { nav: 'Естественная', title: 'Ясное и обычное чтение', kicker: 'ЧАСТЬ 05', description: 'Третья и четвёртая степени', lead: 'Носовой призвук остаётся, но отдельного двухсчётного удлинения нет.', body: `${pair(card('Неполная гунна', 'Ясные Нун и Мим с сукуном сохраняют естественный носовой призвук. В первом примере Нун стоит перед Айн и Мим перед Та; во втором Мим стоит перед Фа.', 'أَنْعَمْتَ   وَهُمْ فَرِحُونَ', 'mist'), card('Наименьшая гунна', 'Нун и Мим с огласовкой и без шадды произносятся естественно, без задержки.', 'نَ نُ نِ   مَ مُ مِ', 'gold'))}${note('Смотрим на конкретную букву', 'В выражении بِئْسَمَا يَأْمُرُكُمْ بِهِ إِيمَانُكُمْ рассматриваем مَ в بِئْسَمَا, а также مَ и نُ в إِيمَانُكُمْ. Все они огласованы: это наименьшая степень.')}` },
      { nav: 'Примеры', title: 'Четыре степени — четыре примера', kicker: 'ЧАСТЬ 06', description: 'Буква, признак и длительность', lead: 'В каждом примере выделена буква, по которой определяем степень гунны.', body: degreeExamples('ru') + finalSummary('ru') },
    ]
  },
  tt: {
    kicker: '09 НЧЫ ДӘРЕС · ГУННӘ', title: 'Гуннә (الْغُنَّةُ)', subtitle: 'Нун белән Мимның борын яңгырашы', nav: 'Бу дәрестә', next: 'Алга', prev: 'Артка', foot: 'Тугызынчы дәрес тәмам', previous: 'Сигезенче дәрес', top: 'Башына ↑',
    chapters: [
      { nav: 'Нигез', title: 'Гуннә нәрсә ул?', kicker: '01 НЧЕ БҮЛЕК', description: 'Аваз, ясалу урыны һәм хәрефләр', lead: 'Гуннә — Нун һәм Мим хәрефләренә хас борын яңгырашы.', body: `${pair(card('Ясалу урыны', 'Гуннәнең мәхраҗы — әл-хәйшүм, ягъни борын куышлыгы. Нунны тел, Мимны иреннәр ясый; борын куышлыгы аларга борын яңгырашы бирә.', 'الْخَيْشُومُ', 'mist'), card('Гуннә хәрефләре', 'Гуннә Нун белән Мимга хас. Тәнвин кушып укылганда Нун авазын бирә. Гуннәнең дәрәҗәсен һәр хәрефнең халәтенә карап билгелибез.', 'نْ   مْ   ـً   ـٍ   ـٌ', 'gold'))}${note('Аерабыз', 'Хәрефнең үз ясалу урыны белән борын яңгырашы чыга торган урын бер үк түгел.')}` },
      { nav: 'Дәрәҗәләр', title: 'Гуннәнең дүрт дәрәҗәсе', kicker: '02 НЧЕ БҮЛЕК', description: 'Хәрефнең халәте яңгырашны үзгәртә', lead: 'Кушылу яки яшерү көчлерәк булган саен борын яңгырашы да ачыграк ишетелә.', body: `${rankCards('tt')}${note('Озынлык · ике хәрәкә', 'Хәрәкә озынлыгы уку темпына бәйле. Шәддә, гуннәле идгам, ихфа һәм икляб вакытында гуннә ике хәрәкә дәвам итә. Ачык сукун һәм гадәти хәрәкәдә табигый яңгыраш кала, әмма аерым сузылмый.', 'gold')}` },
      { nav: 'Иң тулы', title: 'Шәддә һәм кушылу', kicker: '03 НЧЕ БҮЛЕК', description: 'Гуннәнең беренче дәрәҗәсе', lead: 'Шәддә һәм кушылу борын яңгырашын иң тулы итеп күрсәтә.', body: pair(card('Шәддәле Нун һәм Мим · أَكْمَلُ مَا تَكُونُ', 'Шәддә хәрефнең икеләнүен күрсәтә. نّ һәм مّ ике хәрәкәле гуннә белән укыла.', 'إِنَّ   فِي الْيَمِّ   النَّاسِ', 'mist'), card('Гуннәле идгам · الْإِدْغَامُ بِغُنَّةٍ', 'Сәкенле Нун яки тәнвин Йә, Нун, Мим яисә Вау белән кушыла. Гуннә ике хәрәкә саклана.', 'ي ن م و   إِنْ نَفَعَتْ   وَمَنْ يَعْمَلْ', 'gold')) + mimMerge('tt') },
      { nav: 'Тулы', title: 'Яшерү һәм алмаштыру', kicker: '04 НЧЕ БҮЛЕК', description: 'Гуннәнең икенче дәрәҗәсе', lead: 'Тулы гуннә Нун яки Мим яшереп укылганда ишетелә.', body: `${pair(card('Ихфа хакыйкый · الْإِخْفَاءُ الْحَقِيقِيُّ', 'Сәкенле Нун яки тәнвин ихфа хәрефләре алдыннан яшереп укыла. Гуннә ике хәрәкә дәвам итә. Мисалда Нун Син алдыннан тора.', 'الْإِنْسَانُ', 'mist'), card('Ихфа шәфәви · الْإِخْفَاءُ الشَّفَوِيُّ', 'Сәкенле Мим Ба алдыннан ике хәрәкәле гуннә белән яшереп укыла. «Шәфәви» — иренгә бәйле дигән сүз.', 'تَرْمِيهِمْ بِحِجَارَةٍ', 'gold'))}${card('Икляб · الْإِقْلَابُ', 'Ба алдыннан сәкенле Нун яки тәнвин яшерен Мим авазына алмаша. Гуннә ике хәрәкә саклана.', 'مِنْ بَعْدِ', 'violet')}` },
      { nav: 'Табигый', title: 'Ачык һәм гадәти уку', kicker: '05 НЧЕ БҮЛЕК', description: 'Өченче һәм дүртенче дәрәҗәләр', lead: 'Борын яңгырашы саклана, әмма аны аерым ике хәрәкәгә сузмыйбыз.', body: `${pair(card('Тулы булмаган гуннә', 'Сәкенле Нун белән Мим ачык укылганда табигый борын яңгырашы кала. Беренче мисалда Нун Айн алдыннан, Мим Тә алдыннан; икенчесендә Мим Фә алдыннан тора.', 'أَنْعَمْتَ   وَهُمْ فَرِحُونَ', 'mist'), card('Иң аз гуннә', 'Хәрәкәле, шәддәсез Нун һәм Мим тоткарлыксыз, табигый укыла.', 'نَ نُ نِ   مَ مُ مِ', 'gold'))}${note('Һәр хәрефне аерым карыйбыз', 'بِئْسَمَا يَأْمُرُكُمْ بِهِ إِيمَانُكُمْ җөмләсендә بِئْسَمَا сүзендәге مَ, ә إِيمَانُكُمْ сүзендәге مَ һәм نُ карала. Өчесе дә хәрәкәле: бу иң аз дәрәҗә.')}` },
      { nav: 'Дүрт мисал', title: 'Дүрт дәрәҗә — дүрт мисал', kicker: '06 НЧЫ БҮЛЕК', description: 'Хәреф, сәбәп һәм озынлык', lead: 'Һәр мисалда карала торган хәрефнең хәле ачык күрсәтелә.', body: degreeExamples('tt') + finalSummary('tt') },
    ]
  }
};
function render(lang) {
  const d = lesson[lang]; document.documentElement.lang = lang; document.title = `Тәҗвид 3 · ${d.title}`;
  for (const [id, value] of [['lesson-kicker',d.kicker],['lesson-title',d.title],['lesson-subtitle',d.subtitle],['nav-title',d.nav],['nav-next-label',d.next],['footer-text',d.foot],['previous-link',d.previous],['top-link',d.top]]) document.getElementById(id).textContent = value;
  document.getElementById('lesson-title').innerHTML = d.title.replace(/^(.*?) \(([^()]*)\)$/, '<span class="title-main">$1</span><span class="title-ar" lang="ar" dir="rtl">$2</span>');
  document.getElementById('nav-prev').setAttribute('aria-label',d.prev); document.getElementById('nav-next').setAttribute('aria-label',d.next);
  const nav = document.getElementById('section-nav'); nav.setAttribute('aria-label', lang === 'tt' ? 'Дәрес бүлекләре' : 'Разделы урока');
  nav.innerHTML = d.chapters.map((c,i) => `<a href="#part-${i+1}"><small>${String(i+1).padStart(2,'0')}</small><strong>${c.nav}</strong></a>`).join('');
  document.getElementById('lesson-content').innerHTML = d.chapters.map((c,i) => `<section class="chapter" id="part-${i+1}"><div class="chapter__inner"><div class="chapter-head"><div class="chapter-kicker">${c.kicker}</div><h2>${c.title}</h2><p>${c.description}</p></div><div class="chapter-content"><p class="lead">${c.lead}</p>${c.body}</div></div></section>`).join('');
  for (const code of ['ru','tt']) { const button = document.getElementById(`${code}-button`); button.classList.toggle('active',code === lang); button.setAttribute('aria-pressed',String(code === lang)); }
  nav.scrollLeft = 0; updateNav(); localStorage.setItem('tajwid3-language',lang);
}
function navIndex() { const nav = document.getElementById('section-nav'), cards = [...nav.children]; if (!cards.length) return 0; let best = 0; for (let i=1;i<cards.length;i++) if (Math.abs(cards[i].offsetLeft-cards[0].offsetLeft-nav.scrollLeft) < Math.abs(cards[best].offsetLeft-cards[0].offsetLeft-nav.scrollLeft)) best = i; return best; }
function updateNav() { const nav = document.getElementById('section-nav'), i = navIndex(); document.getElementById('nav-progress').textContent = `${String(i+1).padStart(2,'0')} / ${String(nav.children.length).padStart(2,'0')}`; document.getElementById('nav-prev').disabled = i === 0; document.getElementById('nav-next').disabled = i === nav.children.length-1; }
function moveNav(delta) { const nav = document.getElementById('section-nav'), cards = [...nav.children], i = Math.max(0,Math.min(cards.length-1,navIndex()+delta)); nav.scrollTo({left:cards[i].offsetLeft-cards[0].offsetLeft,behavior:'smooth'}); }
document.getElementById('ru-button').addEventListener('click',()=>render('ru'));
document.getElementById('tt-button').addEventListener('click',()=>render('tt'));
document.getElementById('nav-prev').addEventListener('click',()=>moveNav(-1));
document.getElementById('nav-next').addEventListener('click',()=>moveNav(1));
document.getElementById('section-nav').addEventListener('scroll',updateNav,{passive:true});
render(localStorage.getItem('tajwid3-language') === 'tt' ? 'tt' : 'ru');
