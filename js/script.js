//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  swiper slide cards section  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var swiper1 = new Swiper(".mySwiper", {
  loop: true,
 speed:900,
 slidesPerView: 1,
 spaceBetween: 30,
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },

 autoplay: {
   delay: 2500,
   disableOnInteraction: false,
 },

 pagination: {
   el: '.swiper-pagination',
 },


});
// End card swiper 



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  swiper slide cards section  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var swiper = new Swiper(".testimonial-Swiper", {
 loop:true,
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
// End card swiper 




















//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Aos initialization  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});
// End AOS





//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< swipers slide testimonials section  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var swiper = new Swiper(".", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination-2',
  },
  
  loop: true,
  speed:900,
});
// End testimonial swiper


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  pure counter  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

new PureCounter();{
  delay:1000
};
// End pure counter


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  scroll to top button  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
// End Scroll top button