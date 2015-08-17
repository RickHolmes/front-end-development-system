/*!
app.js -- the application itself
*/

define([
	'marionette', 'pageController'
], function(
	Marionette, pageController
	) {
	// create the master application
	var App = new Marionette.Application();
	
	// set the cross-domain stuff for jQuery, not needed in final
	App.on('before:start', function() {
		Backbone.$.support.cors = true;
        Backbone.$.ajaxSetup({
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        });
        
        // create the layout using the top-level view
        
	});
	
	// get any data needed from the controller
	App.on('before:start', function() {

	});
	
	
	// set up the routing if needed
	App.on('before:start', function() {
		var AppRouter = Marionette.AppRouter.extend({
			appRoutes: {
				'': 'index', //
				'somepage': 'somePage'
			},
			controller: {
				index: function() {
					Backbone.history.navigate('');
					pageController.showIndexPage();
				},
				somePage: function() { 
					pageController.showSomePage();
				}
			} 
		});
		
		App.router = new AppRouter();
	});
	
	App.on('start', function() {
		// if routing
		if (!Backbone.history.started) { 
			Backbone.history.start();
		}
	});
	
	
	return App;
});
