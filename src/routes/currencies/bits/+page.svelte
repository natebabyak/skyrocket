<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { formatCoins } from '$lib/helpers/format-coins';
	import { formatNumber } from '$lib/helpers/format-number';

	const { data } = $props();
</script>

<Table.Root>
	<Table.Caption>A list of your recent invoices.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head class="text-right">Bits Cost</Table.Head>
			<Table.Head class="text-right">Price</Table.Head>
			<Table.Head class="text-right">Coins/Bit</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data.rows as { name, bitsCost, price, coinsPerBit }}
			<Table.Row>
				<Table.Cell class="font-medium">{name}</Table.Cell>
				<Table.Cell class="text-right">{formatNumber(bitsCost)}</Table.Cell>
				<Table.Cell class="text-right">{formatCoins(price)}</Table.Cell>
				<Table.Cell class="text-right">{formatCoins(coinsPerBit)}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
