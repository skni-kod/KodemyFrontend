import ResultCount from '@/components/common/filter/atoms/ResultCount';
import AdminUsersBlock from './atoms/AdminUsersBlock';
import SortMenuButton from '@/components/common/filter/SortMenuButton';
import FilterMenuButton from '@/components/common/filter/atoms/FilterMenuButton';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import { useEffect, useState } from 'react';
import PageWrapper from '@/components/common/page/organisms/PageWrapper';
import Route from '@/utils/route';

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
export const pageAdminUsersRoute = (currentPage: number): Route => {
	const route = {
		pathname: `/admin/users/${currentPage}`,
	};
	window.location.href = route.pathname;
	return route;
};

export const AdminUsersContent = ({
	currentPage,
	setCurrentPage,
}: {
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
}) => {
	const [adminUserBlocks, setAdminUserBlocks] = useState<UserData[]>([]);
	const [totalItems, setTotalItems] = useState(0);
	const [isFetching, setIsFetching] = useState(true);

	const itemsPerPage = 10;
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const startIdx = (currentPage - 1) * itemsPerPage;
	const endIdx = currentPage * itemsPerPage;
	const visibleAdminUserBlocks = adminUserBlocks.slice(startIdx, endIdx);

	const { FiltersMenu, isFilterMenuOpen, setIsFilterMenuOpen, filters } = useFiltersMenu();

	useEffect(() => {
		console.log('currentPage2', currentPage - 1);
		console.log(
			`http://localhost:8081/api/users?size=${itemsPerPage}&page=${
				currentPage - 1
			}&sort=id&sort_direction=ASC`,
		);

		fetch(
			`http://localhost:8081/api/users?size=${itemsPerPage}&page=${
				currentPage - 1
			}&sort=id&sort_direction=ASC`,
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
	}, [currentPage, itemsPerPage]);

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
				setCurrentPage={setCurrentPage}
				routing={pageAdminUsersRoute}
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
