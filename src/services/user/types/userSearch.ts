type UserSearch = {
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

export default UserSearch;
