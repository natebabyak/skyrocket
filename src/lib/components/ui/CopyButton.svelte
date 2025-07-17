<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Copy from '@lucide/svelte/icons/copy';
	import { toast } from 'svelte-sonner';

	let { icon, name, copyText }: { icon: string; name: string; copyText: string } = $props();
</script>

<Button
	onclick={() => {
		navigator.clipboard
			.writeText(copyText)
			.then(() =>
				toast.success('Copied to clipboard', {
					description: copyText
				})
			)
			.catch(() => toast.error('Something went wrong'));
	}}
	variant="ghost"
	class="group"
>
	<img alt={name} src={icon} class="size-5" />
	{name}
	<Copy class="opacity-0 transition-opacity group-hover:opacity-100" />
</Button>
