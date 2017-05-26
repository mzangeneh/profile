	$(document).ready(function(){
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		$('.hireme').click(function(){
			$('.hover').addClass('flip');
			$('.thankyou').animate({'top': '60%'}, 500);
		});
		$('.submit').click(function(){
			$('.contact').fadeOut(500);
			$('.thankyou').animate({'opacity': 'show', 'top': '50%'}, 500);
		});
		$('.mainProfile').click(function(){
			$('.hover').removeClass('flip');
			$('.thankyou').fadeOut(500);
			$('.contact').fadeIn(500);
		});
	});
