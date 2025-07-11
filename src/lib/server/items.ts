import type { Items } from '$lib/types/items';

const TTL = 24 * 60 * 60 * 1000;
const URL = 'https://api.hypixel.net/v2/resources/skyblock/items';

let cache: Items;
let lastUpdated = 0;

export async function fetchItems() {
	const now = Date.now();

	if (!cache || now - lastUpdated > TTL) {
		const response = await fetch(URL);

		if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);

		cache = await response.json();
		lastUpdated = now;
	}

	return cache;
}
