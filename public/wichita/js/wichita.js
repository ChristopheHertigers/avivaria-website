(function($) {
	$.fn.ngWichitaMenu = function() {
		var navPri=$(this).find('a');
		var navSec = $('#navsec');

		var menuOpen=false;

		function playAudio(audio)
		{
			if (audio!==undefined) {
				try {
					if (!!(audio.canPlayType)) {
						audio.pause();
						audio.currentTime = 0;
						audio.play();
					}
				}
				catch (err)
				{
				}
			}
		}

		navPri.click(function() {
			var href = $(this).attr('href');

			if (href.substring(0,1)=='#')
			{
				var isOpen = $(this).hasClass('navopen');

				navPri.removeClass('navopen');

				if (!isOpen) {
					$(this).addClass('navopen');
					navSec.children('ul').removeClass('navopen');
					navSec.children(href).addClass('navopen');
					navSec.addClass('navopen');
					if ( !menuOpen) {
						playAudio($('#audioopen')[0]);
						menuOpen=true;
					}
				} else{
					if (menuOpen) {
						playAudio($('#audioclose')[0]);
						menuOpen=false;
					}
					navSec.removeClass('navopen');
				}

				return false;
			}

		});
		return this;
	};
})(jQuery);


$(document).ready(function() {
	$('#navpri>ul').ngWichitaMenu();
});
