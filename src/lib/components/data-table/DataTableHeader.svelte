<script lang="ts">
	import ArrowDownNarrowWideIcon from '@lucide/svelte/icons/arrow-down-narrow-wide';
	import ArrowDownUpIcon from '@lucide/svelte/icons/arrow-down-up';
	import ArrowDownWideNarrowIcon from '@lucide/svelte/icons/arrow-down-wide-narrow';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils';
	import type { Column } from '@tanstack/table-core';

	const { column, headerText }: { column: Column<any, unknown>; headerText: string } = $props();

	const isSorted = $derived(column.getIsSorted());
</script>

<Button
	onclick={column.getToggleSortingHandler()}
	variant="ghost"
	class="group w-full justify-between"
>
	{headerText}
	<div
		class={cn(
			'size-4 opacity-0 transition-opacity group-hover:opacity-100',
			isSorted && 'opacity-100'
		)}
	>
		{#if !isSorted}
			<ArrowDownUpIcon />
		{:else if isSorted === 'asc'}
			<ArrowDownNarrowWideIcon />
		{:else}
			<ArrowDownWideNarrowIcon />
		{/if}
	</div>
</Button>
