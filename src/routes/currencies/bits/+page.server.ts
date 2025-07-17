import bitsShop from '$lib/data/bits-shop.json';
import { fetchBazaarData } from '$lib/server/fetch-bazaar-data';
import { fetchItemMetadataElements } from '$lib/server/fetch-item-metadata-elements';
import { fetchPrices } from '$lib/server/fetch-prices';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const itemMetadataElements = await fetchItemMetadataElements();
	const prices = await fetchPrices();
	const { products } = await fetchBazaarData();

	const rows = bitsShop
		.map(({ item, bitsCost }) => {
			const name = itemMetadataElements.find((i) => i.tag === item)?.name ?? `missing ${item}`;

			const price = Object.keys(prices).includes(item)
				? prices[item]
				: Object.keys(products).includes(item) && products[item].buy_summary.length > 0
					? products[item].buy_summary[0].pricePerUnit
					: 0;

			const profit = Object.keys(prices).includes(item)
				? (price < 1e7 ? price * 0.99 : price < 1e8 ? price * 0.98 : price * 0.975) * 0.99
				: price * 0.98875;

			const coinsPerBit = profit / bitsCost;

			return {
				name,
				bitsCost,
				price,
				coinsPerBit
			};
		})
		.sort((a, b) => b.coinsPerBit - a.coinsPerBit);

	return {
		rows
	};
};
