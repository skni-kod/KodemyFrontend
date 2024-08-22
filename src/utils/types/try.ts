type Success<T> = { success: true; value: T };
type Failure = { success: false; error: Error };

export default class Try<T> {
	private value: Success<T> | Failure;

	private constructor(value: Success<T> | Failure) {
		this.value = value;
	}

	static success<T>(value: T): Try<T> {
		return new Try<T>({ success: true, value });
	}

	static failure(error: Error): Try<never> {
		return new Try<never>({ success: false, error });
	}

	static ofNullable<T>(value: T | null | undefined): Try<T> {
		if (value != null) {
			return this.success(value);
		}
		return this.failure(new Error('empty value'));
	}

	isSuccess(): this is Try<T> & { result: Success<T> } {
		return this.value.success;
	}

	then<U>(action: (value: T) => U): Try<T | U> {
		if (!this.value.success) return this;
		try {
			return Try.success(action(this.value.value));
		} catch (error) {
			return Try.failure(new Error('Action failed'));
		}
	}
}
