import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';

export enum MaterialStatus {
	PENDING,
	APPROVED,
	EDITED,
	REJECTED,
	BANNED,
}

export type Material = {
	id: number;
	title: string;
	description: string;
	link: string;
	status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'BANNED' | 'EDITED';
	type: {
		id: number;
		name: string;
	};
	technologies: string[]; // Jeśli "technologies" ma być tablicą ciągów znaków
	averageGrade: number | null;
	creator: {
		id: number;
		username: string;
	};
	createdDate: string; // Jeśli "createdDate" jest zawsze w formacie daty jako string
};

const useMaterialService = () => {
	const getMaterialById = useCallback(async (id: number) => {
		try {
			const response = await kodemyAPI.get(`/api/materials/${id}`);
			return response.data;
		} catch (e) {
			console.log(e);
		}
	}, []);

	return {
		getMaterialById,
	};
};

export default useMaterialService;
