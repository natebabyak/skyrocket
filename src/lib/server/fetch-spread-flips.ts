import { createCachedFetcher } from './create-cached-fetcher';
import type { SpreadFlip } from '$lib/types/spread-flip';

const URL = 'https://sky.coflnet.com/api/flip/bazaar/spread';
const TTL = 5 * 60 * 1000;

export const fetchSpreadFlips = createCachedFetcher<SpreadFlip[]>(URL, TTL);
