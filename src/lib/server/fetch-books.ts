import { createCachedFetcher } from './create-cached-fetcher';
import type { BookFlip } from '$lib/types/book-flip';

const TTL = 60_000;
const URL = 'https://sky.coflnet.com/api/flip/bazaar/books';

export const fetchBooks = createCachedFetcher<BookFlip[]>(URL, TTL);
