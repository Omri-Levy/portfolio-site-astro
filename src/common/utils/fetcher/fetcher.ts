import type { EMethod } from '@enums';

/**
 * @description Handles timeout, errors, headers, and transforming the
 * response to json.
 * @param url
 * @param method
 * @param data
 */
export const fetcher = async <TBody extends Record<PropertyKey, any>>(
	url: string,
	{
		method,
		body,
		options,
		timeout = 5000,
	}: {
		method: EMethod;
		body?: TBody | undefined;
		options?: RequestInit | undefined;
		timeout?: number;
	}
) => {
	const controller = new AbortController();
	const signal = controller.signal;
	const timeoutRef = setTimeout(() => controller.abort(), timeout);

	try {
		const res = await fetch(url, {
			method,
			body: body ? JSON.stringify(body) : null,
			headers: {
				'Content-Type': `application/json`,
				...options?.headers,
			},
			signal,
			...options,
		});

		if (!res.ok) {
			throw new Error(`(${res.status}) ${res.statusText}`);
		}

		return res.json();
	} catch (err) {
		throw err;
	} finally {
		clearTimeout(timeoutRef);
	}
};
