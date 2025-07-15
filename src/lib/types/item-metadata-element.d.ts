type ItemFlag = 
	| 'NONE' 
	| 'BAZAAR'
	| 'TRADEABLE'
	| 'AUCTION'
	| 'FIRE_SALE'
	| 'GLOWING'
	| 'MUSEUM'

export type ItemMetadataElement = {
	name: string | null;
	tag: string | null;
	flags: ItemFlag | number;
};
