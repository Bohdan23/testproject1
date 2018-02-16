$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		speed: 900,
        autoplay: false
    });

    // Portfolio images
    $('.portfolio__choose').on('click', 'a', function() {
    	$('.portfolio__choose-btn.active').removeClass('active');
    	$(this).addClass('active');
    });

    $('.portfolio__project').on('click', '.portfolio__project-photo', function() {
    	var img = $(this).find('img').attr('src'),
    		caption = $(this).parents('.portfolio__project').find('.project-caption').text();
    	$('.modal-wrapper').addClass('active');
    	$('.modal-content').attr('src', img);
    	$('.modal-caption').text(caption);

    });
    // Portfolio images

    // Modal window
    $('.modal-wrapper').on('click', '.modal-close', function() {
    	$('.modal-wrapper').removeClass('active');
    });
    $('.modal-wrapper').on('click', function(e) {
        var modal = $('.modal-wrapper');
        if (modal.is(e.target)) {
            modal.removeClass('active')
        }
    });
    $('.modal-box').on('click', function(e) {
        e.stopPropagation();
    })
    // Modal window


    $('.nav__menu').on('click', 'a', function(){
		var idSection = $(this).attr('href'),
			topOfSection = $(idSection).offset().top;

		$('body, html').animate({scrollTop: topOfSection}, 1500);
	});

    // MixItUp jquery plugin
    $(function(){
        $('.portfolio__wrapper').mixItUp({
            selectors: {
                target: '.mix',
                filter: '.portfolio__choose-btn',
            },
            load: {
                filter: 'all'
            },
            controls: {
                enable: true,
                activeClass: 'on'
            },
            animation: {
                enable: true,
                effects: 'scale fade',
                duration: 900
            }
        });
    });
    // End MixItUp jquery plugin

    wow = new WOW({
        mobile: false
    })
    wow.init();
});