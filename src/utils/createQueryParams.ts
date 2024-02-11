export default function (readonlyURLSearchParam: string, name: string, value: string) {
	const params = new URLSearchParams(readonlyURLSearchParam);
	params.set(name, value);
	return '?' + params.toString();
}
