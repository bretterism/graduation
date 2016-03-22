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

});