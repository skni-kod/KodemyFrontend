interface UserData {
	id: string;
	username: string;
	email: string | null;
	createdDate: string;
	photo: string;
	role: {
		name: string;
	};
}

const fetchAllUsers = async (
	currentPage: number | undefined,
	itemsPerPage: number,
	setAdminUserBlocks: React.Dispatch<React.SetStateAction<UserData[]>>,
	setTotalElements: React.Dispatch<React.SetStateAction<number>>,
	setTotalPages: React.Dispatch<React.SetStateAction<number>>,
	setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	try {
		if (currentPage === undefined || isNaN(currentPage)) {
			throw new Error('Invalid currentPage value');
		}
		const response = await fetch(
			`http://localhost:8081/api/users?size=${itemsPerPage}&page=${
				currentPage - 1
			}&sort=id&sort_direction=ASC`,
		);
		const data = await response.json();
		setAdminUserBlocks(data.content);
		setTotalElements(data.totalElements);
		setTotalPages(data.totalPages);
		setIsFetching(false);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

export default fetchAllUsers;
