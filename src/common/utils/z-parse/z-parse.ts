import { AnyZodObject, z, ZodError } from 'zod';

export const zParse = async <T extends AnyZodObject>(
	schema: T,
	req: Request
): Promise<{
	data?: z.infer<T>;
	errors?: Array<{ message: string; field?: string }>;
}> => {
	try {
		return {
			data: await schema.parseAsync(req),
		};
	} catch (err) {
		if (err instanceof ZodError) {
			return {
				errors: err.issues?.map(function (err) {
					const [firstErr] = err.path;

					return {
						message: err.message,
						field: firstErr?.toString() ?? ``,
					};
				}),
			};
		}

		throw err;
	}
};
