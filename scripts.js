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

  	$('.container-fluid').css({
		"-webkit-transition": "background-color 300ms ease",
    	"-moz-transition": "background-color 300ms ease",
		"transition": "background-color 300ms ease"
	});
});