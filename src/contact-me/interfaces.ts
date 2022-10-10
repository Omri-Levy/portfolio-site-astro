import type { IInfo, IPage } from '@common/interfaces';

export interface IContactMe extends Pick<IPage, `id` | `title` | `order`> {}

export interface IContactMeProps {
	page: IContactMe;
	info: IInfo;
}
