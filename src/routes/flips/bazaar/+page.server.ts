import type { Column } from './columns';
import { fetchBazaar } from '$lib/server/fetch-bazaar';
import type { PageServerLoad } from './$types';
import { formatName } from '$lib/formatters/format-name';

const HOURS_PER_WEEK = 168;

export const load: PageServerLoad = async () => {
	const bazaar = await fetchBazaar();

	const rows: Column[] = bazaar
		.map(({ flip, itemName }) => {
			const { buyPrice, sellPrice, profitPerHour, volume } = flip;
			if (!itemName || !buyPrice || !sellPrice) return null;

			const item = formatName(itemName);
			const flipsPerHour = volume / HOURS_PER_WEEK;
			const profit = profitPerHour / flipsPerHour;
			
			return {
				item,
				buyPrice: sellPrice,
				sellPrice: buyPrice,
				profit,
				flipsPerHour,
				profitPerHour
			};
		})
		.filter((row) => row !== null);

	return {
		rows
	};
};
