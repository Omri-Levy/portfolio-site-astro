export const project = {
	name: `project`,
	title: `Project`,
	type: `document`,
	fields: [
		{
			type: `localeString`,
			name: `title`,
		},
		{
			name: `description`,
			title: `Description`,
			type: `localeBlock`,
		},
		{
			type: `url`,
			name: `liveUrl`,
		},
		{
			type: `url`,
			name: `githubUrl`,
		},
		{
			name: `video`,
			type: `object`,
			title: `Video`,
			fields: [
				{
					name: `label`,
					type: `string`,
					title: `Label`,
				},
				{
					name: `url`,
					type: `url`,
					title: `Url`,
				},
			],
		},
		{
			title: `Impression`,
			name: `impression`,
			type: `number`,
		},
	],
	orderings: [
		{
			title: `Most impressive`,
			name: `impressionDesc`,
			by: [{ field: `impression`, direction: `desc` }],
		},
		{
			title: `Least impressive`,
			name: `impressionAsc`,
			by: [{ field: `impression`, direction: `asc` }],
		},
	],
};
