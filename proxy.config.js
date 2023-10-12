module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`,
			},
		];
	},
};
