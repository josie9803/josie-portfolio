document.addEventListener("DOMContentLoaded", function () {
    const jobCards = document.querySelector(".job-cards");
    const revealButton = document.querySelector(".reveal-button");
  
    // Calculate the width of a single job card
    const cardWidth = document.querySelector(".job-card").offsetWidth;
  
    revealButton.addEventListener("click", function () {
      // Slide the job cards to the left by the width of one card
      jobCards.style.transform = `translateX(-${cardWidth}px)`;
    });
  });
  