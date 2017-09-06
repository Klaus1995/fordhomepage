/* carousel.js
 * author:Klaus
 * 2017/9/5
 */
(function() {

	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: $(".carousel-controls"),
		customDirectionNav: $(".carousel-arrows a")
	});

	checkWidthAndHeight();

	$(window).resize(function() {
		checkWidthAndHeight();
	});

	function checkWidthAndHeight() {
		var navigatorWidth = $('.flexslider').width() + 12;
		if (navigatorWidth < 980) {
			$('.carousel-arrows').css('display', 'none');
		} else {
			$('.carousel-arrows').css('display', 'block');
		}

		if (navigatorWidth < 480) {
			$('.carousel-controls').css('bottom', '55px');
		} else {
			$('.carousel-controls').css('bottom', '75px');
		}
	}
})();