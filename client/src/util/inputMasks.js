import $ from 'jquery';
import 'jquery-mask-plugin';

export const maskInputs = () => {
	$('#longitude, #latitude').mask('X99Z.99999999', {
		translation: {
			X: {
				pattern: /^[+-]/,
				optional: true,
			},
			Z: {
				pattern: /[0-9]/,
				optional: true,
			},
		},
	});

	$('#houseNumber').mask('XXXXXX', {
		translation: {
			X: {
				pattern: /[0-9]/,
				optional: false,
			},
		},
	});

	$('#residents').mask('XX', {
		translation: {
			X: {
				pattern: /[0-9]/,
				optional: false,
			},
		},
	});
};
