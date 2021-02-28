function addCommas(num) {
	// going to need to convert it to a string, and add commas. toLocaleString can do this automatically, as long as the right locale is added in. Using american english, or 'en-US' should format this correctly.Also, don't want too much rounding so let's set the fractional digits to be very large
	if (typeof num !== 'number') {
		return 'please enter a positive or negative number';
	}

	return num.toLocaleString('en-US', { maximumFractionDigits: 10 });
}

module.exports = addCommas;
