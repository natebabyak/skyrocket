<script lang="ts">
	import bazaarAlley from '$lib/assets/bazaar_alley.png';
	import { Button } from '$lib/components/ui/button/index.js';
	import communityCenter from '$lib/assets/community_center.png';
	import locations from '$lib/assets/locations.png';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import wizardTower from '$lib/assets/wizard_tower.png';
</script>

<svelte:head>
	<title>Home - SkyFlip</title>
</svelte:head>

<main class="mx-auto mt-18.25 flex flex-col border-x md:max-w-2xl">
	<enhanced:img alt="Locations" src={locations} />
	<Separator />
	<div class="flex flex-col gap-4 p-4">
		<h1 class="text-6xl leading-tight">
			From The End.
			<br />
			To The Endgame.
		</h1>
		<p class="text-lg text-balance text-muted-foreground">
			SkyFlip has all the tools you need to help you make informed financial decisions in Hypixel
			SkyBlock.
		</p>
	</div>
	<Separator />
	<div class="grid grid-cols-2 gap-px bg-border">
		<div class="flex flex-col gap-4 bg-background p-4">
			<h3 class="text-xl font-medium">Bazaar Flips</h3>
			<p class="text-balance text-muted-foreground">See the most profitable flips on the bazaar</p>
			<Button href="/flips/bazaar" class="mt-auto">View Bazaar Flips</Button>
		</div>
		<enhanced:img alt="Bazaar Alley" src={bazaarAlley} />
		<enhanced:img alt="Community Center" src={communityCenter} />
		<div class="flex flex-col gap-4 bg-background p-4">
			<h3 class="text-xl font-medium">Bits Shop</h3>
			<p class="text-balance text-muted-foreground">Find out the optimal way to spend your Bits</p>
			<Button href="/currencies/bits" class="mt-auto">View Bits Shop</Button>
		</div>
		<div class="flex flex-col gap-4 bg-background p-4">
			<h3 class="text-xl font-medium">Coming soon...</h3>
			<p class="text-balance text-muted-foreground">
				More features and improvements are on the way!
			</p>
			<Button href="https://github.com/natebabyak/skyflip" target="_blank" class="mt-auto"
				>View on GitHub</Button
			>
		</div>
		<enhanced:img alt="Wizard Tower" src={wizardTower} />
	</div>
</main>
