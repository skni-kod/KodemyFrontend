type User = {
	id: number;
	username: string;
	email: string;
	photo: string;
	createdDate: string;
	role: { id: number; name: string };
};

export default User;
