import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PaginatorBtn } from '@/components/materials/section_page/page_content/PaginatorBtn';
import { useCallback } from 'react';
import createQueryParams from '@/utils/createQueryParams';
import { useSearchParams } from 'next/navigation';

type PaginatorProps = {
	page: number;
	total: number;
};

const classNames = 'h-10 p-2 border-2 rounded-2xl shrink-0 shadow-md cursor-pointer';

export default function Paginator({ page, total }: PaginatorProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handlePageChange = (page: number) => {
		router.push(router.pathname + refreshCategoryParam(page.toString()));
	};

	const refreshCategoryParam = useCallback(
		(value: string) => createQueryParams(searchParams.toString(), 'page', value),
		[searchParams],
	);

	const renderPageButtons = () => {
		return (
			<>
				<PaginatorBtn
					className="block leading-none aspect-square"
					onClick={() => handlePageChange(1)}
					selected={false}
				>
					1
				</PaginatorBtn>
				<HiOutlineDotsHorizontal />
				<PaginatorBtn
					className="block leading-none aspect-square"
					onClick={() => handlePageChange(3)}
					selected={false}
				>
					3
				</PaginatorBtn>
				<PaginatorBtn
					className="block leading-none aspect-square"
					onClick={() => {}}
					selected={true}
				>
					4
				</PaginatorBtn>
				<PaginatorBtn
					className="block leading-none aspect-square"
					onClick={() => handlePageChange(4)}
					selected={false}
				>
					5
				</PaginatorBtn>
				<HiOutlineDotsHorizontal />
				<PaginatorBtn
					className="block leading-none aspect-square"
					onClick={() => handlePageChange(total)}
					selected={false}
				>
					{total}
				</PaginatorBtn>
			</>
		);
	};

	return (
		<div className="flex items-center gap-6 mx-auto">
			<PaginatorBtn className="flex items-center" onClick={() => {}} selected>
				<FaArrowLeft />
				&nbsp;Poprzednia
			</PaginatorBtn>
			<div className="flex items-center gap-2">{renderPageButtons()}</div>
			<PaginatorBtn className="flex items-center" onClick={() => {}} selected>
				Następna&nbsp;
				<FaArrowRight />
			</PaginatorBtn>
		</div>
	);
}
