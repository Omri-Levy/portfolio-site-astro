import type { IPage } from './interfaces';

export type TArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type TAnyArray = Array<any>;

export type TPages = Array<IPage>;

export type TGenericFunction<TArgs extends TAnyArray, TReturns> = (
	...args: TArgs
) => TReturns;

export type TVoidFunction = () => void;
