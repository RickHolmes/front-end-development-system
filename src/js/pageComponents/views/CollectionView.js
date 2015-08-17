/**
 * collection view
 * /src/js/pageComponents/views/CollectionView.js
 */
define(['marionette', 'ItemView'], function(Marionette, ItemView) {
	return Marionette.CollectionView.extend({
		initialize: function() {
			console.log('initializing CollectionView');
		},
		childView: ItemView,
		tagName: 'ul',
		attributes: {
			'class': 'pure-menu-list'
		}
	});
});
