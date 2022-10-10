import { ELocale } from '@common/enums';
import { useMediaQuery } from '@hooks/useMediaQuery/useMediaQuery';
import { Component, For } from 'solid-js';
import { NavLink } from '../NavLink/NavLink';
import type { TNavLinks } from '../NavLink/types';

export interface IDynamicLinksOrderProps {
	navLinks: TNavLinks;
	locale: ELocale;
}

export const ResponsiveLinksOrder: Component<IDynamicLinksOrderProps> = (
	props
) => {
	const basePath = () =>
		props.locale === ELocale.EN ? `` : `/${props.locale}`;
	const isXS = useMediaQuery(`(max-width: 377.6px)`);
	// Match the order of the pages to the order of the nav links.
	// Top to bottom on small devices, right to left on larger devices.
	// Not using flex-col-reverse to avoid hurting accessibility. (tab index)
	const links = () =>
		props.navLinks
			.slice()
			.sort((a, b) =>
				typeof isXS() !== `undefined` && isXS()
					? a?.order - b?.order
					: b?.order - a?.order
			);

	return (
		<ul
			class={`
		flex
		flex-col
		xxs:flex-row
		`}
		>
			<For each={links()}>
				{({ url, text }) => (
					<NavLink href={`${basePath()}${url}`}>
						{text?.[props.locale as `en` | `he`]}
					</NavLink>
				)}
			</For>
		</ul>
	);
};
