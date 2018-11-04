$(document).foundation()

$(window).scroll(function () {


    // Header bg color appears
    if ($(window).scrollTop() > 1) {
        $('.main-header').css({
            'background-color': 'rgba(255, 255, 255, 0.5)'
        });
    } else {
        $('.main-header').css({
            'background-color': 'transparent'
        });
    }


    // Footer Date updates
    var currentYear = (new Date).getFullYear();
    $("#thisYear").text((new Date).getFullYear());
});
