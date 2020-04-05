$(function () {

    $('.video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1000,
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5607 18.5607C9.97487 19.1464 9.02513 19.1464 8.43934 18.5607L0.43934 10.5607C-0.146445 9.97487 -0.146445 9.02513 0.439341 8.43934L8.43934 0.43934C9.02513 -0.146446 9.97488 -0.146446 10.5607 0.439341C11.1464 1.02513 11.1464 1.97487 10.5607 2.56066L3.62132 9.5L10.5607 16.4393C11.1464 17.0251 11.1464 17.9749 10.5607 18.5607Z" fill="#0C4DA2" fill-opacity="0.4"/> </svg> </button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.43934 0.43934C1.02513 -0.146447 1.97487 -0.146447 2.56066 0.43934L10.5607 8.43934C11.1464 9.02513 11.1464 9.97487 10.5607 10.5607L2.56066 18.5607C1.97487 19.1464 1.02513 19.1464 0.43934 18.5607C-0.146447 17.9749 -0.146447 17.0251 0.43934 16.4393L7.37868 9.5L0.43934 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.43934 0.43934Z" fill="#0C4DA2" fill-opacity="0.4"/> </svg> </button>',
    }

    );

    $('.catalog__slider-inner').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        speed: 1000,
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5607 18.5607C9.97487 19.1464 9.02513 19.1464 8.43934 18.5607L0.43934 10.5607C-0.146445 9.97487 -0.146445 9.02513 0.439341 8.43934L8.43934 0.43934C9.02513 -0.146446 9.97488 -0.146446 10.5607 0.439341C11.1464 1.02513 11.1464 1.97487 10.5607 2.56066L3.62132 9.5L10.5607 16.4393C11.1464 17.0251 11.1464 17.9749 10.5607 18.5607Z" fill="#0C4DA2" fill-opacity="0.4"/> </svg> </button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.43934 0.43934C1.02513 -0.146447 1.97487 -0.146447 2.56066 0.43934L10.5607 8.43934C11.1464 9.02513 11.1464 9.97487 10.5607 10.5607L2.56066 18.5607C1.97487 19.1464 1.02513 19.1464 0.43934 18.5607C-0.146447 17.9749 -0.146447 17.0251 0.43934 16.4393L7.37868 9.5L0.43934 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.43934 0.43934Z" fill="#0C4DA2" fill-opacity="0.4"/> </svg> </button>',
        responsive: [{

            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                variableWidth: false,
            }
        }

        ]
    }

    );

    $('.tabs-slider').slick({

        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        speed: 1000,
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5607 18.5607C9.97487 19.1464 9.02513 19.1464 8.43934 18.5607L0.43934 10.5607C-0.146445 9.97487 -0.146445 9.02513 0.439341 8.43934L8.43934 0.43934C9.02513 -0.146446 9.97488 -0.146446 10.5607 0.439341C11.1464 1.02513 11.1464 1.97487 10.5607 2.56066L3.62132 9.5L10.5607 16.4393C11.1464 17.0251 11.1464 17.9749 10.5607 18.5607Z" fill="#0C4DA2" fill-opacity="0.4"/> </svg> </button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.43934 0.43934C1.02513 -0.146447 1.97487 -0.146447 2.56066 0.43934L10.5607 8.43934C11.1464 9.02513 11.1464 9.97487 10.5607 10.5607L2.56066 18.5607C1.97487 19.1464 1.02513 19.1464 0.43934 18.5607C-0.146447 17.9749 -0.146447 17.0251 0.43934 16.4393L7.37868 9.5L0.43934 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.43934 0.43934Z" fill="#0C4DA2" fill-opacity="0.4"/> </svg> </button>',
        responsive: [{

            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                variableWidth: false,
            }
        }

        ]
    }

    );


    $(function () {
        $("ul.tabs__caption").on("click", "li:not(.active)", function () {
            $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
        }

        );
    }

    );

    $('.tabs-slider__mark').on('click', function () {
        $(this).toggleClass('active');
    }

    );

    $('.header__burger').on('click', function () {
        $('.header__bottom').toggleClass('active');
        $('body').toggleClass('lock');
    }

    );

    $('.header__btn').magnificPopup({
        type: 'inline',
        midClick: true
    }

    );

}

);