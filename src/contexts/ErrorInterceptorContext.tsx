import React, { useCallback, useState } from 'react';

const ErrorInterceptorContext = React.createContext({});

export default ErrorInterceptorContext;

type ErrorProviderProps = {
	children: React.ReactNode;
};

export const ErrorInterceptorProvider = ({ children }: ErrorProviderProps) => {
	const [error, setError] = useState<string | null>(null);
	const errorHoldTime = !process.env.ERROR_HOLD_TIME_IN_MS
		? 5000
		: parseInt(process.env.ERROR_HOLD_TIME_IN_MS);

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
