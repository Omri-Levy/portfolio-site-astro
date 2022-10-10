import { ETheme } from '@common/enums';
import { handleAltTheme } from '@components/organisms/Header/DarkModeMenu/utils/handle-alt-theme/handle-alt-theme';
import { toggleAltTheme } from '@components/organisms/Header/ThemeToggle/utils/toggle-alt-theme/toggle-alt-theme';
import { useDocumentListener } from '@hooks/useDocumentListener/useDocumentListener';
import { usePrefersDarkMode } from '@hooks/usePrefersDarkMode/usePrefersDarkMode';
import { createEffect, createSignal, onMount } from 'solid-js';

export const [theme, setTheme] = createSignal<ETheme>(ETheme.INITIAL);
export const useCachedTheme = () => {
	onMount(() => {
		const cachedTheme = localStorage.getItem(`theme`);

		if (!cachedTheme) return;

		setTheme(cachedTheme as ETheme);
	});
};
export const resolvedTheme = () => theme().replace(`-alt`, ``);
export const isDarkMode = () => resolvedTheme() === ETheme.DARK;
export const isLightMode = () => resolvedTheme() === ETheme.LIGHT;
export const isSystemMode = () => resolvedTheme() === ETheme.SYSTEM;
export const getNextTheme = () => {
	const nextTheme = (theme: ETheme, prefersDark: boolean) => {
		const isSystemTheme = theme.includes(ETheme.SYSTEM);

		if (isSystemTheme && prefersDark) {
			return theme.replace(ETheme.SYSTEM, ETheme.DARK);
		}

		if (isSystemTheme && !prefersDark) {
			return theme.replace(ETheme.SYSTEM, ETheme.LIGHT);
		}

		return theme;
	};

	return nextTheme;
};
export const useDarkModeHotkey = () => {
	const themes = [ETheme.LIGHT, ETheme.DARK, ETheme.SYSTEM];
	const switchTheme = (e: KeyboardEvent) => {
		if (!e.ctrlKey || !e.altKey || e.key !== `j`) return;

		const nextTheme =
			themes.indexOf(theme().replace(`-alt`, ``) as ETheme) + 1;
		const withFallback =
			themes[nextTheme > themes.length - 1 ? 0 : nextTheme];

		if (!withFallback) return;

		setTheme(handleAltTheme(theme(), withFallback));
	};

	useDocumentListener(`keydown`, switchTheme);
};
export const useThemeHotkey = () => {
	const switchTheme = (e: KeyboardEvent) => {
		if (!e.ctrlKey || !e.altKey || e.key !== `c`) return;

		const nextTheme = toggleAltTheme(theme());

		setTheme(nextTheme as ETheme);
	};

	useDocumentListener(`keydown`, switchTheme);
};

export const updateTheme = (nextTheme: ETheme) => () => {
	setTheme(handleAltTheme(theme(), nextTheme));
};
export const activeClass = (themeLabel: ETheme) =>
	themeLabel === resolvedTheme();
export const useCacheTheme = () => {
	const prefersDark = usePrefersDarkMode();
	const nextTheme = getNextTheme();

	createEffect(() => {
		if (theme() === ETheme.INITIAL) return;

		document.documentElement.dataset.theme = nextTheme(theme(), !!prefersDark());
		localStorage.setItem(`theme`, theme());
	});
};
export const toggleTheme = () => setTheme(toggleAltTheme(theme()) as ETheme);
export const setThemeFromHead = () => {
	const cachedTheme = localStorage.getItem(`theme`);
	const prefersDarkMode = window.matchMedia(
		`(prefers-color-scheme: dark)`
	).matches;
	const nextTheme = getNextTheme();
	const theme = nextTheme(cachedTheme as ETheme ?? ETheme.SYSTEM, prefersDarkMode);

	document.documentElement.dataset.theme = theme;
}
