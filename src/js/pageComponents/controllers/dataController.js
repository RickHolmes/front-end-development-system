/**
 * data Controller
 * stub of a data controller
 * /src/js/pageComponents/dataController.js
 * returns an instance
 */
define(['marionette', 'radio', 'collection'], function(Marionette, Radio, Collection) {
	var DataController = Marionette.Object.extend({
		initialize: function() {
			console.log('initializing DataController');
			
			// build the collection, in this case bootstrapped by global js object
			this.collection = new Collection(bootstrappedData);
			
			// Marionette will be using Backbone.Radio in the future, so we will use it now
			this.dataChannel = Backbone.Radio.channel('data');
			
			this.buildDataChannel();
		},
		buildDataChannel: function() {
			var self = this;
			
			// commands to do something with the data
			this.dataChannel.comply({
					
			});
			
			// data requests
			this.dataChannel.reply({
				'getCollection': function() {
					return self.collection;
				}	
			});
		}
	});
	
	return new DataController();
});