import { ELocale } from '@enums';

export const getDir = (language: ELocale) =>
	language === ELocale.HE ? `rtl` : `ltr`;
