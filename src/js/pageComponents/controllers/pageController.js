/**
 * page controller
 * handles routing functions, etc
 * /src/js/pageComponents/controllers/pageController.js
 */
define(['marionette', 'dataController', 'LayoutView'], function(Marionette, dataController, LayoutView) {
	var PageController = Marionette.Object.extend({
		initialize: function() {
			console.log('initializing PageController');
		},
		showIndexPage: function() {
			var layoutView = new LayoutView();
			
			layoutView.render();	
		},
		showSomePage: function() {
			
		}	
	});
	
	return new PageController();
});
