export const formatPhone = (phone: string, prefix: string) => {
	const formattedPhone = phone?.replace(/-/g, ``);

	return prefix + formattedPhone?.slice(1);
};
