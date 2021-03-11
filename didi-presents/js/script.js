

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