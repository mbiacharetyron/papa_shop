const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');



    function navOpen(){
        console.log("navOpen");
        navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
    }
        
        function navClose() {
        navList.classList.remove('show');
        navBgOverlayEl.classList.remove('active');
        document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
        }
 


 navIconEl.addEventListener('click', navOpen);
 
 navCloseEl.addEventListener('click', navClose);
 
 navBgOverlayEl.addEventListener('click', navClose)



 // click to scroll top


// click to scroll top
$('.move-up span').click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
})





AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 300, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror:true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
    

var swiper = new Swiper(".mySwiper", {

     
  // Responsive breakpoints
  
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
    // when window width is >= 640px
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      autoplay: true,
      
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    
    });