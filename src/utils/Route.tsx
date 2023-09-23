export default abstract class Route {
	url: string;
	[key: string]: any;

	protected constructor(url: string) {
		this.url = url;
	}

	protected getParams(): string {
		const paramPairs = Object.keys(this)
			.filter((key) => key !== 'url')
			.map((key) => `${key}=${encodeURIComponent(this[key])}`)
			.filter((pair) => pair.indexOf('=') !== -1);

		return paramPairs.length ? `?${paramPairs.join('&')}` : '';
	}

	getIndex() {
		return this.url + this.getParams();
	}
}
