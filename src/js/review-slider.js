$(document).ready(function(){
    $('.slider').slick(
        {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            asNavFor: '.text-slider',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
              ]
        }
    );
    $('.text-slider').slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider',
        }
    );
});