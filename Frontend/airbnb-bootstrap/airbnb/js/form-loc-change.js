function determineFormLoc() {
    var child;
    if($('.form').css('background-color') != 'rgba(0, 0, 0, 0)') {
        child = $('.search--small .form__container .form .form__content');
        if(child.length > 0) {
            $('.search--large .form__container .form').append(child);
        }
    }
    else {
        child = $('.search--large .form__container .form .form__content');
        if(child.length > 0) {
            $('.search--small .form__container .form').append(child);
        }
    }
}

$(document).ready(function() {
    determineFormLoc()
    $(window).resize(determineFormLoc);
});