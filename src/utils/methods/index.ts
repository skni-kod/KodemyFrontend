import { TEXT } from '@/utils/constant';

export function isNumber(id: any): id is number {
	return !isNaN(Number(id));
}

function isUndefined(value: any): value is undefined {
	return value === undefined;
}

function isNull(value: any): value is null {
	return value === null;
}

export function isNonNull<T>(value: T | null | undefined): value is T {
	return !isUndefined(value) && !isNull(value);
}

export function isHasText(text: string | null | undefined): text is string {
	return !isUndefined(text) && !isNull(text) && text.length > 0;
}

export function doIf(condition: boolean, action: () => any) {
	condition && action();
}

export function ifThen<T>(condition: boolean, actionInTrue: () => T, actionInFalse: () => T): T {
	return condition ? actionInTrue() : actionInFalse();
}

export function ifThenGet<T>(condition: boolean, valueInTrue: T, valueInFalse: T): T {
	return condition ? valueInTrue : valueInFalse;
}

export const parseFieldsFromURLSearchParam = (fieldsString: string | undefined | null): Record<string, any> => {
	const fields: Record<string, any> = {};
	if (fieldsString) {
		const regex = /(\w+):((\d+)|"([^"]*)"|\(([^)]*)\))/g;
		let match;
		while ((match = regex.exec(fieldsString))) {
			const key = match[1];
			// number
			if (match[3]) {
				fields[key] = Number(match[3]);
				continue;
			}
			// string
			if (match[4]) {
				fields[key] = match[4];
				continue;
			}
			// array
			if (match[5]) {
				fields[key] = match[5].split(',').map((item) => item.trim());
			}
		}
	}
	return fields;
};

const mapFieldValue = (value: any) => {
	if (Array.isArray(value)) {
		return `(${value.join(',')})`;
	}
	if (typeof value === 'string') {
		return `"${value}"`;
	}
	return value.toString();
};

export const buildFieldsForURLSearchParam = (fields: Record<string, any>): string => {
	const fieldEntries = Object.entries(fields)
		.filter(([_, value]) => value !== null && value !== undefined)
		.map(([key, value], index) => {
			return `${key}\:${mapFieldValue(value)}`;
		});
	return `(${fieldEntries.join(',')})`;
};

export function transformRoleName(role: string) {
	switch (role) {
		case 'ROLE_USER':
			return TEXT.USER.ROLES.ROLE_USER;
		case 'ROLE_MODERATOR':
			return TEXT.USER.ROLES.ROLE_MODERATOR;
		case 'ROLE_ADMIN':
			return TEXT.USER.ROLES.ROLE_ADMIN;
		case 'ROLE_SUPERADMIN':
			return TEXT.USER.ROLES.ROLE_SUPERADMIN;
		default:
			return TEXT.USER.ROLES.UNKNOWN;
	}
}

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
		return monthsDifference === 1 ? `${monthsDifference} miesiąc temu` : `${monthsDifference} miesiące temu`;
	} else if (daysDifference > 0) {
		return daysDifference === 1 ? `${daysDifference} dzień temu` : `${daysDifference} dni temu`;
	} else if (hoursDifference > 0) {
		return hoursDifference === 1 ? `${hoursDifference} godzinę temu` : `${hoursDifference} godziny temu`;
	} else if (minutesDifference > 0) {
		return minutesDifference === 1 ? `${minutesDifference} minutę temu` : `${minutesDifference} minuty temu`;
	} else {
		return 'Mniej niż 1 minutę temu';
	}
}
