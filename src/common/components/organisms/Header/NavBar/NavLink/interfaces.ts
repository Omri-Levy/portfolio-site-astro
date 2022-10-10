import type { ILocaleString } from '@interfaces';
import type { ComponentProps } from 'solid-js';

export interface INavLink {
	url: string;
	text: ILocaleString;
	order: number;
}

export interface INavLinkProps extends ComponentProps<`a`> {
	href: string;
}
