const defaultTheme = require(`tailwindcss/defaultTheme`);
const plugin = require(`tailwindcss/plugin`);

const lightKey = `light`;
const light = {
	...require(`daisyui/src/colors/themes`)[`[data-theme=light]`],
	'base-100': `#F8FAFC`,
	'base-content': `#111827`,
	neutral: `#cbd5e1`,
};
const darkKey = `dark`;
const dark = {
	...require(`daisyui/src/colors/themes`)[`[data-theme=dark]`],
	'base-100': `#0F172A`,
	'base-content': `#F9FAFB`,
	neutral: `#1E293B`,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [`Poppins`, ...defaultTheme.fontFamily.sans],
			},
			zIndex: {
				'negative-10': `-10`,
			},
		},
		screens: {
			xxs: `23.6em`,
			xs: `28em`,
			lgh: `77.5em`,
			mmd: { max: `48em` },
			// => @media (min-width: 475px) { ... }
			...defaultTheme.screens,
		},
	},
	plugins: [
		require(`daisyui`),
		require(`tailwindcss-rtl`),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					d: (value) => ({
						width: value,
						height: value,
					}),
				},
				{
					values: theme(`spacing`),
				}
			);
		}),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'ring-with-offset': (value) => ({
						'--tw-ring-width': value,
						'--tw-ring-offset-width': value,
					}),
				},
				{ values: theme(`ringWidth`) }
			);
		}),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.d-full': {
					width: `100%`,
					height: `100%`,
				},
			});
		}),
		plugin(function ({ addVariant }) {
			addVariant(`hocus-visible`, [`&:focus-visible`, `&:hover`]);
		}),
	],
	daisyui: {
		base: true,
		utils: true,
		rtl: false,
		themes: [
			{
				[lightKey]: {
					...light,
					primary: `#EA580C`,
					secondary: `#F59E0B`,
					accent: `#16a34a`,
				},
				[`${lightKey}-alt`]: {
					...light,
					primary: `#16a34a`,
					secondary: `#14b8a6`,
					accent: `#EA580C`,
				},
				[darkKey]: {
					...dark,
					primary: `#C026D3`,
					secondary: `#F43F5E`,
					accent: `#3b82f6`,
				},
				[`${darkKey}-alt`]: {
					...dark,
					primary: `#3b82f6`,
					secondary: `#06b6d4`,
					accent: `#C026D3`,
				},
			},
		],
	},
};
