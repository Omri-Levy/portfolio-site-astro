import type { TAnyArray, TGenericFunction } from "@common/types";

export const debounce = <TArgs extends TAnyArray, TReturns>(callback: TGenericFunction<TArgs, TReturns>, ms = 0) => {
	let timeout: NodeJS.Timeout | null = null;

	return (...args: TArgs) => {
		if (timeout) clearTimeout(timeout);

		timeout = setTimeout(() => {
			callback(...args);
		}, ms);
	};
};
