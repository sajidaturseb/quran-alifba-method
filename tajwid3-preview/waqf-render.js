const waqfLessonNumber = Number(document.body.dataset.lesson);
const waqfSource = window.waqfSource;
const waqfUsed = {first:new Set(),second:new Set()};
const W = (book, number) => { waqfUsed[book].add(String(number)); return waqfSource[book][String(number)]?.text || ''; };
const cleanHeading = text => text.replace(/^\s*\d+\.\s*/, '').replace(/^[-.]\s+/, '');
const shortHeading = (book, id, title) => { W(book,id); return title; };
const useSecond = ids => ids.forEach(id => W('second',id));
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const arabic = text => {
  const quotations=[];
  let html=esc(text).replace(/﴿[^﴾]*﴾/gu, value => `@@AR${quotations.push(value)-1}@@`);
  html=html.replace(/([﴿﴾۝ۘۛ\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+(?:\s+[﴿﴾۝ۘۛ\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+)*)/gu, '<span lang="ar" dir="rtl">$1</span>');
  return html.replace(/@@AR(\d+)@@/g, (_,number) => `<span lang="ar" dir="rtl">${quotations[Number(number)]}</span>`).replace(/\n/g, '<br>');
};
const prose = (book, ids, style = '') => ids.map(id => `<p class="waqf-point ${style}"><span class="waqf-mark" aria-hidden="true">✓</span><span>${arabic(W(book, id))}</span></p>`).join('');
const note = (book, headingId, ids) => `<div class="waqf-note"><h3>${arabic(cleanHeading(W(book, headingId)))}</h3>${prose(book, ids)}</div>`;
const foundationCard = (headingId, bodyId, title, tone, points) => {
  W('first',headingId);
  W('first',bodyId);
  return `<article class="waqf-foundation waqf-foundation--${tone}"><h3>${arabic(title)}</h3><div class="waqf-foundation-points">${points.map(point => `<p><span aria-hidden="true">✓</span><span>${arabic(point)}</span></p>`).join('')}</div></article>`;
};
const caseCard = (book, number, firstId, detailId, tone = '') => {
  const title=cleanHeading(W(book, firstId));
  const quotation=title.match(/﴿[^﴾]*﴾/u);
  const before=quotation ? title.slice(0,quotation.index).trim() : title;
  const after=quotation ? title.slice(quotation.index+quotation[0].length).trim() : '';
  return `<article class="waqf-case ${tone}"><div class="waqf-case-head"><span class="waqf-case-number">${number}</span><h3>${arabic(before)}</h3></div>${quotation ? `<div class="waqf-case-ar" lang="ar" dir="rtl">${esc(quotation[0])}</div>` : ''}${after ? `<p class="waqf-case-caption">${arabic(after)}</p>` : ''}${detailId ? `<p>${arabic(W(book, detailId))}</p>` : ''}</article>`;
};
const reasonCard = (letter, headingId, bodyId, tone) => {
  W('first', headingId);
  const full=W('first', bodyId);
  const split=full.indexOf('. ');
  const heading=full.slice(0,split).replace(/\.$/,'');
  const explanation=full.slice(split+2);
  return `<article class="waqf-reason waqf-reason--${tone}"><div class="waqf-reason-head"><span aria-hidden="true">${letter}</span><h3>${arabic(heading)}</h3></div><p>${arabic(explanation)}</p></article>`;
};
const quranFocusCard = (id, focus, reference, sign, explanation, forbidden = false) => {
  const source = W('second', id);
  const verse = source.match(/﴿[^﴾]*﴾/u)?.[0];
  if (!verse || !verse.includes(focus)) throw new Error(`Не найдено место остановки в примере ${id}`);
  const highlighted = esc(verse).replace(esc(focus), `<mark class="waqf-quran-focus">${esc(focus)}</mark>`);
  return `<article class="waqf-quran waqf-quran--focused${forbidden ? ' waqf-quran--forbidden' : ''}"><div class="waqf-quran-line" lang="ar" dir="rtl">${highlighted}</div><div class="waqf-quran-cue"><span class="waqf-quran-cue-sign${sign === 'без знака' ? ' waqf-quran-cue-sign--none' : ''}"${sign === 'без знака' ? '' : ' lang="ar" dir="rtl"'}>${esc(sign)}</span><span>${esc(explanation)}</span></div><p class="waqf-quran-reference">${esc(reference)}</p></article>`;
};
const sunnahEvidence = () => {
  const [verse, translation] = W('first',28).split('\n').map(line => line.replace(/^«|»[.]?$/g, ''));
  const recitation = [...W('first',29).matchAll(/«([^»]+)»/g)].map(match => match[1]);
  return `<div class="waqf-evidence waqf-evidence--sunnah">
    <h3>Сунна Пророка ﷺ</h3>
    <p>${arabic(W('first',26))}</p>
    <p class="waqf-evidence-context">${arabic(W('first',27).replace(/^Хадис:\s*/, ''))}</p>
    <div class="waqf-hadith"><div lang="ar" dir="rtl">${esc(verse)}</div><p>${arabic(translation)}</p></div>
    <p class="waqf-evidence-label">В хадисе показаны остановки после каждого аята:</p>
    <div class="waqf-recitation">${recitation.map(line => `<p>${arabic(line)} <span>— остановка</span></p>`).join('')}</div>
    <p class="waqf-reference">Передали Абу Дауд № 4001 и ат-Тирмизи № 2927.</p>
  </div>`;
};
const companionsEvidence = () => {
  [31,32,33,34].forEach(id => W('first',id));
  return `<div class="waqf-evidence waqf-evidence--companions">
    <h3>Слова сподвижников</h3>
    <div class="waqf-evidence-row"><b>Али ибн Абу Талиб</b><p>(Да будет доволен им Аллах.) Объясняя аят «И читай Коран размеренным чтением» (73:4), он сказал:</p><blockquote>«Тартиль — это правильное произношение букв (таджвид) и знание мест остановок».</blockquote><p class="waqf-reference">«Таджвиду-ль-хуруфи ва ма‘рифату-ль-вукуф».</p></div>
    <div class="waqf-evidence-row"><b>Абдуллах ибн Умар</b><p>(Да будет доволен им Аллах.)</p><blockquote>«Когда Пророку ﷺ ниспосылалась сура, мы изучали её дозволенное и запретное, её повеления и запреты, а также то, на чём в ней следует останавливаться».</blockquote></div>
    <div class="waqf-evidence-conclusion"><b>Вывод Ибн аль-Джазари</b><p>Слова Али указывают на обязательность изучения этой науки. Слова Ибн Умара — на единогласное мнение сподвижников.</p><p>В поэме «Аль-Джазария» он писал: «И после того, как ты освоишь правильное произношение букв, необходимо познать места остановок и возобновления чтения...»</p></div>
  </div>`;
};
const ayahExample = (surah, reference, before, focus, after, pause, explanation) => `<article class="waqf-ayah-example">
  <h5>${surah} · ${reference}</h5>
  <div class="waqf-ayah-reading" lang="ar" dir="rtl">${before} <mark>${focus}</mark></div>
  <div class="waqf-ayah-direction ${pause ? 'waqf-ayah-direction--pause' : ''}">${pause ? '↓ Здесь останавливаемся' : '↓ Здесь не останавливаемся — читаем дальше'}</div>
  <div class="waqf-ayah-reading" lang="ar" dir="rtl">${after}</div>
  <p>${explanation}</p>
</article>`;
const meaningEvidence = () => {
  [35,36,37,38,39,40,41].forEach(id => W('first',id));
  return `<div class="waqf-evidence waqf-evidence--meaning">
    <h3>Пауза может изменить смысл</h3>
    <p>Один мужчина произнёс проповедь перед Пророком ﷺ. Он остановился после слов: «Кто подчиняется Аллаху и Его Посланнику, тот пошёл прямым путём, а кто ослушается их двоих…»</p>
    <blockquote>Пророк ﷺ сказал ему: «Встань, какой же ты плохой оратор! Говори: …а кто ослушается их двоих, тот впал в заблуждение».</blockquote>
    <h4>Грамматика и толкование</h4>
    <p>Нужно учитывать связь слов и смысл аята. Иначе остановка может исказить смысл.</p>
    <div class="waqf-ayah-examples">
      ${ayahExample('Ан-Ниса','4:43','لَا تَقْرَبُواْ','ٱلصَّلَوٰةَ','وَأَنتُمۡ سُكَٰرَىٰ حَتَّىٰ تَعۡلَمُواْ مَا تَقُولُونَ',false,'Запрет относится к молитве в состоянии опьянения. Без продолжения смысл искажается.')}
      ${ayahExample('Аль-Бакара','2:26','إِنَّ ٱللَّهَ لَا','يَسۡتَحۡيِۦٓ','أَن يَضۡرِبَ مَثَلٗا مَّا بَعُوضَةٗ فَمَا فَوۡقَهَا',false,'После «Аллах не стесняется» нужно дочитать, чего именно: привести притчу о комаре.')}
      ${ayahExample('Йа Син','36:52','قَالُواْ يَٰوَيۡلَنَا مَنۢ بَعَثَنَا مِن','مَّرۡقَدِنَاۜۗ','هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ وَصَدَقَ ٱلۡمُرۡسَلُونَ',true,'Остановка отделяет слова неверующих от следующего высказывания, как объясняется в этой лекции.')}
    </div>
  </div>`;
};
const saktGroup = (sourceId, letter, title, term, explanation, optional = false) => {
  W('first',sourceId);
  return `<div class="waqf-sakt-group ${optional ? 'waqf-sakt-group--optional' : 'waqf-sakt-group--required'}"><span>${letter}</span><div><h3>${title} <small lang="ar" dir="rtl">${term}</small></h3><p>${explanation}</p></div></div>`;
};
const saktCase = (number, sourceId, detailId, label, before, focus, after, explanation, optional = false) => {
  W('first',sourceId);
  if (detailId) W('first',detailId);
  return `<article class="waqf-sakt-case ${optional ? 'waqf-sakt-case--optional' : ''}">
    <div class="waqf-sakt-case-head"><span>${number}</span><h4>${label}</h4></div>
    <div class="waqf-sakt-verse" lang="ar" dir="rtl">${before} <mark>${focus}</mark> ${after}</div>
    <div class="waqf-sakt-pause">↑ На выделенном слове — короткая пауза без вдоха</div>
    <p>${explanation}</p>
  </article>`;
};
const saktSixthHeading = () => {
  W('first',90);
  return '<div class="waqf-sixth-head"><span>VI</span><h3>Между сурами «Аль-Анфаль» и «Ат-Тауба»</h3></div>';
};
const joinCard = (number, sourceId, title, cue, ending, action, actionClass, beginning, explanation) => {
  W('second',sourceId);
  return `<article class="waqf-join-card waqf-join-card--${actionClass}">
    <h3><span>${number}</span>${title}</h3>
    <p class="waqf-join-cue">${cue}</p>
    <div class="waqf-join-pair"><div><b>Конец «Аль-Анфаль» · 8:75</b><div lang="ar" dir="rtl">إِنَّ ٱللَّهَ بِكُلِّ شَيۡءٍ <mark>${ending}</mark></div></div>
      <div class="waqf-join-action">${action}</div>
      <div><b>Начало «Ат-Тауба» · 9:1</b><div lang="ar" dir="rtl"><mark>${beginning}</mark> مِّنَ ٱللَّهِ وَرَسُولِهِۦٓ</div></div></div>
    <p class="waqf-join-explanation">${explanation}</p>
  </article>`;
};
const joinIntro = () => {
  W('second',6);
  return '<p class="waqf-join-intro">Есть три разрешённых способа перехода от конца «Аль-Анфаль» к началу «Ат-Тауба». Один из них — сакт.</p>';
};

function compareTable() {
  waqfUsed.second.add('16');
  const cards = [
    {name:'Вакф', term:'الْوَقْفُ', points:[['Вдох','Да, во время остановки.'],['Намерение','Продолжить чтение после вдоха.'],['Где','В подходящем по смыслу месте.']]},
    {name:'Сакт', term:'السَّكْتُ', points:[['Вдох','Нет. Пауза длится около 2 харакатов.'],['Намерение','Сразу продолжить чтение.'],['Где','В шести местах риваята Хафса.']]},
    {name:'Кат‘', term:'الْقَطْعُ', points:[['Вдох','Да: чтение завершено.'],['Намерение','Закончить чтение и перейти к другим делам.'],['Где','В конце аята или суры.']]}
  ];
  return `<div class="waqf-compare">${cards.map(card => `<article class="waqf-compare-card"><h3>${card.name} <span lang="ar" dir="rtl">${card.term}</span></h3>${card.points.map(([heading,detail]) => `<div><strong>${heading}</strong><p>${detail}</p></div>`).join('')}</article>`).join('')}</div>`;
}

const lesson26Definition = () => {
  useSecond([13,14,15]);
  return `<div class="waqf-definition-pair">
    <article><h3>В языке</h3><p>Удержание, остановка — «аль-кафф ва-ль-хабс».</p></article>
    <article><h3>В таджвиде</h3><p>Прерываем звук в конце слова Корана на время, достаточное для вдоха.</p><p>Намерение — продолжить чтение, а не закончить его.</p></article>
  </div><h3 class="waqf-subhead">Сравним три понятия</h3>${compareTable()}`;
};
const lesson26Places = () => {
  useSecond([19,20,21,22]);
  return `<h3 class="waqf-subhead">Где совершается вакф</h3><div class="waqf-place-grid">
    <article><h4>В конце аята</h4><div class="waqf-place-term"><div lang="ar" dir="rtl">عَلَى رَأْسِ الْآيَةِ</div><p>(‘Аля ра’си-ль-айа)</p></div><p>Это основная Сунна Пророка ﷺ.</p></article>
    <article><h4>В середине аята</h4><div class="waqf-place-term"><div lang="ar" dir="rtl">فِي وَسَطِ الْآيَةِ</div><p>(Фи васати-ль-айа)</p></div><p>Возможно, если сохраняется смысл или не хватает дыхания.</p></article>
    <article><h4>В конце суры</h4><div class="waqf-place-term"><div lang="ar" dir="rtl">عِنْدَ انْتِهَاءِ السُّورَةِ</div><p>(‘Инда интихаи-с-сура)</p></div><p>Остановка отделяет одну суру от следующей.</p></article>
  </div>`;
};
const lesson26Conditions = () => {
  useSecond([23,24,25,26,27]);
  return `<h3 class="waqf-subhead">Три обязательных условия вакфа</h3><div class="waqf-condition-list">
    <article><span>А</span><div><h4>Вдох</h4><p>Во время остановки делаем вдох.</p></div></article>
    <article><span>Б</span><div><h4>Переход к новой суре</h4><p>Читаем басмалу (<span lang="ar" dir="rtl">البَسْمَلَة</span>), кроме перехода к суре «Ат-Тауба» («Бара’а»).</p><p>Пауза в конце суры отделяет её от басмалы.</p></div></article>
    <article><span>В</span><div><h4>Слитное и раздельное написание слов</h4><p class="waqf-term-note">Аль-макту‘ ва-ль-маусуль</p><p>Не останавливаемся внутри слова или между частями, написанными в мусхафе слитно.</p></div></article>
  </div><div class="waqf-spelling"><h4>Сравним написание</h4><div class="waqf-spelling-grid">
    <article><b>Раздельно · «Аль-Бакара» 2:148</b><div lang="ar" dir="rtl">أَيۡنَ مَا تَكُونُواْ</div><p>«Айна» и «ма» — два слова. Остановка после первого технически возможна.</p></article>
    <article><b>Слитно · «Аль-Бакара» 2:115</b><div lang="ar" dir="rtl">فَأَيۡنَمَا تُوَلُّواْ</div><p>«Айнама» написано одним словом. Разрывать его остановкой нельзя.</p></article>
  </div></div>`;
};
const lesson26Ruling = () => {
  useSecond([29,30,31,32]);
  return `<div class="waqf-ruling-list">
    <article><h3>Основа — дозволено (джаиз)</h3><p>Вакф разрешён, пока нет причины, которая требует остановки или соединения.</p></article>
    <article><h3>Остановка обязательна <span lang="ar" dir="rtl">لَزِمَ الْوَقْفُ</span></h3><p>Когда соединение слов искажает смысл аята.</p></article>
    <article><h3>Соединение обязательно <span lang="ar" dir="rtl">لَزِمَ الْوَصْلُ</span></h3><p>Когда пауза в этом месте портит смысл аята.</p></article>
  </div><blockquote class="waqf-ruling-quote">Имам Ибн аль-Джазари: «В Коране нет остановки, которая была бы обязательной [сама по себе], и нет запретной, кроме той, у которой есть причина».</blockquote>`;
};
const lesson26Type = (ids, number, title, term, tone, points, example = '') => {
  useSecond(ids);
  return `<article class="waqf-kind waqf-kind--${tone}"><div class="waqf-kind-head"><span>${number}</span><div><h3>${title}</h3><div lang="ar" dir="rtl">${term}</div></div></div><div class="waqf-kind-points">${points.map(point => `<p><span aria-hidden="true">✓</span><span>${arabic(point)}</span></p>`).join('')}</div>${example}</article>`;
};
const lesson27History = () => {
  useSecond([49,50,52,53,54,55]);
  return `<div class="waqf-history-opening"><p>Прежде чем разбирать виды остановки по выбору, выясним, как учёные пришли к этой классификации.</p><strong>Остановка по выбору</strong><span class="waqf-history-ar" lang="ar" dir="rtl">الْوَقْفُ الِاخْتِيَارِيُّ</span><p>Чтец сам выбирает место паузы, чтобы правильно передать смысл аята. Он смотрит, завершена ли мысль и как она связана со следующими словами.</p><p>Неудачная пауза может изменить смысл. Поэтому учёные описали виды остановок и их признаки.</p></div>
    <h3 class="waqf-subhead">Как появились названия остановок</h3>
    <div class="waqf-history-periods"><article><span>Сначала — устная передача</span><p>Пророк Мухаммад ﷺ обучал сподвижников чтению Корана. Они перенимали от него и места остановок.</p><p>Сподвижники передавали это знание табиинам. Названий видов и специальных знаков тогда ещё не было.</p></article>
    <article><span>Затем — письменные труды</span><p>По мере распространения ислама правила чтения стали записывать и систематизировать.</p><div class="waqf-history-authors"><p><span aria-hidden="true">✓</span><span><b>Сибавейхи (180 г. х.)</b> в книге «Аль-Китаб» описал вопросы произношения и остановок как часть арабской грамматики.</span></p><p><span aria-hidden="true">✓</span><span><b>Абу Музахим аль-Хакани (325 г. х.)</b> написал первый самостоятельный труд по таджвиду.</span></p></div></article></div>
    <div class="waqf-history-conclusion">У разных учёных сложились разные классификации остановок: названия и количество видов в них различаются. Это различие в теории. В рамках одного риваята само исполнение чтения остаётся одинаковым.</div>
    <div class="waqf-transition">Чтобы определить вид остановки, смотрим, как слова до паузы связаны со словами после неё.</div>`;
};
const lesson27Links = () => {
  useSecond([58,59,60]);
  return `<p class="waqf-links-intro">Связь между словами бывает двух видов: грамматическая и смысловая.</p>
    <div class="waqf-link-cards"><article><h3>Грамматическая связь</h3><div lang="ar" dir="rtl">التَّعَلُّقُ اللَّفْظِيُّ</div><p>Её определяют при грамматическом разборе — и‘рабе. Слово до возможной паузы связано со словом после неё.</p><div class="waqf-grammar-list"><p><b>Сыфа</b> — определение и определяемое слово.</p><p><b>Ма‘туф</b> — однородные члены.</p><p><b>Хабар</b> — сказуемое и то, о чём оно сообщает.</p></div></article>
    <article><h3>Смысловая связь</h3><div lang="ar" dir="rtl">التَّعَلُّقُ الْمَعْنَوِيُّ</div><p>Предложение грамматически закончено, но общая тема продолжается.</p><p>Так происходит в начале суры «Аль-Бакара»:</p><div class="waqf-link-examples"><div><b>Верующие · 2:1–5</b><p>Их описание продолжается до конца 5-го аята.</p><span lang="ar" dir="rtl">وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</span></div><div><b>Неверующие · 2:6–7</b><p>Их описание продолжается до конца 7-го аята.</p><span lang="ar" dir="rtl">وَلَهُمْ عَذَابٌ عَظِيمٌ</span></div></div></article></div>`;
};
const lesson27Criteria = () => `<div class="waqf-decision"><h4>Как различить эти четыре вида</h4>
  <div class="waqf-decision-step"><span aria-hidden="true">1</span><div><b>Смысл до паузы понятен?</b><p>Нет — кабих. Да — смотрим дальше.</p></div></div>
  <div class="waqf-decision-step"><span aria-hidden="true">2</span><div><b>Есть грамматическая связь со следующими словами?</b><p>Да — хасан. Нет — смотрим дальше.</p></div></div>
  <div class="waqf-decision-step"><span aria-hidden="true">3</span><div><b>Продолжается ли общая тема?</b><p>Да — кафи. Нет — тамм.</p></div></div>
</div>`;
const lesson27MedinaScheme = () => {
  W('second',65);
  return `<p class="waqf-links-intro">Современные учёные изучили и систематизировали труды своих предшественников. На их основе они составили эту классификацию остановок.</p>
    <div class="waqf-system waqf-system--modern waqf-system--full"><div class="waqf-medina-schema">
      <div class="waqf-medina-row"><div class="waqf-medina-mark"><span class="waqf-medina-number">1</span><span class="waqf-medina-sign" lang="ar" dir="rtl">مـ</span></div><div><b>Лязим · обязательная</b><p>При соединении со следующим словом смысл может исказиться. Останавливаемся.</p></div></div>
      <div class="waqf-medina-row"><div class="waqf-medina-mark"><span class="waqf-medina-number">2</span><span class="waqf-medina-sign" lang="ar" dir="rtl">قلى</span></div><div><b>Тамм · полная</b><p>Смысл и грамматика завершены. Остановка предпочтительнее.</p></div></div>
      <div class="waqf-medina-row"><div class="waqf-medina-mark"><span class="waqf-medina-number">3</span><span class="waqf-medina-sign" lang="ar" dir="rtl">صلى · ج</span></div><div><b>Кафи · достаточная</b><p>Предложение закончено, но общая тема продолжается. Остановиться можно.</p></div></div>
      <div class="waqf-medina-row"><div class="waqf-medina-mark"><span class="waqf-medina-number">4</span><span class="waqf-medina-sign" lang="ar" dir="rtl">ج</span></div><div><b>Хасан · хорошая</b><p>Смысл понятен, но грамматическая связь продолжается. Знака может не быть.</p></div></div>
      <div class="waqf-medina-row"><div class="waqf-medina-mark"><span class="waqf-medina-number">5</span><span class="waqf-medina-sign" lang="ar" dir="rtl">لا</span></div><div><b>Кабих · недопустимая</b><p>Пауза обрывает или искажает смысл. Знака может не быть.</p></div></div>
    </div></div><div class="waqf-detail-transition"><span aria-hidden="true">↓</span><p>Теперь разберём каждый вид остановки подробно — на примерах.</p></div>`;
};
const lesson27Classifications = () => {
  useSecond([63,64]);
  return `<p class="waqf-links-intro">Учёные использовали разные названия и число видов. Основой разбора остаются смысл прочитанного и его грамматическая связь с продолжением.</p>
    <div class="waqf-systems"><article class="waqf-system waqf-system--jazari"><h3>Ибн аль-Джазари и ад-Дани</h3><p>Четыре вида остановки:</p><div class="waqf-system-list waqf-system-list--four"><p><strong>Тамм</strong> — полная.</p><p><strong>Кафи</strong> — достаточная.</p><p><strong>Хасан</strong> — хорошая.</p><p><strong>Кабих</strong> — недопустимая.</p></div>${lesson27Criteria()}</article>
    <article class="waqf-system waqf-system--sajawandi"><h3>Ас-Саджаванди</h3><p>Он выделил пять ступеней и ввёл буквенные знаки:</p><div class="waqf-system-list"><p><b lang="ar" dir="rtl">مـ</b> Лязим — остановка обязательна.</p><p><b lang="ar" dir="rtl">ط</b> Мутляк — остановиться хорошо.</p><p><b lang="ar" dir="rtl">ج</b> Джаиз — допустимы оба чтения.</p><p><b lang="ar" dir="rtl">ز</b> Муджавваз — соединить лучше.</p><p><b lang="ar" dir="rtl">ص</b> Мураххас — пауза при нехватке дыхания.</p></div></article>
    </div>`;
};
const lesson27Rule = (ids, title, term, tone, points) => {
  useSecond(ids);
  return `<article class="waqf-meaning-rule waqf-meaning-rule--${tone}"><div class="waqf-meaning-head"><h3>${title}</h3><span lang="ar" dir="rtl">${term}</span></div><div class="waqf-meaning-points">${points.map(point => `<p><span aria-hidden="true">✓</span><span>${arabic(point)}</span></p>`).join('')}</div></article>`;
};

function signsTable() {
  waqfUsed.second.add('107');
  const rows = waqfSource.second['107'].rows.slice(1);
  const details = [
    {title:'Обязательная остановка',meaning:'Соединение может исказить смысл.',focus:['يَسْمَعُونَ ۘ'],reference:'Аль-Ан‘ам · 6:36'},
    {title:'Не останавливаемся',meaning:'Смысл ещё не завершён.',focus:['بِهِ ۙ'],reference:'Аз-Зумар · 39:33'},
    {title:'Оба варианта допустимы',meaning:'Можно остановиться или продолжить.',focus:['جَمِيعًا ۚ'],reference:'Йунус · 10:65'},
    {title:'Остановка предпочтительнее',meaning:'Можно продолжить, но лучше остановиться.',focus:['فَاقْتُلُوهُمْ ۗ'],reference:'Аль-Бакара · 2:191'},
    {title:'Продолжение предпочтительнее',meaning:'Можно остановиться, но лучше читать дальше.',focus:['تَفَاوُتٍ ۖ'],reference:'Аль-Мульк · 67:3'},
    {title:'Парные знаки остановки',meaning:'Останавливаемся только в одном из двух мест.',focus:['رَيْبَ ۛ','فِيهِ ۛ'],reference:'Аль-Бакара · 2:2'}
  ];
  return `<div class="waqf-signs">${rows.map((row,i) => {
    const detail = details[i];
    const verse = row[2].match(/﴿[^﴾]*﴾/u)?.[0]?.replace(/\s+/gu,' ');
    if (!verse) throw new Error(`Не найден аят для знака ${row[0]}`);
    let marked = esc(verse);
    for (const focus of detail.focus) {
      if (!verse.includes(focus)) throw new Error(`Не найден знак ${row[0]} после ${focus}`);
      marked = marked.replace(esc(focus), `<mark class="waqf-quran-focus">${esc(focus)}</mark>`);
    }
    return `<article class="waqf-sign"><div class="waqf-sign-head"><span class="waqf-sign-symbol" lang="ar" dir="rtl">${esc(row[0])}</span><div><h3>${detail.title}</h3><p>${detail.meaning}</p></div></div><div class="waqf-sign-verse" lang="ar" dir="rtl">${marked}</div><p class="waqf-sign-reference">${detail.reference}</p></article>`;
  }).join('')}</div>`;
}

const lessons = {
  25: {
    title: 'Остановки при чтении',
    arabic: 'الْوَقْفُ وَالسَّكْتُ وَالْقَطْعُ',
    intro: 'Дыхание · смысл · продолжение чтения',
    sections: [
      {nav:'Причины', title:'Введение и причины остановки', body: `
        <div class="waqf-lead">${arabic(W('first', 2).split('\n').slice(1).join('\n'))}</div>
        <div class="waqf-pair waqf-reasons">${reasonCard('А',3,4,'breath')}${reasonCard('Б',6,7,'meaning')}</div>
        ${foundationCard(9,10,'Важное правило при остановке','rule',[
          'Нельзя останавливаться в середине слова.',
          'Если заканчивается дыхание, сначала дочитываем слово до конца.',
          'Останавливаемся только после слова. Разрывать его при чтении запрещено.'
        ])}
        ${foundationCard(13,14,'Тафсир помогает понять смысл','tafsir',[
          'Знание тафсира предпочтительно для чтеца.',
          'Смысл аята помогает выбрать место остановки и начала чтения.',
          'Так единая мысль сохраняется без искажения.'
        ])}
        ${foundationCard(17,18,'Нахв показывает связь слов','nahw',[
          'Нахв (نَحْو) — грамматика арабского языка.',
          'Он помогает увидеть подлежащее, сказуемое и дополнение.',
          'Становится ясно, где мысль завершена, а где пауза нарушит связь слов.'
        ])}
        ${foundationCard(21,22,'Вакф и ибтида: отдельные правила','waqf',[
          'Правила остановки и возобновления чтения изучать обязательно.',
          'Одного знания тафсира и нахва недостаточно.',
          'Они показывают, где разрешена остановка и с какого слова продолжить чтение.'
        ])}`},
      {nav:'Основания', title:W('first',24).replace(' (Далиль)',''), body: `
        ${sunnahEvidence()}
        ${companionsEvidence()}
        ${meaningEvidence()}`},
      {nav:'Катъ', title:W('first',58).replace(/^\.\s*/, '').replace(' — Полное прекращение чтения',''), body: `
        <div class="waqf-cut-definition"><span aria-hidden="true">◆</span><div><strong>Полное прекращение чтения</strong><p>${arabic(W('first',60).replace(/^Терминологическое значение:\s*/, ''))}</p></div></div>
        ${prose('first',[59,61,62])}`},
      {nav:'Сакт', title:W('first',65).replace(' — Короткая пауза без вдоха',''), body: `
        <div class="waqf-cut-definition waqf-cut-definition--sakt"><span aria-hidden="true">◆</span><div><strong>Короткая пауза без вдоха</strong><p>${arabic(W('first',67).replace(/^Терминологическое значение:\s*/, ''))}</p></div></div>
        ${prose('first',[66,69,71])}`},
      {nav:'Шесть мест', title:shortHeading('first',73,'Места сакта'), body: `
        <p class="waqf-sakt-context">Риваят Хафса от ‘Асыма <span>по пути Аш-Шатыбийя</span></p>
        ${prose('first',[74])}${saktGroup(75,'А','Четыре обязательных места','الْأَرْبَعَةُ الْوَاجِبَةُ','Если чтец соединяет слова без полной остановки, сакт обязателен.')}
        <div class="waqf-cases">
          ${saktCase('I',76,77,'Аль-Кахф · 18:1–2','لَّهُۥ','عِوَجَاۜ','قَيِّمٗا','При остановке в конце аята сакт не нужен. При продолжении чтения делаем сакт на 2 хараката.')}
          ${saktCase('II',79,81,'Йа Син · 36:52','مِن','مَّرۡقَدِنَاۜۗ','هَٰذَا','Можно остановиться на слове. Если читаем дальше без полной остановки, делаем сакт.')}
          ${saktCase('III',83,84,'Аль-Кияма · 75:27','وَقِيلَ','مَنۡۜ','رَاقٖ','Между «مَنۡۜ» и «رَاقٖ» обязательно делаем сакт.')}
          ${saktCase('IV',86,87,'Аль-Мутаффифин · 83:14','كـَلَّاۖ','بَلۡۜ','رَانَ','Между «بَلۡۜ» и «رَانَ» обязательно делаем сакт.')}
        </div>
        ${saktGroup(88,'Б','Два разрешённых места','السَّكْتَاتُ الْجَائِزَةُ','При слитном чтении возможны два варианта: с сактом или без него.',true)}
        <div class="waqf-cases waqf-cases--single">
          ${saktCase('V',89,null,'Аль-Хакка · 69:28–29','عَنِّي','مَالِيَهۡۜ','هَلَكَ','При соединении аятов можно сделать сакт. Другой вариант — идгам без сакта.',true)}
        </div>
        ${saktSixthHeading()}
        ${joinIntro()}
        <div class="waqf-join-options">
          ${joinCard('I',7,'Аль-Вакф','Остановка с вдохом','عَلِيمْ','↓ полная остановка · вдох ↓','waqf','بَرَآءَةٞ','Заканчиваем первое слово с сукуном. Затем начинаем следующую суру без басмалы.')}
          ${joinCard('II',8,'Ас-Сакт','Короткая пауза без вдоха','عَلِيمْ','↓ пауза на 2 хараката · без вдоха ↓','sakt','بَرَآءَةٞ','На конце первой суры задерживаем голос. Затем сразу продолжаем чтение.')}
          ${joinCard('III',9,'Аль-Васль с иклябом','Чтение без остановки','عَلِيمُۢ','↓ без паузы · танвин звучит как «м» ↓','wasl','بَرَآءَةٞ','Соединяем два слова: звук танвина перед Ба произносится как «м».')}
        </div>`}
    ]
  },
  26: {
    title:'Аль-Вакф', arabic:'الْوَقْفُ', intro:'Остановка с намерением продолжить чтение',
    sections:[
      {nav:'Определение', title:shortHeading('second',12,'Определение вакфа'), body: lesson26Definition()},
      {nav:'Где и как', title:shortHeading('second',18,'Места и условия вакфа'), body: `${lesson26Places()}${lesson26Conditions()}`},
      {nav:'Хукм', title:shortHeading('second',28,'Хукм вакфа'), body: lesson26Ruling()},
      {nav:'Четыре вида', title:shortHeading('second',34,'Четыре вида вакфа'), body: `
        <div class="waqf-kinds">
          ${lesson26Type([35,36,37],'I','Вынужденная остановка','اِضْطِرَارِيّ','required',[
            'Возникает неожиданно из-за крайней необходимости (дарура): не хватает дыхания, чтец чихнул, закашлялся или забыл продолжение.',
            'Хукм: джаиз. При необходимости можно остановиться на любом слове.',
            'Затем возвращаемся назад и начинаем с места, где восстанавливается смысл.'
          ])}
          ${lesson26Type([38,39,40,41],'II','Проверочная остановка','اِخْتِبَارِيّ','test',[
            'Учитель просит остановиться для проверки (ихтибар), даже если это место обычно не предназначено для паузы.',
            'Хукм: джаиз. Для обучения можно остановиться на любом слове.',
            'После проверки возвращаемся назад и дочитываем по смыслу.'
          ],'<div class="waqf-kind-example"><b>Пример проверки</b><div><span>Открытая «та» <strong lang="ar" dir="rtl">امْرَأَتُ</strong></span><span>Та-марбута (при остановке звучит как «ха») <strong lang="ar" dir="rtl">امْرَأَةٌ</strong></span></div></div>')}
          ${lesson26Type([42,43,44],'III','Ожидающая остановка','اِنْتِظَارِيّ','waiting',[
            'При сдаче Корана шейху чтец показывает на одном слове варианты чтения: кырааты и риваяты. Учитель ожидает (интизар).',
            'Хукм: джаиз. Затем продолжаем с начала аята или с места, где не нарушается смысл.'
          ])}
          ${lesson26Type([45,46],'IV','Остановка по выбору','اِخْتِيَارِيّ','choice',[
            'Чтец осознанно выбирает место для паузы (ихтийар).',
            'Вынуждающей причины нет.'
          ])}
        </div>
        <div class="waqf-next"><strong>Остановка по выбору</strong><p>Будем разбирать на следующем уроке.</p></div>`}
    ]
  },
  27: {
    title:'Остановка по выбору', arabic:'الْوَقْفُ الِاخْتِيَارِيُّ', intro:'Связь слов и смысл прочитанного',
    sections:[
      {nav:'История', badge:'', title:'Краткая историческая справка', body: lesson27History()},
      {nav:'Две связи', badge:'', title:shortHeading('second',57,'Два вида связи между словами'), body: lesson27Links()},
      {nav:'Учёные', badge:'', title:shortHeading('second',62,'Как учёные делили остановки'), body: lesson27Classifications()},
      {nav:'Современная классификация', badge:'', title:'Современная классификация остановок', body: lesson27MedinaScheme()},
      {nav:'1 · Лязим', badge:'1', title:'Лязим · обязательная остановка', body: `
        ${lesson27Rule([75,76,77,78],'Обязательная остановка','الْوَقْفُ اللَّازِمُ','lazim',[
          'Фраза закончена, но соединение со следующим словом может исказить смысл для слушателя.',
          'Хукм: лязим (ваджиб). Останавливаемся и начинаем со следующего слова.',
          'В мусхафе место отмечают маленькой буквой مـ (ۘ).'
        ])}
        <div class="waqf-examples"><b>${arabic(W('second',79))}</b>
          ${quranFocusCard(80,'عَنْهُمْ ۘ','Аль-Камар · 54:6','مـ','Знак после выделенного слова: остановка обязательна.')}
          ${quranFocusCard(81,'يَسْمَعُونَ ۘ','Аль-Ан‘ам · 6:36','مـ','Знак после выделенного слова: остановка обязательна.')}
        </div>`},
      {nav:'2 · Тамм', badge:'2', title:'Тамм · полная остановка', body: `
        ${lesson27Rule([68,69,70],'Полная остановка','الْوَقْفُ التَّامُّ','tamm',[
          'Смысл и грамматика прочитанной фразы полностью завершены.',
          'Со следующим текстом нет ни грамматической, ни смысловой связи.',
          'Хукм: джаиз. Хорошо остановиться и хорошо начать со следующего слова.',
          'Так бывает в конце аята или при завершении рассказа.'
        ])}
        <div class="waqf-examples"><b>${arabic(W('second',71))}</b>
          ${quranFocusCard(72,'ٱلدِّينِ ۝','Аль-Фатиха · 1:4–5','۝','Конец аята: остановка после выделенного слова.')}
          ${quranFocusCard(74,'جَآءَنِى ۗ','Аль-Фуркан · 25:29','قلى','Знак после выделенного слова: остановка предпочтительнее.')}
        </div>`},
      {nav:'3 · Кафи', badge:'3', title:shortHeading('second',84,'Кафи · достаточная остановка'), body: `
        ${lesson27Rule([85,86],'Достаточная остановка','الْوَقْفُ الْكَافِي','kafi',[
          'Грамматически фраза закончена.',
          'Общая мысль продолжается: смысловая связь со следующим текстом остаётся.',
          'Хукм: джаиз. Хорошо остановиться и начать со следующего слова.',
          'Встречается в конце и в середине аята. Остановка тамм предпочтительнее.'
        ])}<div class="waqf-examples"><b>${arabic(W('second',87))}</b>
          ${quranFocusCard(88,'يُوقِنُونَ ۝','Аль-Бакара · 2:4–5','۝','Конец аята: можно остановиться, хотя тема продолжается.')}
          ${quranFocusCard(89,'إِبْرَٰهِيمَ ۚ','Марьям · 19:41','ج','Знак после выделенного слова: остановка разрешена.')}
        </div>`},
      {nav:'4 · Хасан', badge:'4', title:shortHeading('second',90,'Хасан · хорошая остановка'), body: `
        ${lesson27Rule([91,92],'Хорошая остановка','الْوَقْفُ الْحَسَنُ','hasan',[
          'Прочитанная фраза сама по себе понятна.',
          'Со следующим текстом остаются и грамматическая, и смысловая связи.',
          'Хукм: джаиз — остановиться можно.'
        ])}
        <div class="waqf-hasan-choices"><article><h3>В конце аята</h3><p>${arabic(W('second',93).replace(/^в конце аята —\s*/, ''))}</p></article><article><h3>В середине аята</h3><p>${arabic(W('second',94).replace(/^в середине аята —\s*/, ''))}</p></article></div>
        <div class="waqf-examples"><b>${arabic(W('second',95))}</b>
          ${quranFocusCard(96,'ٱلْعَٰلَمِينَ ۝','Аль-Фатиха · 1:2–3','۝','Конец аята: можно начать со следующего слова.')}
          ${quranFocusCard(97,'لِلَّهِ','Аль-Фатиха · 1:2','без знака','Если остановились здесь, при возобновлении возвращаемся назад.')}
        </div>`},
      {nav:'5 · Кабих', badge:'5', title:shortHeading('second',98,'Кабих · недопустимая остановка'), body: `
        ${lesson27Rule([99,100],'Недопустимая остановка','الْوَقْفُ الْقَبِيحُ','kabih',[
          'Пауза обрывает мысль: смысл становится непонятным или искажается.',
          'Связь со следующим текстом остаётся очень тесной.',
          'Хукм: намеренно так останавливаться запрещено.',
          'Если остановка вынужденная, возвращаемся назад и перечитываем слитно.'
        ])}<div class="waqf-examples"><b>${shortHeading('second',101,'Три вида примеров недопустимой остановки')}</b>
          ${quranFocusCard(102,'ٱلْحَمْدُ','Аль-Фатиха · 1:2','без знака','После выделенного слова мысль остаётся непонятной.',true)}
          ${quranFocusCard(103,'ٱلصَّلَوٰةَ','Ан-Ниса · 4:43','без знака','После выделенного слова смысл меняется: нужно дочитать продолжение.',true)}
          ${quranFocusCard(104,'إِلَٰهَ','Мухаммад · 47:19','без знака','После выделенного слова нельзя останавливаться: нужно дочитать «кроме Аллаха».',true)}
        </div>`},
      {nav:'Знаки в мединском издании', badge:'', title:shortHeading('second',106,'Знаки остановки в мединском издании Корана'), body: `<p class="waqf-signs-source">«Мусхаф Медины» <span lang="ar" dir="rtl">مصحف المدينة النبوية</span></p>${signsTable()}`}
    ]
  }
};

const lesson = lessons[waqfLessonNumber];
document.title = `Тәҗвид 3 · ${lesson.title}`;
document.getElementById('waqf-hero').innerHTML = `<div class="l13-eyebrow">ТӘҖВИД 3 · УРОК ${waqfLessonNumber}</div><div class="waqf-hero-ar" lang="ar" dir="rtl">${lesson.arabic}</div><h1>${lesson.title}</h1><p>${lesson.intro}</p>`;
document.getElementById('l13-nav').innerHTML = lesson.sections.map((section,i) => `<a href="#part${i+1}">${section.nav}</a>`).join('');
document.getElementById('waqf-main').innerHTML = lesson.sections.map((section,i) => {
  const badge = section.badge === undefined ? String(i+1) : section.badge;
  return `<section class="l13-section waqf-section waqf-section--${i%4}${badge ? '' : ' waqf-section--unnumbered'}" id="part${i+1}"><div class="l13-section-title">${badge ? `<span class="l13-number">${badge}</span>` : ''}<h2>${arabic(cleanHeading(section.title))}</h2></div>${section.body}</section>`;
}).join('');
document.getElementById('waqf-footer').innerHTML = `<div class="l13-footer-links"><a href="${waqfLessonNumber===25?'lesson24.html':`lesson${waqfLessonNumber-1}.html`}">← Предыдущий урок</a><a href="index.html">Все темы курса</a>${waqfLessonNumber<27?`<a href="lesson${waqfLessonNumber+1}.html">Следующий урок →</a>`:''}<a href="#top">К началу ↑</a></div>`;
window.waqfUnused = Object.fromEntries(Object.entries(waqfSource).map(([book,items]) => [book,Object.keys(items).filter(id=>!waqfUsed[book].has(id))]));
