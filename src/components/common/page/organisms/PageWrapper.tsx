import React from 'react';

interface PageWrapperProps {
	currentPage: number;
	totalPages: number;
	setCurrentPage: (newPage: number) => void;
	children: React.ReactNode;
	routing: (currentPage: number, categoryId?: number) => void;
	categoryId?: number;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
	currentPage,
	totalPages,
	setCurrentPage,
	children,
	routing,
	categoryId,
}) => {
	const paginationRange = [];
	const paginationVisiblePages = 5;

	let startPage = currentPage - 2;
	let endPage = currentPage + 2;

	if (startPage < 1) {
		startPage = 1;
		endPage = Math.min(paginationVisiblePages, totalPages);
	}

	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = Math.max(1, endPage - paginationVisiblePages + 1);
	}

	for (let i = startPage; i <= endPage; i++) {
		paginationRange.push(i);
	}
	const shouldDisplayFirstPage = startPage > 2;
	const shouldDisplayLastPage = endPage < totalPages - 1;

	const handlePageChange = (newPage: number, categoryId?: number | undefined) => {
		setCurrentPage(newPage);
		if (categoryId === undefined) {
			routing(newPage);
		} else {
			routing(newPage, categoryId);
		}
	};

	return (
		<div className="w-ful min-h-[70.4vh] px-20">
			{children}
			<nav className="flex justify-center text-black2white pt-6 pb-10 text-[22px]">
				<ul className="pagination flex space-x-2">
					{shouldDisplayFirstPage && (
						<li>
							<button onClick={() => handlePageChange(1, categoryId)}>1</button>
						</li>
					)}
					{shouldDisplayFirstPage && <li>...</li>}
					{paginationRange.map((index) => (
						<li key={index} className={` ${currentPage === index ? 'active' : ''}`}>
							<button
								className={` ${
									currentPage === index
										? 'active bg-sky-500 hover:bg-blue-600 text-white rounded px-1.5 py-0 border border-sky-500 hover:border-blue-600'
										: 'bg-none text-white rounded px-1.5 py-0'
								}`}
								onClick={() => handlePageChange(index, categoryId)}
							>
								{index}
							</button>
						</li>
					))}
					{shouldDisplayLastPage && <li className="page-item disabled">...</li>}
					{shouldDisplayLastPage && (
						<li>
							<button onClick={() => handlePageChange(totalPages, categoryId)}>{totalPages}</button>
						</li>
					)}
				</ul>
			</nav>
		</div>
	);
};

export default PageWrapper;