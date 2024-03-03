import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';

export type Category = {
	id: number;
	name: string;
};

export type Section = {
	id: number;
	name: string;
	categories: Category[];
};

export type SectionResponse = Section[];

const useSectionService = () => {
	const getSections = useCallback(async () => {
		try {
			const response = await kodemyAPI.get<Section[]>(`/api/sections`);
			return response.data;
		} catch (e) {}
	}, []);

	return {
		getSections,
	};
};

export default useSectionService;
