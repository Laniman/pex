var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		fixedPanel = $('.fixed-panel'),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			fixedPanel.addClass( 'fixed-panel-shrink' );
		}
		else {
			fixedPanel.removeClass( 'fixed-panel-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();