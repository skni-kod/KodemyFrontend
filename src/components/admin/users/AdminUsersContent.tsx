import { useEffect, useState } from 'react';
import AdminUsersBox from './molecules/AdminUsersBox';

interface UserData {
	id: string;
	username: string;
	email: string | null;
	createdDate: string;
	role: {
		name: string;
	};
}

const AdminUsersContent = () => {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		const userId = 1;
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
					credentials: 'include',
				});
				if (response.status === 200) {
					const data = await response.json();
					setUserData(data);
				} else {
					console.error('Wystąpił błąd podczas pobierania danych');
				}
			} catch (error) {
				console.error('Wystąpił błąd podczas pobierania danych:', error);
			}
		};

		fetchData();
	}, []);

	if (!userData) {
		return <div className="text-black2white">Loading...</div>;
	}

	return (
		<>
			<div className="w-full px-3 text-black2white">
				<h2 className="w-full mt-4 text-semibold text-[36px]">Użytkownicy</h2>
			</div>
			<AdminUsersBox userData={userData} />
		</>
	);
};
export default AdminUsersContent;
