import { fetchPages } from '../fetch-pages/fetch-pages';
import { insertPortfolioProjects } from '@pages/portfolio/utils/insert-projects/insert-portfolio-projects';
import { findPageById } from '../find-page-by-id/find-page-by-id';
import { fetchHero } from '@pages/hero/utils/fetch-hero/fetch-hero';

/**
 * @description Fetches the pages, returning only the required properties, and inserting an id to each page.
 */
export const getPages = async () => {
	const pages = await fetchPages();
	const hero = await fetchHero();
	const aboutMe = findPageById(pages, `about-me`);
	const portfolio = await insertPortfolioProjects(
		findPageById(pages, `portfolio`)
	);
	const contactMe = findPageById(pages, `contact-me`);
	const notFound = findPageById(pages, `not-found`);

	return {
		hero,
		aboutMe,
		contactMe,
		portfolio,
		notFound,
		pages,
	};
};
