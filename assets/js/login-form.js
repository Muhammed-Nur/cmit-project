/* Password show/hide Start */
if($('.jsPasswordEye1').length > 0){
    $('.jsPasswordEye1 .jsEyeBtn1').on('click', function(){
        let thisEye = $(this), thisMainD1 = thisEye.parents('.jsPasswordEye1'), thisEyeInput = thisMainD1.find('input');

        if(thisEyeInput.attr('type') != 'password'){
            thisEyeInput.attr('type', 'password');
            thisEye.removeClass('open');
        }else{
            thisEyeInput.attr('type', 'text');
            thisEye.addClass('open');
        }
    });
}
/* Password show/hide End */

/* Form Control Start */
let formControl1 = $('.jsFormControl1');

function contol_if_else(thisItem){
    if(thisItem.val().length > 0){
        thisItem.parent().removeClass('not-valid');
        thisItem.parents('form').find('[type="submit"]').removeAttr('disabled');
    }else{
        thisItem.parent().addClass('not-valid');
        thisItem.parents('form').find('[type="submit"]').attr('disabled', true);
    }
}

if(formControl1.length > 0){
    formControl1.find('input[required], textarea[required]').each(function(){
        $(this).on('keyup change' ,function(){
            contol_if_else($(this));
        });
    });

    formControl1.find('[type="submit"]').on('click', function(){
        formControl1.find('input[required], textarea[required]').each(function(){
            contol_if_else($(this));
        });
    });
}
/* Form Control End */