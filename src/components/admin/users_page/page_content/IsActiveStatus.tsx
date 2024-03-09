import clsx from 'clsx';
import { FaCircle } from 'react-icons/fa6';
import React from 'react';

export default function IsActiveStatus({ isActive }: { isActive: boolean }) {
	return (
		<div
			className={clsx(
				'flex items-center leading-none',
				isActive ? 'text-green-500' : 'text-red-500',
			)}
		>
			<FaCircle />
			&nbsp;{isActive ? 'Aktywny' : 'Nieaktywny'}
		</div>
	);
}
