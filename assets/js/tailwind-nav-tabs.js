$('.jsNavsBtn1').on('click', function(){
    let thisBtn = $(this), thisControlA1 = thisBtn.attr('control-area'), thisMainUl1 = thisBtn.parents('.jsNavsMUl1'), thisAllBtn = thisMainUl1.find('.jsNavsBtn1');

    let contentA1 = $('.jsNavsContentM1'), contentItemAll1 = contentA1.find('.jsNavsContentItem1');

    if(thisBtn.hasClass('active') != 'active'){
        thisAllBtn.removeClass('active');
        thisBtn.addClass('active');

        contentItemAll1.hide();
        contentA1.find('.jsNavsContentItem1[area-name="' + thisControlA1 + '"]').fadeIn();
    }
});

$(document).ready(function(){
    $('.jsNavsContentM1 .jsNavsContentItem1').hide();
    $('.jsNavsContentM1').find('.jsNavsContentItem1[area-name="' + $('.jsNavsMUl1 .jsNavsBtn1.active').attr('control-area') + '"]').fadeIn();
});