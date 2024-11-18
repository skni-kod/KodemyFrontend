/* eslint-disable prettier/prettier */
'use client';
import React from 'react';
import Toast from './Toast';
import { useToast } from '@/contexts/ToastContext';

const ToastContainer: React.FC = () => {
	const { toasts, removeToast } = useToast();

	return (
		<div className="fixed bottom-0 right-0 m-4 w-64 space-y-4 2xs:m-6 2xs:w-80">
			{toasts.map((toast, index) => (
				<Toast
					key={toast.id}
					message={toast.message}
					type={toast.type}
					durationMs={toast.durationMs}
					index={index}
					onClose={() => removeToast(toast.id)}
				/>
			))}
		</div>
	);
};

export default ToastContainer;
