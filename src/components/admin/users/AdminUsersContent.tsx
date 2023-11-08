import ResultCount from '@/components/common/filter/atoms/ResultCount';
import AdminUsersBlock from './atoms/AdminUsersBlock';
import SortMenuButton from '@/components/common/filter/SortMenuButton';
import FilterMenuButton from '@/components/common/filter/atoms/FilterMenuButton';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import { useCallback, useEffect, useState } from 'react';

const AdminUsersContent = () => {
	const userId = '1';
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const blockHeight = 200; // piksele

	const calculateItemsPerPage = useCallback(() => {
		const windowHeight = window.innerHeight;
		const newItemsPerPage = Math.floor(windowHeight / blockHeight);
		return newItemsPerPage;
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const newItemsPerPage = calculateItemsPerPage();
			setCurrentPage(1);
			setItemsPerPage(newItemsPerPage);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [calculateItemsPerPage]);

	const adminUserBlocks = Array.from({ length: 18 }, (_, index) => (
		<AdminUsersBlock key={index} userId={userId} />
	));

	const totalItems = adminUserBlocks.length;
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const startIdx = (currentPage - 1) * itemsPerPage;
	const endIdx = currentPage * itemsPerPage;
	const visibleAdminUserBlocks = adminUserBlocks.slice(startIdx, endIdx);

	const { FiltersMenu, isFilterMenuOpen, setIsFilterMenuOpen, filters } = useFiltersMenu();

	return (
		<>
			<div className="w-full px-3 md:pl-20 2xl:pl-0 text-black2white">
				<div className="px-0 md:px-[1vw] pb-4">
					<h2 className="w-full mt-4 text-semibold text-[5vw] md:text-[36px]">Użytkownicy</h2>
				</div>
				<div className="flex justify-between items-center w-full pt-4 px-8">
					<ResultCount value={totalItems} />
					<div className="relative flex gap-x-8 text-black2white cursor-pointer">
						{!isFilterMenuOpen && <SortMenuButton />}
						<FilterMenuButton isMenuOpen={isFilterMenuOpen} setIsMenuOpen={setIsFilterMenuOpen} />
					</div>
				</div>
			</div>
			<div className="w-full px-3 text-black2white">{isFilterMenuOpen && <FiltersMenu />}</div>
			<div className="flex flex-col w-full gap-4 pt-6 pb-4 px-3 md:pl-20 2xl:pl-0">
				{visibleAdminUserBlocks}
			</div>
			<div className="flex justify-center text-black2white pt-1 pb-5">
				<nav>
					<ul className="pagination flex space-x-2">
						{Array.from({ length: totalPages }, (_, index) => (
							<li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
								<button
									className={`page-link ${
										currentPage === index + 1 ? 'active bg-blue-500 text-white rounded h-6 w-4' : ''
									}`}
									onClick={() => handlePageChange(index + 1)}
								>
									{index + 1}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};
export default AdminUsersContent;
