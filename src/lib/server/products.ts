import { fetchBazaar } from '$lib/server/bazaar.js';
import { fetchItems } from '$lib/server/items.js';
import { formatName } from '$lib/format/name.js';
import type { Product } from '$lib/types/product.js';

export async function getProducts(): Promise<Product[]> {
	const bazaar = await fetchBazaar();
	const items = await fetchItems();

	return Object.values(bazaar.products)
		.map(({ product_id, sell_summary, buy_summary, quick_status }) => {
			if (buy_summary.length === 0 || sell_summary.length === 0) return null;

			const { sellMovingWeek, buyMovingWeek } = quick_status;

			const item = formatName(items.items, product_id);
			const buyOrderPrice = sell_summary[0].pricePerUnit + 0.1;
			const sellOrderPrice = buy_summary[0].pricePerUnit - 0.1;
			const revenue = sellOrderPrice * (1 - 0.01);
			const profitPerFlip = revenue - buyOrderPrice;
			const profitMargin = profitPerFlip / revenue;
			const flipsPerHour = 1 / (1 / (buyMovingWeek / 168) + 1 / (sellMovingWeek / 168));
			const profitPerHour = profitPerFlip * flipsPerHour;

			return {
				item,
				buyOrderPrice,
				sellOrderPrice,
				profitPerFlip,
				profitMargin,
				flipsPerHour,
				profitPerHour
			};
		})
		.filter((p) => p !== null);
}
