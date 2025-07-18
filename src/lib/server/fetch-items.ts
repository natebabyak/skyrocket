import { createCachedFetcher } from './create-cached-fetcher';
import type { Items } from '$lib/types/items';

const URL = 'https://api.hypixel.net/v2/resources/skyblock/items';
const TTL = 60 * 60 * 1000;

export const fetchItems = createCachedFetcher<Items>(URL, TTL);
