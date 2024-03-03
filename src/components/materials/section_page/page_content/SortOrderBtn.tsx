import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useFiltersContext } from '@/contexts/FiltersContext';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import updateSearchParams from '@/utils/createQueryParams';
import { SORT_DIRECTION_PARAM, SORT_PARAM } from '@/utils/filters';

type OrderMenu = { label: string; field: string; order: 'asc' | 'desc'; apiKey: string };

export const ORDER_MENUS: OrderMenu[] = [
	{ label: 'Najnowsze', field: 'date', order: 'desc', apiKey: 'createdDate' },
	{ label: 'Najwyżej oceniane', field: 'grade', order: 'desc', apiKey: 'avgGrade' },
];

export default function SortOrderBtn() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<number | undefined>(0);
	const { filters } = useFiltersContext();

	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const orderMenu = ORDER_MENUS.findIndex(({ field }) => field === filters[SORT_PARAM]);
		setSelectedOrder(orderMenu >= 0 ? orderMenu : 0);
	}, [filters]);

	const handleToogle = () => setIsOpen((prev) => !prev);

	const handleOrder = (order: OrderMenu) => {
		const newParams = updateSearchParams(searchParams.toString(), {
			[SORT_PARAM]: order.field,
		});
		router.push(router.pathname + `?${newParams}`);
		setIsOpen(false);
	};

	return (
		<div className="relative text-primary">
			<button className="flex items-center px-2 py-1 font-semibold" onClick={handleToogle}>
				<span>Sortuj:&nbsp;</span>
				<span>{ORDER_MENUS[selectedOrder || 0].label}</span>
				{!isOpen ? (
					<FaAngleDown width={40} height={40} className="ml-1.5" />
				) : (
					<FaAngleUp width={40} height={40} className="ml-1.5" />
				)}
			</button>
			{isOpen && (
				<div className="absolute top-full w-52 p-4 mt-1 bg-bg z-10 shadow">
					<ul className="flex flex-col w-full">
						{ORDER_MENUS.map((el, idx) => (
							<li
								key={idx}
								className={`w-full px-2 py-2 hover:bg-overlay2bg ${
									idx === selectedOrder && 'text-primary font-semibold'
								} cursor-pointer`}
								onClick={() => handleOrder(el)}
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
