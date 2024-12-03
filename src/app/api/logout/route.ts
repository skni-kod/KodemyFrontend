import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from 'axios';
import AuthService from '@/services/auth/authService';

const ACCESS_TOKEN_COOKIE = 'AUTH_CONTEXT';
const REFRESH_TOKEN_COOKIE = 'AUTH_PERSIST';

export function GET(req: NextRequest) {
	const headers: HeadersInit = {
		'Set-Cookie': `${ACCESS_TOKEN_COOKIE}=; Path=/; Max-Age=0;, ${REFRESH_TOKEN_COOKIE}=; Path=/; Max-Age=0;`,
	};

	AuthService.logout();

	return NextResponse.rewrite(req.nextUrl.origin, { status: HttpStatusCode.PermanentRedirect, headers });
}
