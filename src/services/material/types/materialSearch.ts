import MaterialStatus from '@/services/material/types/materialStatus';
import MaterialTag from '@/services/material/types/materialTag';

type MaterialSearch = {
	id: number;
	title: string;
	description: string;
	status: MaterialStatus;
	isActive: boolean;
	avgGrade: number;
	author: {
		id: number;
		username: string;
	};
	createdDate: Date;
	sectionId: number;
	categoryId: number;
	tags: MaterialTag[];
};

export default MaterialSearch;
