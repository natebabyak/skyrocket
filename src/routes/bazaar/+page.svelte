<script lang="ts">
	import { columns } from './columns.js';
	import DataTable from '$lib/components/data-table/DataTable.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	let { data } = $props();
</script>

<DataTable data={data.products} {columns} />
