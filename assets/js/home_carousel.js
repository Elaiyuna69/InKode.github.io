// Carousel functionality
let currentSlide = 0;
const totalSlides = 4;

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    document.querySelector('.home_carousel-slide').style.transform = `translateX(-${currentSlide * 90}%)`;
}

let currentSlide1 = 0;
const totalSlides1 = 4;

function moveCarousel1(direction) {
    currentSlide1 = (currentSlide1 + direction + totalSlides1) % totalSlides1;
    document.querySelector('.home_carousel-slide1').style.transform = `translateX(-${currentSlide1 * 90}%)`;
}

let currentSlide2 = 0;
const totalSlides2 = 4;

function moveCarousel2(direction) {
    currentSlide2 = (currentSlide2 + direction + totalSlides2) % totalSlides2;
    document.querySelector('.home_carousel-slide2').style.transform = `translateX(-${currentSlide2 * 90}%)`;
}