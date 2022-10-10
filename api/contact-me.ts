import type { VercelApiHandler } from '@vercel/node';
import 'isomorphic-fetch';
import { ELocale, EMethod } from '../src/common/enums';
import en from '../src/common/locales/en.json';
import he from '../src/common/locales/he.json';
import { fetcher } from '../src/common/utils/fetcher/fetcher';
import { zParse } from '../src/common/utils/z-parse/z-parse';
import {
	maxLengthEmail,
	maxLengthFullName,
	maxLengthMessage,
	minLength,
} from '../src/contact-me/utils/get-validation-schema/constants';
import { getValidationSchema } from '../src/contact-me/utils/get-validation-schema/get-validation-schema';

const contactMe: VercelApiHandler = async (req, res) => {
	try {
		if (!process.env.FORMSPREE_API_URL) {
			throw new Error(`process.env.FORMSPREE_API_URL is undefined`);
		}

		const translations = req.query?.locale === ELocale.HE ? he : en;
		const transformer = (msg: string, field: string, chars: number) =>
			msg?.replace(`{{field}}`, field).replace(`{{chars}}`, `${chars}`);
		const messages = {
			minFullNameMsg: transformer(
				translations?.minCharsMsg,
				translations?.fullName,
				minLength
			),
			minMessageMsg: transformer(
				translations?.minCharsMsg,
				translations?.message,
				minLength
			),
			maxFullNameMsg: transformer(
				translations?.maxCharsMsg,
				translations?.fullName,
				maxLengthFullName
			),
			maxEmailMsg: transformer(
				translations?.maxCharsMsg,
				translations?.email,
				maxLengthEmail
			),
			maxMessageMsg: transformer(
				translations?.maxCharsMsg,
				translations?.message,
				maxLengthMessage
			),
			invalidEmailMsg: translations?.invalidEmailMsg,
		};

		if (!req.body[`g-recaptcha-response`]) {
			const errors = [
				{
					message: `Please verify you are not a robot.`,
					path: `g-recaptcha-response`,
				},
			];

			console.error(errors);

			return res.status(400).send({
				errors,
			});
		}

		const validationSchema = getValidationSchema(messages);
		const { errors, data } = await zParse(validationSchema, req.body);

		if (errors?.length) {
			console.error(errors);

			return res.status(400).send({ errors });
		}

		const response = await fetcher(process.env.FORMSPREE_API_URL, {
			method: EMethod.POST,
			body: {
				...data,
				'g-recaptcha-response': req.body[`g-recaptcha-response`],
			},
		});

		return res.status(200).send(response);
	} catch (err) {
		console.error(err);

		return res
			.status(500)
			.send({ errors: [{ message: `Something went wrong...` }] });
	}
};

export default contactMe;
