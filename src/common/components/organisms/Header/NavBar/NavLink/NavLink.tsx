import {
	children,
	Component,
	createEffect,
	createSignal,
	splitProps,
} from 'solid-js';
import type { INavLinkProps } from './interfaces';

export const NavLink: Component<INavLinkProps> = (props) => {
	const [local, rest] = splitProps(props, [`href`]);
	const [hash, setHash] = createSignal();
	const child = children(() => props.children);

	createEffect(() => {
		const [, newHash] = local.href?.split(`#`);

		setHash(newHash);
	});

	return (
		<li
			class={`
pe-10
last-of-type:pe-0
hover:animate-pulse
sm:pe-12
`}
		>
			<a
				href={local.href}
				class={`
		focus-visible:ring-gradient-1
		active:ring-gradient-1 
		rounded-md
		p-1
		text-xs
		font-bold
		uppercase
		tracking-widest
		focus-visible:outline-none
		sm:text-sm
		`}
				data-hash={hash()}
				{...rest}
			>
				{child()}
			</a>
			<div
				class={`
		ms-1
		mt-1
		h-1
		w-0
		bg-gradient-to-r
		from-primary
		to-secondary
		me-auto
		xxs:mx-auto
		`}
			/>
		</li>
	);
};
