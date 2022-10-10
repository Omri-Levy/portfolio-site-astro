import { getDir } from '@utils/get-dir/get-dir';
import { ELocale } from '@enums';

export const useLocale = () => {
	const [oldLocale] = window.location.pathname.split(`/`);
	const locale = !oldLocale ? ELocale.EN : (oldLocale as ELocale);
	const dir = getDir(locale);

	return {
		locale,
		dir,
	};
};
