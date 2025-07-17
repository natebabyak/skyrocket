import type { SearchResultItem } from '$lib/types/search-result-item';

const BASE_URL = 'https://sky.coflnet.com/api/item/search/';

export async function fetchSearchResultItems(
	searchVal: string
): Promise<SearchResultItem[] | null> {
	try {
		const response = await fetch(`${BASE_URL}${searchVal}`);

		if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);

		return await response.json();
	} catch (error) {
		console.error(error);

		return null;
	}
}
