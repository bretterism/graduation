$(document).ready(function() {
	$("[name='attending-ceremony']").bootstrapSwitch({
		onText: 'yes',
		offText: 'no',
		size: 'mini'
	});
	$("[name='attending-open-house']").bootstrapSwitch({
		onText: 'yes',
		offText: 'no',
		size: 'mini'
	});

	function alignDownArrow() {
		var downarrHeight = $('#downarrow').height();
		var downarrLeft = ($(window).width() / 2) - ($('.downarr').width() / 2);
		$('.downarr').css('left', downarrLeft);
		$('.downarr').css('height', downarrHeight);
	}
	
	alignDownArrow();
	$(window).resize(function() {
		alignDownArrow();
	});

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

	$('.fa-graduation-cap').on('click', function() {
		TweenMax.to(window, 2, {scrollTo: {y: $('#scroll-1').position().top - 10}, ease: Power2.easeOut});
	});
	
	$('.fa-laptop').on('click', function() {
		TweenMax.to(window, 2, {scrollTo: {y: $('#scroll-2').position().top - 10}, ease: Power2.easeOut});
	});

	$('.fa-calendar').on('click', function() {
		TweenMax.to(window, 2, {scrollTo: {y: $('#scroll-3').position().top - 10}, ease: Power2.easeOut});
	});

	// init controller
	var controller = new ScrollMagic.Controller();
	
	var scene0 = new ScrollMagic.Scene({
    	triggerElement: '#scene-0'
  	})
  	.setClassToggle('.container-fluid', 'color0')
  	.addTo(controller);

	var scene1 = new ScrollMagic.Scene({
    	triggerElement: '#scene-1'
  	})
  	.setClassToggle('.container-fluid', 'color1')
  	.addTo(controller);

  	var scene2 = new ScrollMagic.Scene({
    	triggerElement: '#scene-2'
  	})
  	.setClassToggle('.container-fluid', 'color2')
  	.addTo(controller);

  	var scene3 = new ScrollMagic.Scene({
    	triggerElement: '#scene-3'
  	})
  	.setClassToggle('.container-fluid', 'color3')
  	.addTo(controller);

  	var sceneNav = new ScrollMagic.Scene({
		triggerElement: '#scene-nav',
		offset: "300vh"
	})
	.setPin('#scene-nav')
	.addTo(controller);

	var scrollImg1 = new ScrollMagic.Scene({
			triggerElement: '#banner-1'
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

  	$('.container-fluid').css({
		"-webkit-transition": "background-color 300ms ease",
    	"-moz-transition": "background-color 300ms ease",
		"transition": "background-color 300ms ease"
	});

	$('.scrollable-img').addClass('stop-scrolling');
});