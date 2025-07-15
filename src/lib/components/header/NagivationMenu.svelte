<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';

	type Item = {
		trigger: string;
		links: {
			href: string;
			title: string;
		}[];
	};

	const items: Item[] = [
		{
			trigger: 'Currencies',
			links: [
				{
					href: '/currencies/ananke-feathers',
					title: 'Ananke Feathers'
				},
				{
					href: '/currencies/bits',
					title: 'Bits'
				},
				{
					href: '/currencies/carnival-tokens',
					title: 'Carnival Tokens'
				},
				{
					href: '/currencies/chocolate',
					title: 'Chocolate'
				},
				{
					href: '/currencies/copper',
					title: 'Copper'
				},
				{
					href: '/currencies/medals',
					title: 'Medals'
				},
				{
					href: '/currencies/motes',
					title: 'Motes'
				},
				{
					href: '/currencies/north-stars',
					title: 'North Stars'
				},
				{
					href: '/currencies/pelts',
					title: 'Pelts'
				},
				{
					href: '/currencies/skyblock-gems',
					title: 'SkyBlock Gems'
				}
			]
		},
		{
			trigger: 'Flips',
			links: [
				{
					href: '/flips/bazaar',
					title: 'Bazaar'
				},
				{
					href: '/flips/books',
					title: 'Books'
				},
				{
					href: '/flips/crafts',
					title: 'Crafts'
				},
				{
					href: '/flips/forge',
					title: 'Forge'
				},
				{
					href: '/flips/kat',
					title: 'Kat'
				}
			]
		},
		{
			trigger: 'Profits',
			links: [
				{
					href: '/profits/archfiend-dice',
					title: 'Archfiend Dice'
				},
				{
					href: '/profits/dungeons',
					title: 'Dungeons'
				},
				{
					href: '/profits/farming',
					title: 'Farming'
				},
				{
					href: '/profits/frozen-corpses',
					title: 'Frozen Corpses'
				},
				{
					href: '/profits/jerry-boxes',
					title: 'Jerry Boxes'
				},
				{
					href: '/profits/kuudra',
					title: 'Kuudra'
				},
				{
					href: '/profits/mining',
					title: 'Mining'
				}
			]
		}
	];
</script>

<NavigationMenu.Root viewport={false}>
	<NavigationMenu.List>
		{#each items as { trigger, links }}
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>{trigger}</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul class="grid w-[200px] p-2">
						<li>
							{#each links as { href, title }}
								<NavigationMenu.Link {href}>
									<div class="font-medium">{title}</div>
								</NavigationMenu.Link>
							{/each}
						</li>
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
		{/each}
	</NavigationMenu.List>
</NavigationMenu.Root>
