import { createCachedFetcher } from './create-cached-fetcher';
import type { ProfitableCraft } from '$lib/types/profitable-craft';

const URL = 'https://sky.coflnet.com/api/craft/profit';
const TTL = 5 * 60 * 1000;

export const fetchProfitableCrafts = createCachedFetcher<ProfitableCraft[]>(URL, TTL);
