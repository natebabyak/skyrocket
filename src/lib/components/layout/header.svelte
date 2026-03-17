<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import Github from '$lib/components/icons/github.svelte';
	import * as Kbd from '$lib/components/ui/kbd/index.js';
	import Moon from '@lucide/svelte/icons/moon';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import routes from '$lib/data/routes.json';
	import skyflip from '$lib/assets/skyflip.png';
	import Sun from '@lucide/svelte/icons/sun';
	import { toggleMode } from 'mode-watcher';
	import { resolve } from '$app/paths';

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.metaKey && e.key === 'k') {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />
<header class="fixed top-0 left-0 z-10 w-full border-b bg-background px-8 py-4">
	<div class="flex w-full items-center">
		<a href={resolve('/')} class="mr-2">
			<img alt="SkyFlip" src={skyflip} class="size-8 select-none" />
		</a>
		<NavigationMenu.Root viewport={false}>
			<NavigationMenu.List>
				{#each routes as { label, items }, i (i)}
					<NavigationMenu.Item>
						<NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
						<NavigationMenu.Content>
							<ul class="grid w-75 gap-2 p-2 sm:w-100 md:w-125 md:grid-cols-2 lg:w-150">
								{#each items as { href, title }, i (i)}
									<li>
										<NavigationMenu.Link>
											{#snippet child()}
												<a
													href={resolve(href as '/')}
													class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div class="text-sm leading-none font-medium">{title}</div>
												</a>
											{/snippet}
										</NavigationMenu.Link>
									</li>
								{/each}
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>
		<Button
			onclick={() => (open = true)}
			size="sm"
			variant="secondary"
			class="mr-2 ml-auto w-full max-w-3xs"
		>
			Search...
			<Kbd.Group class="ml-auto">
				<Kbd.Root class="border bg-background">⌘</Kbd.Root>
				<Kbd.Root class="border bg-background">K</Kbd.Root>
			</Kbd.Group>
		</Button>
		<Command.Dialog bind:open>
			<Command.Input placeholder="Search..." />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				{#each routes as { label, items }, i (i)}
					<Command.Group heading={label}>
						{#each items as { href, title }, i (i)}
							<a href={resolve(href as '/')}>
								<Command.Item>{title}</Command.Item>
							</a>
						{/each}
					</Command.Group>
				{/each}
			</Command.List>
		</Command.Dialog>
		<Button
			href="https://github.com/natebabyak/skyflip"
			size="icon-lg"
			target="_blank"
			title="GitHub"
			variant="ghost"
		>
			<Github />
		</Button>
		<Button onclick={toggleMode} size="icon-lg" title="Toggle theme" variant="ghost">
			<Sun class="scale-100 rotate-0 transition-transform! dark:scale-0 dark:rotate-90" />
			<Moon class="absolute scale-0 rotate-90 transition-transform! dark:scale-100 dark:rotate-0" />
		</Button>
	</div>
</header>
