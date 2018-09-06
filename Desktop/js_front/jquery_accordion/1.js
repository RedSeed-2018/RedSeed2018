$(document).ready(function() {
	$('#chon').change(function(event) {
		/* Act on the event */
		$('.paragh').slideUp();
		var value1='.paragh-'+$(this).val();
		$(value1).toggle();
	});
	$('.paragh').slideUp();
	
	$('.container__title').click(function(event) {
		/* Act on the event */
		$('.paragh').slideUp();
		$(this).next('.paragh').slideToggle(800);
		
		
	});

	
});
 