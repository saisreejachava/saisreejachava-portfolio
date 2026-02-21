// ── Custom cursor ──
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
}, { passive: true });

(function loop() {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, .exp-card, .project-card, .sg, .edu-card, .ach-item').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.classList.add('h'); ring.classList.add('h'); });
  el.addEventListener('mouseleave', () => { cur.classList.remove('h'); ring.classList.remove('h'); });
});

// ── Scroll reveal ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── Active nav highlight ──
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur2 = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur2 = s.id; });
  navAs.forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + cur2));
}, { passive: true });
