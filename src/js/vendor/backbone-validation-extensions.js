// extensions for Backbone.Validation
define(['jquery', 'underscore', 'backbone', 'backbone-validation'], function($, _, Backbone, Validation){
	
	// add some validation patterns not included in library
	_.extend(Backbone.Validation.patterns, {
		basicname: /^[a-z\-.,()'"\s]+$/i,
		phoneUS: /^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/,
		address: /^[a-z0-9\-'.,#\s]+$/i,
		zipcodeUS: /\d{5}-\d{4}$|^\d{5}$/
	});
	
	// default messages for patterns above
	_.extend(Backbone.Validation.messages, {
		basicname: 'The name can only contain letters, periods, commas, hypens and apostrophes',
		phoneUS: 'Please specify a valid phone number in the format "xxx-xxx-xxxx"',
		address: 'The address can only contain letters, numbers, periods, commas, hypens and apostrophes',
		zipcodeUS: 'This does not look like a valid zipcode'
	});
	
	// and some functions
	_.extend(Backbone.Validation.validators, {
		nonzero: function(value, attr, customValue, model) {
			if (isNaN(value) && parseFloat(value, 10) <= 0)	{
				return 'The value must be a number greater than 0';
			}
		},
		// format is MMYYYY
		expiry: function(value) {
			try {
				
			
			var now = new Date(),
				month = parseInt(value.slice(0, 2), 10),
				year = parseInt('20' + value.slice(4), 10),
				expiryDate = new Date(year, month, 1);
							
			if (now.valueOf() > expiryDate.valueOf()) {
				return 'The credit card has expired';	
			}
			} catch(err){}
		},
		creditcardvin: function(value, attr, customValue, model) {
			try {
			var ccNumber = $('#paymentCC').val(),
				vinLength;
			
			if (value === '') return; // to avoid error when simply clicking out?
			
			if (/^(3[47])/.test(ccNumber)) { // amex
				vinLength = 4;
			} else { // all others
				vinLength = 3;
			}
			
			if (value.length !== vinLength) {
				return 'The security code is not correct for this type of credit card';
			}
			} catch(err) {}
		},
		creditcardtypes: function(value, attr, param, model) { 
			var retval = 'We do not accept this type of credit card',
				validTypes = 0x0000;
			
			if (value === '') return; // to avoid error message if user simply clicks out of number field
			
			if ((/[^0-9\-]+/).test(value)) {
				return retval;
			}

			value = value.replace(/\D/g, "");
			
			if (param.mastercard) {
				validTypes |= 0x0001;
			}
			if (param.visa) {
				validTypes |= 0x0002;
			}
			if (param.amex) {
				validTypes |= 0x0004;
			}
			if (param.dinersclub) {
				validTypes |= 0x0008;
			}
			if (param.enroute) {
				validTypes |= 0x0010;
			}
			if (param.discover) {
				validTypes |= 0x0020;
			}
			if (param.jcb) {
				validTypes |= 0x0040;
			}
			if (param.unknown) {
				validTypes |= 0x0080;
			}
			if (param.all) {
				validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
			} 
			if (validTypes & 0x0001 && /^(5[12345])/.test(value)) { //mastercard
				return value.length === 16 ? '': retval;
			}
			if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
				return value.length === 16 ? '': retval;
			}
			//if (validTypes & 0x0004 && /^(3[47])/.test(value)) { //amex
			if (validTypes & 0x0004 && /^(34|37)/.test(value)) {
				return value.length === 15 ? '': retval;
			}
			if (validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test(value)) { //dinersclub
				return value.length === 14 ? '': retval;
			}
			if (validTypes & 0x0010 && /^(2(014|149))/.test(value)) { //enroute
				return value.length === 15 ? '': retval;
			}
			if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
				return value.length === 16 ? '': retval;
			}
			if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
				return value.length === 16 ? '': retval;
			}
			if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
				return value.length === 15 ? '': retval;
			}
			if (validTypes & 0x0080) { //unknown
				return retval;
			}
			return retval;									
		},
		creditcard: function(value){
			var retval = 'The value is not a valid credit-card number',
				nCheck = 0,
				nDigit = 0,
				bEven = false,
				n,
				cDigit;
			
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test(value) ) {
				return retval;
			}
		
			value = value.replace(/\D/g, "");
		
			for (n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}
		
			return (nCheck % 10) === 0 ? '': retval;					
		}		
	});
	
	
});
