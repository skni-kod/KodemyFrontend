import React from 'react';
import { FaCircle } from 'react-icons/fa6';
import clsx from 'clsx';

export default function IsActiveStatus({ isActive }: { isActive: boolean }) {
	return (
		<div className={clsx('flex items-center leading-none', isActive ? 'text-green' : 'text-error')}>
			<FaCircle />
			&nbsp;{isActive ? 'Aktywny' : 'Nieaktywny'}
		</div>
	);
}
