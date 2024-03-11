import SortOrderBtn from '@/components/materials/section_page/page_content/sort_and_result/SortOrderBtn';
import ResultCount from '@/components/materials/section_page/page_content/sort_and_result/ResultCount';

export default function SortAndResultBlock({ resultCount }: { resultCount: number }) {
	return (
		<div className="flex justify-between items-center w-full px-4 pt-5">
			<SortOrderBtn />
			<ResultCount value={resultCount} />
		</div>
	);
}
