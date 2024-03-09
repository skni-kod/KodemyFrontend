type ParamsToUpdate = {
	[key: string]: string | undefined;
};

export default function updateSearchParams(
	oldSearchParams: string,
	paramsToUpdate: ParamsToUpdate,
) {
	const currentParams = new URLSearchParams(oldSearchParams.toString());

	Object.entries(paramsToUpdate).forEach(([key, value]) => {
		if (value) {
			currentParams.set(key, value);
			return;
		}
		currentParams.delete(key);
	});

	return currentParams.toString();
}
