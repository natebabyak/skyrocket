<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import SearchIcon from '@lucide/svelte/icons/search';
	import routes from '$lib/data/routes.json';

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === '/') {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<div class="mr-4 hidden md:block">
	<Button onclick={() => (open = true)} variant="outline" class="w-3xs justify-start border-none">
		<SearchIcon />
		<div class="text-muted-foreground font-normal">
			Type <kbd class="bg-muted rounded-sm px-1 py-0.5">/</kbd> to search...
		</div>
	</Button>
</div>
<div class="block md:hidden">
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} onclick={() => (open = !open)} size="icon" variant="ghost">
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
	<Command.Input placeholder="Search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		{#each routes as { label, items }}
			<Command.Group heading={label}>
				{#each items as { href, title }}
					<a {href}>
						<Command.Item>{title}</Command.Item>
					</a>
				{/each}
			</Command.Group>
		{/each}
	</Command.List>
</Command.Dialog>
