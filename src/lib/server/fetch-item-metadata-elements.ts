import { createCachedFetcher } from './create-cached-fetcher';
import type { ItemMetadataElement } from '$lib/types/item-metadata-element';

const URL = 'https://sky.coflnet.com/api/items';
const TTL = 60 * 60 * 1000;

export const fetchItemMetadataElements = createCachedFetcher<ItemMetadataElement[]>(URL, TTL);
