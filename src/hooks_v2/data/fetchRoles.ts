import kodemyAPI from '@/utils/kodemyAPI';

export async function fetchRoles() {
	try {
		const response = await kodemyAPI.get(`/api/roles`, {
			withCredentials: true,
		});

		if (response.status === 200) {
			return response.data;
		} else {
			console.error('Wystąpił błąd podczas pobierania danych');
			return null;
		}
	} catch (error) {
		console.error('Wystąpił błąd podczas pobierania danych:', error);
		return null;
	}
}
