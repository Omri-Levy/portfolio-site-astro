import type { TNavLinks } from 'src/common/components/organisms/Header/NavBar/NavLink/types';
import type { IAboutMe } from '../about-me/interfaces';
import type { IContactMe } from '../contact-me/interfaces';
import type { IHero } from '../hero/interfaces';
import type { IPortfolio } from '../portfolio/interfaces';
import type { TVoidFunction } from './types';

export interface ILocaleString {
	en: string;
	he: string;
}

export interface ILocaleBlock {
	en: Array<string>;
	he: Array<string>;
}

export interface ISEOProps {
	title: string;
	description: string;
	image: string;
	url: string;
	type: string;
	locale: string;
	localeAlt: string;
}

export interface AppProps {
	hero: IHero;
	aboutMe: IAboutMe;
	portfolio: IPortfolio;
	contactMe: IContactMe;
	navLinks: TNavLinks;
	info: IInfo;
	seo: ISEOProps;
}

export interface IPage {
	id: string;
	title: ILocaleString;
	subtitle: ILocaleString;
	body: ILocaleBlock;
	url: string;
	order: number;
	photo: {
		alt: string;
		url: string;
	};
}

export interface IInfo {
	email: string;
	phone: string;
	linkedinUrl: string;
	githubUrl: string;
	/* An href to the PDF */
	cvUrl: string;
}

export interface IWithChildren {
	children: any;
}

export interface IFormField {
	name: string;
	label: string;
	helperText: string;
	placeholder: string;
	colSpan?: number | string;
}

export interface IGrecaptcha {
	render: TVoidFunction;
	execute: () => Promise<string>;
}
