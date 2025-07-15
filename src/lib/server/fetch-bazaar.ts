import { createCachedFetcher } from './create-cached-fetcher';
import type { SpreadFlip } from '$lib/types/spread-flip';

const TTL = 60_000;
const URL = 'https://sky.coflnet.com/api/flip/bazaar/spread';

export const fetchBazaar = createCachedFetcher<SpreadFlip[]>(URL, TTL);
