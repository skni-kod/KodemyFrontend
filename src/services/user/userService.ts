import { ApiService, Pageable, SearchRequestParams, SortDirection } from '@/utils/api/types';
import kodemyApi from '@/utils/api';
import { InternalServerErrorApiError } from '@/utils/api/types/apiError';
import { User, UserFiltersParam, UserSearch, UserSortField } from '@/services/user/types';
import { Session } from '@/contexts/SessionContext';

export default class UserService extends ApiService {
	public static async getUsers(
		params: SearchRequestParams<UserSortField, UserFiltersParam>,
	): Promise<Pageable<UserSearch>> {
		const { size, page, sort, sort_direction, filters } = params;

		const requestParams = new URLSearchParams({
			size: size.toString(),
			page: page.toString(),
			sort: UserSortField[sort],
			sort_direction: SortDirection[sort_direction],
			filters: filters ? JSON.stringify(filters) : '{}',
		});

		try {
			return await kodemyApi.get<Pageable<UserSearch>>(`/api/users?${requestParams}`).then((res) => res.data);
		} catch (err) {
			console.log(err);
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async getUserById(session: Session | undefined, id: number): Promise<User> {
		try {
			return await kodemyApi
				.get<User>(`/api/users/${id}`, session ? this.withCredentials(session.token.bearer) : {})
				.then((res) => res.data);
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}
}
