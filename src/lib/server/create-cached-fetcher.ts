export function createCachedFetcher<T>(url: string, ttl: number) {
	let cache: T;
	let lastUpdated = 0;

	return async function fetchData(): Promise<T> {
		const now = Date.now();

		if (!cache || now - lastUpdated > ttl) {
			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}

				const json = await response.json();

				cache = json;
				lastUpdated = now;
			} catch (error) {
				console.error(error);
			}
		}

		return cache;
	};
}
