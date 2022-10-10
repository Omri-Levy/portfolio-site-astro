import sanityClient from '@common/lib/sanity-client';

export const fetchHero = async () =>
	sanityClient.fetch(
		`*[_type == "hero"][0]{heading,callToAction,background}`
	);
