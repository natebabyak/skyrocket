<script lang="ts">
	import { columns } from './columns.js';
	import DataTable from '$lib/components/data-table/DataTable.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Bazaar Flips - Skyrocket</title>
</svelte:head>

<DataTable data={data.rows} {columns} />
