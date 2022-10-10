import { Component, splitProps } from 'solid-js';
import type { TFormInputProps } from './interfaces';

export const FormInput: Component<TFormInputProps> = (props) => {
	const [local, rest] = splitProps(props, [
		`name`,
		`label`,
		`helperText`,
		`placeholder`,
		`colSpan`,
	]);

	return (
		<div
			class={`
		form-control
		w-full
		col-span-${local.colSpan ?? `full`}
		`}
		>
			<label class={`label`}>
				<span class={`label-text`}>{local.label}</span>
			</label>
			<input
				placeholder={props.placeholder}
				class={`
				focus:ring-gradient-1
				input
				input-bordered
				w-full
				caret-secondary
				placeholder:italic
				focus:outline-none
				`}
				name={local.name}
				{...rest}
			/>
			<div
				aria-live="polite"
				data-felte-reporter-dom-for={local.name}
				class={`
			 mt-1
			 flex
			 max-w-[40ch]
			 items-center
			 text-xs
			 text-error
			 space-s-1
			 `}
			/>
			<label class={`label`}>
				<span class={`label-text-alt`}>{local.helperText}</span>
			</label>
		</div>
	);
};
