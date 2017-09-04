$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: $(".carousel-controls"),
		customDirectionNav: $(".carousel-arrows a")
	});

	$(window).resize(function() {
		if ($('.flexslider').width() < 980) {
			$('.carousel-arrows').css('display', 'none');
		} else {
			$('.carousel-arrows').css('display', 'block');
		}
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.carousel-arrows').css('display', 'none');
	}

	if ($('.flexslider').width() < 980) {
		$('.carousel-arrows').css('display', 'none');
	}
});