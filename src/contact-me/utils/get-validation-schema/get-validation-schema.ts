// Validation values
import { z } from 'zod';
import {
	maxLengthEmail,
	maxLengthFullName,
	maxLengthMessage,
	minLength,
} from './constants';
import type { IValidationMessages } from './interfaces';

export const getValidationSchema = ({
	minFullNameMsg,
	minMessageMsg,
	maxFullNameMsg,
	maxEmailMsg,
	maxMessageMsg,
	invalidEmailMsg,
}: IValidationMessages) => {
	return z.object({
		name: z
			.string()
			.min(minLength, minFullNameMsg)
			.max(maxLengthFullName, maxFullNameMsg),
		email: z
			.string()
			.email(invalidEmailMsg)
			.max(maxLengthEmail, maxEmailMsg),
		message: z
			.string()
			.min(minLength, minMessageMsg)
			.max(maxLengthMessage, maxMessageMsg),
	});
};
