/**
 * main.js
 * "main" file for the single-page application
 * loads the config file, the application file and starts the application
 * location: /src/js/main.js
 */

require(['app-config'], function() {
	require(['pageComponents/app'], function(App) {
		App.start();
	});
});