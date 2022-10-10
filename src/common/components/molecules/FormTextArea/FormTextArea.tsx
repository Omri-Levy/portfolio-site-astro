import { Component, splitProps } from 'solid-js';
import type { TFormTextAreaProps } from './interfaces';

export const FormTextArea: Component<TFormTextAreaProps> = (props) => {
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
			<label for={local.name} class={`label`}>
				<span class={`label-text`}>{local.label}</span>
			</label>
			<textarea
				id={local.name}
				class={`
				focus:ring-gradient-1
				textarea
				textarea-bordered
				w-full
				caret-secondary
				placeholder:italic
				focus:outline-none
				`}
				name={local.name}
				placeholder={local.placeholder}
				{...rest}
			/>
			<div
				aria-live="polite"
				data-felte-reporter-dom-for={local.name}
				class={`
				mt-1
				flex max-w-[40ch]
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
