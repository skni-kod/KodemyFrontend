import kodemyAPI from '@/utils/kodemyAPI';

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
