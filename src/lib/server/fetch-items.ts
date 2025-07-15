import { createCachedFetcher } from './create-cached-fetcher';
import type { ItemMetadataElement } from '$lib/types/item-metadata-element';

const TTL = 3_600_000;
const URL = 'https://sky.coflnet.com/api/items';

export const fetchItems = createCachedFetcher<ItemMetadataElement[]>(URL, TTL);
