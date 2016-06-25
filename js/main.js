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
	})

	$('.mobile-menu').click(function(){
		$('.main__content--nav').show("slow")
	})

	$('.mobile-close').click(function(){
		$('.main__content--nav').hide("slow")
	})
})


