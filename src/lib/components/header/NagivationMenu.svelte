<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
</script>

<NavigationMenu.Root viewport={false}>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Bazaar</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-36 gap-4 p-2">
					<li>
						<NavigationMenu.Link href="/bazaar/bazaar-to-bazaar">
							<div class="font-medium">Bazaar to Bazaar</div>
							<div class="text-muted-foreground">High Risk</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="/bazaar/bazaar-to-npc">
							<div class="font-medium">Bazaar to NPC</div>
							<div class="text-muted-foreground">No Risk</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="/bazaar/npc-to-bazaar">
							<div class="font-medium">NPC to Bazaar</div>
							<div class="text-muted-foreground">Low Risk</div>
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Profitability</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-36 gap-4 p-2">
					<li>
						<NavigationMenu.Link href="/bazaar#bz-bz">
							<div class="font-medium">Bazaar to Bazaar</div>
							<div class="text-muted-foreground">High-Risk, High-Reward</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="/bazaar#bz-npc">
							<div class="font-medium">Bazaar to NPC</div>
							<div class="text-muted-foreground">No Risk</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="/bazaar#npc-bz">
							<div class="font-medium">NPC to Bazaar</div>
							<div class="text-muted-foreground">Low Risk</div>
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
