// Is also in use by Astro components
export const toggleDropdownClasses = (el: HTMLElement) => {
	el?.addEventListener(`mouseenter`, () => {
		el?.classList.add(`dropdown-open`);
	}, false);

	el?.addEventListener(`mouseleave`, () => {
		el?.classList.remove(`dropdown-open`);
	}, false);

	window.addEventListener(`keydown`, (e) => {
		if (e.key !== `Escape`) return;

		el?.classList.remove(`dropdown-open`);
	}, false);
}
