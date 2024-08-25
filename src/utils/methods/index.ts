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
