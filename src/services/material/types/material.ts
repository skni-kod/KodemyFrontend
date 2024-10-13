import MaterialStatus from '@/services/material/types/materialStatus';
import MaterialTag from '@/services/material/types/materialTag';
import MaterialType from '@/services/material/types/materialType';

type Material = {
	id: number;
	title: string;
	description: string;
	link: string;
	status: MaterialStatus;
	type: MaterialType;
	tags: MaterialTag[];
	averageGrade: number;
	gradeStats: number[];
	author: {
		id: number;
		username: string;
	};
	createdDate: Date;
};

export default Material;
