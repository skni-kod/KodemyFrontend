import { Tags } from '@/services/tag/types';
import kodemyApi from '@/utils/api';
import { ApiService } from '@/utils/api/types';
import { InternalServerErrorApiError } from '@/utils/api/types/apiError';

export default class TypesService extends ApiService {
	public static async getTags(): Promise<Tags> {
		try {
			return await kodemyApi.get<Tags>(`/api/tags`).then((res) => res.data);
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}
}
