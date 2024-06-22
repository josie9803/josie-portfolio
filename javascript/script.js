let slideChangeCount = 0;
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesperview: 4,
  direction: 'horizontal',
  loop: false,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // setWrapperSize: true,
  // slidesOffsetAfter: 2,
  // zoom: {
  //   maxRatio: 100,
  // },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  speed: 500,
  spaceBetween: 20,

  on: {    
    init: function () {      
    checkNavigationButtons(); // Check button state on initialization    
  },    
  slideChange: function () {      
    checkNavigationButtons(); // Check button state on slide change    
},  },
  
});

// const nextButton = document.querySelector('.next-and-prev-buttons .next');
//     const prevButton = document.querySelector('.next-and-prev-buttons .prev');

//     nextButton.addEventListener('click', function () {
//       swiper.slideNext();
//     });

//     prevButton.addEventListener('click', function () {
//       swiper.slidePrev();
//     });

 const swiperTest = document.querySelector('.mySwiper').swiper;

 const nextButton = document.querySelector('.swiper-button-next');
if (swiper.isEnd) {
  nextButton.classList.add('disabled');
  nextButton.disabled = true;
}

// Now you can use all slider methods like
// swiperTest.slideNext();