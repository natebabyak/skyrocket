import bitsShop from '$lib/data/bits-shop.json';
import { fetchBazaarData } from '$lib/server/fetch-bazaar-data';
import { fetchPrices } from '$lib/server/fetch-prices';
import type { PageServerLoad } from './$types';
import { fetchSearchResultItems } from '$lib/server/fetch-search-result-items';

export const load: PageServerLoad = async () => {
	const prices = await fetchPrices();
	const { products } = await fetchBazaarData();

	const rows = (
		await Promise.all(
			bitsShop.map(async ({ name, bitsCost }) => {
				const searchResultItems = await fetchSearchResultItems(name);
				if (!searchResultItems || searchResultItems.length === 0) return null;

				const item = searchResultItems[0];
				const { iconUrl, id } = item;
				if (!id) return null;

				let copyText = '';
				let price = 0;
				let profit = 0;

				if (id in prices) {
					copyText = `/ahs ${name}`;
					price = prices[id];
					profit = price * (price < 1e7 ? 0.99 : price < 1e8 ? 0.98 : 0.975) * 0.99;
				} else if (id in products && products[id].sell_summary?.length > 0) {
					copyText = `/bz ${name}`;
					price = products[id].buy_summary?.[0]?.pricePerUnit || 0;
					profit = (price - 0.1) * 0.98875;
				}

				const coinsPerBit = profit / bitsCost;

				return {
					icon: iconUrl,
					name,
					copyText,
					bitsCost,
					price,
					coinsPerBit
				};
			})
		)
	)
		.filter((item): item is NonNullable<typeof item> => item !== null)
		.sort((a, b) => b.coinsPerBit - a.coinsPerBit);

	return {
		rows
	};
};
