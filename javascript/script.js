//for swiperjs
let slideChangeCount = 0;
const swiper = new Swiper('.mySwiper', {

  // slidesPerView: 4,
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

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,   
    },
  
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  speed: 500,


  //no need
  // on: {      
  //   slideChange: function () {        
  //     slideChangeCount++;        
  //     updateNavigationButtons();      
  //   },    
  // },
});

//no need to initialize
// const nextButton = document.querySelector('.swiper-button-next');
//   const prevButton = document.querySelector('.swiper-button-prev');

//   function updateNavigationButtons() {
//     if (swiper.isEnd) {
//       nextButton.classList.add('disabled');
//       nextButton.disabled = true;
//     } else {
//       nextButton.classList.remove('disabled');
//       nextButton.disabled = false;
//     }

//     if (swiper.isBeginning) {
//       prevButton.classList.add('disabled');
//       prevButton.disabled = true;
//     } else {
//       prevButton.classList.remove('disabled');
//       prevButton.disabled = false;
//     }
//   }

//   updateNavigationButtons();

// for modal boxes
document.body.addEventListener('click', function(event) {
  // Open modal
  if (event.target.matches('[data-modal]')) {
      const modalId = event.target.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
          modal.style.display = 'block';
          // Reset the modal content
          modal.querySelectorAll('.modal-main-content').forEach(content => content.classList.remove('active'));
          // Display the overview content by default
          const overviewContentId = modal.querySelector('.overview-button').getAttribute('data-target');
          document.getElementById(overviewContentId).classList.add('active');
      }
  }

  // Close modal
  if (event.target.matches('.close-button, .close-button *')) {
      const closeButton = event.target.closest('.close-button');
      const modalId = closeButton.getAttribute('data-close');
      const modal = document.getElementById(modalId);
      if (modal) {
          modal.style.display = 'none';
      }
  }

  // Switch content within modal
  if (event.target.matches('.overview-button, .company-button')) {
      const targetId = event.target.getAttribute('data-target');
      const modalContainer = event.target.closest('.modal-container');
      modalContainer.querySelectorAll('.modal-main-content').forEach(content => content.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
  }
});

// Close modal if clicking outside the modal content
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

  //for changing work/org exp effect
  document.addEventListener('DOMContentLoaded', () => {
    const workCarousel = document.querySelector('.work-carousel');
    const orgCarousel = document.querySelector('.org-carousel');
    workCarousel.classList.add('highlighted');
    orgCarousel.classList.remove('highlighted');
  
    if (workCarousel && orgCarousel) {
      orgCarousel.addEventListener('click', () => {
        workCarousel.classList.remove('highlighted');
        orgCarousel.classList.add('highlighted');
      });
  
      workCarousel.addEventListener('click', () => {
        orgCarousel.classList.remove('highlighted');
        workCarousel.classList.add('highlighted');
      });
    }
  });
  
  



    

