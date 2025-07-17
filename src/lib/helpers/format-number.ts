export function formatNumber(number: number) {
	if (Math.abs(number) < 1) {
		return number.toLocaleString('en-US', {
			maximumFractionDigits: 3
		});
	} else {
		return number.toLocaleString('en-US', {
			maximumSignificantDigits: 4
		});
	}
}
