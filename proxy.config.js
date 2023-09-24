module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.API_BASE_URL}/api/:path*`,
			},
		];
	},
};