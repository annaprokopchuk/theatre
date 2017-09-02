$('.slider').slick({
    dots: true,
	vertical: true,
 	verticalSwiping: true,
 	arrows: false
	// autoplay: true,
 //    autoplaySpeed: 2000,
});

function toggler() {
		$('[data-toggler]').on('click', function(e) {
    	var $this = $(this);
      var hash = $this.attr('href') || $this.data('target');
      if (!hash) return false;
      $this.toggleClass('is-active');
      $(hash).toggleClass('is-show');
    })
}

toggler();