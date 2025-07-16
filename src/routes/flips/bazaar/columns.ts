import type { ColumnDef } from '@tanstack/table-core';
import { renderComponent } from '$lib/components/ui/data-table/index.js';
import DataTableHeader from '$lib/components/data-table/DataTableHeader.svelte';
import DataTableNumberCell from '$lib/components/data-table/DataTableNumberCell.svelte';
import DataTableCopyCell from '$lib/components/data-table/DataTableCopyCell.svelte';

export type Column = {
	item: string;
	buyPrice: number;
	sellPrice: number;
	profit: number;
	flipsPerHour: number;
	profitPerHour: number;
};

export const columns: ColumnDef<Column>[] = [
	{
		accessorKey: 'item',
		header: ({ column }) =>
			renderComponent(DataTableHeader, {
				column,
				headerText: 'Item'
			}),
		cell: ({ row }) => {
			const item = row.getValue<string>('item');

			return renderComponent(DataTableCopyCell, {
				cellText: item,
				copyText: `/bz ${item}`
			});
		}
	},
	{
		accessorKey: 'buyPrice',
		header: ({ column }) =>
			renderComponent(DataTableHeader, {
				column,
				headerText: 'Buy Price'
			}),
		cell: ({ row }) =>
			renderComponent(DataTableNumberCell, {
				format: 'coins',
				value: row.getValue<number>('buyPrice')
			})
	},
	{
		accessorKey: 'sellPrice',
		header: ({ column }) =>
			renderComponent(DataTableHeader, {
				column,
				headerText: 'Sell Price'
			}),
		cell: ({ row }) =>
			renderComponent(DataTableNumberCell, {
				format: 'coins',
				value: row.getValue<number>('sellPrice')
			})
	},
	{
		accessorKey: 'profit',
		header: ({ column }) =>
			renderComponent(DataTableHeader, {
				column,
				headerText: 'Profit'
			}),
		cell: ({ row }) =>
			renderComponent(DataTableNumberCell, {
				format: 'coins',
				value: row.getValue<number>('profit')
			})
	},
	{
		accessorKey: 'flipsPerHour',
		header: ({ column }) =>
			renderComponent(DataTableHeader, {
				column,
				headerText: 'Flips/h'
			}),
		cell: ({ row }) =>
			renderComponent(DataTableNumberCell, {
				format: 'number',
				value: row.getValue<number>('flipsPerHour')
			})
	},
	{
		accessorKey: 'profitPerHour',
		header: ({ column }) =>
			renderComponent(DataTableHeader, {
				column,
				headerText: 'Profit/h'
			}),
		cell: ({ row }) =>
			renderComponent(DataTableNumberCell, {
				format: 'coins',
				value: row.getValue<number>('profitPerHour')
			})
	}
];
