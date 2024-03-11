import Paginator from '@/components/materials/section_page/page_content/Paginator';
import React from 'react';

export default function PaginationBlock({
	pageNumber,
	totalPages,
}: {
	pageNumber: number;
	totalPages: number;
}) {
	return (
		<div className="flex justify-center w-full pt-6">
			<Paginator page={pageNumber} total={totalPages} />
		</div>
	);
}
