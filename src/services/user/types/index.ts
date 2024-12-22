export type User = {
	id: number;
	username: string;
	email: string;
	photo: string;
	createdDate: string;
	role: { id: number; name: string };
};

export type UserAuthorized = User & {
	isEnabled: boolean;
	isLocked: boolean;
};

export type UserFiltersParam = {
	phrase?: string;
	username?: string;
	email?: string;
	role?: string;
};

export type UserSearch = {
	id: number;
	username: string;
	email: string;
	photo: string;
	createdDate: Date;
	role: {
		id: number;
		name: string;
	};
	isEnabled: boolean;
	isLocked: boolean;
};

export enum UserSortField {
	ID,
	USERNAME,
	EMAIL,
	ROLE,
	IS_EXPIRED,
	IS_ENABLED,
}