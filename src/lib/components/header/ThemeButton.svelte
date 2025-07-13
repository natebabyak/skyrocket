<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { mode, toggleMode } from 'mode-watcher';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import SunIcon from '@lucide/svelte/icons/sun';
</script>

<Button onclick={toggleMode} size="icon" variant="ghost">
	{#if !mode.current}
		<Skeleton class="size-5 rounded-full" />
	{:else if mode.current === 'dark'}
		<MoonIcon class="size-5" />
	{:else}
		<SunIcon class="size-5" />
	{/if}
</Button>
