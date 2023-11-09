import React from 'react';

interface PageWrapperProps {
	currentPage: number;
	totalPages: number;
	setCurrentPage: (newPage: number) => void;
	children: React.ReactNode;
	routing: (currentPage: number) => void;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
	currentPage,
	totalPages,
	setCurrentPage,
	children,
	routing,
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

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		routing(newPage);
	};
	return (
		<div>
			{children}
			<nav className="flex justify-center text-black2white pt-1 pb-5">
				<ul className="pagination flex space-x-2">
					{shouldDisplayFirstPage && (
						<li>
							<button onClick={() => handlePageChange(1)}>1</button>
						</li>
					)}
					{shouldDisplayFirstPage && <li>...</li>}
					{paginationRange.map((index) => (
						<li key={index} className={` ${currentPage === index ? 'active' : ''}`}>
							<button
								className={` ${
									currentPage === index
										? 'active bg-blue-500 text-white rounded px-1.5 py-0'
										: 'text-black2white'
								}`}
								onClick={() => handlePageChange(index)}
							>
								{index}
							</button>
						</li>
					))}
					{shouldDisplayLastPage && <li className="page-item disabled">...</li>}
					{shouldDisplayLastPage && (
						<li>
							<button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
						</li>
					)}
				</ul>
			</nav>
		</div>
	);
};

export default PageWrapper;
