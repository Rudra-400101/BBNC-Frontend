(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}
	
	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(100);
				$(target).addClass('active-tab');
			}
		});
	}



	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}


	// banner-carousel
	if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


    // about-carousel
	if ($('.about-carousel').length) {
        $('.about-carousel').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }


    // banner-carousel
	if ($('.banner-carousel-two').length) {
		$('.banner-carousel-two').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-thin-right-straight-arrow"></span>', '<span class="flaticon-thin-right-straight-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},			
				1200:{
					items:2
				}

			}
		});    		
	}


    // single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}


	// two-item-carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-thin-right-straight-arrow"></span>', '<span class="flaticon-thin-right-straight-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},			
				1200:{
					items:2
				}

			}
		});    		
	}


    // three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-right-chevron"></span>', '<span class="flaticon-left-chevron"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},			
				1200:{
					items:3
				}

			}
		});    		
	}


	// four-item-carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-thin-right-straight-arrow"></span>', '<span class="flaticon-thin-right-straight-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},			
				1200:{
					items:4
				}

			}
		});    		
	}


	// five-item-carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-thin-right-straight-arrow"></span>', '<span class="flaticon-thin-right-straight-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},			
				1200:{
					items:5
				}

			}
		});    		
	}


	// case-carousel
	if ($('.case-carousel').length) {
		$('.case-carousel').owlCarousel({
			loop:true,
			margin:110,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-thin-right-straight-arrow"></span>', '<span class="flaticon-thin-right-straight-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},			
				1200:{
					items:4
				}

			}
		});    		
	}


	// case-carousel-two
	if ($('.case-carousel-two').length) {
		$('.case-carousel-two').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}


	// project-carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},			
				1200:{
					items:3
				}

			}
		});    		
	}



	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}

	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();


    // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}


	//Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-toggler').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}


	//nice select
	$(document).ready(function() {
      $('select:not(.ignore)').niceSelect();
    });


	if($('.curved-circle').length) {
        $('.curved-circle').circleType({position: 'absolute', dir: 0.85, radius: 60, forceHeight: true, forceWidth: true});
    }


    //industry-tab
	if($('.industry-tab').length){
		$('.industry-tab .industry-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.industry-tab .industry-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.industry-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}

	if($('.curved-circle-2').length) {
        $('.curved-circle-2').circleType({position: 'absolute', dir: 0.93, radius: 60, forceHeight: true, forceWidth: true});
    }

    if($('.curved-circle-3').length) {
        $('.curved-circle-3').circleType({position: 'absolute', dir: 1.4, radius: -38, forceHeight: true, forceWidth: true});
    }

    if($('.curved-circle-4').length) {
        $('.curved-circle-4').circleType({position: 'absolute', dir: 0.95, radius: 80, forceHeight: true, forceWidth: true});
    }


    // bx-slider
    if ($('.news-style-two .bxslider').length) {
		$('.news-style-two .bxslider').bxSlider({
	        nextText: '<i class="flaticon-down-chevron"></i>',
	        prevText: '<i class="flaticon-down-chevron"></i>',
	        auto: true,
	        mode: 'vertical',
	        maxSlides: 3,
			minSlides: 3,
			moveSlides: 1,
			pause: 5000,
			speed: 700,
			pager: false
	    });
	};


	if ($('.shop-details .bxslider').length) {
		$('.shop-details .bxslider').bxSlider({
	        nextSelector: '.shop-details #slider-next',
	        prevSelector: '.shop-details #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '.shop-details .slider-pager .thumb-box'
	    });
	};


	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 400,
			values: [ 10, 200 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}

	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}

    

	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions

		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});

	

})(window.jQuery);

/* Product js */

function openModal(element) {
	var imageSrc = element.getAttribute('data-image');
	var name = element.getAttribute('data-name');
	var description = element.getAttribute('data-description');
	var thickness = element.getAttribute('data-thickness');
	var type = element.getAttribute('data-type');
	var length = element.getAttribute('data-length');
	var brand = element.getAttribute('data-brand');
	var material = element.getAttribute('data-material');
	var color = element.getAttribute('data-color');
	var width = element.getAttribute('data-width');
	var packaging = element.getAttribute('data-packaging');
	var consumption = element.getAttribute('data-consumption');
	var power = element.getAttribute('data-power');
	var temperatureRange = element.getAttribute('data-temperatureRange');
	var solderingTechnique = element.getAttribute('data-solderingTechnique');
	var displayType = element.getAttribute('data-displayType');
	var automation = element.getAttribute('data-Automation');
	var weight = element.getAttribute('data-weight');
	var model = element.getAttribute('data-model');
	

	
	document.getElementById("modalImage").src = imageSrc;

	if(name == null)
	{document.getElementById("modalName").style.display = "none";}
	else
	{
		document.getElementById("modalName").innerText = name;
		document.getElementById("modalName").style.display = "";
	}
	

	if(description == null)
	{document.getElementById("modalDescription").style.display = "none";}
	else
	{
		document.getElementById("modalDescription").innerText = description;
		document.getElementById("modalDescription").style.display = "";
	}
	

	if(thickness == null)
	{document.getElementById("thicknessTR").style.display = "none";}
	else
	{
		document.getElementById("thickness").innerText = thickness;
		document.getElementById("thicknessTR").style.display = "";
	}
	

	if(type == null)
	{document.getElementById("typeTR").style.display = "none";}
	else 
	{
		document.getElementById("type").innerText = type;
		document.getElementById("typeTR").style.display = "";
	}

	if(length == null)
	{document.getElementById("lengthTR").style.display = "none";}
	else 
	{
		document.getElementById("length").innerText = length;
		document.getElementById("lengthTR").style.display = "";
	}
	

	if(brand == null)
	{document.getElementById("brandTR").style.display = "none";}
	else 
	{
		document.getElementById("brand").innerText = brand;
		document.getElementById("brandTR").style.display = "";
	}
	

	if(material == null)
	{document.getElementById("materialTR").style.display = "none";}
	else 
	{
		document.getElementById("material").innerText = material;
		document.getElementById("materialTR").style.display = "";
	}
	
	

	if(color == null)
	{document.getElementById("colorTR").style.display = "none";}
	else 
	{
		document.getElementById("color").innerText = color;
		document.getElementById("colorTR").style.display = "";
	}

	if(width == null)
	{document.getElementById("widthTR").style.display = "none";}
	else 
	{
		document.getElementById("width").innerText = width;
		document.getElementById("widthTR").style.display = "";
	}

	if(packaging == null)
		{document.getElementById("packagingTR").style.display = "none";}
	else 
	{
		document.getElementById("packaging").innerText = packaging;
		document.getElementById("packagingTR").style.display = "";
	}

	if(consumption == null)
	{document.getElementById("consumptionTR").style.display = "none";}
	else 
	{
		document.getElementById("consumption").innerText = consumption;
		document.getElementById("consumptionTR").style.display = "";
	}

	if(power == null)
	{document.getElementById("powerTR").style.display = "none";}
	else 
	{
		document.getElementById("power").innerText = power;
		document.getElementById("powerTR").style.display = "";
	}
	
	if(temperatureRange == null)
	{document.getElementById("temperatureRangeTR").style.display = "none";}
	else 
	{
		document.getElementById("temperatureRange").innerText = temperatureRange;
		document.getElementById("temperatureRangeTR").style.display = "";
	}
	
	if(solderingTechnique == null)
		{document.getElementById("solderingTechniqueTR").style.display = "none";}
	else 
	{
		document.getElementById("solderingTechnique").innerText = solderingTechnique;
		document.getElementById("solderingTechniqueTR").style.display = "";
	}
	


	if(displayType == null)
	{document.getElementById("displayTypeTR").style.display = "none";}
	else 
	{
		document.getElementById("displayType").innerText = displayType;
		document.getElementById("displayTypeTR").style.display = "";
	}
	
	
	if(automation == null)
	{document.getElementById("automationTR").style.display = "none";}
	else 
	{
		document.getElementById("automation").innerText = automation;
		document.getElementById("automationTR").style.display = "";
	}

	if(weight == null)
	{document.getElementById("weightTR").style.display = "none";}
	else 
	{
		document.getElementById("weight").innerText = weight;
		document.getElementById("weightTR").style.display = "";
	}

	
	if(model == null)
	{document.getElementById("modelTR").style.display = "none";}
	else
	{
		document.getElementById("modelTR").style.display = "";
		document.getElementById("model").innerText = model;
	}
		

	document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
	document.getElementById("imageModal").style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
	var modal = document.getElementById("imageModal");
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
