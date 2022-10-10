import type { IErrorWithMessage } from './interfaces';

export const isErrorWithMessage = (error: unknown): error is IErrorWithMessage =>
	typeof error === `object` &&
	error !== null &&
	`message` in error &&
	typeof (error as IErrorWithMessage).message === `string`;
