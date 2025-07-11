export function formatPercentage(percentage: number) {
	return (
		(percentage * 100).toLocaleString('en-US', {
			maximumFractionDigits: 1,
			minimumFractionDigits: 1
		}) + '%'
	);
}
