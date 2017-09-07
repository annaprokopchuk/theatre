$('.slider-main').slick({
  dots: true,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false
      }
    }
  ]
});

$('.slider-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.slider-gallery-nav',
  centerMode: true
});

$('.slider-gallery-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-gallery',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 539,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

function toggler() {
  $('[data-toggler]').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var hash = $this.attr('href') || $this.data('target');
    if (!hash)
      return false;
    $this.toggleClass('is-active');
    $(hash).toggleClass('is-show');
  })
}

toggler();
