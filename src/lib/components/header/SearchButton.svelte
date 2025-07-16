<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import SearchIcon from '@lucide/svelte/icons/search';

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<div class="mr-4 hidden md:block">
	<Button onclick={() => (open = true)} variant="outline" class="flex">
		<SearchIcon />
		Search...
		<kbd>Ctrl</kbd>
		<kbd>K</kbd>
	</Button>
</div>
<div class="block md:hidden">
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button onclick={() => (open = !open)} {...props} size="icon" variant="ghost">
					<SearchIcon />
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content>
			<div class="font-medium">Search</div>
		</Tooltip.Content>
	</Tooltip.Root>
</div>
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item>Calendar</Command.Item>
			<Command.Item>Search Emoji</Command.Item>
			<Command.Item>Calculator</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
