import type { ETheme } from '@enums';

export const isAltTheme = (theme: ETheme) => theme?.includes(`-alt`);
