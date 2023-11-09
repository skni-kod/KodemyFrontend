import ResultCount from '@/components/common/filter/atoms/ResultCount';
import AdminUsersBlock from './atoms/AdminUsersBlock';
import SortMenuButton from '@/components/common/filter/SortMenuButton';
import FilterMenuButton from '@/components/common/filter/atoms/FilterMenuButton';
import useFiltersMenu from '@/hooks/useFiltersMenu';
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

interface AdminUsersContentProps {
	currentPageForUsers: number;
	currentPageForButtons: number;
	setCurrentPage: (currentPage: number) => void;
	adminUserBlocks: UserData[];
	totalItems: number;
	isFetching: boolean;
	totalPages: number;
	itemsPerPage: number;
}

export const AdminUsersContent = ({
	currentPageForUsers,
	currentPageForButtons,
	setCurrentPage,
	adminUserBlocks,
	totalItems,
	isFetching,
	totalPages,
	itemsPerPage,
}: AdminUsersContentProps) => {
	const startIdx = (currentPageForUsers - 1) * itemsPerPage;
	const endIdx = currentPageForUsers * itemsPerPage;
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
			<PageWrapper
				currentPage={currentPageForButtons}
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
