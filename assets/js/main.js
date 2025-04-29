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

/* Mobile Menu Start */
if($('.csm-mobileJS-1').length > 0){
    $('.csm-mobileJS-1').on('click', function(){
        let menuTopLine = $(this).find('.csm-humberge-m-1-top'), menuBottomLine = $(this).find('.csm-humberge-m-1-bottom');

        let thisMobileMD = $('.csm-mobile-menu-d-1');

        $(this).toggleClass('is-active');

        menuTopLine.removeClass('no-animation');
        menuBottomLine.removeClass('no-animation');

        $('body').toggleClass('csm-body-ovf-1');

        thisMobileMD.toggleClass('active');
    });
}
/* Mobile Menu End */

/* Input Text Type Only Number Start */
if($('.only-number').length > 0){
    $('.only-number').keypress(function(event){
        if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
            event.preventDefault();
        }
    });
}
/* Input Text Type Only Number End */

/* Quantity Start */
$('.jsQuantity1 .add').click(function () {
    $(this).parents('.jsQuantity1').find('.q-box').val(+$(this).parents('.jsQuantity1').find('.q-box').val() + 1);
});

$('.jsQuantity1 .sub').click(function () {
    if ($(this).parents('.jsQuantity1').find('.q-box').val() > 1) {
        if ($(this).parents('.jsQuantity1').find('.q-box').val() > 1){
            $(this).parents('.jsQuantity1').find('.q-box').val(+$(this).parents('.jsQuantity1').find('.q-box').val() - 1);
        }
    }
});

$('.jsQuantity1 .q-box').on('change', function(){
    if($(this).val() < 1){
        $(this).val(1);
    }
});
/* Quantity End */