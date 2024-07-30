/** @type {import('next').NextConfig} */

const nextConfig = {
	eslint: {
		dirs: ['src'],
	},
	rewrites: async () => [
		{
			source: '/api/:path*',
			destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
		},
	],
};

export default nextConfig;
