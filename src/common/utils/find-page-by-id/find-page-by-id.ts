import { TPages } from '@types';

/**
 * @description Finds a page by its kebab-case id.
 * @param pages
 * @param regex
 */
export const findPageById = (pages: TPages, id: string) =>
	pages?.find((page) => page?.id === id) ?? null;
