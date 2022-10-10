import { useDocumentListener } from '../useDocumentListener/useDocumentListener';
import { handleMenuArrowNavigation } from '@utils/handle-menu-arrow-navigation/handle-menu-arrow-navigation';

export const useMenuArrowNavigation = (ref: HTMLElement | undefined) => {
	useDocumentListener(`keydown`, handleMenuArrowNavigation(ref));
};
