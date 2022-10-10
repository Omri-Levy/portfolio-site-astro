import { FormInput } from '@common/components/molecules/FormInput/FormInput';
import { FormTextArea } from '@common/components/molecules/FormTextArea/FormTextArea';
import { config } from '@common/config';
import { EMethod } from '@common/enums';
import { grecaptcha } from '@common/stores/grecaptcha';
import reporterDom from '@felte/reporter-dom';
import { createForm } from '@felte/solid';
import { validator } from '@felte/validator-zod';
import { useFetch } from '@hooks/useFetch/useFetch';
import { maxLengthMessage } from '@pages/contact-me/utils/get-validation-schema/constants';
import { getValidationSchema } from '@pages/contact-me/utils/get-validation-schema/get-validation-schema';
import { Component, Match, Show, Switch } from 'solid-js';
import type { z } from 'zod';
import type { IContactMeFormProps } from './interfaces';

// eslint-disable-next-line quotes
declare module 'solid-js' {
	namespace JSX {
		interface Directives {
			form: (node: HTMLFormElement) => {
				destroy: () => void;
			};
		}
	}
}

export const ContactForm: Component<IContactMeFormProps> = (props) => {
	const validationSchema = () =>
		getValidationSchema(props.validationMessages);
	const endpoint = () => `/api/contact-me?locale=${props.locale}`;
	const [mutate, resource] = useFetch(endpoint(), {
		method: EMethod.POST,
		timeout: config.TIMEOUT_IN_MS,
	});
	const execute = async () => grecaptcha()?.execute();
	const onSubmit = async (
		values: z.infer<ReturnType<typeof validationSchema>>
	) => {
		if (!execute) {
			return;
		}

		return mutate({
			...values,
			'g-recaptcha-response': await execute(),
		});
	};
	const { form, data } = createForm<
		z.infer<ReturnType<typeof validationSchema>>
	>({
		onSubmit,
		initialValues: {
			name: ``,
			email: ``,
			message: ``,
		},
		extend: [validator({ schema: validationSchema() }), reporterDom()],
	});
	const messageLimit = () =>
		props.translations.messageLimit
			// Message character limit
			.replace(`{{chars}}`, `${data(`message`).length}`)
			.replace(`{{limit}}`, `${maxLengthMessage}`);

	return (
		<form
			use:form={form}
			class={`
				grid
				grid-cols-1
				gap-x-4
				md:grid-cols-2
				`}
		>
			<legend class={`col-span-full`}>
				{props.translations.contactForm}
			</legend>
			<FormInput
				type={`email`}
				colSpan={1}
				name={`email`}
				label={props.translations.email}
				helperText={props.translations.emailExample}
				placeholder={props.translations.placeholder}
			/>
			<FormInput
				colSpan={1}
				name={`name`}
				label={props.translations.fullName}
				helperText={props.translations.fullNameExample}
				placeholder={props.translations.placeholder}
			/>
			<FormTextArea
				name={`message`}
				label={props.translations.contactForm}
				helperText={messageLimit()}
				placeholder={props.translations.placeholder}
				rows={3}
			/>
			<Switch>
				<Match when={resource.isSuccess}>
					<div
						class={`
				col-span-full
				mt-1
				flex
				items-center
				text-success
				space-s-1
				`}
					>
						<svg
							xmlns={`http://www.w3.org/2000/svg`}
							class={`
						flex-shrink-0
						stroke-current
						d-7
						`}
							fill={`none`}
							viewBox={`0 0 24 24`}
						>
							<path
								stroke-linecap={`round`}
								stroke-linejoin={`round`}
								d={`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`}
							/>
						</svg>
						<span>
							{props.translations.contactMeSuccessMessage}
						</span>
					</div>
				</Match>
				<Match when={resource.isError}>
					<div
						class={`
				col-span-full
				mt-1
				flex
				items-center
				text-error
				space-s-1
				`}
					>
						<svg
							xmlns={`http://www.w3.org/2000/svg`}
							class={`
						flex-shrink-0
						stroke-current
						d-7
						`}
							fill={`none`}
							viewBox={`0 0 24 24`}
						>
							<path
								stroke-linecap={`round`}
								stroke-linejoin={`round`}
								stroke-width={`2`}
								d={`M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z`}
							/>
						</svg>
						<span>{props.translations.contactMeErrorMessage}</span>
					</div>
				</Match>
			</Switch>
			<div
				class={`
				col-span-full
				mt-4
				flex
				justify-end
				`}
			>
				<Show
					when={!resource.isLoading && !!execute}
					fallback={
						<button
							class={`
							btn-link-secondary
							loading-btn
							loading
							min-h-[3.25rem]
							min-w-[6rem]
							`}
							type={`submit`}
						>
							<span class="sr-only">
								${props.translations.send}
							</span>
						</button>
					}
				>
					<button
						class={`
					btn-link-secondary
					min-h-[3.25rem]
					 min-w-[6rem]
					 `}
						type={`submit`}
					>
						{/* Using children is as of writing the only way to conditionally render the text without the result being blank */}
						{props.translations.send}
					</button>
				</Show>
			</div>
		</form>
	);
};
