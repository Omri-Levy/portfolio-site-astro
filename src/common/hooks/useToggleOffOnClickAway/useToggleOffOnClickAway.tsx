import type { TVoidFunction } from '@types';
import { useDocumentListener } from '@hooks/useDocumentListener/useDocumentListener';

export const useToggleOffOnClickAway = (
	ref: HTMLElement | undefined,
	toggleOff: TVoidFunction
) => {
	useDocumentListener(`click`, (e) => {
		// @ts-ignore
		if (ref.current?.contains(e.target)) return;

		toggleOff();
	});
};
