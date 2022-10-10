import { createEffect } from 'solid-js';
import type { TAnyArray } from '@types';

export const useConsole = <TItems extends TAnyArray>(...values: TItems) => {
	createEffect(() => {
		console.log(...values);
	}, [values]);
};
