$('.flowing-scroll').on('click', function () {
    var el = $(this);
    var dest = el.attr('href'); // отримуємо напрямок
    if (dest !== undefined && dest !== '') { // перевіряємо існування
        $('html').animate({
            scrollTop: $(dest).offset().top // прокручуємо сторінку до необхідного елемента
        }, 500 // швидкість прокрутки
        );
    }
    return false;
});