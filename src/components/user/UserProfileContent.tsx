import React, { useState, useEffect } from 'react';
import Avatar from '../common/navbar/atoms/Avatar';

// Define an interface for the user data
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
				const response = await fetch('http://localhost:8181/api/users/me', {
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
		return <div>Loading...</div>;
	}

	return (
		<div className="text-black2white">
			<h1>Profil użytkownika:</h1>
			<p>Username: {userData.username}</p>
			<p>Email: {userData.email || 'Brak adresu email'}</p>
			<p>Logo: </p>
			<Avatar />
			<p>Data utworzenia: {userData.createdDate}</p>
			<p>Rola: {userData.role.name}</p>
		</div>
	);
};

export default UserProfileContent;
