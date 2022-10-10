import type { IPortfolio } from '@pages/portfolio/interfaces';
import sanityClient from '@common/lib/sanity-client';

/**
 * @description Fetches the projects, then merges them into the portfolio page.
 * @param portfolio
 */
export const insertPortfolioProjects = async (
	portfolio: Omit<IPortfolio, `projects`> | null
) => {
	if (!portfolio) return null;

	const projects = await sanityClient.fetch(
		`*[_type == "project"] | order(impression) {title, description, liveUrl, githubUrl, video{videoLabel, url}}`
	);

	return {
		...portfolio,
		projects,
	};
};
