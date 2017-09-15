/* header.js
 * author:Klaus
 * 2017/9/15
 */
(function() {
	$('#viewAllModel').click(function(e) {
		$('.header-wrapper').toggle();
		$('.header .header-content .view-all-model').toggle();
		$('.header .header-content .view-all-model .model-type a').eq('0').click();
		e.stopPropagation();
	});

	$('.header .header-content .view-all-model .model-type a').click(function() {
		$(this).parents('ul').children().removeClass('active');
		$(this).parent('li').addClass('active');

		var index = $(this).attr('data-target');
		$('.header .header-content .view-all-model .vehicle ul').removeClass('active');
		$('.header .header-content .view-all-model .vehicle ul').eq(index).addClass('active');
		e.stopPropagation();
	});

	$(window).click(function(e) {
		var isHeader = $(e.target).prop('class') === 'header-wrapper';
		if (isHeader) {
			$('#viewAllModel').click();
		}
	});
})();