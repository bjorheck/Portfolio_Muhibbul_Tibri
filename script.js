const themeBtn=document.getElementById("themeBtn");
const savedTheme=localStorage.getItem("theme");
if(savedTheme==="light") document.body.classList.add("light");
themeBtn?.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...document.querySelectorAll("nav a")];
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${entry.target.id}`));
    }
  });
},{rootMargin:"-35% 0px -55% 0px",threshold:0});
sections.forEach(section=>sectionObserver.observe(section));

const modal=document.getElementById("certModal");
document.getElementById("openCert")?.addEventListener("click",()=>{modal.classList.add("show");modal.setAttribute("aria-hidden","false")});
document.getElementById("closeCert")?.addEventListener("click",()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")});
modal?.addEventListener("click",e=>{if(e.target===modal) modal.classList.remove("show")});
document.addEventListener("keydown",e=>{if(e.key==="Escape") modal?.classList.remove("show")});
document.getElementById("year").textContent=new Date().getFullYear();
