$(document).foundation()

$(window).scroll(function () {

    if ($(window).scrollTop() > 1) {
        $('.main-header').css({
            'background-color': 'rgba(255, 255, 255, 0.5)'});
    } else {
        $('.main-header').css({
            'background-color': 'transparent'});
    }
});


