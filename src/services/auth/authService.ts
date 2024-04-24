import kodemyApi from '@/utils/api';
import { ApiService } from '@/utils/api/types';
import { JwtInfoResponse, ProviderLiResponse } from '@/services/auth/types';

export default class AuthService extends ApiService {
	public static async refreshJwt(refresh: string, bearerJti: string): Promise<JwtInfoResponse> {
		const params = new URLSearchParams({ refresh, bearerJti });
		return await kodemyApi.get<JwtInfoResponse>(`/api/auth/refresh`, { params }).then((res) => res.data);
	}

	public static async getMe() {
		return await kodemyApi.get('/api/users/me').then((res) => res.data);
	}

	public static async checkAuth() {
		return await kodemyApi.get('/api/oauth2').then((res) => res.data);
	}

	public static async getProviders() {
		return await kodemyApi.get<ProviderLiResponse>('/api/oauth2/providers').then((res) => res.data);
	}
}
