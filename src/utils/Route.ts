export default abstract class Route {
	path: string;
	[key: string]: any;

	protected constructor(path: string) {
		this.path = path;
	}

	protected getParams(): string {
		const paramPairs = Object.keys(this)
			.filter((key) => key !== 'url')
			.map((key) => `${key}=${encodeURIComponent(this[key])}`)
			.filter((pair) => pair.indexOf('=') !== -1);

		return paramPairs.length ? `?${paramPairs.join('&')}` : '';
	}

	protected getIndex() {
		return this.path + this.getParams();
	}
}
