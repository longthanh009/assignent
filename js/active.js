(function ($) {
    const $window = $(window);

    // :: 1.0 Masonary Gallery Active Code

    const proCata = $(".amado-pro-catagory");
    const singleProCata = ".single-products-catagory";

    if ($.fn.imagesLoaded) {
        proCata.imagesLoaded(() => {
            proCata.isotope({
                itemSelector: singleProCata,
                percentPosition: true,
                masonry: {
                    columnWidth: singleProCata,
                },
            });
        });
    }
    const btnNav = document.querySelectorAll(".js_active");
    // :: 2.1 Search Active Code
    const amadoSearch = $(".search-nav");
    const searchClose = $(".search-close");

    amadoSearch.on("click", () => {
        $("body").toggleClass("search-wrapper-on");
    });

    searchClose.on("click", () => {
        $("body").removeClass("search-wrapper-on");
    });

    // :: 2.2 Mobile Nav Active Code
    const amadoMobNav = $(".amado-navbar-toggler");
    const navClose = $(".nav-close");

    amadoMobNav.on("click", () => {
        $(".header-area").toggleClass("bp-xs-on");
    });

    navClose.on("click", () => {
        $(".header-area").removeClass("bp-xs-on");
    });

    // :: 3.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: "easeInOutQuart",
            scrollText: "<i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>",
        });
    }

    // :: 4.0 Sticky Active Code
    $window.on("scroll", () => {
        if ($window.scrollTop() > 0) {
            $(".header_area").addClass("sticky");
        } else {
            $(".header_area").removeClass("sticky");
        }
    });

    // :: 5.0 Nice Select Active Code
    if ($.fn.niceSelect) {
        $("select").niceSelect();
    }

    // :: 6.0 Magnific Active Code
    if ($.fn.magnificPopup) {
        $(".gallery_img").magnificPopup({
            type: "image",
        });
    }

    // :: 7.0 Nicescroll Active Code
    if ($.fn.niceScroll) {
        $(".cart-table table").niceScroll();
    }

    // :: 8.0 wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $("[data-toggle=\"tooltip\"]").tooltip();
    }

    // :: 10.0 PreventDefault a Click
    $("a[href='#']").on("click", ($) => {
        $.preventDefault();
    });

    // :: 11.0 Slider Range Price Active Code
    $(".slider-range-price").each(function () {
        const min = jQuery(this).data("min");
        const max = jQuery(this).data("max");
        const unit = jQuery(this).data("unit");
        const value_min = jQuery(this).data("value-min");
        const value_max = jQuery(this).data("value-max");
        const label_result = jQuery(this).data("label-result");
        const t = $(this);
        $(this).slider({
            range: true,
            min,
            max,
            values: [value_min, value_max],
            slide(event, ui) {
                const result = `${label_result} ${unit}${ui.values[0]} - ${unit}${ui.values[1]}`;
                console.log(t);
                t.closest(".slider-range").find(".range-price").html(result);
            },
        });
    });
}(jQuery));