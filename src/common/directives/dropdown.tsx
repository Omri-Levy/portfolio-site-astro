import { useMenuArrowNavigation } from '@hooks/useMenuArrowNavigation/useMenuArrowNavigation';
import { toggleDropdownClasses } from '@utils/toggle-dropdown-classes/toggle-dropdown-classes';
import { onMount } from 'solid-js';

// eslint-disable-next-line quotes
declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			dropdown: (el: HTMLElement) => void;
		}
	}
}

export const dropdown = (el: HTMLElement) => {
	onMount(() => {
		/**
		 * Navigate the dark mode menu on up/down arrow keys.
		 */
		useMenuArrowNavigation(el);
		toggleDropdownClasses(el);
	});
};
