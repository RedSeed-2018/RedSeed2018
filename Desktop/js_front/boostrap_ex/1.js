$(document).ready(function() {
	$('.form-inline').focus(function(event) {
		/* Act on the event */
		$('.form-inline').attr({
			placeholder: 'Focusing... ', 
			
		});
	});
	
	if($(window).width()>1128){
		$(window).scroll(function(){                          
            if ($(this).scrollTop() > $('.apartment-container').offset().top) {
                $('.nav-header').fadeIn();
               

            } else {
                $('.nav-header').fadeOut();
            }
        });
	}
		

});
