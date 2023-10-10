import { Material } from '@/hooks/services/useCategoryService';
import DashboardMaterialBlock from '@/components/dashboard/molecules/DashboardMaterialBlock';

const AdminMaterialBlock = ({ data }: { data: Material }) => {
	return (
		<DashboardMaterialBlock data={data}>
			<button className="w-20 bg-sky-500 hover:bg-blue-700 text-white text-xs 2sm:py-1 py-1 px-1 2sm:px-2 rounded">
				Zatwierdź
			</button>
			<button className="w-20 bg-red-600 hover:bg-red-700 text-white text-xs 2sm:py-1 py-1 px-1 2sm:px-2 rounded">
				Odrzuć
			</button>
		</DashboardMaterialBlock>
	);
};

export default AdminMaterialBlock;
