import bitsShop from '$lib/data/bits-shop.json';
import { formatName } from '$lib/helpers/format-name';
import { fetchBazaar } from '$lib/server/fetch-bazaar';
import { fetchItemMetadataElements } from '$lib/server/fetch-item-metadata-elements';
import { fetchPrices } from '$lib/server/fetch-prices';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const itemMetadataElements = await fetchItemMetadataElements();
	const prices = await fetchPrices();
	const { products } = await fetchBazaar();

	const rows = bitsShop
		.map(({ name, bitsCost }) => {
			const id = itemMetadataElements.find(
				(i) => i.name?.toLowerCase() === name.toLowerCase()
			)?.tag;
			if (!id) return null;

			const icon = `https://sky.coflnet.com/static/icon/${id}`;
			name = formatName(name);

			const onAh = id in prices;
			const onBz = id in products;

			const copyText = `/${onAh ? 'ahs' : onBz ? 'bz' : 'viewitem'} ${name}`;
			const price = onAh ? prices[id] : onBz ? products[id].buy_summary?.[0].pricePerUnit : 0;
			const profit = onAh
				? price * (price < 1e7 ? 0.99 : price < 1e8 ? 0.98 : 0.975) * 0.99
				: onBz
					? (price - 0.1) * 0.98875
					: 0;
			const coinsPerBit = profit / bitsCost;

			return {
				icon,
				name,
				copyText,
				bitsCost,
				price,
				coinsPerBit
			};
		})
		.filter((r) => r !== null)
		.sort((a, b) => b.coinsPerBit - a.coinsPerBit);

	return {
		rows
	};
};
