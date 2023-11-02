interface UserData {
	id: string;
	username: string;
	email: string | null;
	createdDate: string;
	role: {
		name: string;
	};
}

const AdminUsersBox = ({ userData }: { userData: UserData }) => {
	return (
		<div className="text-black2white ">
			<h1 className="text-2xl font-bold mb-4 pt-8">Użytkownik {userData.id}</h1>
			<div className="grid grid-cols-2 gap-2 w-128">
				<p className="text-right">Nazwa użytkownika:</p>
				<p>{userData.username}</p>

				<p className="text-right">Email:</p>
				<p>{userData.email || 'Brak adresu email'}</p>

				<p className="text-right">Data utworzenia:</p>
				<p>{userData.createdDate.replace('T', ' ')}</p>

				<p className="text-right">Rola:</p>
				<p>{userData.role.name.replace('ROLE_', '')}</p>

				<p className="text-right">Liczba wysłanych materiałów:</p>
				<p>?</p>
			</div>
		</div>
	);
};
export default AdminUsersBox;
