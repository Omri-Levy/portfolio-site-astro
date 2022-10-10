import ImigixClient from '@imgix/js-core';

export const imgix = new ImigixClient({
	domain: import.meta.env.IMGIX_DOMAIN,
	secureURLToken: import.meta.env.IMGIX_TOKEN,
	includeLibraryParam: false,
});
