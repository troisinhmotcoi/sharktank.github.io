$(document).ready(function() {
	$('.tdkhoi').click(function(event) {
	/* Act on the event */
	$(this).toggleClass('xanh');
	$(this).next().slideToggle(500);
	$('body').animate({scrollTop:$(this).offset().top
	});
});
	$("a#images1").fancybox();
	$('.ndkhoi').slideUp()
});