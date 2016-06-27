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
		$('.navbar').toggle(100);
		$('.navbar').css('display', 'flex');
	})

	$('.catalog__icon-mobile').click(function(){
		$('.main__content--nav').toggle(100);
		$('.main__content--nav').css('display', "block")
	})

	$('.language__icon-mobile').click(function(){
		$('.header__languages').toggle(200);
		$('.header__languages').css('display', 'block');
	})

	$('.chronology__nav--link').on('click', function(){
		var elementIndex = $('.chronology__nav--link').index(this);
        $('html, body').animate({
        	scrollTop: $('.content__block').eq(elementIndex).offset().top
		}, 1000);
    });

    $('.advanced__search--toggle').click(function(e){
    	e.preventDefault();
    	$('.advanced__search').toggle(200);
    	$('.advanced__search').css('display', 'block')
    })
})


