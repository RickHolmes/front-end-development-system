/**
 * layout view
 * /src/js/pageComponents/views/LayoutView.js
 */
define(['marionette', 'text!pageComponents/templates/layoutViewTemplate.tpl', 'CollectionView', 'dataController'], 
function(Marionette, tpl, CollectionView, dataController) {
	return Marionette.LayoutView.extend({
		initialize: function() { 
			console.log('LayoutView initialized');
			
			this.listenTo(this, 'render', function() {
				this.navContainer.show(
					new CollectionView({
						collection: dataController.dataChannel.request('getCollection')
					})
				);	
			}, this);
		},
		regions: {
			'navContainer': '#nav-container'
		},
		el: '#mainnav',
		template: _.template(tpl)
	});
});
