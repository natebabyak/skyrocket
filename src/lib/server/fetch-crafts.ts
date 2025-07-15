import { createCachedFetcher } from './create-cached-fetcher';
import type { ProfitableCraft } from '$lib/types/profitable-craft';

const TTL = 60_000;
const URL = 'https://sky.coflnet.com/api/craft/profit';

export const fetchCrafts = createCachedFetcher<ProfitableCraft[]>(URL, TTL)
