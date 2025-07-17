import { createCachedFetcher } from './create-cached-fetcher';
import type { ItemsData } from '$lib/types/items-data';

const URL = 'https://api.hypixel.net/v2/resources/skyblock/items';
const TTL = 60 * 60 * 1000;

export const fetchItemsData = createCachedFetcher<ItemsData>(URL, TTL);
