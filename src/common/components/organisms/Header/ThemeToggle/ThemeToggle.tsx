import { toggleTheme, useThemeHotkey } from '@common/stores/theme';

export default function ThemeToggle() {
	useThemeHotkey();

	return (
		<button
			id="theme-toggle"
			onClick={toggleTheme}
			class={`
				focus-visible:ring-gradient-1
				active:ring-gradient-1
				grid
				place-content-center
				rounded-full
				p-4
				text-primary
				ms-2
				d-5
				focus-visible:outline-none
			`}
		>
			<span class="sr-only">Theme toggle</span>
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
					d={`M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z`}
					clip-rule={`evenodd`}
				/>
			</svg>
		</button>
	);
}
