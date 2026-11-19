function renderCourseReturn() {
  const target = document.getElementById('course-jump');
  if (!target) return;
  const tt = document.documentElement.lang === 'tt';
  target.innerHTML = `<a class="course-return" href="index.html"><span aria-hidden="true">←</span> ${tt ? 'Барлык дәресләр' : 'Все уроки курса'}</a>`;
}
renderCourseReturn();
document.getElementById('ru-button')?.addEventListener('click', renderCourseReturn);
document.getElementById('tt-button')?.addEventListener('click', renderCourseReturn);
