export type Item = {
	name: string;
	npc_sell_price?: number;
	id: string;
};

export type ItemsData = {
	success: boolean;
	lastUpdated: number;
	items: Item[];
};
