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
		DEFENSE: 75;
		HEALTH: 20;
	};
	npc_sell_price: number;
	id: string;
};

export type ItemsData = {
	success: boolean;
	lastUpdated: number;
	items: Item[];
};
