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
  
});

 const swiperTest = document.querySelector('.mySwiper').swiper;

 const nextButton = document.querySelector('.swiper-button-next');
if (swiper.isEnd) {
  nextButton.classList.add('disabled');
  nextButton.disabled = true;
}
// for modal boxes
var modal_wics = document.getElementById("modal-wics");
var btn_wics = document.querySelector(".view-details-btn");
var closeButton = document.querySelector(".close-button");

btn_wics.onclick = function() {
  modal_wics.style.display = "block";
  document.body.classList.add("modal-open"); 
}

closeButton.onclick = function() {
  modal_wics.style.display = "none";
  document.body.classList.remove("modal-open");
}

window.onclick = function(event) {
  if (event.target == modal_wics) {
    modal_wics.style.display = "none";
    document.body.classList.remove("modal-open"); 
  }
}

