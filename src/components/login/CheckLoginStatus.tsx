import { useEffect, useState } from 'react';

export const useCheckLoginStatus = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const checkLoginStatus = async () => {
			try {
				const response = await fetch('http://localhost:8181/api/users/me', {
					credentials: 'include',
				});

				if (response.status === 200) {
					setIsLoggedIn(true);
				} else if (response.status === 401) {
					setIsLoggedIn(false);
				} else {
					console.error('Błąd podczas sprawdzania statusu logowania:', response.status);
				}
			} catch (error) {
				console.error('Błąd podczas sprawdzania statusu logowania:', error);
			}
		};
		checkLoginStatus();
	}, []);

	return isLoggedIn;
};
