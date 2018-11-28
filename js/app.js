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

        // Header bg color appears
        if ($(window).scrollTop() > 1) {
            $('.main-header').css({
                'background-color': 'rgba(255, 255, 255)',
                'border-bottom': 'solid rgb(241, 90, 43) 0.3rem'
            });

            //            $('.styled-active a').css({
            //                'color':'#F15A29'
            //            });

        } else {
            $('.main-header').css({
                'background-color': 'transparent',
                'border-bottom': 'none'
            });

            $('.styled-active a').css({
                'color': '#F15A29'
            });
        };

    });

});

$(".package-pp").mouseenter(function () {
        $(".package-pp img").animate({
            "opacity": "0.5"
        }, 500, "swing");

        $(".package-pp h4").fadeIn(500);
    })
    .mouseleave(function () {
        $(".package-pp img").animate({
            "opacity": "1"
        }, 500, "swing");

        $(".package-pp h4").fadeOut(500);
    });

// This fades the page in
$(window).on("load", function (e) {
    e.preventDefault();
    $(document.body).hide().fadeIn(1000);
});

// Footer Date update
var currentYear = (new Date).getFullYear();
$("#thisYear").text((new Date).getFullYear());
