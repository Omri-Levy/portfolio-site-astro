import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		astroI18next(),
		solidJs(),
	],
	vite: {
		ssr: {
			external: [`image-size`, `tiny-glob`],
		},
	},
});
