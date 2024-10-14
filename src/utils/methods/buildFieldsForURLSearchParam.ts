const buildFieldsForURLSearchParam = (fields: Record<string, any>): string => {
	console.log('fields', fields);
	const fieldEntries = Object.entries(fields)
		.filter(([_, value]) => value !== null && value !== undefined)
		.map(([key, value], index) => {
			return `${key}\:${mapFieldValue(value)}`;
		});
	return `(${fieldEntries.join(',')})`;
};

const mapFieldValue = (value: any) => {
	if (Array.isArray(value)) {
		return `(${value.join(',')})`;
	}
	if (typeof value === 'string') {
		return `"${value}"`;
	}
	return value.toString();
};

export default buildFieldsForURLSearchParam;
