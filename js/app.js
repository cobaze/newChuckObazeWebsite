$(document).foundation()

$(document).ready(function () {

    $(this).scrollTop(0);
    $('.dwn-btn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#tester').offset().top
        }, 2000);
    });

    $('.scroll-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.main-body').offset().top
        }, 2000)
    })

    //    filterSelection("all")
    //    function filterSelection(c){
    //        var x, i;
    //        x = document.getElementsByClassName("filterDiv");
    //        if(c == "all") c = "";
    //        for(i = 0; i < x.length; i++){
    //
    //        }
    //    }

    function openModal() {
        document.getElementById("myModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
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
            'display': 'block'
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
            'display': 'none'
        })
    }
});

// This fades the page in
//$(window).on("load", function (e) {
//    e.preventDefault();
//    $(document.body).hide().fadeIn(1000);
//});

// Footer Date update
var currentYear = (new Date).getFullYear();
$("#thisYear").text((new Date).getFullYear());

// Based on screen size
//    $(window).resize(function () {
//        if ($(window).width() < 1024) {
//
//        }
//    })
