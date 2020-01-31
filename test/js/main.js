let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let body = document.querySelector('body');
if (isMobile.any()) {
    let arrow = document.querySelectorAll('.arrow');

    for (let i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener('click', function () {
            dropdown.classList.toggle('show');
            thisArrow.classList.toggle('active');
            arrow[i].addEventListener('click', scroll(arrow[i]));
        });
        let scroll = function handleButtonClick(item) {
            item.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
        }
        let dropdown = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

    }
}

let burger = document.querySelector('.burger__menu');
let navigation = document.querySelector('.menu__list');

burger.addEventListener('click', function () {
    navigation.classList.toggle('show');
});



function toggleClass() {
    if ($(window).width() < 769) {
        body.classList.add('touch');
        body.classList.remove('no-touch');
    } else {
        body.classList.add('no-touch');
        body.classList.remove('touch');
    }
}
toggleClass();

$(window).resize(function () {
    toggleClass();
});