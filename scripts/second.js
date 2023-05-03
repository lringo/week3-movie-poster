const slides = document.getElementsByClassName('karusell__item');
const slidesTotal = slides.length;
const nextButton = document.querySelector('#karusell__button--next');
const prevButton = document.querySelector('#karusell__button--prev');

let slidePosition = 0

nextButton.addEventListener('click', () => {

    for(let slide of slides){
        slide.classList.remove('karusell__item--visible');
    }
    if(slidePosition === slidesTotal - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add('karusell__item--visible');
});

prevButton.addEventListener('click', () => {
    for(let slide of slides){
        slide.classList.remove('karusell__item--visible');
    }

    if(slidePosition === 0){
        slidePosition = slidesTotal - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add('karusell__item--visible');
});

