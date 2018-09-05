var isEverClicked = false;
$("#toggle-item").click(function() {
    if (isEverClicked) {
        $(".homes-list__home-item:odd").toggle();
        $(".homes-list__home-item:even").toggle();
    }
    else {
        $(".homes-list__home-item:odd").toggle();
        isEverClicked = true;
    }
});