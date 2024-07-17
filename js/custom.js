// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //skill - easyPieChart
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.chart').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {

                $('.chart').easyPieChart({
                    barColor: '#62BE7D',
                    trackColor: '#f3f3f3',
                    scaleColor: '#fff',
                    lineCap: 'round',
                    lineWidth: 30,
                    size: 400,
                    animate: 2000,
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
        });
    });

    // popup
    $('.art1').click(function () {
        $('.pop1').fadeIn();
    });
    $('.art2').click(function () {
        $('.pop2').fadeIn();
    });
    $('.art3').click(function () {
        $('.pop3').fadeIn();
    });


    $('.art4').click(function () {
        $('.pop4').fadeIn();
    });
    $('.art5').click(function () {
        $('.pop5').fadeIn();
    });
    $('.art6').click(function () {
        $('.pop6').fadeIn();
    });
    $('.popup i').click(function () {
        $('.popup').fadeOut();
    });

    // slide
    var swiper = new Swiper('.slide ', {
        speed: 1000,//버튼을 슬라이드가 넘어가는 시간
        navigation: {//화살표 버튼
            nextEl: '.popup .swiper-button-next',
            prevEl: '.popup .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.popup .swiper-pagination',
            clickable: true,
        },
    });


});