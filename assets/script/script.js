const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

showSlide(currentIndex); // Show initial slide
