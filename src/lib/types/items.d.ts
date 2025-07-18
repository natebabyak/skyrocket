export type Stats = {
	DEFENSE: number;
	HEALTH: number;
};

export type Item = {
	material: string;
	color: string;
	name: string;
	category: string;
	tier: string;
	stats: {
		DEFENSE: number;
		HEALTH: number;
	};
	npc_sell_price: number;
	id: string;
};

export type Items = {
	success: boolean;
	lastUpdated: number;
	items: Item[];
};
