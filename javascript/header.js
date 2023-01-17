$(document).ready(function () {
    $("#open-menu").on("click", function () { //подія натискання на гамбургер меню
        var target = $(this).attr("data-target");
        if ($(target).hasClass("open")) {
            $(target).removeClass("open");
        } else {
            $(target).addClass("open");
        }
    })
    $(window).on("load resize", windowSize); //виклик функції, яка відповідає за адаптування шапки
    function windowSize() { //функція, що змінює вигляд шапки при роздільній здатності екрану менш ніж 991px
        if ($(window).width() > "991") {
            var menu = $("#open_menu").attr("data-target");
            $(menu).removeClass("open");
        }
    }
    // $(".btn-action").on("click", function () {

    // })
});