export type Ingredient = {
	itemId: string | null;
	count: number;
	cost: number;
	type: string | null;
};

export type RequiredCollection = {
	name: string | null;
	level: number;
};

export type RequiredSkill = {
	name: string | null;
	level: number;
};

export type ProfitableCraft = {
	itemId: string | null;
	itemName: string | null;
	sellPrice: number;
	craftCost: number;
	ingredients: Ingredient[];
	reqCollection: RequiredCollection;
	reqSlayer: RequiredCollection;
	reqSkill: RequiredSkill;
	volume: number;
	median: number;
	lastUpdated: string;
};
