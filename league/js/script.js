















'use strict';

const animItems = document.querySelectorAll('.anim-item');
function get_name_browser() {
    let ua = navigator.userAgent;
    if (ua.search(/YaBrowser/) > 0) return 'Яндекс Браузер';
    if (ua.search(/rv:11.0/) > 0) return 'Internet Explorer 11';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    if (ua.search(/Edge/) > 0) return 'Edge';
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    return 'Не определен';
}
let browser = get_name_browser();

if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains("anim-no-hide")) {
                    animItem.classList.remove('active');
                }
            }

            if (browser == 'Edge' || browser == 'Internet Explorer') {
                alert('loh');
                console.log('pizdets');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 700);
}







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