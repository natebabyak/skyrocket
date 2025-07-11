import type { PageServerLoad } from './$types';
import { getProducts } from '$lib/server/products';

export const load: PageServerLoad = async () => {
	const products = await getProducts();

	return {
		products
	};
};
