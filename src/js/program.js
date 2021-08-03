$(document).ready(function(){
	$('.program__button-more').click(function(){
		$('.program__main-paragraph-last').toggleClass('program__hide');	
		if ($('.program__main-paragraph-last').hasClass('program__hide')) {
			$('.program__button-more').html('Less');
		} else {
			$('.program__button-more').html('Read more');
		}		
		return false;
	});				
});