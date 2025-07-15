type Tier =
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

type KatUpgradeCost = {
	name: string | null;
	baseRarity: Tier;
	hours: number;
	cost: number;
	material: string | null;
	amount: number;
	materials: Record<string, number> | null;
	itemTag: string | null;
};

export type KatFlip = {
	volume: number;
	median: number;
	upgradeCost: number;
	materialCost: number;
	originAuction: string | null;
	coreData: KatUpgradeCost;
	targetRarity: Tier;
	profit: number;
	referenceAuction: string | null;
	purchaseCost: number;
	originAuctionName: string | null;
};
