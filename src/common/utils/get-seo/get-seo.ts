import sanityClient from '@common/lib/sanity-client';

export const getSEO = async () =>
	sanityClient.fetch(
		`*[_type == "seo"][0]{title,description,url,image,locale,localeAlt,type}`
	);
