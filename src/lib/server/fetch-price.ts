import type { PriceSummary } from '$lib/types/price-summary';

const BASE_URL = 'https://sky.coflnet.com/api/item/price/';

export async function fetchPrice(itemTag: string): Promise<PriceSummary | null> {
	const URL = `${BASE_URL}${itemTag}`;

	try {
		const response = await fetch(URL);

		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`);
		}

		const json = await response.json();

		return json;
	} catch (error) {
		console.error(error);

        return null;
	}
}
