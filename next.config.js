const proxyConfig = require('./proxy.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ['src'],
	},
	i18n: {
		locales: ['pl'],
		defaultLocale: 'pl',
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['avatars.githubusercontent.com'],
	},
	...proxyConfig,
};

module.exports = nextConfig;
