import { NextRequest } from 'next/server';
// import AuthService from '@/services/auth/authService';

const ACCESS_TOKEN_COOKIE = 'AUTH_CONTEXT';
const REFRESH_TOKEN_COOKIE = 'AUTH_PERSIST';

export async function GET(req: NextRequest) {
	const domain = req.headers.get('host')?.split(':')[0];
	const headers: HeadersInit = new Headers();
	headers.append('Set-Cookie', `${ACCESS_TOKEN_COOKIE}=; Domain=${domain}; Path=/; Max-Age=0; SameSite=Lax; HttpOnly`);
	headers.append('Set-Cookie', `${REFRESH_TOKEN_COOKIE}=; Domain=${domain}; Path=/; Max-Age=0; SameSite=Lax; HttpOnly`);

	//await AuthService.logout();

	const redirectUrl = new URL(req.nextUrl.origin);
	redirectUrl.searchParams.append('logout', '');

	//return NextResponse.redirect(req.nextUrl.origin, { status: HttpStatusCode.PermanentRedirect, headers });
	return Response.json({ message: redirectUrl.toString() });
}
