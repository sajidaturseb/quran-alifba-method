const ar = text => `<span class="term" lang="ar" dir="rtl">${text}</span>`;
const card = (title, body, tone = '') => `<div class="lesson-card ${tone}"><h4>${title}</h4>${body}</div>`;
const verse = (arabic, translation, reference) => `<div class="verse"><p class="arabic" lang="ar" dir="rtl">${arabic}</p><p>${translation}</p><p class="source">${reference}</p></div>`;
const row = (number, title, text) => `<div class="adab-card"><div class="adab-card__top"><span>${number}</span><h4>${title}</h4></div><p>${text}</p></div>`;
const chain = (parts, labels) => `<div class="join-chain" role="img" aria-label="${labels}">${parts.map((part, i) => `<span class="join-chain__part">${part}</span>${i < parts.length - 1 ? '<span class="join-chain__arrow" aria-hidden="true">→</span>' : ''}`).join('')}</div>`;
const art = {
  refuge: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M90 9 151 32v32c0 28-21 42-61 54-40-12-61-26-61-54V32L90 9Z" stroke="currentColor" stroke-width="4"/><path d="M57 63 79 83l45-46" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  voices: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><circle cx="90" cy="26" r="11" stroke="currentColor" stroke-width="4"/><circle cx="42" cy="75" r="11" stroke="currentColor" stroke-width="4"/><circle cx="138" cy="75" r="11" stroke="currentColor" stroke-width="4"/><path d="M90 39v18M78 57H52M102 57h26M52 57l-7 7M128 57l7 7" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
  pause: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M16 60h54M110 60h54" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="m58 47 14 13-14 13M152 47l14 13-14 13" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M83 42v36M97 42v36" stroke="currentColor" stroke-width="7" stroke-linecap="round"/></svg>`,
  basmala: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><path d="M90 17 124 45l-34 30-34-30 34-28Z" stroke="currentColor" stroke-width="4"/><path d="M90 75v31M44 89h92M24 107h132" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="90" cy="45" r="8" fill="currentColor"/></svg>`,
  joining: `<svg viewBox="0 0 180 120" fill="none" aria-hidden="true"><circle cx="36" cy="60" r="15" stroke="currentColor" stroke-width="4"/><circle cx="90" cy="60" r="15" stroke="currentColor" stroke-width="4"/><circle cx="144" cy="60" r="15" stroke="currentColor" stroke-width="4"/><path d="M51 60h24M105 60h24" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`
};

const lesson = {
  ru: {
    kicker:'УРОК 03 · ПЕРЕД ЧТЕНИЕМ', title:'Истигаза и басмала', subtitle:'Смысл, этикет и способы соединения', nav:'В этом уроке', next:'Дальше', prev:'Назад', foot:'Конец третьего урока', previous:'Второй урок', top:'К началу ↑',
    chapters:[
      {nav:'Смысл истигазы', title:'Прибегаем к защите Аллаха', kicker:'ЧАСТЬ 01', description:'Смысл, аят и слова истигазы', lead:'Перед чтением Корана мы просим у Аллаха защиты от шайтана.', art:'refuge', body:`
        <div class="content-block"><h3>Почему мы произносим истигазу?</h3><p>Шайтан — явный враг человека. Он обещал сбивать людей с Прямого пути. Поэтому перед чтением мы просим защитить сердце и мысли от его наущений.</p><div class="reference-pills"><span>Коран · 35:6</span><span>Коран · 7:16–17</span></div></div>
        <div class="content-block"><h3>Что означает это слово?</h3>${ar('الِاسْتِعَاذَةُ')}<p>Истигаза — обращение к Аллаху за защитой от проклятого шайтана. Её произносят и перед началом суры, и когда начинают чтение с другого места.</p>${verse('﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ﴾','«Когда читаешь Коран, прибегай к защите Аллаха от проклятого шайтана».','Коран · 16:98')}</div>
        <div class="content-block"><h3>Основная формула</h3><div class="formula">${ar('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ')}<p>«Прибегаю к защите Аллаха от проклятого шайтана».</p></div><p>Это самая известная форма. В источнике урока приведены и другие допустимые формулы:</p><div class="formula formula--soft">${ar('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ إِنَّ اللَّهَ هُوَ السَّمِيعُ الْعَلِيمُ')}${ar('أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ')}</div></div>
        <div class="content-block"><h3>Каково её положение?</h3><div class="lesson-pair">${card('Мустахабб','<p>Мнение большинства чтецов и правоведов; в этом уроке оно дано как преобладающее.</p>','mist')}${card('Ваджиб','<p>Другое мнение, переданное от ‘Аты ибн Абу Рабаха и Суфьяна ас-Саури. Его довод — повелительная форма в аяте 16:98.</p>','gold')}</div></div>`},
      {nav:'Вслух или тихо', title:'Когда и как произносить?', kicker:'ЧАСТЬ 02', description:'Громкость чтения и порядок в группе', lead:'Громкость истигазы зависит от того, читает ли человек один или перед слушателями.', art:'voices', body:`
        <div class="content-block"><div class="lesson-pair">${card('Вслух',`${ar('الْجَهْرُ')}<p>Когда читаем вслух перед слушателями. В группе, читающей по очереди, — когда начинаем первыми.</p>`,'mist')}${card('Тихо',`${ar('الْإِسْرَارُ')}<p>При чтении в одиночестве; в группе — если очередь не первая. В намазе — для имама и следующего за ним.</p>`,'gold')}</div></div>
        <div class="content-block"><h3>Зачем произносить вслух?</h3><div class="adab-list">${row('1','Обозначить начало','Слушатели понимают, что чтение Корана начинается.')}${row('2','Собрать внимание','Группа замолкает и слушает.')}${row('3','Сосредоточиться','Чтец настраивает своё сердце на чтение.')}${row('4','Отогнать наущения','Просит защиты от вәсвәсә — наущений шайтана.')}</div></div>
        <div class="content-block"><h3>Чтение по очереди</h3><div class="lesson-pair">${card('Обычный или длинный текст','<p>Первый чтец произносит истигазу вслух. Остальные при своей очереди читают её тихо.</p>','mist')}${card('Короткие суры','<p>По порядку этого занятия каждый чтец произносит истигазу вслух перед своей сурой.</p>','gold')}</div></div>`},
      {nav:'Паузы и этикет', title:'Если чтение прервалось', kicker:'ЧАСТЬ 03', description:'Салям, опоздавший ученик и повторение истигазы', lead:'Во время непрерывного чтения группы важно сохранять внимание к Корану.', art:'pause', body:`
        <div class="content-block"><h3>Если ученик опоздал</h3>${chain(['Войти тихо','Занять место','Салям после круга'],'Порядок для опоздавшего: войти тихо, занять место, поприветствовать после круга чтения')}<p>Перед уроком приветствие уместно. Во время чтения по цепочке его лучше отложить до завершения круга, чтобы не прерывать читающих.</p><div class="note gold"><strong>Если салям уже прозвучал</strong><p>Услышавшие отвечают. Чтец, чьё чтение прервалось посторонней речью, вновь произносит истигазу и продолжает. На занятии по заучиванию и исправлению ошибок порядок мягче: там допустимы учебные комментарии.</p></div></div>
        <div class="content-block"><h3>Когда повторить истигазу?</h3><div class="lesson-pair">${card('Повторить','<p>После долгого молчания или длительного разговора на постороннюю тему.</p>','gold')}${card('Продолжить без повтора','<p>После исправления чтения, объяснения смысла аята, кашля или чихания.</p>','mist')}</div><p class="small-source">Правило о перерывах в презентации приводится со ссылкой на имама ан-Навави.</p></div>`},
      {nav:'Где читать басмалу', title:'Басмала: начало и середина', kicker:'ЧАСТЬ 04', description:'Суры, исключение «Ат-Таубы» и выбор в середине', lead:'Место, с которого мы начинаем читать, определяет, как поступить с басмалой.', art:'basmala', body:`
        <div class="content-block"><div class="formula">${ar('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')}<p>«Во имя Аллаха, Милостивого, Милующего».</p></div><div class="lesson-pair">${card('С начала суры','<p>Перед началом суры читаем басмалу. Исключение — сура «Ат-Тауба»: перед её началом басмала не читается.</p>','mist')}${card('Не с начала суры','<p>Можно прочитать басмалу или после истигазы сразу начать выбранный аят. Такой выбор называют джаиз / мухайяр.</p>','gold')}</div></div>
        <div class="content-block"><h3>Если начинаем «Ат-Таубу» с середины</h3><p>По этому вопросу переданы два мнения специалистов чтения:</p><div class="lesson-pair">${card('Первое мнение','<p>Ограничиться истигазой, как и в начале этой суры.</p>','violet')}${card('Второе мнение','<p>Разрешить выбор, как в других сурах: отсутствие басмалы относится только к началу «Ат-Таубы».</p>','violet')}</div></div>`},
      {nav:'Соединения', title:'Как начать и соединить?', kicker:'ЧАСТЬ 05', description:'Четыре способа начала и переход между сурами', lead:'Между истигазой, басмалой и началом суры возможны четыре способа соединения.', art:'joining', body:`
        <div class="content-block"><div class="join-key"><span>А — истигаза</span><span>Б — басмала</span><span>С — начало суры</span><span>⏸ — остановка</span><span>+ — без остановки</span></div><div class="join-options">${card('01 · Разъединить всё',`${ar('قَطْعُ الْجَمِيعِ')}<div class="join-pattern">А ⏸ Б ⏸ С</div><p>Остановиться после истигазы и после басмалы.</p>`,'mist')}${card('02 · Соединить первые два','<div class="join-pattern">(А + Б) ⏸ С</div><p>Истигаза и басмала вместе, затем остановка.</p>','gold')}${card('03 · Соединить последние два','<div class="join-pattern">А ⏸ (Б + С)</div><p>Остановка после истигазы; басмала вместе с сурой.</p>','gold')}${card('04 · Соединить всё',`${ar('وَصْلُ الْجَمِيعِ')}<div class="join-pattern">А + Б + С</div><p>Прочитать всё без остановки.</p>`,'mist')}</div></div>
        <div class="content-block"><h3>Переход между сурами</h3><div class="note violet"><strong>Так не соединяем</strong><div class="join-pattern">(конец предыдущей + басмала) ⏸ начало новой</div><p>Так может показаться, будто басмала завершает предыдущую суру. Можно разъединить все три части, соединить басмалу только с новой сурой или прочитать все три без остановки.</p></div></div>
        <div class="closing"><strong>Дуа по завершении собрания</strong><p class="arabic" lang="ar" dir="rtl">سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ</p><p>Пречист Ты, о Аллах, и хвала Тебе! Свидетельствую, что нет божества, достойного поклонения, кроме Тебя. Прошу у Тебя прощения и приношу Тебе своё покаяние.</p></div>`}
    ]
  },
  tt: {
    kicker:'03 НЧЕ ДӘРЕС · УКУ АЛДЫННАН', title:'Истигазә һәм Басмала', subtitle:'Мәгънәсе, әдәбе һәм кушып уку юллары', nav:'Бу дәрестә', next:'Алга', prev:'Артка', foot:'Өченче дәрес тәмам', previous:'Икенче дәрес', top:'Башына ↑',
    chapters:[
      {nav:'Истигазә мәгънәсе', title:'Аллаһка сыенабыз', kicker:'01 НЧЕ БҮЛЕК', description:'Мәгънәсе, аят һәм истигазә сүзләре', lead:'Коръән укыр алдыннан Аллаһтан шайтаннан саклауны сорыйбыз.', art:'refuge', body:`
        <div class="content-block"><h3>Ни өчен истигазә әйтәбез?</h3><p>Шайтан — кешенең ачык дошманы. Ул кешеләрне Туры юлдан тайпылдырырга ант иткән. Шуңа күрә уку алдыннан йөрәкне һәм фикерне вәсвәсәдән саклауны сорыйбыз.</p><div class="reference-pills"><span>Коръән · 35:6</span><span>Коръән · 7:16–17</span></div></div>
        <div class="content-block"><h3>Бу сүз нәрсәне аңлата?</h3>${ar('الِاسْتِعَاذَةُ')}<p>Истигазә — куылган шайтаннан Аллаһка сыену. Аны сүрә башыннан да, башка урыннан да укый башлаганда әйтәбез.</p>${verse('﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ﴾','«Коръән укый башлаганда, куылган шайтаннан Аллаһка сыен».','Коръән · 16:98')}</div>
        <div class="content-block"><h3>Төп әйтелеш рәвеше</h3><div class="formula">${ar('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ')}<p>«Куылган шайтаннан Аллаһка сыенам».</p></div><p>Бу — иң киң таралган рәвеш. Дәрес чыганагында башка рөхсәт ителгән рәвешләр дә китерелә:</p><div class="formula formula--soft">${ar('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ إِنَّ اللَّهَ هُوَ السَّمِيعُ الْعَلِيمُ')}${ar('أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ')}</div></div>
        <div class="content-block"><h3>Аның хөкеме нинди?</h3><div class="lesson-pair">${card('Мөстәхәб','<p>Кыйраәт галимнәре һәм фәкыйһләрнең күпчелек фикере; бу дәрестә ул раҗих фикер буларак бирелә.</p>','mist')}${card('Вәҗиб','<p>Гата ибн Әбү Рабах һәм Суфьян әс-Сәүри фикере. Дәлил — 16:98 аятендәге әмер рәвеше.</p>','gold')}</div></div>`},
      {nav:'Кычкырыпмы, эчтәнме', title:'Кайчан һәм ничек әйтәбез?', kicker:'02 НЧЕ БҮЛЕК', description:'Тавыш дәрәҗәсе һәм төркемдә уку тәртибе', lead:'Истигазәнең тавыш дәрәҗәсе укучының ялгызмы, әллә тыңлаучылар алдындамы укуына бәйле.', art:'voices', body:`
        <div class="content-block"><div class="lesson-pair">${card('Кычкырып',`${ar('الْجَهْرُ')}<p>Тыңлаучылар алдында тавыш белән укыганда. Чиратлап уку түгәрәген беренче булып башлаганда.</p>`,'mist')}${card('Эчтән',`${ar('الْإِسْرَارُ')}<p>Ялгыз укыганда; төркемдә беренче булмаганда. Намазда — имам да, аңа иярүче дә.</p>`,'gold')}</div></div>
        <div class="content-block"><h3>Кычкырып әйтү ни өчен кирәк?</h3><div class="adab-list">${row('1','Уку башын белдерү','Тыңлаучылар Коръән уку башланганын аңлый.')}${row('2','Игътибарны җыю','Төркем тына һәм тыңлый.')}${row('3','Йөрәкне туплау','Укучы күңелен Коръән укуга әзерли.')}${row('4','Вәсвәсәдән саклану','Шайтан вәсвәсәләреннән яклау сорый.')}</div></div>
        <div class="content-block"><h3>Чират белән уку</h3><div class="lesson-pair">${card('Гадәти яки озын текст','<p>Беренче укучы истигазәне кычкырып әйтә. Калганнар үз чиратында аны эчтән укый.</p>','mist')}${card('Кыска сүрәләр','<p>Бу дәрестәге тәртип буенча һәр укучы үз сүрәсе алдыннан истигазәне кычкырып әйтә.</p>','gold')}</div></div>`},
      {nav:'Тукталыш һәм әдәп', title:'Уку бүленсә', kicker:'03 НЧЕ БҮЛЕК', description:'Сәлам, соңга калу һәм истигазәне яңарту', lead:'Төркем белән өзлексез укыганда игътибарны Коръәндә тоту мөһим.', art:'pause', body:`
        <div class="content-block"><h3>Шәкерт соңга калса</h3>${chain(['Тыныч кына керү','Урынга утыру','Түгәрәк ахырында сәлам'],'Соңга калган шәкерт тыныч кына керә, урынына утыра һәм уку әйләнеше тәмамлангач сәлам бирә')}<p>Дәрес башында сәламләшү урынлы. Ә инде чылбыр буенча уку барганда, укучыларны бүлдермәс өчен сәламне түгәрәк тәмамланганчы кичектерү яхшырак.</p><div class="note gold"><strong>Сәлам бирелгән булса</strong><p>Ишетүчеләр җавап бирә. Укуы чит сүз белән бүленгән укучы истигазәне яңадан әйтеп, укуын дәвам итә. Ятлау һәм хаталарны төзәтү дәресендә тәртип йомшаграк: анда укуга кагылышлы аңлатмалар мөмкин.</p></div></div>
        <div class="content-block"><h3>Истигазәне кайчан яңартабыз?</h3><div class="lesson-pair">${card('Яңадан әйтәбез','<p>Озак тынлыктан яки чит темага озын сөйләшүдән соң.</p>','gold')}${card('Кабатламыйбыз','<p>Уку хатасын төзәткәннән, аять мәгънәсен аңлатканнан, йөткергәннән яки төчкергәннән соң.</p>','mist')}</div><p class="small-source">Тукталышлар турындагы кагыйдә презентациядә имам ән-Нәвәви сүзләренә таянып китерелә.</p></div>`},
      {nav:'Басмала урыны', title:'Басмала: башы һәм уртасы', kicker:'04 НЧЕ БҮЛЕК', description:'Сүрәләр, «Әт-Тәүбә» искәрмәсе һәм сайлау', lead:'Кайсы урыннан укый башлавыбыз Басмала турында карарны билгели.', art:'basmala', body:`
        <div class="content-block"><div class="formula">${ar('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')}<p>«Мәрхәмәтле, Рәхимле Аллаһ исеме белән».</p></div><div class="lesson-pair">${card('Сүрә башыннан','<p>Сүрә алдыннан Басмала укыйбыз. Искәрмә — «Әт-Тәүбә» сүрәсе: аның башында Басмала укылмый.</p>','mist')}${card('Башка урыннан','<p>Басмаланы укырга да, Истигазәдән соң турыдан-туры сайланган аятькә күчәргә дә мөмкин. Бу — җәиз / мөхәййәр.</p>','gold')}</div></div>
        <div class="content-block"><h3>«Әт-Тәүбә» сүрәсен уртадан башласак</h3><p>Бу мәсьәләдә кыйраәт белгечләренең ике фикере бар:</p><div class="lesson-pair">${card('Беренче фикер','<p>Сүрә башындагы кагыйдә кебек, Истигазә белән генә башлау.</p>','violet')}${card('Икенче фикер','<p>Башка сүрәләрдәге кебек сайларга мөмкин: Басмаланың булмавы «Әт-Тәүбә» башына гына карый.</p>','violet')}</div></div>`},
      {nav:'Кушып уку', title:'Ничек башлыйбыз һәм кушабыз?', kicker:'05 НЧЕ БҮЛЕК', description:'Дүрт юл һәм сүрәләр арасындагы күчеш', lead:'Истигазә, Басмала һәм сүрә башын дүрт төрле юл белән укырга мөмкин.', art:'joining', body:`
        <div class="content-block"><div class="join-key"><span>И — Истигазә</span><span>Б — Басмала</span><span>С — сүрә башы</span><span>⏸ — тукталыш</span><span>+ — туктамыйча</span></div><div class="join-options">${card('01 · Барысын аеру',`${ar('قَطْعُ الْجَمِيعِ')}<div class="join-pattern">И ⏸ Б ⏸ С</div><p>Истигазәдән дә, Басмаладан да соң тукталу.</p>`,'mist')}${card('02 · Беренче икесен кушу','<div class="join-pattern">(И + Б) ⏸ С</div><p>Истигазә белән Басмала бергә, аннары тукталыш.</p>','gold')}${card('03 · Соңгы икесен кушу','<div class="join-pattern">И ⏸ (Б + С)</div><p>Истигазәдән соң тукталу; Басмаланы сүрә башы белән кушу.</p>','gold')}${card('04 · Барысын кушу',`${ar('وَصْلُ الْجَمِيعِ')}<div class="join-pattern">И + Б + С</div><p>Барысын да тукталмыйча уку.</p>`,'mist')}</div></div>
        <div class="content-block"><h3>Сүрәләр арасында күчү</h3><div class="note violet"><strong>Болай кушмыйбыз</strong><div class="join-pattern">(Алдагы сүрә ахыры + Басмала) ⏸ яңа сүрә башы</div><p>Мондый юл Басмала алдагы сүрәне тәмамлый дигән фикер тудырырга мөмкин. Өч өлешне дә аерып, Басмаланы яңа сүрә белән генә кушып яки барысын да тукталмыйча укып була.</p></div></div>
        <div class="closing"><strong>Мәҗлес кәффарәте догасы</strong><p class="arabic" lang="ar" dir="rtl">سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ</p><p>Йә Аллаһ! Сине пакь дип беләм һәм Сиңа хәмед әйтәм. Синнән башка гыйбадәткә лаеклы зат юклыгына шаһитлык бирәм. Гөнаһларымны ярлыкавыңны сорыйм һәм Сиңа тәүбә итәм.</p></div>`}
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
  document.getElementById('top-link').textContent = data.top;
  document.getElementById('section-nav').innerHTML = data.chapters.map((chapter, index) => `<a href="#part-${index + 1}"><small>${String(index + 1).padStart(2, '0')}</small><strong>${chapter.nav}</strong></a>`).join('');
  document.getElementById('lesson-content').innerHTML = data.chapters.map((chapter, index) => `<section class="chapter" id="part-${index + 1}"><div class="chapter__inner"><div class="chapter-head"><div class="chapter-kicker">${chapter.kicker}</div><h2>${chapter.title}</h2><p>${chapter.description}</p><div class="chapter-art">${art[chapter.art]}</div></div><div class="chapter-content"><p class="lead">${chapter.lead}</p>${chapter.body}</div></div></section>`).join('');
  for (const code of ['ru','tt']) {
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
  nav.scrollTo({left: cards[next].offsetLeft - cards[0].offsetLeft, behavior:'smooth'});
}
document.getElementById('ru-button').addEventListener('click', () => render('ru'));
document.getElementById('tt-button').addEventListener('click', () => render('tt'));
document.getElementById('nav-prev').addEventListener('click', () => moveNav(-1));
document.getElementById('nav-next').addEventListener('click', () => moveNav(1));
document.getElementById('section-nav').addEventListener('scroll', updateNavControls, {passive:true});
render(localStorage.getItem('tajwid3-language') === 'tt' ? 'tt' : 'ru');
