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

    // Hover on Home page Portfolio items
    $(".package-pp").mouseenter(function () {
            $(".package-pp img").animate({
                "opacity": "0.5"
            }, 250, "swing");
            $(".package-pp h4").fadeIn(250);
        })
        .mouseleave(function () {
            $(".package-pp img").animate({
                "opacity": "1"
            }, 250, "swing");
            $(".package-pp h4").fadeOut(250);
        });
    $(".web-pp").mouseenter(function () {
            $(".web-pp img").animate({
                "opacity": "0.5"
            }, 250, "swing");
            $(".web-pp h4").fadeIn(250);
        })
        .mouseleave(function () {
            $(".web-pp img").animate({
                "opacity": "1"
            }, 250, "swing");
            $(".web-pp h4").fadeOut(250);
        });
    $(".marketing-pp").mouseenter(function () {
            $(".marketing-pp img").animate({
                "opacity": "0.5"
            }, 250, "swing");
            $(".marketing-pp h4").fadeIn(250);
        })
        .mouseleave(function () {
            $(".marketing-pp img").animate({
                "opacity": "1"
            }, 250, "swing");
            $(".marketing-pp h4").fadeOut(250);
        });
    $(".ppt-pp").mouseenter(function () {
            $(".ppt-pp img").animate({
                "opacity": "0.5"
            }, 250, "swing");
            $(".ppt-pp h4").fadeIn(250);
        })
        .mouseleave(function () {
            $(".ppt-pp img").animate({
                "opacity": "1"
            }, 250, "swing");
            $(".ppt-pp h4").fadeOut(250);
        });
    // Footer Date update
    var currentYear = (new Date).getFullYear();
    $("#thisYear").text((new Date).getFullYear());

    // Based on screen size
    $(window).resize(function(){
        if($(window).width() < 1024){

        }
    })
});
// This fades the page in
$(window).on("load", function (e) {
    e.preventDefault();
    $(document.body).hide().fadeIn(1000);
});
