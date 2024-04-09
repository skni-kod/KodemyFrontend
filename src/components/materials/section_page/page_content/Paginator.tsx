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

	const paginationRange = [];
	const visiblePages = 5;
	let startPage = page - 2;
	let endPage = page + 2;

	if (startPage < 1) {
		startPage = 1;
		endPage = Math.min(visiblePages, total);
	}

	if (endPage > total) {
		endPage = total;
		startPage = Math.max(1, endPage - visiblePages + 1);
	}

	for (let i = startPage; i <= endPage; i++) {
		paginationRange.push(i);
	}

	const shouldDisplayFirstPage = startPage > 1;
	const shouldDisplayLastPage = endPage < total;

	return (
		<div className="flex items-center gap-6 mx-auto">
			{page + 1 > 1 && (
				<PaginatorBtn
					className="flex items-center"
					onClick={() => handlePageChange(page + 1 - 1)}
					selected={true}
				>
					<FaArrowLeft />
					&nbsp;Poprzednia
				</PaginatorBtn>
			)}
			<div className="flex items-center gap-2">
				{shouldDisplayFirstPage && (
					<>
						<PaginatorBtn onClick={() => handlePageChange(1)} selected={page + 1 === 1}>
							1
						</PaginatorBtn>
						<HiOutlineDotsHorizontal />
					</>
				)}
				{paginationRange.map((pageNum) => (
					<PaginatorBtn
						key={pageNum}
						onClick={() => handlePageChange(pageNum)}
						selected={page + 1 === pageNum}
					>
						{pageNum}
					</PaginatorBtn>
				))}
				{shouldDisplayLastPage && (
					<>
						<HiOutlineDotsHorizontal />
						<PaginatorBtn onClick={() => handlePageChange(total)} selected={page + 1 === total}>
							{total}
						</PaginatorBtn>
					</>
				)}
			</div>
			{page + 1 < total && (
				<PaginatorBtn
					className="flex items-center"
					onClick={() => handlePageChange(page + 1 + 1)}
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
