import type { EMethod } from "@common/enums";
import { fetcher } from "@utils/fetcher/fetcher";
import { isErrorWithMessage } from "@utils/is-error-with-message/is-error-with-mesage";
import {createStore} from 'solid-js/store';

export const useFetch = <TData,>(
	url: string,
	{
		method,
		options,
		timeout = 5000,
	}: {
		method: EMethod;
		options?: RequestInit | undefined;
		timeout?: number;
	}
) => {
	const [resource, setResource] = createStore<{
		data: undefined | TData;
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
		error: undefined | string;
	}>({
		data: undefined,
		isLoading: false,
		isSuccess: false,
		isError: false,
		error: undefined,
	});
	const fetchWrapper = async <TBody extends Record<PropertyKey, any>>(
		body?: TBody
	) => {
		try {
			setResource((prev) => ({
				...prev,
				isLoading: true,
			}));

			const data = await fetcher(url, {
				method,
				body,
				options,
				timeout,
			});

			setResource((prev) => ({
				...prev,
				data,
				isLoading: false,
				isSuccess: true,
			}));
		} catch (err) {
			setResource((prev) => ({
				...prev,
				isLoading: false,
				isError: true,
				error: isErrorWithMessage(err)
					? err.message
					: `Error does not have the message property`,
			}));

			throw err;
		}
	};

	return [fetchWrapper, resource] as const;
};
