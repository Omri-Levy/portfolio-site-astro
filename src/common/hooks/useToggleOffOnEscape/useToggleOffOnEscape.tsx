import type { TVoidFunction } from '@types';
import { useDocumentListener } from '@hooks/useDocumentListener/useDocumentListener';

export const useToggleOffOnEscape = (
	ref: HTMLElement | null,
	toggleOff: TVoidFunction
) => {
	const listener = (e: KeyboardEvent) => {
		// @ts-ignore
		if (e.key !== `Escape` || !ref?.contains(e.target)) return;

		toggleOff();
	};

	useDocumentListener(`keydown`, listener);
};
