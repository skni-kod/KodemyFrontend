import kodemyAPI from '@/utils/kodemyAPI';

export async function fetchMaterialGrades(
	materialId: number,
	fromDate: string,
	toDate: string,
	size: number | null,
	page: number | null,
) {
	try {
		console.log('materialId ', materialId);
		console.log('fromDate ', fromDate);
		console.log('toDate ', toDate);

		const response = await kodemyAPI.get(
			`/api/materials/${materialId}/grades?from=${fromDate}&to=${toDate}`,
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
