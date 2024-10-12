import SearchParams from '@/utils/types/searchParams';

export type UserFields = {
	phrase?: string;
	username?: string;
	email?: string;
	role?: string;
};

type UserSearchParams = SearchParams<UserFields>;

export default UserSearchParams;
