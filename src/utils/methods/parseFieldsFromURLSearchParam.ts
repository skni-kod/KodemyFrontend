const parseFieldsFromURLSearchParam = (fieldsString: string): Record<string, any> => {
	const fields: Record<string, any> = {};
	const regex = /(\w+):(\d+)|(\w+):"([^"]*)"|(\w+):\(([^)]*)\)/g;
	let match;
	while ((match = regex.exec(fieldsString))) {
		if (match[1]) {
			const key = match[1];
			const value = match[2].split(',').map(Number);
			fields[key] = value;
		} else if (match[3]) {
			const key = match[3];
			const value = match[4];
			fields[key] = value;
		}
	}
	return fields;
};

export default parseFieldsFromURLSearchParam;
