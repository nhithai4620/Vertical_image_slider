const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide');
const sliderLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = slideRight.querySelector('div').length;

let activeSlideIndex = 0;