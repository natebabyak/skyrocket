export function formatCoins(coins: number) {
	return coins.toLocaleString('en-US', {
		maximumFractionDigits: 1,
		minimumFractionDigits: 1
	});
}
