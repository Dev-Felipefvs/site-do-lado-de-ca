const btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const aberto = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!aberto));
  btn.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  menu.classList.toggle('aberto', !aberto);
});
menu.addEventListener('click', e => { if (e.target.closest('a') && btn.getAttribute('aria-expanded') === 'true') btn.click(); });

const io = 'IntersectionObserver' in window && new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('on'));

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, nome = f.nome.value.trim(), erro = document.getElementById('erro');
  if (!nome) { erro.hidden = false; f.nome.focus(); return; }
  erro.hidden = true;
  let txt = `Olá, Ana Cláudia! Sou ${nome}. Tenho interesse em: ${f.tipo.value} (${f.formato.value}).`;
  if (f.msg.value.trim()) txt += `\n\n${f.msg.value.trim()}`;
  window.open('https://wa.me/5582993510953?text=' + encodeURIComponent(txt), '_blank', 'noopener');
});
