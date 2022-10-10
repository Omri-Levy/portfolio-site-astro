import type { TPages } from '@types';

/**
 * @description Returns an array of the href and title of pages, sorted by the order property.
 * @param pages
 */
export const pagesToNavLinks = (pages: TPages) =>
	pages?.map(({ title, url, order }) => ({
		text: title,
		url,
		order,
	}));
