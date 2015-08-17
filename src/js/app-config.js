/**
 * app-config.js
 * require.js configuration file for app
 * location: /src/js/app-config.js
 */
require.config({
	urlArgs: "ts="+new Date().getTime(), // disables caching - remove in production
	
	// paths of required files relative to this file
	// do not include file exensions
	paths: {
		/**
		 * vendor files
		 */
		// Backbone requires jQuery or Zepto, so there are a number of options for "requiring" it, depending on the situation
		// if jQuery not already loaded on the page and it is to be used
		//'jquery': 'vendor/jquery-10.1.2.min',
		
		// OR if Zepto may be used instead if applicable
		//'jquery': 'vendor/zepto-decide-min',
		
		// OR if jQuery is already loaded by the main site/application
		'jquery': 'vendor/jquery-loaded',
		
		// OR if you do not know if jQuery is loaded but you want it
		//'jquery': 'vendor/jquery-existing',
		
		// underscore is also a requirement for Backbone, but may be replaced by Lodash
		'underscore': 'vendor/underscore-min',
		//'underscore': 'vendor/lodash',
		
		'backbone': 'vendor/backbone-min',
		
		// Backbone plugins		
		'backbone-associations': 'vendor/backbone-associations',
		'backbone-relational': 'vendor/backbone-relational', 
		'backbone-validation': 'vendor/backbone-validation-amd', 
		'validationExtensions': 'vendor/backbone-validation-extensions',
		
		'marionette': 'vendor/backbone.marionette.min',
		
		// Marionette will be deprecating its internal command channels to use Backbone.Radio, so do that now
		'radio': 'vendor/backbone.radio.min',
		
		// a pre-parser to allow external, non-js file to be used for templates	
		// handlebars (with an extension) may also be used if you do not need as much logic in the template	
		'text': 'vendor/text',
		
		/**
		 * utilities -- anything that you might need
		 */
		'Moment': 'utilities/moment',
		'Numeral': 'utilities/numeral.min',
		// animations
		'Velocity': 'utilities/velocity.min',
		'VelocityUI': 'utilities/velocity.ui',
		// responsiveness, use media-match plugin for very old browsers
		'Enquire': 'enquire.min',
		
		/**
		 * pageComponents
		 */
		// models
		'model': 'pageComponents/models/model',
		
		// collections
		'collection': 'pageComponents/collections/collection',
		
		// views
		'ItemView': 'pageComponents/views/ItemView',
		'CollectionView': 'pageComponents/views/CollectionView',
		'LayoutView': 'pageComponents/views/LayoutView',
		
		// template helpers
		'commonHelpers': 'pageComponents/templates/commonHelpers',
		
		// controllers
		'dataController': 'pageComponents/controllers/dataController',
		'pageController': 'pageComponents/controllers/pageController',
		
		// and the app itself
		'app': 'pageComponents/app' // this does not seem to be used for some reason
		
	},
	
	shim: {
		'underscore': {
			deps: ['jquery'],
			exports: '_'
		},
		'backbone': {
			deps: ['underscore'],
			exports: 'Backbone'
		},
		'backbone-validation': { 
			deps: ['backbone']
		},
		'validationExtensions': {
			deps: ['backbone-validation']
		},
		'backbone-radio': {
			deps: ['backbone']
		},
		'backbone-associations': {
			deps: ['backbone']
		},
		'backbone-relational': {
			deps: ['backbone']	
		},
		'marionette': {
			deps: ['backbone'],
			exports: 'Marionette'
		},
		'VelocityUI': {
			deps: ['Velocity']
		}
	} 
	
	/* map: {
		'*': {
			'app': 'pageComponents/app'
		}
	} */
});
