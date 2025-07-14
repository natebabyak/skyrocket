import type { PageServerLoad } from './$types';
import { getProducts } from '$lib/server/get-bazaar-to-bazaar-data';

export const load: PageServerLoad = async () => {
	const products = await getProducts();

	return {
		products
	};
};
