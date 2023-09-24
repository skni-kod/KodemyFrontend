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
	...proxyConfig,
};

module.exports = nextConfig;
