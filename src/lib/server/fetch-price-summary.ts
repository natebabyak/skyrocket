import type { PriceSummary } from '$lib/types/price-summary';

const BASE_URL = 'https://sky.coflnet.com/api/item/price/';

export async function fetchPriceSummary(itemtag: string): Promise<PriceSummary | null> {
	try {
		const response = await fetch(`${BASE_URL}${itemtag}`);

		if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);

		return await response.json();
	} catch (error) {
		console.error(error);

		return null;
	}
}
