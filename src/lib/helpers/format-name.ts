const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export function formatName(id: string) {
	if (id === 'XYZ') return 'XYZ';

	if (id.startsWith('ENCHANTMENT_')) {
		id = id.replace('ENCHANTMENT_', '').replace('ULTIMATE_', '');

		const words = id.split('_');
		const level = ROMAN_NUMERALS[parseInt(words.pop()!) - 1];

		return (
			words.map((word) => word.charAt(0) + word.slice(1).toLowerCase()).join(' ') + ' ' + level
		);
	}

	if (id.startsWith('ESSENCE_')) {
		id = id.slice(8);
		id += '_Essence';
	} else if (id.startsWith('§')) {
		id = id.slice(2);
	}

	return id
		.replace('SHARD_', '')
		.split('_')
		.map((word) => word.charAt(0) + word.slice(1).toLowerCase())
		.join(' ');
}
