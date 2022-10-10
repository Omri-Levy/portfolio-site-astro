import { createSignal, onCleanup, onMount } from 'solid-js';

export const useMediaQuery = (mediaQuery: string) => {
	const [matches, setMatches] = createSignal<boolean | undefined>(
		typeof window !== `undefined`
			? window.matchMedia(mediaQuery).matches
			: undefined
	);
	const listener = (e: MediaQueryListEvent) => {
		setMatches(e.matches);
	};

	onMount(() => {
		window.matchMedia(mediaQuery).addEventListener(`change`, listener, false);
	});

	onCleanup(() => {
		window.matchMedia(mediaQuery).removeEventListener(`change`, listener, false);
	});

	return matches;
};
