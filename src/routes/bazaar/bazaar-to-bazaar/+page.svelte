<script lang="ts">
	import { columns } from './columns.js';
	import DataTable from '$lib/components/data-table/DataTable.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	let { data } = $props();
</script>

<Tabs.Root>
	<Tabs.List>
		<Tabs.Trigger value="bazaar-to-bazaar">Bazaar to Bazaar</Tabs.Trigger>
		<Tabs.Trigger value="bazaar-to-npc">Bazaar to NPC</Tabs.Trigger>
		<Tabs.Trigger value="npc-to-bazaar">NPC to Bazaar</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="bazaar-to-bazaar">Make changes to your account here.</Tabs.Content>
	<Tabs.Content value="bazaar-to-npc">Change your password here.</Tabs.Content>
	<Tabs.Content value="npc-to-bazaar">Change your password here.</Tabs.Content>
</Tabs.Root>

<DataTable data={data.products} {columns} />
