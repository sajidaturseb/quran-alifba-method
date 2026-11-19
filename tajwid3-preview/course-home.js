const course = {
  ru: {
    kicker:'УГЛУБЛЁННЫЙ КУРС', title:'Уроки таджвида', subtitle:'Последовательное изучение правил чтения Корана',
    listKicker:'ПРОГРАММА КУРСА', listTitle:'Темы по порядку', listDescription:'От духовных основ и науки таджвид — к правилам чтения.',
    open:'Открыть урок', footer:'Новые уроки будут появляться здесь по мере подготовки.', top:'К началу ↑',
    lessons:[
      ['01','Путь Корана','Духовные основы, достоинства и этикет чтения.','lesson01.html'],
      ['02','Наука таджвид','Права букв, передача чтения, ошибки и темпы.','lesson02.html'],
      ['03','Истигаза и басмала','Смысл, этикет и способы соединения.','lesson03.html']
    ]
  },
  tt: {
    kicker:'ТИРӘНӘЙТЕЛГӘН КУРС', title:'Тәҗвид дәресләре', subtitle:'Коръән уку кагыйдәләрен эзлекле өйрәнү',
    listKicker:'КУРС ПРОГРАММАСЫ', listTitle:'Темалар тәртибе', listDescription:'Рухи нигезләрдән һәм тәҗвид фәненнән — уку кагыйдәләренә.',
    open:'Дәресне ачу', footer:'Яңа дәресләр әзерләнгән саен монда өстәләчәк.', top:'Башына ↑',
    lessons:[
      ['01','Коръән юлы','Рухи нигезләр, фазыйләтләр һәм уку әдәбе.','lesson01.html'],
      ['02','Тәҗвид фәне','Хәреф хаклары, укуны тапшыру, хаталар һәм темплар.','lesson02.html'],
      ['03','Истигазә һәм Басмала','Мәгънәсе, әдәбе һәм кушып уку юллары.','lesson03.html']
    ]
  }
};
function renderCourse(lang) {
  const data=course[lang];
  document.documentElement.lang=lang;
  document.title=`Тәҗвид 3 · ${data.title}`;
  for(const [id,text] of [['course-kicker',data.kicker],['course-title',data.title],['course-subtitle',data.subtitle],['course-list-kicker',data.listKicker],['course-list-title',data.listTitle],['course-list-description',data.listDescription],['course-footer',data.footer],['top-link',data.top]]) document.getElementById(id).textContent=text;
  document.getElementById('course-list').innerHTML=data.lessons.map(([number,title,description,url],i)=>`<a class="course-card course-card--${i%3}" href="${url}"><span class="course-card__number">${number}</span><h3>${title}</h3><p>${description}</p><strong>${data.open} <span aria-hidden="true">→</span></strong></a>`).join('');
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
