// JavaScript code for slide navigation
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

const prevButton = document.querySelectorAll('.prev-button');
const nextButton = document.querySelectorAll('.next-button');
const saveButton = document.querySelectorAll('.save-button');
const slideCounter = document.querySelectorAll('.slide-counter');

// Function to display the current slide
function displaySlide() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = 'block';
      slideCounter.forEach((counter) => {
        counter.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;
      });
    } else {
      slide.style.display = 'none';
    }
  });
}

// Function to navigate to the previous slide
function goToPreviousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    displaySlide();
  }
}

// Function to navigate to the next slide
function goToNextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    displaySlide();
  }
}

// Event listeners for navigation buttons
prevButton.forEach((button) => {
  button.addEventListener('click', goToPreviousSlide);
});

nextButton.forEach((button) => {
  button.addEventListener('click', goToNextSlide);
});

// Initial slide display
displaySlide();
