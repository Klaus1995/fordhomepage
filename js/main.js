$(window).load(function() {
    $('.flexslider').flexslider({
    	animation: "slide",
    	controlsContainer: $(".carousel-controls"),
    	customDirectionNav: $(".carousel-arrows a")
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.carousel-arrows').css('display','none');
	}
});