//header function
$(document).ready(function () {

    $("#open-menu").on("click", function () {
        var target = $(this).attr("data-target");
        if ($(target).hasClass("open")) {
            $(target).removeClass("open");
        } else {
            $(target).addClass("open");
        }
    })

    $(window).on("load resize", windowSize);

    function windowSize() {
        if ($(window).width() > "991") {
            var menu = $("#open_menu").attr("data-target");
            $(menu).removeClass("open");
        }
    }

    $(".btn-action").on("click", function () {

    })

});


//header fixed
// $(document).ready(function () {
//     // Get the current top location of the nav bar.
//     var stickyNavTop = $('header').offset().top;

//     // Set the header's height to its current height in CSS
//     // If we don't do this, the content will jump suddenly when passing through stickyNavTop.
//     $('header').height($('header').height());

//     $(window).scroll(function () {
//         if ($(window).scrollTop() >= stickyNavTop) {
//             $('header').addClass('fixed-header');
//         } else {
//             $('header').removeClass('fixed-header');
//         }
//     });

//     var headerHeight = $('header').height() + 'px';
//     $('.main-section').css('padding-top', headerHeight);
// });