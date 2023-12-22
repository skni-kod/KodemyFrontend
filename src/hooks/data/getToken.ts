import kodemyAPI from '@/utils/kodemyAPI';

export async function getToken() {
	try {
		const response = await kodemyAPI.get(`/api/oauth2/token`);

		if (response.status === 200) {
			console.log('getToken response', response);
			const data = response.data.bearer;
			console.log('data', data);
			return { data };
		} else {
			console.error('Wystąpił błąd podczas pobierania tokenu');
			return null;
		}
	} catch (error) {
		console.error('Wystąpił błąd podczas pobierania tokenu:', error);
		return null;
	}
}
