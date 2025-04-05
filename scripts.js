// Slideshow
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000);

// Scroll reveal
ScrollReveal().reveal('.fade-in', {
  delay: 200,
  distance: '40px',
  origin: 'bottom',
  duration: 800
});