export const toggle = (instance: string, value: string) =>
	instance.includes(value)
		? instance.replaceAll(value, ``)
		: `${instance}${value}`;
