let menu =document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = ()  =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = ()  =>{
    document.querySelector('#search-form').classList.remove('active');

}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
//review-section
  
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  
  loop:true,
  breakpoints:{
  0: {
    slidePerView:1,
  },
  640: {
    slidesPerView:2,

  },
  768: {
    slidesPerView:2,

  },
  1024: {
    slidesPerView:3,

  },
  },
 
});
// footer
let section =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header .navbar a');
section.forEach(sec =>{
let top=window.scrollY;
let hight=sec.offsetHeight;
let offset=sec.offsetTop - 150;
let id=sec.getAttribute('id');
});
