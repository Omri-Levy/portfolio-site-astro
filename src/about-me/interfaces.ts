import { IPage } from '@common/interfaces';

export interface IAboutMe
	extends Pick<IPage, `title` | `id` | `body` | `subtitle` | `order`> {
	photo: {
		alt: string;
		path: string;
	};
}

export interface IAboutMeProps {
	page: IAboutMe;
}
