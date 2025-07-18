import type { Bazaar } from '$lib/types/bazaar';
import { createCachedFetcher } from './create-cached-fetcher';

const URL = 'https://api.hypixel.net/v2/skyblock/bazaar';
const TTL = 5 * 60 * 1000;

export const fetchBazaar = createCachedFetcher<Bazaar>(URL, TTL);
