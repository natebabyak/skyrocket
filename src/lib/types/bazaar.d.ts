export type Summary = {
	amount: number;
	pricePerUnit: number;
	orders: number;
};

export type QuickStatus = {
	productId: string;
	sellPrice: number;
	sellVolume: number;
	sellMovingWeek: number;
	sellOrders: number;
	buyPrice: number;
	buyVolume: number;
	buyMovingWeek: number;
	buyOrders: number;
};

export type Product = {
	product_id: string;
	sell_summary: Summary[];
	buy_summary: Summary[];
	quick_status: QuickStatus;
};

export type Bazaar = {
	success: boolean;
	lastUpdated: number;
	products: Record<string, Product>;
};
