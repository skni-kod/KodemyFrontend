import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Content } from '@/components/layout/Content';
import { useSidebarContext } from '@/contexts/SidebarStateContext';
import Sidebar from '@/components/layout/Sidebar';
import clsx from 'clsx';

type PageProps = {
	clear?: boolean;
	children: React.ReactNode;
};

export default function Page({ clear = false, children }: PageProps) {
	const { isOpen } = useSidebarContext();

	return (
		<>
			{!clear && <Navbar className="w-full h-[3.75rem]" />}
			<main className="flex-1 pt-20">
				{!clear && (
					<Sidebar
						className={clsx(
							'fixed top-0 h-full pt-[4rem] bg-bg text-text2bg shadow-md',
							isOpen ? 'w-64' : 'w-[3.75rem]',
						)}
					/>
				)}
				<div className={clsx('w-full min-h-full', !clear && (isOpen ? 'pl-64' : 'pl-[3.75rem]'))}>
					<div className="w-full max-w-lg p-4 m-auto">{children}</div>
				</div>
			</main>
		</>
	);
}
