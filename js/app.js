$(document).foundation()

$(document).ready(function () {

    $(this).scrollTop(0);
    $('.dwn-btn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#tester').offset().top
        }, 2000);
    });

    $('.scroll-top').click(function (e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.main-body').offset().top
        }, 2000)
    })
});

$(window).scroll(function () {
    // Header bg color appears and changes sizes
    if ($(window).scrollTop() > 10) {
        $('.site-logo img').css({
            'width': '6rem'
        });
        $('.main-header').css({
            'padding': '0rem 2rem 0rem 2rem',
            'background-color': '#FFFFFF',
            'border-bottom': 'solid #F2F2F2 0.2rem'
        });
        $('.main-nav ul li a').css({
            'font-size': '2.5rem'
        });
        $('.scroll-top-btn').css({
            'display':'block'
        });
    } else {
        $('.site-logo img').css({
            'width': '8rem'
        });
        $('.main-header').css({
            'padding': '2.5rem 2rem 2.5rem 2rem',
            'background-color': 'transparent',
            'border-bottom': 'none'
        });
        $('.main-nav ul li a').css({
            'font-size': '3rem'
        });
        $('.scroll-top-btn').css({
            'display':'none'
        })
    }
});

// This fades the page in
$(window).on("load", function (e) {
    e.preventDefault();
    $(document.body).hide().fadeIn(1000);
});

// Footer Date update
var currentYear = (new Date).getFullYear();
$("#thisYear").text((new Date).getFullYear());

// Based on screen size
//    $(window).resize(function () {
//        if ($(window).width() < 1024) {
//
//        }
//    })
