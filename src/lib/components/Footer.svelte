<script lang="ts">
	import {Button} from "$lib/components/ui/button/index.js";

	const year = new Date().getFullYear();
</script>

<footer class="h-screen">
	<Button href="https://sky.coflnet.com/data" variant="link">https://sky.coflnet.com/data</Button>
	<p class="text-muted-foreground text-center">
		&copy; {year} Nate Babyak. All rights reserved.
	</p>
</footer>
