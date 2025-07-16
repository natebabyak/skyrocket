<script lang="ts">
	import { formatCoins } from '$lib/formatters/format-coins';
	import { formatNumber } from '$lib/formatters/format-number';
	import { formatPercentage } from '$lib/formatters/format-percentage';

	type Format = 'coins' | 'number' | 'percentage';

	const { format, value }: { format: Format; value: number } = $props();

	const formatters = {
		coins: formatCoins,
		number: formatNumber,
		percentage: formatPercentage
	};
</script>

<div class="text-right">
	{@html formatters[format](value)}
</div>
