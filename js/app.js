$(document).foundation()

$(window).scroll(function () {

    // Header bg color appears
    if ($(window).scrollTop() > 1) {
        $('.main-header').css({
            'background-color': 'rgba(255, 255, 255)',
            'border-bottom':'solid rgb(241, 90, 43) 0.3rem'
        });

    } else {
        $('.main-header').css({
            'background-color': 'transparent',
            'border-bottom': 'none'
        });
    }

    $('.dwn-btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#tester').offset().top}, 2000);
        });

    // Footer Date update
    var currentYear = (new Date).getFullYear();
    $("#thisYear").text((new Date).getFullYear());
});
