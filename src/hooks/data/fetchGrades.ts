import kodemyAPI from '@/utils/kodemyAPI';
import { getToken } from './getToken';

export async function fetchMaterialGrades(
	materialId: number,
	fromDate: string,
	toDate: string,
	size: number | null,
	page: number | null,
) {
	try {
		const response = await kodemyAPI.get(
			`/api/materials/${materialId}/grades?sort=createdDate&sort_direction=DESC&search_fields=%7B%22materialId%22%3A%2015%7D`,
			{
				params: {
					from: fromDate,
					to: toDate,
					size: size,
					page: page,
				},
				withCredentials: true,
			},
		);

		if (response.status === 200) {
			const grades = response.data.content;

			const ratingFive = grades.filter((grade: { value: number }) => grade.value === 5).length;
			const ratingFour = grades.filter((grade: { value: number }) => grade.value === 4).length;
			const ratingThree = grades.filter((grade: { value: number }) => grade.value === 3).length;
			const ratingTwo = grades.filter((grade: { value: number }) => grade.value === 2).length;
			const ratingOne = grades.filter((grade: { value: number }) => grade.value === 1).length;

			return { ratingFive, ratingFour, ratingThree, ratingTwo, ratingOne };
		} else {
			console.error('Wystąpił błąd podczas pobierania ocen');
			return null;
		}
	} catch (error) {
		console.error('Wystąpił błąd podczas pobierania ocen:', error);
		return null;
	}
}

export async function sendRatingToServer(materialId: number, rating: number) {
	getToken();
	const token =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6WyJDQU5fQVBQUk9WRURfTUFURVJJQUwiLCJDQU5fSU5ERVgiLCJDQU5fQVNTSUdOX1JPTEVTIiwiQ0FOX01PRElGWV9URUNITk9MT0dJRVMiLCJDQU5fQVVUT19BUFBST1ZFRF9NQVRFUklBTCIsIkNBTl9HRVRfVVNFUl9JTkZPIiwiQ0FOX1JFQURfTk9USUZJQ0FUSU9OUyIsIkNBTl9HRVRfVVNFUlMiLCJDQU5fQkFOTklOR19VU0VSUyJdLCJpZCI6MSwidXNlcm5hbWUiOiJaZWdhcmVrUEwiLCJpYXQiOjE3MDMyNjk0MTAsImV4cCI6MTcwMzI3MzAxMH0.e1jYu6lzSV2HzUYSJsG6Te7j46UXallSRQ1y7prVozI';
	try {
		// const axiosResponse = await kodemyAPI.get(`/api/materials/${materialId}/grades`);		// to nie działa przez CORS
		// console.log('axiosResponse', axiosResponse);
		// const url = axiosResponse.config.baseURL + '/api/materials/${materialId}/grades';
		// console.log('url', url);
		const url = `http://localhost:8082/api/materials/${materialId}/grades`; // to działa
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				grade: rating.toString(),
			}),
		});

		console.log('sendRatingToServer response', response);
		if (!response.ok) {
			console.error('Błąd podczas wysyłania oceny do serwera:');
		} else {
			console.log('Ocena została pomyślnie wysłana do serwera.');
		}
	} catch (error) {
		console.error('Błąd podczas wysyłania oceny:', error);
	}
}
