type BazaarFlip = {
	itemTag: string | null;
	buyPrice: number;
	sellPrice: number;
	profitPerHour: number;
	volume: number;
	estimatedFees: number;
	timestamp: string;
	medianBuyPrice: number;
};

export type SpreadFlip = {
	flip: BazaarFlip;
	itemName: string | null;
	isManipulated: boolean;
};
