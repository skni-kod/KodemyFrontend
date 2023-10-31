import React, { useState, useEffect } from 'react';
import Avatar from '../../common/navbar/atoms/Avatar';

interface UserData {
	username: string;
	email: string | null;
	createdDate: string;
	role: {
		name: string;
	};
}

const UserProfileContent = () => {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/users/me', {
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
		<div className="text-black2white">
			<h1 className="text-2xl font-bold mb-4">Profil użytkownika:</h1>
			<div className="grid grid-cols-2 gap-2 w-128">
				<p className="text-right">Nazwa użytkownika:</p>
				<p>{userData.username}</p>

				<p className="text-right">Email:</p>
				<p>{userData.email || 'Brak adresu email'}</p>

				<p className="text-right">Logo:</p>
				<div className="flex items-center mr-2">
					<Avatar />
				</div>

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

export default UserProfileContent;
