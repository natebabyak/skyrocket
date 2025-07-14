<script lang="ts">
	import { columns } from './columns.js';
	import DataTable from '$lib/components/data-table/DataTable.svelte';

	let { data } = $props();
</script>

<DataTable data={data.products} {columns} />
