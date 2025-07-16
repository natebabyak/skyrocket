<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { mode, toggleMode } from 'mode-watcher';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import SunIcon from '@lucide/svelte/icons/sun';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button onclick={toggleMode} size="icon" variant="ghost">
			{#if !mode.current}
				<Skeleton class="size-4 rounded-full" />
			{:else if mode.current === 'dark'}
				<MoonIcon class="size-4" />
			{:else}
				<SunIcon class="size-4" />
			{/if}
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<div class="font-medium">Theme</div>
	</Tooltip.Content>
</Tooltip.Root>
