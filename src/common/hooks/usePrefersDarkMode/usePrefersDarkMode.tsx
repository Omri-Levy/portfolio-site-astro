import { createSignal, onCleanup, onMount } from 'solid-js';

export const usePrefersDarkMode = () => {
	const [prefersDarkMode, setPrefersDarkMode] = createSignal<boolean>();
	const listener = (e: { matches: boolean }) => setPrefersDarkMode(e.matches);

	onMount(() => {
		setPrefersDarkMode(
			window.matchMedia(`(prefers-color-scheme: dark)`).matches
		);

		window
			.matchMedia(`(prefers-color-scheme: dark)`)
			.addEventListener(`change`, listener, false);
	});

	onCleanup(() => {
		window
			.matchMedia(`(prefers-color-scheme: dark)`)
			.removeEventListener(`change`, listener, false);
	});

	return prefersDarkMode;
};
