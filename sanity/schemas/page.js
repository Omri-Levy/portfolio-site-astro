export const page = {
	name: `page`,
	title: `Page`,
	type: `document`,
	fields: [
		{
			title: `Id`,
			name: `id`,
			type: `string`,
			validation: (Rule) => Rule.required(),
			description: `Kebab cased unique identifier. Used to find a page regardless of changes.`,
		},
		{
			title: `Title`,
			name: `title`,
			type: `localeString`,
		},
		{
			title: `Subtitle`,
			name: `subtitle`,
			type: `localeString`,
		},
		{
			name: `body`,
			title: `Body`,
			type: `localeBlock`,
		},
		{
			name: `url`,
			title: `Url`,
			type: `string`,
			validation: (Rule) => [
				Rule.regex(/^\/#[a-z]*(?:(-)[a-z]+)*$/, `href`).error(
					`An href must start with "/#", and only include lowercase letters. Words should be separated by "-".`
				),
			],
		},
		{
			title: `Order`,
			name: `order`,
			type: `number`,
		},
		{
			name: `photo`,
			type: `object`,
			title: `Photo`,
			fields: [
				{
					name: `path`,
					title: `Path`,
					type: `string`,
				},
				{
					name: `alt`,
					type: `string`,
					title: `Alternative text`,
					validation: (Rule) => Rule.required(),
				},
			],
		},
	],
};
