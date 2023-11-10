export function calculateTimeDifference(createdDate: string) {
	const currentDate = new Date();
	const creationDate = new Date(createdDate);
	const timeDifference = currentDate.getTime() - creationDate.getTime();

	const minutesDifference = Math.floor(timeDifference / (1000 * 60));
	const hoursDifference = Math.floor(minutesDifference / 60);
	const daysDifference = Math.floor(hoursDifference / 24);
	const monthsDifference = Math.floor(daysDifference / 30);
	const yearsDifference = Math.floor(daysDifference / 365);

	if (yearsDifference > 0) {
		return yearsDifference === 1 ? `${yearsDifference} rok temu` : `${yearsDifference} lat temu`;
	} else if (monthsDifference > 0) {
		return monthsDifference === 1
			? `${monthsDifference} miesiąc temu`
			: `${monthsDifference} miesiące temu`;
	} else if (daysDifference > 0) {
		return daysDifference === 1 ? `${daysDifference} dzień temu` : `${daysDifference} dni temu`;
	} else if (hoursDifference > 0) {
		return hoursDifference === 1
			? `${hoursDifference} godzinę temu`
			: `${hoursDifference} godziny temu`;
	} else if (minutesDifference > 0) {
		return minutesDifference === 1
			? `${minutesDifference} minutę temu`
			: `${minutesDifference} minuty temu`;
	} else {
		return 'Mniej niż 1 minutę temu';
	}
}
