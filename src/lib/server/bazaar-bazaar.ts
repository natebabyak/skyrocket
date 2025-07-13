import { fetchBazaar } from '$lib/server/bazaar.js';
import { fetchItems } from '$lib/server/items.js';
import { getName } from '$lib/helpers/name.js';
import type { BazaarBazaar } from '$lib/types/bazaar-bazaar.js';

const BID_INCREMENT = 0.1;
const TAX = 0.01125;
const HOURS_PER_WEEK = 168;

export async function getProducts(): Promise<BazaarBazaar[]> {
	const bazaar = await fetchBazaar();
	const items = await fetchItems();

	return Object.values(bazaar.products)
		.map(({ product_id, sell_summary, buy_summary, quick_status }) => {
			if (buy_summary.length === 0 || sell_summary.length === 0) return null;

			const { sellMovingWeek, buyMovingWeek } = quick_status;

			const item = getName(items.items, product_id);
			const buyOrderPrice = sell_summary[0].pricePerUnit + BID_INCREMENT;
			const sellOrderPrice = buy_summary[0].pricePerUnit - BID_INCREMENT;
			const profitPerFlip = sellOrderPrice * (1 - TAX) - buyOrderPrice;
			const flipsPerHour =
				1 / (1 / (buyMovingWeek / HOURS_PER_WEEK) + 1 / (sellMovingWeek / HOURS_PER_WEEK));
			const profitPerHour = profitPerFlip * flipsPerHour;

			return {
				item,
				buyOrderPrice,
				sellOrderPrice,
				profitPerFlip,
				flipsPerHour,
				profitPerHour
			};
		})
		.filter((p) => p !== null);
}
