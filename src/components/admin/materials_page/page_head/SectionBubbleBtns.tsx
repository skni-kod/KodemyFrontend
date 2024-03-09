import { useSidebarContext } from '@/contexts/SidebarStateContext';
import SectionBubbleBtn from '@/components/admin/materials_page/page_head/SectionBubbleBtn';

export default function SectionBubbleBtns() {
	const { menuData } = useSidebarContext();

	if (!menuData) return null;

	return (
		<div className="flex items-center flex-wrap w-full gap-4 text-xl text-semibold text-center">
			{menuData.map(({ id, name }) => (
				<SectionBubbleBtn key={id} name={name} selected={false} onClick={() => {}} />
			))}
		</div>
	);
}
