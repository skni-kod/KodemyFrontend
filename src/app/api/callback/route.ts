import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from 'axios';
import { NextApiResponse } from 'next';
import { AUTH_PRE_SESSION } from '@/utils/constant';

const redirectInit = { status: HttpStatusCode.PermanentRedirect };

const preSessionCookie = {
	name: AUTH_PRE_SESSION,
	path: '/',
	maxAge: 300,
	sameSite: 'Strict',
};

export async function GET(req: NextRequest, res: NextApiResponse) {
	const baseUrl = req.nextUrl.origin;

	const bearer = req.nextUrl.searchParams.get('bearer');
	const refresh = req.nextUrl.searchParams.get('refresh');
	const error = req.nextUrl.searchParams.get('error');

	if (error) {
		return NextResponse.redirect(baseUrl, redirectInit);
	}

	const authPath = baseUrl + '/auth';

	if (bearer && refresh) {
		const value = btoa(JSON.stringify({ bearer, refresh }));
		const { name, path, maxAge, sameSite } = preSessionCookie;
		const headers: HeadersInit = {
			'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_API_URL}`,
			'Access-Control-Allow-Methods': 'GET',
			'Access-Control-Allow-Credentials': 'true',
			'Set-Cookie': `${name}=${value}; Path=${path}; Max-Age=${maxAge}; SameSite=${sameSite}`,
		};
		return NextResponse.redirect(baseUrl, { ...redirectInit, headers });
	}

	return NextResponse.redirect(authPath, redirectInit);
}
