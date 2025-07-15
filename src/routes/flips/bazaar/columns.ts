import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import { renderComponent, renderSnippet } from '$lib/components/ui/data-table/index.js';
import { formatCoins } from '$lib/helpers/format-coins';
import { formatNumber } from '$lib/helpers/format-number';
import CopyButton from '$lib/components/data-table/CopyButton.svelte';
import SortButton from '$lib/components/data-table/SortButton.svelte';

export type Column = {
	item: string;
	buyOrderPrice: number;
	sellOrderPrice: number;
	profitPerFlip: number;
	flipsPerHour: number;
	profitPerHour: number;
}

export const columns: ColumnDef<Column>[] = [
	{
		accessorKey: 'itemName',
		header: ({ column }) =>
			renderComponent(SortButton, {
				column,
				text: 'Item'
			})
	},
	{
		id: '_',
		cell: ({ row }) => {
			return renderComponent(CopyButton, { text: `/bz ${row.original.item}` });
		}
	},
	{
		accessorKey: 'buyPrice',
		header: ({ column }) =>
			renderComponent(SortButton, {
				column,
				text: 'Buy Price'
			}),
		cell: ({ row }) => {
			const buyPriceCellSnippet = createRawSnippet<[number]>((getBuyPrice) => {
				const buyPrice = getBuyPrice();

				return {
					render: () => `<div class="text-right">${formatCoins(buyPrice)}</div>`
				};
			});

			return renderSnippet(buyPriceCellSnippet, row.getValue('buyPrice'));
		}
	},
	{
		accessorKey: 'sellPrice',
		header: ({ column }) =>
			renderComponent(SortButton, {
				column,
				text: 'Sell Price'
			}),
		cell: ({ row }) => {
			const sellPriceCellSnippet = createRawSnippet<[number]>((getSellPrice) => {
				const sellPrice = getSellPrice();

				return {
					render: () => `<div class="text-right">${formatCoins(sellPrice)}</div>`
				};
			});

			return renderSnippet(sellPriceCellSnippet, row.getValue('sellPrice'));
		}
	},
	{
		accessorKey: 'volume',
		header: ({ column }) =>
			renderComponent(SortButton, {
				column,
				text: 'Volume'
			}),
		cell: ({ row }) => {
			const volumeCellSnippet = createRawSnippet<[number]>((getFlipsPerHour) => {
				const flipsPerHour = getFlipsPerHour();

				return {
					render: () => `<div class="text-right">${formatNumber(flipsPerHour)}</div>`
				};
			});

			return renderSnippet(volumeCellSnippet, row.getValue('volume'));
		}
	},
	{
		accessorKey: 'profitPerHour',
		header: ({ column }) =>
			renderComponent(SortButton, {
				column,
				text: 'Profit/h'
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
