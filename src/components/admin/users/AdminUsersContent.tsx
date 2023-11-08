import ResultCount from '@/components/common/filter/atoms/ResultCount';
import AdminUsersBlock from './atoms/AdminUsersBlock';
import SortMenuButton from '@/components/common/filter/SortMenuButton';
import FilterMenuButton from '@/components/common/filter/atoms/FilterMenuButton';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import { useCallback, useEffect, useState } from 'react';
import PageWrapper from '@/components/common/page/organisms/PageWrapper';

interface UserData {
	id: string;
	username: string;
	email: string | null;
	createdDate: string;
	photo: string;
	role: {
		name: string;
	};
}

const AdminUsersContent = () => {
	const [adminUserBlocks, setAdminUserBlocks] = useState<UserData[]>([]);
	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(4);
	const [isFetching, setIsFetching] = useState(true);

	const blockHeight = 200;

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

	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const startIdx = (currentPage - 1) * itemsPerPage;
	const endIdx = currentPage * itemsPerPage;
	const visibleAdminUserBlocks = adminUserBlocks.slice(startIdx, endIdx);

	const { FiltersMenu, isFilterMenuOpen, setIsFilterMenuOpen, filters } = useFiltersMenu();
	// `http://localhost:8081/api/users?size=${visibleAdminUserBlocks}&sort=id&sort_direction=ASC`,
	useEffect(() => {
		console.log('itemsPerPage ', itemsPerPage);
		console.log(`http://localhost:8081/api/users?size=${itemsPerPage}&sort=id&sort_direction=ASC`);
		fetch(
			`http://localhost:8081/api/users?size=${visibleAdminUserBlocks}&sort=id&sort_direction=ASC`,
		)
			.then((response) => response.json())
			.then((data) => {
				console.log('data ', data);
				setAdminUserBlocks(data.content);
				setTotalItems(data.totalElements);
				setIsFetching(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

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
			<PageWrapper
				currentPage={currentPage}
				totalPages={totalPages}
				handlePageChange={handlePageChange}
			>
				<div className="flex flex-col w-full gap-4 pt-6 pb-4 px-3 md:pl-20 2xl:pl-0">
					{isFetching ? (
						<p>Loading...</p>
					) : (
						visibleAdminUserBlocks.map((user, index) => (
							<AdminUsersBlock key={index} userId={user.id} />
						))
					)}
				</div>
			</PageWrapper>
		</>
	);
};
export default AdminUsersContent;
