import kodemyAPI from '@/utils/kodemyAPI';
import { useState, useEffect } from 'react';

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
export function fetchUserById(userId: string) {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await kodemyAPI.get(`/api/users/${userId}`, {
					withCredentials: true,
				});
				if (response.status === 200) {
					const data: UserData = response.data;
					setUserData(data);
				} else {
					console.error('Wystąpił błąd podczas pobierania danych');
				}
			} catch (error) {
				console.error('Wystąpił błąd podczas pobierania danych:', error);
			}
		};
		fetchData();
	}, [userId]);

	return userData;
}
