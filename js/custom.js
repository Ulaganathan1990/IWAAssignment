var SCO_OBJ = SCO_OBJ || {};

(function ($) {
    "use strict";

    SCO_OBJ.isRTL = {
        check: function () {
            if ($("html").attr("dir") == "rtl") {
                return true;
            } else {
                return false;
            }
        }
    };

    SCO_OBJ.initialize = {
        init: function () {
            SCO_OBJ.initialize.TM_resizeFullscreen();
            SCO_OBJ.initialize.TM_magnificPopup_lightbox();
            SCO_OBJ.initialize.TM_prettyPhoto_lightbox();
            SCO_OBJ.initialize.TM_equalHeightDivs();
        },
        /* ---------------------------------------------------------------------- */
        /* --------------------------- Home Resize Fullscreen ------------------- */
        /* ---------------------------------------------------------------------- */
        TM_resizeFullscreen: function () {
            var windowHeight = $window.height();
            $('.fullscreen, .revslider-fullscreen').height(windowHeight);
        },
        /* ---------------------------------------------------------------------- */
        /* ----------------------------- Magnific Popup ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_magnificPopup_lightbox: function () {

            $('.image-popup-lightbox').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                }
            });

            $('.image-popup-vertical-fit').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }
            });

            $('.image-popup-fit-width').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: false
                }
            });

            $('.image-popup-no-margins').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });

            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });

            $('.zoom-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function (item) {
                        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function (element) {
                        return element.find('img');
                    }
                }

            });

            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });

            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });

            $('.popup-with-move-anim').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });

            $('.popup-with-form').magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '#name',
                mainClass: 'mfp-no-margins mfp-fade',
                closeBtnInside: false,
                fixedContentPos: true,
                // When elemened is focused, some mobile browsers in some cases zoom in
                // It looks not nice, so we disable it:
                callbacks: {
                    beforeOpen: function () {
                        if ($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '#name';
                        }
                    }
                }
            });

            /*================================
             portfolio magnificPopup
             ================================*/
            var $lightboxImage = $('[data-lightbox="image"]'),
                    $lightboxGallery = $('[data-lightbox="gallery"]'),
                    $lightboxIframe = $('[data-lightbox="iframe"]'),
                    $lightboxInline = $('[data-lightbox="inline"]');

            //lightbox image
            if ($lightboxImage.length > 0) {
                $lightboxImage.magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    fixedContentPos: true,
                    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                    image: {
                        verticalFit: true
                    }
                });
            }

            //lightbox gallery
            if ($lightboxGallery.length > 0) {
                $lightboxGallery.each(function () {
                    var element = $(this);
                    element.magnificPopup({
                        delegate: 'a[data-lightbox="gallery-item"]',
                        type: 'image',
                        closeOnContentClick: true,
                        closeBtnInside: false,
                        fixedContentPos: true,
                        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                        image: {
                            verticalFit: true
                        },
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                        },
                        zoom: {
                            enabled: true,
                            duration: 300, // don't foget to change the duration also in CSS
                            opener: function (element) {
                                return element.find('img');
                            }
                        }

                    });
                });
            }

            //lightbox iframe
            if ($lightboxIframe.length > 0) {
                $lightboxIframe.magnificPopup({
                    disableOn: 600,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

            //lightbox inline
            if ($lightboxInline.length > 0) {
                $lightboxInline.magnificPopup({
                    type: 'inline',
                    mainClass: 'mfp-no-margins mfp-zoom-in',
                    closeBtnInside: false,
                    fixedContentPos: true
                });
            }
        },
        /* ---------------------------------------------------------------------- */
        /* ----------------------------- lightbox popup ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_prettyPhoto_lightbox: function () {
            //prettyPhoto lightbox
            $("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: 'data-rel',
                animation_speed: 'normal',
                theme: 'light_square',
                slideshow: 3000,
                autoplay_slideshow: false,
                social_tools: false
            });
        },
        /* ---------------------------------------------------------------------- */
        /* ---------------------------- equalHeights ---------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_equalHeightDivs: function () {
            /* equal heigh */
            var $equal_height = $('.equal-height');
            $equal_height.children('div').css('min-height', 'auto');
            $equal_height.equalHeights();

            /* equal heigh inner div */
            var $equal_height_inner = $('.equal-height-inner');
            $equal_height_inner.children('div').css('min-height', 'auto');
            $equal_height_inner.children('div').children('div').css('min-height', 'auto');
            $equal_height_inner.equalHeights();
            $equal_height_inner.children('div').each(function () {
                $(this).children('div').css('min-height', $(this).css('min-height'));
            });
        }

    };

    SCO_OBJ.header = {
        init: function () {

            var t = setTimeout(function () {
                SCO_OBJ.header.TM_scroolToTopOnClick();
                SCO_OBJ.header.TM_menuzord();
            }, 0);

        },
        /* ---------------------------------------------------------------------- */
        /* ------------------------------- scrollToTop  ------------------------- */
        /* ---------------------------------------------------------------------- */
        TM_scroolToTop: function () {
            if ($window.scrollTop() > 600) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        },
        TM_scroolToTopOnClick: function () {
            $(document.body).on('click', '.scrollToTop', function (e) {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        },
        /* ----------------------------------------------------------------------------- */
        /* --------------------------- Menuzord - Responsive Megamenu ------------------ */
        /* ----------------------------------------------------------------------------- */
        TM_menuzord: function () {
            $("#menuzord").menuzord({
                align: "left",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
            $("#menuzord-right").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
            $("#menuzord-side-panel").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-right'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });

            $("#menuzord-verticalnav").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-right'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
        },

    };

    SCO_OBJ.widget = {
        init: function () {
            var t = setTimeout(function () {
                SCO_OBJ.widget.TM_masonryIsotop();
            }, 0);
        },
        /* ---------------------------------------------------------------------- */
        /* ----------------------------- Masonry Isotope ------------------------ */
        /* ---------------------------------------------------------------------- */
        TM_masonryIsotop: function () {
            var isotope_mode;
            if ($portfolio_gallery.hasClass("masonry")) {
                isotope_mode = "masonry";
            } else {
                isotope_mode = "fitRows";
            }

            //isotope firsttime loading
            $portfolio_gallery.imagesLoaded(function () {
                $portfolio_gallery.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: isotope_mode,
                    filter: "*"
                });
            });

            //isotope filter
            $(document.body).on('click', portfolio_filter, function (e) {
                $(portfolio_filter).removeClass("active");
                $(this).addClass("active");
                var fselector = $(this).data('filter');

                $portfolio_gallery.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: isotope_mode,
                    filter: fselector
                });
                return false;
            });

        },
        /* ---------------------------------------------------------------------- */

    };

    SCO_OBJ.slider = {
        init: function () {

            var t = setTimeout(function () {
                SCO_OBJ.slider.TM_owlCarousel();
            }, 0);

        },
        /* ---------------------------------------------------------------------- */
        /* -------------------------------- Owl Carousel  ----------------------- */
        /* ---------------------------------------------------------------------- */
        TM_owlCarousel: function () {
            $('.owl-carousel-3col').each(function () {
                var data_dots = ($(this).data("dots") === undefined) ? false : $(this).data("dots");
                var data_nav = ($(this).data("nav") === undefined) ? false : $(this).data("nav");
                var data_duration = ($(this).data("duration") === undefined) ? 4000 : $(this).data("duration");
                $(this).owlCarousel({
                    rtl: SCO_OBJ.isRTL.check(),
                    autoplay: true,
                    autoplayTimeout: data_duration,
                    loop: true,
                    items: 3,
                    margin: 15,
                    dots: data_dots,
                    nav: data_nav,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        600: {
                            items: 1,
                            center: false
                        },
                        750: {
                            items: 2,
                            center: false
                        },
                        960: {
                            items: 2
                        },
                        1170: {
                            items: 3
                        },
                        1300: {
                            items: 3
                        }
                    }
                });
            });
        },
    };

    SCO_OBJ.documentOnResize = {
        init: function () {

            var t = setTimeout(function () {
                SCO_OBJ.initialize.TM_equalHeightDivs();
                SCO_OBJ.initialize.TM_resizeFullscreen();
            }, 0);

        }

    };

    SCO_OBJ.documentOnLoad = {
        init: function () {

            $window.trigger("scroll");
            $window.trigger("resize");

        }

    };

    SCO_OBJ.documentOnReady = {
        init: function () {
            SCO_OBJ.initialize.init();
            SCO_OBJ.header.init();
            SCO_OBJ.slider.init();
            SCO_OBJ.widget.init();
            SCO_OBJ.documentOnReady.windowscroll();
        },
        windowscroll: function () {

            $window.on('scroll', function () {

                SCO_OBJ.header.TM_scroolToTop();
                SCO_OBJ.header.TM_activateMenuItemOnReach();
                SCO_OBJ.header.TM_topnavAnimate();
            });
        }

    };

    /* ---------------------------------------------------------------------- */
    /* -------------------------- Declare Variables ------------------------- */
    /* ---------------------------------------------------------------------- */
    var $window = $(window),
            $html = $('html'),
            $body = $('body'),
            $wrapper = $('#wrapper'),
            $header = $('#header'),
            $footer = $('#footer'),
            $sections = $('section'),
            $portfolio_gallery = $(".portfolio-gallery"),
            portfolio_filter = ".portfolio-filter a",
            $portfolio_filter_first_child = $(".portfolio-filter a:eq(0)"),
            $portfolio_flex_slider = $(".portfolio-slider");

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- Call Functions -------------------------- */
    /* ---------------------------------------------------------------------- */
    $(document).ready(SCO_OBJ.documentOnReady.init);
    $window.load(SCO_OBJ.documentOnLoad.init);
    $window.on('resize', SCO_OBJ.documentOnResize.init);

})(jQuery);