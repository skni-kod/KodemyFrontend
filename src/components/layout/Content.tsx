import React from 'react';
import { useSidebarContext } from '@/contexts/SidebarStateContext';
import Sidebar from '@/components/layout/Sidebar';
import clsx from 'clsx';

export function Content({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	const { isOpen } = useSidebarContext();

	return (
		<main className={className}>
			<Sidebar
				className={clsx(
					'fixed top-0 h-full pt-[4rem] bg-bg text-text2bg shadow-md',
					isOpen ? 'w-64' : 'w-[3.75rem]',
				)}
			/>
			<div className={clsx('w-full min-h-full', isOpen ? 'pl-64' : 'pl-[3.75rem]')}>{children}</div>
		</main>
	);
}
