/**
 * collection stub
 * /src/js/pageComponents/collections/collection.js
 */
define(['backbone', 'model'], function(Backbone, Model) {
	return Backbone.Collection.extend({
		initialize: function() {
			console.log('initializing collection');
		},
		model: Model	
	});
});