//slider carousel
let counter = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slider = document.querySelector("#slider-carousel");
const slides = document.querySelectorAll(".cart").length - 4;

const nextSlide = () => {
    if (counter < slides) {
        counter++;
        slider.style.left = '-' + 340 * counter + 'px';
    } else {
        counter = 0;
        slider.style.left = '-' + 340 * counter + 'px';
    }
}

const prevSlide = () => {
    if (counter > 0) {
        counter--;
        slider.style.left = '-' + 340 * counter + 'px';
    } else {
        counter = 3;
        slider.style.left = '-' + 340 * counter + 'px';

    }
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

let timer = setInterval(nextSlide, 2000);
document.querySelector(".slider-carousel").addEventListener('mouseover', () => {
    clearInterval(timer);
});

document.querySelector(".slider-carousel").addEventListener('mouseout', () => {
    timer = setInterval(nextSlide, 2000);
});