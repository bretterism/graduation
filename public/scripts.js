$(document).ready(function() {
	// Initialize

	// disable scrolling
	$('html, body').css({
	    'overflow': 'hidden',
	    'height': '100%'
	});
	// hide down arrow
	$('#downarrow').hide();

	// initialize boostrap switches
	$("[name='attending-open-house']").bootstrapSwitch({
		onText: 'yes',
		offText: 'no',
		size: 'mini'
	});

	// Centers the down arrow and pushes to the bottom
	function alignDownArrow() {
		var downarrHeight = $('#downarrow').height();
		var downarrLeft = ($(window).width() / 2) - ($('.downarr').width() / 2);
		$('.downarr').css('left', downarrLeft);
		$('.downarr').css('height', downarrHeight);
	}
	
	// Aligning the down arrow
	alignDownArrow();
	$(window).resize(function() {
		alignDownArrow();
	});

	// Setting animation for the down arrow
	var tl = new TimelineMax({
		repeat: -1,
		repeatDelay: 5
	});

	tl.to('#downarrow', 0.5, {
	    color:"#fff",
	    textShadow:"3px 0px 10px white, 0px 3px 10px white, -3px 0px 10px white, 0px -3px 10px white"
	});
	tl.to('#downarrow', 0.1, {
		textShadow:"0"
	});
	tl.to('#downarrow', 0.3, {
		color: "rgb(51, 51, 51)"
	});

	// Setting highlighting on the buttons
	$('.flashy').on('mouseover', function() {
		TweenMax.to($(this), 0.2, {
			textShadow:"3px 0px 10px white, 0px 3px 10px white, -3px 0px 10px white, 0px -3px 10px white"
		});
	});

	$('.flashy').on('mouseleave', function() {
		TweenMax.to($(this), 0.1, {
			textShadow: "0"
		});
	});

	// Scroll to the appropriate section on click of the three nav buttons
	$('.fa-graduation-cap').on('click', function() {
		TweenMax.to(window, 2, {scrollTo: {y: $('#scroll-1').position().top - 10}, ease: Power2.easeOut});
	});
	
	$('.fa-laptop').on('click', function() {
		TweenMax.to(window, 2, {scrollTo: {y: $('#scroll-2').position().top - 10}, ease: Power2.easeOut});
	});

	$('.fa-calendar').on('click', function() {
		TweenMax.to(window, 2, {scrollTo: {y: $('#scroll-3').position().top - 10}, ease: Power2.easeOut});
	});

	// Scroll Magic

	// init controller
	var controller = new ScrollMagic.Controller();
	
	// setup the scenes
	var scene0 = new ScrollMagic.Scene({
    	triggerElement: '#scene-0'
  	})
  	.setTween(TweenMax.to($('.container-fluid'), 1, {backgroundColor: '#c6b9bb', ease: Power3.easeOut}))
  	.addTo(controller);

	var scene1 = new ScrollMagic.Scene({
    	triggerElement: '#scene-1'
  	})
  	.setTween(TweenMax.to($('.container-fluid'), 1, {backgroundColor: '#fdd4b4', ease: Power3.easeOut}))
  	.addTo(controller);

  	var scene2 = new ScrollMagic.Scene({
    	triggerElement: '#scene-2'
  	})
  	.setTween(TweenMax.to($('.container-fluid'), 1, {backgroundColor: '#d5e3ce', ease: Power3.easeOut}))
  	.addTo(controller);

  	var scene3 = new ScrollMagic.Scene({
    	triggerElement: '#scene-3'
  	})
  	.setTween(TweenMax.to($('.container-fluid'), 1, {backgroundColor: '#F8FFC7', ease: Power3.easeOut}))
  	.addTo(controller);

  	// the navigation buttons
  	var sceneNav = new ScrollMagic.Scene({
		triggerElement: '#scene-nav',
		offset: "300vh"
	})
	.setPin('#scene-nav')
	.addTo(controller);

	// scroll down on the banner images
	var scrollImg1 = new ScrollMagic.Scene({
			triggerElement: '#banner-1',
			offset: "150vh"
	})
	.setTween(TweenMax.to('#banner-1', 1, {"scrollTo":{y:"max"}, ease: Power2.easeOut}))
	.addTo(controller);
	
	var scrollImg1 = new ScrollMagic.Scene({
			triggerElement: '#banner-2'
	})
	.setTween(TweenMax.to('#banner-2', 1, {"scrollTo":{y:"max"}, ease: Power2.easeOut}))
	.addTo(controller);

	var scrollImg1 = new ScrollMagic.Scene({
			triggerElement: '#banner-3'
	})
	.setTween(TweenMax.to('#banner-3', 1, {"scrollTo":{y:"max"}, ease: Power2.easeOut}))
	.addTo(controller);

	// Set the transition for the background colors after the first page has loaded
  	$('.container-fluid').css({
		"-webkit-transition": "background-color 300ms ease",
    	"-moz-transition": "background-color 300ms ease",
		"transition": "background-color 300ms ease"
	});

  	// Prevents the user from scrolling the banners manually
	$('.scrollable-img').addClass('stop-scrolling');

	// AJAX Forms

	// when the user submits their given code
	$('#code-submit').click(function() {
		var formData = {
			'code': $('#code-inp').val()
		};

		$.ajax({
            type        : 'POST',
            url         : '/code',
            data        : formData,
            dataType    : 'json',
            encode		: true
        })
        .done(function(data) {
			$('.welcome-text').append('Welcome ' + data.name + '!');
			$('#nameInp').val(data.name);
			$('#emailInp').val(data.email);
			$('#ceremonyInp').val(data.ceremonyInp);
			$('#openHouseInp').val(data.openHouseInp);
			$('#notesInp').val(data.notesInp);
			TweenMax.to($('.container-fluid'), 2, {backgroundColor:"#d98c90", ease:Power3.easeOut});
        });
        
        event.preventDefault();
        // put focus on the button instead of the input field.
        // Prevents strange animations
        $('#code-submit').focus();
        TweenLite.to($('#form-code') , 2, {
        	autoAlpha: 0,
			display:'block',
			onComplete: function() {
				// Let the user scroll
				$('html, body').css({
				    'overflow': 'auto',
				    'height': 'auto'
				});
				// reveal the down arrow
				$('#downarrow').show();
				alignDownArrow();

				$('#form-code').html('');
				
				// add selfie
				$('.img-selfie').css('display', 'block');
				TweenLite.from('.img-selfie', 1, {css:{autoAlpha:0}});

			}
		});
	});
});