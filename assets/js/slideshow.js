const slideshowContainer = document.querySelector(".slideshow-container");
const slides = Array.from(slideshowContainer.querySelectorAll(".slide"));
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let currentIndex = 0;
let intervalId = null;

function play() {
  intervalId = setInterval(() => {
    showNextSlide();
  }, 3000);
}
function stop() {
  clearInterval(intervalId);
  setTimeout(() => {
    alert("Slide show will resume in 5 seconds");
    play();
  }, 3000);
}
function showNextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}
function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  slides[index].classList.add("active");
  currentIndex = index;
}
function showPrevSlide() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}
leftArrow.addEventListener("click", showPrevSlide);
rightArrow.addEventListener("click", showNextSlide);
showSlide(currentIndex);
play();
