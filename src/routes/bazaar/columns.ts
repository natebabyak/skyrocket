import type { ColumnDef } from '@tanstack/table-core';
import type { Product } from '$lib/types/product';
import { createRawSnippet } from 'svelte';
import { renderComponent, renderSnippet } from '$lib/components/ui/data-table/index.js';
import { formatCoins } from '$lib/format/coins';
import { formatNumber } from '$lib/format/number';
import DataTableCopyButton from './data-table-copy-button.svelte';
import DataTableSortButton from './data-table-sort-button.svelte';
import { formatPercentage } from '$lib/format/percentage';

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: 'item',
		header: 'Item'
	},
	{
		id: 'copy',
		cell: ({ row }) => {
			return renderComponent(DataTableCopyButton, { text: `/bz ${row.original.item}` });
		}
	},
	{
		accessorKey: 'buyOrderPrice',
		header: ({ column }) =>
			renderComponent(DataTableSortButton, {
				column,
				text: 'Buy Order Price'
			}),
		cell: ({ row }) => {
			const buyOrderPriceCellSnippet = createRawSnippet<[number]>((getBuyOrderPrice) => {
				const buyOrderPrice = getBuyOrderPrice();

				return {
					render: () => `<div class="text-right">${formatCoins(buyOrderPrice)}</div>`
				};
			});

			return renderSnippet(buyOrderPriceCellSnippet, row.getValue('buyOrderPrice'));
		}
	},
	{
		accessorKey: 'sellOrderPrice',
		header: ({ column }) =>
			renderComponent(DataTableSortButton, {
				column,
				text: 'Sell Order Price'
			}),
		cell: ({ row }) => {
			const sellOrderPriceCellSnippet = createRawSnippet<[number]>((getSellOrderPrice) => {
				const sellOrderPrice = getSellOrderPrice();

				return {
					render: () => `<div class="text-right">${formatCoins(sellOrderPrice)}</div>`
				};
			});

			return renderSnippet(sellOrderPriceCellSnippet, row.getValue('sellOrderPrice'));
		}
	},
	{
		accessorKey: 'profitPerFlip',
		header: ({ column }) =>
			renderComponent(DataTableSortButton, {
				column,
				text: 'Profit Per Flip'
			}),
		cell: ({ row }) => {
			const profitPerFlipCellSnippet = createRawSnippet<[number]>((getProfitPerFlip) => {
				const profitPerFlip = getProfitPerFlip();

				return {
					render: () => `<div class="text-right">${formatCoins(profitPerFlip)}</div>`
				};
			});

			return renderSnippet(profitPerFlipCellSnippet, row.getValue('profitPerFlip'));
		}
	},
	{
		accessorKey: 'profitMargin',
		header: ({ column }) =>
			renderComponent(DataTableSortButton, {
				column,
				text: 'Profit Margin'
			}),
		cell: ({ row }) => {
			const profitMarginCellSnippet = createRawSnippet<[number]>((getProfitMargin) => {
				const profitMargin = getProfitMargin();

				return {
					render: () => `<div class="text-right">${formatPercentage(profitMargin)}</div>`
				};
			});

			return renderSnippet(profitMarginCellSnippet, row.getValue('profitMargin'));
		}
	},
	{
		accessorKey: 'flipsPerHour',
		header: ({ column }) =>
			renderComponent(DataTableSortButton, {
				column,
				text: 'Flips Per Hour'
			}),
		cell: ({ row }) => {
			const flipsPerHourCellSnippet = createRawSnippet<[number]>((getFlipsPerHour) => {
				const flipsPerHour = getFlipsPerHour();

				return {
					render: () => `<div class="text-right">${formatNumber(flipsPerHour)}</div>`
				};
			});

			return renderSnippet(flipsPerHourCellSnippet, row.getValue('flipsPerHour'));
		}
	},
	{
		accessorKey: 'profitPerHour',
		header: ({ column }) =>
			renderComponent(DataTableSortButton, {
				column,
				text: 'Profit Per Hour'
			}),
		cell: ({ row }) => {
			const profitPerHourCellSnippet = createRawSnippet<[number]>((getProfitPerHour) => {
				const profitPerHour = getProfitPerHour();

				return {
					render: () => `<div class="text-right">${formatCoins(profitPerHour)}</div>`
				};
			});

			return renderSnippet(profitPerHourCellSnippet, row.getValue('profitPerHour'));
		}
	}
];
