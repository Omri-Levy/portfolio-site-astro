import type { IPage, ILocaleString, ILocaleBlock } from '@common/interfaces';

import type { TProjects } from './types';

export interface IProjectProps {
	title: ILocaleString | undefined;
	description: ILocaleBlock | undefined;
	liveUrl: string;
	githubUrl: string;
	video: {
		label: string;
		url: string;
	};
}

export interface IPortfolio extends Pick<IPage, `title` | `id` | `order`> {
	projects: TProjects | null;
}

export interface IPortfolioProps {
	page: IPortfolio;
}
