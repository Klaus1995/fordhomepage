/* header.js
 * author:Klaus
 * 2017/9/15
 */
(function() {

	$('#driveTest').click(function() {
		$('.overlay-page').show();
	});

	$('.overlay-page').click(function(e) {
		if ($(e.target).prop('class') === 'overlay-wrapper') {
			$('.overlay-page').hide();
		}
		e.stopPropagation();
	});

	$('.overlay-page #closeBtn').click(function() {
		$('.overlay-page').hide();
	});
})();