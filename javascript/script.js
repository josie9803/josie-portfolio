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

//for mouse pointer
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#808836", "#8b8f3e", "#969746", "#a19e4e", "#ada656", "#b8ad5e", 
  "#c3b567", "#cfbd70", "#dac478", "#e5cc81", "#f1d48b", "#fcdc94"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// rating area
document.getElementById('ratingRange').addEventListener('input', function() {
  document.getElementById('currentRating').innerText = this.value;
});

document.getElementById('rateMeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const rating = document.getElementById('ratingRange').value;
  const feedback = document.getElementById('feedback').value;

  if (rating) {
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);

    document.getElementById('rateMeForm').classList.add('hidden');
    document.getElementById('thanksMessage').classList.remove('hidden');
  } else {
    alert('Please select a rating.');
  }
});

//hovering video card
const card = document.querySelector('.item3');
const video = document.querySelector('.video');

card.addEventListener('mouseover', () => {
  video.play();
})

card.addEventListener('mouseleave', () => {
  video.pause();
})

//toggle theme button
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});




