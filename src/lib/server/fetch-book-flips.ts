import type { BookFlip } from '$lib/types/book-flip';
import { createCachedFetcher } from './create-cached-fetcher';

const URL = 'https://sky.coflnet.com/api/flip/bazaar/books';
const TTL = 5 * 60 * 1000;

export const fetchBookFlips = createCachedFetcher<BookFlip[]>(URL, TTL);
