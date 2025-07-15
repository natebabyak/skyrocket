import { fetchBazaar } from '$lib/server/fetch-bazaar';
import type { PageServerLoad } from './$types';
import type { Column } from './columns';

const HOURS_PER_WEEK = 168;

export const load: PageServerLoad = async () => {
	const bazaar = await fetchBazaar();

	const rows: Column[] = bazaar
		.map(({ flip, itemName, isManipulated }) => {
			const { buyPrice, sellPrice, profitPerHour, volume, estimatedFees } = flip;
			if (!itemName || !buyPrice || !sellPrice || isManipulated) return null;

			const item = itemName;
			const profitPerFlip = buyPrice - sellPrice - estimatedFees;
			const flipsPerHour = volume / HOURS_PER_WEEK;

			return {
				item,
				buyOrderPrice: sellPrice,
				sellOrderPrice: buyPrice,
				profitPerFlip,
				flipsPerHour,
				profitPerHour
			};
		})
		.filter((row) => row !== null);

	return {
		rows
	};
};
