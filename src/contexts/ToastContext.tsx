'use client';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'danger' | 'info' | 'warning';

interface Toast {
	id: number;
	message: string;
	type: ToastType;
	durationMs: number;
}

interface ToastContextType {
	toasts: Toast[];
	addToast: (message: string, type: ToastType, durationMs: number) => void;
	removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
	children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const addToast = useCallback((message: string, type: ToastType, durationMs: number) => {
		const id = Date.now();
		setToasts((prevToasts) => [...prevToasts, { id, message, type, durationMs }]);

		setTimeout(() => {
			removeToast(id);
		}, durationMs);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const removeToast = useCallback((id: number) => {
		setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
	}, []);

	return <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>;
};

export const useToast = (): ToastContextType => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};
