<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import routes from '$lib/data/routes.json';
</script>

<div class="hidden md:block">
	<NavigationMenu.Root viewport={false}>
		<NavigationMenu.List>
			{#each routes as { label, items }}
				<NavigationMenu.Item>
					<NavigationMenu.Trigger class="bg-inherit">{label}</NavigationMenu.Trigger>
					<NavigationMenu.Content>
						<ul class="grid w-[200px] p-2">
							<li>
								{#each items as { href, title }}
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
</div>
