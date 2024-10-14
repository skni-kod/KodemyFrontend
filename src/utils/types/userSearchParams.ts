import { SearchParamsEnhanced } from '@/utils/types/index';

export type UserFields = {
	phrase?: string;
	username?: string;
	email?: string;
	role?: string;
};

type UserSearchParams = SearchParamsEnhanced<UserFields>;

export default UserSearchParams;
