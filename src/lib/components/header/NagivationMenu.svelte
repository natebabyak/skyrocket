<script lang="ts">
	import brick from '$lib/assets/brick.png';
	import cookie from '$lib/assets/cookie.png';
	import enchantedDiamond from '$lib/assets/enchanted-diamond.png';
	import enchantedEmerald from '$lib/assets/enchanted-emerald.png';
	import enchantedFeather from '$lib/assets/enchanted-feather.png';
	import goldIngot from '$lib/assets/gold-ingot.png';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import netherStar from '$lib/assets/nether-star.png';
	import pinkDye from '$lib/assets/pink-dye.png';
	import rabbitHide from '$lib/assets/rabbit-hide.png';
	import sunflower from '$lib/assets/sunflower.png';

	const currencies = [
		{
			href: '/currencies/ananke-feathers',
			title: 'Ananke Feathers',
			src: enchantedFeather
		},
		{
			href: '/currencies/bits',
			title: 'Bits',
			src: enchantedDiamond
		},
		{
			href: '/currencies/carnival-tokens',
			title: 'Carnival Tokens',
			src: sunflower
		},
		{
			href: '/currencies/chocolate',
			title: 'Chocolate',
			src: cookie
		},
		{
			href: '/currencies/copper',
			title: 'Copper',
			src: brick
		},
		{
			href: '/currencies/medals',
			title: 'Medals',
			src: goldIngot
		},
		{
			href: '/currencies/motes',
			title: 'Motes',
			src: pinkDye
		},
		{
			href: '/currencies/north-stars',
			title: 'North Stars',
			src: netherStar
		},
		{
			href: '/currencies/pelts',
			title: 'Pelts',
			src: rabbitHide
		},
		{
			href: '/currencies/skyblock-gems',
			title: 'SkyBlock Gems',
			src: enchantedEmerald
		}
	];
</script>

<NavigationMenu.Root viewport={false}>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href="/bazaar" class={navigationMenuTriggerStyle()}>Bazaar</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href="/crafts" class={navigationMenuTriggerStyle()}>Crafts</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Currencies</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] p-2">
					{#each currencies as { href, title, src }}
						<li>
							<NavigationMenu.Link {href} class="flex-row items-center gap-2">
								<img alt={title} {src} class="size-5" />
								<p class="font-medium">
									{title}
								</p>
							</NavigationMenu.Link>
						</li>
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
