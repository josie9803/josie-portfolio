//for swiperjs
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
document.body.addEventListener('click', function(event) {
  if (event.target.matches('[data-modal]')) {
    const modalId = event.target.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  if (event.target.matches('.close-button, .close-button *')) {
    const closeButton = event.target.closest('.close-button');
    const modalId = closeButton.getAttribute('data-close');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }
});

window.addEventListener('click', function(event) {
  if (event.target.matches('.modal-container')) {
    event.target.style.display = 'none';
  }
});

//for switching text
  const messages = ["Hello 🇨🇦,", "哈囉 🇭🇰,", "您好 🇨🇳,", "Xin chào 🇻🇳,"];
  let index = 0;

  const titleElement = document.getElementById('greetings');
  titleElement.textContent = messages[index++];
  setInterval(switchText, 3000);
  function switchText() { 
    titleElement.style.opacity = 0;
    setTimeout(() => {
      titleElement.textContent = messages[index];
      index = (index + 1) % messages.length; 
      titleElement.style.opacity = 1;
    }, 700);
  }



    

