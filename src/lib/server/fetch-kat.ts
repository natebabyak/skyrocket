import { createCachedFetcher } from './create-cached-fetcher';
import type { KatFlip } from '$lib/types/kat-flip';

const TTL = 60_000;
const URL = 'https://sky.coflnet.com/api/kat/profit';

export const fetchKat = createCachedFetcher<KatFlip[]>(URL, TTL);
