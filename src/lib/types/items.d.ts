export type Item = {
	name: string;
	id: string;
};

export type Items = {
	success: boolean;
	lastUpdated: number;
	items: Item[];
};
