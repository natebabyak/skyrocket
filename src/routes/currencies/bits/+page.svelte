<script lang="ts">
	import CopyButton from '$lib/components/table/CopyButton.svelte';
	import { formatCoins } from '$lib/helpers/format-coins';
	import { formatNumber } from '$lib/helpers/format-number';
	import * as Table from '$lib/components/ui/table/index.js';

	const { data } = $props();
</script>

<svelte:head>
	<title>Bits - Skyrocket</title>
</svelte:head>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Item</Table.Head>
			<Table.Head class="text-right">Bits Cost</Table.Head>
			<Table.Head class="text-right">Price</Table.Head>
			<Table.Head class="text-right">Coins/Bit</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data.rows as { icon, name, copyText, bitsCost, price, coinsPerBit }}
			<Table.Row>
				<Table.Cell>
					<CopyButton {icon} {name} {copyText} />
				</Table.Cell>
				<Table.Cell class="text-right">{formatNumber(bitsCost)}</Table.Cell>
				<Table.Cell class="text-right">{formatCoins(price)}</Table.Cell>
				<Table.Cell class="text-right">{formatCoins(coinsPerBit)}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
