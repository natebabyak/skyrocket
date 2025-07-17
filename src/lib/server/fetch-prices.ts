import { createCachedFetcher } from './create-cached-fetcher';
import type { Prices } from '$lib/types/prices';

const URL = 'https://sky.coflnet.com/api/prices/neu';
const TTL = 5 * 60 * 1000;

export const fetchPrices = createCachedFetcher<Prices>(URL, TTL);
