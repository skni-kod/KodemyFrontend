import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';

import { UserSortField } from '@/services/user/types';
import { SortDirection } from '@/utils/api/types';

type SortOrderBtnProps = {
	className?: string;
	activeSort?: number;
};

export type OrderSortOption = {
	label: string;
	field: any;
	order: SortDirection;
};

export const USER_ORDER_OPTIONS: OrderSortOption[] = [
	{ label: 'Identyfikator: rosnąco', field: UserSortField.ID, order: SortDirection.ASC },
	{ label: 'Identyfikator: malejąco', field: UserSortField.ID, order: SortDirection.DESC },
];

export default function UserSortOrderBtn({ className = '', activeSort }: SortOrderBtnProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<number>(activeSort ?? 0);
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleToggle = () => setIsOpen((prevState) => !prevState);

	const handleOrder = (orderIdx: number) => {
		setSelectedOrder(orderIdx);
		const params = new URLSearchParams(searchParams);
		params.set('sort', orderIdx.toString());
		router.push(`?${params}`);
		setIsOpen(false);
	};

	return (
		<div className={clsx('relative text-primary', className)}>
			<button className="flex items-center px-2 py-1 font-semibold" onClick={handleToggle}>
				<span>Sortuj:&nbsp;</span>
				<span>{USER_ORDER_OPTIONS[selectedOrder].label}</span>
				{!isOpen ? (
					<FaAngleDown width={40} height={40} className="ml-1.5" />
				) : (
					<FaAngleUp width={40} height={40} className="ml-1.5" />
				)}
			</button>
			{isOpen && (
				<div className="absolute top-full z-10 mt-1 w-full bg-bg p-4 shadow">
					<ul className="flex w-full flex-col">
						{USER_ORDER_OPTIONS.map((el, idx) => (
							<li
								key={idx}
								className={`w-full px-2 py-2 ${idx === selectedOrder && 'font-semibold text-primary'} cursor-pointer`}
								onClick={() => handleOrder(idx)}
							>
								{el.label}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
