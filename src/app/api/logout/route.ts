import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from 'axios';
import { NextApiResponse } from 'next';
import AuthService from '@/services/auth/authService';

const ACCESS_TOKEN_COOKIE = 'AUTH_CONTEXT';
const REFRESH_TOKEN_COOKIE = 'AUTH_PERSIST';

export async function GET(req: NextRequest) {
	const baseUrl = req.nextUrl.origin;

	const headers: HeadersInit = {
		'Set-Cookie': `${ACCESS_TOKEN_COOKIE}=; Path=/; Max-Age=0;, ${REFRESH_TOKEN_COOKIE}=; Path=/; Max-Age=0;`,
	};

	await AuthService.logout();

	return NextResponse.redirect(baseUrl, { status: HttpStatusCode.PermanentRedirect, headers });
}
