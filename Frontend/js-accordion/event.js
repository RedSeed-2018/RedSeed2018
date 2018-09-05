$('body').on('click', '.my-section__title', function() {
    $('#selector').val($(this).parent().find('.my-section__content').attr('data-value'));
    $(this).toggleClass('my-section__title--active');
    $(this).parent().find('.my-section__content').slideToggle();
    $(this).parent().siblings().find('.my-section__title').removeClass('my-section__title--active');
    $(this).parent().siblings().find('.my-section__content').slideUp();
});

$('body').on('change', '#selector', function() {
    $('.my-section__content[data-value="' + $(this).val() + '"]').parent().find('.my-section__title').click();
});