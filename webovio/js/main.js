
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const bodyLock = document.querySelector('body');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
    header.classList.toggle('active');
});

function headerBg() {
    if ($(window).scrollTop() == 0) {
        $('#header').css('background', 'transparent');
    } else {
        $('#header').css('background', '#50553e');
    }
}
headerBg();

$(window).scroll(function () {
    headerBg();
});