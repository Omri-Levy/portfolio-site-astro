import type { ETheme } from '@enums';
import { isAltTheme } from '../is-alt-theme/is-alt-theme';

export const toggleAltTheme = (theme: ETheme) => {
	const alt = `-alt`;
	const nextTheme = isAltTheme(theme)
		? theme?.replace(alt, ``)
		: `${theme}${alt}`;

	return nextTheme;
};
