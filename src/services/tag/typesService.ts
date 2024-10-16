import { ApiService } from '@/utils/api/types';
import kodemyApi from '@/utils/api';
import { InternalServerErrorApiError } from '@/utils/api/types/apiError';
import Tags from '@/services/tag/types/tags';

export default class TypesService extends ApiService {
	public static async getTags(): Promise<Tags> {
		try {
			return await kodemyApi.get<Tags>(`/api/tags`).then((res) => res.data);
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}
}
