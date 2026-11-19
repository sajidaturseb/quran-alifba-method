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
  const match=location.pathname.match(/lesson0([4-7])\.html$/);
  if(!match)return;
  const number=Number(match[1])+1;
  const footer=document.querySelector('footer.footer');
  const top=document.getElementById('top-link');
  if(!footer||!top)return;
  let link=document.getElementById('following-lesson-link');
  if(!link){link=document.createElement('a');link.id='following-lesson-link';footer.insertBefore(link,top);}
  const ru=['Пятый','Шестой','Седьмой','Восьмой'];
  const tt=['Бишенче','Алтынчы','Җиденче','Сигезенче'];
  link.href=`lesson0${number}.html`;
  link.textContent=document.documentElement.lang==='tt'?`${tt[number-5]} дәрес →`:`${ru[number-5]} урок →`;
}
renderFollowingLesson();
document.getElementById('ru-button')?.addEventListener('click',renderFollowingLesson);
document.getElementById('tt-button')?.addEventListener('click',renderFollowingLesson);
