const parseFieldsFromURLSearchParam = (fieldsString: string | undefined | null): Record<string, any> => {
	const fields: Record<string, any> = {};
	if (fieldsString) {
		const regex = /(\w+):((\d+)|"([^"]*)"|\(([^)]*)\))/g;
		let match;
		while ((match = regex.exec(fieldsString))) {
			const key = match[1];
			// number
			if (match[3]) {
				fields[key] = Number(match[3]);
				continue;
			}
			// string
			if (match[4]) {
				fields[key] = match[4];
				continue;
			}
			// array
			if (match[5]) {
				fields[key] = match[5].split(',').map((item) => item.trim());
			}
		}
	}
	return fields;
};

export default parseFieldsFromURLSearchParam;
