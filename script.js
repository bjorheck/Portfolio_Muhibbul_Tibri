const themeBtn=document.getElementById('themeBtn');
if(localStorage.getItem('theme')==='light') document.body.classList.add('light');
themeBtn?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark')});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('nav a')];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>sectionObserver.observe(s));
function setupModal(id,openId,closeId){const m=document.getElementById(id);document.getElementById(openId)?.addEventListener('click',()=>{m.classList.add('show');m.setAttribute('aria-hidden','false')});document.getElementById(closeId)?.addEventListener('click',()=>{m.classList.remove('show');m.setAttribute('aria-hidden','true')});m?.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')});return m}
const certModal=setupModal('certModal','openCert','closeCert'),projectModal=setupModal('projectModal','openProject','closeProject');
document.addEventListener('keydown',e=>{if(e.key==='Escape'){certModal?.classList.remove('show');projectModal?.classList.remove('show')}});
document.getElementById('year').textContent=new Date().getFullYear();
