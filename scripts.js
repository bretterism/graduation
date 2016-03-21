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
 //    // init controller
	// var controller = new ScrollMagic.Controller();

	// // create a scene
	// new ScrollMagic.Scene({
	//         duration: 100,  // the scene should last for a scroll distance of 100px
	//         offset: 50      // start this scene after scrolling for 50px
	//     })
	//     .setPin("#my-sticky-element") // pins the element for the the scene's duration
	//     .addTo(controller); // assign the scene to the controller
});