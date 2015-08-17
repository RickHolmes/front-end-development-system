/**
 * common template helpers
 * these are template helpers used by various views
 * additional methods are added by the dataController when data is available
 * location: /src/js/pageComponents/templates/commonHelpers.js
 */
define([], function() {

	// some template helpers common to all pages
	return {
		dateToEnglish: function(datestring) { 
			var d = new Date(datestring+'T20:00:00-04:00'),
				monthsArr = [
					'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
				];
			
			return monthsArr[d.getMonth()] + ' ' + d.getDate();						
		},
		toCurrency: function(amt) {
			// make it a string
			if (typeof amt === 'string') {
				amt = Float(amt);
			};
			amt = '$' + amt.toFixed(2);
			return amt;
		},
		fromCurrency: function(amt) {
			amt = amt.replace('$', '');
			amt = amt.replace(',', '');
			return amt;
		},
		thisYear: function() {
			return new Date().getFullYear()
		}
	};
	
});
