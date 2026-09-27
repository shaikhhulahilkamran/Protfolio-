const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),500));

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const topBtn=document.querySelector('.top');
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>600));
topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

document.getElementById('year').textContent=new Date().getFullYear();

function sendMail(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const message=document.getElementById('message').value;
  const subject=encodeURIComponent('Portfolio Project Inquiry from '+name);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`);
  window.location.href=`mailto:shaikhhulahilkamran@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('formNote').textContent='Opening your email app…';
}
