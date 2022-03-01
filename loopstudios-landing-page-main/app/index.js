const hamburger=document.querySelector('.nav__hamburger');
const closee=document.querySelector('.nav__close');
const list=document.querySelector('.nav__list');
const head=document.querySelector('.header');
 hamburger.addEventListener('click',function(){
     hamburger.classList.toggle('collapse');
     closee.classList.toggle('collapse');
     list.classList.toggle('collapse');
     head.classList.toggle('collapse');

 })
 closee.addEventListener('click',function(){
     hamburger.classList.toggle('collapse');
     closee.classList.toggle('collapse');
     list.classList.toggle('collapse');
     head.classList.toggle('collapse');


 })
