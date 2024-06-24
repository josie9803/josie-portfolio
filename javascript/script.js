let slideChangeCount = 0;
const swiper = new Swiper('.mySwiper', {
  slidesperview: 4,
  direction: 'horizontal',
  loop: false,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  speed: 500,
  spaceBetween: 20,

  on: {    
    init: function () {      
    checkNavigationButtons(); 
  },    
  slideChange: function () {      
    checkNavigationButtons();     
},  },
  
});

 const swiperTest = document.querySelector('.mySwiper').swiper;

 const nextButton = document.querySelector('.swiper-button-next');
if (swiper.isEnd) {
  nextButton.classList.add('disabled');
  nextButton.disabled = true;
}
