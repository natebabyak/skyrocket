<script lang="ts">
	import GithubLink from './GithubLink.svelte';
	import NavigationMenu from './NagivationMenu.svelte';
	import SkyrocketLink from './SkyrocketLink.svelte';
	import ThemeButton from './ThemeButton.svelte';
</script>

<header
	class="fixed top-0 left-0 z-10 flex w-full items-center justify-between p-4 backdrop-blur-md"
>
	<div class="flex items-center gap-4">
		<SkyrocketLink />
		<NavigationMenu />
	</div>
	<div class="flex items-center">
		<GithubLink />
		<ThemeButton />
	</div>
</header>
