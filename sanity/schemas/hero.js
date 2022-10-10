export const hero = {
	name: `hero`,
	title: `Hero`,
	type: `document`,
	fields: [
		{
			name: `heading`,
			title: `Heading`,
			type: `localeBlock`,
		},
		{
			name: `callToAction`,
			title: `Call to action`,
			type: `object`,
			fields: [
				{
					name: `text`,
					title: `Text`,
					type: `localeString`,
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
			],
		},
		{
			name: `background`,
			title: `Background`,
			type: `string`,
			description: `Expects the relative path to the image from the imgix url.`,
		},
	],
};
