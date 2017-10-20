function toggler() {
    $("[data-toggler]").on("click", function(e) {
        e.preventDefault();
        var s = $(this), r = s.attr("href") || s.data("target");
        if (!r) return !1;
        s.toggleClass("is-active"), $(r).toggleClass("is-show");
    });
}

$(".slider-main").slick({
    dots: !0,
    vertical: !0,
    verticalSwiping: !0,
    arrows: !1,
    responsive: [ {
        breakpoint: 1025,
        settings: {
            vertical: !1,
            verticalSwiping: !1
        }
    } ]
}), $(".slider-gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    dots: !1,
    asNavFor: ".slider-gallery-nav",
    centerMode: !0
}), $(".slider-gallery-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-gallery",
    dots: !1,
    arrows: !1,
    focusOnSelect: !0,
    centerMode: !0,
    centerPadding: "0px",
    responsive: [ {
        breakpoint: 539,
        settings: {
            slidesToShow: 3
        }
    } ]
}), toggler();