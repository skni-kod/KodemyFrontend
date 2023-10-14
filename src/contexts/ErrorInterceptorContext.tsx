import React, { useCallback, useState } from 'react';

type ErrorInterceptorType = {
	error: string | null;
	dispatchError: (message: string | null) => void;
};

export const ErrorInterceptorContext = React.createContext<ErrorInterceptorType>({
	error: null,
	dispatchError: () => {},
});

const ErrorInterceptorProvider = ({ children }: { children: React.ReactNode }) => {
	const [error, setError] = useState<string | null>(null);
	const errorHoldTime = !process.env.NEXT_PUBLIC_ERROR_HOLD_TIME_IN_MS
		? 5000
		: parseInt(process.env.NEXT_PUBLIC_ERROR_HOLD_TIME_IN_MS);

	const dispatchError = useCallback((message: string | null) => {
		setError(message);
		setTimeout(() => {
			setError('');
		}, errorHoldTime);
	}, []);

	return (
		<ErrorInterceptorContext.Provider value={{ error, dispatchError }}>
			{children}
		</ErrorInterceptorContext.Provider>
	);
};

export default ErrorInterceptorProvider;
