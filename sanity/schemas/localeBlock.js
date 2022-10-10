export const localeBlock = {
	name: `localeBlock`,
	title: `Locale block`,
	type: `object`,
	fields: [
		{
			name: `en`,
			title: `English`,
			type: `array`,
			of: [{ type: `block` }],
		},
		{
			name: `he`,
			title: `Hebrew`,
			type: `array`,
			of: [{ type: `block` }],
		},
	],
};
