/* carousel.js
 * author:Klaus
 * 2017/9/8
 */
(function() {
	$('.footer-link-mobile .footer-link-row h3 a').click(function(e) {
		if ($(e.target).children('i').prop('class') === 'icon-angle-down') {
			$(e.target).children('i').prop('class', 'icon-angle-up');
			$(e.target).parent().next('ul').slideDown();
		} else {
			$(e.target).children('i').prop('class', 'icon-angle-down');
			$(e.target).parent().next('ul').slideUp();
		}
	});
})();