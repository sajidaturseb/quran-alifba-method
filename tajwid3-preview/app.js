const arabic = text => `<p class="arabic" lang="ar" dir="rtl">${text}</p>`;
const source = text => `<p class="source">${text}</p>`;
const verse = (ar, translation, ref) => `<div class="verse">${arabic(ar)}<p>${translation}</p>${source(ref)}</div>`;
const sign = (n, title, body) => `<div class="sign"><b>${n}</b><div><h4>${title}</h4><p>${body}</p></div></div>`;
const adab = (n, title, body) => `<div class="adab-card"><div class="adab-card__top"><span>${n}</span><h4>${title}</h4></div><p>${body}</p></div>`;
const art = `<svg viewBox="0 0 220 150" fill="none" aria-hidden="true"><path d="M111 131C79 111 42 111 11 116V28c32-6 71-3 100 17 29-20 68-23 100-17v88c-31-5-68-5-100 15Z" fill="#fff8e7" stroke="currentColor" stroke-width="4"/><path d="M111 46v84M23 47c29-4 56 0 76 14M23 63c29-4 56 0 76 14M198 47c-29-4-56 0-76 14M198 63c-29-4-56 0-76 14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M111 31V7M95 28 83 8M127 28l12-20" stroke="#eed18f" stroke-width="5" stroke-linecap="round"/></svg>`;

const content = {
  ru: {
    kicker:'УРОК 01 · ВСТУПЛЕНИЕ', title:'Путь Корана', subtitle:'Духовные основы, достоинства и этикет чтения', nav:'В этом уроке', next:'Дальше', prev:'Назад', foot:'Конец первого урока', top:'Вернуться к началу ↑',
    chapters:[
      {nav:'Знание и сердце', title:'Знание и сердце', kicker:'ЧАСТЬ 01', description:'С чего начинается путь изучающего Коран', lead:'Знание ценно тем, как оно меняет человека.', body:`
        <div class="content-block">
          <h3>Что меняет в нас знание?</h3>
          <div class="quote">${arabic('الْعِلْمُ لَا يُقَاسُ بِمَا يُضَافُ إِلَى الذَّاكِرَةِ، بَلْ بِمَا تَغَيَّرَ فِي النَّفْسِ')}<p>Знание измеряется не тем, что добавляется в память, а тем, что меняется в душе человека.</p></div>
          <p>Истинное знание проявляется в спокойствии, скромности и хорошем отношении к людям.</p>
        </div>
        <div class="content-block">
          <h3>Пять признаков полезного знания</h3>
          <div class="sign-grid">
            ${sign('1','Мягкость и доброта','Терпение, милосердие и бережное отношение к людям.')}
            ${sign('2','Нужда в Аллахе','Чем больше знаний, тем яснее человек видит свою слабость.')}
            ${sign('3','Благие дела','Знание превращается в практику, усердие и пользу.')}
            ${sign('4','Чистота сердца','Человек освобождается от зависти и обид и думает о людях хорошо.')}
            ${sign('5','Скромность ученика','Он видит, сколько ещё предстоит узнать, и бережёт своё время.')}
          </div>
        </div>
        <div class="note gold"><strong>Для размышления</strong><p>Какое изменение в своём отношении к людям я замечаю, изучая Коран?</p></div>`},
      {nav:'Достоинства чтения', title:'Достоинства чтения', kicker:'ЧАСТЬ 02', description:'Аяты и хадисы, которые поддерживают ученика', lead:'Чтение Корана — поклонение и путь приближения к Аллаху.', body:`
        <div class="content-block">
          <h3>Повеление читать</h3>
          ${verse('﴿وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِنْ كِتَابِ رَبِّكَ﴾','«И читай то, что внушено тебе в откровении из Книги твоего Господа».','Коран · 18:27')}
          ${verse('﴿فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ﴾','«Читайте же из Корана то, что легко для вас».','Коран · 73:20')}
          <p>В суре «Ан-Намль» поклонение Аллаху и чтение Корана упоминаются среди поручений Посланнику ﷺ.</p>
          ${verse('﴿وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُسْلِمِينَ وَأَنْ أَتْلُوَ الْقُرْآنَ﴾','«Мне велено быть одним из мусульман и читать Коран».','Коран · 27:91–92, фрагмент')}
        </div>
        <div class="content-block">
          <h3>Награда за каждую букву</h3>
          <div class="reward"><div class="reward__number">×10</div><p>Доброе дело за прочитанную букву умножается в десять раз.</p></div>
          <div class="letter-row" lang="ar" aria-label="Алиф, лям, мим"><span>أَلِفٌ</span><span>لَامٌ</span><span>مِيمٌ</span></div>
          <p>Алиф — отдельная буква, Лям — отдельная буква, Мим — отдельная буква.</p>
          ${source('Хадис · ат-Тирмизи')}
        </div>
        <div class="content-block">
          <h3>Учиться и обучать</h3>
          <div class="quote">${arabic('خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ')}<p>«Лучший из вас — тот, кто изучает Коран и обучает ему других».</p>${source('Хадис · аль-Бухари')}</div>
          <p>Искусный чтец будет с благородными ангелами. Тот, кто читает с трудом, получает двойную награду.</p>
          <div class="note"><strong>Ценность даже нескольких аятов</strong><p>Посланник Аллаха ﷺ объяснил: изучить или прочитать в мечети два аята лучше, чем получить двух больших верблюдиц; три аята лучше трёх, четыре — четырёх.</p></div>
        </div>`},
      {nav:'Адабы чтения', title:'Адабы чтения', kicker:'ЧАСТЬ 03', description:'Подготовка, размеренное чтение и искренность', lead:'Чтение объединяет точность языка и внимание сердца.', body:`
        <div class="content-block"><h3>Перед чтением</h3><div class="adab-list">
          ${adab('01','Чистота и опрятность','Желательно совершить омовение, выбрать чистое место и надеть опрятную одежду, закрывающую аурат.')}
          ${adab('02','Мисвак','Перед чтением очистить рот мисваком.')}
          ${adab('03','Истиаза','Прибегнуть к защите Аллаха от шайтана.')}
        </div>
        ${verse('﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ﴾','«Когда ты читаешь Коран, прибегай к защите Аллаха от побиваемого камнями шайтана».','Коран · 16:98')}
        </div>
        <div class="content-block"><h3>Во время чтения</h3><div class="adab-list">
          ${adab('04','Тартиль','Произносить буквы точно, читать размеренно и не торопиться.')}
          ${adab('05','Размышление','Останавливаться сердцем на смысле аятов.')}
          ${adab('06','Живой отклик','При упоминании прощения просить о нём, при упоминании Рая просить Рая, при упоминании Огня — защиты.')}
        </div>
        ${verse('﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾','«Читай Коран размеренным чтением».','Коран · 73:4')}
        ${verse('﴿كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ﴾','«Это — благословенная Книга, ниспосланная тебе, чтобы размышляли над её аятами».','Коран · 38:29')}
        </div>
        <div class="content-block"><h3>После чтения и в жизни</h3><div class="adab-list">
          ${adab('07','Тиляват саджда','Совершать земной поклон в соответствующих местах чтения.')}
          ${adab('08','Красота голоса','Украшать чтение голосом, сохраняя правильное произношение.')}
          ${adab('09','Поступать по Корану','Переносить прочитанное в свои дела и отношения с людьми.')}
          ${adab('10','Ихляс','Читать ради довольства Аллаха, а не ради похвалы людей.')}
        </div></div>
        <div class="closing"><strong>Дуа завершения собрания</strong>${arabic('سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ')}<p>Пречист Ты, о Аллах, и хвала Тебе! Свидетельствую, что нет божества, достойного поклонения, кроме Тебя. Прошу у Тебя прощения и приношу Тебе покаяние.</p></div>`}
    ]
  },
  tt: {
    kicker:'01 НЧЕ ДӘРЕС · КЕРЕШ', title:'Коръән юлы', subtitle:'Рухи нигезләр, фазыйләтләр һәм уку әдәбе', nav:'Бу дәрестә', next:'Алга', prev:'Артка', foot:'Беренче дәрес тәмам', top:'Башына кайтырга ↑',
    chapters:[
      {nav:'Белем һәм йөрәк', title:'Белем һәм йөрәк', kicker:'01 НЧЕ БҮЛЕК', description:'Коръән өйрәнү юлы кайдан башлана', lead:'Белемнең кадере — аның кешене үзгәртүендә.', body:`
        <div class="content-block"><h3>Белем безнең җаныбызны ничек үзгәртә?</h3><div class="quote">${arabic('الْعِلْمُ لَا يُقَاسُ بِمَا يُضَافُ إِلَى الذَّاكِرَةِ، بَلْ بِمَا تَغَيَّرَ فِي النَّفْسِ')}<p>Белем хәтергә өстәлгән нәрсәләр белән түгел, ә кешенең җанында нинди үзгәрешләр ясавы белән үлчәнә.</p></div><p>Чын белем күңел тынычлыгында, тыйнаклыкта һәм кешеләр белән яхшы мөгамәләдә күренә.</p></div>
        <div class="content-block"><h3>Файдалы белемнең биш билгесе</h3><div class="sign-grid">
          ${sign('1','Мөлаемлык һәм йомшаклык','Сабырлык, шәфкатьлелек һәм кешеләргә яхшы мөнәсәбәт.')}
          ${sign('2','Аллаһка мохтаҗлыкны тою','Белем арткан саен кеше үзенең көчсезлеген яхшырак аңлый.')}
          ${sign('3','Хәерле гамәлләр','Белем гамәлгә, тырышлыкка һәм файдага әйләнә.')}
          ${sign('4','Күңел пакьлеге','Кеше көнчелектән һәм үпкәдән арына, башкалар турында яхшы фикердә була.')}
          ${sign('5','Укучының тыйнаклыгы','Ул өйрәнәсе белемнең күплеген күрә һәм вакытын кадерли.')}
        </div></div><div class="note gold"><strong>Уйлану өчен</strong><p>Коръәнне өйрәнү кешеләргә мөнәсәбәтемне ничек үзгәртә?</p></div>`},
      {nav:'Уку фазыйләтләре', title:'Коръән укуның фазыйләтләре', kicker:'02 НЧЕ БҮЛЕК', description:'Укучыга көч бирүче аятьләр һәм хәдисләр', lead:'Коръән уку — гыйбадәт һәм Аллаһка якынаю юлы.', body:`
        <div class="content-block"><h3>Коръән укырга боерык</h3>
          ${verse('﴿وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِنْ كِتَابِ رَبِّكَ﴾','«Раббыңның Китабыннан сиңа вәхи ителгәннәрне укы».','Коръән · 18:27')}
          ${verse('﴿فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ﴾','«Коръәннән үзегезгә җиңел булганны укыгыз».','Коръән · 73:20')}
          <p>«Ән-Нәмел» сүрәсендә Аллаһка гыйбадәт кылу һәм Коръән уку Рәсүлгә ﷺ йөкләнгән бурычлар арасында искә алына.</p>
          ${verse('﴿وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُسْلِمِينَ وَأَنْ أَتْلُوَ الْقُرْآنَ﴾','«Миңа мөселманнардан булырга һәм Коръән укырга боерылды».','Коръән · 27:91–92, өзек')}
        </div>
        <div class="content-block"><h3>Һәр хәреф өчен ун савап</h3><div class="reward"><div class="reward__number">×10</div><p>Укылган бер хәреф өчен савап ун мәртәбә арттырыла.</p></div><div class="letter-row" lang="ar" aria-label="Әлиф, Ләм, Мим"><span>أَلِفٌ</span><span>لَامٌ</span><span>مِيمٌ</span></div><p>Әлиф — аерым хәреф, Ләм — аерым хәреф, Мим — аерым хәреф.</p>${source('Хәдис · әт-Тирмизи')}</div>
        <div class="content-block"><h3>Өйрәнергә һәм өйрәтергә</h3><div class="quote">${arabic('خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ')}<p>«Сезнең иң хәерлегез — Коръәнне өйрәнүче һәм аны өйрәтүчедер».</p>${source('Хәдис · әл-Бухари')}</div><p>Оста укучы фәрештәләр белән булыр. Кыенлык белән укыган кешегә икеләтә савап бирелер.</p><div class="note"><strong>Берничә аятьнең дә кадере зур</strong><p>Рәсүлүллаһ ﷺ аңлатканча, мәчеттә ике аять өйрәнү яки уку ике зур дөягә ия булудан хәерлерәк; өч аять — өч дөядән, дүрт аять — дүрттән хәерлерәк.</p></div></div>`},
      {nav:'Уку әдәбе', title:'Коръән уку әдәбе', kicker:'03 НЧЕ БҮЛЕК', description:'Әзерлек, тәртил белән уку һәм ихласлык', lead:'Дөрес уку телнең төгәллеген һәм йөрәкнең уяулыгын берләштерә.', body:`
        <div class="content-block"><h3>Уку алдыннан</h3><div class="adab-list">
          ${adab('01','Тәһәрәт һәм чисталык','Уку алдыннан тәһәрәт алу, пакь урын сайлау һәм гаурәтне яба торган чиста кием кию күркәм.')}
          ${adab('02','Мисвак','Уку алдыннан авызны мисвак белән чистарту.')}
          ${adab('03','Истигазә','Шайтаннан Аллаһка сыену.')}
        </div>${verse('﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ﴾','«Коръән укыган чагыңда ташлар белән куылган шайтаннан Аллаһка сыен».','Коръән · 16:98')}</div>
        <div class="content-block"><h3>Укыган вакытта</h3><div class="adab-list">
          ${adab('04','Тәртил','Хәрефләрне төгәл әйтеп, ашыкмыйча уку.')}
          ${adab('05','Тәдәббур','Аятьләрнең мәгънәсе турында уйлану.')}
          ${adab('06','Аятьләргә җавап','Гафу турында укыганда гафу сорау, Җәннәт турында укыганда аны сорау, Җәһәннәм турында укыганда Аллаһка сыену.')}
        </div>${verse('﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾','«Коръәнне тәртил белән укы».','Коръән · 73:4')}${verse('﴿كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ﴾','«Бу — аятьләре турында уйлансыннар өчен Без сиңа иңдергән бәрәкәтле Китап».','Коръән · 38:29')}</div>
        <div class="content-block"><h3>Уку тәмамлангач һәм тормышта</h3><div class="adab-list">
          ${adab('07','Тиләвәт сәҗдәсе','Тиешле урыннарда сәҗдә кылу.')}
          ${adab('08','Тавышны бизәү','Дөрес әйтелешне саклап, матур тавыш белән уку.')}
          ${adab('09','Коръән белән гамәл кылу','Укылганны гамәлләргә һәм кешеләр белән мөнәсәбәтләргә күчерү.')}
          ${adab('10','Ихласлык','Коръәнне кеше мактавы өчен түгел, Аллаһ ризалыгы өчен уку.')}
        </div></div>
        <div class="closing"><strong>Мәҗлесне тәмамлау догасы</strong>${arabic('سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ')}<p>Йә Аллаһ! Син барча кимчелекләрдән Пакь, Сиңа мактау! Синнән башка гыйбадәткә лаек илаһ юк. Синнән гафу сорыйм һәм Сиңа тәүбә кылам.</p></div>`}
    ]
  }
};

function render(lang){
  const data=content[lang];
  document.documentElement.lang=lang==='tt'?'tt':'ru';
  document.title=`Тәҗвид 3 · ${data.title}`;
  document.getElementById('lesson-kicker').textContent=data.kicker;
  document.getElementById('lesson-title').textContent=data.title;
  document.getElementById('lesson-subtitle').textContent=data.subtitle;
  document.getElementById('nav-title').textContent=data.nav;
  document.getElementById('nav-next-label').textContent=data.next;
  document.getElementById('nav-prev').setAttribute('aria-label',data.prev);
  document.getElementById('nav-next').setAttribute('aria-label',data.next);
  document.getElementById('footer-text').textContent=data.foot;
  document.getElementById('top-link').textContent=data.top;
  document.getElementById('section-nav').innerHTML=data.chapters.map((c,i)=>`<a href="#part-${i+1}"><small>${String(i+1).padStart(2,'0')}</small><strong>${c.nav}</strong></a>`).join('');
  document.getElementById('lesson-content').innerHTML=data.chapters.map((c,i)=>`<section class="chapter" id="part-${i+1}"><div class="chapter__inner"><div class="chapter-head"><div class="chapter-kicker">${c.kicker}</div><h2>${c.title}</h2><p>${c.description}</p><div class="chapter-art">${art}</div></div><div class="chapter-content"><p class="lead">${c.lead}</p>${c.body}</div></div></section>`).join('');
  for(const l of ['ru','tt']){const b=document.getElementById(`${l}-button`);b.classList.toggle('active',l===lang);b.setAttribute('aria-pressed',String(l===lang));}
  const nav=document.getElementById('section-nav');
  nav.scrollLeft=0;
  updateNavControls();
  localStorage.setItem('tajwid3-language',lang);
}
function currentNavIndex(){
  const nav=document.getElementById('section-nav');
  const cards=[...nav.children];
  if(!cards.length)return 0;
  let closest=0;
  for(let i=1;i<cards.length;i++){
    if(Math.abs(cards[i].offsetLeft-cards[0].offsetLeft-nav.scrollLeft)<Math.abs(cards[closest].offsetLeft-cards[0].offsetLeft-nav.scrollLeft))closest=i;
  }
  return closest;
}
function updateNavControls(){
  const nav=document.getElementById('section-nav');
  const index=currentNavIndex();
  document.getElementById('nav-progress').textContent=`${String(index+1).padStart(2,'0')} / ${String(nav.children.length).padStart(2,'0')}`;
  document.getElementById('nav-prev').disabled=index===0;
  document.getElementById('nav-next').disabled=index===nav.children.length-1;
}
function moveNav(delta){
  const nav=document.getElementById('section-nav');
  const cards=[...nav.children];
  const next=Math.max(0,Math.min(cards.length-1,currentNavIndex()+delta));
  nav.scrollTo({left:cards[next].offsetLeft-cards[0].offsetLeft,behavior:'smooth'});
}
document.getElementById('ru-button').addEventListener('click',()=>render('ru'));
document.getElementById('tt-button').addEventListener('click',()=>render('tt'));
document.getElementById('nav-prev').addEventListener('click',()=>moveNav(-1));
document.getElementById('nav-next').addEventListener('click',()=>moveNav(1));
document.getElementById('section-nav').addEventListener('scroll',updateNavControls,{passive:true});
render(localStorage.getItem('tajwid3-language')==='tt'?'tt':'ru');
