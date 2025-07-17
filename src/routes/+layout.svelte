<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/ui/Footer.svelte';
	import Header from '$lib/components/ui/header/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let { children } = $props();
</script>

<ModeWatcher />
<Toaster />
<Tooltip.Provider>
	<Header />
	<main class="mx-auto w-full pt-[68px] md:w-2xl lg:w-4xl">
		{@render children()}
	</main>
	<Footer />
</Tooltip.Provider>
