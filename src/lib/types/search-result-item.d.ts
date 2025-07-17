export type Tier =
	| 'UNKNOWN'
	| 'COMMON'
	| 'UNCOMMON'
	| 'RARE'
	| 'EPIC'
	| 'LEGENDARY'
	| 'SPECIAL'
	| 'VERY_SPECIAL'
	| 'MYTHIC'
	| 'DIVINE'
	| 'ULTIMATE';

export type SearchResultItem = {
	name: string | null;
	id: string | null;
	type: string | null;
	iconUrl: string | null;
	img: string | null;
	tier: Tier;
};
