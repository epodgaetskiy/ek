$(document).ready(function(){
	$('.language--link').on('click', function(){
		$('.language--link').removeClass('active-link');
		$(this).addClass('active-link');
	});


	$('.navbar--link').on('click', function(){
		$('.navbar--link').removeClass('navbar-active');
		$(this).addClass('navbar-active');
	})

	$('.get_subscription').on('click', function(){
		$(this).prop('checked', false);
		$('.main__getUpdates--container').hide();
		$('.subscribe').show("slow")
	});

	$('.subscribe-close').on('click', function(){
		$('.subscribe').hide("slow");
		$('.main__getUpdates--container').show();
	});

	$('.menu__icon-mobile').on('click', function(){
		if($('.catalog__icon-mobile > i').hasClass('fa-close')) {
			$('.catalog__icon-mobile').trigger('click')
		}
		if($('.language__icon-mobile > i').hasClass('fa-close')) {
			$('.language__icon-mobile').trigger('click')
		}
		$('.navbar--desktop').toggle(1);
		$('.navbar--desktop').css('display', 'flex');
		$('.menu__icon-mobile > i').toggleClass('fa-bars');
		$('.menu__icon-mobile > i').toggleClass('fa-close');
		if( $('.menu__icon-mobile > i').hasClass('fa-close') || $('.catalog__icon-mobile > i').hasClass('fa-close') || $('.language__icon-mobile > i').hasClass('fa-close') ) {
			$('body').bind('touchmove', function(e){ e.preventDefault() });
		} else {
			$('body').unbind('touchmove');
		}
	})

	$('.catalog__icon-mobile').click(function(){
		if($('.menu__icon-mobile > i').hasClass('fa-close')) {
			$('.menu__icon-mobile').trigger('click')
		}
		if($('.language__icon-mobile > i').hasClass('fa-close')) {
			$('.language__icon-mobile').trigger('click')
		}
		$('.main__content--nav').toggle(1);
		$('.main__content--nav').css('display', "block")
		$('.catalog__icon-mobile > i').toggleClass('fa-picture-o');
		$('.catalog__icon-mobile > i').toggleClass('fa-close');
		if( $('.menu__icon-mobile > i').hasClass('fa-close') || $('.catalog__icon-mobile > i').hasClass('fa-close') || $('.language__icon-mobile > i').hasClass('fa-close') ) {
			$('.main__content--art').bind('touchmove', function(e){ e.preventDefault() });
			$('body').css('overflow', 'hidden');
		} else {
			$('.main__content--art').unbind('touchmove');
			$('body').css('overflow', 'auto')
		}
	})

	$('.language__icon-mobile').click(function(){
		if($('.menu__icon-mobile > i').hasClass('fa-close')) {
			$('.menu__icon-mobile').trigger('click')
		}
		if($('.catalog__icon-mobile > i').hasClass('fa-close')) {
			$('.catalog__icon-mobile').trigger('click')
		}
		$('.header__languages').toggle(1);
		$('.header__languages').css('display', 'block');
		$('.language__icon-mobile > i').toggleClass('fa-close');
		if( $('.menu__icon-mobile > i').hasClass('fa-close') || $('.catalog__icon-mobile > i').hasClass('fa-close') || $('.language__icon-mobile > i').hasClass('fa-close') ) {
			$('body').bind('touchmove', function(e){ e.preventDefault() });
		} else {
			$('body').unbind('touchmove');
		}
	})

	$('.language__icon-search').click(function(){
		$('.header__search').toggle(1);
		$('.header__search').css('display', 'flex');
	})

	$('.content__search--form-moreOption').on('click', function(){
		$('.advanced__search').toggle(1);
		$('.advanced__search').css('display', 'block');
	})
	
	$('.chronology__nav--link').on('click', function(){
		var elementIndex = $('.chronology__nav--link').index(this);
        $('html, body').animate({
        	scrollTop: $('.content__block').eq(elementIndex).offset().top
		}, 1000);
    });
})