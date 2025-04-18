import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	eslint: {
		dirs: ['src'],
	},
	rewrites: async () => [
		{
			source: '/api/:path*',
			destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
		},
	],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
