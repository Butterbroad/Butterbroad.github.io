'use strict'

const sliderOne = new Swiper('.slider-one', {
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__item',
  slidesPerView: 5,
  spaceBetween: 10,
});

const sliderTwo = new Swiper('.slider-two', {
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__item',
  slidesPerView: 5,
  spaceBetween: 10,
});

const catalogImgSlider = new Swiper('.catalog__item-slider', {
  wrapperClass: 'catalog__item-slider-wrapper',
  slideClass: 'catalog__item-slider-slide',
  pagination: {
    el: '.swiper-pagination',
  },
});

//header nav
const headerNavigationLinks = document.querySelectorAll('.menu__list-item');

headerNavigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    let path = link.getAttribute("data-path");
    slideToSection(path);
  });
});

function slideToSection(path) {
  let getSection = document.getElementById(path);
  if (getSection) {
    getSection.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

//scroll to top btn
const upBtn = document.querySelector('.btn-up');

upBtn.addEventListener('click', () => {
  scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  let scrolled = window.pageYOffset;
  if (scrolled > 700) {
    upBtn.style.display = 'flex';
  } else {
    upBtn.style.display = 'none';
  }
});


function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});