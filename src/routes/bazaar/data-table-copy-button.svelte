<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Copy from '@lucide/svelte/icons/copy';
	import { toast } from 'svelte-sonner';

	let { text }: { text: string } = $props();
</script>

<Button
	onclick={() => {
		navigator.clipboard
			.writeText(text)
			.then(() =>
				toast.success('Copied to clipboard', {
					description: text
				})
			)
			.catch(() => toast.error('Something went wrong'));
	}}
	size="icon"
	variant="ghost"
>
	<Copy />
</Button>
