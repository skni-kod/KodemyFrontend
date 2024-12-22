export interface JwtInfoResponse {
	refresh: string;
	token: string;
}

export interface ProviderLiResponse {
	provider: string;
	authorize: string;
}

export type Auth = {
	id: number;
	username: string;
	role: { id: number; name: string };
};
