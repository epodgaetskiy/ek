$(document).ready(function(){
	$('.language--link').on('click', function(){
		$('.language--link').removeClass('active-link');
		$(this).addClass('active-link');
	});


	$('.navbar--link').on('click', function(){
		$('.navbar--link').removeClass('navbar-active');
		$(this).addClass('navbar-active');
	})
})
