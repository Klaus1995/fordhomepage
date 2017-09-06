(function() {
	var prevWidth = $('.flexslider').width() + 12;
	var prevDOM = $('.brand-gallery .item-wrapper').children().clone();
	console.log(prevDOM)

	checkWidthForMobile();

	$('.brand-gallery .toggleBtn').click(function() {
		if ($('.more').css('display') === 'none') {
			$('.more').css('display', 'block');
			$('.less').css('display', 'none');
			$('.brand-gallery .item-wrapper .hide-for-mobile').slideUp();
		} else {
			$('.more').css('display', 'none');
			$('.less').css('display', 'block');
			$('.brand-gallery .item-wrapper .hide-for-mobile').slideDown();
		}
	});

	$(window).resize(function() {
		checkWidthForMobile();
		console.log(prevDOM)
	});

	function checkWidthForMobile() {
		var navigatorWidth = $('.flexslider').width() + 12;
		if (navigatorWidth < 768) {
			$('.brand-gallery .item-wrapper .hide-for-mobile').append($('.brand-gallery .item-wrapper div[data-mobile-display=hide]'));
			if (prevWidth >= 768) {
				$('.brand-gallery .item-wrapper .hide-for-mobile').css('display', 'none');
				$('.more').css('display', 'block');
				$('.less').css('display', 'none');
			}
		} else {
			//$('.brand-gallery .item-wrapper .hide-for-mobile').css('display', 'block');
			$('.brand-gallery .item-wrapper').html(prevDOM);
		}
		prevWidth = navigatorWidth;
	}
})();