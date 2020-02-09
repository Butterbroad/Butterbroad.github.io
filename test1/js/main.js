$(function () {

    $('.courses-feedback__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: `<button class="slick-arrow slick-prev"><svg width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.02905 17.7624L18.4832 0.30822C18.8942 -0.10274 19.5533 -0.10274 19.9642 0.30822C20.3752 0.719181 20.3752 1.37827 19.9642 1.78923L3.25443 18.499L19.9642 35.2088C20.3752 35.6198 20.3752 36.2789 19.9642 36.6898C19.7626 36.8914 19.4912 37 19.2276 37C18.964 37 18.6926 36.8992 18.491 36.6898L1.0368 19.2357C0.625839 18.8325 0.625841 18.1656 1.02905 17.7624Z" fill="#292929"/>
        </svg></button>`,
        nextArrow: `<button class="slick-arrow slick-next"><svg width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.971 17.7624L2.51677 0.30822C2.10581 -0.10274 1.44672 -0.10274 1.03576 0.30822C0.624799 0.719181 0.624799 1.37827 1.03576 1.78923L17.7456 18.499L1.03576 35.2088C0.624799 35.6198 0.624799 36.2789 1.03576 36.6898C1.23736 36.8914 1.50875 37 1.77239 37C2.03602 37 2.30741 36.8992 2.50901 36.6898L19.9632 19.2357C20.3742 18.8325 20.3742 18.1656 19.971 17.7624Z" fill="white"/>
        </svg></button>`,
        responsive: [{
            breakpoint: 870,
            settings: {
                arrows: false
            }
        }, ]
    });



});

let burger = document.querySelector('.burger__menu');
let navigation = document.querySelector('.header__menu');

burger.addEventListener('click', function () {
    navigation.classList.toggle('show');
});