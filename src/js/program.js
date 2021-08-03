$(document).ready(function(){
	$('.program__button-more').click(function(){
		$('.program__main-paragraph-last').toggleClass('hide');	
		if ($('.program__main-paragraph-last').hasClass('hide')) {
			$('.program__button-more').html('Less');
		} else {
			$('.program__button-more').html('Read more');
		}		
		return false;
	});				
});