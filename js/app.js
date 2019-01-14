$(document).foundation()
$(document).ready(function () {
    $(this).scrollTop(0);
    $('.dwn-btn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#tester').offset().top
        }, 2000);
    });
    $(window).scroll(function () {
        // Header bg color appears and changes sizes
        if ($(window).scrollTop() > 100) {
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
        } else {
            $('.site-logo img').css({
                'width': '10rem'
            });
            $('.main-header').css({
                'padding': '2.5rem 2rem 2.5rem 2rem',
                'background-color': 'transparent',
                'border-bottom': 'none'
            });
            $('.main-nav ul li a').css({
                'font-size': '3rem'
            })
        }
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

    // This fades the page in
    $(window).on("load", function (e) {
        e.preventDefault();
        $(document.body).hide().fadeIn(1000);
    });
});
