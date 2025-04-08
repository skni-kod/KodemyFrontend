import { CategoryDetailsResponse } from '@/services/category/types';
import kodemyApi from '@/utils/api';
import { ApiService } from '@/utils/api/types';

export default class CategoryService extends ApiService {
	public static async getCategoryDetails(categoryId: number): Promise<CategoryDetailsResponse> {
		return await kodemyApi.get<CategoryDetailsResponse>(`/api/categories/${categoryId}`).then((res) => res.data);
	}
}
