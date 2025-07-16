const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export function formatName(name: string) {
	if (name.startsWith('%%red%%')) {
		return name.slice(7);
	}

	if (name.endsWith('enchant')) {
		const words = name.split(' ');
		const level = parseInt(words.at(-2)!);

		return words
			.slice(0, -2)
			.map((word) => word[0].toUpperCase() + word.slice(1))
			.join(' ')
			.concat(` ${ROMAN_NUMERALS[level]}`);
	}

	if (name.startsWith('SHARD_')) {
		if (name === 'SHARD_XYZ') {
			return 'XYZ';
		}

		return name
			.split('_')
			.slice(1)
			.map((word) => word[0] + word.slice(1).toLowerCase())
			.join(' ');
	}

	if (name.startsWith('§')) {
		return name.slice(2);
	}

	return name;
}
