function toggleMenu(btn){
  const l=document.getElementById('navLinks');
  btn.setAttribute('aria-expanded',l.classList.toggle('open'));
}
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{
  document.getElementById('navLinks').classList.remove('open');
}));

function tick(){
  try{
    const t=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Taipei'}).format(new Date());
    document.querySelectorAll('[data-clock]').forEach(e=>e.textContent=t);
  }catch(_){}
}
tick();setInterval(tick,20000);

const io=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(!e.isIntersecting)return;
    const el=e.target;
    const sib=[...el.parentElement.children].filter(c=>c.classList.contains('rv'));
    el.style.transitionDelay=(Math.max(sib.indexOf(el),0)*0.07)+'s';
    el.classList.add('in');
    io.unobserve(el);
  });
},{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('stuck',scrollY>40),{passive:true});
