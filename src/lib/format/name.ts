import type { Item } from '$lib/types/items';

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export function formatName(items: Item[], id: string) {
	const item = items.find((item) => item.id === id);
	if (item) return item.name;

	if (id.startsWith('ESSENCE_')) {
		id = id.slice(8);
		id += '_Essence';
	} else if (id.startsWith('ENCHANTMENT_')) {
		id = id.slice(12);

		if (id.startsWith('ULTIMATE_')) id = id.slice(9);

		const words = id.split('_');
		const level = ROMAN_NUMERALS[parseInt(words.pop()!) - 1];

		return (
			words.map((word) => word.charAt(0) + word.slice(1).toLowerCase()).join(' ') + ' ' + level
		);
	} else if (id.startsWith('§')) {
		id = id.slice(2);
	}

	return id
		.replace('SHARD_', '')
		.split('_')
		.map((word) => word.charAt(0) + word.slice(1).toLowerCase())
		.join(' ');
}
