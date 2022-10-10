import { onCleanup, onMount } from 'solid-js';

export const useDocumentListener = <K extends keyof DocumentEventMap>(
	type: K,
	listener: (this: Document, ev: DocumentEventMap[K]) => void,
	options?: boolean | AddEventListenerOptions
) => {
	onMount(() => {
		document.addEventListener(type, listener, options);
	});

	onCleanup(() => {
		document.removeEventListener(type, listener, options);
	});
};
