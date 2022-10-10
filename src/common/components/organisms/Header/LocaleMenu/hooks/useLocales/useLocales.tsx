export const useLocales = () => {
	const handleLocale = (nextLocale: `en` | `he`) => {
		const [_leadingSlash, _oldLocale, ...rest] =
			window.location.pathname.split(`/`);
		const slug = rest.join(`/`);

		window.location.pathname = `/${nextLocale}/${slug}`;
	};
	const toEnglishLocale = () => handleLocale(`en`);

	const toHebrewLocale = () => handleLocale(`he`);

	return {
		handleLocale,
		toEnglishLocale,
		toHebrewLocale,
	};
};
