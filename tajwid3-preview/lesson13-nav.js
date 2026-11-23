(() => {
  const nav = document.getElementById('l13-nav');
  if (!nav) return;
  const cards = [...nav.querySelectorAll('a')];
  const prev = document.getElementById('l13-prev');
  const next = document.getElementById('l13-next');
  const position = document.getElementById('l13-position');
  let index = 0;
  function update() {
    position.textContent = `${index + 1} / ${cards.length}`;
    prev.disabled = index === 0;
    next.disabled = index === cards.length - 1;
  }
  function go(step) {
    index = Math.max(0, Math.min(cards.length - 1, index + step));
    nav.scrollTo({left: cards[index].offsetLeft - cards[0].offsetLeft, behavior:'smooth'});
    update();
  }
  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  cards.forEach((card, i) => card.addEventListener('click', () => {
    index = i;
    nav.scrollTo({left: card.offsetLeft - cards[0].offsetLeft, behavior:'smooth'});
    update();
  }));
  nav.addEventListener('scroll', () => {
    const left = nav.scrollLeft;
    index = cards.reduce((best, card, i) => Math.abs(card.offsetLeft - cards[0].offsetLeft - left) < Math.abs(cards[best].offsetLeft - cards[0].offsetLeft - left) ? i : best, 0);
    update();
  }, {passive:true});
  document.querySelectorAll('.l13-languages a').forEach(link => link.addEventListener('click', () => {
    localStorage.setItem('tajwid3-language', link.getAttribute('href').endsWith('-tt.html') ? 'tt' : 'ru');
  }));
  update();
})();
