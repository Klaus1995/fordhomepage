/* carousel.js
 * author:Klaus
 * 2017/9/5
 */
(function() {

	var api = {};

	api.init = function() {
		$(window).load(function() {
			$('.flexslider').flexslider({
				animation: "slide",
				controlsContainer: $(".carousel-controls"),
				customDirectionNav: $(".carousel-arrows a")
			});
		});

		checkWidthAndHeight();
	};

	//初始化
	api.init();

	//事件
	$(window).resize(function() {
		checkWidthAndHeight();
	});

	//方法
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

	// function checkMobile() {
	// 	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// 		$('.carousel-arrows').css('display', 'none');
	// 	}
	// }
})();