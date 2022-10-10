import type { ETheme } from '@enums';

export const handleAltTheme = (currentTheme: ETheme, nextTheme: ETheme) =>
	(currentTheme?.includes(`-alt`) ? `${nextTheme}-alt` : nextTheme) as ETheme;
