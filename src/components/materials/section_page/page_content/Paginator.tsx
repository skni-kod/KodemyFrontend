import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { PaginatorBtn } from '@/components/materials/section_page/page_content/PaginatorBtn';
import { useSearchParams } from 'next/navigation';
import updateSearchParams from '@/utils/createQueryParams';
import { PAGE_PARAM } from '@/utils/filters';

type PaginatorProps = {
	page: number;
	total: number;
};

const Paginator: React.FC<PaginatorProps> = ({ page, total }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handlePageChange = (page: number) => {
		const newParams = updateSearchParams(searchParams.toString(), {
			[PAGE_PARAM]: page.toString(),
		});
		router.push(router.pathname + `?${newParams}`);
	};

	const paginationVisiblePages = 3;
	const paginationRange = [];

	let startPage = Math.max(1, page - Math.floor(paginationVisiblePages / 2));
	let endPage = Math.min(total, startPage + paginationVisiblePages - 1);

	if (endPage - startPage + 1 < paginationVisiblePages) {
		startPage = Math.max(1, endPage - paginationVisiblePages + 1);
	}

	for (let i = startPage; i <= endPage; i++) {
		paginationRange.push(i);
	}

	return (
		<div className="flex items-center gap-6 mx-auto">
			{page > 1 && (
				<PaginatorBtn
					className="flex items-center"
					onClick={() => handlePageChange(page - 1)}
					selected={true}
				>
					<FaArrowLeft />
					&nbsp;Poprzednia
				</PaginatorBtn>
			)}
			<div className="flex items-center gap-2">
				{startPage > 1 && (
					<>
						<PaginatorBtn onClick={() => handlePageChange(1)} selected={page === 1}>
							1
						</PaginatorBtn>
						{startPage > 2 && <HiOutlineDotsHorizontal />}
					</>
				)}
				{paginationRange.map((pageNum) => (
					<PaginatorBtn
						key={pageNum}
						onClick={() => handlePageChange(pageNum)}
						selected={page === pageNum}
					>
						{pageNum}
					</PaginatorBtn>
				))}
				{endPage < total && (
					<>
						{total - endPage > 1 && <HiOutlineDotsHorizontal />}
						<PaginatorBtn onClick={() => handlePageChange(total)} selected={page === total}>
							{total}
						</PaginatorBtn>
					</>
				)}
			</div>
			{page < total && (
				<PaginatorBtn
					className="flex items-center"
					onClick={() => handlePageChange(page + 1)}
					selected={true}
				>
					Następna&nbsp;
					<FaArrowRight />
				</PaginatorBtn>
			)}
		</div>
	);
};

export default Paginator;
