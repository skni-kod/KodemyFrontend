import { Auth, JwtInfoResponse, ProviderLiResponse } from '@/services/auth/types';
import kodemyApi from '@/utils/api';
import { ApiService } from '@/utils/api/types';
import { InternalServerErrorApiError } from '@/utils/api/types/apiError';

export default class AuthService extends ApiService {
	public static async refreshJwt(refresh: string, bearerJti: string): Promise<JwtInfoResponse> {
		const params = new URLSearchParams({ refresh, bearerJti });
		return await kodemyApi.get<JwtInfoResponse>(`/api/auth/refresh`, { params }).then((res) => res.data);
	}

	public static async checkAuth() {
		return await kodemyApi.get('/api/oauth2').then((res) => res.data);
	}

	public static async getProviders() {
		return await kodemyApi.get<ProviderLiResponse>('/api/oauth2/providers').then((res) => res.data);
	}

	public static async logout(): Promise<void> {
		try {
			const response = await kodemyApi.post(`/api/auth/logout`);
			return response.data;
		} catch (err) {
			console.error('error', err);
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async getAuth(): Promise<Auth> {
		return await kodemyApi.get('/api/auth').then((res) => res.data);
	}
}
