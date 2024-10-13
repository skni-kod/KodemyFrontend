const buildFieldsForURLSearchParam = (fields: Record<string, any>): string => {
	const fieldEntries = Object.entries(fields).map(([key, value]) => {
		return `${key}\:(${Array.isArray(value) ? value.join(',') : value})`;
	});
	return `(${fieldEntries.join(',')})`;
};

export default buildFieldsForURLSearchParam;
