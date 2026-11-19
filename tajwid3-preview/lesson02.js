const ar = text => `<span class="term" lang="ar" dir="rtl">${text}</span>`;
const card = (title, body, tone = '') => `<div class="lesson-card ${tone}"><h4>${title}</h4>${body}</div>`;
const verse = (arabic, translation, reference) => `<div class="verse"><p class="arabic" lang="ar" dir="rtl">${arabic}</p><p>${translation}</p><p class="source">${reference}</p></div>`;
const example = (arabic, text) => `<div class="example">${ar(arabic)}<p>${text}</p></div>`;
const pace = (visual, arabic, name, text) => `<div class="pace"><div class="pace__visual" aria-hidden="true">${visual}</div><div>${ar(arabic)}<h4>${name}</h4><p>${text}</p></div></div>`;
const art = {
  letters: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><circle cx="90" cy="60" r="43" stroke="currentColor" stroke-width="3"/><circle cx="90" cy="60" r="26" stroke="currentColor" stroke-width="3"/><circle cx="90" cy="60" r="8" fill="currentColor"/><path d="M90 2v12M90 106v12M32 60H18M162 60h-14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  exchange: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M15 32h139l-19-18M154 32l-19 18M165 85H26l19-18M26 85l19 18" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="90" cy="59" r="10" fill="currentColor"/></svg>`,
  errors: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M18 96h144M26 89l31-37 29 20 38-47 31 26" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="57" cy="52" r="6" fill="currentColor"/><circle cx="124" cy="25" r="6" fill="currentColor"/></svg>`,
  pace: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M12 29c14 0 14 13 28 13s14-13 28-13 14 13 28 13 14-13 28-13 14 13 28 13M12 61c9 0 9 13 18 13s9-13 18-13 9 13 18 13 9-13 18-13 9 13 18 13 9-13 18-13 9 13 18 13 9-13 18-13M12 93h140" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`
};

const lesson = {
  ru: {
    kicker: 'УРОК 02 · ОСНОВЫ НАУКИ', title: 'Наука таджвид', subtitle: 'Определение, ошибки и темпы чтения', nav: 'В этом уроке', next: 'Дальше', prev: 'Назад', foot: 'Конец второго урока', previous: 'Первый урок', following: 'Третий урок', top: 'К началу ↑',
    chapters: [
      {nav:'Права букв', title:'Что изучает таджвид?', kicker:'ЧАСТЬ 01', description:'Определение науки и права каждой буквы', lead:'Таджвид учит произносить каждую букву так, как она должна звучать.', art:'letters', body:`
        <div class="content-block"><h3>Значение слова</h3>${ar('عِلْمُ التَّجْوِيدِ')}
          <p>В языковом значении таджвид — улучшение и доведение до совершенства. Как наука он объясняет, как правильно произносить буквы Корана, соблюдая их места образования, свойства, остановки и начало чтения.</p>
        </div>
        <div class="content-block"><h3>Два права буквы</h3><div class="lesson-pair">
          ${card('Хакк', `${ar('حَقُّهُ')}<p>Постоянные свойства буквы. Они принадлежат ей всегда: например, джахр и шидда.</p>`, 'mist')}
          ${card('Мустахакк', `${ar('مُسْتَحَقُّهُ')}<p>То, что проявляется в определённом сочетании букв: например, идгам, ихфа или изхар.</p>`, 'gold')}
        </div><p>Ученик сначала узнаёт саму букву, затем учится сохранять её свойства в слове и при встрече с другими буквами.</p></div>
        <div class="content-block"><h3>Теория и практика</h3><div class="lesson-pair">
          ${card('Изучение правил', `${ar('الْجَانِبُ النَّظَرِيُّ')}<p>Знать определения, условия и названия правил. В материале курса это названо <strong>фард кифая</strong>.</p>`)}
          ${card('Применение при чтении', `${ar('الْجَانِبُ الْعَمَلِيُّ')}<p>Каждому читающему нужно самому стараться произносить Коран правильно. В материале курса это названо <strong>фард айн</strong>.</p>`)}
        </div><div class="note gold"><strong>Плод изучения</strong><p>Таджвид помогает оберегать чтение от явных и скрытых ошибок.</p></div></div>`},
      {nav:'Передача чтения', title:'Как учатся правильному чтению?', kicker:'ЧАСТЬ 02', description:'Учитель, ученик и осознанное применение правил', lead:'Коран учатся читать у учителя: он слышит произношение и помогает его исправить.', art:'exchange', body:`
        <div class="content-block"><h3>Риваят: услышать и повторить</h3>${ar('طَرِيقُ الرِّوَايَةِ')}
          <div class="lesson-flow"><div class="lesson-flow__step"><b>1</b><span><strong>Ард.</strong> Ученик читает перед учителем; учитель слушает и исправляет.</span></div><div class="lesson-flow__connector" aria-hidden="true">↕</div><div class="lesson-flow__step"><b>2</b><span><strong>Талкин.</strong> Учитель читает; ученик внимательно слушает и повторяет.</span></div></div>
        </div>
        <div class="content-block"><h3>Дираят: понять правило</h3>${ar('طَرِيقُ الدِّرَايَةِ')}<p>Ученик изучает правило, узнаёт его в кораническом тексте и применяет в чтении. Если правило забыто, он возвращается к нему и исправляет произношение.</p></div>
        <div class="lesson-summary"><h3>Оба пути работают вместе</h3><p><strong>Риваят</strong> даёт живой образец звучания и исправление у учителя.</p><p><strong>Дираят</strong> помогает понять, что и почему нужно исправить.</p></div>`},
      {nav:'Ошибки', title:'Какие бывают ошибки?', kicker:'ЧАСТЬ 03', description:'Явный и скрытый ляхн на конкретных примерах', lead:'Ляхн — отклонение от правильного чтения Корана.', art:'errors', body:`
        <div class="content-block">${ar('اللَّحْنُ')}<p>Ошибки различают по тому, что именно нарушено: буква или огласовка, либо более тонкая сторона произношения.</p>
          <div class="lesson-pair">
            ${card('Явная ошибка', `${ar('اللَّحْنُ الْجَلِيُّ')}<p>Затрагивает строение слова: букву, огласовку, сукун или добавление звука. Её слышит не только специалист, но и знающий арабский язык.</p>`, 'gold')}
            ${card('Скрытая ошибка', `${ar('اللَّحْنُ الْخَفِيُّ')}<p>Затрагивает точность исполнения. Например, длительность мадда или гунны, мягкость и твёрдость некоторых букв.</p>`, 'violet')}
          </div>
        </div>
        <div class="content-block"><h3>Как выглядит явная ошибка</h3>
          ${example('الْحَمْدُ ← الْهَمْدُ', 'Замена حَ на هَ меняет звучание слова.')}
          ${example('أَنْعَمْتَ ← أَنْعَمْتِ', 'Замена фатхи кясрой меняет форму слова.')}
          <div class="error-list"><p><b>Сукун:</b> прочитать огласованную букву без гласного или добавить гласный к букве с сукуном.</p><p><b>Добавление:</b> произнести лишнюю букву или слово.</p></div>
          <p>Явная ошибка остаётся явной, даже если смысл слова в конкретном случае не изменился. Намеренно допускать её или отказываться учиться при наличии возможности в материале курса названо запретным.</p>
        </div>
        <div class="content-block"><h3>Как выглядит скрытая ошибка</h3><p>Чтец произносит нужные буквы, но не сохраняет требуемую длительность мадда или гунны либо неправильно смягчает или утолщает Лям и Ра.</p>
          <div class="note violet"><strong>Степень скрытой ошибки</strong><p>Полное оставление общеизвестного правила, например ихфа или изхара, в материале курса обозначено как <strong>мухаррам</strong>. Упущение особенно тонкой детали исполнения — как <strong>макрух</strong>. Учитель помогает исправлять оба вида ошибок.</p></div>
        </div>`},
      {nav:'Темпы чтения', title:'С какой скоростью читать?', kicker:'ЧАСТЬ 04', description:'Тахкык, тадвир, хадр и общий для них тартиль', lead:'Скорость чтения может меняться. Точность букв и правил сохраняется при любом темпе.', art:'pace', body:`
        <div class="content-block"><h3>Три темпа</h3>${ar('مَرَاتِبُ التِّلَاوَةِ')}
          <div class="pace-list">
            ${pace('· · ·', 'التَّحْقِيقُ', 'Тахкык', 'Медленно и тщательно. Особенно удобен для обучения.')}
            ${pace('·· ··', 'التَّدْوِيرُ', 'Тадвир', 'Средний, ровный темп.')}
            ${pace('····', 'الْحَدْرُ', 'Хадр', 'Быстрое чтение без потери махраджей и свойств букв.')}
          </div>
        </div>
        <div class="content-block"><h3>Тартиль — основа всех трёх</h3>${ar('التَّرْتِيلُ')}<p>Тартиль здесь не обозначает четвёртую скорость. Это правильное, размеренное чтение: его сохраняют и в тахкыке, и в тадвире, и в хадре.</p>
          <div class="tartil-line"><span>махраджи</span><span>права букв</span><span>размышление</span><span>поступки</span></div>
          ${verse('﴿كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ﴾', '«Это — благословенная Книга, которую Мы ниспослали тебе, чтобы они размышляли над её аятами…»', 'Коран · 38:29, фрагмент')}
          <div class="note gold"><strong>Порядок обучения</strong><p>Сначала добиваемся точности в спокойном темпе. Скорость увеличиваем по мере того, как чтение становится устойчивым.</p></div>
        </div>
        <div class="closing"><strong>Дуа по завершении урока</strong><p class="arabic" lang="ar" dir="rtl">سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ</p><p>О Аллах! Пречист Ты, и хвала Тебе. Свидетельствую, что нет никого достойного поклонения, кроме Тебя. Прошу у Тебя прощения и каюсь перед Тобой.</p></div>`}
    ]
  },
  tt: {
    kicker: '02 НЧЕ ДӘРЕС · ТӘҖВИД ФӘНЕ', title: 'Тәҗвид фәне', subtitle: 'Билгеләмәсе, хаталар һәм уку тизлекләре', nav: 'Бу дәрестә', next: 'Алга', prev: 'Артка', foot: 'Икенче дәрес тәмам', previous: 'Беренче дәрес', following: 'Өченче дәрес', top: 'Башына ↑',
    chapters: [
      {nav:'Хәреф хаклары', title:'Тәҗвид нәрсәне өйрәтә?', kicker:'01 НЧЕ БҮЛЕК', description:'Фәннең билгеләмәсе һәм хәрефнең хаклары', lead:'Тәҗвид һәр хәрефне үзенә тиешле рәвештә әйтергә өйрәтә.', art:'letters', body:`
        <div class="content-block"><h3>Сүзнең мәгънәсе</h3>${ar('عِلْمُ التَّجْوِيدِ')}<p>Телдә тәҗвид — яхшырту һәм күркәмләү. Фән буларак ул Коръән хәрефләрен мәхрәҗләрен, сыйфатларын, тукталыш һәм укуны башлау кагыйдәләрен саклап әйтүне өйрәтә.</p></div>
        <div class="content-block"><h3>Хәрефнең ике хакы</h3><div class="lesson-pair">
          ${card('Хакк', `${ar('حَقُّهُ')}<p>Хәрефтән аерылмый торган даими сыйфатлар. Мәсәлән, җәһр һәм шиддә.</p>`, 'mist')}
          ${card('Мустахакк', `${ar('مُسْتَحَقُّهُ')}<p>Хәрефләр очрашканда барлыкка килә торган кагыйдәләр. Мәсәлән, идгам, ихфа, изһар.</p>`, 'gold')}
        </div><p>Башта укучы хәрефнең үзен таный, аннары аның сыйфатларын сүз эчендә һәм башка хәрефләр янында сакларга өйрәнә.</p></div>
        <div class="content-block"><h3>Теория һәм гамәл</h3><div class="lesson-pair">
          ${card('Кагыйдәләрне өйрәнү', `${ar('الْجَانِبُ النَّظَرِيُّ')}<p>Билгеләмәләрне, шартларны һәм терминнарны белү. Курс материалында бу <strong>фәрд кифая</strong> дип аталган.</p>`)}
          ${card('Укыганда куллану', `${ar('الْجَانِبُ الْعَمَلِيُّ')}<p>Коръән укучы һәркем дөрес әйтергә тырыша. Курс материалында бу <strong>фәрд әйн</strong> дип аталган.</p>`)}
        </div><div class="note gold"><strong>Өйрәнүнең файдасы</strong><p>Тәҗвид укуны ачык һәм яшерен хаталардан сакларга ярдәм итә.</p></div></div>`},
      {nav:'Укуны тапшыру', title:'Дөрес укырга ничек өйрәнәбез?', kicker:'02 НЧЕ БҮЛЕК', description:'Остаз, укучы һәм кагыйдәне аңлы куллану', lead:'Коръән укырга остаздан өйрәнәләр: ул әйтелешне тыңлый һәм төзәтә.', art:'exchange', body:`
        <div class="content-block"><h3>Риваять: ишетү һәм кабатлау</h3>${ar('طَرِيقُ الرِّوَايَةِ')}
          <div class="lesson-flow"><div class="lesson-flow__step"><b>1</b><span><strong>Гард.</strong> Укучы остаз алдында укый; остаз тыңлый һәм төзәтә.</span></div><div class="lesson-flow__connector" aria-hidden="true">↕</div><div class="lesson-flow__step"><b>2</b><span><strong>Талкин.</strong> Остаз укып күрсәтә; укучы игътибар белән тыңлый һәм кабатлый.</span></div></div></div>
        <div class="content-block"><h3>Дираять: кагыйдәне аңлау</h3>${ar('طَرِيقُ الدِّرَايَةِ')}<p>Укучы кагыйдәне өйрәнә, аны Коръән текстында таный һәм укуында куллана. Онытса, кабат аңа кайтып, әйтелешен төзәтә.</p></div>
        <div class="lesson-summary"><h3>Ике юл бергә эшли</h3><p><strong>Риваять</strong> остаздан тере уку үрнәге һәм төзәтү бирә.</p><p><strong>Дираять</strong> нәрсәне һәм ни өчен төзәтергә кирәклеген аңлата.</p></div>`},
      {nav:'Хаталар', title:'Нинди хаталар була?', kicker:'03 НЧЕ БҮЛЕК', description:'Ачык һәм яшерен ләхенне мисаллар белән карыйбыз', lead:'Ләхен — Коръәнне дөрес укудан читкә тайпылу.', art:'errors', body:`
        <div class="content-block">${ar('اللَّحْنُ')}<p>Хата нәрсәгә кагылганына карап аерыла: хәреф белән хәрәкәгәме, әллә әйтелешнең нечкә ягынамы.</p>
          <div class="lesson-pair">
            ${card('Ачык хата', `${ar('اللَّحْنُ الْجَلِيُّ')}<p>Сүзнең төзелешенә кагыла: хәреф, хәрәкә, сукун яки артык аваз. Аны белгечләр генә түгел, гарәп телен белүчеләр дә ишетә.</p>`, 'gold')}
            ${card('Яшерен хата', `${ar('اللَّحْنُ الْخَفِيُّ')}<p>Башкару төгәллегенә кагыла. Мәсәлән, мәдд яки гуннә озынлыгы, кайбер хәрефләрнең йомшаклыгы һәм катылыгы.</p>`, 'violet')}
          </div></div>
        <div class="content-block"><h3>Ачык хата мисаллары</h3>
          ${example('الْحَمْدُ ← الْهَمْدُ', 'حَ хәрефен هَ хәрефенә алыштыру сүзнең яңгырашын үзгәртә.')}
          ${example('أَنْعَمْتَ ← أَنْعَمْتِ', 'Фәтхәне кәсрәгә алыштыру сүзнең формасын үзгәртә.')}
          <div class="error-list"><p><b>Сукун:</b> хәрәкәле хәрефне хәрәкәсез уку яки сукунлы хәрефкә хәрәкә өстәү.</p><p><b>Өстәү:</b> артык хәреф яки сүз әйтү.</p></div>
          <p>Мәгънәсе үзгәрмәгән очракта да, мондый хата ачык хата булып кала. Белә торып ясау яки өйрәнергә мөмкинлек була торып өйрәнмәү курс материалында тыелган гамәл дип атала.</p></div>
        <div class="content-block"><h3>Яшерен хата мисаллары</h3><p>Хәрефләр дөрес булса да, укучы мәдд яки гуннә озынлыгын сакламаска, Ләм һәм Ра хәрефләрен кагыйдәгә туры килмәгәнчә йомшартырга яисә каты итәргә мөмкин.</p><div class="note violet"><strong>Яшерен хатаның дәрәҗәсе</strong><p>Курс материалында ихфа яки изһар кебек билгеле кагыйдәне бөтенләй калдыру <strong>мөхәррәм</strong>, башкаруның бик нечкә өлешен төгәл үтәмәү <strong>мәкруһ</strong> дип бирелә. Дәрестә остаз ике төр хатаны да төзәтергә ярдәм итә.</p></div></div>`},
      {nav:'Уку тизлекләре', title:'Нинди темпта укыйбыз?', kicker:'04 НЧЕ БҮЛЕК', description:'Тәхкыйк, тәдвир, хәдр һәм һәркайсында тәртил', lead:'Уку тизлеге үзгәрә ала. Хәрефләрнең төгәллеге һәр темпта саклана.', art:'pace', body:`
        <div class="content-block"><h3>Өч уку темпы</h3>${ar('مَرَاتِبُ التِّلَاوَةِ')}
          <div class="pace-list">
            ${pace('· · ·', 'التَّحْقِيقُ', 'Тәхкыйк', 'Әкрен һәм җентекле уку. Өйрәнү өчен уңайлы.')}
            ${pace('·· ··', 'التَّدْوِيرُ', 'Тәдвир', 'Уртача, тигез темп.')}
            ${pace('····', 'الْحَدْرُ', 'Хәдр', 'Тиз уку, әмма мәхрәҗләргә һәм сыйфатларга зыян китермичә.')}
          </div></div>
        <div class="content-block"><h3>Тәртил — өчесенең дә нигезе</h3>${ar('التَّرْتِيلُ')}<p>Монда тәртил дүртенче тизлекне аңлатмый. Дөрес, тәртипле уку тәхкыйкта да, тәдвирдә дә, хәдрдә дә саклана.</p>
          <div class="tartil-line"><span>мәхрәҗләр</span><span>хәреф хаклары</span><span>тәдәббур</span><span>гамәлләр</span></div>
          ${verse('﴿كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ﴾', '«Бу — сиңа Без иңдергән мөбарәк Китап. Алар аның аятьләре турында уйлансыннар…»', 'Коръән · 38:29, өзек')}
          <div class="note gold"><strong>Өйрәнү тәртибе</strong><p>Башта тыныч темпта төгәллеккә ирешәбез. Уку ныклы булгач кына тизлекне арттырабыз.</p></div></div>
        <div class="closing"><strong>Дәрес ахырындагы дога</strong><p class="arabic" lang="ar" dir="rtl">سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ</p><p>Йә Аллаһ! Син барлык кимчелекләрдән пакь, һәм Сиңа мактау. Синнән башка гыйбадәткә лаеклы һичбер зат юклыгына шаһитлык итәм. Синнән гафу сорыйм һәм Сиңа тәүбә итәм.</p></div>`}
    ]
  }
};

function render(lang) {
  const data = lesson[lang];
  document.documentElement.lang = lang;
  document.title = `Тәҗвид 3 · ${data.title}`;
  document.getElementById('lesson-kicker').textContent = data.kicker;
  document.getElementById('lesson-title').textContent = data.title;
  document.getElementById('lesson-subtitle').textContent = data.subtitle;
  document.getElementById('nav-title').textContent = data.nav;
  document.getElementById('nav-next-label').textContent = data.next;
  document.getElementById('nav-prev').setAttribute('aria-label', data.prev);
  document.getElementById('nav-next').setAttribute('aria-label', data.next);
  document.getElementById('footer-text').textContent = data.foot;
  document.getElementById('previous-link').textContent = data.previous;
  document.getElementById('next-lesson-link').textContent = data.following;
  document.getElementById('top-link').textContent = data.top;
  document.getElementById('section-nav').innerHTML = data.chapters.map((chapter, index) => `<a href="#part-${index + 1}"><small>${String(index + 1).padStart(2, '0')}</small><strong>${chapter.nav}</strong></a>`).join('');
  document.getElementById('lesson-content').innerHTML = data.chapters.map((chapter, index) => `<section class="chapter" id="part-${index + 1}"><div class="chapter__inner"><div class="chapter-head"><div class="chapter-kicker">${chapter.kicker}</div><h2>${chapter.title}</h2><p>${chapter.description}</p><div class="chapter-art">${art[chapter.art]}</div></div><div class="chapter-content"><p class="lead">${chapter.lead}</p>${chapter.body}</div></div></section>`).join('');
  for (const code of ['ru', 'tt']) {
    const button = document.getElementById(`${code}-button`);
    button.classList.toggle('active', code === lang);
    button.setAttribute('aria-pressed', String(code === lang));
  }
  document.getElementById('section-nav').scrollLeft = 0;
  updateNavControls();
  localStorage.setItem('tajwid3-language', lang);
}

function currentNavIndex() {
  const nav = document.getElementById('section-nav');
  const cards = [...nav.children];
  if (!cards.length) return 0;
  let closest = 0;
  for (let i = 1; i < cards.length; i++) {
    if (Math.abs(cards[i].offsetLeft - cards[0].offsetLeft - nav.scrollLeft) < Math.abs(cards[closest].offsetLeft - cards[0].offsetLeft - nav.scrollLeft)) closest = i;
  }
  return closest;
}
function updateNavControls() {
  const nav = document.getElementById('section-nav');
  const index = currentNavIndex();
  document.getElementById('nav-progress').textContent = `${String(index + 1).padStart(2, '0')} / ${String(nav.children.length).padStart(2, '0')}`;
  document.getElementById('nav-prev').disabled = index === 0;
  document.getElementById('nav-next').disabled = index === nav.children.length - 1;
}
function moveNav(delta) {
  const nav = document.getElementById('section-nav');
  const cards = [...nav.children];
  const next = Math.max(0, Math.min(cards.length - 1, currentNavIndex() + delta));
  nav.scrollTo({ left: cards[next].offsetLeft - cards[0].offsetLeft, behavior: 'smooth' });
}
document.getElementById('ru-button').addEventListener('click', () => render('ru'));
document.getElementById('tt-button').addEventListener('click', () => render('tt'));
document.getElementById('nav-prev').addEventListener('click', () => moveNav(-1));
document.getElementById('nav-next').addEventListener('click', () => moveNav(1));
document.getElementById('section-nav').addEventListener('scroll', updateNavControls, { passive: true });
render(localStorage.getItem('tajwid3-language') === 'tt' ? 'tt' : 'ru');
