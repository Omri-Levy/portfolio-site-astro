/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLanguage: 'en',
	supportedLanguages: ['en', 'he'],
	i18next: {
		// convenient during development to check for missing keys
		// debug: true,
		initImmediate: false,
		backend: {
			loadPath: './src/common/locales/{{lng}}.json',
		},
	},
	i18nextPlugins: {
		fsBackend: 'i18next-fs-backend',
	},
};
