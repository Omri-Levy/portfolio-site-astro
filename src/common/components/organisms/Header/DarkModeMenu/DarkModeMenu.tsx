import {
	activeClass,
	updateTheme,
	useCachedTheme,
	useCacheTheme,
	useDarkModeHotkey,
} from '@common/stores/theme';
import { dropdown } from '@directives/dropdown';
import { EResolvedTheme, ETheme } from '@enums';
import { usePrefersDarkMode } from '@hooks/usePrefersDarkMode/usePrefersDarkMode';
import type { Component } from 'solid-js';
import { DarkModeMenuToggle } from './DarkModeMenuToggle/DarkModeMenuToggle';

export interface IDarkModeMenuProps {
	labels: Record<EResolvedTheme, string>;
	dir: `rtl` | `ltr`;
}

export const DarkModeMenu: Component<IDarkModeMenuProps> = (props) => {
	useCachedTheme();
	useCacheTheme();
	usePrefersDarkMode();
	useDarkModeHotkey();

	return (
		<div
			class="dropdown-end dropdown md:border-l
			md:border-base-content/10 md:ps-3"
			id="dark-mode-menu-container"
			use:dropdown={dropdown}
		>
			<DarkModeMenuToggle />
			<ul
				tabIndex="0"
				id="dark-mode-menu"
				class={`
				focus-within:ring-gradient-1
				dropdown-content
				menu
				min-w-[12rem]
				divide-y
				divide-base-content/10
				rounded-lg
				border
				border-base-content/10
				bg-base-100
				shadow-md
				focus:outline-none
					`}
				dir={props.dir}
			>
				<li>
					<button
						id="system-mode-btn"
						classList={{ active: activeClass(ETheme.SYSTEM) }}
						onClick={updateTheme(ETheme.SYSTEM)}
					>
						<svg
							xmlns={`http://www.w3.org/2000/svg`}
							viewBox={`0 0 20 20`}
							class={`
		fill-current
			d-5
			`}
						>
							<path
								fill-rule={`evenodd`}
								d={`M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z`}
								clip-rule={`evenodd`}
							/>
						</svg>
						<span>{props.labels.system}</span>
					</button>
				</li>
				<li>
					<button
						id="dark-mode-btn"
						classList={{ active: activeClass(ETheme.DARK) }}
						onClick={updateTheme(ETheme.DARK)}
					>
						<svg
							xmlns={`http://www.w3.org/2000/svg`}
							viewBox={`0 0 20 20`}
							class={`
		fill-current
			d-5
			`}
						>
							<path
								d={`M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z`}
							/>
						</svg>
						<span>{props.labels.dark}</span>
					</button>
				</li>
				<li>
					<button
						id="light-mode-btn"
						classList={{ active: activeClass(ETheme.LIGHT) }}
						onClick={updateTheme(ETheme.LIGHT)}
					>
						<svg
							xmlns={`http://www.w3.org/2000/svg`}
							viewBox={`0 0 20 20`}
							class={`
		fill-current
			d-5
			`}
						>
							<path
								fill-rule={`evenodd`}
								d={`M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z`}
								clip-rule={`evenodd`}
							/>
						</svg>
						<span>{props.labels.light}</span>
					</button>
				</li>
			</ul>
		</div>
	);
};
