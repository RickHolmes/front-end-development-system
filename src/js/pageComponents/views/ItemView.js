/**
 * view stub
 * /src/js/pageComponents/views/ItemView.js
 */
define(['jquery', 'marionette', 'text!pageComponents/templates/itemViewTemplate.tpl'], function($, Marionette, tpl) {
	return Marionette.ItemView.extend({
		initialize: function() {
			console.log('ItemView initialized');
		},
		template: _.template(tpl),
		tagName: 'li',
		attributes: {
			'class': 'pure-menu-item'
		},
		events: {
			'click a': 'openWindow'
		},
		openWindow: function(e) {
			e.preventDefault();
			var href = $(e.currentTarget).attr('href'),
				newWin = window.open(href, '', 'toolbar,menubar,status,resizable,scrollbars');	
		}
	});
});