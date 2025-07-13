<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';

	type Item = {
		trigger: string;
		links: {
			src?: string;
			href: string;
			title: string;
		}[];
	};

	const items: Item[] = [
		{
			trigger: 'Bazaar',
			links: [
				{
					src: 'https://wiki.hypixel.net/images/5/54/Minecraft_items_name_tag.png',
					href: '/bazaar/bazaar-to-bazaar',
					title: 'Bazaar to Bazaar',
				},
				{
					href: '/bazaar/bazaar-to-npc',
					title: 'Bazaar to NPC',
				},
				{
					href: '/bazaar/npc-to-bazaar',
					title: 'NPC to Bazaar',
				}
			]
		},
		{
			trigger: 'Currency',
			links: [
				{
					src: 'https://wiki.hypixel.net/images/a/a9/SkyBlock_items_enchanted_feather.gif',
					href: '/currency/ananke-feathers',
					title: 'Ananke Feathers'
				},
				{
					src: 'https://wiki.hypixel.net/images/2/20/SkyBlock_items_enchanted_diamond.gif',
					href: '/currency/bits',
					title: 'Bits'
				},
				{
					src: 'https://wiki.hypixel.net/images/9/9e/Minecraft_items_cookie.png',
					href: '/currency/chocolate',
					title: 'Chocolate'
				},
				{
					src: 'https://wiki.hypixel.net/images/d/d0/Minecraft_items_brick.png',
					href: '/currency/copper',
					title: 'Copper'
				},
				{
					src: 'https://wiki.hypixel.net/images/4/4f/Minecraft_items_gold_ingot.png',
					href: '/currency/medals',
					title: 'Medals'
				},
				{
					src: 'https://wiki.hypixel.net/images/b/be/Minecraft_items_pink_dye.png',
					href: '/currency/motes',
					title: 'Motes'
				},
				{
					src: 'https://wiki.hypixel.net/images/4/43/SkyBlock_items_nether_star.gif',
					href: '/currency/north-stars',
					title: 'North Stars'
				},
				{
					src: 'https://wiki.hypixel.net/images/b/ba/Minecraft_items_rabbit_hide.png',
					href: '/currency/pelts',
					title: 'Pelts'
				},
				{
					src: 'https://wiki.hypixel.net/images/4/42/SkyBlock_items_enchanted_emerald.gif',
					href: '/currency/skyblock-gems',
					title: 'SkyBlock Gems'
				}
			]
		},
		{
			trigger: 'Profit',
			links: [
				{
					src: 'https://wiki.hypixel.net/images/c/c5/Minecraft_items_tripwire_hook.png',
					href: '/profit/frozen-corpses',
					title: 'Frozen Corpses'
				},
				{
					src: 'https://wiki.hypixel.net/images/3/3e/SkyBlock_items_kuudra_infernal_tier_key.png',
					href: '/profit/kuudra',
					title: 'Kuudra'
				}
			]
		}
	];
</script>

<NavigationMenu.Root viewport={false}>
	<NavigationMenu.List>
		{#each items as item}
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>{item.trigger}</NavigationMenu.Trigger>
				<NavigationMenu.Content class="p-2 w-fit">
					{#each item.links as link}
						<NavigationMenu.Link href={link.href} class="flex-row items-center gap-2">
							<img alt={link.title} src={link.src} class="size-5" />
							<div class="font-medium whitespace-nowrap">{link.title}</div>
						</NavigationMenu.Link>
					{/each}
				</NavigationMenu.Content>
			</NavigationMenu.Item>
		{/each}
	</NavigationMenu.List>
</NavigationMenu.Root>
