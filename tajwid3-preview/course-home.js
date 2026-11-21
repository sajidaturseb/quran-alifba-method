const course = {
  ru: {
    kicker:'УГЛУБЛЁННЫЙ КУРС', title:'Уроки таджвида', subtitle:'Последовательное изучение правил чтения Корана',
    listKicker:'ПРОГРАММА КУРСА', listTitle:'Темы по порядку', listDescription:'От духовных основ и науки таджвид — к правилам чтения.',
    open:'Открыть урок', footer:'Новые уроки будут появляться здесь по мере подготовки.', top:'К началу ↑',
    lessons:[
      ['01','Путь Корана','Духовные основы, достоинства и этикет чтения.','lesson01.html'],
      ['02','Наука таджвид','Права букв, передача чтения, ошибки и темпы.','lesson02.html'],
      ['03','Истигаза и басмала','Смысл, этикет и способы соединения.','lesson03.html'],
      ['04','Нун с сукуном и изхар','Нун, танвин и шесть горловых букв.','lesson04.html'],
      ['05','Идгам','Слияние Нун и танвина; шесть букв и три вида.','lesson05.html'],
      ['06','Икляб','Замена Нун перед Ба и знак в мусхафе.','lesson06.html'],
      ['07','Ихфа хакики','Пятнадцать букв, три степени и гунна.','lesson07.html'],
      ['08','Мим с сукуном','Идгам, ихфа и изхар шафави.','lesson08.html'],
      ['09','Гунна','Носовое звучание Нун и Мим; четыре степени.','lesson09.html'],
      ['10','Ра, Алиф и Лям','Тафхим и таркик; основные и особые случаи.','lesson10.html'],
      ['11','Мадд и каср','Буквы удлинения, мера и причины мадда.','lesson11.html'],
      ['12','Три правила мадда','Мад бадаль, аль-Гивад и ас-сыля.','lesson12.html']
    ]
  },
  tt: {
    kicker:'ТИРӘНӘЙТЕЛГӘН КУРС', title:'Тәҗвид дәресләре', subtitle:'Коръән уку кагыйдәләрен эзлекле өйрәнү',
    listKicker:'КУРС ПРОГРАММАСЫ', listTitle:'Темалар тәртибе', listDescription:'Рухи нигезләрдән һәм тәҗвид фәненнән — уку кагыйдәләренә.',
    open:'Дәресне ачу', footer:'Яңа дәресләр әзерләнгән саен монда өстәләчәк.', top:'Башына ↑',
    lessons:[
      ['01','Коръән юлы','Рухи нигезләр, фазыйләтләр һәм уку әдәбе.','lesson01.html'],
      ['02','Тәҗвид фәне','Хәреф хаклары, укуны тапшыру, хаталар һәм темплар.','lesson02.html'],
      ['03','Истигазә һәм Басмала','Мәгънәсе, әдәбе һәм кушып уку юллары.','lesson03.html'],
      ['04','Сәкенле нун һәм изһар','Нун, тәнвин һәм алты тамак хәрефе.','lesson04.html'],
      ['05','Идгам','Нун белән тәнвин кушылуы; алты хәреф һәм өч төр.','lesson05.html'],
      ['06','Икляб','Ба алдыннан Нунның алмашынуы һәм мөсхәф билгесе.','lesson06.html'],
      ['07','Ихфа хакыйкый','Унбиш хәреф, өч дәрәҗә һәм гуннә.','lesson07.html'],
      ['08','Сәкенле Мим','Идгам, ихфа һәм изһар шәфәви.','lesson08.html'],
      ['09','Гуннә','Нун белән Мимның борын яңгырашы; дүрт дәрәҗә.','lesson09.html'],
      ['10','Ра, Әлиф һәм Ләм','Тәфхим һәм тәркыйк; төп һәм махсус очраклар.','lesson10.html'],
      ['11','Мәдд һәм каср','Сузу хәрефләре, озынлык һәм мәдд сәбәпләре.','lesson11.html'],
      ['12','Мәдднең өч кагыйдәсе','Мәдд бәдәл, әл-Гивад һәм әс-сыйлә.','lesson12-tt.html']
    ]
  }
};
function renderCourse(lang) {
  const data=course[lang];
  document.documentElement.lang=lang;
  document.title=`Тәҗвид 3 · ${data.title}`;
  for(const [id,text] of [['course-kicker',data.kicker],['course-title',data.title],['course-subtitle',data.subtitle],['course-list-kicker',data.listKicker],['course-list-title',data.listTitle],['course-list-description',data.listDescription],['course-footer',data.footer],['top-link',data.top]]) document.getElementById(id).textContent=text;
  document.getElementById('course-list').innerHTML=data.lessons.map(([number,title,description,url],i)=>`<a class="course-card course-card--${i%3}" href="${url}"><span class="course-card__number">${number}</span><h3>${title}</h3><p>${description}</p><strong>${data.open} <span aria-hidden="true">→</span></strong></a>`).join('');
  document.getElementById('course-list').setAttribute('aria-label',lang==='tt'?'Курс дәресләре':'Уроки курса');
  for(const code of ['ru','tt']) {
    const button=document.getElementById(`${code}-button`);
    button.classList.toggle('active',code===lang);
    button.setAttribute('aria-pressed',String(code===lang));
  }
  localStorage.setItem('tajwid3-language',lang);
}
document.getElementById('ru-button').addEventListener('click',()=>renderCourse('ru'));
document.getElementById('tt-button').addEventListener('click',()=>renderCourse('tt'));
renderCourse(localStorage.getItem('tajwid3-language')==='tt'?'tt':'ru');
