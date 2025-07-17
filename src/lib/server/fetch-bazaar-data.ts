import type { BazaarData } from '$lib/types/bazaar-data';
import { createCachedFetcher } from './create-cached-fetcher';

const URL = 'https://api.hypixel.net/v2/skyblock/bazaar';
const TTL = 5 * 60 * 1000;

export const fetchBazaarData = createCachedFetcher<BazaarData>(URL, TTL);
