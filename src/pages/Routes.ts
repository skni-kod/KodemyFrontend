import Route from '@/utils/Route';

export namespace Materials {
	export class IndexRoute extends Route {
		constructor(path: string) {
			super(path);
		}

		category = 1;

		getRoute(category: number) {
			this.category = category;
			return this.getIndex();
		}
	}
}
