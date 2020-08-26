const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyLock = document.querySelector('body');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
});


if (document.body.clientWidth > 1023) {
    const spaceHolder = document.querySelector('.services__space-holder');
    const horizontal = document.querySelector('.services__horizontal');
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    const progressBar = document.querySelector('.progress-bar__container');

    function calcDynamicHeight(ref) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const objectWidth = ref.scrollWidth;
        return objectWidth - vw + vh + 250;
    }

    window.addEventListener('scroll', () => {
        const sticky = document.querySelector('.services__sticky');
        horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
        progressBar.style.width = `${sticky.offsetTop / 7}%`;
    });

    window.addEventListener('resize', () => {
        spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    });
}



const preparingSlider = document.querySelector('.preparing__swiper-container');

var swiper = new Swiper(preparingSlider, {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

const instrumentsSlider = document.querySelector('.instruments__swiper-container');

var swiper = new Swiper(instrumentsSlider, {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 1,
        },
        360: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        670: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: true,
            grabCursor: true,
        }
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