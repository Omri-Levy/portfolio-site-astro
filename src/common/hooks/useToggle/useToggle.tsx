import { createSignal } from 'solid-js';

export const useToggle = (initialState = false) => {
	const [isToggled, setIsToggled] = createSignal(initialState);

	const toggle = () => setIsToggled(!isToggled());
	const toggleOn = () => setIsToggled(true);
	const toggleOff = () => setIsToggled(false);

	return { isToggled, toggle, toggleOff, toggleOn };
};
