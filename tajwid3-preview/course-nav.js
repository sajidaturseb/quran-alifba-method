function renderCourseReturn() {
  const target = document.getElementById('course-jump');
  if (!target) return;
  const tt = document.documentElement.lang === 'tt';
  target.innerHTML = `<a class="course-return" href="index.html"><span aria-hidden="true">←</span> ${tt ? 'Барлык дәресләр' : 'Все уроки курса'}</a>`;
}
renderCourseReturn();
document.getElementById('ru-button')?.addEventListener('click', renderCourseReturn);
document.getElementById('tt-button')?.addEventListener('click', renderCourseReturn);
function renderFollowingLesson() {
  const match=location.pathname.match(/lesson(0[4-9]|10|11)\.html$/);
  if(!match)return;
  const number=Number(match[1])+1;
  const footer=document.querySelector('footer.footer');
  const top=document.getElementById('top-link');
  if(!footer||!top)return;
  let link=document.getElementById('following-lesson-link');
  if(!link){link=document.createElement('a');link.id='following-lesson-link';footer.insertBefore(link,top);}
  const ru={5:'Пятый',6:'Шестой',7:'Седьмой',8:'Восьмой',9:'Девятый',10:'Десятый',11:'Одиннадцатый',12:'Двенадцатый'};
  const tt={5:'Бишенче',6:'Алтынчы',7:'Җиденче',8:'Сигезенче',9:'Тугызынчы',10:'Унынчы',11:'Унберенче',12:'Уникенче'};
  link.href=number===12&&document.documentElement.lang==='tt'?'lesson12-tt.html':`lesson${String(number).padStart(2,'0')}.html`;
  link.textContent=document.documentElement.lang==='tt'?`${tt[number]} дәрес →`:`${ru[number]} урок →`;
}
renderFollowingLesson();
document.getElementById('ru-button')?.addEventListener('click',renderFollowingLesson);
document.getElementById('tt-button')?.addEventListener('click',renderFollowingLesson);
