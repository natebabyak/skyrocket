<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronsDownUp from '@lucide/svelte/icons/chevrons-up-down';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import type { Column } from '@tanstack/table-core';
	import type { BazaarToBazaarData } from '$lib/types/bazaar-to-bazaar-data';

	const { column, text }: { column: Column<BazaarToBazaarData, unknown>; text: string } = $props();

	const isSorted = $derived(column.getIsSorted());
</script>

<Button onclick={column.getToggleSortingHandler()} variant="ghost" class="w-full">
	{text}
	{#if !isSorted}
		<ChevronsDownUp />
	{:else if isSorted === 'desc'}
		<ChevronDown />
	{:else}
		<ChevronUp />
	{/if}
</Button>
