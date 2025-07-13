export type Item = {
	name: string;
	npc_sell_price?: number;
	id: string;
};

export type Items = {
	success: boolean;
	lastUpdated: number;
	items: Item[];
};
