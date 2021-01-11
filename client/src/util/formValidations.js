export const validateLatitudeAndLongitude = (formValues, errors) => {
	let latitudeNumber;
	let longitudeNumber;
	let latitudeLength;
	let longitudeLength;

	if (formValues.latitude) {
		latitudeNumber = Number(document.getElementById('latitude').value);
		latitudeLength = document.getElementById('latitude').value.length;
	}

	if (formValues.longitude) {
		longitudeNumber = Number(document.getElementById('longitude').value);
		longitudeLength = document.getElementById('longitude').value.length;
	}

	if (latitudeNumber < -90 || latitudeNumber > 90 || latitudeLength <= 1) {
		errors.latitude = 'Invalid Latitude';
	}

	if (longitudeNumber < -180 || longitudeNumber > 180 || longitudeLength <= 1) {
		errors.longitude = 'Invalid Longitude';
	}
};
