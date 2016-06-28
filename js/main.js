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

	$('.menu__icon-mobile').click(function(){
		$('.navbar--desktop').toggle(1);
		$('.navbar--desktop').css('display', 'flex');
	})

	$('.catalog__icon-mobile').click(function(){
		$('.main__content--nav').toggle(1);
		$('.main__content--nav').css('display', "block")
	})

	$('.language__icon-mobile').click(function(){
		$('.header__languages').toggle(1);
		$('.header__languages').css('display', 'block');
	})

	$('.language__icon-search').click(function(){
		$('.header__search').toggle(1);
		$('.header__search').css('display', 'flex');

	})

	$('.chronology__nav--link').on('click', function(){
		var elementIndex = $('.chronology__nav--link').index(this);
        $('html, body').animate({
        	scrollTop: $('.content__block').eq(elementIndex).offset().top
		}, 1000);
    });

    $('.content__search--form-moreOption').click(function(){
    	$('.advanced__search').toggle(100);
    	$('.advanced__search').css('display', 'block');
    })
})


