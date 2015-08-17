// check for already included jquery and use that
define([], function(){
	if (!window.jQuery) {
		require('jquery');
	}
	
	return window.jQuery;
});