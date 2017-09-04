$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: $(".carousel-controls"),
		customDirectionNav: $(".carousel-arrows a")
	});

	checkMobile();

	checkWidthAndHeight();

	$(window).resize(function() {
		checkWidthAndHeight();
	});

	function checkWidthAndHeight() {
		if ($('.flexslider').width() < 980) {
			$('.carousel-arrows').css('display', 'none');
		} else {
			$('.carousel-arrows').css('display', 'block');
		}

		if ($('.flexslider').width() < 480) {
			$('.carousel-controls').css('bottom', '55px');
		} else {
			$('.carousel-controls').css('bottom', '75px');
		}
	}

	function checkMobile() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			$('.carousel-arrows').css('display', 'none');
		}
	}
});