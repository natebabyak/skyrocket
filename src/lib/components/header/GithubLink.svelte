<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import GithubIcon from '@lucide/svelte/icons/github';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button href="https://github.com/natebabyak/skyrocket" {...props} size="icon" variant="ghost">
				<GithubIcon />
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		<div class="font-medium">GitHub</div>
	</Tooltip.Content>
</Tooltip.Root>
