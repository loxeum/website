// scroll reveals
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// counters
const cio=new IntersectionObserver(es=>{es.forEach(e=>{
  if(!e.isIntersecting)return;const el=e.target;cio.unobserve(el);
  const t=parseInt(el.dataset.count,10),sfx=el.dataset.suffix||'',dur=1400,s=performance.now();
  function step(n){const p=Math.min((n-s)/dur,1),ez=1-Math.pow(1-p,3);el.textContent=Math.round(t*ez)+sfx;if(p<1)requestAnimationFrame(step)}
  requestAnimationFrame(step);
})},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
