import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from 'axios';
import AuthService from '@/services/auth/authService';

const ACCESS_TOKEN_COOKIE = 'AUTH_CONTEXT';
const REFRESH_TOKEN_COOKIE = 'AUTH_PERSIST';

const accessCookie = `${ACCESS_TOKEN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax;`;
const refreshCookie = `${ACCESS_TOKEN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax;`;

export function GET(req: NextRequest) {
	const headers: HeadersInit = {
		'Set-Cookie': `${accessCookie}, ${refreshCookie}`,
	};

	AuthService.logout();

	return NextResponse.rewrite(req.nextUrl.origin, { status: HttpStatusCode.PermanentRedirect, headers });
}
