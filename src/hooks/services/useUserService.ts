const useUserService = () => {
	return {};
};

export default useUserService;

export type User = {
	id: number;
	username: string;
	email: string;
	photo: string;
	createdDate: string;
	role: { id: number; name: string };
};
