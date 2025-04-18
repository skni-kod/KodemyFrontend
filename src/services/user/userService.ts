import { Session } from '@/contexts/SessionContext';
import { User, UserAuthorized, UserFiltersParam, UserSearch, UserSortField } from '@/services/user/types';
import kodemyApi from '@/utils/api';
import { ApiService, Pageable, SearchRequestParams, SortDirection } from '@/utils/api/types';
import { InternalServerErrorApiError } from '@/utils/api/types/apiError';

export default class UserService extends ApiService {
	public static async getUsers(
		params: SearchRequestParams<UserSortField, UserFiltersParam>,
	): Promise<Pageable<UserSearch>> {
		const { size, page, sort, sort_direction, filters } = params;

		const requestParams = new URLSearchParams({
			size: size.toString(),
			page: page > 0 ? (page - 1).toString() : '0',
			sort: UserSortField[sort],
			sort_direction: SortDirection[sort_direction],
			filters: filters ? JSON.stringify(filters) : '{}',
		});

		try {
			return await kodemyApi.get<Pageable<UserSearch>>(`/api/users?${requestParams}`).then((res) => res.data);
		} catch (err) {
			console.debug(err);
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async getUserById(session: Session | undefined, id: number): Promise<User> {
		try {
			return await kodemyApi.get<User>(`/api/users/${id}`).then((res) => res.data);
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async getMe(): Promise<UserAuthorized> {
		try {
			return await kodemyApi.get<UserAuthorized>(`/api/users/me`).then((res) => res.data);
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}
}
