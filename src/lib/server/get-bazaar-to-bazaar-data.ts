import { fetchBazaarData } from '$lib/server/fetch-bazaar-data.js';
import { fetchItemsData } from '$lib/server/fetch-items-data.js';
import { formatName } from '$lib/helpers/format-name.js';
import type { BazaarToBazaarData } from '$lib/types/bazaar-to-bazaar-data.js';

const BID_INCREMENT = 0.1;
const TAX = 0.01125;
const HOURS_PER_WEEK = 168;

export async function getProducts(): Promise<BazaarToBazaarData[]> {
	const { products } = await fetchBazaarData();
	const { items } = await fetchItemsData();

	return Object.values(products)
		.map(({ product_id, sell_summary, buy_summary, quick_status }) => {
			if (buy_summary.length === 0 || sell_summary.length === 0) return null;

			const { sellMovingWeek, buyMovingWeek } = quick_status;

			const item = items.find((item) => item.id === product_id);
			const itemName = item?.name ?? formatName(product_id);
			const buyOrderPrice = sell_summary[0].pricePerUnit + BID_INCREMENT;
			const sellOrderPrice = (buy_summary[0].pricePerUnit - BID_INCREMENT) * (1 - TAX);
			const profitPerFlip = sellOrderPrice - buyOrderPrice;
			const profitMargin = profitPerFlip / sellOrderPrice;
			const flipsPerHour =
				1 / (1 / (buyMovingWeek / HOURS_PER_WEEK) + 1 / (sellMovingWeek / HOURS_PER_WEEK));
			const profitPerHour = profitPerFlip * flipsPerHour;

			return {
				itemName,
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
