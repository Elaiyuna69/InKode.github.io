// Carousel functionality
let currentSlide = 0;
const totalSlides = 4;

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    document.querySelector('.home_carousel-slide').style.transform = `translateX(-${currentSlide * 90}%)`;
}