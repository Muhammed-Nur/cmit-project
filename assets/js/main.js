/* Go Top Button Start */
var btn = $('#goTpButton');

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').scrollTop(0);
});
/* Go Top Button End */