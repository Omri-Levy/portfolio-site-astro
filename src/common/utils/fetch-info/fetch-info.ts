import sanityClient from '@common/lib/sanity-client';

/**
 * @description i.e phone, email, social links, and cv.
 */
export const fetchInfo = async () =>
	sanityClient.fetch(
		`*[_type == "info"][0]{email,phone,"cvUrl": cv,linkedinUrl,githubUrl}`
	);
