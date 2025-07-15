<script lang="ts">
	import GithubLink from "./GithubLink.svelte";
	import NavigationMenu from "./NagivationMenu.svelte";
	import SkyrocketLink from "./SkyrocketLink.svelte";
	import ThemeButton from "./ThemeButton.svelte";
</script>

<header class="flex items-center justify-between p-4">
	<div class="flex items-center gap-4">
		<SkyrocketLink />
		<NavigationMenu />
	</div>
	<div class="flex items-center">
		<GithubLink/>
		<ThemeButton />
	</div>
</header>
