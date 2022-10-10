export const handleMenuArrowNavigation =
(ref: HTMLElement | undefined) =>
 (e: KeyboardEvent) => {
	const keys = [`ArrowUp`, `ArrowDown`];

	if (!ref?.contains(document.activeElement) || !keys.includes(e.key))
		return;

	e.preventDefault();

	const lis = Array.from(ref.querySelectorAll(`li button`));
	const activeBtn =
		lis.find((el) => el === document.activeElement) ??
		lis.find((el) => el.classList.contains(`active`));
	let index = activeBtn ? lis.indexOf(activeBtn) : 0;

	e.key === `ArrowDown` ? ++index : --index;

	if (index < 0) {
		index = lis.length - 1;
	} else if (index > lis.length - 1) {
		index = 0;
	}

	const liBtn = lis[index];

	// @ts-ignore
	liBtn?.focus();
}
