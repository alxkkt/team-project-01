$(document).ready(function(){
	$('.about__button-more').click(function(){
		$('.about__paragraph-last').toggleClass('about__hide');	
		if ($('.about__paragraph-last').hasClass('about__hide')) {
			$('.about__button-more').html('Less');
		} else {
			$('.about__button-more').html('Read more');
		}		
		return false;
	});				
});