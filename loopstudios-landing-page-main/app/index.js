 const hamburger=document.querySelector('.nav__hamburger');
// const close=document.querySelector('.nav__close');
// const container=document.querySelector('.nav-container');
//
const list=document.querySelector('.nav__list');
container.addEventListener('click',function(){
     container.classList.toggle('collapse');
     list.classList.toggle('collapse');
 })
// hamburger.addEventListener('click',function(){
//     list.classList.toggle('collapse');
// })