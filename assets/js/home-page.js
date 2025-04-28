/* Main Slider Start */
if($('.mainSlider').length > 0){
    $('.mainSlider').owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        // navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        lazyLoad: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoWith: true,
        smartSpeed: 1000,
        responsiveClass: true,
        mouseDrag: false,
        video: true,
        responsiveRefreshRate: 100,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                scrollPerPage: true
            },
            1000: {
                items: 1,
            },
        }
    });
}
/* Main Slider End */