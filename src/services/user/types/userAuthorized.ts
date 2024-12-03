import User from '@/services/user/types/user';

type UserAuthorized = User & {
	isEnabled: boolean;
	isLocked: boolean;
};

export default UserAuthorized;
