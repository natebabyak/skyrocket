<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let { children } = $props();
</script>

<ModeWatcher />
<Toaster />
<Tooltip.Provider>
	<Header />
	<main class="pt-[68px] mx-auto w-4xl">
		{@render children()}
	</main>
	<Footer />
</Tooltip.Provider>
