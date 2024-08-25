import SearchParams from '@/utils/types/searchParams';

export type UserFields = {
	phrase?: string;
};

type UserSearchParams = SearchParams<UserFields>;

export default UserSearchParams;
