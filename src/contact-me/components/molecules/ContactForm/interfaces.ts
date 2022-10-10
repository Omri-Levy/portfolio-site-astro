import type { ELocale } from '@common/enums';
import type { IValidationMessages } from '@pages/contact-me/utils/get-validation-schema/interfaces';

export interface IContactMeFormFields {
	name: string;
	email: string;
	message: string;
}

export interface IContactMeFormTranslations {
	email: string;
	emailExample: string;
	fullName: string;
	fullNameExample: string;
	message: string;
	messageLimit: string;
	placeholder: string;
	contactMeSuccessMessage: string;
	contactMeErrorMessage: string;
	contactForm: string;
	send: string;
}

export interface IContactMeFormProps {
	validationMessages: IValidationMessages;
	translations: IContactMeFormTranslations;
	locale: ELocale;
}
