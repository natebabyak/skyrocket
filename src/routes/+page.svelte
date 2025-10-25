<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<svelte:head>
	<title>Home - Skyrocket</title>
</svelte:head>

<main class="mt-64 mb-64 flex flex-col gap-4 px-2 md:px-0">
	<h1
		class="px-4 text-center text-4xl leading-normal font-bold text-balance md:line-clamp-3 md:px-0 md:text-5xl lg:line-clamp-2 lg:text-6xl"
	>
		From The End to the Endgame
	</h1>
	<p class="text-center text-lg font-medium text-balance">🚀 Skyrocket</p>
	<Button href="/flips/bazaar">Explore the Bazaar</Button>
	<Button href="/currencies/bits" variant="outline">How do I spend my bits?</Button>
</main>
