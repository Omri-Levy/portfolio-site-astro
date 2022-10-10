import type { TPages } from '@types';
import sanityClient from '@common/lib/sanity-client';

export const fetchPages = async (): Promise<TPages> =>
	sanityClient.fetch(
		`*[_type == "page"]{id,order,title,url,subtitle,body,photo{alt,path}}`
	);
