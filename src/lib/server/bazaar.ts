import type { Bazaar } from '$lib/types/bazaar';

const TTL = 5 * 60 * 1000;
const URL = 'https://api.hypixel.net/v2/skyblock/bazaar';

let cache: Bazaar;
let lastUpdated = 0;

export async function fetchBazaar() {
	const now = Date.now();

	if (!cache || now - lastUpdated > TTL) {
		const response = await fetch(URL);

		if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);

		cache = await response.json();
		lastUpdated = now;
	}

	return cache;
}
