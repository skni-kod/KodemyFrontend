import { ApiService } from '@/utils/api/types';
import { SectionResponse } from '@/services/section/types';
import kodemyApi from '@/utils/api';

export default class SectionService extends ApiService {
	public static async getSections() {
		return await kodemyApi.get<SectionResponse>(`/api/sections`).then((res) => res.data);
	}
}
