<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils';
	import { Check, Copy } from '@lucide/svelte';

	let { icon, name, copyText }: { icon: string; name: string; copyText: string } = $props();

	let copied = $state(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(copyText);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<Button onclick={copyToClipboard} variant="ghost" class="group w-full justify-start">
	<enhanced:img alt={name} src={icon} class="size-5" />
	{name}
	<div class="relative ml-auto size-4">
		<Copy
			class={cn(
				'absolute scale-100 opacity-0 transition-all group-hover:opacity-100',
				copied && 'scale-0'
			)}
		/>
		<Check class={cn('absolute scale-0 transition-transform', copied && 'scale-100')} />
	</div>
</Button>
